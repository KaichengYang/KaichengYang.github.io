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