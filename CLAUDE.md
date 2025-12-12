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

#### Alumni Section

Alumni are displayed on the team page in a simple list format grouped by degree type (Ph.D. students, M.S. students, Others). Each alumni entry follows this structure:

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
- `role`: Degree and field (must include "Ph.D." or "M.S." for proper grouping)

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