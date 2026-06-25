---
title: My AI Agent Stack
date: 2026-06-05
updated: 2026-06-13
tags: [ai-agents, claude-code, developer-tools, productivity]
image: /images/blog/apps-and-configs-i-use-to-manage-ai-agents-cover.png
status: published
---

## TL;DR

- Claude Code is my primary agent; I also use Codex and Pi, all from the terminal
- For managing multiple agents, I use `herdr` (a tmux-style dashboard) and sometimes Vibe Island (Mac notch status)
- Zed for code editing, Obsidian for Markdown
- For CLI tools: Warp as terminal, Yazi for file management, lazygit for git

After a few months of working with various AI agents and trying different tools, my setup has become relatively stable.
I'm sharing it here.
This post will likely be updated over time.

## AI agents

Claude Code is still my daily driver and go-to (I have a [Beginner's Guide for Using Claude Code](https://www.kaichengyang.me/blog/beginners-guide-for-using-claude-code) if you're interested in getting started).

Other than Claude Code, I also use Codex and Pi (see my posts [Alternatives to Claude Code](https://www.kaichengyang.me/blog/alternatives-to-claude-code) and [My Pi-agent Configurations](https://www.kaichengyang.me/blog/my-pi-agent-configurations) for more).

Although some agents like Codex have GUI apps, and I've heard good things about them, I only use these agents in the terminal.
The main reason is that the terminal gives me a unified interface for all agents, and there are some nice apps for monitoring and managing them (more on this below).

## Managing multiple agents

I often find myself running multiple agents at the same time---multiple Claude Code instances, or Claude Code + Codex + Pi.
They're scattered across different terminal windows, and I have to jump back and forth to check each one's status (idle, working, blocked, done) and progress.

There are many solutions to this problem now, and countless apps aiming to solve it.
After trying many, I've settled on two.

[Vibe Island](https://vibeisland.app/) turns the notch of your Mac into a hub that shows the status of all running agents and lets you interact with them.
The one downside is that it can be disruptive: notifications pop up every time an agent needs input.
That's not necessarily the app's fault so much as a reflection of what it's like to work with multiple AI agents asynchronously.
It's a paid app, but it's well-designed and actively maintained, so I think it's worth it.
If you don't want to pay for it, there is an open-source alternative called [Open Island](https://github.com/Octane0411/open-vibe-island). Note that I haven't tried it myself, so I'm not sure how well it works.

[`herdr`](https://herdr.dev/) is a tmux-style app for running, monitoring, and managing multiple agents.
It lives in the terminal, so you can run it locally or on a remote server.
It supports mouse operations but also allows you to control almost everything with keyboard shortcuts.
What I love most is the left panel that lists all your running agents alongside their status. It allows you to quickly survey the situation and jump to whoever needs attention.

`herdr` also ships an [agent skill](https://github.com/ogulcancelik/herdr/blob/master/SKILL.md) that lets agents control `herdr` from within it. Once installed, AI agents can split panes, run commands in them, read their output, wait for specific output patterns, and coordinate with other agents running in sibling panes. In practice, this means the agents can spin up a dev server in a new pane, wait until it's ready, run tests against it, and clean up — all without leaving its own pane or asking you to do it manually.

If you want to learn more about `herdr`, [this video](https://www.youtube.com/watch?v=27B50lXinWM) will give you a very good overview.

Currently, `herdr` is my default interface.
I sometimes layer in Vibe Island when I really want to stay on top of things.
When the tasks are not urgent, and I want to focus, I would turn off Vibe Island and just check `herdr` when I get a chance.

## Text editor

I'm writing things (code and text) less and less as AI agents take over more of that work.
But I still need to review what the agents produce and occasionally make edits.

For code, I'm using [Zed](https://zed.dev/) now.
I used to use [Cursor](https://cursor.com) as my daily driver, but they kept pushing their agent interface when all I wanted was a nice text editor, and it became annoying.
Cursor is also a VSCode fork, which brings performance issues.
Zed, on the other hand, is snappy and uses less RAM.
Its extension ecosystem has grown a lot (though it still lags behind VSCode), and I find it good enough for daily use.

For Markdown, I'm using [Obsidian](https://obsidian.md/).
The main reasons: it makes jumping around via wiki links easy, and it renders Markdown better.
That said, I have no issues editing Markdown files in Zed.

## Voice input

The voice transcription models are good enough now that I can actually rely on them for sustained, consistent input.
And talking to agents is the most common scenario now.

There are many good apps out there right now, and all of them are pretty capable.
Personally, I use [SuperWhisper](https://superwhisper.com/), but it's a paid app.
There are also open source alternatives such as [OpenSuperWhisper](https://github.com/starmel/OpenSuperWhisper).

Another suggestion is to get a decent microphone.
It significantly increases the quality of the transcription.

## Usage monitor

Here are three tools I often use:

- [ccusage](https://ccusage.com/): A CLI tool to track the token usage and cost of different agents; great choice if you want to integrate it in other tools
- [OpenUsage](https://www.openusage.ai/): a Mac menu bar app to track the usage of different subscriptions, as well as the token usage and cost; my favorite now
- [AgentView](https://www.agentsview.io/): A desktop app to analyze and visualize all previous agent sessions; great if you want to dig into your history

All three are free.

## Terminal and CLI tools

Since `herdr` is my main interface for AI agents now, the choice of terminal app matters a lot less.

That said, I'm currently using [Warp](https://www.warp.dev/).
Although it has built-in agent features, I don't really use them.
What I like about Warp is that you don't need to spend a lot of time configuring it to get a nice-looking terminal.
For instance, I tried `herdr` in [ghostty](https://ghostty.org/) as well---the fonts and layout were just off.
It's also easy to share Warp's config files across machines.
That said, there's nothing unique about Warp.

For file management, I use [Yazi](https://yazi-rs.github.io/).
For git, I use [lazygit](https://github.com/jesseduffield/lazygit).
Both are CLI tools that can be operated without my hands leaving the keyboard.
I have shortcuts in `herdr` to open Yazi and lazygit, which is really handy.