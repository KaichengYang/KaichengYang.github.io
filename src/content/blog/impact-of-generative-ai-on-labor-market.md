---
title: The Impact of Generative AI on the Labor Market
date: 2026-04-12
updated:
tags: [ai, labor-market, automation, research]
image: /images/blog/impact-of-generative-ai-on-labor-market-cover.png
status: published
---

## TL;DR

- The binding constraint on AI automation is verification, not execution.
- Some tasks are valuable precisely because a human performs them (human constitutiveness).
- Strongly bundled jobs resist AI disruption because verifying one task requires doing the adjacent task yourself.
- The verification threshold keeps shifting. Invest in verification skills and the human-constitutive parts of your role.

## Background

I'm not sure if you feel the same way.
But the more I use AI agents, the more anxious I become.
I guess one of the reasons is that I have started to become uncertain about my own career and my own job security.

So I looked into research on the impact of Generative AI on the job market.
There is some early evidence that AI is affecting different professions.
However, this is not what I want to focus on now.
Instead, I want to discuss a framework to help us understand the impact of AI on different tasks and jobs, which builds on two core questions.

## How hard is it to verify AI output?

At least in the knowledge work realm, if you ask, "can AI do it?"
The answer is almost always "yes," given today's state of the art.
So a more meaningful question is "can AI do it right?" or "can you tell if AI did it right?"
Verification is the key here.

[Catalini, Hui & Wu (2026)](#ref-catalini-2026) model the AI transition as a collision between two cost curves: an exponentially declining **cost to automate** and a biologically bounded **cost to verify**.
As AI drives execution costs toward zero, the binding constraint shifts from production to verification.

Verification can be done automatically in some contexts, and this is where AI shines.
For instance, verification is relatively objective in software engineering: the program either runs or fails, and the error messages will give you hints on the root of the issue. 
It explains why coding agents are the most developed use case so far.

But things start to get tricky when verification relies on human judgement, which requires what [Zhang (2026)](#ref-zhang-2026) describes as the tacit knowledge, or taste.
A senior researcher's field intuition matters not because AI can't generate research questions (it can, all day), but because without that intuition, you can't tell whether a generated question is genuinely novel, important, and feasible.
Tacit knowledge is the verification instrument.

This gives us a three-tier structure along the **verification tractability** dimension:

1. **Below the verification threshold.** Output is trivially checkable---did the code run, does the number match, is the citation real? AI substitutes cleanly.
2. **At the verification threshold.** Output looks plausible but may not be correct. The bottleneck is verification, and tacit knowledge is what makes verification possible.
3. **Above the verification threshold.** Not just hard to verify---the criteria for verification themselves require tacit knowledge. You can't write a rubric for "is this research question paradigm-shifting?" the way you can for "is this regression correctly specified?" Tacit knowledge does double duty here: defining what counts as good and assessing whether the output meets that standard.

## Does it matter that a human did it?

In addition to verification tractability, there is another independent dimension: does the task's value depend on a human having performed it?

Some tasks are **output-defined** where only the result matters.
Nobody cares whether a human or an AI designed the optimal supply chain routing, as long as it works.
Other tasks are **process-defined** where who does it and how is intrinsic to the value.
Take drafting recommendation letters as an example.
AI can produce great letters, but the entire point is that a person who knows you is vouching for you, putting their reputation on the line.
The output is a vehicle for a social act that an AI cannot perform, regardless of output quality.

I think of this as **human constitutiveness**: the degree to which a task's value is constituted by human involvement, not merely produced by it.
Crossing it with verification tractability gives a framework to classify different types of tasks:

| | Output-defined | Process-defined |
|---|---|---|
| **Easy to verify** | Routine coding, data entry, translation (full AI substitution) | Recommendation letters, wedding officiations, a coach's speech (the output is checkable, but the value is that a human chose to do it) |
| **Hard to verify** | Complex financial modeling, advanced legal research, research methodology (the verification bottleneck zone) | Therapy, mentorship, leadership under uncertainty (both epistemically hard to verify and socially constituted by human presence) |
| **Criteria undefined** | Paradigm-shifting theory, novel research questions (only experts can articulate and determine what "good" means) | Moral judgment, bearing witness, accountability in life-or-death decisions such as a judge sentencing someone, a commander ordering troops into danger |

There's empirical support for this pattern.
[Freund & Mann (2025)](#ref-freund-2025) build a structural model of how AI reshapes jobs from the inside and estimate which skills become more or less valuable.
Their findings show that AI raises the return to social and interpersonal skills while lowering the return to analytical skills.
When AI absorbs the output-defined work, what remains is the part where human performance is the product and what the human can uniquely contribute.

## Jobs are not bags of tasks

So far we've classified individual tasks.
But jobs bundle multiple tasks together, and that bundling matters.

[Garicano, Li & Wu (2026)](#ref-garicano-2026) argue that AI's impact depends not just on which tasks AI can do, but on whether those tasks can be cleanly separated from the rest of a job.
Their key concept is bundle strength, i.e., the coordination cost of unbundling.

In a strongly bundled job (a doctor who diagnoses and communicates with the patient), peeling off the codifiable part destroys value because the tasks are tightly integrated.
In a weakly bundled job (a junior developer whose coding tasks are loosely coupled to the rest of the team's work), AI can absorb the codifiable tasks and the human role shrinks.

This connects to verification in a direct way: one major source of coordination cost is verification cost.
When a lawyer drafts a brief and exercises strategic judgment, you can't easily unbundle those tasks partly because verifying the draft requires the same contextual knowledge needed for strategy.
The bundle is strong precisely when verifying one task's output requires doing the adjacent task yourself.

Consider performing a literature review as another example.
If your goal is just to find existing studies and summarize them, then the task is highly codifiable, and AI can do it pretty well today already.
However, if your goal is to identify gaps and develop theory, then peeling it off and handing it to AI may destroy the serendipitous discovery process and lead to undesired outcomes.

## The landscape is shifting

Note that everything above is a snapshot.
I see two factors that could change the landscape:
1. The evolving capabilities of AI models and agents. The development in the past few years has been astonishing, and it will only accelerate.
2.  Professionals drafting skills that distill their tacit knowledge into written guidelines and pipelines. This is what [Catalini, Hui & Wu (2026)](#ref-catalini-2026) called the codifier's curse: domain experts who encode their knowledge into AI systems accelerate their own obsolescence

With those factors, the verification threshold itself moves: what required expert judgment yesterday may be automatable tomorrow.
And this means the "safe" zone keeps shrinking.

## So what do we do?

I wrote about this in [AI is Transforming Academia — How Do We Survive It?](https://www.kaichengyang.me/blog/ai-is-transforming-academia-how-do-we-survive-it).
It was written before I developed the framework in this piece, but I think the advice is still valid.

If I were to add anything:
- **Invest in verification skills, not just execution skills.** The ability to judge quality is what remains valuable when AI handles production. Learn to be a great editor, reviewer, and diagnostician (someone who can tell whether the output is right).
- **Cultivate the human-constitutive parts of your role.** Relationships, accountability, trust, and presence. These are not soft skills to be dismissed. They're the hard floor of human value.
- **Stop anchoring to "AI can't do X."** That's a temporary claim, and I hear people say it constantly. The better question is "does it matter that a human does X?" If the answer is yes, lean into that.

## References

- <a id="ref-catalini-2026"></a>[The Economics of AGI](https://arxiv.org/abs/2602.20946) --- Catalini, Hui & Wu (2026)
- <a id="ref-garicano-2026"></a>[Weak Bundle, Strong Bundle: How AI Redraws Job Boundaries](https://www.dropbox.com/scl/fo/689u1g785x8jp6c8v1s21/AKxZ_N15vUxMA3PBtpbr5nM?dl=0&e=1&preview=2026.03.30+Bundles+WP+Version.pdf&rlkey=ottgcu71u1t4mhn6tblvatu8w&st=dj6k0x2o) --- Garicano, Li & Wu (2026)
- <a id="ref-freund-2025"></a>[Job Transformation, Specialization, and the Labor Market Effects of AI](https://www.econstor.eu/handle/10419/338321) --- Freund & Mann (2025)
- [What AI Agents Still Cannot Do](https://kirangarimella.substack.com/p/what-ai-agents-still-cannot-do) --- Garimella (2025)
- <a id="ref-zhang-2026"></a>[Vibe Researching as Wolf Coming](https://arxiv.org/abs/2602.22401) --- Zhang (2026)
