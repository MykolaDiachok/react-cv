# Mykola Diachok — CV / Resume

This repository contains my personal **CV / resume website**.

Live site: https://mykoladiachok.github.io/react-cv/

## Tech stack

- **Astro** (static site generation)
- **React** (UI components + interactive parts)
- **TypeScript**
- **Tailwind CSS**
- **Vite** (bundler, via Astro)

## Getting started

### Install dependencies

```bash
npm install
```

### Run locally (dev)

```bash
npm run dev
```

Astro will print the local URL in the terminal.

### Build

```bash
npm run build
```

The production build is generated into `dist/`.

### Preview production build

```bash
npm run preview
```

## Deploy (GitHub Pages)

This project is configured to deploy to GitHub Pages under the `/react-cv/` base path.

```bash
npm run deploy
```

Notes:
- The deploy script publishes `dist/` to the `gh-pages` branch.
- A `.nojekyll` file is generated during deploy to ensure GitHub Pages serves the `/_astro/` assets folder.

## Project structure (high level)

- `src/pages/index.astro` — the entry page (SEO-friendly wrapper + React hydration)
- `src/layouts/BaseLayout.astro` — global `<head>` meta tags, Open Graph, JSON-LD, Google Analytics
- `src/app.tsx` — main React app
- `src/components/` — UI blocks (header, experience, projects, etc.)
- `src/data/` — CV data (experience/projects/skills)
- `public/` — static assets (robots.txt, sitemap, images)

## License

This repository is meant to showcase my experience and resume.
