---
title: 'What I Learned Testing GPT-5.5 '
description: >-
  This episode of The AI Daily Brief — a daily podcast and video covering major
  AI news — provides a comprehensive first-look review of OpenAI's GPT-5.5
  (internally nicknamed "Spud"), released on a Friday at 2 p.m. The host
  (unnamed in the transcrip...
pubDate: 2026-04-24T00:00:00.000Z
type: episode
tags:
  - ai-daily-brief-podcast
url: 'https://www.youtube.com/watch?v=jblguhXunZs'
draft: false
---
# GPT-5.5 ("Spud"): First Reactions, Benchmarks, and Testing

## Overview

This episode of *The AI Daily Brief* — a daily podcast and video covering major AI news — provides a comprehensive first-look review of OpenAI's GPT-5.5 (internally nicknamed "Spud"), released on a Friday at 2 p.m. The host (unnamed in the transcript, operator of AIDailyBrief.ai) covers the model's benchmark performance, community reactions, competitive context against Anthropic's Claude lineup, and roughly ten personal hands-on tests. The central argument is that GPT-5.5 represents a meaningful capability step forward, particularly for agentic coding and knowledge work, and signals a competitive resurgence for OpenAI.

**Source video:** *(URL not provided in the video details)*

---

## Prerequisites

- Familiarity with large language model (LLM) concepts: inference, context windows, tokens, parameter counts
- Basic awareness of the competitive landscape between OpenAI, Anthropic, and Google
- Understanding of AI coding agents (e.g., Codex, Claude Code) and agentic workflows
- Awareness of common AI benchmarks (SWE-Bench, LiveBench, etc.)
- General knowledge of OpenAI's model naming conventions (GPT-4, GPT-5.x series) and Anthropic's Claude series (Opus, Sonnet)

---

## Main Points

### Context: Why GPT-5.5 Mattered More Than Usual

- OpenAI declared a "code red" in December, signalling an internal push to regain competitiveness
- Codex grew from ~200K to 4 million users in the early months of the year, reflecting renewed momentum
- Anthropic's unreleased "Mythos" model — described as a step-change capability model withheld from the public, ostensibly for safety reasons — had dramatically raised expectations for whatever OpenAI released next
- Some industry observers speculated Mythos was withheld due to compute constraints rather than safety concerns

---

### Official Positioning and Benchmark Results

- OpenAI described GPT-5.5 as "a new class of intelligence for real work and powering agents," designed for writing, debugging, research, data analysis, document creation, software operation, and long-horizon task completion
- Key benchmark comparisons against Anthropic's Opus 4.7:
  - **Terminal Bench 2.0** (agentic coding): GPT-5.5 scored 82.7% vs. Opus 4.7's 69.4%
  - **GDP Val** (real-world tasks): GPT-5.5 scored 84.9% vs. Opus 4.7's 80.3%
  - **Artificial Analysis Intelligence Index**: GPT-5.5 topped the overall ranking by 3 points, breaking a three-way tie with Anthropic and Google; the "extra high" variant was the first model to score in the 60s on that index
- **Weaker benchmarks for GPT-5.5:**
  - Vending Bench (single-player): roughly on par with Opus 4.6, behind Opus 4.7
  - Val's AI professional tasks (finance, medical, legal): Opus 4.7 still leads, though GPT-5.5 was a meaningful improvement over 5.4
  - **SWE-Bench Pro**: GPT-5.5 significantly underperformed Opus 4.7; OpenAI's footnote suggested Anthropic's score showed signs of memorization; members of OpenAI's Codex team argued SWE-Bench no longer measures real-world frontier coding capability, and broader community consensus treated this result as low-signal

---

### Pricing and Cost-Performance Framing

- GPT-5.5 is priced at $5 per million tokens in and $30 per million tokens out — double GPT-5.4 and ~20% more expensive than Opus 4.7 on a per-token basis
- OpenAI and analysts argued that per-token cost is the wrong metric; what matters is **intelligence per dollar** — how efficiently a model solves a problem
- On Artificial Analysis's cost-performance frontier, the GPT-5.5 model family was described as dominant

---

### Community and Expert First Reactions

- Strongly negative reactions were rare; isolated critics suggested the model was overhyped, but observers noted OpenAI did not drive the hype — community speculation around Mythos did
- Comparison to Mythos: Multiple analysts (e.g., Scaling01) concluded GPT-5.5 is "close to Mythos despite being only a fifth to half the size," and that Mythos benchmarks are irrelevant until the model is publicly available
- Estimated parameter scales: GPT-5.4 ~1–2T, GPT-5.5 ~2–5T, Mythos ~10T
- Widely cited positive reviews:
  - Every's "vibe check": called it a "top-end senior engineer," praising its speed, collaborative feel, writing quality, and best-in-class performance on their Senior Engineer benchmark
  - Pietro Schirano: "For the first time, I don't feel limited by what a model can do"
  - Matt Schumer: acknowledged a "massive leap forward" but noted that for 99% of users it may not feel dramatic, because previous models already handled most common tasks well — the gains are most visible at the edges of capability

---

### Coding Performance

- Broad consensus: GPT-5.5 is a strong coding model despite the SWE-Bench Pro anomaly
- CodeRabbit's code review evaluation: 79.2% expected issues found vs. 58.3% baseline
- Qualitative observations: writes cleaner code, touches fewer unrelated files, less prone to over-engineering, feels "less tiring" to work with
- **Long-running task reliability** was highlighted as a standout improvement:
  - Peter Gostef (Arena.ai): ran a migration task for 7+ hours — "literally never happened before"
  - An OpenAI researcher: dictated an RL experiment, left for a few days, returned to find a 31-hour run completed successfully
- Remaining weaknesses: SWE-Bench Pro score (disputed), and planning tasks — several reviewers recommended pairing Opus 4.7 for planning with GPT-5.5 for execution as the optimal multi-model setup

---

### Design, UI, and Knowledge Work

- Native design/aesthetics: improved over 5.4 but Opus retains a perceived lead for pure visual taste and product design instincts
- Recommended workflow: GPT Images 2 for UI concepting → GPT-5.5 in Codex for implementation, combined with front-end design skills
- Knowledge work results (enterprise content tasks): 10 percentage point accuracy improvement over GPT-5.4
- Persistent cross-model annoyance noted: models sometimes "break the fourth wall" — embedding meta-commentary about the task into actual output copy
- Simon Smith's PowerPoint test: autonomous 16-minute run, good mood board generation, weak visual variety and design taste

---

### OpenAI's Communication Strategy and Competitive Positioning

- OpenAI's tone was notably understated; Sam Altman's announcement read simply: "GPT-5.5 is here. We hope it's useful to you."
- Explicit themes in OpenAI's messaging:
  - **Iterative deployment** as a safety strategy
  - **Democratization** — broad public access to powerful models
  - **Inference efficiency** — Altman described OpenAI as "an AI inference company now"
- Observers read this as a deliberate contrast to Anthropic's approach of announcing powerful-but-withheld models and recent Claude Code performance issues
- On the same day GPT-5.5 launched, Anthropic published a post-mortem acknowledging real Claude Code quality degradations — confirming what many users had reported since approximately March 4th

---

### The Host's Personal Tests (~10 Tests in Codex)

- **True crime podcast script prep (writing):** GPT-5.5 followed instructions for clear, journalistic writing better than recent Opus versions, which the host found prone to dramatic AI-style affectations
- **Sponsored episode companion kit:** tested creativity, strategic alignment, and full-stack execution from ideation → project planning → web app in Codex; found 5.5 fast and quality in thinking mode; UI required skill-assisted refinement
- **Art book from piracy research (aesthetics/PDF):** produced reasonable results with some errors; host does not currently see PDF output as a primary use case for this model
- **Media kit update:** visual redesign judged worse than the original; stronger performance on copy framing and sponsor pitch arguments
- **Jobs portal with multi-model backend:** smooth Codex experience; auto-review mode reduced interruptions; host noted this fell into the category of tasks any recent generation could handle well
- **Podcast analytics (data analysis + spreadsheet):** strongest single-task result; handled 10–12 charts from Apple and Spotify, generated specific strategic insights tailored to AIDB rather than generic podcast advice, and produced a well-organised spreadsheet summary

---

### Outlook and Forward-Looking Statements

- Ethan Mollick (early access): called 5.5 "a big deal" as evidence that rapid AI improvement continues; noted the frontier remains "jagged"
- Analyst NoMoreID: compared 5.5 to "o1 Preview" — an initial RL checkpoint of a new pretraining base, suggesting a "o3 moment" for this model line is still ahead
- OpenAI Chief Scientist Jacob Pachocki: "We expect quite rapid continued progress... significant improvements in the short term, extremely significant improvements in the medium term"
- President Greg Brockman: characterised 5.5 as "a beginning point, not an endpoint"

---

## Key Concepts

- **GPT-5.5 ("Spud"):** OpenAI's latest flagship model, positioned for agentic, long-horizon knowledge work and coding tasks
- **Codex (OpenAI):** OpenAI's agentic workspace/IDE environment; the primary harness the host used for testing; supports background task execution, skills integration, and context compaction
- **Mythos (Anthropic):** An unreleased, reportedly high-capability Anthropic model withheld from public access; its announced-but-unavailable status shaped expectations for GPT-5.5
- **Agentic task / long-running task:** A workflow where an AI model autonomously executes multi-step work over an extended period (hours) with minimal human interruption
- **Terminal Bench 2.0:** A benchmark measuring agentic coding performance
- **SWE-Bench Pro:** A coding benchmark; disputed in this context as no longer measuring real frontier coding capability
- **GDP Val:** A benchmark measuring performance on real-world task execution
- **Artificial Analysis Intelligence Index:** A composite benchmark ranking AI models across multiple capability dimensions
- **Vending Bench / Vending Bench Arena:** Benchmarks simulating business operation tasks; single-player and competitive multiplayer variants respectively
- **Val's AI benchmarks:** Professional task evaluations covering finance, medical, and legal domains
- **Cost-performance frontier:** A measure of model value that weights intelligence delivered per dollar spent, rather than raw per-token pricing
- **Context compaction:** A technique for condensing long conversation histories to avoid hitting context window limits, enabling extended single-thread workflows
- **Skills (Codex):** Modular add-ons that extend Codex's native capabilities, e.g., front-end design or UI/UX skills
- **Multi-model setup:** The practice of using different models for different steps (e.g., Opus for planning, GPT-5.5 for execution) to exceed the performance of any single model
- **Intelligence per token/dollar:** The metric Noam Brown (OpenAI) argues is the correct unit for comparing model value, replacing simple per-token pricing comparisons

---

## Summary

The host presents GPT-5.5 as a genuine and significant capability advance for OpenAI, particularly in agentic coding, long-running task completion, and knowledge work — areas where previous OpenAI models had conceded ground to Anthropic's Claude. Benchmark results are largely strong, with the notable exception of SWE-Bench Pro, which the broader community largely discounted as unrepresentative. Community reception was predominantly positive, with the most nuanced observers noting that the leap feels smaller to typical users because prior-generation models already handled most everyday tasks competently; the gains are most visible at capability edges. GPT-5.5 arrives in a favourable competitive moment: Anthropic's most powerful model (Mythos) remains publicly unavailable, and Anthropic simultaneously acknowledged real quality regressions in Claude Code. OpenAI's deliberately understated launch communication — emphasising iterative deployment, broad access, and inference efficiency — reads as a calculated contrast to Anthropic's approach. The host's own tests were broadly positive, with standout results in data analysis, writing tone-following, and agentic execution, while design and planning tasks still favour Claude. Both OpenAI leadership and independent analysts frame GPT-5.5 not as a ceiling but as an early checkpoint in a new pretraining generation, with substantially larger capability improvements expected in the months ahead.
