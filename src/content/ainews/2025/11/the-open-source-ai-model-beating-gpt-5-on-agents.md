---
title: The Open Source AI Model Beating GPT-5 on Agents
description: >-
  This episode of the AI Daily Brief (published November 11, 2025) covers the
  release of Kimi K2 Thinking, an open-source reasoning model from Chinese lab
  Moonshot AI, which is reportedly outperforming GPT-5, Claude Sonnet 4.5, and
  Grok 4 on agentic...
pubDate: 2025-11-11T00:00:00.000Z
type: episode
tags:
  - ai-daily-brief-podcast
url: 'https://www.patreon.com/posts/143366589'
draft: false
---
## Overview

This episode of the **AI Daily Brief** (published November 11, 2025) covers the release of **Kimi K2 Thinking**, an open-source reasoning model from Chinese lab **Moonshot AI**, which is reportedly outperforming GPT-5, Claude Sonnet 4.5, and Grok 4 on agentic benchmarks. The episode contextualises this release within broader trends around Chinese AI competitiveness, open-source model adoption in Silicon Valley, and the economics of frontier AI. The host is not named in the transcript.

**Source video:** URL not provided.

---

## Prerequisites

- Basic familiarity with large language models (LLMs) and the distinction between reasoning and non-reasoning models
- Understanding of open-source vs. closed-source AI model distribution
- Familiarity with benchmark terminology (e.g., SWE-Bench, HLE)
- General awareness of major AI labs: OpenAI, Anthropic, Google DeepMind, Meta, DeepSeek, Moonshot AI
- Basic understanding of AI inference concepts (tokens, tool calling, quantization)
- Context on the DeepSeek R1 release in January 2025 and its market impact

---

## Main Points

### Headlines: Vibe Coding Startup Lovable Continues to Grow
- Lovable CEO Anton Osika reported the platform is approaching **8 million users**, up from 2.3 million in July 2025.
- The platform now sees **100,000 new products built per day**; the company crossed **$100M ARR** in June and is rumoured to be raising at a **$5 billion valuation**.
- Despite a reported 40% traffic drop since August (per Barclays), Osika cited **100% net dollar retention**, meaning existing users spend more over time.
- Lovable is prioritising **security engineers** with the goal of making its platform more secure than human-written code alone.
- Osika views the market as non-winner-take-all, framing the mission as unlocking human creativity broadly.

### Headlines: Meta Releases Omnilingual ASR
- Meta's new open-source speech recognition model supports **over 1,600 languages** out of the box, versus 99 for OpenAI's Whisper.
- A **Zero-Shot In-Context Learning** feature allows the model to learn new languages at inference time using paired speech-text examples, potentially extending coverage to **5,400 languages**.
- Claimed benchmarks show a **character error rate below 10%** for 95% of high- and medium-resource languages, and for 36% of low-resource languages with fewer than 10 hours of training audio.
- The release signals that Meta may not have abandoned open-source model development despite its pivot toward a "superintelligence team."

### Headlines: DeepSeek Researcher Warns of Rapid Job Displacement
- Senior DeepSeek researcher **Chen Deli** publicly warned at the World Internet Conference that AI could replace most jobs within a decade.
- He characterised the current period as a "honeymoon phase" and predicted a **rapid transition with massive job cuts within 5–10 years**.
- These comments are described as **non-consensus and potentially risky** given China's general AI optimism (83% favourable sentiment vs. 39% in the US).
- Chen called on tech companies to serve as "whistleblowers" warning society of risks.

### Headlines: CoreWeave Earnings — Growth with Delays
- CoreWeave reported **revenue doubling year-over-year to $1.36 billion**, beating analyst estimates, with losses trimmed to $0.22/share vs. $0.57 projected.
- A **third-party developer delay** (likely OpenAI or Meta, each with $10B+ contracts) is affecting Q4 revenue; full-year forecast lowered from $5.15B to **$5.05B**.
- Positively, the first H100 contract to expire was **re-signed within 5% of its original price**, suggesting compute scarcity is sustaining asset value beyond earlier depreciation assumptions.
- AI stocks broadly rebounded as macro conditions improved (government shutdown deal), with NVIDIA up 4.8% and the S&P 500 recovering ~75% of the prior week's drop.

### Kimi K2 Thinking: Context — The DeepSeek Precedent
- DeepSeek's January 2025 R1 release established three key shocks: China was closer to the US frontier than assumed; costs were far lower; and the free chatbot dethroned ChatGPT on the App Store, giving consumers their first taste of reasoning models.
- This created a recurring narrative framework for evaluating Chinese model releases throughout 2025.
- NVIDIA CEO Jensen Huang's remark that "China is nanoseconds behind America" and debates over data centre build-out (US ~5,426 vs. China ~449 but growing) reinforce the geopolitical backdrop.

### Kimi K2 Thinking: Benchmark and Agentic Performance
- Released by **Moonshot AI**, Kimi K2 Thinking claims top positions on:
  - **Humanity's Last Exam (HLE)** — 51%, above GPT-5 and all other models
  - **BrowseComp** — agentic web search benchmark
  - **SealZero** — real-world data collection benchmark
- Slightly behind on coding benchmarks like **SWE-Bench Verified**, but not by a wide margin.
- Independent testing from **Artificial Analysis** ranks Kimi K2 Thinking ahead of GPT-5, Claude 4.5 Sonnet, and Grok 4 on **agentic tool use** by a significant margin.
- Moonshot claims the model supports **200–300 sequential tool calls without human interference**, dramatically extending agentic workflow duration.
- Pricing: **$0.60/million tokens input, $2.50/million tokens output** — significantly cheaper than comparable Western models.

### Kimi K2 Thinking: Agentic Capabilities as the Core Innovation
- Commentator Dean Sakharansky noted that in July 2025, models could manage only **3–5 tool calls max**; Kimi K2's release shifted the baseline such that agents can now run for over an hour.
- Real-world tests included generating a **full 15-story novel** from one prompt and solving a **physical reasoning puzzle** (balancing nine eggs, a book, laptop, bottle, and nail) on the first try.
- This is characterised as "the quietest and most significant advancement in recent memory" in agentic AI.

### The Open-Source and Cost Economics Story
- Kimi K2 can be **quantised** to run on two Mac M3 Ultras — not cheap consumer hardware, but realistic for professional developers or small companies.
- The performance gap between local/open-source and closed frontier models has narrowed from **18+ months to 3–4 months**.
- This is enabling a new category: **self-hosted production-grade LLMs** that were not feasible in 2024.
- Commentator Kashyap Patel frames this as China treating AI like electric vehicles — competing on **price and accessibility rather than matching the West feature-for-feature**.

### Silicon Valley's Quiet Switch to Chinese Models
- Reporting from Bloomberg Opinion cites growing evidence of Silicon Valley adoption:
  - A **Chamath Palihapitiya portfolio company** moved major workflows to Kimi K2, citing cost savings vs. OpenAI/Anthropic.
  - **Airbnb CEO Brian Chesky** said their new service agent relies heavily on **Alibaba's Qwen 3** ("very good, fast, and cheap").
  - **Mira Murati's Thinking Machines Lab** is building on Qwen 3.
  - **Cursor's Composer 1** agent is rumoured to be built on a Chinese model.
  - **Hugging Face downloads for Qwen have overtaken Meta's LLaMA**, signalling a shift in open-source developer preferences.

### Predictions and Broader Implications for 2026
- Bindu Reddy predicts **2026 will be the year of open weights**, with at least two US labs entering the open-weights space.
- Expected developments: DeepSeek R2 release; Kimi and GLM closing the agentic coding gap; state-of-the-art open image/video generation models; LLM developer community growth.
- The framing from multiple analysts is that **the real race is democratisation, not AGI** — who can deliver frontier performance at commodity prices.
- The concern for Western closed-source labs, especially Anthropic, is that the **API coding revenue model** is being undercut by cheaper Chinese alternatives.

---

## Key Concepts

- **Kimi K2 Thinking**: Open-source reasoning model from Chinese lab Moonshot AI, as of November 2025 ranked first on several agentic benchmarks.
- **Agentic tool use / tool calling**: A model's ability to sequentially invoke external tools (web search, code execution, APIs) autonomously over a sustained session without human interruption.
- **Humanity's Last Exam (HLE)**: A challenging general-knowledge benchmark used to compare frontier model capabilities.
- **BrowseComp**: A benchmark measuring a model's ability to perform agentic web search.
- **SealZero**: A benchmark testing a model's ability to collect and reason over real-world data.
- **SWE-Bench Verified**: A coding benchmark testing models on real-world software engineering tasks.
- **Quantization**: A compression technique for neural networks that reduces memory requirements (enabling deployment on consumer or prosumer hardware) at some cost to performance.
- **Zero-Shot In-Context Learning (for ASR)**: The ability of Meta's Omnilingual ASR model to recognise new languages at inference time using only a few speech-text example pairs, without retraining.
- **Net Dollar Retention (NDR)**: A metric indicating that existing customers spend more over time; 100% NDR means no revenue shrinkage from the existing user base.
- **Vibe coding**: A colloquial term for AI-assisted rapid prototyping and product building, particularly for non-programmers.
- **Open weights**: A model release in which the model weights are publicly available for download, enabling local deployment and modification.
- **Omnilingual ASR**: Meta's open-source automatic speech recognition model supporting 1,600+ languages with zero-shot extension to ~5,400.

---

## Summary

The central argument of this episode is that the release of Kimi K2 Thinking by Moonshot AI represents a significant and potentially pivotal moment in AI development — not merely because the model tops several leading benchmarks, but because it does so as an open-source model at commodity pricing with agentic capabilities (200–300 sequential tool calls) that meaningfully exceed those of Western frontier models. Building on the narrative established by DeepSeek's January 2025 release, the host presents a body of evidence — benchmark data, independent testing, and reports of actual Silicon Valley adoption (Airbnb, Cursor, portfolio companies of major investors) — suggesting that Chinese open-source models are no longer an emerging curiosity but an active competitive threat to the API revenue models of companies like Anthropic and OpenAI. The broader takeaway, as framed by multiple analysts cited in the episode, is that the competitive frontier in AI has shifted: the advantage window for closed Western models has collapsed from over 18 months to 3–4 months, quantization is making local deployment of near-frontier models increasingly practical, and the strategic contest may ultimately be decided not by who reaches AGI first, but by who delivers frontier-grade performance at the lowest cost and widest accessibility.
