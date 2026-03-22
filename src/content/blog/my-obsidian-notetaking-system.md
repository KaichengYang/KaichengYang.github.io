---
title: My Obsidian Notetaking System
date: 2026-03-14
tags: [obsidian, productivity, knowledge-management, ai, automation]
status: published
---
# My Obsidian Notetaking System

## Key Points
- Domain-based vault organization with four standard project files (README, PLAN, IDEAS, REFS)
- Templates enforce consistency across all document types
- Inbox pipeline keeps everything triaged and routed
- AI agent (Claude Code) automates repetitive knowledge work
- Bidirectional linking creates a connected knowledge graph

## Draft

If you're anything like me, you've experienced the pain of scattered knowledge. Meeting notes in one app, project docs in another, research papers bookmarked somewhere you'll never find again, and ideas jotted on whatever was closest at hand. I spent years cycling through note-taking tools before landing on a system that actually works — not because of the tool itself, but because of the design principles behind it.

My system runs on Obsidian, a plain-text markdown editor, but the real magic is in the structure and the automation layer I've built on top of it. Here's how it all fits together.

### The Vault Structure

The foundation is domain-based organization. Instead of organizing by format (notes, documents, files) or by date, everything is sorted by the area of work it belongs to:

- **Research** — papers, experiments, collaborations
- **Teaching** — courses, curriculum, student materials
- **Service** — committees, outreach, lab management
- **Grant** — funding opportunities, proposals, budgets

Each domain contains projects, and each project gets the same four standard files:

1. **README.md** — The persistent reference. What is this project? Who's involved? What decisions have been made? This is the "what and why" — it stays strategic and rarely changes day-to-day.

2. **PLAN.md** — The tactical tracker. What are the current priorities? What's blocked? What's next? This is the "what's next" — it updates frequently and stays close to the ground.

3. **IDEAS.md** — The exploration space. Half-formed thoughts, speculative directions, things that aren't actionable yet but might be someday. This is the "what if" — a low-pressure dumping ground that keeps speculative thinking separate from active planning.

4. **REFS.md** — The bibliography. A categorized list of papers, articles, and resources relevant to the project, linking out to detailed reference notes stored elsewhere in the vault.

The key insight is *separation of concerns*. Before I had this structure, my project documents would bloat into unwieldy mega-files mixing status updates with strategic thinking with random ideas. By giving each concern its own file, I know exactly where to look and exactly where to write. The README stays clean because tactical details live in PLAN. The PLAN stays focused because speculative ideas live in IDEAS. Nothing contaminates anything else.

### Templates as Guardrails

Structure only works if it's consistent, and consistency is hard to maintain manually. That's where templates come in.

I maintain 14 templates that cover every type of document I regularly create: projects, meeting notes, paper annotations, 1-on-1 records, experiment logs, blog posts (like this one), and more. When I create a new document, I start from the appropriate template, which gives me:

- **YAML frontmatter** — Structured metadata at the top of every file. Date, tags, status, links to external systems. This makes documents machine-readable and searchable.
- **Consistent sections** — Each template pre-populates the headings and structure appropriate for that document type. A meeting note template has sections for attendees, agenda, decisions, and action items. A paper note template has sections for the key claims, methodology, and relevance to my work.
- **Naming conventions** — Files follow strict patterns: kebab-case names, YYYY-MM-DD date prefixes where appropriate. A meeting note for a research project goes to `research/my-project/meetings/2026-03-14-topic.md`. Every time.

Templates sound boring, but they're the single most impactful part of the system. They eliminate the "blank page" problem. They make every document findable. And they make automation possible — because when every meeting note has the same structure, a script can reliably extract action items from any of them.

### The Inbox Pipeline

Every system needs a front door, and mine is the inbox folder. Anything that arrives — a web clipping, a quick thought, a forwarded article, a todo — lands in the inbox first. Nothing goes directly to its final destination.

The inbox operates on a triage-first principle. Each item gets classified:

- **Web clipping** — An article or resource to be processed into a reference note
- **Todo** — An actionable task to be turned into a tracked issue
- **Idea** — A thought or observation to be filed in the appropriate project's ideas file or in a general ideas folder

After classification, each item gets routed to its proper location. A web clipping about a new language model becomes a reference note in `references/tools/`. A todo about reviewing a student's draft becomes a tracked issue in my task management system. An idea about a potential experiment gets appended to the relevant project's IDEAS.md.

The goal is simple: the inbox should always be empty after processing. It's a transit point, not a storage location. If something sits in the inbox, it means I haven't decided what it is yet — and that decision is the real work of knowledge management.

### AI Agent Integration

This is where the system goes from "organized note-taking" to something genuinely different. I use Claude Code — an AI coding assistant — not for writing code, but as an automation layer for my knowledge management workflow. I've built a set of custom skills (essentially scripted commands) that handle the repetitive parts of maintaining the system:

**`/process-inbox`** takes everything in my inbox and automatically classifies each item. Web clippings get parsed into structured reference notes with proper frontmatter. Todos get converted into tracked issues with appropriate metadata. Ideas get routed to the right project folder. What used to be a 20-minute daily triage session now takes seconds.

**`/process-meeting`** is probably the skill I use most. I paste in a meeting transcript (from Zoom, Otter, or whatever), and it generates a structured meeting note following my template — attendees, key discussion points, decisions made, and action items. But it goes further: each action item automatically becomes a tracked issue in Linear (my task management tool), tagged to the right project with the right priority. The meeting note gets linked from the project's README. Everything is connected without me manually copying and pasting between systems.

**`/end-of-week`** runs my weekly review. It pulls completed tasks from Linear, updates each project's PLAN.md to reflect what actually got done, and surfaces anything that slipped. It's the sync mechanism that keeps my Obsidian docs and my task tracker from drifting apart.

**`/cross-reference`** finds connections I might miss. When I add a new reference note, this skill scans my existing projects and notes for related content and suggests where to add citations or links. It's like having a research assistant who's read everything in my vault.

The philosophy here is that **Linear owns task tracking while Obsidian owns context and reasoning**. Linear tells me *what* to do and *when*. Obsidian tells me *why* and captures the thinking behind decisions. The AI agent is the bridge that keeps them synchronized, so I never have to manually maintain consistency between the two systems.

### Bidirectional Linking

Obsidian's killer feature is wiki-style linking between notes, and my system leans into this heavily. The linking isn't random — it follows specific patterns:

- **People link to projects.** Every person I work with has a profile note listing their projects. Every project README lists its collaborators. If I'm preparing for a 1-on-1, I can see everything that person is involved in. If I'm reviewing a project, I can see everyone who contributes to it.

- **References link to projects.** Paper notes include a field for which projects they're relevant to. Project REFS.md files link back to the paper notes. When I read a new paper, I immediately connect it to my ongoing work.

- **Meetings link to everything.** Meeting notes reference the project they belong to, the people who attended, and any action items that became tracked issues. Every meeting becomes a node in the knowledge graph, not an orphaned document.

One technical detail that matters: I use full-path wiki-links (like `[[research/my-project/README|my project]]` rather than just `[[my project]]`). It's more verbose, but it means links never break due to ambiguity. In a vault with hundreds of files, reliable linking is worth the extra keystrokes.

### Why It Works

This system works not because Obsidian is magical — any markdown editor could serve the same role. It works because of three design principles:

1. **Separation of concerns.** Strategic thinking, tactical planning, speculative ideation, and reference management each have their own space. Nothing gets contaminated by mixing.

2. **Consistency through templates.** Every document follows a predictable structure, which makes both human navigation and AI automation reliable.

3. **Automation of the boring parts.** The AI agent handles triage, routing, linking, and synchronization — the maintenance work that would otherwise cause the system to decay over time.

The biggest lesson I've learned is that the hard part of knowledge management isn't capturing information. It's maintaining the system. Templates and AI automation solve that problem by making maintenance nearly effortless. The system doesn't rot because the boring upkeep work happens automatically.

If you're building your own system, start with the structure. Get the folder hierarchy and the four standard files right. Add templates next. And only then think about automation — because automation amplifies whatever structure you already have, for better or worse.
