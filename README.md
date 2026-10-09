# Public Funds Watch (`pfw`)

Independent, sourced public ledger of external public funding for Mauritius. Climate finance stays one sector.

| | |
|--|--|
| **Public site** | https://pfw.mkweli.tech |
| **GitHub** | https://github.com/gilbertbouic/pfw |
| **Contact** | support@mkweli.tech · form on [/get-involved](https://pfw.mkweli.tech/get-involved) |
| **Reference ledger** | Mauritius |

## What is live

A **sourced Mauritius registry**. Every money field is taken from a public URL or shown as “Not published.” The main list is publicly donor-funded projects with a published Mauritius amount of at least USD 100,000, including Red Cross projects and Mauritian NGO grants when a public source states a Mauritius figure. A still-open project over USD 5 million stays even if it started before 5 October 2016. Loans are not added as grants. Shared money is counted once. A non-USD amount keeps its original currency and stores a pinned ECB reference rate.

Community evidence, the integrity vault, government consoles, and a weekly grant checker are **not** part of this site.

## Repository layout

| Path | Purpose |
|------|---------|
| [`web/`](./web) | Public website (Next.js) |
| [`web/src/data/`](./web/src/data) | Sourced ledger and headline figures |
| [`docs/mauritius/SOURCES.md`](./docs/mauritius/SOURCES.md) | Source list |
| [`PRODUCT_BUILD_PLAN.md`](./PRODUCT_BUILD_PLAN.md) | Full product, architecture, security, and delivery plan |
| [`docs/ROADMAP.md`](./docs/ROADMAP.md) | Thin-slice build sequence |
| [`docs/mauritius/`](./docs/mauritius) | Mauritius research pack |

## Run locally

```bash
cd web
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Main routes

| Path | Description |
|------|-------------|
| `/` | Opening gate. ENTER opens About. |
| `/about` | First page: donor-funded projects of at least USD 100,000 |
| `/ledger` | Cited figures |
| `/projects` | Sourced registry |
| `/projects/[id]` | Record detail with citations |
| `/landscape` | Need vs tagged spend vs donor channels |
| `/figures` | GDP vintages, fiscal stocks, and coffers-debate lines. Not in the registry total. |
| `/map` | Island schematic of named works sites; site-level spend or not reported |
| `/reports` | Published donor APRs, PPRs and evaluations |
| `/sources` | Methods, older-than-10-years note, and records reviewed and not added |
| `/data/projects.json` | JSON (includes source URLs) |
| `/data/projects.csv` | CSV download |
| `/data/figures.json` | Cited vintages and calculated ratios |
| `/data/figures.csv` | Same rows as CSV |
| `/about` · `/problem-solution` · `/get-involved` | Product narrative + contact |

## Deploy (GitHub Pages)

The site is a static export of `web/` (`output: 'export'`). Pushing `main` runs [`.github/workflows/pages.yml`](./.github/workflows/pages.yml), which publishes `web/out`.

The custom domain is **https://pfw.mkweli.tech**. DNS is a CNAME from `pfw` to `gilbertbouic.github.io`. `web/public/CNAME` contains `pfw.mkweli.tech`. Do not point this site at Vercel, and do not recreate `cfw.mkweli.tech`.

## Product status

- [x] Product build plan (multi-country, two-zone security)
- [x] Mauritius research / concept materials
- [x] Sourced public ledger (replaces demo registry)
- [x] Get involved form → support@mkweli.tech
- [ ] Phase D community evidence reporting
- [ ] Integrity vault + government consoles (after legal/security gates)

## License / visibility

Public repository. The public tracker core is intended as a digital public good (see product build plan §25).
