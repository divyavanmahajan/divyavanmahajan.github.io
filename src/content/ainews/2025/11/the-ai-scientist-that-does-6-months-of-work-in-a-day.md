---
title: The AI Scientist That Does 6 Months of Work in a Day
description: >-
  This episode of the AI Daily Brief (published November 17, 2025) covers two
  main topics: (1) pre-release hype surrounding Google's Gemini 3 model and
  surrounding market dynamics, and (2) a deep dive into Cosmos, a new AI
  scientist system from Edis...
pubDate: 2025-11-17T00:00:00.000Z
type: episode
tags:
  - ai-daily-brief-podcast
draft: false
---
## Overview

This episode of the **AI Daily Brief** (published November 17, 2025) covers two main topics: (1) pre-release hype surrounding Google's **Gemini 3** model and surrounding market dynamics, and (2) a deep dive into **Cosmos**, a new AI scientist system from **Edison Scientific** (formerly Future House) that claims to compress six months of scientific research work into a single day. The host is the unnamed presenter of the AI Daily Brief podcast/video channel. No external guest speakers are featured; the host synthesises commentary from various AI community figures, investors, and researchers.

**Source video:** URL not provided.

---

## Prerequisites

- Basic familiarity with large language models (LLMs) and AI agents
- Understanding of what agentic AI systems are (systems that can take multi-step autonomous actions)
- General knowledge of the AI research landscape, including OpenAI, Google DeepMind, and Anthropic
- Familiarity with concepts such as context windows, inference-time scaling, and retrieval-augmented generation
- Basic awareness of scientific research workflows (literature review, hypothesis generation, data analysis)
- Some financial literacy helpful for the market/bubble discussion segments

---

## Main Points

### 1. Gemini 3 Pre-Release Hype

- Google CEO Sundar Pichai retweeted a Polymarket listing showing 69% odds of Gemini 3 releasing that week, accompanied by thinking-face emojis — widely interpreted as a soft confirmation.
- Multiple Google employees were publicly teasing the release on X; even OpenAI employees expressed excitement, which the host interprets as a signal that OpenAI may have a competing "monster model" ready for December.
- Business Insider reported that internal sources describe the new Gemini model as "extremely impressive," potentially giving Google a shot at reclaiming the top position in the generative AI rankings.
- Community commentary ranged from genuine excitement (predictions Google will reach "Level 3" agentic AI first) to satirical hyperbole (Karpathy joking that Gemini 3 "answers questions before you ask them").
- Polymarket was pricing in a Tuesday release at time of recording.

---

### 2. Berkshire Hathaway Buys Google Stock

- Regulatory filings revealed Berkshire Hathaway purchased approximately **$4.9 billion** in Google stock during Q3, its 10th-largest position.
- The buy is notable because Berkshire, a value investor, historically avoided high-growth tech; Buffett publicly admitted he "blew it" by not buying Google earlier.
- Berkshire trimmed positions in Bank of America and Apple simultaneously; roughly **$382 billion (~33% of portfolio)** remains in cash.
- The host interprets the move not as a bold AI speculation bet, but as a signal that Berkshire sees Google as a durable U.S. tech leader — and notably, Berkshire did **not** buy speculative semiconductor or data-center management companies.
- Google stock rallied an additional **4%** in after-hours trading following the disclosure.

---

### 3. Michael Burry Closes His Hedge Fund

- Burry, famous for shorting the 2008 housing market, recently disclosed bearish positions in Palantir and Nvidia — misreported by media as a "$9 billion bet"; Burry corrected this to approximately **$9 million** in options.
- In an October 27th letter to investors, Burry announced he was liquidating the fund, acknowledging his "estimation of value…has not been in sync with markets" for some time.
- Despite closing the fund, Burry continues to push his short thesis on X, predicting AI CapEx will roll over in 2025 and crash the Nasdaq.
- A Bloomberg op-ed questioned whether Burry remains worth following, and the host's own most-viewed tweet characterised the broader cultural phenomenon: "An entire generation watched *The Big Short*, thought Michael Burry was cool, and spent the next decade calling everything a bubble."

---

### 4. Sam Altman's Dealmaking "Popped the Non-Bubble"

- An analysis from the X account TMT Breakout argues that Altman's aggressive, high-profile deal announcements (framed as a "$1.4 trillion, 30-gigawatt splurge") paradoxically deflated speculative AI market momentum rather than inflating it.
- The argument: if the deal-making had been roughly half the scale, investor enthusiasm and price action would have continued building; instead, the overabundance "drowned out the energy."
- The author's conclusion: the AI trade is transitioning from a "straight-line, giddy phase" to a more mature, fundamentals-driven phase where stock-picking becomes more relevant.

---

### 5. Cosmos: The AI Scientist System

- **Announced by:** Edison Scientific (formerly Future House); CEO Sam Rodriguez; co-founder Andrew White.
- **Core claim:** A single Cosmos run is estimated by beta users to be equivalent to **six months of PhD/postdoctoral scientific work**, completed in approximately 12 hours.
- One run can read **1,500 scientific papers** (via 36 literature review agents) and generate **42,000 lines of code** (across 166 data analysis agents).
- At least **79% of findings are stated to be reproducible**.
- Cost: **$200 per run**.

---

### 6. Cosmos: Technical Architecture

- The core innovation is a **structured, continuously updated world model** — described by the host (citing Simon Smith) as functioning more like a **knowledge graph** than a world model in the robotics/physics sense.
- Conceptually: hundreds of AI agents run in parallel (some reading papers, some analysing data). Each agent writes findings to a shared "whiteboard" (the world model), which all other agents can read — solving the coherence problem that plagued earlier multi-agent systems.
- The two primary agent types are: **(1) literature review agents** and **(2) data analysis agents**, which share state through the world model.
- The architecture is compared to the "Doctor Strange" strategy of running many parallel instances to aggregate superior outcomes.

```
High-level Cosmos architecture (textual diagram):

[Research Objective / Prompt]
        |
        v
 ┌─────────────────────────────┐
 │    Structured World Model   │  <-- shared knowledge graph / "live whiteboard"
 │  (continuously updated)     │
 └────────┬────────────────────┘
          |
    ┌─────┴──────┐
    |             |
[36 Literature   [166 Data Analysis
 Review Agents]   Agents]
  (read papers)   (run code, analyze datasets)
    |             |
    └─────┬───────┘
          |
   [Discovery Reports / Findings]
```

---

### 7. Cosmos: Discoveries and Validation

- **Three reproduced (unpublished) findings:**
  1. Nucleotide metabolism is the dominant altered pathway in hypothermic mice brains (metabolomics).
  2. Humidity during heat treatment is the key factor in perovskite solar cell performance; identified a threshold above which cells fail.
  3. The same mathematical patterns in neuronal connectivity appear across different species.

- **Four novel contributions:**
  4. Statistical evidence that higher SOD2 enzyme levels may reduce heart tissue damage in humans.
  5. A new molecular explanation for how a genetic variant may lower type 2 diabetes risk.
  6. A new method to map the order of molecular changes leading to tau buildup in Alzheimer's disease.
  7. Neurons first affected in Alzheimer's show reduced expression of flipase genes with age, possibly increasing their vulnerability.

---

### 8. Caveats and Criticisms

- The **six-month estimate** is derived from polling beta users asking how long they would have needed to reach the same conclusions — a methodology the team itself acknowledges is "intrinsically suspect."
- Computational biologist **Nico McCarty** argues the paper's time-saving math is "hand-wavy": human scientists do not need to read hundreds of papers to make a discovery; the best scientists triangulate efficiently to insights in ways that are difficult to replicate by brute-force reading.
- Cosmos "often goes down rabbit holes or chases statistically significant yet scientifically irrelevant findings."
- The team recommends running Cosmos **multiple times on the same objective** to sample different research directions.
- User experience tension: researcher **Nico McCarty** suggests most biologists prefer real-time collaboration over delegating large autonomous tasks; co-founder Andrew White acknowledged this as an ongoing internal debate.
- The host urges maintaining high default scepticism about AI scientific discovery claims, regardless of the source.

---

## Key Concepts

- **Cosmos:** An agentic AI scientist system from Edison Scientific that autonomously reads scientific literature, analyses data, and generates research findings using a shared world model architecture.
- **Structured World Model (as used by Cosmos):** A continuously updated knowledge graph shared across all agents in a Cosmos run, enabling coherent long-horizon reasoning across parallel agents — distinct from "world models" in the physics-simulation or robotics sense.
- **Agentic AI / AI Agents:** AI systems capable of taking multi-step autonomous actions toward a goal, rather than simply responding to single prompts.
- **Inference-Time Scaling:** The idea that allocating more compute at inference (rather than training) time improves outputs; Cosmos claims to show a linear scaling law for scientific research depth.
- **Level 3 AI (DeepMind/OpenAI framework):** The third level in a five-level AI capability framework, defined as systems that can take autonomous actions — contrasted with earlier levels focused on reasoning and problem-solving without action.
- **Perovskite Solar Cells:** A lightweight, low-cost solar technology sensitive to moisture; featured as a subject of one of Cosmos's reproduced discoveries.
- **SOD2:** An enzyme (superoxide dismutase 2) for which Cosmos found statistical evidence linking higher levels to reduced heart tissue damage.
- **Tau Buildup:** A hallmark pathological process in Alzheimer's disease; Cosmos proposed a new method to map its molecular order of progression.
- **Flipase Genes:** Genes involved in membrane phospholipid transport; Cosmos found reduced expression in Alzheimer's-vulnerable neurons in aging mice.
- **Knowledge Graph:** A structured representation of entities and relationships, used here as a working analogy for Cosmos's world model.
- **Polymarket:** A prediction market platform; used in the episode to track odds of the Gemini 3 release.
- **Value Investing (Berkshire context):** An investment philosophy focused on buying assets priced below their intrinsic value based on current fundamentals, as contrasted with growth investing.

---

## Summary

The episode argues that AI is entering a consequential and more mature phase on two fronts simultaneously. On the market side, the combination of Berkshire Hathaway's Google investment and the deflating of speculative AI momentum — attributed partly to the scale of OpenAI's deal-making — suggests the sector is transitioning from hype-driven trading to fundamentals-driven evaluation. On the capability side, the launch of Cosmos by Edison Scientific represents one of the most concrete and publicly documented demonstrations to date of AI performing meaningful autonomous scientific research: the system uses a multi-agent architecture with a shared, continuously updated knowledge graph to read thousands of papers, execute tens of thousands of lines of analytical code, and produce findings across neuroscience, materials science, and clinical genetics — including four claimed novel contributions to the scientific literature. While the host and cited researchers flag legitimate methodological concerns about how time-savings are estimated and whether brute-force literature coverage replicates expert scientific intuition, the overall message is that AI-accelerated science is no longer a theoretical promise but an emerging operational reality, and that practitioners and observers alike should engage with it critically but without dismissiveness.
