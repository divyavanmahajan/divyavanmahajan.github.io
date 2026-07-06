---
title: Can AI Predict the Future?
description: >-
  This episode of the AI Daily Brief (published 2025-08-20) covers three
  headline stories before its main topic: a new AI benchmark called Profit
  Arena, developed by the University of Chicago, which evaluates whether AI
  models can reliably forecast ...
pubDate: 2025-08-20T00:00:00.000Z
type: episode
tags:
  - ai-daily-brief-podcast
url: 'https://www.patreon.com/posts/136892197'
draft: false
---
# Can AI Predict the Future? — Study Document

## Overview

This episode of the **AI Daily Brief** (published 2025-08-20) covers three headline stories before its main topic: a new AI benchmark called **Profit Arena**, developed by the University of Chicago, which evaluates whether AI models can reliably forecast real-world future events. The host argues that this benchmark addresses a critical gap in AI evaluation — the saturation of existing benchmarks — by leveraging live prediction market data to test AI's general predictive intelligence.

**Speaker/Channel:** AI Daily Brief (host unnamed in transcript)
**Source Video:** *(URL not provided)*

---

## Prerequisites

- Basic understanding of AI language models (LLMs) and how they are trained
- Familiarity with the concept of AI benchmarking and why it matters for measuring model progress
- General awareness of prediction markets (e.g., Polymarket, Kalshi)
- Understanding of probability and basic statistical concepts (probability distributions, calibration)
- Awareness of the current AI model landscape (GPT-5, O3 Mini, Llama 4, Grok, etc.)
- Familiarity with the CHIPS Act and U.S. semiconductor policy context (for headline sections)

---

## Main Points

### Headline 1: U.S. Government Plans 10% Equity Stake in Intel

- The Trump administration reportedly plans to acquire a ~10% stake in Intel, which would make the government Intel's largest single shareholder.
- The rationale is tied to Intel's ~$10.9 billion in CHIPS Act grants; the government seeks equity roughly equivalent to grants disbursed.
- Intel's Ohio chip fabrication facility has stalled; only $2.2 billion of grants have been disbursed so far.
- SoftBank separately agreed to purchase $2 billion of Intel stock, framing it as a bet on U.S. semiconductor manufacturing expansion.
- Critics — including the *Wall Street Journal* editorial board and *Reason* editor Nick Gillespie — characterize the arrangement as "corporate statism" and "pay to play" industrial policy that may hamstring innovation.
- A key open question is whether Intel has sufficient capital to complete the Ohio fab, and whether the government will provide additional investment or merely take equity.

### Headline 2: Tennessee Valley Authority Signs First Small Modular Reactor Power Purchase Agreement

- Kairos Power is building a 50-megawatt Generation 4 small modular reactor (SMR) in Tennessee, expected to complete by 2030.
- The TVA has agreed to purchase electricity from the plant — the first such contract of its kind in the U.S.
- The project is part of a broader Google partnership targeting 500 megawatts of SMR capacity; excess power beyond Google's data center needs feeds the public grid.
- The deal is contextualized by warnings from grid operator PJM Interconnection that the Northeast grid is already at capacity and new data centers should "bring their own generation."
- China already has multiple test SMRs and is opening its first commercial reactor, underscoring competitive urgency.

### Headline 3: Grammarly Launches AI Agents for Students and Professionals

- Following its merger with Coda, Grammarly has released eight AI agents within a new document-based "AI-native writing surface."
- Agents include: **Grader** (rubric-based feedback), **Reader Reactions** (persona-based feedback), **Expert Review** (domain-specific feedback), **Citation Finder**, **Proofreader**, and **Paraphraser**.
- The product is explicitly aimed at students entering a job market where AI fluency is expected alongside subject expertise.
- The host notes that software alone is unlikely to fully resolve the tension between AI assistance and genuine skill development in education.

### Headline 4: OpenAI's Open-Source Model Has Alignment Stripped by Researcher

- Meta AI researcher Jack Morris removed the reasoning and alignment training layers from OpenAI's open-weights model, effectively reconstructing a raw base model.
- The result was a model with no safety guardrails — willing to discuss bomb-making, plan crimes, etc.
- The host frames this as an important experiment in understanding the real-world implications of releasing open-weights models, rather than a practically harmful development at this stage.

---

### Main Topic: The Benchmark Saturation Problem

- Existing AI benchmarks are becoming saturated — models are scoring in the high 90s, making incremental improvements appear small even when underlying capability gains are significant.
- This creates a perception problem: mainstream media narratives (e.g., *New York Times*, *New Yorker*) interpret benchmark plateau as evidence that AI progress has stalled.
- New benchmarks are emerging to address this, most notably **ARC-AGI**, now in its third version (ARC-AGI 3), which uses interactive game environments to test exploration, planning, memory, and goal acquisition rather than static tasks.

### Background: The Rise of Prediction Markets

- Platforms like **Polymarket** and **Kalshi** allow users to bet real money on future outcomes across politics, economics, sports, and technology.
- Volume in AI-related prediction markets is up ~1,000% since the start of 2025, though total trading volume remains modest (~$20 million in August 2025).
- Prediction market proponents argue these markets aggregate higher-quality signals than polls or opinion because participants have financial incentives to research thoroughly.
- The *Wall Street Journal* described AI model prediction markets as treating AI developers "like racehorses."

### Profit Arena: Combining Benchmarks with Prediction Markets

- **Profit Arena**, launched by the University of Chicago, is described as "the AI benchmark for general predictive intelligence" — testing whether AI can predict the future by connecting dots across real-world information.
- The benchmark targets three capability areas that are at the frontier of current AI:
  - **Probabilistic reasoning**: quantifying uncertainty, calibration, statistical thinking
  - **Causal reasoning**: modeling how events unfold and influence one another
  - **Critical thinking**: curating and assessing the credibility of information sources
- Unlike traditional domain-specific forecasting ML systems, Profit Arena tests *general-purpose* forecasting across domains without domain-specific fine-tuning.

### How Profit Arena Works

- Events are curated from prediction platforms (e.g., Kalshi), selected for: high participation volume, domain diversity (politics, economics, sports, science, entertainment), and recurrence (e.g., weekly price movements, earnings).
- Each AI model is given the same context and must submit a **structured forecast**: a probability distribution over possible outcomes plus a detailed written rationale.
- Rationales are visible to users, who can provide feedback and contribute additional information to observe how forecasts shift.
- The process repeats until the real-world outcome is resolved.

### Profit Arena: Evaluation Metrics

- **Brier Score** (absolute metric): A standard proper scoring rule measuring accuracy and calibration of probabilistic predictions.
- **Average Return** (relative metric): Derived from utility theory; simulates using AI-generated probabilities to place bets in real prediction markets, measuring economic value generated. Users can adjust risk preferences to model different betting strategies.
- Key finding: **Brier Score and Average Return do not always align** — a model can be statistically accurate but not economically useful, and vice versa.
  - Example: Grok's models score higher on Brier Score than on Average Return.

### Early Results and Model Findings

- **O3 Mini** ranks highest on Average Return; **GPT-5** ranks highest on Brier Score.
- Models show distinct "personalities": some are aggressive (higher confidence, higher variance), others are conservative.
- Models differ significantly in how they handle uncertainty and source credibility.
- **Illustrative example — MLS prediction:**
  - Market priced Toronto FC win at 11%
  - O3 Mini predicted 30% win probability
  - Toronto won; O3 Mini earned a ~9x return, demonstrating AI finding edge over human crowd consensus
- **Illustrative example — AI federal regulation:**
  - Same data, same question, wildly divergent outputs: O3 Mini: 75%, Llama 4 Maverick: 35%, GPT-4.1: 60%
  - Demonstrates that near-identical benchmark scores can mask fundamentally different reasoning approaches

### Community Response and Broader Implications

- Reception from the AI community has been strongly positive; the benchmark is praised as **practical, continuously updated, and difficult to game**.
- Neon Blue CEO Stephen L. Hodge credits benchmark hacking as the reason recent model releases feel disappointing, and praises Profit Arena as a countermeasure.
- OpenAI's Noam Brown highlighted a widely-held misconception: many people (including investors) believe prediction and forecasting are uniquely human capacities — Profit Arena challenges that assumption directly.
- **Self-fulfilling prophecy concern**: Multiple commentators (Alan Zhao, Tormer Glick) raised the risk that published AI probability estimates will themselves influence human behavior and market dynamics, potentially causing the predicted outcomes — a feedback loop that could eventually saturate the benchmark's signal.

---

## Key Concepts

- **Benchmark Saturation**: The phenomenon where AI models approach the upper performance limits of existing tests, making it harder to observe or communicate incremental capability gains.
- **ARC-AGI (Interactive Reasoning Benchmark)**: A benchmark using game environments to test AI on exploration, planning, memory, perception, goal acquisition, and alignment — designed to resist saturation.
- **Prediction Markets**: Financial platforms (e.g., Polymarket, Kalshi) where participants bet real money on future events; prices reflect aggregate probabilistic beliefs of participants.
- **Profit Arena**: A University of Chicago benchmark that evaluates AI's general predictive intelligence using live, real-world forecasting tasks drawn from prediction markets.
- **Brier Score**: A proper scoring rule that measures both accuracy and calibration of probabilistic forecasts; lower is better.
- **Average Return**: Profit Arena's economic metric simulating the financial returns that would be generated by following an AI model's probability estimates when betting in real prediction markets.
- **Probabilistic Reasoning**: The ability to quantify uncertainty, maintain calibration, and perform statistical inference about future outcomes.
- **Causal Reasoning**: The ability to model how events unfold and causally influence one another over time.
- **Open-Weights Model**: An AI model whose parameters are publicly released, allowing external researchers to modify, fine-tune, or strip components such as alignment training.
- **Alignment Training**: Post-training procedures (e.g., RLHF) that constrain model outputs to be safe, helpful, and non-harmful; distinct from base pre-training.
- **Small Modular Reactor (SMR)**: A next-generation nuclear reactor design that is smaller and more modular than conventional nuclear plants, aimed at faster deployment and lower upfront cost.
- **CHIPS Act**: U.S. legislation providing grants and incentives to domestic semiconductor manufacturers to rebuild U.S. chip fabrication capacity.
- **Industrial Policy**: Government intervention to shape the structure of an economy, e.g., by taking equity stakes in or subsidizing strategic industries.

---

## Summary

The central argument of this episode is that the AI field is at an inflection point where existing benchmarks are no longer adequate to measure or communicate model progress, and that new, harder-to-game evaluation frameworks are urgently needed. Against this backdrop, the host introduces **Profit Arena** — a University of Chicago project that benchmarks AI models on their ability to forecast real-world future events by connecting existing information, using live prediction market data as the ground truth. Early results show that models like O3 Mini can outperform human prediction markets on economic return metrics, while GPT-5 leads on statistical accuracy, and that models with nearly identical conventional benchmark scores can exhibit wildly different reasoning strategies and risk profiles. The host presents this as evidence both that AI capabilities are deeper and more differentiated than saturated leaderboards suggest, and that forecasting — long assumed to be a uniquely human domain — is falling within AI's reach. Secondary themes include concerns about the self-fulfilling nature of published AI forecasts, the U.S. government's contested equity-for-grants deal with Intel, the milestone TVA–Kairos Power SMR contract in the context of AI energy demand, and the risks demonstrated by the ease with which open-weights model alignment can be stripped away.
