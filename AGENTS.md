# Frontier Feature Tracker — agent notes

## Purpose

Internal competitive intelligence system for xAI / SpaceXAI: feature matrices, model releases, Grok gap scoring, Chinese velocity, financial signals.

## Commands

```bash
npm install
npm run seed              # load data/seed/baseline-2026-07.yaml
npm run dev               # http://localhost:3456
npm run collect           # hash-monitor sources.yaml URLs
npm run report:baseline
npm run report:weekly
```

## Data rules

1. **Curated truth** is YAML under `data/seed/` — edit there, then `npm run seed`.
2. Collectors only write scrape runs / events — **never** auto-edit matrix or gaps.
3. Every claim needs sources; mark estimates with `isEstimate` / reliability.
4. Be fair to Grok: enterprise SSO exists; gaps are packaging, desktop, channel, visibility, Cursor migration.

## Scoring

`0.4 * revenue + 0.3 * demand + 0.3 * urgency` → High ≥ 3.5

## Key paths

- Seed: `data/seed/baseline-2026-07.yaml`
- Sources: `data/sources.yaml`
- DB: `data/tracker.db` (gitignored)
- Dashboard: `apps/dashboard`
- Queries: `packages/db/src/queries.ts`
