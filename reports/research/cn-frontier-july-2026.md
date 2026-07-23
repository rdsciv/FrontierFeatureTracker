# Chinese & Open-Weight Frontier Models — July 2026 Research Brief

**As of:** 2026-07-23  
**Scope:** Primary and near-primary sources on CN frontier / open-weight models that moved markets or competitive positioning in June–July 2026.  
**Use:** Competitive intelligence for Grok / xAI gap scoring.  
**Epistemic notes:** Vendor benchmarks are self-reported unless noted. “Open weights” ≠ MIT/Apache commercial freedom — check license per model. Active-parameter counts for extreme-sparsity MoE are often estimates.

---

## Executive snapshot

| Rank signal (analyst view, not official) | Lab | Model | Total / active | Open? | Context | Why it matters vs Grok |
|---|---|---|---|---|---|---|
| ~#3 open/closed hybrid | Moonshot | **Kimi K3** | 2.8T / ~50B est. | Weights promised 2026-07-27 | 1M | Closest open model to Fable 5 / GPT-5.6 Sol; capacity crisis; aggressive API pricing |
| Strong open coding | Z.ai (Zhipu) | **GLM-5.2** | ~744–753B / ~40B | **MIT live** | 1M | Best usable open long-horizon coding stack; self-hostable now |
| Cost king | DeepSeek | **V4-Pro / V4-Flash** | 1.6T/49B · 284B/13B | **MIT live** | 1M | Still cheapest frontier API; no V5 yet as of July |
| Claimed #2 (unverified) | Alibaba | **Qwen3.8-Max-Preview** | 2.4T / undisclosed | Open “soon” | TBD | Multimodal flagship response to K3; no public bench table |
| Multimodal open | MiniMax | **M3** | ~428B / ~23B | Community license | 1M | First open combo of coding + 1M + native image/video |
| Domestic silicon | Meituan | **LongCat-2.0** | 1.6T / ~48B | Open-source claim | 1M | Trained on 50k CN ASICs — geopolitics + agentic coding |
| Super-app closed | ByteDance Seed | **Seed 2.1 / Doubao** | Undisclosed | Closed | TBD | Consumer scale (Doubao MAU); agent productivity focus |

Analyst ranking of peak intelligence (Nathan Lambert / Interconnects, Jul 20): Fable 5 → GPT-5.6 Sol → **Kimi K3** → Grok 4.5 → **GLM-5.2** → … → Qwen 3.7 Max (3.8 announced). Treat as informed opinion, not measurement.

---

## 1. Moonshot AI — Kimi K3

### Facts (official)

| Field | Value | Source type |
|---|---|---|
| **Release date** | 2026-07-16 (product/API live); weights **scheduled 2026-07-27** | Official blog |
| **Params** | **2.8T total** MoE; activates **16 of 896 experts** (~1.8% sparsity). Active ~50B is community estimate (2.8T × 16/896), not an official single number | Official blog |
| **Architecture** | Kimi Delta Attention (KDA) + Attention Residuals (AttnRes); Stable LatentMoE; Quantile Balancing routing; QAT with MXFP4 weights / MXFP8 activations from SFT; claims **~2.5× scaling efficiency vs Kimi K2** | Official |
| **Context** | **1M tokens** | Official |
| **Modalities** | Native vision (images/video in-loop for coding, game dev, editing) | Official |
| **Open vs closed** | API + products live; **full weights promised by 2026-07-27**. License not yet published with weights | Official |
| **Variants at launch** | K3 Max (chat/agent); K3 Swarm Max (parallel) — press | Press / secondary |

**Primary:** [https://www.kimi.com/blog/kimi-k3](https://www.kimi.com/blog/kimi-k3)

### Positioning vs Claude Fable 5 / GPT-5.6 Sol

Moonshot’s own framing (official blog):

> Overall performance still trails Claude Fable 5 and GPT 5.6 Sol, but Kimi K3 demonstrated frontier-level performance across our evaluation suite, consistently outperforming other tested models.

Self-reported highlights (max thinking effort; harnesses vary — **do not treat as independent**):

- Strong long-horizon coding: kernel optimization competitive with Fable 5; MiniTriton compiler case study; chip design 48h run (marketing case, not a standard bench).
- DeepSWE: K3 with KimiCode harness; Mini-SWE-agent harness cited at **67.3** (v1.1 tasks) in footnotes.
- Terminal-Bench 2.1, Program Bench, SWE-Marathon: vendor footnotes compare against Opus 4.8, Fable 5, GPT-5.6 Sol with **different harnesses** (KimiCode vs Claude Code vs Codex) — apples-to-oranges risk.
- Independent-ish leaderboards (press/secondary, Jul 16–20):
  - **#1 Frontend Code Arena** (~1679 Elo, above Fable 5) — Arena / Tom’s Hardware
  - **#2 Vals AI index**, **#3 Artificial Analysis Intelligence Index** (behind Fable 5 and Sol Max) — Interconnects citing AA/Vals
- Moonshot admits a **UX gap** vs Fable 5 and Sol despite competitive raw scores.

### Pricing (official API)

From Kimi K3 blog / platform:

| Token type | USD / 1M tokens |
|---|---|
| Cache-hit input | **$0.30** |
| Cache-miss input | **$3.00** |
| Output | **$15.00** |

Claimed **>90% cache hit rate** on coding workloads via Mooncake disaggregated inference.  
Rough competitive context (community/OpenRouter, not verified primary for Fable):

- K3: $3 / $15 (miss/out)  
- GPT-5.6 Sol: ~$5 / $30 (community)  
- Claude Fable 5: ~$10 / $50 (community)  

→ K3 often cited as ~⅓ the price of Fable at similar coding capability tiers; still far above DeepSeek.

### Signup / capacity crisis (confirmed press + company statement)

- Within **~48 hours** of launch, demand exceeded Moonshot’s projected load.
- **2026-07-19** (late): company suspended **new consumer subscriptions**, prioritizing existing users; capacity to be restored “in batches.”
- Reported widely (TechNode, Euronews, Reuters-adjacent): compute clusters near max; GPU shortage narrative.
- By ~2026-07-22: some invites/waitlists reopening (community reports — soft).

**Competitive read:** Real demand signal for open-frontier quality at mid-tier API pricing. Also exposes **serving elasticity** as a Chinese lab weakness vs hyperscaler US labs — same pattern Z.ai hit earlier in 2026.

### WAIC / policy context (July 2026)

K3 launched days before **WAIC Shanghai**. Xi Jinping’s WAIC keynote (annotated in secondary policy writing) publicly committed China’s AI path toward **open-source and global diffusion** — same week as the strongest open-weight model announcement. Treat as political signal, not technical validation.

### Why it matters vs Grok / xAI

1. **Capability:** Puts open (soon) Chinese models inside the Fable/Sol discussion — gap vs closed US frontier compressed to ~3–5 months in informed analyst view.
2. **Economics:** Undercuts premium US coding APIs while matching many agent/coding surfaces.
3. **Distribution:** Kimi Code + Work desktop + Enterprise product path; Alibaba-backed infra.
4. **Risk to Grok:** If Grok competes on “frontier open / value” or coding agents, K3 + MIT successors (GLM-5.2, DeepSeek V4) compress differentiation. Grok’s enterprise packaging, desktop, and Cursor-migration gaps remain the relevant competitive surfaces (per project notes) — K3 raises the bar on raw coding/agent quality and open-weight narrative.
5. **Caveats:** Weights not out as of research date; self-hosting economics unknown (supernode ≥64 accelerators recommended); license TBD; UX/polish still trails Fable/Sol per vendor admission.

---

## 2. Zhipu / Z.ai — GLM-5.2

### Facts (official)

| Field | Value | Source |
|---|---|---|
| **Release** | Coding Plan **2026-06-13**; research blog **2026-06-16**; weights shortly after | Official |
| **Params** | MoE; HF reports **753B** model size; press commonly **~744B total / ~40B active** (active is secondary reporting — verify on model card config) | HF + secondary |
| **Context** | **1M tokens** solid long-horizon; max output often cited **~128K–131K** | Official |
| **Architecture** | DSA sparse attention + **IndexShare** (indexer shared every 4 layers → **2.9×** lower per-token FLOPs at 1M vs full indexer); improved MTP speculative decoding (**+20%** acceptance length in ablation); slime agentic RL infra; anti-hack module for coding RL | Official |
| **License** | **MIT**, no regional limits | Official / HF |
| **Weights** | [https://huggingface.co/zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2) (+ FP8 variants; ModelScope) | Primary |
| **Modalities** | Text flagship; separate vision line (GLM-5V-Turbo etc.) | Official pricing |

**Primary blog:** [https://z.ai/blog/glm-5.2](https://z.ai/blog/glm-5.2)  
**Pricing docs:** [https://docs.z.ai/guides/overview/pricing](https://docs.z.ai/guides/overview/pricing)

### Coding / long-horizon claims (vendor table)

Selected official numbers (GLM-5.2 vs closed peers — **vendor evaluation**, note harness footnotes on HF):

| Benchmark | GLM-5.2 | Claude Opus 4.8 | GPT-5.5 | DeepSeek-V4-Pro | MiniMax M3 |
|---|---:|---:|---:|---:|---:|
| SWE-bench Pro | **62.1** | 69.2 | 58.6 | 55.4 | 59.0 |
| Terminal-Bench 2.1 (Terminus-2) | **81.0** | 85.0 | 84.0 | 64.0 | 65.0 |
| DeepSWE | 46.2 | 58.0 | 70.0 | 8.0 | 20.0 |
| FrontierSWE (Dominance) | **74.4** | 75.1 | 72.6 | 29.0 | — |
| PostTrainBench | 34.3 | 37.2 | 28.4 | — | — |
| SWE-Marathon | 13.0 | 26.0 | 12.0 | — | — |
| HLE | 40.5 | 49.8* | 41.4* | 37.7 | 37.0 |
| GPQA-Diamond | 91.2 | 93.6 | 93.6 | 90.1 | 93.0 |

Official narrative: highest **open-source** on long-horizon coding suite; trails Opus 4.8 slightly on FrontierSWE; effort modes High / Max.

**Skepticism:** Harness and context settings differ across rows; some peer scores are “best reported” from other labs. Independent re-runs still thin as of mid-July.

### Pricing vs US APIs

**Z.ai official (per 1M tokens):**

| Model | Input | Cached in | Output |
|---|---:|---:|---:|
| **GLM-5.2** | **$1.40** | **$0.26** | **$4.40** |
| GLM-5.1 | $1.40 | $0.26 | $4.40 |
| GLM-5 | $1.00 | $0.20 | $3.20 |

Third-party OpenRouter routes often discount ~30–45% off list.  
Order-of-magnitude vs US (illustrative): GPT-5.x / Claude Opus-class list prices remain multi-dollar to tens of dollars on output; GLM-5.2 is a **self-hostable MIT** alternative at ~⅙–⅓ closed coding-flagship API cost depending on comparator.

### Why it matters vs Grok

- **Best “download today” open coding model** with real 1M context engineering focus — immediate threat to paid coding agents and self-host enterprise.
- MIT removes regional license friction (unlike some CN community licenses).
- Gaps: still behind Opus 4.8 on hard agentic coding; multimodal less unified than MiniMax M3 / Qwen omni lines.
- Competitive pressure on **Grok Code / agent** pricing and long-repo workflows.

---

## 3. DeepSeek — latest as of July 2026

### Status: V4 is current; no V5 public release

| Field | DeepSeek-V4-Pro | DeepSeek-V4-Flash |
|---|---|---|
| **Release** | Preview **2026-04-24** (API + open weights) | Same |
| **Params** | **1.6T total / 49B active** | **284B / 13B** |
| **Context** | **1M** (default across services) | 1M |
| **Max output** | **384K** | 384K |
| **License** | **MIT** | MIT |
| **Weights** | [HF DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro) · [collection](https://huggingface.co/collections/deepseek-ai/deepseek-v4) | Flash + Base variants |
| **ArXiv** | 2606.19348 (paper dated Apr 26 on HF) | |

**Official API announcement:** [https://api-docs.deepseek.com/news/news260424/](https://api-docs.deepseek.com/news/news260424/)

### Architecture (official)

1. Hybrid attention: Compressed Sparse Attention (CSA) + Heavily Compressed Attention (HCA)  
2. At 1M: V4-Pro claims **~27%** of V3.2 single-token FLOPs and **~10%** KV cache  
3. Manifold-Constrained Hyper-Connections (mHC); Muon optimizer  
4. Pretrain **>32T** tokens; post-train: domain experts (SFT+GRPO) → on-policy distillation  
5. Modes: Non-think / Think High / Think Max  

### Post-April 2026 trajectory

- **No V5 / R2 successor announced** as of 2026-07-23 research.
- Legacy aliases `deepseek-chat` / `deepseek-reasoner` route to V4-Flash non-thinking/thinking; **full retirement 2026-07-24 15:59 UTC**.
- Pricing stabilized after launch promo; international docs show current rates below.
- Still appears in peers’ bench tables (GLM-5.2 blog) as open baseline — not always top open anymore after K3/GLM-5.2.

### Official pricing (api-docs, July 2026)

| Model | Cache hit in | Cache miss in | Output |
|---|---:|---:|---:|
| **deepseek-v4-flash** | **$0.0028** | **$0.14** | **$0.28** |
| **deepseek-v4-pro** | **$0.003625** | **$0.435** | **$0.87** |

Concurrency caps: Flash 2500 / Pro 500.  
**Still the structural cost leader** among frontier-capable APIs.

### Why it matters vs Grok

- Price floor for intelligence remains DeepSeek-defined — any Grok API pricing story is measured against Flash/Pro.
- MIT open weights enable Western distill/self-host ecosystems.
- Capability: strong math/code (LiveCodeBench, Codeforces ratings self-reported high); agentic coding lags GLM-5.2 / K3 / Opus on several SWE-style benches in **other labs’** tables.
- Competitive: DeepSeek is the **volume / commodity frontier** player, not the July hype peak.

---

## 4. Alibaba Qwen — latest (Qwen3.x / Qwen3.8)

### Lineage (2026 H1 → July)

| Model | Approx date | Open? | Notes |
|---|---|---|---|
| Qwen3.5 / 3.5-Plus | Feb 2026 | Mixed (Plus closed) | Agent / desktop-mobile operation claims |
| Qwen3.6 / 3.6-Plus / open 27B | Apr 2026 | 3.6 Apache open; Max/Plus often closed | Coding-dense small open |
| Qwen3.7-Max / Plus | May–Jun 2026 | **Proprietary** | Agent-centric; Cloud Model Studio live (`qwen3.7-max-2026-06-08`) |
| **Qwen3.8-Max-Preview** | **2026-07-19** | **Open weights “soon” (no date)** | 2.4T MoE multimodal claim |

Wikipedia / Alibaba Cloud product pages corroborate 3.5→3.7 progression; July 3.8 is the market mover.

### Qwen3.8-Max-Preview — what is confirmed vs marketing

**Confirmed (Alibaba Qwen announcements / multiple secondary replications):**

- Parameter scale **2.4T** (sparse MoE)
- Multimodal (first trillion-class Qwen Max with vision/video/doc emphasis)
- Preview on Token Plan / Qoder / QoderWork
- Promise: open weights **soon**
- Self-claim: performance **second only to Claude Fable 5** among systems they benchmarked

**Not confirmed as of 2026-07-23:**

- Active parameter count  
- Public benchmark table / model card on HF  
- License terms for open drop  
- Standard pay-as-you-go API price list (Token Plan credit promo: 10× usage during preview; night discounts — **promotional, not list**)  
- Independent leaderboard presence

**Skeptical press:** TNW, TechTimes, MarkTechPost — “No.2 claim without receipts.” Fair assessment until tables ship.

### Why it matters vs Grok

- Alibaba can **force open-weight escalation** after K3 (2.4T promised open > prior open records if weights ship cleanly).
- Cloud + Taobao agentic commerce distribution is a closed-ecosystem moat DeepSeek/Moonshot lack.
- Until benches and weights land, treat as **strategic announcement**, not verified capability parity with Fable 5.
- Stock reaction (Alibaba shares up on unveil — Yahoo/Bloomberg) shows capital-markets sensitivity.

---

## 5. MiniMax — M3

### Facts (official + HF)

| Field | Value |
|---|---|
| **Release** | **2026-06-01** |
| **Params** | **~428B total / ~23B active** MoE (HF card) |
| **Context** | **1M** via **MSA** (MiniMax Sparse Attention) — claims ~1/20 per-token compute vs prior gen; **>9× prefill, >15× decode** at 1M |
| **Modalities** | **Native multimodal** from step 0: image + video in; desktop computer-use |
| **Open** | Weights on HF: [MiniMaxAI/MiniMax-M3](https://huggingface.co/MiniMaxAI/MiniMax-M3) |
| **License** | **`minimax-community`** — open weights but **commercial use needs separate agreement** (not MIT/Apache) |
| **Product** | MiniMax Code (agent), Token Plan Plus/Max/Ultra ($20 / $50 / $120) |

**Primary:** [https://www.minimax.io/blog/minimax-m3](https://www.minimax.io/blog/minimax-m3)

### Benchmarks (vendor)

- SWE-Bench Pro **59.0%**  
- Terminal-Bench 2.1 **66.0%** (blog; GLM table lists 65)  
- SWE-fficiency 34.8%; KernelBench Hard 28.8%; MCP Atlas **74.2%**  
- Long-horizon demos: ICLR paper reproduction ~12h; Hopper FP8 GEMM kernel 7.6%→71.3% utilization over 24h (case studies)

### Pricing (official pay-as-you-go, Standard tier, “permanent 50% off”)

| Input size | Input | Output | Cache read |
|---|---:|---:|---:|
| ≤512k | **$0.30** | **$1.20** | **$0.06** |
| >512k | **$0.60** | **$2.40** | **$0.12** |

Priority tier 1.5×. List without discount: 2× these promo rates.

### Why it matters vs Grok

- Only open-weight model that **simultaneously** claims frontier coding + 1M + native multimodality — unique for screenshot-driven coding and computer use.
- License is a **gotcha** for commercial self-host vs GLM/DeepSeek MIT.
- Cheaper API than K3/GLM for many workloads; weaker pure text coding vs GLM-5.2/K3 on cross-lab tables.

---

## 6. ByteDance — Doubao / Seed

### Seed 2.0 → Seed 2.1 (2026)

| Field | Detail |
|---|---|
| **Seed 2.0** | Feb 2026; model card PDF; Volcano Engine `Doubao-Seed-2.0-pro`; closed frontier for Doubao app |
| **Seed 2.1** | Announced **2026-06-23** Volcano Engine FORCE; SKUs **Pro** + **Turbo** (`doubao-seed-2-1-pro-260628`, `…-turbo-…`) |
| **Positioning** | “Next-generation agent for real-world productivity”; multimodal, coding, GUI |
| **Open weights** | **No** — closed API / app stack |
| **Params** | Undisclosed publicly for 2.1 |
| **Video/image siblings** | Seedance 2.0 / 2.5 (video), Seedream 5.0 Pro (image), Seed Audio 1.0 |
| **Consumer scale** | Doubao among top CN chat apps by MAU historically; super-app integration (Douyin/TikTok ecosystem) |

**Primary hub:** [https://seed.bytedance.com/en/](https://seed.bytedance.com/en/)

Secondary claim (The Decoder, Jun 23): Doubao 2.1 Pro ~**80% cheaper** than Claude Opus 4.6 — vendor/conference rhetoric; verify Volcano Engine price list before budgeting.

### Why it matters vs Grok

- Not an open-weight threat; **distribution + multimodal entertainment/commerce** threat.
- Seedance video generation is a product-surface competitor separate from LLM chat.
- Less relevant to open-weight developer mindshare than K3/GLM/DeepSeek; highly relevant to **consumer assistant retention** in CN and SE Asia.

---

## 7. Other June–July 2026 movers

### Meituan LongCat-2.0 (2026-06-30) — high geopolitical signal

| Field | Claim |
|---|---|
| **Params** | **1.6T MoE / ~48B active** |
| **Context** | 1M |
| **Training** | **>30–35T tokens** on **~50,000 domestic AI ASICs** — first claimed trillion-class train+serve fully off Nvidia |
| **Open** | Open-source / weights upload progressive (HF activity reported) |
| **Prior stealth** | “Owl Alpha” on OpenRouter — high agent traffic (Hermes/Claude Code/OpenClaw volume claims) |
| **Benches (vendor)** | Competitive on SWE-bench Pro (~59.5), Terminal-Bench; trails global frontier on knowledge (GPQA etc.) |

**Press:** Reuters, SCMP, The Decoder.  
**Why it matters:** Proof-of-concept that export controls do not fully block frontier-scale training; LongCat is secondary to K3/GLM for pure quality but primary for **hardware sovereignty** narrative.

### Xiaomi MiMo / StepFun / others

- Present in “overlooked makers” analyses (Tech Buzz China) but **no June–July 2026 release of K3/GLM magnitude** found in this pass.
- Monitor MiMo for device-edge + HyperOS integration, not cloud frontier leaderboards.

### Qwen-Image-3.0 / AgentWorld (2026-07-21)

- Alibaba image gen + agent world-model research drops same week as K3 aftermath — multimodal stack completeness, not LLM frontier displacement.

---

## Cross-model comparison (researcher synthesis)

### Open weights availability (as of 2026-07-23)

| Model | Weights status | License quality for commercial |
|---|---|---|
| DeepSeek V4 | Live | **MIT** ✅ |
| GLM-5.2 | Live | **MIT** ✅ |
| MiniMax M3 | Live | Community — commercial extra ⚠️ |
| LongCat-2.0 | Rolling open | Confirm card |
| Kimi K3 | **Due 2026-07-27** | TBD |
| Qwen3.8-Max | Promised “soon” | TBD |
| Seed 2.1 | Closed | N/A |

### 1M context club (CN)

Kimi K3, GLM-5.2, DeepSeek V4, MiniMax M3, LongCat-2.0 — **1M is table stakes** for CN frontier mid-2026. Grok product messaging must assume competitors hold full-repo + long-agent trajectories in-window.

### Price ladder (API list-ish, USD / 1M, cache miss in → out)

| Model | In | Out | Notes |
|---|---:|---:|---|
| DeepSeek V4-Flash | 0.14 | 0.28 | Floor |
| DeepSeek V4-Pro | 0.435 | 0.87 | Best value “smart” |
| MiniMax M3 (≤512k promo) | 0.30 | 1.20 | Multimodal |
| GLM-5.2 | 1.40 | 4.40 | MIT self-host alternative |
| Kimi K3 | 3.00 | 15.00 | + $0.30 cache hit |
| Claude Fable 5 (community) | ~10 | ~50 | Closed premium |
| GPT-5.6 Sol (community) | ~5 | ~30 | Closed premium |

### Competitive implications for Grok / xAI

1. **Open-weight shock is real in July 2026.** K3 + MIT GLM-5.2 + DeepSeek V4 compress the “only closed US models are smart” story. Analysts place K3 above Grok 4.5 on some intelligence indices — verify with internal evals, do not outsource ranking to Substack.
2. **Coding agents are the battleground.** Every CN lab leads with SWE / Terminal / long-horizon agent demos and Claude Code / OpenClaw compatibility. Grok gaps called out in project notes (packaging, desktop, channel, Cursor migration) are exactly where CN open models + cheap APIs attack.
3. **Price discrimination hardens.** DeepSeek sets the floor; K3/GLM sit mid; US premium needs clear quality/UX/safety/enterprise justification.
4. **Self-host enterprise** will prefer MIT (GLM, DeepSeek) over community licenses (MiniMax) and over closed Seed.
5. **Capacity / reliability** remains a CN weak spot (K3 signup freeze) — Grok can compete on uptime, enterprise SSO, support, and global compliance if model quality stays within a tight band.
6. **Be fair / be precise:** Chinese labs are not “only distillers.” Architecture papers (IndexShare, MSA, CSA/HCA, KDA/AttnRes, domestic ASIC training) show genuine systems R&D. Distillation may still occur; it is no longer a sufficient explanation for frontier results.
7. **Watch dates:** K3 weights **2026-07-27**; Qwen3.8 open drop; any DeepSeek V4.x full (non-preview) or V5 rumor; Seed price list; independent Arena/AA re-runs of K3 after weight release.

---

## Source index (prefer these)

### Official / primary

- Kimi K3: https://www.kimi.com/blog/kimi-k3  
- GLM-5.2 blog: https://z.ai/blog/glm-5.2  
- GLM-5.2 HF: https://huggingface.co/zai-org/GLM-5.2  
- Z.ai pricing: https://docs.z.ai/guides/overview/pricing  
- DeepSeek V4 API news: https://api-docs.deepseek.com/news/news260424/  
- DeepSeek pricing: https://api-docs.deepseek.com/quick_start/pricing/  
- DeepSeek-V4-Pro HF: https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro  
- MiniMax M3: https://www.minimax.io/blog/minimax-m3  
- MiniMax M3 HF: https://huggingface.co/MiniMaxAI/MiniMax-M3  
- MiniMax paygo pricing: https://platform.minimax.io/docs/guides/pricing-paygo  
- ByteDance Seed: https://seed.bytedance.com/en/  
- LongCat-2.0: https://longcat.chat/blog/longcat-2.0/  
- Qwen research: https://qwen.ai/research  

### High-signal secondary (opinion / aggregation)

- Nathan Lambert, Interconnects — “Kimi K3: The open-weights escalation” (2026-07-20): https://www.interconnects.ai/p/kimi-k3-the-open-weights-escalation  
- TechNode — K3 capacity suspension: https://technode.com/2026/07/20/kimi-k3-overwhelms-capacity-just-days-after-launch-suspends-new-consumer-subscriptions/  
- Tom’s Hardware — K3 + Frontend Arena: https://www.tomshardware.com/tech-industry/artificial-intelligence/moonshot-releases-2-8-trillion-parameter-kimi-k3  
- Reuters — LongCat domestic chips: https://www.reuters.com/world/china/chinas-meituan-says-new-ai-model-trained-domestic-chips-2026-06-30/  
- TNW / MarkTechPost — Qwen3.8 claim skepticism  

### Explicitly marketing / low confidence without re-run

- Vendor case studies (chip design, paper reproduction, kernel marathon)  
- “#2 model in the world” claims without published tables (Qwen3.8)  
- Community Elo / pricing screenshots without official docs  

---

## Research hygiene checklist for next update

- [ ] Confirm Kimi K3 weights + license on/after 2026-07-27  
- [ ] Independent Arena / Artificial Analysis / SWE-bench Pro re-runs with fixed harness  
- [ ] Qwen3.8 full release card + active params  
- [ ] DeepSeek post-2026-07-24 model naming cleanup  
- [ ] LongCat HF weight completeness + license  
- [ ] Volcano Engine Seed 2.1 published $/MTok  
- [ ] Internal Grok evals vs K3 API (coding agent + long context + tool use)  

---

*Prepared for Frontier Feature Tracker · research only · not curated seed truth. Promote durable facts into `data/seed/` only after source verification and reliability tags.*
