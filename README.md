# KaichengYang.github.io

This is a personal website built with Vue.js, Vite, and Tailwind CSS. It showcases news, publications, tools, media, and more, with content loaded dynamically from JSON files.

## Features
- Modern Vue 3 SPA with Vite for fast development
- Tailwind CSS for styling
- Modular component structure (news, publications, tools, media, bio, etc.)
- Dynamic data loading from JSON files in `public/files/`
- FontAwesome icon integration
- Responsive navigation and multiple content pages

## Directory Structure
```
├── src/
│   ├── main.js           # App entry point, data loading, initialization
│   ├── App.vue           # Root Vue component
│   ├── router/           # Vue Router configuration
│   └── components/       # Feature-based Vue components
├── public/
│   ├── files/            # JSON data files (news, pubs, tools, media)
│   ├── images/           # Static images
│   └── ...               # Other static assets
├── package.json          # Project dependencies and scripts
├── vite.config.js        # Vite configuration
├── tailwind.config.js    # Tailwind CSS configuration
└── postcss.config.js     # PostCSS configuration
```

## Getting Started

### Install dependencies
```sh
npm install
```

### Run the project in development mode
```sh
npm run dev
```

The app will be available at the local address shown in your terminal (usually http://localhost:5173).

## Build for Production
```sh
npm run build
```

## Notes
- Data is loaded at runtime from JSON files in `public/files/`.
- Routing is defined in `src/router/index.js`.
- Main pages/components are in `src/components/` (see subfolders for features).
- For more details on project structure, see `.cursor/rules/project-structure.mdc` if using Cursor.
- **Deployment:** The site is automatically deployed to GitHub Pages on every push to the `main` branch via GitHub Actions.