---
title: "Vibe Researching as a Team: Challenges and Possible Solutions"
date: 2026-04-05
updated:
tags: [ai, collaboration, research, vibe-coding]
status: published
---

## TL;DR

- The bottleneck in research collaboration has shifted from production to verification
- AI-assisted teams face new challenges: content overload, trust erosion, and mental model divergence
- Traditional tools like shared Overleaf docs may not fit an AI-heavy workflow
- Teams need new norms, not just new tools, to collaborate effectively with AI

## Background

Recently, my collaborators and I have started to use AI heavily in our research workflows, including drafting the manuscripts.
We would have a shared Overleaf document, just like we used to do before.
But instead of typing everything manually, we would use AI agents to draft the content.

It didn't take long for things to feel different.
I'd open the project and find pages of new content.
I'd do the same and dump large chunks of content into the document.

This wasn't a problem with my collaborator.
It was a problem with the workflow.
We had entered the era of vibe researching---and we hadn't updated our collaboration norms to match.

## The real shift: production is cheap, verification is expensive

For most of the history of academic collaboration, the bottleneck was production.
Writing was slow.
Producing a few paragraphs of decent prose took time and effort.
The act of writing was itself a weak form of quality control---if someone wrote three pages, they had probably thought about it.

AI has flipped this: production is now nearly free, and anyone on the team can generate pages of content in minutes.
So the new bottleneck is verification: reading, checking, understanding, and trusting what's in the shared document.

## What breaks

### Content overload

Managing the output of your own AI sessions is already hard.
Now add everyone else's.
The cognitive load compounds because you need to understand not just what was written, but the intent and reasoning behind it.

### Trust erosion

In traditional collaboration, effort was a signal.
If someone added a section, you could assume they had engaged with the material.
But the assumption breaks with AI.
A polished paragraph might represent an hour of careful thought or five seconds of prompting.
When you can't tell the difference, you start to distrust everything.
Once people stop reading each other's contributions carefully, collaboration is effectively dead.

### Mental model divergence

When everyone is producing content faster than anyone can read it, people lose track of where the project actually stands.
Each person has a slightly different mental model of the paper's argument, the key findings, the open questions.
These gaps widen silently until someone writes a section that contradicts another, compounding the friction.
In other words, we have a new kind of alignment problem.

## What might help

### Keep track of everything

It has never been more important to document your process.
Ideally the thinking, the decisions, the input to the AI agents, and the output.
Or at least use Git to track as much as possible.

### Make verification status explicit

Teams could adopt a simple convention: every section or contribution is tagged as "draft" (AI-assisted, not yet verified), "reviewed" (the author has verified it), or "accepted" (a collaborator has reviewed it).
This way, when you open the shared document, you immediately know what you can trust and what needs attention.

### Use AI to manage the reading burden

If AI created the content overload, AI can help manage it too.
Use AI to summarize what changed since your last session, flag potential contradictions, or highlight sections that need your domain expertise.
The goal isn't to have AI verify research. It's to help you triage so you spend your verification effort where it matters most.

### Use AI to perform some of the verification

Some verification tasks can and should be delegated to AI agents.
For instance, my advisor YY Ahn has developed [AI agent skills](https://github.com/yy/claude-scholar) for this.
The repo includes skills like `check-refs`, which verifies citation references in LaTeX papers against academic databases, and `critique-manuscript`, which does a structured self-review of your manuscript.

### Establish ground rules early

Teams need to have an explicit conversation about AI norms before they start collaborating.
What's the expected level of verification before adding content to the shared draft?
How do we signal what's been checked and what hasn't?
What's the team's tolerance for rough AI-generated content versus polished, human-verified text?

## The AI literacy prerequisite

All of these solutions share a common requirement: everyone on the team needs a similar level of AI literacy.

If one team member can't effectively use AI to keep up with the pace of reading and verification, they become a bottleneck.
Not because they're slow at writing, but because they're slow at processing everyone else's AI-assisted output.

And worse than being slow is being irresponsible.
A team member who dumps unverified AI-generated content into a shared draft doesn't just add noise---they actively erode the trust that makes collaboration possible.
When the other team members can't distinguish between carefully verified contributions and careless AI dumps, the whole system breaks down.

## We're all figuring this out

I don't think there's a settled answer yet.
The tools and norms for AI-assisted individual work are still evolving, and the team dimension adds a whole new layer of complexity.
The old workflow---everyone types into the same document and it somehow comes together---doesn't scale when AI multiplies everyone's output by 10x.
This is why some people argue we should remove the human factor from the research process entirely.
Or we could imagine a new kind of research team where one capable person manages an army of AI agents.

In any case, I would love to hear your thoughts on this.
