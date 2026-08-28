---
title: The AI Model Tier List
description: >-
  This episode of The AI Daily Brief (hosted by Nathaniel Whittemore, though not
  explicitly named in the transcript) examines a shift in how individuals and
  enterprises think about AI models — away from a single "best model" framing
  and toward delib...
pubDate: 2026-08-24T00:00:00.000Z
type: episode
tags:
  - ai-daily-brief-podcast
url: 'https://www.patreon.com/posts/167577967'
draft: false
---
# AI Model Tier Lists and the Emerging Model Stack Era

## Overview

This episode of *The AI Daily Brief* (hosted by Nathaniel Whittemore, though not explicitly named in the transcript) examines a shift in how individuals and enterprises think about AI models — away from a single "best model" framing and toward deliberate, multi-model architectures optimized for cost, speed, and task fit. The episode uses a viral AI model tier list by creator "Theo" as a lens for exploring this transition, alongside supporting data from enterprise AI deployments, infrastructure investment deals, and developer platform metrics.

**Source video:** No URL was provided for this episode.

---

## Prerequisites

- Basic familiarity with large language models (LLMs) and their major providers (OpenAI, Anthropic, Google DeepSeek, xAI, etc.)
- Understanding of open-weight vs. closed/proprietary models
- General knowledge of AI inference costs and token-based pricing
- Familiarity with enterprise software procurement and deployment cycles
- Awareness of AI coding assistants and agentic workflows

---

## Main Points

### 1. The Market Has Moved Beyond "Which Model Is Best?"

- The volume and diversity of AI usage at individual, team, and enterprise levels has created a new set of priorities: not just raw capability, but **efficiency, cost, and task-model fit**.
- Companies are now building **model stacks** — architectures that route different tasks to different models based on need.
- "Router" companies (e.g., OpenRouter, acquired by Stripe for $7 billion) have emerged as infrastructure to manage this complexity.

---

### 2. Hugging Face Positioned as Critical Open-Model Infrastructure

- Business Insider reports Hugging Face is seeking a **$13 billion acquisition exit**, up from a $4.5 billion valuation in 2023.
- The platform now hosts **2 million+ models, 1.5 million datasets, and 1.5 million AI apps**.
- A potential acquirer would gain the **distribution and coordination layer** for open models — the tooling that helps developers find, evaluate, and deploy them safely.
- NVIDIA is floated as a natural acquirer, given its growing investment in open models via its **Nemotron** series.

---

### 3. NVIDIA Is Quietly Building a Frontier Open-Model Stack

- NVIDIA struck a deal with **Poolside** (a coding-focused foundation model startup): $6 billion licensing deal + $1 billion equity investment at a $12 billion valuation.
- Over 100 Poolside engineers will join NVIDIA to work on Nemotron, with the stated goal of building **the world's most powerful open models** to rival DeepSeek and Moonshot.
- Poolside lost a critical compute cluster after a failed fundraising round, leading to the deal.
- NVIDIA is also investing in **Mercor** (data labeling, used for Nemotron RL training) and **Perplexity** (valued at $30 billion in the new round).
- Pattern: NVIDIA is vertically integrating across research talent, training data, and the application layer.

---

### 4. NVIDIA Hardware Costs Are Rising

- NVIDIA is raising prices on **Grace Blackwell and Vera Rubin chips by up to 17%**, applying to already-ordered systems.
- A 72-chip Vera Rubin rack is expected to reach **$8 million**.
- Price increases are driven by spiraling memory costs; cloud providers are likely to pass increases on to customers.

---

### 5. China Is Scaling AI Investment Aggressively

- **Alibaba** raised $10 billion in a record Hong Kong share sale to fund AI build-out, its largest-ever equity offering.
- **Unitree Robotics** (humanoid robots) IPO'd at $9 billion market cap and surged **460% on day one**, signaling strong Chinese appetite for embodied AI.
- Michael Burry warned that Alibaba's share issuance signals return-on-invested-capital pressure despite competitive LLM disruption.

---

### 6. Theo's AI Model Tier List — Rankings and Rationale

Theo, an AI entrepreneur and content creator, published a tier list that generated widespread discussion:

| Tier | Models |
|------|--------|
| S | Fable 5 |
| A | GPT-5.6 Sol |
| B | Kimi K3, DeepSeek V4 Flash, GPT-5.6 Luna |
| C | Grok 4.6, MuseSpark 1.2 |
| D | Opus 5, Sonnet 5, GLM 5.3, GPT-5.6 Terra, Composer 2.5 |
| F | DeepSeek V4 Pro |
| Google Tier | Gemini 3.7 Flash, Gemini 3.1 Pro |

Key reasoning from Theo:
- **Fable 5 (S tier):** "Knows more than any model I've interacted with. Unbelievably thoughtful." Described as a genius that needs to be managed — best for code worth merging, deep reasoning, and double-checking other work.
- **GPT-5.6 Sol (A tier):** "Capable of things I never thought AI would ever do." His actual default model — reliable, does exactly what it's told, generates fewer tokens efficiently.
- **GPT-5.6 Luna (B tier):** Not ranked for coding ability, but for being "smart, fast, and good at a bunch of random stuff" — most used by sheer call volume for lightweight tasks.
- **GPT-5.6 Terra (D tier):** Occupies an awkward middle position — neither as capable as Sol nor as cheap as Luna; Theo said he has "never chosen Terra for anything."
- Even Theo's personal preference is Sol over Fable despite ranking Fable higher — illustrating the gap between benchmark-level intelligence and practical usability.

---

### 7. The RAMP Data and the Misread "Fable 5 Isn't Selling" Narrative

- A Financial Times chart, citing RAMP AI Index data, suggested enterprises were not adopting Fable 5, favoring older Opus and Sonnet models.
- The episode argues the analysis was **incomplete** for two key reasons:
  1. **Fable 5's 30-day data retention policy** (a government safety condition after the model was briefly banned) makes it a non-starter for InfoSec-conscious enterprises.
  2. **RAMP selection bias**: RAMP serves tech-forward companies, and this specific data comes from a cost-management product, predisposing users toward cheaper options.
- OpenAI's aggressive promotion of zero-data-retention policies for frontier models is cited as supporting evidence that data retention is a real enterprise blocker.
- Enterprise adoption also moves slowly — many organizations are still using models released 9+ months ago.

---

### 8. AT&T as a Case Study in Enterprise Model Stack Building

- AT&T (~100,000 staff) has embedded AI across every department: coding, financial analysis, HR, customer support.
- Currently uses open models to service **40% of employee AI queries**; plans to increase to **60–70%**.
- Open models used include **NVIDIA Nemotron, Meta, and Google** open-weight models.
- For simple tasks (e.g., summarizing a PR), open models have replaced frontier models; frontier models retained for complex coding.
- Using a **model router for AI coding** cut costs by **56% with only a 2% quality drop**.
- Hosting open models in their own data center (with NVIDIA/AMD chips) was often cheaper than renting cloud compute.
- AT&T is evaluating Chinese models but not yet using them, citing risk analysis.

---

### 9. The Vercel Gateway Data: Open Models Are Taking Token Share

- Vercel CEO Guillermo Rauch shared data from their AI Gateway product showing a dramatic shift in two months:
  - **June 24:** Closed models ~72% of tokens; open models ~28%
  - **~August:** Closed models ~38%; open models ~62%
- Investor Gavin Baker's prediction: **closed frontier tokens will represent 60–90% of economic value but only 15–25% of token volume**.
- MIT's Christian Catalini proposed a **three-tier model economy**:
  1. Cheap generalist (commodity open-weight)
  2. State-of-the-art generalist (closed frontier labs)
  3. State-of-the-art specialist (open weights + enterprise proprietary context)
- Open-source inference is not free — compute costs are the same per token regardless of model type.

---

### 10. What This Means for the Model Tier List Format Itself

- Critics noted that ranking models on a single axis is increasingly inadequate given the number of relevant dimensions: task capability, cost, token efficiency, speed, data policies, etc.
- Several commentators argued the differences between top models are now small enough to be more preference than performance.
- The more interesting analytical frame may be **model composition** — how different models are combined — rather than individual rankings.

---

## Key Concepts

- **Model stack / model architecture:** A deliberate combination of multiple AI models, each assigned to tasks where it performs best by capability, cost, or speed criteria.
- **Model router:** Software infrastructure that directs AI queries to the most appropriate model based on predefined rules or learned routing logic. OpenRouter (acquired by Stripe) is the leading example.
- **Open-weight models:** AI models whose weights are publicly released, allowing anyone to download, host, and fine-tune them, as opposed to proprietary closed models accessible only via API.
- **Tier list:** A ranked classification system (typically S, A, B, C, D, F) used informally to compare items; popularized in gaming and internet culture.
- **S tier:** The highest rank in a tier list, denoting exceptional or "supreme" quality.
- **Data retention policy:** Terms under which an AI provider stores user prompts and outputs; a critical enterprise compliance concern, particularly for regulated industries.
- **RAMP AI Index:** An economic analysis product from Ramp (a fintech company) that tracks enterprise AI spending patterns using data from its expense management customers.
- **Nemotron:** NVIDIA's series of open-weight foundation models, being scaled up through talent acquisitions (Poolside) and data partnerships (Mercor).
- **Poolside:** A 2023-founded AI startup focused on open-source coding foundation models; subject of a $7 billion combined licensing and investment deal with NVIDIA.
- **AI Gateway / AI routing:** Developer infrastructure products (e.g., Vercel's AI Gateway) that manage, log, and route AI API calls across multiple model providers.
- **Grace Blackwell / Vera Rubin:** NVIDIA's high-end AI chip systems; subject of a 17% price increase driven by memory cost pressures.
- **Acquihire:** A deal in which a company is acquired primarily to gain its employees rather than its products or assets.
- **Token efficiency:** The ability of a model to accomplish a task with fewer output tokens, directly reducing inference cost and latency.

---

## Summary

The central argument of this episode is that the AI industry has entered a new phase in which the question "which model is the best?" is no longer sufficient — or even the most important question for most users and organizations. As models across all major providers have crossed a capability threshold where they are genuinely useful for serious work, the conversation has shifted to how to build intelligent model stacks that match the right model to the right task at the right cost. This shift is visible across multiple data points: Vercel's AI Gateway showing open-weight models growing from 28% to 62% of token share in two months; AT&T routing 40% of employee AI queries through open models with plans to reach 70%; and the explosive growth in valuation of routing and infrastructure companies like OpenRouter. NVIDIA's simultaneous moves to acquire Poolside's engineering talent, invest in Perplexity and Mercor, and potentially acquire Hugging Face signal that the chip giant sees open-model training and distribution as a strategic frontier. Theo's tier list, while entertaining and directionally useful, ultimately illustrates the limitation of single-axis model rankings in a world where the right model depends on the task, the budget, the data policy, and the speed requirement — and where the most sophisticated practitioners are already building orchestration layers to navigate that complexity rather than picking a single winner.
