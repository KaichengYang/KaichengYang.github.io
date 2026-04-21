---
title: Claude Code Skills and Plugins for Academic Research
date: 2026-03-24
updated: 2026-04-21
tags: [claude-code, research-tools, ai-agents, academic-workflow]
status: published
---

## TL;DR
- Curated list of Claude Code skill repos and plugins designed for academic research
- Covers literature review, paper writing, data analysis, and full research lifecycle

## Background

Since January 2026, I have seen unprecedented enthusiasm from academics for doing research with AI agents.
One of the reasons is the skills/plugins system that allows researchers to turn their experiences, workflows, and know-how accumulated over the years into text files, which can be reused and shared.
The ecosystem of research-oriented skills has grown quickly.
Here's a curated list of what I have collected so far.

## The List

**[K-Dense Scientific Skills](https://github.com/K-Dense-AI/claude-scientific-skills)** — The largest collection: 170+ skills spanning bioinformatics, cheminformatics, clinical research, ML, materials science, and more. Access to 250+ scientific databases. Strongest in STEM and life sciences.

**[ClaudePrism](https://github.com/delibae/claude-prism)** — An open-source desktop app (Tauri 2 + Rust) that bundles the K-Dense skills into a local-first scientific writing environment. Embedded Tectonic compiler for offline LaTeX, built-in Python via uv, Zotero integration, and a "Capture & Ask" feature for querying Claude about PDF regions. Interesting if you want a standalone IDE experience rather than working in the terminal.

**[Claude Scholar by YY Ahn](https://github.com/yy/claude-scholar)** — Eight composable skills for academic workflows, installable via the plugin marketplace. Includes arXiv metadata fetching, DOI-to-BibTeX conversion, OpenAlex querying (240M+ works), math verification with SymPy, LaTeX reference checking, and arXiv submission prep. The atomic, composable design is a standout.

**[Claude Scholar by Gaorui Zhang](https://github.com/Galaxy-Dawn/claude-scholar)** — A comprehensive semi-automated research assistant covering the full academic lifecycle from ideation to publication. 25+ skills for literature review (with Zotero integration), ML project development, experiment analysis, paper writing, and post-acceptance workflows. Includes an Obsidian-based project knowledge base.

**[letitbk Academic Setup](https://github.com/letitbk/claude-academic-setup)** — 22 skills + 13 plugins tailored for social science researchers. Notable for a per-project learning tracker ("napkin"), multi-model verification via `/codex` and `/gemini`, and a research lifecycle workflow that organizes skills around project phases rather than individual tasks.

**[Anthropic Knowledge Work Plugins](https://github.com/anthropics/knowledge-work-plugins)** — 11 official role-based plugins from Anthropic, bundling skills + slash commands + MCP connectors. The bio-research plugin is the most research-relevant, but the architecture is a useful reference for building integrated research environments.

**[cc-research-project-template](https://github.com/mr-devs/cc-research-project-template)** — A GitHub repo template by Matthew DeVerna for research projects built around Claude Code. Structured directory layout with per-directory CLAUDE.md files that give the agent context-specific instructions. Uses Snakemake for reproducible pipelines. A good starting point for new projects.

**[Research Paper Writing Skills](https://github.com/Master-cai/Research-Paper-Writing-Skills)** — A skill package for ML/CV/NLP paper writing, adapted from Prof. Peng Sida's open methodology notes. Section-specific writing guides for Abstract, Introduction, Method, Experiments, and Conclusion, plus claim-evidence alignment checks and pre-submission self-review.

**[Academic Research Skills](https://github.com/Imbad0202/academic-research-skills)** — The most structured skill package available: four interconnected skill sets (Deep Research, Academic Paper, Reviewer, Pipeline) orchestrated by a 10-stage pipeline from research to finalization. Multi-agent architecture with 13 research agents, 12 writing agents, and 7 reviewer agents. Includes mandatory integrity verification stages with anti-hallucination checks, Socratic coaching, and LaTeX output with multiple citation formats.

**[open-scholar-skill by Yongjun Zhang](https://github.com/joshzyj/open-scholar-skill)** — 30 modular skills + 19 agents covering the full research pipeline for social scientists, from literature review and hypothesis development through data analysis, writing, citation management, peer-review simulation, and replication packaging. Targets top journals (ASR, AJS, Demography, Nature Human Behaviour). Includes a three-layer data-safety stack (policy + ingestion-time scan + `PreToolUse` hook) for IRB/HIPAA-sensitive data. Notably, the design intentionally omits a full-paper orchestrator to keep researchers in control at every stage. A `/scholar-knowledge` skill supports cross-project literature synthesis with Obsidian wiki export.

## Disclaimer

I haven't closely experimented with these skills and plugins, so I cannot guarantee their quality.

Plus, I don't recommend blindly adopting other researchers' skills.
It's better to use them as references to create your own skills.
