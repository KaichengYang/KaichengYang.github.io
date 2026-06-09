---
title: Sharing Config Between Claude Code and Codex CLI
date: 2026-04-02
tags: [claude-code, codex, ai-agents, developer-tools]
image: /images/blog/sharing-config-between-claude-code-and-codex-cover.png
status: published
updated: 2026-05-27
---
## TL;DR
- Both tools read markdown instructions and support the Agent Skills format
- Symlinks let you maintain one set of configs that both tools consume
- Three symlinks cover project instructions, skills, and global config
- Tool-specific config files (settings.json, config.toml) stay separate

## The Problem

I've been mainly using Claude Code and have built up a lot of configs and skills.
But lately it's been much easier to hit the rate limit.
Since I also have a ChatGPT subscription, I thought I should give Codex a try.

I searched for how to port configs and skills from Claude Code to Codex but couldn't find any good resources.
So I tried it myself.
Turns out it's not that complicated.

Both tools have nearly identical config structures but different file names:

| | Claude Code | Codex (and most other agents) |
|---|---|---|
| Project instructions | `CLAUDE.md` | `AGENTS.md` |
| Skills directory | `.claude/skills/` | `.agents/skills/` |
| Global instructions | `~/.claude/CLAUDE.md` | `~/.codex/AGENTS.md` |

`AGENTS.md` and `.agents/` are the cross-agent open convention — Codex, OpenCode, Cursor, and others all follow it.
Claude Code is the exception that uses its own namespace.
That's worth keeping in mind when you decide which side to use as the source of truth.

The content format is the same: plain markdown.
The skills format is the same: the open [Agent Skills](https://github.com/anthropics/agent-skills) standard.

## First Try

One solution I considered was keeping separate copies so I could adapt them to each tool.
But keeping them synced would quickly become a nightmare.

So I just used symlinks.

## Why Symlinks Work

Both tools read plain Markdown files at startup.
Neither validates that the file is "theirs"---they just read whatever's at the expected path.
Tool-specific directives are ignored by the other tool.

The Agent Skills standard was designed to be tool-agnostic. A `SKILL.md` file in `.claude/skills/my-skill/` behaves identically when Codex reads it from `.agents/skills/my-skill/`. Same file, same format, same behavior.

This means symlinks are all you need. Since `.agents/` is the cross-agent convention, I use it as the source of truth and point Claude Code's paths at it with backward-compat symlinks.

## Potential Issues

One real issue I hit: some skills reference `AskUserQuestion`, a Claude Code-specific tool for structured user prompts. Codex doesn't have it---it uses `request_user_input` instead.

My fix was adding a fallback chain to `AGENTS.md`:
1. Try `AskUserQuestion` (Claude Code)
2. Fall back to `request_user_input` (Codex)
3. If neither is available, output the question as plain text and wait

Since both tools read the same `AGENTS.md`, this one instruction makes skills work on both platforms.
Also, I don't need to update all the skills individually this way.

## The Setup

The setup is simple---three symlinks cover everything:

**1. Project-level instructions**

`AGENTS.md` is the real file. `CLAUDE.md` is a backward-compat symlink that Claude Code follows:

```bash
# From your project root
ln -s AGENTS.md CLAUDE.md
```

Now both `AGENTS.md` and `CLAUDE.md` resolve to the same file. Edit `AGENTS.md`; both tools see the change.

**2. Project-level skills**

`.agents/skills/` is the real directory. `.claude/skills` is a backward-compat symlink:

```bash
# From your project root
# (create .agents/ first if it doesn't exist)
mkdir -p .agents
# move your skills into .agents/skills, then:
ln -s ../.agents/skills .claude/skills
```

Every skill you add to `.agents/skills/` is automatically available to both Codex and Claude Code.

**3. Global instructions**

Keep one source file (e.g. `~/.agents/AGENTS.md` or wherever your dotfiles manager puts it) and point both tools at it:

```bash
ln -s /path/to/agents/AGENTS.md ~/.claude/CLAUDE.md
ln -s /path/to/agents/AGENTS.md ~/.codex/AGENTS.md
```

Your global instructions (model preferences, environment details, behavioral guidelines) now live in one file.

That's it. No build step, no sync script, no CI job. Just three symlinks.

## Gotchas

A couple things to watch for:

- **The `description` field in SKILL.md is required for Codex but optional for Claude Code.** If you're sharing skills, always include it.

- **Tool-specific config files should stay separate.** Claude Code uses `.claude/settings.json` for permissions and tool allowlists. Codex uses `.codex/config.toml` for model selection and approval policies. These have different formats and different semantics, so don't symlink them.

- **Directory structure matters.** `.agents/` is the canonical skills location; `.claude/skills` is a backward-compat symlink into it. Make sure `.agents/` exists before populating it. For global symlinks, ensure `~/.codex/` and `~/.claude/` exist first.

## Bonus

The setup also applies to other agents, such as OpenCode and Cursor.
I think this is because they typically follow the same configuration convention as Codex.