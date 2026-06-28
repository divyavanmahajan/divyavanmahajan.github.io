---
title: Agent Performance Is Accelerating...Fast
description: >-
  This episode of the AI Daily Brief covers three headline stories and a central
  analytical segment arguing that AI agent capabilities are not only improving
  rapidly, but that the rate of improvement is itself accelerating. The host
  synthesizes rece...
pubDate: 2025-04-24T00:00:00.000Z
type: episode
tags:
  - ai-daily-brief-podcast
draft: false
---
# Agent Performance Is Accelerating Fast
## AI Daily Brief — April 24, 2025

---

## Overview

This episode of the *AI Daily Brief* covers three headline stories and a central analytical segment arguing that AI agent capabilities are not only improving rapidly, but that the *rate* of improvement is itself accelerating. The host synthesizes recent benchmark results, newly extended research on agentic task horizons, and open-source model developments to support the thesis that we are entering a super-exponential phase of AI capability growth. No speaker name or affiliation is explicitly stated beyond the show's identity as the *AI Daily Brief*.

**Source video:** No URL provided.

---

## Prerequisites

- Basic familiarity with large language models (LLMs) and AI agents
- Understanding of exponential growth and Moore's Law as an analogy
- Awareness of key AI labs and models: OpenAI (GPT series, O1, O3, O4 Mini), Anthropic (Claude), Google (Gemini)
- General knowledge of AI benchmarking concepts
- Familiarity with the distinction between inference-time compute and training-time compute

---

## Main Points

### 1. The Oscars Officially Permit AI Use in Filmmaking

- The Academy of Motion Picture Arts and Sciences updated its rules to state that generative AI tools will **neither help nor harm** a film's chances of nomination.
- The Academy's criterion remains the **degree to which a human was at the heart of creative authorship**.
- Notable AI-assisted films: *The Brutalist* (AI-enhanced Hungarian accents via ReSpeecher, 10 nominations, Adrian Brody won Best Actor) and *Dune Part 2* (AI in VFX, won Best Visual Effects).
- The ruling is characterized as bold given recent Hollywood strikes and ongoing controversy; it implicitly treats AI as an extension of existing filmmaking tools.
- Runway CEO Cristobal Valenzuela framed the decision as recognizing AI as "a tool that requires an artist to articulate a meaningful way of using it."

---

### 2. OpenAI Testifies It Would Buy Chrome; Search Is Critical to AGI

- In ongoing Google antitrust proceedings, the DOJ argued the court has an opportunity to "restore competition for decades."
- Nick Turley (head of ChatGPT) testified that OpenAI would purchase Chrome if divested, calling a native ChatGPT-Chrome integration potentially transformative for the internet.
- Turley stated that **search technology is a necessary component** of a superintelligent assistant — without it, the system makes things up or lacks current facts.
- OpenAI had "significant quality issues" with search results from its existing provider (Microsoft Bing, referred to only as "provider number one") and has been building its own search index since early 2024, targeting 80% own-index usage by year-end.
- Google's financial dominance (e.g., paying Samsung an "enormous sum" to integrate Gemini) was cited as blocking OpenAI's distribution efforts on Android.
- The DOJ has also proposed forcing Google to **share its search index with rivals**, which would directly shape the competitive AI landscape.

---

### 3. Apple Siri Leadership Overhaul

- Former Vision Pro lead Mike Rockwell, brought in last month to head Siri, is now replacing most of Siri's prior leadership.
- New leads for engineering, user experience, and underlying architecture have all been brought in from the Vision Pro software group.
- Additional talent is being drawn from the core OS team responsible for iPhone software.
- The restructuring reflects recognition that Siri's prior direction was not working, though outcomes remain uncertain.

---

### 4. Agent Task Horizons Are Doubling Approximately Every Four Months

- Research by **METR** previously established that the length of tasks AI agents can complete at a 50% success rate was **doubling roughly every seven months**, going back to GPT-2 — dubbed a "new Moore's Law for AI agents."
- METR had already noted a recent inflection: the doubling period appeared to be shrinking to around **four months**, starting around the release of GPT-4 and Claude 3.5 Sonnet.
- **AI Digest** extended the research by adding O3 and O4 Mini to the dataset:
  - **O4 Mini**: can complete tasks that would take a human ~1.5 hours
  - **O3**: can complete tasks that would take a human ~1.7 hours
  - These data points fit the steeper 2024–2025 curve rather than the slower historical trend
- If the faster trend holds, agents might reach **month-long tasks by 2027**.
- The host notes potential for **super-exponential growth**: as AI improves, it increasingly assists in developing more capable AI, creating a flywheel of acceleration.
- 80,000 Hours founder Benjamin Todd predicted agents capable of full **one-day (eight-hour) software tasks by 2026**, attributing the acceleration to the new RL reasoning model paradigm that began in 2024.

> **Conceptual diagram (described):** A timeline chart from GPT-2 to O4 Mini plots task-length capability on a log scale against time. Two trend lines are visible: a shallower slope (7-month doubling, 2019–2025) and a steeper slope (3–4 month doubling, 2024–2025). O3 and O4 Mini cluster tightly around the steeper line.

---

### 5. O3 Released Performance Surprises on ARC-AGI Benchmark

- The December 2024 O3 preview achieved unprecedented ARC-AGI scores but used approximately **$3,000 of compute per task** (estimated >$1M total for the benchmark run).
- ARC Prize co-founder **Mike Knoop** retested the publicly released O3 and found:
  - O3 Medium is **"the industry-leading AI reasoning system by a large margin"**
  - **Twice the score** at **one-twentieth the cost** compared to the next leading chain-of-thought system on ARC-v1
  - The release model retains "most of the qualitative new capability" seen in the December preview
- Knoop noted evidence of an unknown **architectural "X factor"**: O3's accuracy appears to be more than a simple function of model size or thinking-token count (time spent reasoning).
- On **ARC-v2**, O3 and O4 Mini scored near zero, suggesting the benchmark remains a meaningful frontier.
- A key counterintuitive finding: **longer thinking does not reliably produce better results** — models were sometimes more accurate with shorter response paths.
- The December high scores are explained as achievable through **extensive parallel sampling** (e.g., generating 64 outputs and selecting the best), consistent with what the host calls "the Doctor Strange theory."

---

### 6. Open-Source Advances: Two Undergrads Build State-of-the-Art Voice Model

- **Nari Labs** (a two-person team of South Korean undergraduates, zero funding) released **Dia**, a 1.6-billion-parameter text-to-speech model.
- Trained using **Google's TPU Research Cloud** (free academic compute); runs on consumer hardware.
- Capabilities: multi-speaker dialogue, voice cloning, nonverbal sounds (laughing, coughing, sighing), naturalistic prosody.
- Competitive evaluations suggest Dia matches or outperforms **ElevenLabs Studio** and **Sesame's 1B CSM model**, including on rhythmically complex content.
- Ethan Mollick noted generating a voice clip in **46 seconds on a home PC** from plain text input.
- This mirrors the DeepSeek pattern: high-capability models produced on severely constrained budgets, signaling that frontier-quality results are no longer the exclusive domain of well-funded labs.

---

## Key Concepts

- **Agentic task horizon**: The length of time a task takes (used as a proxy for task complexity) that an AI agent can complete at a 50% success rate; a key metric for measuring agent capability growth.
- **METR**: The research organization that produced the original study charting AI agent task-length capability over time, showing a ~7-month doubling period.
- **Moore's Law for AI Agents**: The informal name given to METR's finding that agent task-horizon capability doubles on a regular schedule, analogous to transistor-count doubling in semiconductor history.
- **ARC-AGI (Abstraction and Reasoning Corpus)**: A benchmark designed to test genuine novel problem-solving ability in AI systems, intended to be resistant to training-data memorization.
- **ARC-v2**: An updated, harder version of the ARC-AGI benchmark on which current models score near zero.
- **Inference-time compute**: Computational resources used during model operation (querying), as opposed to training; scaling inference can dramatically improve benchmark scores at high cost.
- **Parallel sampling**: A technique where multiple outputs are generated for a single prompt and the best is selected, effectively trading compute for accuracy.
- **RL reasoning models**: A class of models (including OpenAI's O-series) trained using reinforcement learning to improve multi-step reasoning, credited with accelerating the capability inflection seen in 2024.
- **Super-exponential growth**: A growth rate that itself increases over time, faster than a fixed exponential curve; proposed as a possible trajectory for AI capability if AI systems accelerate their own development.
- **ReSpeecher**: An AI voice modification company used in *The Brutalist* and *Amelia Perez* to alter actors' vocal characteristics.
- **Dia (Nari Labs)**: A 1.6B-parameter open-weights text-to-speech model notable for naturalistic multi-speaker dialogue, produced with no funding by two undergraduates.
- **TPU Research Cloud**: Google's program providing free access to tensor processing units for academic and research projects.

---

## Summary

The central argument of this episode is that AI agent capabilities are accelerating at an accelerating rate. Drawing on extended analysis of METR's task-horizon research — now updated to include O3 and O4 Mini — the host presents evidence that the doubling period for agentic task complexity has shortened from roughly seven months to approximately three to four months, and that this is not an anomaly but a confirmed new trend. This thesis is reinforced by O3's surprisingly strong real-world performance on the ARC-AGI benchmark at dramatically reduced cost, and by the release of Dia, a state-of-the-art voice model built by two unfunded undergraduates — continuing a pattern, exemplified by DeepSeek, in which frontier AI results are becoming accessible to minimally resourced teams. The host contextualizes these developments within a broader flywheel dynamic: as AI systems grow more capable, they become increasingly useful for accelerating the development of yet more capable systems, potentially leading to super-exponential growth. Taken together — benchmark data, new Moore's Law patterns, open-source breakthroughs, and direct user experience — every signal points in the same direction: AI capabilities are rising fast, and the pace of that rise is itself rising.
