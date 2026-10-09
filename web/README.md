# Public Funds Watch — web

Public site for Public Funds Watch. Canonical URL: https://pfw.mkweli.tech.

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

`npm run build` writes a static site to `out/` and refreshes `public/data/projects.json` and `public/data/projects.csv`. GitHub Pages serves `out/`. `npm start` is not used in production.

## Pages

- `/` — Landing
- `/projects` — Sourced registry
- `/projects/[id]` — Detail
- `/map` — MapLibre map
- `/methodology` — Data disclaimer
- `/about` · `/problem-solution` · `/get-involved`
- `/data/projects.json` · `/data/projects.csv`
- `/data/figures.json` · `/data/figures.csv`

## Stack

Next.js (App Router) · TypeScript · Tailwind CSS v4 · MapLibre GL

## Deploy

GitHub Actions builds this directory and publishes `out/` to GitHub Pages for https://pfw.mkweli.tech.
