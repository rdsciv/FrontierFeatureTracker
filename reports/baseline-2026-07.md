# Frontier Feature Tracker — July 2026 Baseline Report

**Baseline date:** 2026-07-01  
**As of:** 2026-07-22  
**Generated:** 2026-07-23T10:33:58.174Z

Internal competitive intelligence for xAI / SpaceXAI product, GTM, and leadership. Every seeded claim should be re-verified against primary sources before executive decisions.

## Executive summary

Western competitors have moved from model releases alone into **desktop Work super-apps**, **funded partner channels**, **coding-agent packaging**, and **hardware amplification**. Chinese labs are shipping **open-weight MoE frontier models** at high cadence and low cost. Grok has strong models (4.5), Grok Build, Imagine, and real enterprise identity features — gaps are primarily **packaging, visibility, channel, desktop, and Cursor productization**.

## Priority gaps (scored)

| Priority | Score | Gap | Grok status | Owner | Recommended action |
|---|---:|---|---|---|---|
| **high** | 5 | No polished Work / desktop super-app | missing | product | Ship Grok Desktop (macOS/Windows) with Chat + Work + Build tabs; unify agentic knowledge work and coding; match free/pai… |
| **high** | 5 | Cursor capabilities not fully productized into Grok Build | partial | eng | Publish migration roadmap milestones; prioritize managed cloud agents, multi-repo IDE, enterprise controls, and single-b… |
| **high** | 4.4 | Enterprise offering exists but public visibility lags | partial | gtm | Publish detailed enterprise pages, named case studies (where allowed), ROI calculator, compliance matrix, and transparen… |
| **high** | 4.4 | No formal funded partner / consultant network | missing | partnerships | Launch Grok Partner Network with multi-year funding, certification curriculum, co-sell mechanics, and public partner dir… |
| **high** | 4.3 | Chinese open-weight cost and velocity pressure | partial | product | Maintain cost ladder and throughput leadership on API; optional distill/open strategy evaluation; dedicate PM dashboard … |
| **medium** | 3.3 | Grok Imagine capable but under-packaged vs Codex hardware ecosystem | partial | product | Launch creator hardware collab or first-party controller for Imagine/Build agents; amplify Agent Mode canvas in GTM; sho… |
| **medium** | 3 | No full online learning environment comparable to Google | missing | marketing | Stand up Grok Academy with role-based paths (builder, educator, enterprise admin), monthly webinar series, and certifica… |
| **low** | 2.3 | Limited hackathon and sponsorship scale | partial | marketing | Expand Grokathon cadence, prize pools, university and enterprise sponsorships; integrate Build + Imagine tracks. |

### Scoring

`priority_score = 0.4 * revenue_impact + 0.3 * user_demand + 0.3 * competitive_urgency` (each 1–5). High ≥ 3.5, Medium ≥ 2.5.

## Steal market share opportunities

### Steal share: Desktop Work / knowledge-work super-app

- **Urgency:** high
- **Category:** Productivity / agentic work apps
- **Move:** Fast-follow Grok Desktop Work with Build tab; position real-time search + Imagine as differentiators.
- **Notes:** Overlaps with OpenAI/Anthropic enterprise + prosumer subscription growth; coding agents accelerating ARR.
- **Linked gaps:** gap-desktop-work

### Steal share: Enterprise coding agents post-Cursor close

- **Urgency:** high
- **Category:** Developer tools / coding agents
- **Move:** Make Grok Build + Cursor the default enterprise coding platform; aggressive migration incentives.
- **Notes:** Category pricing power high; Claude Code cited as multi-billion billings trajectory in press.
- **Linked gaps:** gap-cursor-migration

### Steal share: SI and consultant channel

- **Urgency:** high
- **Category:** Enterprise services channel
- **Move:** Fund Grok Partner Network; target Global SI + boutique AI consultancies; co-marketing pool.
- **Notes:** Partner-sourced pipeline becomes majority of enterprise AI deals as programs mature.
- **Linked gaps:** gap-partner-network, gap-enterprise-visibility

### Steal share: Creative multimodal packaging

- **Urgency:** medium
- **Category:** Creative tools / prosumer multimodal
- **Move:** Imagine hardware collab + creator fund + Agent Mode showcases.
- **Linked gaps:** gap-imagine-packaging

### Steal share: Education and professional enablement

- **Urgency:** medium
- **Category:** Education / skilling
- **Move:** Grok Academy + educator free tiers + weekly webinars.
- **Linked gaps:** gap-education

### Defend/expand: Cost-sensitive agent builders

- **Urgency:** high
- **Category:** API / open-weight competition
- **Move:** Transparent price/perf leadership messaging; throughput SLAs; optional open strategy review.
- **Linked gaps:** gap-chinese-velocity

## Financial signals (excerpt)

| Company ID | Metric | Value | Reliability | Estimate? |
|---|---|---|---|---|
| openai | Annualized revenue run-rate | 24-25 USD billions | reputable_press | yes |
| anthropic | Annualized revenue run-rate | 30+ USD billions | reputable_press | yes |
| openai | Partner Network commitment | 150 USD millions | official | no |
| anthropic | Claude Partner Network commitment | 100 USD millions | official | no |
| anysphere | Acquisition valuation | 60 USD billions | official | no |
| google | Google Cloud growth / AI contribution | Track next 10-Q n/a | official | yes |
| microsoft | Azure AI + OpenAI partnership commentary | Track next 10-Q n/a | official | yes |
| amazon | AWS AI / Bedrock commentary | Track next 10-Q n/a | official | yes |

## Model landscape snapshot

- **GPT-5.6** (OpenAI, western) — 2026-07-01 — closed — Faster computer use cited in ChatGPT Work / Codex desktop merge (Jul 2026).
- **Kimi K2.7-Code** (Moonshot / Kimi, chinese) — 2026-06-12 — open — Coding-focused successor on K2.6 base.
- **grok-build-0.1** (xAI / SpaceXAI, western) — 2026-05-29 — closed — Coding model for Grok Build CLI; agentic coding, MCP; ~100+ tok/s.
- **Grok 4.5** (xAI / SpaceXAI, western) — 2026-05-01 — closed — Flagship for coding, low hallucination, agentic tool calling. Powers API + consumer + Business.
- **Claude Opus 4.7** (Anthropic, western) — 2026-05-01 — closed — Top-tier closed reasoning on Artificial Analysis composites; desktop computer use.
- **Qwen3.6 Max / Preview** (Alibaba / Qwen, chinese) — 2026-05-01 — open — Open-weight peer of Kimi/DeepSeek on AA Index composites.
- **Gemini 3.1 Pro Preview** (Google / DeepMind, western) — 2026-05-01 — closed — Multimodal + Cloud/Vertex distribution; education stack integration.
- **DeepSeek V4-Pro** (DeepSeek, chinese) — 2026-04-24 — open — Open-weight MoE frontier; coding + tools; heavy cost pressure on Western APIs.
- **DeepSeek V4-Flash** (DeepSeek, chinese) — 2026-04-24 — open — Cheap/fast open MoE for high-volume agents.
- **GPT-5.5** (OpenAI, western) — 2026-04-23 — closed — Frontier closed model concurrent with DeepSeek V4 window; powers ChatGPT Work + Codex computer use path.
- **Kimi K2.6** (Moonshot / Kimi, chinese) — 2026-04-20 — open — VLM; multi-agent swarms; multi-day plan-write-test-debug coding loops; bilingual strength.
- **Llama (latest frontier open)** (Meta, western) — n/a — open — Meta open-weight distribution; track successive Llama major releases.

## Critical timeline events

- **2026-07-09** — ChatGPT desktop super-app ships Work + Codex merge ([source](https://openai.com/index/chatgpt-for-your-most-ambitious-work/))
- **2026-06-16** — SpaceX announces $60B Cursor / Anysphere acquisition ([source](https://www.cnbc.com/2026/06/16/spacex-spcx-cursor-acquisition-ipo.html))
- **2026-06-14** — OpenAI Partner Network launches ($150M, 300k consultants) ([source](https://openai.com/index/introducing-openai-partner-network/))
- **2026-04-24** — DeepSeek V4-Pro and V4-Flash open-weight release ([source](https://api-docs.deepseek.com/news/news260424))
- **2026-04-20** — Kimi K2.6 release ([source](https://www.kimi.com/blog/kimi-k2-6))

## Operating cadence

| Cadence | Action |
|---|---|
| Daily | `npm run collect` — hash product/docs/pricing pages; write alerts on change |
| Weekly | Full feature audit — update `data/seed/baseline-*.yaml` matrix cells; re-seed |
| Real-time | Watch key lab blogs + X; critical events → `events` table |
| Quarterly | Earnings deep-dive (Alphabet, MSFT, AMZN, Meta); refresh financial_signals |

## How to maintain

1. Edit curated YAML under `data/seed/` (diffable, reviewable).
2. `npm run seed` reloads SQLite.
3. `npm run dev` opens the dashboard at http://localhost:3456.
4. Collectors never auto-overwrite gaps/matrix (proposal mode / events only).

---
*Generated by `npm run report:baseline`.*