---
title: "Beginner's Guide for Using Claude Code"
date: 2026-04-14
updated:
tags: [claude-code, ai-agents, tutorial]
image: /images/blog/beginners-guide-for-using-claude-code-cover.png
status: published
---
## TL;DR

- The best way to learn Claude Code is to start using it right now. Download it, run `/powerup`, and go.
- Once you're past the first session, work through [Claude How To](https://github.com/luongnv89/claude-howto) for a structured learning path. Focus on slash commands, memory, checkpoints, planning mode, and skills.
- Start every task in planning mode. Every task.
- The [official documentation](https://code.claude.com/docs/en/overview) is worth revisiting after you've used the tool for a while.
- For researchers, check out Alessandro Spina's [Claude Code for Academics](https://github.com/aspi6246/Claude-Code-Presentation/blob/main/Presentations/main.pdf) slides.

## Background

A student asked me how to start using Claude Code.
At that moment, I didn't know where to start.
A lot of the pieces I've written on this blog are about using AI agents effectively.
But they're not very systematic, nor necessarily friendly for beginners.
On the other hand, there are so many tutorials and beginner's guides online.

So here's what I'm going to do: I will provide an opinionated guide on how to use some existing materials to get started with Claude Code.

## Start using it now

AI agents like Claude Code are different from other types of software because, as long as you can talk to them, it should be pretty intuitive to start using them.
The most important step, in my opinion, is to start using it right now.

So if you really want to get started with Claude Code, stop reading, go to [the official website](https://code.claude.com/docs/en/overview), download it, and start using it.
My only suggestion: run the `/powerup` command, which will give you an interactive tutorial on the fundamental features.

Note that Claude Code requires a paid plan, with the entry-level plan costing $20/month.
But I think it's worth the money.

## A systematic learning path

Assuming you've played with Claude Code already and want to learn more, where to start?
I recommend the [Claude How To](https://github.com/luongnv89/claude-howto) tutorial.
I like it because it's comprehensive and presents the knowledge and tips in an easy-to-process way, even for beginners.

The tutorial classifies different Claude Code features by difficulty and provides a learning path.
I don't necessarily agree with the order, so below is my recommendation.

### Slash Commands

Start with [Slash Commands](https://github.com/luongnv89/claude-howto/tree/main/01-slash-commands).
You don't have to remember or understand everything on the page.
Just know that slash commands allow you to do various things.

### Memory

[Memory](https://github.com/luongnv89/claude-howto/tree/main/02-memory) is a core concept for AI agents, and the foundation for all the other features.

All AI agents are powered by LLMs, which unfortunately don't have memory.
For every new conversation, Claude Code needs to include all the important information about you and the project on your behalf.
Memory is a mechanism for storing and managing this important information.

### Checkpoints

[Checkpoints](https://github.com/luongnv89/claude-howto/blob/main/08-checkpoints) are your time machine for when you think you've made a mistake.

### Planning mode

[Planning mode](https://github.com/luongnv89/claude-howto/tree/main/09-advanced-features#planning-mode) is a mode where Claude Code writes no code and performs no actions, only doing research and planning.

To me, planning mode is all about alignment.
You've probably had moments where you asked an LLM to do a task, it did, but in a completely unexpected way.
In planning mode, Claude Code will present the plan to you before executing it, and you'll have a chance to provide feedback for as many turns as needed until the plan aligns with your expectations.

Not sure why the tutorial lists it as an advanced feature, because I think it's pretty fundamental and easy to understand.
In fact, I suggest starting every task in planning mode. Yes, I mean every task.

### Skills

If you find Claude Code doesn't always handle tasks the way you want, [skills](https://github.com/luongnv89/claude-howto/blob/main/03-skills) are what you need.
They help Claude Code learn your preferences, judgment, and workflow.

The tutorial contains a lot of details about the specifications of skills.
But you don't even need to remember them.
Just ask Claude Code to generate or modify your skills.

In my opinion, the features listed above are the most important ones and should be sufficient to get you started.
When you're familiar with the tool and want to explore other features, you can return to the tutorial to learn more.

## The official documentation

Another resource I highly recommend is the [official documentation](https://code.claude.com/docs/en/overview).
Anthropic is pretty good at documenting things and keeping its docs up-to-date.
And for Claude Code, it is the single source of truth.

It can be a little boring to read at first.
But once you've used Claude Code for a while, you'll find the documentation full of useful insights and tips.

## For academics

For researchers, I also highly recommend Alessandro Spina's [Claude Code for Academics](https://github.com/aspi6246/Claude-Code-Presentation/blob/main/Presentations/main.pdf) slides.
They're tailored to research workflows and have some useful tips.
