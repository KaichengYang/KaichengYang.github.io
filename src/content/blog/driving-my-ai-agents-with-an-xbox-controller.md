---
title: Driving My AI Agents with an Xbox Controller
date: 2026-08-22
updated: 2026-08-22
tags: [ai-agents, claude-code, developer-tools, automation, productivity]
image: /images/blog/driving-my-ai-agents-with-an-xbox-controller-cover.png
status: published
---

## TL;DR

- I run several Claude Code agents in `herdr`, and supervising them is a handful of keys pressed a few hundred times a day
- Those keys now live on an Xbox controller sitting next to my keyboard
- Config and install steps are in [my fork of `herdr-gamepad`](https://github.com/yang3kc/herdr-gamepad) if you want to copy it

## What supervising agents actually looks like

I usually have three or four Claude Code sessions running at once inside [`herdr`](https://herdr.dev/).
Very little of my time with them is spent typing.
It's pressing Enter to approve a tool call, Escape to interrupt when the agent is heading the wrong way, arrow keys to pick an option in a dialog, and jumping to whichever session is blocked on me.
That's maybe six distinct actions, repeated all day.

I happen to have an Xbox but no time to play the games anymore. 
So I decided to see if I could make use of the controller for something useful.
It worked really well, and now it has become my favorite way to interact with AI agents.

## The mapping

```
        LB ──────────────┐              ┌────────────── RB
     prev agent          │              │           next agent
        LT  zoom pane                                RT  voice

        ┌──────────┐                        ┌────────┐
        │  D-PAD   │    ⧉ View   ≡ Menu     │   Y    │  next waiting agent
        │ ↑ /menu  │    model    effort     │ X    B │  Tab      Esc
        │ ←compact │        ⊕ Xbox          │   A    │  Return
        │ clear  → │    focus terminal      └────────┘
        │ ↓ quit   │     Share: shift+tab
        └──────────┘     (permission mode)
     ┌──────────┐                    ┌──────────┐
     │ L-STICK  │  ↑↓←→ arrow keys   │ R-STICK  │  ↑↓ scroll
     │  click:  │                    │  click:  │  ←→ focus pane
     │ overview │                    │  (free)  │
     └──────────┘                    └──────────┘
```

| Input | Does |
|---|---|
| **A** / **B** | Return and Escape. Approve, deny, interrupt |
| **X** | Tab |
| **Y** | Jump to the next agent waiting on me |
| **LB** / **RB** | Previous / next agent |
| **LT** | Zoom the focused pane |
| **RT** | Toggle voice dictation |
| **View** / **Menu** | Open Claude Code's `/model` and `/effort` pickers |
| **Share** | Shift+Tab, cycles the permission mode |
| **Xbox** | Bring the terminal running herdr to the front |
| **D-pad** | Types `/`, `/compact`, `/clear`, `/exit` into the input box |
| **Left stick** | Arrow keys, auto-repeating. Click for an overview of every agent |
| **Right stick** | Up and down scroll the scrollback, left and right move pane focus |

## Type, don't submit

My first D-pad layout ran the commands it sent.
Pressing D-pad right fired `/clear` immediately, which is a thumb slip away from wiping a session I cared about.

Now the D-pad types the command into Claude Code's input box and stops there.
`/compact`, `/clear`, and `/exit` sit in the box until I press A to run them, or B to clear them.
D-pad up types a bare `/`, which opens the command menu so I can pick anything else with the left stick.

The two commands that can't hurt anything, `/model` and `/effort`, are genuinely submitted.
That split (harmless commands fire, destructive commands wait for a confirm press) is the single best decision I made all day, and it's the one I'd keep if I rebuilt this from scratch.

## Voice

RT toggles [superwhisper](https://superwhisper.com/).
The full loop for giving an agent a new instruction is: squeeze RT, talk, squeeze RT, superwhisper pastes the transcript into the pane, press A to send.
My hands never touch the keyboard.

## What it doesn't do yet

Rumble is the feature I want most and don't have.
A buzz when any agent becomes blocked would let me stop watching the screen entirely, which is the whole point of a pad like this.

Also, it only works for Claude Code, and the configuration is tailored to my own setup of many other things.

## If you want to try it

This runs on the [`herdr-gamepad`](https://github.com/htlin222/herdr-gamepad) plugin by htlin222.
Out of the box, it couldn't see the D-pad, the triggers, or the Share button, so I forked it and taught it to read the whole controller.

My fork, with the full config and the install steps, is at [`yang3kc/herdr-gamepad`](https://github.com/yang3kc/herdr-gamepad).
The exact setup I described lives in [`examples/xbox-series-claude-code/`](https://github.com/yang3kc/herdr-gamepad/tree/main/examples/xbox-series-claude-code).
It needs macOS, herdr, an Xbox Series X|S pad, and Claude Code in the panes.
