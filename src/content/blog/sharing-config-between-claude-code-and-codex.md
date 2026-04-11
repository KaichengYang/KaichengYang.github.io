---
title: Sharing Config Between Claude Code and Codex CLI
date: 2026-04-02
tags: [claude-code, codex, ai-agents, developer-tools]
image: /images/blog/sharing-config-between-claude-code-and-codex-cover.png
status: published
updated: 2026-04-11
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

| | Claude Code | Codex |
|---|---|---|
| Project instructions | `CLAUDE.md` | `AGENTS.md` |
| Skills directory | `.claude/skills/` | `.agents/skills/` |
| Global instructions | `~/.claude/CLAUDE.md` | `~/.codex/AGENTS.md` |

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

This means symlinks are all you need. Point the Codex paths at the Claude Code paths (or vice versa), and both tools read from the same source of truth.

## Potential Issues

One real issue I hit: some skills reference `AskUserQuestion`, a Claude Code-specific tool for structured user prompts. Codex doesn't have it---it uses `request_user_input` instead.

My fix was adding a fallback chain to `CLAUDE.md`:
1. Try `AskUserQuestion` (Claude Code)
2. Fall back to `request_user_input` (Codex)
3. If neither is available, output the question as plain text and wait

Since both tools read the same `CLAUDE.md`, this one instruction makes skills work on both platforms.
Also, I don't need to update all the skills individually this way.

## The Setup

The setup is simple---three symlinks cover everything:

**1. Project-level instructions**

```bash
# From your project root
ln -s CLAUDE.md AGENTS.md
```

Now both `CLAUDE.md` and `AGENTS.md` resolve to the same file. Edit one, both tools see the change.

**2. Project-level skills**

```bash
# From your project root
ln -s ../.claude/skills .agents/skills
```

This points `.agents/skills/` at `.claude/skills/`. Every skill you create for Claude Code is automatically available to Codex.

**3. Global instructions**

```bash
ln -s ~/.claude/CLAUDE.md ~/.codex/AGENTS.md
```

Your global instructions (model preferences, environment details, behavioral guidelines) now live in one file.

That's it. No build step, no sync script, no CI job. Just three symlinks.

## Gotchas

A couple things to watch for:

- **The `description` field in SKILL.md is required for Codex but optional for Claude Code.** If you're sharing skills, always include it.

- **Tool-specific config files should stay separate.** Claude Code uses `.claude/settings.json` for permissions and tool allowlists. Codex uses `.codex/config.toml` for model selection and approval policies. These have different formats and different semantics, so don't symlink them.

- **Directory structure matters.** Codex now uses `.agents/` for skills (while config like `config.toml` stays in `.codex/`). Make sure `.agents/` exists before creating the skills symlink inside it. And if you're symlinking globally, ensure `~/.codex/` exists too.