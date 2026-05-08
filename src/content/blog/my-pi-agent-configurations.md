---
title: My Pi-agent Configurations
date: 2026-05-07
updated: 2026-05-08
tags:
  - pi
  - ai-agents
  - coding-agents
image: /images/blog/my-pi-agent-configurations-cover.png
status: published
---
## TL;DR

- [Pi](https://pi.dev/) is a minimal coding agent harness with only 4 tools (Read, Write, Edit, Bash) and the shortest system prompt of any known coding agent.
- You customize it by installing packages, which is one of the things I like most about it.
- My default setup: gpt-5.5 via openai-codex with thinking off, plus a small set of packages for MCP, subagents, web access, plan review, guardrails, code previews, and structured prompts.
- The result is feature parity with Claude Code and Codex, so switching between harnesses is frictionless.

## Background

[Pi](https://pi.dev/) is a minimal coding agent harness.
It only ships with a small core.
There are 4 tools (Read, Write, Edit, Bash) and the shortest system prompt of any known coding agent.
But you can add what you need.
If you want to learn more about the philosophy behind the agent, I highly recommend reading the blog post [What I learned building an opinionated and minimal coding agent](https://mariozechner.at/posts/2025-11-30-pi-coding-agent/) by Pi's creator, Mario Zechner.

In my post [Alternatives to Claude Code](https://www.kaichengyang.me/blog/alternatives-to-claude-code), I mentioned that Pi is my new favorite.
One reason is the freedom to customize it.
Below, I'll share the setup I've settled on: lightweight, but covering the gaps that matter.

## Model choice

Pi supports all kinds of models available on the market.
My default model is OpenAI's gpt-5.5, accessed through my ChatGPT subscription.
I keep thinking off by default.
After using it for a while, I find gpt-5.5 with no thinking is plenty capable for day-to-day agentic work.
The benefit is obvious: low latency and lower token cost.
I only turn thinking on when I'm dealing with tricky issues.

## Installed Packages & Extensions

These are the packages and extensions I've installed on top of Pi's core:

- **[`pi-mcp-adapter`](https://pi.dev/packages/pi-mcp-adapter)** --- connects Pi to MCP-style tools. Pi doesn't support MCP by default, so this is essential if you have existing MCP servers you want Pi to call.
- **[`pi-subagents`](https://pi.dev/packages/pi-subagents)** --- lets Pi delegate work to isolated sub-contexts or run tasks in parallel. I use this for decomposing larger coding tasks and getting independent review passes.
- **[`pi-web-access`](https://pi.dev/packages/pi-web-access)** --- gives Pi the ability to look things up on the web. Useful for research-backed answers without leaving the agent session.
- **[`@plannotator/pi-extension`](https://pi.dev/packages/@plannotator/pi-extension)** --- adds a visual plan review loop: Pi drafts a plan, I annotate it, and it only proceeds after approval. Pi doesn't have a plan mode out of the box, so the plannotator comes in handy. I liked it so much, I installed it for Claude Code and Codex, too.
- **[`pi-powerline-footer`](https://pi.dev/packages/pi-powerline-footer)** --- a customized statusline UI. Minor quality-of-life, but I find the persistent footer useful when navigating long sessions.
- **[`@aliou/pi-guardrails`](https://pi.dev/packages/@aliou/pi-guardrails)** --- a safety layer for path access and permission gating. Pi doesn't have a built-in permission system, and this package fills that gap.
- **[`pi-code-previews`](https://pi.dev/packages/pi-code-previews)** --- syntax-highlighted previews for built-in tool calls like `bash`, `read`, `write`, and `edit`. Makes diffs and tool output easier to scan, and can warn about risky shell commands or secret-looking output.
- **[`@juicesharp/rpiv-ask-user-question`](https://pi.dev/packages/@juicesharp/rpiv-ask-user-question)** --- structured question prompt support. This package mimics the interface of Claude Code's AskUserQuestion, which I like a lot.

You can browse more packages at https://pi.dev/packages.

With those packages, I get the same features Claude Code and Codex have been providing.
Switching between harnesses is now frictionless.

## Customized Packages & Extensions

Another great thing about Pi is that it knows how to create packages and extensions for it; all you need to do is ask.

For example, I have an extension to automatically update my `qmd` embedding indexes as described in my [earlier post](https://www.kaichengyang.me/blog/note-search-in-my-knowledge-base).