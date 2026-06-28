---
title: 'GPT 5.4 First Test Results '
description: >-
  This episode of the AI Daily Brief (published March 6, 2026) covers the
  release of OpenAI's GPT-5.4, presenting a mix of community first impressions,
  benchmark analysis, and the host's own hands-on testing. The host (name not
  stated on-air) argues...
pubDate: 2026-03-06T00:00:00.000Z
type: episode
tags:
  - ai-daily-brief-podcast
draft: false
---
# GPT-5.4: First Test Results — Study Document

## Overview
This episode of the *AI Daily Brief* (published March 6, 2026) covers the release of OpenAI's GPT-5.4, presenting a mix of community first impressions, benchmark analysis, and the host's own hands-on testing. The host (name not stated on-air) argues that GPT-5.4 represents a meaningful step forward — particularly in computer use, professional knowledge work, and agentic coding — while identifying notable weaknesses in UI/front-end design and out-of-the-box verbosity. The episode matters because it contextualises GPT-5.4 within the ongoing competitive race between OpenAI, Anthropic, and Google, and offers practical observations for developers and knowledge workers deciding whether and how to adopt the model.

*Source video URL: Not provided.*

---

## Prerequisites
- Familiarity with the iterative model release cadence from OpenAI, Anthropic, and Google (GPT-5.x series, Claude Opus family, Gemini)
- Basic understanding of **agentic AI workflows** — models that autonomously call tools, browse the web, write and execute code, or control a computer
- Awareness of key benchmarks: **SWE-Bench**, **ARC-AGI 2**, **OS World**, and **GDP-Val**
- Understanding of **context windows** (measured in tokens) and why larger windows matter for long-horizon tasks
- Familiarity with coding agent environments: **Codex CLI** (OpenAI) and **Claude Code** (Anthropic)
- Basic knowledge of **OpenClaw** (referenced as an open-source agent framework running on Mac minis)
- Familiarity with **MCP (Model Context Protocol)** and tool-calling architectures

---

## Main Points

### 1. Release Context and Pre-Launch Expectations
- GPT-5.4 was framed as the product of OpenAI's internal "Code Red" initiative, launched in December 2025.
- Hype was higher than for recent incremental releases (5.1–5.3), but expectation management via leaks was evident — e.g., the context window was reported by *The Information* as 1 million tokens, down from rumoured 2 million.
- The broader pattern, per Ethan Mollick, is that the latest release from one of the "big three" (OpenAI, Anthropic, Google) is generally the world's best model at release, until the next big-three release.

### 2. What OpenAI Claims GPT-5.4 Is
- Positioned as a **professional work model**, contrasting with GPT-5.3 Instant (speed/personality, aimed at consumer ChatGPT users).
- Described by OpenAI as integrating the coding capabilities of GPT-5.3 Codex with improved tool use, agentic workflows, and document/spreadsheet/presentation tasks.
- Key headline claims:
  - **1 million token context window**
  - **Most token-efficient reasoning model** — significantly fewer tokens than GPT-5.2
  - **Tool Search** feature: tools are loaded on-demand rather than all upfront, reducing token overhead by ~47% on a 250-task evaluation from Scale's MCP Atlas
  - **Fast Mode** in Codex: up to 1.5× faster token velocity, described as "same intelligence, just faster"

### 3. Benchmark Performance Highlights
- **ARC-AGI 2**: ~20 percentage point improvement over GPT-5.2 at the same price point (Greg Kammerer, ARC Prize).
- **OS World Verified (computer use)**: GPT-5.4 scored **75%**, above human-level performance of 72.4%, up from GPT-5.2's 47.3%.
- **GDP-Val** (professional knowledge work across 44 occupations, 9 industries):
  - GPT-5.2: 49.8% win rate vs. professionals
  - GPT-5.2 Pro: 60%
  - GPT-5.4 family: 69.2%–70.8% (wins only); **82%–83%** when ties are included
  - Ethan Mollick's implication: on a 7-hour professional task, this translates to ~4 hours 38 minutes saved on average
- **SWE-Bench / coding**: Only nominally better than GPT-5.3 Codex; the community broadly accepted this because coding advances were already embedded in 5.3 Codex.

### 4. Computer Use — A Step Change
- The OS World score (75% vs. human 72.4%) prompted the strongest community reaction.
- Pace (insurance AI agents) stress-tested 5.4 on legacy 20-year-old insurance portals — historically the hardest UIs to automate:
  - **Click accuracy** ("ClickGAC") improved dramatically; earlier models frequently missed targets on cluttered screens.
  - Also improved: long-trajectory reasoning, iteration speed, and memory across tasks.
- Key framing shift: the bottleneck has moved from *"can the model do it?"* to *"do you trust it enough to let it?"*

### 5. Coding and Agentic Workflow Reception
- The team at *Every* (newsletter) summarised: three months ago OpenAI was losing the coding agent race to Claude Code / Opus 4.5; GPT-5.4 shifts the balance back.
- Strengths noted: proactive research without prompting, more human/conversational voice than prior Codex models, ~2× faster than Opus, lower cost (approximately half the price of Opus 4.6).
- Weaknesses noted: scope creep on multi-step tasks, misreading task completion, over-engineering ("too eager"), occasional hallucinated completion reports.
- Matt Schumer called coding capabilities "essentially flawless" and "essentially solved" inside Codex.
- Mark Tenenholtz (Perplexity) highlighted that **Codex CLI UX improvements** — specifically the reduced confirmation/approval friction — were the "real hero."

### 6. Writing and General Professional Work
- GPT-5.4 was praised for writing quality: described as having "personality again," capable of empathy, creativity, wit, and concision with light prompting.
- Simon Smith (Click Health): "probably better than the best Claude models now at writing."
- Dr. Daria Anutmaz: found a 10,000-word literary article "mesmerizing" in quality.
- Claire Vo (How IAI): praised tool use ("chef's kiss") and the first robust "go investigate and fix" agentic experience; flagged latency and stability as weaknesses.

### 7. The Host's Hands-On Test — Planning Phase (GPT-5.4 in ChatGPT)
- **Task**: Build an experience to help agent builders showcase their skills to prospective clients/employers — a real, non-trivial product concept.
- **Model used**: GPT-5.4 Thinking (standard setting).
- **Problems encountered**:
  - Jumped immediately into spec-building before understanding the problem, falling into default training-data patterns (e.g., assuming the focus should be on technical skills rather than the novel, tools-augmented skill set the host was describing).
  - Extreme **over-verbosity**: long responses filled with nested bullet lists, numbered lists, lettered lists; repeating points already agreed upon; created a high cognitive burden on the prompter.
  - Persistent **planning mode**: resisted transitioning to artifact creation even after many prompts; described visualisations rather than building them.
  - Required explicit prompting ("Why aren't you just designing it? Claude would have shown me five versions by now") before attempting a prototype — and even then initially described five interface directions rather than building them.

### 8. The Host's Hands-On Test — UI/Design Failure
- When the prototype was eventually generated, the visual output was widely agreed to be poor:
  - "Muddy gradient blobs," "dull and washed out colors," "no typographic hierarchy," "looks like a dark mode template from 2023" (Claude's critique of the 5.4 output).
  - This was corroborated by multiple community voices: Ben Davis, Matt Schumer ("front-end taste is far behind Opus 4.6 and Gemini 3.1 Pro").
  - The host moved front-end design work back to Claude.

### 9. The Host's Hands-On Test — Codex CLI Phase (Positive Turn)
- Once design was handled by Claude, the host moved to Codex CLI for implementation.
- **Standout positives vs. Claude Code**:
  - Far fewer confirmation/approval interruptions — dramatically smoother experience.
  - Rich **interstitial progress updates** during long-running tasks (full sentences describing current state, not just a spinner) — meaningful transparency for 5–10 minute builds.
  - **Zero deployment errors** — worked immediately, right out of the box; described as something Claude Code builds rarely achieve on first deploy.
- Minor issues: Codex suggested using GPT-4.1 at one point; confirmed that 5.4's poor design taste carries into Codex as well.

### 10. Overall Assessment and Caveats
- Conclusion: not replacing one model with the other, but GPT-5.4/Codex will be integrated deeply into the host's workflow going forward.
- Important caveat: the host had not yet customised system instructions to address verbosity — many criticisms may be fixable with prompt/instruction tuning.
- Recommendation: "You would be doing yourself a disservice if you didn't go try GPT-5.4."

---

## Key Concepts

- **GPT-5.4**: OpenAI's frontier model released March 5, 2026, targeting professional and agentic workloads; integrates GPT-5.3 Codex capabilities with improved tool use, computer use, and reasoning efficiency.
- **GPT-5.3 Instant**: A companion release focused on speed and consumer-facing personality ("more accurate, less cringe"), not reasoning depth.
- **Codex CLI**: OpenAI's command-line coding agent environment, updated alongside GPT-5.4 with reduced approval friction and richer progress reporting.
- **Tool Search**: A GPT-5.4 architectural feature that loads tool definitions on-demand (rather than injecting all definitions upfront), reducing token usage by ~47%.
- **OS World Verified**: A benchmark measuring AI performance on real desktop computer-use tasks; human baseline is 72.4%.
- **GDP-Val**: A benchmark evaluating model performance on professional knowledge-work tasks spanning 44 occupations across 9 major U.S. industries, scored as win/tie/loss against human professionals.
- **ARC-AGI 2**: A benchmark from the ARC Prize measuring general reasoning ability; considered a proxy for fluid intelligence.
- **SWE-Bench**: A benchmark testing AI ability to resolve real GitHub software engineering issues.
- **OpenClaw**: An open-source agentic framework (referenced as running on Mac minis) for building and deploying autonomous agents; context for why computer use quality is now practically important.
- **MCP (Model Context Protocol)**: A protocol for defining and exposing tools to AI models; Scale's MCP Atlas was used to evaluate GPT-5.4's tool search efficiency.
- **Long-horizon deliverables**: Tasks requiring sustained, multi-step reasoning and output — e.g., financial models, legal analyses, slide decks — a stated focus area for GPT-5.4.
- **Token velocity**: The rate at which a model generates output tokens; higher velocity means faster perceived response, relevant for iterative coding workflows.
- **Code Red**: OpenAI's internal initiative launched December 2025, aimed at regaining competitive ground in coding and agentic capabilities; GPT-5.4 is described as a primary output of this effort.

---

## Summary

GPT-5.4 represents OpenAI's most consequential model update in several release cycles, delivering genuine step-change improvements in computer use (surpassing human-level performance on OS World at 75%), meaningful gains on professional knowledge-work benchmarks (82–83% tie-or-win rate on GDP-Val), and a compelling agentic coding experience through the updated Codex CLI. Its architectural efficiency gains — token-efficient reasoning, on-demand tool search, and fast mode — make it especially attractive for production agentic deployments. The host's first-hand testing confirmed many of the community's findings: the model excels in complex, long-horizon planning and agentic coding tasks, and the Codex CLI experience is noticeably smoother than Claude Code in terms of friction and deployment reliability. However, two consistent weaknesses emerge from both community reports and direct testing — poor front-end UI taste and a strong tendency toward over-verbosity and excessive planning before building — both of which may be addressable through instruction tuning but are notable friction points out of the box. The broader competitive narrative is that OpenAI, after a period of perceived disadvantage in the coding and agentic space, has meaningfully closed the gap with Anthropic's Claude Code, with the trajectory of iteration suggesting the contest between the two will remain close.
