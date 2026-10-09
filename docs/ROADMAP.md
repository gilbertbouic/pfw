# Public Funds Watch — Build roadmap (thin slice)

> **Live site (2026-10):** https://pfw.mkweli.tech on GitHub Pages. Phases A–C are done and make up the live site. The project began as Climate Fund Watch. The live registry covers external public funding for Mauritius, with climate as one sector.

This roadmap adapts [`PRODUCT_BUILD_PLAN.md`](../PRODUCT_BUILD_PLAN.md) for practical sequential delivery. The full plan remains the north star (modules, two-zone security, multi-tenant country packs).

## Principle

Ship a **credible public face + sourced public ledger** first. Keep architecture decisions compatible with multi-country and two-zone security. Defer integrity vault, staff auth, and live government integrations until legal review and pilot partners exist.

## Phases

### Phase A — Repo hygiene *(done)*

- [x] Set up the repository (`gilbertbouic/pfw`, formerly `cfw`)
- [x] Keep product build plan at repo root
- [x] Organize Mauritius materials under `docs/mauritius/`
- [x] Document thin-slice roadmap

### Phase B — Public narrative site

**Audience:** citizens & media (also useful for funders)

- [x] Next.js + TypeScript + Tailwind app in `web/`
- [x] Landing (problem, modules, build path CTAs)
- [x] About (product definition, audiences, principles, MU pilot)
- [x] Problem & Solution (failure modes, modules, user flow)
- [x] Get involved (partnership paths + contact stub)
- [x] Deploy (GitHub Pages at pfw.mkweli.tech since 2026-10; see README)
- [x] Confirm public contact email (support@mkweli.tech) and custom domain (pfw.mkweli.tech)

### Phase C — Public sourced ledger *(live)*

- [x] Project TypeScript schema (nullable money fields, required sources)
- [x] Sourced Mauritius ledger (no synthetic local projects)
- [x] Project list + detail pages with citations
- [x] Filters (geography, status, hazard, funder, objective, search)
- [x] Island schematic map (Mauritius, Rodrigues) of works sites named in public reports
- [x] Sources page (methodology redirects here)
- [x] CSV, Excel and JSON downloads with source URLs
- [x] Landscape page: need vs tagged spend vs donor channels

### Phase D — Community evidence (light)

- [ ] Report wizard (categories from product plan Appendix A)
- [ ] Photo upload pipeline (scan + EXIF strip later)
- [ ] Operator inbox (email or simple admin) before full console

### Phase E — Institutional & integrity (funded / partners)

Follow product plan Phases 1–3:

- Integrity vault (M5) with pen-test
- Council / national consoles (M6)
- RBAC + MFA
- SMS/WhatsApp bridges as needed
- Live pilot in ≥2 subnational units

## Stack (locked for Phase B–C)

| Layer | Choice |
|-------|--------|
| Public web | Next.js (App Router) + TypeScript + Tailwind |
| Ledger data | Sourced TypeScript records in `web/src/data`, exported at build time to JSON/CSV/XLSX (no DB) |
| Maps (Phase C) | SVG island schematics (no map tiles or map library) |
| Hosting | Static export on GitHub Pages |
| Later API/DB | NestJS or FastAPI + PostgreSQL/PostGIS (per build plan) |

## Exit criteria

| Phase | Done when |
|-------|-----------|
| B | Stakeholders can share a live URL explaining problem, solution, and pilot intent |
| C | Media/citizen can browse sourced projects on list + map and download open data |
| D | A field report can be submitted and received by an operator |
| E | Real pilot geography with real users and integrity SOP |

## Related docs

- Product plan §22 MVP scope freeze  
- Product plan §28 90-day execution plan  
- Product plan §30 immediate next artifacts (ADRs, PRD, schemas)
