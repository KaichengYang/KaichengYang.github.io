---
title: Fix Your Claude Code Token Reset Time with Scheduled Tasks
date: 2026-04-11
updated: 2026-04-21
tags: [claude-code, productivity, tips]
image: /images/blog/fix-your-claude-code-token-resets-with-scheduled-agents-cover.png
status: published
---

## TL;DR

- Claude Code resets your token limit every 5 hours, but the timer starts from your first interaction, making reset times unpredictable
- Scheduled agents let you anchor the reset cycle to fixed, predictable times each day
- The scheduler uses UTC time---convert to your local timezone
- Use Haiku for the scheduled touch tasks to save tokens

## Background

If you use Claude Code daily, you've probably noticed something annoying about token resets.
Your limit resets every 5 hours, but it appears that the clock starts ticking from your *first interaction* since your last reset.
Depending on when you start working each day, the reset times shift around, which is quite annoying.

There's a simple fix: use Claude Code's scheduled agents to trigger your first interaction at the same time every day.
This locks your 5-hour reset windows into a predictable rhythm you can plan around.

I first saw this idea from [@MinLiBuilds on X](https://x.com/MinLiBuilds/status/2041991980935164315), and after trying it myself, it works like a charm.

## How It Works

You set up a scheduled agent that runs a lightweight task at fixed times throughout the day.
Each run counts as a "first touch" for that reset window, so your 5-hour cycles always start when *you* decide, not whenever you happen to open your terminal.

## Setting It Up

You can use the `/schedule` command in Claude Code, but I found it more straightforward to use the web interface.
Just go to [claude.ai/code/scheduled](https://claude.ai/code/scheduled/) and create the schedule directly from the dashboard using the custom mode.
This gives you a nice visual overview of all your scheduled agents.

Either way, the prompt can be as simple as "say hello."
The point is just to trigger the token counter.

## Watch Out: UTC Time

The custom mode requires a cron expression, and here's the gotcha that tripped me up at first: the scheduler uses **UTC time**, not your local timezone.
You need to do the conversion yourself (or simply ask your agent to do it).

For example, I'm on ET, which is UTC-4 during daylight saving time, and I want your resets anchored to 7am, 12pm, 5pm, and 10pm ET, my cron expression is:

```
5 2,11,16,21 * * *
```

I use the `:05` offset so it doesn't land exactly on the hour.

## Save Tokens: Use Haiku

Since the scheduled task is just a "touch" to anchor the reset timer, there's no reason to burn your Opus or Sonnet tokens on it.
Just set the model to **Haiku** and it does the job.

## Caveat

One way to disrupt this schedule is if you work between 3am and 7am, which happened to me a few times recently.