---
title: "Building better note search for Claude Code, one iteration at a time"
date: 2026-04-05
tags: [claude-code, obsidian, knowledge-management, semantic-search]
image: /images/blog/note-search-in-my-knowledge-base-cover.png
updated: 2026-04-21
status: published
---
## TL;DR

- I built a Claude Code skill that cross-references new papers/articles into my existing notes
- The hardest part: finding which notes are relevant to a new reference
- Three iterations: `grep` → Obsidian CLI → hybrid semantic search (QMD)
- Each iteration reduced tool calls and improved relevance, but introduced new dependencies

## Background
I keep a knowledge base of ~200 markdown notes in Obsidian: project docs, topic notes, meeting notes, reference summaries. When I save a new paper or article, I want to link it to the notes where it's relevant. A note on context engineering should cite that new paper about prompt design. A project doc on agent evaluation should reference the latest benchmark.

Doing this by hand is tedious. You have to remember which notes exist, skim through them, and decide where a new reference fits. So I built a Claude Code skill called `/cross-reference` that automates it: give it a new reference, and it finds candidate notes, lets me pick which ones to update, then adds citations and reference entries.

The most important part was the search. How does an AI agent find the right notes in a collection of 200+ (and growing) files? I went through three iterations, each with different tradeoffs.

## The iterations

### Iteration 1: `Grep`

The first version was the simplest thing that could work. Each reference has tags and a title. So:

1. For each tag in the reference (e.g., `ai-agents`, `context-engineering`), grep the notes directory for that string
2. For 2-3 distinctive keywords from the title, grep again
3. Count how many greps each file appeared in and use it as the relevance score
4. Read the matched files to build a summary for the user

This worked. If a reference was tagged `ai-agents` and a note mentioned `ai-agents` somewhere in its content or frontmatter, `grep` found it. Simple, no dependencies, predictable.

Also, `grep` is always available, and the AI agents already know how to use it.

The problems were practical. Each tag and keyword was a separate `grep` call, so a reference with 4 tags and 2 keywords meant 6 tool calls just for search. The scoring was crude: a file matching 3 out of 6 greps wasn't necessarily more relevant than one matching 1 out of 6.

The biggest issue with `grep` is that it's purely lexical. A note about "LLM-based assistants" wouldn't match a reference tagged "ai-agents" even though they're about the same thing.

### Iteration 2: Obsidian search

I was already running Obsidian with the CLI plugin, so the next version leveraged Obsidian's built-in search index. Instead of N grep calls, I could do 2 Obsidian search commands:

1. One tag search: `(tag:ai-agents OR tag:context-engineering OR tag:llm)` with path exclusions
2. One keyword search: `(kw1 OR kw2 OR kw3)` with the same exclusions

Two calls instead of six. Obsidian's search was also faster since it maintained an index. I added `obsidian backlinks` to check which notes already cited the reference. This used Obsidian's resolved link graph instead of grepping for the filename, which avoided false positives from similarly-named references.

This was a clear improvement in efficiency. But the fundamental limitation remained: it was still keyword matching. If my note used "prompt engineering" and the reference used "context engineering," there was no match. The search found notes that used the same words, not notes about the same concepts.

The other downside was the hard dependency on Obsidian running. If Obsidian wasn't open, the skill couldn't search at all.

### Iteration 3: QMD hybrid search

The current version uses [QMD](https://github.com/tobi/qmd), a local tool that indexes markdown files with both BM25 (keyword) and vector (semantic) search. One command does everything:

```bash
qmd query \
  --intent "paper about AI agent evaluation frameworks" \
  $'lex: ai-agents evaluation benchmark\nvec: comprehensive framework for evaluating autonomous AI agents on real-world tasks' \
  --files -n 20
```

The `lex:` line feeds tags and keywords into BM25, same lexical matching as before. The `vec:` line feeds the reference summary into semantic search, finding conceptually related notes even when the wording differs. `--intent` steers the reranker toward the reference's topic. Fusion scoring combines both signals, and the reranker produces a single ranked list.

One tool call. No manual scoring logic. And semantic search bridges the vocabulary gap that `grep` and Obsidian search couldn't.

I kept `obsidian backlinks` for the already-cited check, since it's the most reliable way to query Obsidian's link graph. But search itself no longer depends on Obsidian being open.

The tradeoff is maintenance. QMD needs two things kept up to date: the BM25 index (updated via `qmd update`) and the vector embeddings (refreshed via `qmd embed`). If a note changes and the index is stale, search results degrade silently. There's no error, just worse rankings. I automated the BM25 side with a git post-commit hook that runs `qmd update` after every commit. Embeddings are more expensive, since they require an API call to an embedding model for every changed document, so I run `qmd embed` daily with a cron job.

There are other costs too. The embedding model itself is a dependency: if the API is down or the model changes, embeddings need to be regenerated. The index files live on disk and grow with the collection. And debugging search quality is harder. With `grep`, you can reason about why a result did or didn't appear. With hybrid search, the answer involves BM25 scores, cosine similarity, fusion weights, and reranker behavior. When a relevant note doesn't surface, it's not always obvious which component dropped it.

### The lessons

I haven't systematically benchmarked the three approaches, but my vibe-checking suggests each iteration is better than the previous one. As the knowledge base grows, any reasoning over the docs (including cross-referencing) will require high-quality search and retrieval. Semantic search is a must. So I'm sticking with QMD for now, despite the overhead, and will keep exploring better solutions. 

### Update on 2026-04-21

I'm still using QMD, but have moved away from the cron job approach to a pre-tool-use hook approach.

**Why cron was the wrong tool.** Knowledge-base edits happen in bursts: I write a new note, then immediately search for related notes to cross-reference. A cron job runs on a wall-clock schedule that is entirely uncorrelated with those bursts, so the index is always stale at exactly the moment it matters. Running `qmd embed` hourly or even every 15 minutes doesn't fix the race.

**The fix: just-in-time refresh with a `PreToolUse` hook.** Claude Code lets you run a shell script before any tool call, gated by a matcher. That's the right primitive here: instead of refreshing on a schedule, refresh the index right before the search command that needs it. The general pattern is useful beyond QMD — any pre-flight work like index maintenance, cache warming, or auth validation can be wired this way without relying on a scheduler.

The hook lives in `.claude/settings.json`:

```json
{
  "hooks": {
    "PreToolUse": [
      {
        "matcher": "Bash",
        "hooks": [
          {
            "type": "command",
            "if": "Bash(qmd *)",
            "command": "$CLAUDE_PROJECT_DIR/scripts/qmd-freshen.sh",
            "timeout": 60000
          }
        ]
      }
    ]
  }
}
```

`matcher: "Bash"` fires on any Bash tool call; the `if: "Bash(qmd *)"` gate narrows it to commands that start with `qmd`, so the hook only runs when a QMD command is about to execute. `$CLAUDE_PROJECT_DIR` makes the path portable. `timeout` is in **milliseconds** — `60000` = 60 seconds.

**The same hook in Codex CLI.** The same script ports to Codex with two pieces of config. First, enable the experimental hooks feature in `~/.codex/config.toml`:

```toml
[features]
codex_hooks = true
```

Then add a project-local `.codex/hooks.json` next to `.claude/settings.json`:

```json
{
  "hooks": {
    "PreToolUse": [
      {
        "matcher": "Bash",
        "hooks": [
          {
            "type": "command",
            "command": "/absolute/path/to/scripts/qmd-freshen.sh",
            "timeout": 60,
            "statusMessage": "Freshening QMD index"
          }
        ]
      }
    ]
  }
}
```

Two gotchas if you're porting a Claude hook to Codex:

- **No `if:` gate.** Codex's `PreToolUse` matcher currently keys only on tool name (`Bash`), not on the command inside it — there's no `if: "Bash(qmd *)"` equivalent. Every Bash call fires the hook, so the script has to self-filter: exit 0 fast unless the command looks like a `qmd` invocation.
- **Timeout units differ.** Claude's `timeout` is milliseconds (`60000`); Codex's is seconds (`60`). Copy-pasting `60000` into Codex config will silently give you a ~16-hour timeout.

**What the freshen script does** (one script, two assistants):

- Reads the pending command from hook stdin (`.tool_input.command`) and normalizes direct and full-path `qmd` invocations.
- Self-filters maintenance subcommands (`status`, `update`, `embed`, `cleanup`, …) so those calls don't recurse, and no-ops on any non-`qmd` Bash command — the guard Codex needs since it can't use `if:`.
- Short-circuits with a marker file if a refresh ran within the last 10 minutes. Without this, every search in a session would re-trigger a no-op `qmd update`.
- Checks `qmd status` for pending embeddings and runs `qmd embed` if any are queued.
- Checks the index age; runs `qmd update` if it exceeds the staleness threshold, then runs `qmd embed` if the update reports "need vectors".
- Logs everything to `.git/hooks/qmd-freshen.log` for debugging. You can choose a different path for the log file, but it's critical for debugging.

The first `qmd` call after a batch of edits pays the refresh cost inline (a few seconds for `update`, longer for `embed`); every subsequent call within the 10-minute window is free — a better tradeoff than either stale-cron results or paying embedding cost on every search.

The git `post-commit` hook that runs `qmd update` is still in place so committed changes get indexed even outside an agent session. The old cron entry is paused rather than deleted, in case the hook approach ever needs a fallback.