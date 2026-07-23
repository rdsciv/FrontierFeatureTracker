# Competitive Landscape — Late July 2026

**As of:** 2026-07-23  
**Method:** Primary-source + reputable press triangulation. Prior seed was stale (K2.7 era, user-seeded gaps only).

## The actual story of June–July 2026

Three simultaneous shocks:

1. **Closed frontier generation jump** — Anthropic Claude Fable 5 (Jun 9, export-control pause, restored Jul 1); OpenAI GPT-5.6 Sol/Terra/Luna GA Jul 9 (Sol = flagship coding/agentic).
2. **Open-weight frontier parity** — Z.ai GLM-5.2 (Jun, MIT, long-horizon coding); Thinking Machines Inkling (Jul 15, Apache 2.0, multimodal 975B/41B); Moonshot **Kimi K3** (Jul 16 WAIC, **2.8T**, open weights pending Jul 27, signup capacity crisis, chip-market reaction).
3. **Product packaging** — ChatGPT desktop Work+Codex (Jul 9); Claude Desktop Cowork/Code; Codex Micro hardware; partner channels.

**Grok 4.5 is not absent from the board** (Design Arena agentic web: Grok 4.5 ≈ 1271, near GLM-5.2 1275, above GPT-5.6 Sol 1260 on that leaderboard per Inkling blog). The problem is **narrative + open distribution + product surfaces + generation cadence**, not zero capability.

---

## Model table (priority set)

| Model | Lab | Date | Specs | Open? | Why it matters |
|-------|-----|------|-------|-------|----------------|
| **Kimi K3** | Moonshot | 2026-07-16 | ~2.8T, 1M ctx, native vision | Open weights (full release ~Jul 27); API live | Largest open-weight ever at launch; WAIC; signup pause; market shock; claims competitive with Fable 5 / Sol |
| **GPT-5.6 Sol** | OpenAI | 2026-07-09 GA | Closed frontier; Sol/Terra/Luna tiers | Closed | Flagship coding; ultra multi-agent; ChatGPT+Codex Work path; Sol ~$5/$30 per M |
| **Claude Fable 5** | Anthropic | 2026-06-09; restored 2026-07-01 | Mythos-class public config | Closed | Long-horizon agentic; export control drama; Code/Cowork/Desktop |
| **GLM-5.2** | Z.ai (Zhipu) | 2026-06-13+ | ~744B MoE, 1M ctx | MIT open HF | Long-horizon coding; ~1/6 US API cost claims; open SWE/agent pressure |
| **Inkling** | Thinking Machines | 2026-07-15 | 975B/41B MoE, 1M ctx, text+image+audio | Apache 2.0 HF | Western open multimodal base; fine-tune-first (Tinker); Murati lab |
| **DeepSeek V4-Pro/Flash** | DeepSeek | 2026-04-24 | Pro ~1.6T/49B, Flash MoE | MIT | Still core CN cost/coding baseline; R2/V5 not confirmed GA as of late Jul |
| **Qwen3.6 family** | Alibaba | 2026-04+ | Plus hosted; 27B dense open; 35B-A3B | Mixed open/closed | Strong local coding; AgentWorld (Jun); Image-3.0 (Jul 21) |
| **Grok 4.5** | xAI | 2026 | Flagship closed | Closed | Competitive on some agentic boards; Imagine+Build+API |
| **grok-build-0.1** | xAI | 2026-05-29 | Coding model | Closed API | Build CLI power; Cursor integration pending |

### Primary sources
- https://thinkingmachines.ai/news/introducing-inkling/
- https://z.ai/blog/glm-5.2
- https://openai.com/index/gpt-5-6/
- https://www.anthropic.com/claude/fable
- https://www.cnbc.com/2026/07/17/moonshot-ai-kimi-k3-model-openai-anthropic-china.html
- https://www.euronews.com/next/2026/07/20/chinese-ai-model-kimi-k3-halts-new-signups-amid-skyrocketing-demand

---

## Gap ranking (first principles — NOT user-seed echo)

Scored as: revenue impact × demand × urgency, but **urgency reweighted for July 2026 open-weight shock**.

### P0 — Existential competitive pressure (this month)

| ID | Gap | R | D | U | Score | Why now |
|----|-----|---|---|---|-------|---------|
| gap-open-weight-era | No open-weight / distill response in K3–GLM–Inkling era | 5 | 5 | 5 | **5.0** | Open frontier is where builders, startups, and CN/US cost pressure live. Closed-only loses share of mind and self-host ARR. |
| gap-frontier-generation | Flagship narrative lag vs Fable 5 + GPT-5.6 Sol + K3 | 5 | 5 | 5 | **5.0** | Jul 2026 closed+open dual frontier; Grok 4.5 needs public SOTA coding/agent proof or next gen. |
| gap-agentic-coding-product | Agentic coding surface incomplete vs Codex Work / Claude Code / open SWE | 5 | 5 | 5 | **5.0** | Token spend concentration is coding agents; Cursor $60B not closed; Build alone insufficient. |
| gap-cn-cost-velocity | Cost ladder & release cadence vs CN open MoE | 4 | 5 | 5 | **4.6** | K3 capacity crisis = demand proof; GLM cost claims; V4 still undercuts Western APIs. |

### P1 — Distribution & packaging (still high, not #1)

| ID | Gap | R | D | U | Score | Why |
|----|-----|---|---|---|-------|-----|
| gap-desktop-work | No desktop Work super-app | 4 | 5 | 4 | **4.3** | Real competitor shipping (ChatGPT Work Jul 9, Claude Desktop) but secondary to model/open war this month. |
| gap-cursor-migration | Cursor → Grok Build productization pre-close | 5 | 4 | 4 | **4.4** | Strategic but deal close Q3; must ship milestones now. |
| gap-partner-network | No funded partner/consultant network | 5 | 3 | 4 | **4.1** | Channel is enterprise lagging indicator; still critical for 2026–27 GTM. |

### P2 — Amplifiers

| ID | Gap | R | D | U | Score |
|----|-----|---|---|---|-------|
| gap-enterprise-visibility | Enterprise public GTM/case studies opaque | 4 | 3 | 3 | **3.4** |
| gap-imagine-packaging | Imagine underrated; no hardware/ecosystem amp | 3 | 3 | 3 | **3.0** |
| gap-education | No Academy/webinar stack | 2 | 3 | 2 | **2.3** |
| gap-hackathons | Limited hackathon scale | 2 | 2 | 2 | **2.0** |

### Strengths (fair to Grok — do not only list gaps)

1. **Grok 4.5 agentic web competitive** (Design Arena ~1271 near GLM-5.2).
2. **Real-time search + X distribution** unique.
3. **Imagine** image/video/agent canvas capable (packaging problem, not model absence).
4. **Grok Build + Cursor path** if close executes.
5. **Business/Enterprise SSO/SCIM/RBAC exist** — visibility ≠ capability gap.

---

## Steal-share opportunities (evidence-tied)

1. **Open distill / hybrid open** — answer K3/Inkling/GLM without full model dump if strategy prefers closed flagship.
2. **Default coding agent post-Cursor** — own enterprise coding ARR Anthropic/OpenAI are mining.
3. **Price/perf + throughput public leaderboard war** — win cost-sensitive agent builders before CN open locks them in.
4. **Multimodal agent (Imagine + tools)** vs Inkling open multimodal base.
5. **Desktop Work** still open if shipped with Build tab + real-time differentiator.

---

## What the old tracker got wrong

1. Featured **Kimi K2.7-Code** as current — **K3 is the story** (Jul 16).
2. Missed **GLM-5.2**, **Inkling**, **Fable 5**, **GPT-5.6 Sol** as current frontier.
3. Gap board was almost entirely **user-seeded GTM gaps**; open-weight generation war was under-weighted.
4. Dashboard UI elevated only “High priority gaps” without showing **why now** or **model timeline heat**.
