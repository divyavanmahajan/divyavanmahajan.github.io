---
title: The AI Model Wars Just Heated WAY Up
description: >-
  This episode of the AI Daily Brief (published August 2, 2025) covers two
  segments: a headlines edition summarising major AI-adjacent business news, and
  a main episode focused on rapidly intensifying competition in the AI model
  landscape. The host ...
pubDate: 2025-08-02T00:00:00.000Z
type: episode
tags:
  - ai-daily-brief-podcast
draft: false
---
## Overview

This episode of the **AI Daily Brief** (published August 2, 2025) covers two segments: a headlines edition summarising major AI-adjacent business news, and a main episode focused on rapidly intensifying competition in the AI model landscape. The host (unnamed in the transcript) argues that the AI model wars are heating up significantly, with multiple major releases and capability announcements converging simultaneously. No single speaker affiliation is given beyond the show itself.

Source video URL: *(not provided)*

---

## Prerequisites

Readers will benefit from familiarity with the following:

- Basic understanding of large language models (LLMs) and foundation models
- Awareness of major AI companies: OpenAI, Google DeepMind, Anthropic, Mistral, Perplexity, Meta, Microsoft
- Familiarity with concepts such as model parameters, open-weights/open-source AI, inference-time compute/reasoning, and AI benchmarks
- General awareness of the competitive dynamics between US and Chinese technology sectors (e.g., NVIDIA export controls, Huawei)
- Understanding of venture capital valuations and ARR (Annual Recurring Revenue) as metrics for private AI companies

---

## Main Points

### Apple's AI Struggles Overshadow Strong Financial Results

- Apple posted its strongest quarter of revenue growth since December 2021: iPhone sales up 14% ($44.6B), total revenue up 9.6%, guidance above analyst forecasts.
- Despite strong fundamentals, the stock received only a ~2% after-hours boost, reflecting market sentiment that AI capability — not hardware sales — is what investors now reward.
- Tim Cook acknowledged AI as a priority and said Apple is "reallocating a fair number of people" to AI features and is open to M&A that accelerates their roadmap.
- Apple is acquiring at roughly one company every several weeks, but none have been large-scale deals; analysts and commentators (including Bloomberg's Mark Gurman) are skeptical this pace changes Apple's trajectory.
- Valuations of potential acquisition targets have risen sharply: Anthropic is now rumoured at ~$170B, making it effectively unattainable; even Mistral and Perplexity have moved from single-digit to mid-teen billions.

### OpenAI's Valuation and Revenue Growth

- OpenAI has reportedly raised $8.3B at a $300B valuation; the round closed months ahead of schedule and was five times oversubscribed.
- ARR is now reported at $13B (up from $10B in June), with projections to surpass $20B by year-end.
- Business users paying for ChatGPT have grown from 3 million to 5 million in a few months, countering narratives that Anthropic is taking significant market share.
- Anthropic's revenue is reported at approximately $5B and growing, potentially exceeding $1B/month.

### NVIDIA and China: H20 Chip Security Dispute

- Chinese authorities (the Cyberspace Administration of China) summoned NVIDIA to discuss alleged security vulnerabilities in H20 chips — before the first post-unban shipments even arrived.
- The CAC cited concerns about location tracking and remote shutdown capabilities allegedly embedded in the chips, demanding documentation and explanation of potential backdoors.
- The host draws a parallel to the 2019 Huawei ban, suggesting China may be using regulatory pressure to shield domestic chipmaker Huawei from NVIDIA competition.
- During the H20 ban period, Huawei invested heavily in domestic chip development; the partial rationale for lifting the H20 ban was to prevent Huawei from monopolising China's AI hardware market.
- NVIDIA denied the allegations, stating it has no backdoors in its chips.

### GitHub Copilot Reaches 20 Million Users

- Microsoft CEO Satya Nadella disclosed during earnings that GitHub Copilot has crossed 20 million all-time users.
- Approximately 5 million new users tried Copilot for the first time in the past three months.
- The metric is all-time users, not daily or monthly active users, which limits direct comparison to competitors.
- For reference, Cursor reported 1 million daily active users in March 2025; the gap illustrates Microsoft's distribution advantage over AI coding startups.

### GPT-5 and OpenAI Open-Source Models on the Verge of Release

- Community activity and leaked model cards on Hugging Face suggest GPT-5 is imminent; a model labelled "GPT-5 New Proxy API EV3" briefly appeared and was withdrawn.
- Two apparent open-weight models also surfaced briefly: `GPT-OSS-120B` and `GPT-OSS-20B`, suggesting a large and small variant.
- Community analysis indicates the 120B model may be a Mixture of Experts (MoE) architecture with four experts, runnable on a single H100 GPU, with 130K context window and FP4 training.
- Developer excitement is high, with comparisons to the impact of DeepSeek's open-source release; some scepticism remains about OpenAI's long-term commitment to open-weight releases.

### Google Releases Gemini 2.5 DeepThink

- Google released Gemini 2.5 DeepThink to Ultra subscribers — a version of the model that achieved gold-medal performance at the International Mathematical Olympiad (IMO) 2025.
- DeepThink uses **parallel thinking**: generating many ideas or solution paths simultaneously, weighing and combining them before producing a final answer, supported by novel reinforcement learning techniques.
- Google claims DeepThink leads benchmarks including Humanity's Last Exam, LiveCodeBench, IMO 2025, and AIME 2025, surpassing Gemini 2.5 Pro, OpenAI models, and Grok 4.
- Highlighted use cases include iterative design/web development, scientific and mathematical research, and complex algorithmic coding.
- Early user impressions (e.g., Professor Ethan Mollick) are favourable, with notable qualitative improvements over Gemini 2.5 Pro, including generating 3D interfaces from creative prompts.

### Manus Introduces "Wide Research" — Parallel Agentic Research

- Manus launched **Wide Research**, a feature designed for large-scale, breadth-first research tasks (e.g., analysing earnings across all Fortune 500 companies simultaneously).
- Architecturally, Wide Research is a parallel processing system in which multiple fully capable, general-purpose Manus agent instances collaborate dynamically, rather than following predefined role assignments.
- This contrasts with "Deep Research" (focused, sequential) and represents a scale-out approach to agentic computation.
- The underlying infrastructure is Manus's dedicated cloud-based virtual machine per session, now extended to supercomputing-cluster scale.

### Perplexity Comet Browser Gaining Traction

- Perplexity's Comet browser (agentic, AI-native browser) is generating significant enthusiasm among early access users, including Shopify CEO Toby Lutke.
- Users are applying it to real-world tasks such as subscription management and information consolidation, watching the agent autonomously operate browser tabs.
- Observers frame Comet as a precursor to an AI operating system rather than simply a new browser.

---

## Key Concepts

- **Mixture of Experts (MoE):** A neural network architecture in which only a subset of model parameters ("experts") is activated for any given input, improving efficiency at large parameter counts.
- **Open-weights model:** A model whose trained parameters (weights) are publicly released, allowing anyone to download and run the model locally without API access.
- **Inference-time compute / extended thinking:** A technique where a model is given more computational time at inference (not just training) to explore multiple reasoning paths before producing an answer.
- **Parallel thinking (DeepThink):** Google's term for generating and evaluating multiple solution hypotheses simultaneously during inference, enabled by extended thinking time and reinforcement learning.
- **Annual Recurring Revenue (ARR):** A normalised measure of predictable yearly revenue from subscriptions or contracts, used to assess the growth trajectory of SaaS and AI platform businesses.
- **Wide Research (Manus):** A Manus feature enabling multiple fully capable AI agents to tackle subtasks of a large research problem in parallel, with dynamic rather than role-fixed collaboration.
- **Comet Browser (Perplexity):** An AI-native agentic browser that can autonomously perform web-based tasks on behalf of users.
- **H20 chip:** NVIDIA's chip designed for the Chinese market, compliant with US export restrictions; subject to ongoing geopolitical scrutiny.
- **Humanity's Last Exam:** A difficult AI benchmark used to assess frontier model reasoning capabilities.
- **IMO (International Mathematical Olympiad):** A prestigious international mathematics competition used as a benchmark for AI mathematical reasoning.

---

## Summary

The episode argues that the AI competitive landscape is intensifying on multiple simultaneous fronts. In the business headlines, Apple's inability to deliver meaningful AI products is increasingly visible to markets despite strong hardware sales, while OpenAI's financial metrics and user growth demonstrate that AI capability is now the primary driver of technology company valuations. Geopolitically, China's regulatory scrutiny of NVIDIA's H20 chips mirrors past manoeuvres to protect domestic champions like Huawei. On the model frontier, GPT-5 and an OpenAI open-weights model appear imminent, Google has shipped Gemini 2.5 DeepThink with demonstrably stronger reasoning via parallel inference-time computation, and newer interface paradigms — Manus's Wide Research and Perplexity's Comet Browser — are extending AI capability from raw model performance into large-scale agentic workflows. The host's overall message is that both model capabilities and the interfaces built around them are advancing rapidly and simultaneously, making this an exceptionally dynamic moment for AI builders and users alike.
