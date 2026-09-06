# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal academic website built with Vue 3, Vite, and Tailwind CSS. It serves as a portfolio showcasing publications, tools, news, media coverage, and biographical information. The site is automatically deployed to GitHub Pages on every push to the master branch.

## Development Commands

### Setup
```bash
npm install
```

### Development
```bash
npm run dev
```
Opens the development server with hot reload (usually at http://localhost:5173)

### Build
```bash
npm run build
```
Builds the production bundle to `dist/` folder

### Preview
```bash
npm run preview
```
Preview the production build locally

## Architecture

### Data Loading Pattern
- **Runtime JSON Loading**: All content (publications, news, tools, media) is loaded dynamically from JSON files in `public/files/` at app startup
- **Data Transformation**: Publications are processed to parse BibTeX, attach author information, and cross-reference with media coverage
- **Global State**: Data is provided globally via Vue's provide/inject API from `src/main.js:95-101`

### Component Organization
Components are organized by feature domain:
- `components/nav/`: Navigation (Navbar, Footer, BackForth)
- `components/pubs/`: Publications (PubsList, PubsBlock, PubsPage)
- `components/news/`: News (NewsList, NewsBlock, NewsPage)  
- `components/media/`: Media coverage (MediaList, MediaBlock, MediaPage)
- `components/tool/`: Tools (ToolList, ToolBlock, ToolPage)
- `components/bio/`: Biography (AboutPage, Bio, PhotoPage)
- `components/failure/`: Academic failures section

### Routing
Single-page application with client-side routing defined in `src/router/index.js`. Uses Vue Router with web history mode. All unmatched routes redirect to HomePage.

### Styling
- **Tailwind CSS**: Primary styling framework with custom theme configuration
- **DaisyUI**: Component library with custom "kevin" theme (autumn base with red primary color)
- **FontAwesome**: Icon system with selective imports in `src/main.js:8-17`

### Build System
- **Vite**: Build tool with Vue plugin and path aliases (`@` → `src/`)
- **GitHub Actions**: Automated deployment to GitHub Pages on master branch pushes
- **Static Assets**: All images, PDFs, and JSON data files served from `public/` directory

## Key Files

- `src/main.js`: App initialization, data loading, and global state setup
- `src/router/index.js`: Route definitions
- `public/files/`: All JSON data files (publications, news, tools, media, author info)
- `.github/workflows/main.yml`: GitHub Pages deployment configuration
- `tailwind.config.js`: Custom theme and DaisyUI configuration

## Data Structure

Publications, news, tools, and media are stored as JSON files with cross-references via ID fields. The main.js file establishes relationships between entities (e.g., linking news items to publications, media coverage to projects).

## Content Management

### Managing Team Members

Team member information is stored in `public/files/team/team.json` with three main sections: `pi` (Principal Investigator), `students` (current students), and `alumni` (former members).

#### Headshot Photo Requirements

Headshots live in `public/photos/` and are referenced by the `photo` field in `team.json`. `TeamMember.vue` renders them as `rounded-full w-48 h-48 object-cover` — a 192x192 CSS pixel circle with a center crop.

| Requirement | Value |
|---|---|
| Aspect ratio | Square (1:1) — required |
| Minimum size | 600x600 pixels |
| Format | JPEG preferred; PNG accepted |
| File size | Under ~200 KB |
| Framing | Face centered, some headroom (the circle mask clips the corners) |

A non-square image is center-cropped rather than rejected, so off-center photos crop badly. Oversized files are the main cost here: every visitor to the team page downloads all of them.

**Blurb to send to a new student (copy-paste):**

> Please send me a headshot for the lab website:
>
> - Square (1:1 aspect ratio)
> - At least 600x600 pixels
> - JPEG or PNG, ideally under 200 KB
> - Face centered with a little space above the head — the photo is displayed in a circle, so the corners get cropped off
>
> A phone selfie cropped to a square works fine. No professional photo needed.

#### Temporarily Hiding an Entry

Any `students` or `alumni` entry can be hidden from the team page without deleting it by adding `"hidden": true`:

```json
{
  "hidden": true,
  "name": "Open Position",
  "role": "Ph.D. Student"
}
```

The entry keeps all its data in `team.json` but is filtered out before rendering, so bringing it back is a matter of removing the one field. Use this for things that come and go — the "Open Position" recruiting card, or a member on leave. Deleting the entry outright is still the right move for a permanent removal.

#### Alumni Section

Alumni are displayed on the team page in a simple list format grouped by degree type (Ph.D. students, M.S. students, Undergraduate students, Others). Each alumni entry follows this structure:

```json
{
  "name": "Alumni Name",
  "role": "M.S. in Computer Science",
  "year": "2025",
  "current_position": "Software Engineer at Company X",
  "email": "alumni@example.edu",
  "website": "https://linkedin.com/in/alumniname"
}
```

**Required Fields:**
- `name`: Alumni's full name
- `role`: Degree and field (must include "Ph.D.", "M.S.", or "Undergraduate" for proper grouping)

**Optional Fields:**
- `year`: Year of graduation or years in lab (e.g., "2025" or "2020-2024")
- `current_position`: Current job title and organization
- `email`: Contact email address
- `website`: Personal website or LinkedIn URL (makes the name clickable)

**To move a student to alumni:**
1. Copy the student's entry from the `students` array
2. Remove from `students` array
3. Add to `alumni` array with updated fields:
   - Change role from "Student in..." to degree earned (e.g., "M.S. in Computer Science")
   - Update `year` to graduation year
   - Remove `photo` and `affiliation` fields (not displayed for alumni)
   - Optionally add `current_position` and simplify to single `website` field
4. Delete the student's photo from `public/photos/` if no longer needed

### Adding News Items

News items are stored in `public/files/news/` as individual JSON files named with the date format `YYYY-MM-DD.json`. Each news item follows this structure:

```json
{
  "date": "YYYY-MM-DD",
  "type": "news_type",
  "msgs": [
    {
      "type": "string",
      "msg": "Text content"
    },
    {
      "type": "pub|tool|link",
      "project_id": "publication_id",
      "msg": "link text",
      "link": "url"
    }
  ]
}
```

**News Types:**
- `new_pub`: New publication announcement
- `new_tool`: New tool release
- `general`: General updates/announcements

**Message Types:**
- `string`: Plain text content
- `pub`: Reference to a publication (uses `project_id` from pubs directory)
- `tool`: Reference to a tool (uses `project_id` from tools.json)
- `link`: External link (requires `msg` and `link` fields)

**Steps to add a news item:**
1. Create new JSON file in `public/files/news/` with date format
2. Add the filename to the top of `public/files/news/news_index.json` (maintains chronological order)

**Example for new publication:**
```json
{
  "date": "2025-07-09",
  "type": "new_pub",
  "msgs": [
    {
      "type": "string",
      "msg": "New preprint on"
    },
    {
      "type": "pub",
      "project_id": "yang2025news"
    },
    {
      "type": "string",
      "msg": "is now available on arXiv"
    }
  ]
}
```