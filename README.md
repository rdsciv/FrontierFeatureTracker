# Frontier Feature Tracker

**Living competitive intelligence for frontier AI models, product surfaces, and market-share opportunities.**

A static analyst dashboard that tracks Western and Chinese frontier labs, scores **explicit Grok / xAI gaps**, and flags **steal-market-share** moves tied to public financial signals.

[![Deploy to GitHub Pages](https://github.com/rdsciv/FrontierFeatureTracker/actions/workflows/deploy-pages.yml/badge.svg)](https://github.com/rdsciv/FrontierFeatureTracker/actions/workflows/deploy-pages.yml)

### Live dashboard

**https://rdsciv.github.io/FrontierFeatureTracker/**

---

## Why this exists

Frontier competition is no longer “who has the best chat model.” It is:

- **Desktop Work super-apps** (Chat + agentic work + coding)
- **Managed coding agents and IDE depth**
- **Partner / consultant channels** with nine-figure funding
- **Hardware packaging** for agent workflows
- **Chinese open-weight velocity and cost pressure**
- **Public enterprise GTM** (case studies, ROI, transparency)

This tracker turns those signals into scored gaps and actionable recommendations for product, GTM, and leadership.

---

## What’s inside

| View | What you get |
|------|----------------|
| **Command Center** | High-priority gaps, critical events, opportunities, Chinese velocity pulse |
| **Feature Matrix** | Companies × capabilities (desktop, agentic, coding, multimodal, enterprise, channel…) |
| **Gaps** | Grok-centric gap board with revenue / demand / urgency scoring |
| **Opportunities** | “Steal market share here” recommendations |
| **Timeline** | Model releases + competitive events with capability deltas |
| **Chinese Velocity** | DeepSeek, Kimi, Qwen, GLM, MiniMax, ByteDance |
| **Financial** | ARR estimates, partner commitments, acquisition signals (with reliability badges) |
| **Products** | Desktop Work apps, hardware, partner networks, education, enterprise packaging |
| **Sources** | Monitored official pages for local collectors |

### July 2026 baseline highlights

Seeded gaps include:

1. No polished Work / desktop super-app (vs Claude Desktop, ChatGPT Work)
2. Cursor → Grok Build productization incomplete (SpaceX $60B deal, exp. close Q3 2026)
3. Enterprise public GTM visibility lag
4. No formal funded partner network (OpenAI $150M / Anthropic $100M)
5. Chinese open-weight cost & velocity (DeepSeek V4, Kimi K2.6)
6. Imagine packaging vs Codex Micro hardware
7. Education / Academy stack vs Google
8. Hackathon / community scale

---

## Screenshots (in-browser)

Open the [live site](https://rdsciv.github.io/FrontierFeatureTracker/) — dark analyst UI with sticky nav:

- `/` — Command Center KPIs  
- `/matrix/` — Grok gap matrix  
- `/gaps/` — scored recommendations  
- `/chinese/` — CN open-weight board  
- `/financial/` — market signals  

---

## Quick start (local)

Requires **Node 20+** (Node 22+ recommended).

```bash
git clone https://github.com/rdsciv/FrontierFeatureTracker.git
cd FrontierFeatureTracker
npm install
npm run dev
```

Open **http://localhost:3456**

```bash
# Rebuild static snapshot from YAML seed
npm run export-data

# Production static export (local paths)
npm run build
# → apps/dashboard/out

# Production export with GitHub Pages base path
npm run build:pages
```

### Optional: local SQLite + collectors

For offline analytics and change detection:

```bash
npm run seed              # YAML → data/tracker.db (node:sqlite)
npm run collect           # hash-monitor data/sources.yaml
npm run report:baseline   # markdown report
npm run report:weekly
```

Collectors run in **proposal mode**: they record scrape runs and events; they never auto-edit curated gaps or the feature matrix.

---

## How data is maintained

| Layer | Role |
|-------|------|
| `data/seed/baseline-2026-07.yaml` | **Curated truth** — edit here, PR-reviewable |
| `npm run export-data` | Builds `apps/dashboard/src/data/tracker.json` for the static site |
| `data/sources.yaml` | URLs for daily/weekly collectors |
| `reports/` | Baseline and weekly markdown summaries |

### Priority scoring

```
priority_score = 0.4 × revenue_impact
               + 0.3 × user_demand
               + 0.3 × competitive_urgency
```

Each component is 1–5. **High ≥ 3.5**, **Medium ≥ 2.5**, else **Low**.

### Governance

- Prefer official primary sources; label press estimates.
- Every claim should carry sources and as-of awareness.
- Be fair to Grok: enterprise identity features exist; gaps are mostly packaging, desktop, channel, visibility, and Cursor migration.

---

## Architecture

```
FrontierFeatureTracker/
├── apps/dashboard/          # Next.js 15 static export (GitHub Pages)
│   └── src/data/tracker.json
├── packages/
│   ├── schema/              # Zod types + scoring
│   ├── db/                  # Optional local SQLite seed/queries
│   └── collectors/          # Optional HTTP change detection
├── data/
│   ├── seed/                # Curated YAML baseline
│   └── sources.yaml
├── scripts/                 # export-data, reports
├── reports/
└── .github/workflows/       # Pages deploy
```

**Runtime on Pages:** fully static HTML/JS/CSS. No server, no database.

---

## Deploy (GitHub Pages)

This repo deploys automatically on every push to `main`:

1. Workflow: [`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml)
2. Builds with `GITHUB_PAGES=true` (sets `basePath` to `/FrontierFeatureTracker`)
3. Uploads `apps/dashboard/out` to GitHub Pages

**Manual enable (once):** repo **Settings → Pages → Source: GitHub Actions**.

Site URL:

```
https://rdsciv.github.io/FrontierFeatureTracker/
```

---

## Cadence (recommended)

| Cadence | Action |
|---------|--------|
| **Daily** | `npm run collect` in a local clone; review alerts |
| **Weekly** | Update seed YAML after feature audit; push → Pages rebuilds |
| **Quarterly** | Earnings / IR deep-dive; refresh `financialSignals` |

---

## Companies tracked (core set)

**Western:** xAI / SpaceXAI, OpenAI, Anthropic, Google / DeepMind, Meta, Microsoft, Amazon, Mistral (watch), Anysphere / Cursor  

**Chinese:** DeepSeek, Moonshot / Kimi, Alibaba / Qwen, Zhipu / GLM, MiniMax, ByteDance  

---

## Contributing

1. Edit `data/seed/baseline-2026-07.yaml` (or add a new dated seed).
2. Run `npm run export-data` and sanity-check with `npm run dev`.
3. Open a PR with sources and reliability notes for new claims.

---

## License

Data and analysis in this repository are provided for research and product strategy purposes.  
Third-party trademarks and product names belong to their respective owners.

---

## Disclaimer

ARR figures and some capability claims are **press-reported estimates** unless marked official. Always re-verify against primary sources before executive or investment decisions.
