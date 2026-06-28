---
title: How DeepSeek V4 Connects to the US Power Grid
description: >-
  This episode of AI Daily Brief (recorded April 27, 2026) connects two
  seemingly unrelated news stories: the White House's invocation of the Defense
  Production Act (DPA) to address U.S. electrical grid infrastructure, and the
  release of DeepSeek V4...
pubDate: 2026-04-27T00:00:00.000Z
type: episode
tags:
  - ai-daily-brief-podcast
draft: false
---
# How DeepSeek V4 Connects to the U.S. Power Grid

## Overview

This episode of *AI Daily Brief* (recorded April 27, 2026) connects two seemingly unrelated news stories: the White House's invocation of the Defense Production Act (DPA) to address U.S. electrical grid infrastructure, and the release of DeepSeek V4, China's latest open-weight AI model family. The central thesis is that AI compute demand is rapidly straining U.S. energy infrastructure, that this has become a recognized national security issue, and that Chinese AI models—even when not frontier-level—represent a meaningful strategic and commercial challenge to U.S. AI dominance. No individual speaker is named as host; the show is presented by the *AI Daily Brief* channel.

Source video URL: *Not provided*

---

## Prerequisites

- Basic understanding of the AI model landscape (OpenAI, Anthropic, Google Gemini, DeepSeek, Meta AI)
- Familiarity with cloud computing and hyperscaler economics (AWS, Google Cloud, Azure)
- General knowledge of U.S.–China technology competition
- Understanding of GPU/chip supply chains and their role in AI training and inference
- Awareness of the Defense Production Act and its historical uses
- Basic financial literacy (ARR, equity stakes, capex, revenue multiples)

---

## Main Points

### Google's $40 Billion Investment in Anthropic

- Google confirmed a $40 billion investment in Anthropic: $10 billion upfront, $30 billion contingent on undisclosed commercial milestones.
- Google had previously invested a cumulative ~$3 billion; this deal could push Google's ownership stake above 20% (from ~14% as of early 2025).
- A parallel deal with Amazon ($5 billion upfront, $20 billion contingent) required Anthropic to commit $100 billion in AWS spending over a decade and locked in 5 gigawatts of compute supply.
- Analysis from Mireille Securities framed these deals as Anthropic trading equity for compute access: "Anthropic pre-signing Amazon's invoice in order to keep its growth growing."
- Each gigawatt of capacity is described as roughly equivalent to a full-scale nuclear reactor; Anthropic is collectively locking in capacity rivaling Microsoft's entire 2024 global data center footprint (~6 GW).

### The Compute Scarcity Narrative and Cloud Giant Advantage

- OpenAI plans to build 30 gigawatts of capacity by 2030, with 8 gigawatts already "identified," partnering with Oracle, data center developers, and neoclouds alongside established cloud providers.
- Amazon has invested in both Anthropic and OpenAI, benefiting simultaneously from cloud usage fees, adoption of its in-house silicon, and data center capex recovery—regardless of which AI lab wins.
- Mireille Securities argued the market is not yet pricing in how AI competition's "spoils" flow to cloud infrastructure providers, noting Amazon was trading near a 10-year low on revenue multiples.
- Meta signed a multi-billion dollar deal for Amazon's Graviton 5 CPUs (not GPUs), optimized for agentic workloads, as part of an up-to-$135 billion AI build-out in 2026.
- NVIDIA closed the reporting week at a new all-time high, making it the world's first $5 trillion company.

### The U.S. Power Grid as an AI Bottleneck

- Goldman Sachs had previously identified electricity—not just chips—as AI's next major bottleneck, projecting U.S. data center electricity demand to rise from ~6% to ~11% of total national consumption by 2030.
- The Financial Times noted the grid upgrade backlog had become "a major choke point," complicated by regulatory, financial, and supply chain challenges.
- J.P. Morgan explicitly called the aging U.S. grid a national security risk in late March 2026, arguing grid resilience underpins economic development, industrial competitiveness, and defense.
- President Trump issued a presidential memo invoking Section 303 of the Defense Production Act, declaring grid infrastructure—transformers, transmission lines, substations, high-voltage circuit breakers, electric core steel, and related supply chains—essential to national defense.
- The memo authorized the Secretary of Energy to make purchases, commitments, and financial instruments to expand domestic grid manufacturing and deployment capacity, citing limited domestic production, foreign supply dependence, and insufficient capital investment.

### DeepSeek V4: Details and Benchmarks

- The V4 family includes two models: **V4 Pro** (1.6 trillion parameters) and **V4 Flash**, both with 1 million token context windows.
- On BenchVerified, V4 Pro is roughly tied with Opus 4.5/4.6 and GPT-5.3/5.4 at ~80%.
- On Terminal Bench 2.0, V4 Pro is slightly ahead of Opus 4.6 and slightly behind GPT-5.4.
- On Humanity's Last Exam, V4 Pro trails Western comparisons.
- Initial reactions were mixed to negative on raw performance: Bloomberg called it "underwhelming"; analyst Dean Ball noted R1 (early 2025) remained closer to the U.S. frontier than V4.

### DeepSeek V4: The Price Argument

- V4 Pro is priced at $1.74 per million input tokens and $3.48 per million output tokens—less than one-seventh the cost of Opus 4.6 and less than one-quarter the cost of GPT-5.4.
- V4 Flash is priced at $0.14 per million inputs and $0.28 per million outputs, undercutting Gemini Flashlight by 80%.
- DeepSeek publicly linked future price reductions to Huawei chip production ramping up in H2 2026, described as "tying API economics to domestic chip infrastructure."
- Simon Willison summarized: "Almost on the frontier, a fraction of the price."
- Matthew Berman argued that for most enterprise use cases—which do not require absolute frontier performance—the cost calculus strongly favors DeepSeek, especially given its open-source, fine-tunable nature.

### Geopolitical Risks of Chinese Open-Source AI Adoption

- Berman argued that widespread U.S. enterprise adoption of Chinese open-source models creates geopolitical dependency risk: if Chinese labs change architecture or cut off access, U.S. companies could be left stranded.
- His proposed remedies: the U.S. must invest more heavily in competitive open-source models, and closed-source U.S. labs must reduce prices much more aggressively.
- DeepSeek V4 did not close the capability gap with the U.S. frontier, but "built something good enough, gave it away for free, and a lot of U.S. companies are going to take them up on it."

### China's Countermoves and the Meta/Manus Situation

- Beijing directed Chinese tech firms (naming Moonshot/Kimi and StepFund specifically) to reject U.S. capital unless explicitly government-approved, aimed at preventing U.S. investors from taking stakes in sensitive AI sectors.
- China blocked Meta's ~$2 billion acquisition of Manus AI on national security grounds, with officials describing it as "a conspiratorial effort to drain China of AI talent and resources."
- Manus had relocated its headquarters from Beijing to Singapore shortly before the deal, which Beijing viewed unfavorably; two co-founders were detained for questioning.
- China also changed policy to prevent foreign-incorporated Chinese companies from going public in Hong Kong, forcing firms to reincorporate onshore.
- These moves signal an escalating, more formalized phase of U.S.–China AI competition.

---

## Key Concepts

- **Defense Production Act (DPA), Section 303**: A U.S. law allowing the president to direct industrial production for national defense needs; invoked here to expand domestic grid infrastructure manufacturing.
- **Gigawatt (GW) of compute capacity**: A unit used to describe data center power demand; roughly equivalent to one full-scale nuclear reactor's output.
- **Agentic workloads**: AI tasks involving autonomous, multi-step agent execution, which may favor CPU-optimized architectures over GPUs for inference.
- **Open-weight model**: An AI model whose weights are publicly released, allowing users to download, fine-tune, and self-host it (e.g., DeepSeek V4).
- **Compute-for-equity deals**: Investment structures in which cloud providers supply compute resources in exchange for equity stakes and guaranteed cloud spending commitments (e.g., Anthropic's deals with Amazon and Google).
- **Hyperscaler**: A large-scale cloud infrastructure provider (Amazon AWS, Google Cloud, Microsoft Azure) operating at global scale.
- **Neocloud**: A smaller, specialized cloud provider offering GPU or AI-focused compute (e.g., CoreWeave, Nebius).
- **Pre-training wall**: A recurring hypothesis that scaling large language models through continued pre-training has hit diminishing returns on capability improvements.
- **Graviton 5**: Amazon's ARM-based CPU line, cited as potentially more efficient than GPUs for running AI agents at scale.
- **Tranium**: Amazon's custom AI training chip (GPU-class accelerator), distinct from Graviton.
- **Kimi / Moonshot**: A Chinese AI lab and its model series, named as subject to Beijing's new restrictions on U.S. investment.
- **Manus AI**: A Chinese AI agent startup whose acquisition by Meta was blocked by Chinese authorities on national security grounds.

---

## Summary

The episode argues that the AI industry in 2026 is increasingly defined not by model capability alone, but by access to two scarce physical resources: compute and electricity. Massive investment deals—Google's $40 billion commitment to Anthropic, Amazon's parallel arrangements, OpenAI's 30-gigawatt buildout plan—reveal that AI labs are trading equity for guaranteed compute in a supply-constrained environment, while cloud giants like Amazon structurally benefit from competition among the labs they fund. Upstream from compute is energy: the White House's invocation of the Defense Production Act to expand U.S. grid infrastructure formalizes what Goldman Sachs, J.P. Morgan, and the Financial Times had been warning—that electricity availability, not just chips, will shape the AI race. DeepSeek V4, though not frontier-level, demonstrates that Chinese AI development does not need to match the U.S. at the top of the benchmark leaderboard to exert strategic and commercial pressure: near-frontier performance at a fraction of the cost, released as open-source, creates powerful incentives for U.S. enterprises to adopt Chinese models, raising dependency risks that parallel Jensen Huang's argument about chip supply chains but operating in reverse. Simultaneously, Beijing is tightening control over its own AI ecosystem by blocking foreign investment in sensitive tech firms and unwinding cross-border corporate structures. Taken together, the episode presents a picture of a competition that is escalating on multiple simultaneous fronts—model capability, compute infrastructure, energy supply, and geopolitical control over AI supply chains.
