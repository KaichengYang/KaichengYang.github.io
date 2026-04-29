---
title: Alternatives to Claude Code
date: 2026-04-29
updated:
tags: [claude-code, codex, ai-agents, developer-tools]
image: /images/blog/alternatives-to-claude-code-cover.png
status: published
---

## TL;DR
- Anthropic keeps cutting subscription credits and stability has slipped, so I've been exploring alternatives.
- "Claude Code is good" actually means two things: the underlying Claude model is strong, and the harness itself is top-tier. Both now have decent alternatives.
- Models: GPT-5.5 is Opus-tier; Kimi K2.6, MiniMax M2.7, and DeepSeek-V4 Pro are Sonnet-tier.
- Credits: ChatGPT subscriptions stretch further than Anthropic's; OpenRouter is great for cheap open-weight models.
- Harnesses: Claude Code is still the best in class, but Pi-agent is my new favorite for being minimal and easy to extend.

## Background

I've been writing a lot of blog posts about Claude Code here.
But Anthropic keeps reducing the credits allocated to the Pro/Max subscriptions, making it harder and harder to rely on Claude Code for large amounts of work every day.
Their service has also been less stable recently.
All this has pushed me to explore alternatives, and it turns out things are pretty good outside the Anthropic ecosystem.

When we talk about Claude Code being good, we're really talking about two separate things.
First, the Claude model underlying it is very strong at agentic tasks, coding, and writing.
Second, Claude Code itself as an agentic harness is also top-of-the-line.

So I'll focus on those two categories when discussing the alternatives I've tried.

## Models

### Performance

There are many decent alternatives to Claude models now, both closed-source and open-weight.

Here's how I personally rank them:

- **Opus tier**: GPT-5.5 --- I think it's on par with Opus 4.7 on agentic tasks and coding, though I prefer Opus for writing.
- **Sonnet tier**: Kimi K2.6, MiniMax M2.7, DeepSeek-V4 Pro --- sometimes not as reliable as Sonnet 4.6, but I can't tell if that's the harness or the model. They're all very capable, and some are quite cheap.

I haven't played with anything else.
In my opinion, we should avoid models below the Sonnet tier.

### Where to buy credits

The Anthropic subscriptions have become ridiculous, and you can burn through the 5-hour limit within minutes, especially on Opus 4.7.
Here are some alternatives I've tried:

- **ChatGPT subscription** --- in my case, I can finish 3--6x more tasks than the Anthropic subscriptions for the same price. Note that this might change, since OpenAI is apparently still subsidizing subscriptions to gain market share.
- **API credits from OpenAI and Anthropic** --- very expensive to run their frontier models directly, so I don't recommend this.
- **API credits from OpenRouter** --- really nice, because it lets you use all kinds of models, and it's easy to switch within harnesses that support multiple models. Some of the open-weight models are really cheap, too.
- **Subscriptions from the companies behind the open-weight models** --- for instance, [MiniMax](https://platform.minimax.io/docs/guides/pricing-token-plan) and [Kimi](https://www.kimi.com/code) both have subscription plans similar to Anthropic's and OpenAI's. I haven't tried these, but I hear they're pretty generous.

## Harnesses

When it comes to AI agents, the harness is the other important piece.

### Claude Code

I still think Claude Code is the best harness in its class.
And the combination of Claude Code with Claude models is even better, since Anthropic has extensively optimized Claude Code for their models.

However, Claude Code is not tied to the Claude models, and you can swap them in.
At the same time, models like Kimi have been optimized specifically for Claude Code.

If you want to try different models with Claude Code, I suggest using [cc-switch](https://github.com/farion1231/cc-switch).

### Codex

Codex is a decent harness, though definitely not my favorite.
It lacks some of the quality-of-life features.
It's also harder to customize using hooks.

I believe you can use cc-switch to swap the underlying model here, too.

Note that by Codex, I mean Codex CLI here.
The Codex app, with its UI and everything, has some other great features, such as computer use.
It also includes an image-generation skill out of the box, so I sometimes use it to generate figures. 

### OpenCode

As the name suggests, [OpenCode](https://opencode.ai/) is an open-source agent harness.
It has a nice TUI and almost all the features you'd have from Claude Code and Codex.
It also supports a wide range of models.
You can even use your ChatGPT Plus/Pro subscription in it.
However, I don't think you can use your Claude Pro/Max subscription anymore.

Personally, I just don't like it that much.
The interface isn't to my taste, and I've run into some minor but annoying bugs.

### Pi-agent

[Pi-agent](https://pi.dev/) is my new favorite.

It's a minimal terminal coding harness with only basic agentic functions out of the box.
But it's amazing how powerful it becomes when paired with a top-tier model.
It even makes me wonder if the harness isn't that important after all.

Although Pi-agent only provides basic functionality, you can extend it freely with extensions and skills others have shared.
You can also build your own extensions, which is much easier than in Claude Code and especially Codex.
This is another reason that I like it.

Like OpenCode, it supports various providers and models, including the ChatGPT Plus/Pro subscription.
I prefer it over Codex now.

Fun fact: Pi-agent is the engine behind OpenClaw.

## Which one to choose?

If you're not sure what combination to use, here's my current take.

- If you can afford it, Claude Code with the Max subscription is still the safest choice (the Pro subscription is barely usable these days). You get to use the best model and harness.
- A nice alternative is Codex with ChatGPT Plus/Pro. Even the Plus tier lets you do some serious work. The Codex App is pretty good as well. For CLI, I prefer Pi-agent with GPT-5.5 now these days.
- If $20/month is still too much, consider exploring some of the open-weight models and plans. You can still use them in a good harness.

You can also use different stacks at the same time to avoid overreliance on a single provider.
I have a [post](https://www.kaichengyang.me/blog/sharing-config-between-claude-code-and-codex) on how to sync the configuration.
Note that it's easy to sync the `agent.md` file and skills, but configuration relying on hooks can be very tricky. 