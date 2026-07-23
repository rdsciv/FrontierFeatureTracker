# Frontier Feature Tracker

Living **Competitive Feature, Model Release, and Market Share Opportunity Tracker** for xAI / SpaceXAI.

Tracks Western and Chinese frontier models and product surfaces, scores **explicit Grok gaps**, and flags **steal market share** moves tied to public financial signals.

**Baseline:** July 2026 · **Dashboard:** http://localhost:3456

---

## Quick start

```bash
# From repo root
npm install
npm run seed          # load data/seed/baseline-2026-07.yaml → data/tracker.db
npm run dev           # dashboard on :3456
npm run collect       # daily source hash check + alerts
npm run report:baseline
npm run report:weekly
```

Optional webhook for change alerts:

```bash
export FFT_WEBHOOK_URL=https://hooks.slack.com/services/...
npm run collect
```

---

## What you get

| View | Purpose |
|------|---------|
| **Command Center** | High gaps, critical events, opportunities, Chinese pulse |
| **Feature Matrix** | Companies × capabilities; Grok-gap primary lens |
| **Gaps** | Scored gap board with recommended actions + sources |
| **Opportunities** | Steal-share recommendations |
| **Timeline** | Model releases + competitive events |
| **Chinese Velocity** | Open-weight cadence and cost pressure board |
| **Financial** | ARR estimates, partner $ commitments, IR placeholders |
| **Products** | Desktop Work, hardware, partners, education, enterprise |
| **Sources** | Collector health and monitored URLs |

---

## Architecture

```
apps/dashboard/       Next.js 15 analyst dashboard
packages/schema/      Zod types + priority scoring
packages/db/          Drizzle schema, SQLite, seed loader
packages/collectors/  HTTP change detection (proposal mode)
data/seed/            Git-versioned curated baseline YAML
data/sources.yaml     Monitored URLs
data/tracker.db       Runtime SQLite (gitignored)
reports/              Baseline + weekly markdown
```

**Curated truth** lives in YAML (PR-reviewable). **Collectors** only write scrape runs, content hashes, and events — they do **not** auto-edit matrix or gaps.

### Priority scoring

```
priority_score = 0.4 * revenue_impact
               + 0.3 * user_demand
               + 0.3 * competitive_urgency
```

High ≥ 3.5 · Medium ≥ 2.5 · Low &lt; 2.5

---

## Cadence

| Cadence | Job |
|---------|-----|
| **Daily** | `npm run collect` — product/docs/pricing hash changes → `reports/alerts/` |
| **Weekly** | Human feature audit; edit seed YAML; `npm run seed`; `npm run report:weekly` |
| **Real-time** | Critical model/product launches → add `events` in seed or insert via tooling |
| **Quarterly** | Earnings deep-dive; refresh `financialSignals` from IR / 10-Q |

---

## Updating competitive data

1. Edit `data/seed/baseline-2026-07.yaml` (or add a new dated seed file).
2. Require `sourceUrls` / reliability labels on claims; mark estimates.
3. `npm run seed`
4. Confirm in dashboard and re-run `npm run report:baseline` when doing a formal refresh.

---

## Seeded High gaps (July 2026)

1. No polished Work / desktop super-app (vs Claude Desktop, ChatGPT Work)
2. Cursor → Grok Build productization incomplete ($60B deal, close Q3 2026)
3. Imagine under-packaged vs Codex Micro hardware ecosystem
4. Enterprise public GTM / case study visibility lag
5. No formal funded partner / consultant network ($150M OpenAI / $100M Anthropic)
6. No Google-class education / Academy stack
7. Limited hackathon scale
8. Chinese open-weight cost & velocity pressure (DeepSeek V4, Kimi K2.6)

See `reports/baseline-2026-07.md` after first seed + report run.

---

## Governance

- Every claim should have `sourceUrls` and as-of awareness.
- Estimates: `isEstimate: true` + `sourceReliability`.
- Fair to Grok: Enterprise SSO/SCIM exist — gaps are packaging, desktop, channel, visibility, migration.
- Prefer official primary sources over secondary blogs when both exist.

---

## Stack

Node 22+ (uses built-in `node:sqlite`) · TypeScript · Next.js 15 · Zod · YAML

No native SQLite addons — works on Node 26+ without node-gyp.
