---
title: 'The Perils of the AI Exponential '
description: >-
  This episode of the AI Daily Brief (recorded February 23, 2026) covers the
  accelerating pace of AI capability development and its economic implications.
  The host — Nathaniel Whittemore, based on the show's known format — examines
  three interconnec...
pubDate: 2026-02-23T00:00:00.000Z
type: episode
tags:
  - ai-daily-brief-podcast
draft: false
---
# The Perils of the AI Exponential

## Overview

This episode of the **AI Daily Brief** (recorded February 23, 2026) covers the accelerating pace of AI capability development and its economic implications. The host — Nathaniel Whittemore, based on the show's known format — examines three interconnected stories: the first anniversary of Claude Code, the latest METR benchmark results showing dramatically accelerating AI agent capabilities, and a viral research piece from Citrini Research warning of a coming "Global Intelligence Crisis." The central thesis is that AI capability is compounding faster than most observers anticipated, markets are struggling to price this, and society is beginning to grapple with the downstream consequences.

**Source video:** No URL was provided for this episode.

---

## Prerequisites

- Basic familiarity with large language models (LLMs) and AI coding assistants
- Understanding of software benchmarks and evaluation methodology (e.g., SWE-Bench)
- Awareness of major AI labs: Anthropic, OpenAI, Google DeepMind, xAI
- General knowledge of financial markets and software stock valuations
- Familiarity with the concept of vibe coding and agentic AI systems
- Some exposure to AI scaling debates (scaling laws, inference-time compute, reinforcement learning)

---

## Main Points

### Claude Code Turns One Year Old

- Claude Code launched in February 2025 as a side project by Anthropic engineer Boris Cherney; it has since become the central pillar of Anthropic's commercial strategy.
- The tool is generating **$2.5 billion in ARR** and is being used internally to help develop Anthropic's own future models and products.
- Nearly **half of all API tool calls** at Anthropic are related to software engineering — making AI coding the company's dominant use case by a wide margin.
- Cherney described adoption as organic: Dario Amadei noticed universal internal uptake without any mandate, attributing it purely to product quality.
- Boris Cherney's forward-looking view: "Coding will be generally solved for everyone" — it is already "practically solved" for him today.

---

### Cybersecurity Stock Sell-Off Following Anthropic's Claude Code Security Announcement

- Anthropic released **Claude Code Security**, a plugin that scans codebases for vulnerabilities and suggests fixes — targeted at internal code auditing.
- The announcement triggered a sharp sell-off in cybersecurity stocks: CrowdStrike −8%, Okta −9%, Cloudflare −7% in a single day.
- Critics (including Cloudflare tech lead Kenton Varda) argued the reaction was irrational because the Anthropic tool does not overlap with the products these companies sell (e.g., two-factor authentication, DDoS protection, endpoint security).
- Two competing interpretations:
  - **Short-term irrational**: The specific catalyst doesn't justify the move.
  - **Long-term rational repricing**: Bucco Capital argued that paying 25× revenue for software companies is hard to justify when the landscape is shifting this rapidly, regardless of any single announcement.
- The host's view: individual catalysts matter less than the broader repricing of software valuations underway across the sector.

---

### GPT-5.3 ("Garlic") Release Rumors

- OpenAI's next major model, internally codenamed **Garlic**, was rumored for release on the Thursday following this episode.
- The coding-focused version, **GPT-5.3 Codex**, had already shipped and was described as competitive with or ahead of Claude Opus 4.6 on coding benchmarks.
- Analyst Dan Mack reported the full GPT-5.3 model surpasses human baseline on SimpleBench at **83.7%** and represents a leap comparable to the GPT-3 to GPT-4 transition.
- Commentary noted OpenAI has "gotten its mojo back" on pre-training, combining its strong RL pipeline with renewed pre-training progress.
- The host cautioned that despite the size of the rumored improvement, the model would likely still be named 5.3 rather than receive a major version bump, given OpenAI's past naming controversies.

---

### OpenAI Financial Projections

- OpenAI projects **$282.5 billion in revenue by 2030** — a 27% upward revision — which would place them ahead of Meta's current revenue.
  - $30.1B in 2026 (doubling 2025); $62B in 2027; continuing to scale
- Projected **cash burn** was doubled, peaking at $85B in 2028, with $665B total over five years; profitability still expected by 2030.
- **Inference costs quadrupled in 2025**, compressing gross margins from 40% (2024) to 33% (2025) — the opposite of what was originally forecast.
- **Training costs** are accelerating sharply: $32B in 2026, $65B in 2027; total of $440B on model training through 2030.
- Weekly active ChatGPT users reached **910 million**, falling short of the 1 billion target — partly attributed to a slowdown around the GPT-5 release.
- A chart from Epic Research suggested Anthropic could **overtake OpenAI in revenue** as early as 2026.

---

### OpenAI Hardware Plans

- A team of **200 people** is building a family of AI devices including a smart speaker, smart glasses, and a smart lamp.
- The smart speaker is expected to be priced **$200–$300**, competing at the top end of the market (vs. Amazon Echo at $50–$220).
- Features: camera for environmental context-awareness and facial recognition for purchase approval; **no screen** on any device.
- Smart glasses expected no earlier than **2028**; smart speaker targeted for early 2027.
- Devices are being designed at a separate office in collaboration with Johnny Ive's studio **Love From**, with some internal frustration over slow design iteration and limited information sharing.

---

### The METR Moore's Law for AI Agents Chart — Latest Results

- METR (Model Evaluation and Threat Research) tracks AI agent capability via a continuous benchmark measuring the **longest time horizon task** an agent can complete at a 50% success rate, using human engineer completion time as the unit of measure.
  - *Important clarification*: The metric measures task difficulty (in human-equivalent time), not how long the AI works continuously.
- Historical trend: the time horizon was doubling roughly **every 7 months** since GPT-2; recent models suggested acceleration to a **3-month doubling rate**.
- Latest results (released Friday):
  - **GPT-5.3 Codex**: 6.5-hour time horizon (exceeds Opus 4.5)
  - **Claude Opus 4.6**: ~14.5-hour time horizon — the **largest single-generation jump** in the study's history, more than tripling Opus 4.5's result
  - Implied doubling rate: approximately **every 1.5 months**
- METR's own caveats:
  - The benchmark is **saturating**: Opus 4.6 has nearly exhausted METR's task set; the upper confidence interval reaches 98 hours.
  - Results are **highly noisy**: a slightly different task distribution could have yielded 8 hours or 20 hours.
  - Codex results showed scaffolding issues; retesting with OpenAI's scaffold produced similar but still noteworthy anomalies.
  - METR is updating its methodology to address saturation.
- Balanced takeaway (Visimodino): "There really is something massive happening right now, AND some people are mistakenly thinking it's even bigger than it actually is — but that doesn't mean it's not very, very big."

---

### Citrini Research: "The 2028 Global Intelligence Crisis"

- Citrini Research published a widely shared piece applying the concept of "a country full of geniuses in a data center" (Dario Amadei's framing) to macroeconomic and social outcomes.
- Core thesis: as machine intelligence becomes abundant and cheap, **capital owners** will capture most of the gains while workers across all skill levels face displacement, leading to:
  - A shift from a household-based to a capital-based economy
  - Mass unemployment and loss of purpose
  - A major stock market collapse and broad "immiseration"
- The piece is notable not for originality but for **catalyzing common knowledge** — articulating what a growing segment of investors privately believed, accelerating the spread of that narrative.
- Key criticisms:
  - **Dan Hockenmeyer**: The piece underestimates marketplace defensibility; e.g., DoorDash's moat is not its app but its liquidity, logistics optimization, and supply relationships — none of which AI agents automatically replicate.
  - **Guy Berger**: Internal inconsistency — those who own AI agents will generate income; what happens to that spending, and why wouldn't it fuel employment and GDP?
- The host's meta-observation: the piece's viral reception reveals where **investor sentiment is right now** — primed for fear, treating AI doomer scenarios as plausible rather than fringe — making it an important anthropological marker of the moment regardless of its analytical validity.

---

## Key Concepts

- **Claude Code**: Anthropic's agentic coding tool, originally a side project by Boris Cherney, now central to Anthropic's commercial and technical strategy.
- **Vibe coding**: Term coined by Andrej Karpathy in February 2025 describing the practice of directing AI to generate code through natural language, often without deep technical oversight.
- **METR (Model Evaluation and Threat Research)**: Independent research lab that runs continuous longitudinal benchmarks measuring AI agent capability over time.
- **Time horizon (METR definition)**: The length of a software engineering task — measured in human completion time — that an AI agent can solve correctly at a 50% success rate; a proxy for task complexity rather than elapsed runtime.
- **Moore's Law for AI Agents**: Informal name for the METR finding that the time horizon of AI agents has been doubling at a regular cadence, analogous to Moore's Law for transistor density.
- **Benchmark saturation**: The phenomenon where a model's capability exceeds the difficulty ceiling of the tasks in a benchmark, making further differentiation unreliable.
- **Inference costs**: The computational expense of running a trained model to produce outputs for users, distinct from the one-time cost of training.
- **Scaling wall / performance plateau**: The hypothesis that further increases in compute or data yield diminishing returns in model capability — a key variable in AI bubble arguments.
- **Reinforcement learning for inference-time reasoning (RL)**: The training technique pioneered by OpenAI with the o1 model that improves model performance by rewarding correct reasoning chains at inference time.
- **Common knowledge game**: The social dynamic in which a belief becomes influential not just when people hold it privately, but when everyone knows that everyone else holds it — referenced in the context of the Citrini piece going viral.
- **ARR (Annual Recurring Revenue)**: A standard SaaS metric representing the annualized value of recurring subscription revenue.
- **GPT-5.3 / Garlic**: OpenAI's next frontier model (internal codename Garlic), rumored at the time of this episode to be imminent, expected to represent a major capability leap.

---

## Summary

The episode argues that the early months of 2026 represent a genuine inflection point in AI development — one characterized by accelerating capability, rapidly shifting market valuations, and growing societal anxiety about what comes next. The METR benchmark data for Claude Opus 4.6 and GPT-5.3 Codex shows that AI agent capability is improving faster than at any prior point in the study, with the effective doubling rate compressing to roughly six weeks, even as METR itself warns the benchmark is nearing saturation and the results carry significant uncertainty. Against this backdrop, markets are engaged in a broad repricing of software valuations that is only loosely connected to individual product announcements, and the viral spread of Citrini Research's doomer economic scenario illustrates that investor fear about AI-driven disruption has crossed from fringe to mainstream. The host does not endorse the doomer thesis but treats its reception as a meaningful signal of where collective sentiment stands, and explicitly calls for a constructive, non-doomer counternarrative to the same set of facts — something the episode itself promises to pursue in future installments.
