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

`npm run build` writes a static site to `out/`. It also regenerates `public/data/projects.json`, `projects.csv`, `projects.xlsx` and `ledger.json` from `src/data/`. GitHub Pages serves `out/`. `npm start` is not used in production.

## Checks

```bash
npx tsc --noEmit
npm run lint
```

## Pages

- `/` — Opening gate (ENTER opens About)
- `/about` — Donor-funded projects of at least USD 100,000
- `/ledger` — Cited headline figures
- `/projects` — Sourced registry
- `/projects/[id]` — Record detail with citations
- `/landscape` — Need vs tagged spend vs donor channels
- `/map` — Island schematic (Mauritius, Rodrigues) of named works sites
- `/reports` — Published donor reports and evaluations
- `/sources` — Methods and sources (`/methodology` points here)
- `/problem-solution` · `/get-involved`
- `/data/projects.json` · `/data/projects.csv` · `/data/projects.xlsx`

## Stack

Next.js (App Router, static export) · TypeScript · Tailwind CSS v4. The map is a hand-drawn SVG schematic, with no map tiles or map library. There is no database: the ledger lives in `src/data/`.

## Deploy

GitHub Actions builds this directory and publishes `out/` to GitHub Pages for https://pfw.mkweli.tech.
