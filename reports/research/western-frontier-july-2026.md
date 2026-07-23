# Western Frontier AI — Competitive Intelligence Brief

**As of:** 2026-07-23  
**Audience:** xAI / Grok product & strategy  
**Method:** Primary sources preferred (vendor blogs, docs, product pages); press labeled separately.  
**Scope:** OpenAI, Anthropic, Google Gemini, Meta Llama/Muse, Thinking Machines Lab Inkling, Microsoft Azure AI packaging, xAI/Grok 4.5 stack.

---

## Executive snapshot (Grok lens)

| Lab | Flagship (Jul 2026) | Packaging edge vs Grok | Threat to Grok |
|-----|---------------------|------------------------|----------------|
| **OpenAI** | GPT-5.6 **Sol** (+ Terra, Luna) | ChatGPT Work + Codex desktop + multi-agent Ultra | **Critical** — enterprise default, agent harness depth |
| **Anthropic** | Claude **Fable 5** / Mythos 5; Sonnet 5 everyday | Desktop Chat/Code/Cowork; Partner Network; multi-cloud | **Critical** — coding agents, computer use, SI channel |
| **Google** | Gemini **3.x** (3.1 Pro, 3.5/3.6 Flash) | Workspace + Education + GEAP (ex-Vertex) | **High** — distribution, education lock-in |
| **Meta** | Llama 4 (open) + **Muse Spark** (closed product) | Consumer apps/glasses; open weights still used | **Medium** — open ecosystem; closed Muse is product play |
| **Thinking Machines** | **Inkling** (Apache 2.0 MoE) | Open weights + Tinker fine-tune platform | **Medium-High** — open multimodal US alternative |
| **Microsoft** | Foundry multi-model (OpenAI + Claude + xAI + …) | Azure identity/billing/governance + Copilot | **High** — packaging layer, not a model lab |
| **xAI / Grok** | **Grok 4.5** + Build + Imagine | Speed, price, Office plugins, open Build harness | — |

**Pricing (API, vendor-stated, per 1M tokens, input/output):**

| Model | Input | Output |
|-------|------:|-------:|
| GPT-5.6 Sol | $5.00 | $30.00 |
| GPT-5.6 Terra | $2.50 | $15.00 |
| GPT-5.6 Luna | $1.00 | $6.00 |
| Claude Fable 5 / Mythos 5 | $10.00 | $50.00 |
| Claude Opus 4.8 | $5.00 | $25.00 |
| Claude Sonnet 5 (intro through 2026-08-31) | $2.00 | $10.00 |
| Claude Sonnet 5 (standard after) | $3.00 | $15.00 |
| **Grok 4.5** | **$2.00** | **$6.00** |

---

## 1. OpenAI

### 1.1 Flagship: GPT-5.6 family (Sol / Terra / Luna)

| Field | Detail | Source type |
|-------|--------|-------------|
| **GA date** | **2026-07-09** (limited preview ~2026-06-26) | Official |
| **Predecessor** | GPT-5.5 (2026-04-23) | Official |
| **Tiers** | **Sol** flagship; **Terra** balanced (~GPT-5.5 competitive, lower cost); **Luna** cheapest/fastest | Official |
| **API pricing** | Sol $5/$30; Terra $2.50/$15; Luna $1/$6 per 1M in/out | Official |
| **Surfaces** | ChatGPT, Codex, OpenAI API (Responses API) | Official |

**Primary:** [GPT-5.6 launch](https://openai.com/index/gpt-5-6/) · [Preview Sol](https://openai.com/index/previewing-gpt-5-6-sol/) · [GPT-5.5](https://openai.com/index/introducing-gpt-5-5/)

#### Official capability claims (vendor evals)

- **Agents’ Last Exam:** Sol 53.6 (claims +13.1 vs Claude Fable 5 adaptive).
- **Artificial Analysis Coding Agent Index:** Sol max reasoning SOTA **80** (+2.8 vs Fable 5) with fewer tokens/time/cost.
- **Terminal-Bench 2.1:** Sol **88.8%**; **Sol Ultra 91.9%**.
- **BrowseComp:** Sol **90.4%** / Ultra **92.2%**.
- **OSWorld 2.0:** Sol **62.6%**.
- **Effort modes:** `max` (deeper single-agent); **`ultra`** (default 4 parallel agents; multi-agent beta in Responses API).
- **Programmatic Tool Calling:** model writes/runs in-memory programs to coordinate tools (ZDR-compatible claim).
- Stronger computer-use / design judgment for inspect-and-refine UI work.
- Safety: layered safeguards; “Trusted Access” for sensitive cyber; claims ~10× more blocked harmful cyber vs prior; extensive red teaming pre-GA.

**Press / secondary:** Export-control / access friction narratives around Sol preview period appear in YouTube/commentary; treat as **unverified** relative to OpenAI’s own timeline of preview → Jul 9 GA.

### 1.2 Codex + ChatGPT Work + desktop

| Surface | Status (Jul 2026) | Notes |
|---------|-------------------|--------|
| **ChatGPT Work** | Rolling out web/mobile with GPT-5.6 launch | Pro/Enterprise/Edu first; Plus/Business follow days later |
| **Desktop app** | Mac + Windows; Chat / Work / Codex on **all plans including Free** | Global download |
| **Codex app** | macOS earlier 2026; Windows available | Usage bundled in ChatGPT plans; PAYG seats for teams (with later Business restriction on *new* PAYG) |
| **Computer control** | Pro-tier macOS control (screen/cursor) reported in reviews | Press/secondary for $200 Pro exclusivity; validate in product |

**Primary:** [ChatGPT for ambitious work](https://openai.com/index/chatgpt-for-your-most-ambitious-work/) · [Codex app](https://openai.com/index/introducing-the-codex-app/) · [Codex team pricing](https://openai.com/index/codex-flexible-pricing-for-teams/) · [Codex pricing page](https://chatgpt.com/codex/pricing/)

### 1.3 Hardware

- **No consumer device shipped as of late July 2026.**
- **Press (not official product page):** Bloomberg/TechCrunch (mid-Jul 2026) describe a **screenless, movable home speaker** “AI companion” under development (Jony Ive / io lineage). Earlier reporting targeted late 2026–2027.
- **Label:** hardware = **press / rumored**, not GA product.

### 1.4 Competitive threat to Grok

| Dimension | Assessment |
|-----------|------------|
| Model quality | Sol Ultra claims top coding-agent indices; direct rival to Fable and Grok 4.5 on agentic SWE |
| Packaging | **Strongest** Western consumer+pro desktop stack (Work + Codex) |
| Price | Sol expensive vs Grok 4.5; Terra/Luna undercut mid-tier Claude |
| Enterprise | Default for many SI/ISV integrations; Cursor quote on launch post |
| Gap vs Grok | OpenAI wins **distribution and agent productization**; Grok wins **$/intelligence and raw speed claims** |

**Threat level: Critical.**

---

## 2. Anthropic

### 2.1 Model ladder (July 2026)

| Model | Role | API ID | Context / output | Pricing (in/out per 1M) | Availability |
|-------|------|--------|------------------|-------------------------|--------------|
| **Claude Mythos 5** | Max capability, **no** Fable-class safety classifiers | `claude-mythos-5` | 1M / 128k | $10 / $50 | **Project Glasswing** limited partners only |
| **Claude Fable 5** | Most capable **widely released** | `claude-fable-5` | 1M / 128k | $10 / $50 | GA Jun 9; multi-cloud; **access disrupted then restored** (Jul 1 redeploy narrative) |
| **Claude Opus 4.8** | Prior frontier / fallback on refusals | `claude-opus-4-8` | (family standard) | $5 / $25 | GA; still in service |
| **Claude Sonnet 5** | Everyday / agentic mid-tier | `claude-sonnet-5` | — | $2/$10 intro → $3/$15 after Aug 31 | **Default Free/Pro** from 2026-06-30 |
| Haiku line | Fast/cheap | various | — | lower | Active |

**Primary:** [Fable/Mythos platform intro](https://platform.claude.com/docs/en/about-claude/models/introducing-claude-fable-5-and-claude-mythos-5) · [Fable product](https://www.anthropic.com/claude/fable) · [Sonnet 5](https://www.anthropic.com/news/claude-sonnet-5)

#### Fable 5 integration notes (official)

- Safety classifiers → `stop_reason: "refusal"` (HTTP 200); fallback to other Claude models (server/client/manual); no bill if refused before output.
- Adaptive thinking **always on**; raw CoT **never** returned (summarized/omitted).
- 30-day data retention; **not** zero-data-retention (“Covered Models”).
- Clouds: Claude API, Amazon Bedrock, Claude Platform on AWS, Google Cloud (Vertex), **Microsoft Foundry**.

#### Access drama (separate claims carefully)

- **Official:** access restored; see Anthropic redeploy messaging (docs link to statement).
- **Press/blog:** mid-June global suspension (~19 days) under export-control narrative; Fable returned with stricter filters. Treat suspension details as **press** unless confirmed on anthropic.com.

### 2.2 Product surfaces: Desktop / Code / Cowork / computer use

| Product | What it is | Packaging |
|---------|------------|-----------|
| **Claude Desktop** | Native app (Mac/Windows); tabs for Chat, Code, Cowork | Free download; usage tied to plan |
| **Claude Code** | Agentic coding CLI/IDE harness | Bundled Pro+; enterprise SKU |
| **Claude Cowork** | “Claude Code for the rest of work” — files, calendar, email, connectors; full local/browser on desktop | Research preview Jan 2026 → broader; **web + mobile** Jul 2026 |
| **Computer Use** | Screen perception + mouse/keyboard control | API + product; agentic OS-style demos |
| **Connectors / MCP** | Slack, M365, GitHub, Drive, etc. | First-party + partner MCP catalog |
| **Claude Design / Science / Security** | Vertical product tabs on claude.com | Expanding productization beyond chat |

**Primary:** [Cowork web/mobile](https://claude.com/blog/cowork-web-mobile) · [claude.com](https://claude.com/) · [Partners](https://claude.com/partners)

### 2.3 Claude Partner Network — **active**

- Apply flow + Partner Portal (`partnerhub.anthropic.com`).
- Cloud partners: **AWS, Google Cloud, Microsoft Foundry**.
- Services partner directory + “Powered by Claude” ISV directory (Notion, Figma, Slack, Vercel, Atlassian, etc.).
- Headline SI: Deloitte network rollout; Cognizant enterprise customer (press); Claude in Microsoft 365 Copilot (Anthropic announcement).

**Threat:** enterprise sales motion + multi-cloud availability is **more mature than Grok’s** traditional channel story.

### 2.4 Competitive threat to Grok

| Dimension | Assessment |
|-----------|------------|
| Coding | Fable/Mythos still claimed peak on several SWE/pro agent suites; Sonnet 5 narrows gap at mid price |
| Agents / computer use | Cowork + computer use is the **packaging** Grok is often scored against |
| Safety friction | Fable refusals/fallbacks = reliability risk for automation; Mythos only for approved partners |
| Price | Fable $10/$50 is **5× Grok input / ~8× output** list; Sonnet 5 closer to Grok |
| Channel | Partner Network + Foundry/Bedrock/Vertex = procurement ease |

**Threat level: Critical** (especially developer mindshare and desktop agents).

---

## 3. Google Gemini

### 3.1 Model line (3.x era)

| Model | Notes | Source |
|-------|-------|--------|
| **Gemini 3.1 Pro** | Advanced reasoning; consumer + Vertex/API preview path from Feb 2026 | Official blog |
| **Gemini 3.x Flash family** | 3.5 Flash-Lite, **3.6 Flash** featured for multi-step workflows, code, multimodal efficiency | Google Cloud docs (GEAP) |
| **Gemini Omni / experimental** | Secondary/press mentions of omni variants | Verify per surface |
| **Gemma 4** | Open models under Apache 2.0 (Cloud Next era reporting) | Press + Google narrative |

**Primary:** [Gemini 3.1 Pro](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-1-pro/) · [GEAP Google models](https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/google-models)

### 3.2 Platform packaging: Vertex → Gemini Enterprise Agent Platform

- At **Google Cloud Next 2026**, **Vertex AI rebranded/expanded** to **Gemini Enterprise Agent Platform (GEAP)**.
- Agent Studio, ADK, Agent Engine, Model Garden (Gemini + partners including Claude), governance for multi-agent systems.
- Gemini Enterprise consolidates employee-facing agent experiences (Agentspace absorption per industry coverage).

**Primary:** [GEAP product](https://cloud.google.com/products/gemini-enterprise-agent-platform)

### 3.3 Education stack

| Component | Status |
|-----------|--------|
| **Gemini for Education** | Workspace Education editions; admin-controlled |
| **Gemini Notebook** | **NotebookLM rebranded** to Gemini Notebook (Jul 2026); same product continuity |
| **Google Classroom** | Personal class notebooks via Gemini tab (Apr 2026) |
| **Google AI Pro for Education** | Premium limits + Gemini in Workspace apps |

**Primary:** [notebooklm.google](https://notebooklm.google/) · [Edu NotebookLM](https://edu.google.com/intl/ALL_us/ai-notebooklm/) · [Workspace quickstart](https://knowledge.workspace.google.com/admin/getting-started/editions/quickstart-guide-to-gemini-and-gemini-notebook-for-education)

### 3.4 Competitive threat to Grok

- **Distribution:** Android, Search, Workspace, Classroom — unmatched consumer/education surface area.
- **Enterprise:** GEAP competes as full agent platform, not just model API.
- **Frontier peak:** OpenAI/Anthropic/xAI often lead pure agentic coding benchmarks in vendor tables; Gemini competes on multimodal, latency, and **embedded product**.
- **Threat level: High** (especially education and Workspace; less pure “best model” narrative).

---

## 4. Meta — Llama 4 + Muse Spark

### 4.1 Llama 4 (open weights) — Apr 5, 2025

| Model | Active / experts | Notes |
|-------|------------------|--------|
| **Llama 4 Scout** | 17B active / 16 experts (~109B total) | Fits single H100 (Int4); **10M context** claim |
| **Llama 4 Maverick** | 17B active / 128 experts (~400B total) | Product workhorse multimodal |
| **Llama 4 Behemoth** | ~288B active / 16 experts (~2T total) | Teacher; **not fully released** as open weights at launch |

- Natively multimodal MoE; early fusion text+vision; Llama license ecosystem (not Apache).
- Downloads: llama.com, Hugging Face; Meta AI product integrations at launch.

**Primary:** [Llama 4 herd](https://ai.meta.com/blog/llama-4-multimodal-intelligence/)

### 4.2 Muse Spark (closed, product-first) — Apr 8, 2026

- First model from **Meta Superintelligence Labs** (Alexandr Wang / Scale investment era).
- **Closed** product model powering Meta AI app/meta.ai; rollout to WhatsApp, Instagram, Facebook, Messenger, AI glasses.
- Small/fast by design; multimodal perception; subagents; shopping mode; private preview API for select partners; open-sourcing **future** versions hoped for, not Spark itself.
- May 12, 2026 update: broader rollout (voice, glasses, shopping).

**Primary:** [Muse Spark newsroom](https://about.fb.com/news/2026/04/introducing-muse-spark-meta-superintelligence-labs/)

### 4.3 Competitive threat to Grok

| Track | Threat |
|-------|--------|
| Open Llama 4 | Medium — baseline for local/enterprise open deployments; Inkling now challenges for *newest* open multimodal US story |
| Muse Spark | Medium — consumer Meta AI + glasses distribution, not enterprise coding leader (NYT/press note lag on coding) |
| Strategic | Meta’s dual track (open Llama + closed Muse) reduces “open only” positioning; talent churn press exists (secondary) |

**Threat level: Medium** overall for Grok enterprise/coding; higher for consumer multimodal awareness.

---

## 5. Thinking Machines Lab — Inkling (Mira Murati)

### 5.1 Release facts (official)

| Field | Value |
|-------|--------|
| **Date** | **2026-07-15** |
| **Company** | Thinking Machines Lab (founded ~Feb 2025 by ex-OpenAI CTO Mira Murati) |
| **Name** | **Inkling** (+ **Inkling-Small** preview) |
| **Architecture** | MoE transformer |
| **Scale** | **975B total / 41B active** (Inkling); Inkling-Small **276B / 12B active** preview |
| **Context** | Up to **1M** tokens (training/model claim); Tinker serving 64K/256K options |
| **Pretrain** | **45T tokens** text, images, audio, video |
| **Modalities** | Native **text, image, audio** input → text out; video in pretrain; encoder-free vision/audio path |
| **License** | **Apache 2.0** (HF model card / ecosystem confirmation) |
| **Weights** | [Hugging Face thinkingmachines/Inkling](https://huggingface.co/thinkingmachines/Inkling) + NVFP4 Blackwell checkpoint |
| **Fine-tune platform** | **Tinker** (50% discount limited time); Playground chat |
| **Hosted APIs** | Together, Fireworks, Modal, Databricks, Baseten, etc. |
| **Inference stack partners** | SGLang, vLLM, llama.cpp, transformers |

**Primary:** [Introducing Inkling](https://thinkingmachines.ai/news/introducing-inkling/) · [HF Inkling](https://huggingface.co/thinkingmachines/Inkling) · [HF welcome post](https://huggingface.co/blog/thinkingmachines-inkling)

### 5.2 Positioning (official, explicit)

> Inkling is **not** the strongest overall model available today, open or closed. It is positioned as a **broad, balanced foundation for customization**: multimodal, controllable thinking effort, Tinker fine-tuning.

**Vendor-reported highlights (effort=0.99):**

| Area | Claim |
|------|--------|
| SWE-bench Verified | 77.6% |
| SWE-bench Pro Public | 54.3% |
| Terminal Bench 2.1 | 63.8%* (contamination note) |
| VoiceBench | 91.4% |
| MMMU Pro | 73.5% |
| ForecastBench (no search) | competitive with frontier closed models |
| Controllable effort | match strong open models at **~1/3 tokens** vs Nemotron 3 Ultra on TB2.1 (vendor chart) |

Inkling-Small preview: near parity on many reasoning/agentic rows with lower active params.

### 5.3 Competitive threat to Grok

| Factor | Implication |
|--------|-------------|
| Apache 2.0 US multimodal MoE | Undercuts “Chinese open only” narrative; enterprise legal comfort |
| Customization thesis | Competes with Grok **API-only** story for teams that want weights + fine-tunes |
| Not SOTA closed | Less direct ChatGPT/Claude replacement; more **base model** threat |
| Tinker | Full-stack training product, not just weights drop |

**Threat level: Medium–High** for open-weight and enterprise-customize segments; **lower** for consumer Grok chat.

---

## 6. Microsoft Azure AI packaging

Microsoft is primarily a **distribution and governance layer**, not a frontier model lab.

### 6.1 Microsoft Foundry (ex / evolved Azure AI)

| Capability | Status |
|------------|--------|
| **Model catalog** | 1900+ models: Azure OpenAI, **Anthropic Claude (GA Jun 2026)**, Meta, Mistral, DeepSeek, **xAI**, Cohere, HF, NVIDIA, Fireworks, etc. |
| **Claude GA** | Messages API, prompt caching, extended thinking, tool streaming; Foundry Agent Service can use Claude as reasoner |
| **Hosting** | Claude on Azure via Microsoft–NVIDIA–Anthropic partnership (Blackwell Ultra narrative in MS blogs) |
| **Featured catalog (mid-2026)** | claude-opus-4-8, gpt-5.5, DeepSeek-V4-Pro, Kimi-K2.6, etc. |

**Primary:** [Foundry Models](https://azure.microsoft.com/en-us/products/ai-foundry/models) · [Foundry models overview](https://learn.microsoft.com/en-us/azure/foundry/concepts/foundry-models-overview) · [What’s new Jun 2026](https://devblogs.microsoft.com/foundry/whats-new-in-microsoft-foundry-june-2026/)

### 6.2 Competitive implications for Grok

- **Positive:** xAI listed among Foundry providers → Azure procurement path for Grok.
- **Competitive:** Customers can **swap** OpenAI ↔ Claude ↔ Grok under one identity/billing/network fabric; model quality alone does not win the RFP.
- **Copilot:** Microsoft 365 Copilot remains the sticky UI; Claude also in Copilot ecosystem (Anthropic announcements). Grok’s **Office add-ins** (Word/Excel/PowerPoint + Outlook news) are a **direct flank** against Copilot monopoly of in-app AI.

**Threat level: High as packaging competitor; partnership opportunity as model vendor.**

---

## 7. xAI / Grok — REAL vs missing vs underrated

### 7.1 What is REAL (primary, July 2026)

#### Grok 4.5

| Field | Official claim |
|-------|----------------|
| **Launch** | **2026-07-16** |
| **Focus** | Coding, agentic tasks, knowledge work |
| **Training** | Tens of thousands of **NVIDIA GB300**; co-trained with **Cursor** |
| **Speed** | **~80 TPS** (“faster than flash models”) |
| **Token efficiency** | e.g. ~4.2× fewer avg output tokens vs Opus 4.8 max on SWE-Bench Pro tasks (vendor chart) |
| **API price** | **$2 / $6** per 1M in/out |
| **API model** | `grok-4.5` |
| **Knowledge cutoff** | **2026-02-01** (docs) |
| **Default in** | Grok Build |

**Primary:** [Introducing Grok 4.5](https://x.ai/news/grok-4-5) · [Models docs](https://docs.x.ai/developers/models)

**Vendor benchmark table highlights (competitor figures from others’ cards/leaderboards):**

| Eval | Grok 4.5 | Context |
|------|----------|---------|
| Terminal Bench 2.1 | **83.3%** | Near GPT-5.5 xhigh / Fable max |
| SWE Marathon pass@1 | **29.0%** | Leads listed set |
| SWE Bench Pro resolve | **64.7%** | Behind Fable max 80.4%, Opus 4.8 69.2% |
| DeepSWE 1.0 / 1.1 | 62.0% / 53% | Behind Fable/GPT-5.5 peaks |

#### Grok Build

| Field | Status |
|-------|--------|
| Product | Coding agent: TUI, headless, ACP |
| Open source | **2026-07-15** — [github.com/xai-org/grok-build](https://github.com/xai-org/grok-build) |
| Local-first | Compile yourself; point at local inference via `config.toml` |
| Extensibility | Skills, plugins, hooks, MCP, subagents |

**Primary:** [Grok Build open source](https://x.ai/news/grok-build-open-source) · [Build docs](https://docs.x.ai/build/overview)

#### Grok Imagine

| Field | Status |
|-------|--------|
| Image + video generation | Live on grok.com, apps, Imagine API |
| Video 1.5 | **2026-06-16** GA on API; Fast tier on consumer surfaces |
| Speed claim (secondary product coverage) | ~25s for 6s 720p (vs prior 40s+) |

**Primary path:** x.ai news / docs Imagine API; product posts on [x.ai/news](https://x.ai/news).

#### Office / productivity packaging

- Official Word / PowerPoint / Excel plugins (Microsoft Marketplace links on Grok 4.5 post).
- Excel: multi-sheet models, web research, stickies/notes.
- PowerPoint: native shapes, diagrams; Word: prose/docs.
- Outlook integration appeared in x.ai news feed (**Grok for Outlook**, Jul 21 2026 listing).

### 7.2 What is MISSING or weak vs peers (fair gap list)

| Gap | Peers who lead | Notes for Grok |
|-----|----------------|----------------|
| **Desktop “Work/Cowork” product** | ChatGPT Work, Claude Cowork | Grok has Build CLI + Office plugins; less unified knowledge-work desktop agent |
| **Computer use / OS control product** | Claude computer use, OpenAI Codex Pro control | Not a first-class Grok product story in primary posts |
| **Enterprise SSO / SI Partner Network** | Anthropic Partner Network, OpenAI enterprise, Azure | Enterprise SSO exists per internal notes; **channel packaging** still lighter than Anthropic/OpenAI |
| **Education stack** | Google Classroom + Gemini Notebook | No comparable Grok education product |
| **Open weights flagship** | Llama 4, Inkling, Gemma | Grok remains API/product-closed for frontier weights |
| **Peak SWE-Bench Pro / Fable-class agent ceiling** | Fable/Mythos, GPT-5.6 Sol Ultra | Grok competitive mid-high, not always #1 on every SWE suite |
| **Hardware companion** | OpenAI device rumors; Meta glasses shipping Muse | Grok has no hardware narrative |
| **Multi-cloud parity** | Claude on Bedrock/Vertex/Foundry | Grok on Foundry helps; fewer first-party multi-cloud stories |

### 7.3 What is UNDERRATED (Grok strengths under-cited externally)

1. **Price × speed × efficiency stack:** $2/$6 + ~80 TPS + lower token burn is a **structural** enterprise cost argument vs Sol ($5/$30) and Fable ($10/$50).
2. **Grok Build open source:** Jul 15 open harness is a rare Western lab move; enables Cursor-class forks, local-first, MCP ecosystem credibility.
3. **Cursor co-training:** Real engineering data flywheel competitors cannot easily copy without similar IDE partnerships.
4. **Office plugins as Copilot flank:** In-document agent in Word/Excel/PPT (and Outlook news) without $30/seat Copilot is a procurement wedge.
5. **Imagine video 1.5 speed:** Consumer creative loop speed can matter more than cinema-quality SOTA for daily use.
6. **SWE Marathon / efficiency-first coding:** On some long-horizon / efficiency metrics Grok leads or ties; narrative often stuck on single SWE-bench number.
7. **Voice + multimodal product continuity** on X/xAI apps (21 new flagship voices listed in news feed) — real-time personality surface peers still patch together.

### 7.4 Competitive posture summary for Grok

```
REAL        → Grok 4.5 API, Build (OSS), Imagine, Office plugins, Cursor training, aggressive pricing
MISSING     → Full desktop Work/Cowork, computer-use OS product, education, open frontier weights, SI network depth
UNDERRATED  → $/intelligence, open harness, Office wedge, token efficiency, agent speed
```

**Fair gap statement (internal Agents.md alignment):** enterprise SSO exists; gaps that matter are **packaging, desktop, channel, visibility, Cursor migration** — not “Grok has no enterprise.”

---

## 8. Cross-lab threat matrix (Grok-centric)

| Competitor move | Window | Grok response levers |
|-----------------|--------|----------------------|
| GPT-5.6 Sol Ultra multi-agent | Live Jul 9 | Price + Build OSS + speed; optional multi-agent productization |
| Claude Fable + Cowork desktop | Live (restored) | Office plugins + Build; improve knowledge-work desktop |
| Sonnet 5 default free/pro | Live Jun 30 | Keep mid-tier Grok pricing story clear |
| Gemini GEAP + Education | Live 2026 | Partner education? or accept Google owns classroom |
| Inkling Apache 2.0 | Live Jul 15 | Differentiate closed Grok quality vs open base; or open distill later |
| Azure Foundry multi-model | Live | Ensure Grok-4.5 SKU parity, governance docs, latency SLOs |
| Meta Muse consumer | Live Apr+ | Brand/voice/X distribution; glasses not required |

---

## 9. Source index (clickable)

### OpenAI
- https://openai.com/index/gpt-5-6/
- https://openai.com/index/previewing-gpt-5-6-sol/
- https://openai.com/index/introducing-gpt-5-5/
- https://openai.com/index/chatgpt-for-your-most-ambitious-work/
- https://openai.com/index/introducing-the-codex-app/
- https://openai.com/index/codex-flexible-pricing-for-teams/
- https://chatgpt.com/codex/pricing/
- Hardware press: https://techcrunch.com/2026/07/14/openais-first-hardware-device-is-reportedly-a-screenless-speaker-that-can-move/

### Anthropic
- https://platform.claude.com/docs/en/about-claude/models/introducing-claude-fable-5-and-claude-mythos-5
- https://www.anthropic.com/claude/fable
- https://www.anthropic.com/news/claude-sonnet-5
- https://claude.com/blog/cowork-web-mobile
- https://claude.com/partners
- Secondary impressions: https://simonwillison.net/2026/Jun/9/claude-fable-5/

### Google
- https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-1-pro/
- https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/google-models
- https://cloud.google.com/products/gemini-enterprise-agent-platform
- https://notebooklm.google/

### Meta
- https://ai.meta.com/blog/llama-4-multimodal-intelligence/
- https://about.fb.com/news/2026/04/introducing-muse-spark-meta-superintelligence-labs/

### Thinking Machines
- https://thinkingmachines.ai/news/introducing-inkling/
- https://huggingface.co/thinkingmachines/Inkling
- https://huggingface.co/blog/thinkingmachines-inkling

### Microsoft
- https://azure.microsoft.com/en-us/products/ai-foundry/models
- https://learn.microsoft.com/en-us/azure/foundry/concepts/foundry-models-overview
- https://devblogs.microsoft.com/foundry/whats-new-in-microsoft-foundry-june-2026/

### xAI / SpaceXAI
- https://x.ai/news/grok-4-5
- https://x.ai/news/grok-build-open-source
- https://docs.x.ai/developers/models
- https://docs.x.ai/build/overview
- https://x.ai/news
- Office: marketplace links from Grok 4.5 post (Word WA200011055, PowerPoint WA200011057, Excel WA200011056)

---

## 10. Methodology notes

1. **Official claims** = vendor blog/docs/product pages. Benchmarks are **vendor-stated** unless marked independent (e.g. Artificial Analysis cited *by* OpenAI).
2. **Press** = TechCrunch, Bloomberg, Axios, secondary blogs — used for hardware rumors, access-suspension narratives, and third-party framing only.
3. **Not verified here:** independent re-runs of Terminal-Bench / SWE-Bench across all labs on identical harnesses; live rate limits; exact Foundry regional SKUs for Grok 4.5.
4. Refresh cadence: re-check Sol rollout completeness, Fable retention/ZDR policy, Inkling-Small full weight release, Muse open-source promise.

---

*Report generated for Frontier Feature Tracker · Western frontier competitive research · July 2026*
