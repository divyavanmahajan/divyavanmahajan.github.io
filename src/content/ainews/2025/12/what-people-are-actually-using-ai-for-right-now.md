---
title: What People Are Actually Using AI For Right Now
description: >-
  This episode of the AI Daily Brief (recorded December 8, 2025) covers two
  segments. The headline segment summarises the competitive dynamics between
  OpenAI, Google, and Anthropic in late 2025, including rumoured model releases,
  talent departures f...
pubDate: 2025-12-08T00:00:00.000Z
type: episode
tags:
  - ai-daily-brief-podcast
draft: false
---
# What People Are Actually Using AI For Right Now

## Overview
This episode of the **AI Daily Brief** (recorded December 8, 2025) covers two segments. The headline segment summarises the competitive dynamics between OpenAI, Google, and Anthropic in late 2025, including rumoured model releases, talent departures from Apple, and Meta's media and wearables moves. The main segment analyses a joint study by **OpenRouter and Andreessen Horowitz (A16Z)** titled *The State of AI: An Empirical 100 Trillion Token Study*, which attempts to characterise real-world LLM usage patterns drawn from OpenRouter's API traffic. No individual speaker name is credited beyond the show's host.

**Source video:** *(URL not provided)*

---

## Prerequisites
- Basic understanding of large language models (LLMs) and how API access to them works
- Familiarity with the distinction between **reasoning models** (e.g., OpenAI o1/o3) and standard chat models
- Awareness of the **open-weight vs. closed-weight** model landscape (e.g., Meta Llama, DeepSeek vs. GPT, Claude, Gemini)
- General understanding of developer tooling: API gateways, model routing, and tools like Cursor
- Familiarity with token-based pricing and how token consumption is measured

---

## Main Points

### Competitive Landscape: OpenAI's "Code Red" and GPT-5.2
- Sources cited by *The Verge*'s Tom Warren indicate GPT-5.2 was expected to release on or around Tuesday, December 9, 2025, fast-tracked due to competitive pressure from Google's Gemini 3.
- ChatGPT monthly active user growth slowed sharply: from 40–60 million new users per month over the summer to just 7 million in November.
- Investor sentiment shifted: OpenAI-exposed public stock baskets fell from +125% to +74% year-to-date after Gemini 3's release; Google-exposed baskets rose from ~110% to 146%.
- Polymarket odds for "best AI model by end of 2025" swung from Google at 87% / OpenAI at 10.5% to OpenAI recovering to ~18–25% over the weekend, with even sharper movement in coding-specific markets.
- OpenAI's stated strategic pivot is away from flashy features toward speed, reliability, and customisability.

### OpenAI and the "Ads That Aren't Ads" Controversy
- Users reported ChatGPT surfacing unprompted links to Target, Spotify, and Peloton in unrelated conversations shortly after OpenAI announced a partnership with Target.
- Initial OpenAI response denied these were ads; Head of ChatGPT Nick Turley stated no live ad tests were running.
- Chief Research Officer Mark Chen later acknowledged the experience "feels a lot like advertising" and announced the feature was turned off while the team improves precision and adds user controls.
- The episode illustrates tension between OpenAI's monetisation interests and its trust-based value proposition with users.

### Apple's Talent Exodus
- Senior VP of Machine Learning and AI Strategy John Gianandrea departed; Meta subsequently hired Apple's head of UX design, Alan Dye.
- Apple's general counsel and head of government affairs also announced departures, compounding over a dozen prior AI team exits.
- Hardware SVP Johny Srouji — architect of Apple's M-series chips — is reportedly considering leaving, though Tim Cook is actively working to retain him with a substantial pay package and potential promotion to CTO.
- Analysts note Srouji built AI-capable silicon into hundreds of millions of devices but Apple's software team has not leveraged it beyond the camera app.

### Meta: Wearables Acquisition and Media Deals
- Meta acquired AI wearable startup **Limitless** (maker of an AI pendant that recorded and summarised conversations); the team joins Reality Labs. The hardware will be discontinued; subscriptions cancelled; the Rewind desktop recording software sunsetted immediately.
- Signal is ambiguous: either Meta is consolidating talent in a high-conviction wearable category or pre-emptively cutting off talent to competitors.
- Meta struck content licensing deals with CNN, Fox News, USA Today, People, and others to improve Meta AI's real-time news delivery.
- Perplexity faces new lawsuits from the Chicago Tribune and the New York Times over web crawler practices, previewing broader copyright battles expected in 2026.

### The OpenRouter / A16Z Study: Methodology and Scope
- Dataset: over **100 trillion tokens** of real-world LLM interactions across tasks, geographies, and time, processed through OpenRouter's API gateway.
- OpenRouter serves **25 trillion tokens monthly** across **300 models** to **5 million end users**.
- Important caveat: 100 trillion tokens is roughly 1/10th to 1/15th of what Google Gemini was serving per month pre-Gemini 3 — meaningful but not exhaustive.
- The sample skews toward **developers and power users building applications**, not general consumer chat users; extrapolation to the full population should be cautious.

### Finding 1: Reasoning Models Now Dominate Token Consumption
- Reasoning model usage was negligible at the start of 2025 (OpenAI's o1 only became broadly available in December 2024).
- By late 2025, reasoning models account for **over 50% of tokens consumed** on OpenRouter.
- OpenRouter labels this a "full paradigm shift" in how developers are engaging with LLMs.
- Alongside reasoning, tool-invocation (agentic calls) grew from ~0% to **15% of requests** across the year.

### Finding 2: Coding Is the Dominant Use Case
- Programming grew from ~11% of usage early in 2025 to **over 50%** by Q4.
- Average prompt length grew approximately **4x** over the year, from ~1,500 tokens to ~6,000 tokens, reflecting the shift from short natural-language prompts to large code/docs/logs contexts.
- OpenRouter's characterisation: *"The median request is less 'write me an essay' and more 'here's a pile of code, docs, and logs, now extract the signal.'"*
- Anthropic's Claude is used for **over 80% of programming** traffic and almost zero roleplay — characterised as "the serious work model."

### Finding 3: Roleplay Dominates Open-Source Model Usage
- For open-weight models, **roleplay and creative dialogue account for over 50% of usage**.
- Interpreted by analysts as developers deploying open-source models for use cases that closed-source providers restrict.
- DeepSeek exhibits ~two-thirds roleplay traffic; described as "the entertainment king."
- Over the summer, coding also became significant for open-source models, now at **15–20% of open-source usage**.
- For Chinese open-source models specifically, programming and technology in aggregate now **exceed roleplay** (which is down to ~33%).

### Finding 4: Open-Weight Models Reach ~One-Third of Usage but Plateau
- By Q4 2025, open-weight models reached approximately **one-third of total token consumption** on OpenRouter, up from near-zero at the start of the year.
- Chinese open-source models grew from ~1% to as high as **30% in some weeks**.
- Open-weight share has plateaued this quarter, likely due to strong closed-model releases (Gemini 3, GPT-5.1, Claude Sonnet and Opus 4.5).
- Practical division: *"Closed models are for high-value workloads; open models are for high-volume workloads"* — teams routinely use both.

### Finding 5: The "Cinderella Glass Slipper" Effect and Model Lock-In
- New model releases attract large trial cohorts; users who persist form a **foundational cohort** resistant to switching as newer models emerge.
- Early-2025 cohorts for Claude 4 Sonnet and Gemini 2.5 Pro still retain **40–50% of users six months later**; later cohorts churn faster.
- Demand is **price inelastic**: users willingly pay 10–50× more per token for a premium model if it saves meaningful debugging time.
- There is no single dominant model: the **top 10 models by volume come from eight different labs**.

### Analyst Commentary: Why Wrappers and Scaffolds Won
- Commentator Brian Cantano reflected that he initially dismissed Cursor (a VS Code fork) and OpenRouter (an API wrapper) as trivially simple, and was wrong.
- The AI market is characterised by **sensitive differentiation**: small changes in prompt or model choice produce large output differences, making model evaluation hard.
- It is easy to switch providers but costly to evaluate them; models are constantly improving; memory and stickiness features are still nascent.
- This dynamic creates structural demand for routing/scaffolding layers that preserve optionality across a rapidly changing provider landscape.

---

## Key Concepts

- **OpenRouter**: A unified API gateway providing access to 300+ LLMs from a single integration, used by developers to route, failover, and cost-optimise across models.
- **Reasoning models**: LLMs that perform extended chain-of-thought processing before responding (e.g., OpenAI o1/o3 series), consuming more tokens but yielding higher-quality outputs on complex tasks.
- **Agentic / tool-use requests**: API calls in which the model invokes external tools (web search, code execution, APIs) as part of completing a task.
- **Open-weight models**: Models whose weights are publicly released (e.g., DeepSeek, Meta Llama), as opposed to closed-weight proprietary models (e.g., GPT, Claude, Gemini).
- **Cinderella glass slipper effect**: OpenRouter's term for the phenomenon where a model that is first-to-solve a painful workload creates a loyal foundational user cohort resistant to churn.
- **Sensitive differentiation**: Analyst Brian Cantano's term for the property that small differences in model or prompt choice produce large, unpredictable differences in output quality — making switching easy in principle but costly in practice.
- **Code Red (OpenAI)**: OpenAI's internal programme, reportedly accelerated in late 2025, to respond to competitive pressure from Google's Gemini 3 through faster model releases and product improvements.
- **Foundational cohort**: The persistent user segment that adopts a model early and continues using it despite newer alternatives, providing a stable traffic base.

---

## Summary

The central finding of the OpenRouter/A16Z study is that real-world LLM usage in 2025 has been shaped by two overwhelming forces: the rise of AI coding (now over 50% of token consumption) and the shift to reasoning models (also now over 50% of tokens), both of which reflect a maturing, developer-led market where prompts are long, tasks are complex, and users are willing to pay premium prices for models that genuinely save them time. Open-weight models — especially Chinese ones — have captured roughly a third of developer traffic and serve a distinct niche of high-volume and, notably, roleplay/creative use cases that closed providers restrict. The broader episode situates this data within a turbulent competitive moment: OpenAI is under pressure from Google's Gemini 3, losing user growth momentum, managing an ad-perception crisis, and preparing a fast-tracked model release, while Apple haemorrhages AI and hardware talent and Meta consolidates its position in wearables and media. Taken together, the picture is of an AI market that is simultaneously maturing in its dominant use cases (coding, reasoning-heavy tasks) and still wide open in terms of which models, platforms, and form factors will ultimately win.
