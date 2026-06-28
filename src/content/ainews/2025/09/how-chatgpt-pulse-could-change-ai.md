---
title: How ChatGPT Pulse Could Change AI
description: >-
  This episode of the AI Daily Brief (dated September 27, 2025) covers three
  major AI developments: OpenAI's launch of ChatGPT Pulse, a new background
  agent feature; OpenAI's introduction of GDP Val, a real-world economic
  benchmark for AI evaluation...
pubDate: 2025-09-27T00:00:00.000Z
type: episode
tags:
  - ai-daily-brief-podcast
draft: false
---
# ChatGPT Pulse and the Rise of Background Agents

## Overview

This episode of the *AI Daily Brief* (dated September 27, 2025) covers three major AI developments: OpenAI's launch of **ChatGPT Pulse**, a new background agent feature; OpenAI's introduction of **GDP Val**, a real-world economic benchmark for AI evaluation; and Meta's launch of **Vibes**, an AI-generated short-form video feed. The host (unnamed in the transcript) provides analysis, first impressions from the community, and a personal take on what these releases mean for the trajectory of AI products.

*Source video URL: Not available*

---

## Prerequisites

- Familiarity with large language model (LLM) chatbots (ChatGPT, Claude, etc.)
- Basic understanding of AI agents and agentic workflows
- Awareness of AI benchmarking concepts (what benchmarks measure and why they matter)
- General knowledge of the current AI product landscape (OpenAI, Meta, Anthropic, Perplexity, Spotify)
- Familiarity with concepts like ambient computing, proactive vs. reactive AI, and AI memory/context

---

## Main Points

### 1. OpenAI Launches ChatGPT Pulse: From Reactive to Proactive AI

- **Pulse** is a new ChatGPT feature that runs overnight, researching a user's interests, connected data (e.g., calendar), and recent chat history to deliver a personalized daily briefing each morning.
- Sam Altman describes it as his favorite ChatGPT feature so far and frames it as a shift "from being all reactive to being significantly proactive and extremely personalized."
- The feature is positioned explicitly as a **background agent**—it operates asynchronously without requiring user prompts to initiate each session.
- OpenAI emphasizes that Pulse is not designed as an attention-capturing infinite scroll; the intent is to surface high-value information, not to maximize time-on-platform.
- Initially rolling out to **Pro subscribers only** ($200/month), consistent with Sam Altman's earlier announcement about compute-intensive offerings.

### 2. The Paradigm Shift: Background Agents and Ambient AI

- Greg Brockman described Pulse explicitly as a **background agent**, a term that signals a broader industry movement away from prompt-and-response interaction toward autonomous, persistent AI activity.
- The host draws a distinction between two emerging agent paradigms:
  - **Autonomous general-purpose agents** (e.g., Manus, Genspark, ChatGPT Agent): reactive to a prompt but capable of very comprehensive task execution.
  - **Ambient/proactive agents** (e.g., Pulse, Friend pendant): operate independently of user-initiated prompts, surfacing information or actions on the user's behalf.
- Parallel examples in the market include Avi Schiffman's Friend.com pendant (fully ambient) and Meta's Ray-Bans (ambient awareness but still user-activated).
- The host notes that agentic coding has followed a similar arc—from IDE-based interaction to background agents that execute autonomously.

### 3. Memory and Context as Strategic Moat

- Pulse relies heavily on ChatGPT's accumulated memory and context: past chats, connected apps, stated preferences, and incidental mentions.
- Pulse co-creator Andrew Chen provided examples: Pulse cross-referenced a prior bike maintenance question with weekend activity searches to surface a local bike route; it surfaced relevant RL papers from arXiv while the user was debugging Pulse code.
- The host argues that **memory and context are becoming key sources of lock-in** and competitive defensibility—similar to how the iPhone's contextual awareness keeps Apple relevant despite AI stumbles.
- Other platforms pursuing context-as-moat include Perplexity (email assistant announced the same week) and various email-based AI tools.

### 4. Community Reception of Pulse: Mostly Positive, Some Skepticism

- **Positive reactions**: Users describe it as a highly personalized news feed that surfaces specific topics discussed in passing, not just broad subject areas. Onboarding experience was praised.
  - Simon Smith: "This feels like the most personalized news feed you can imagine."
  - Sai Kambapati: "ChatGPT Pulse is going to spark a new wave of proactive technology."
- **Observations**: Olivia Moore (a16z) noted that in her testing, Pulse surfaced mostly professional topics despite launch marketing emphasizing personal use cases; calendar data from connected apps was not yet integrated.
- **Skeptical takes**: One user noted that demo use cases (kitten care, airport tips) seemed trivial for a $200/month product. Another compared it to early Operator—exciting directionally but unpolished in execution.

### 5. Host's Personal Take: An Untested Hypothesis

- The host is personally skeptical of proactive/anticipatory AI use cases, finding reactive, user-directed interaction more valuable for his own workflow.
- He challenges Fiji Simo's assertion that "AI should anticipate your needs" as an **untested hypothesis** being treated as fact, and cautions OpenAI against assuming they know better than their users before gathering evidence.
- He draws a parallel to the backlash from OpenAI's deprecation of older models when GPT-5 launched (the "4.0 rebellion"), arguing the company should remain humble about user preferences.
- He acknowledges his views may not represent the majority, particularly younger users still forming AI interaction habits, and commits to trying Pulse for at least two weeks before drawing conclusions.

### 6. GDP Val: A Benchmark for Economically Valuable Real-World Tasks

- OpenAI introduced **GDP Val**, an evaluation framework measuring AI performance on tasks tied to 44 occupations across the top nine U.S. GDP-contributing industries.
- The benchmark includes **1,320 specialized tasks** vetted by professionals with at least 14 years of experience, based on real work products (legal briefs, engineering blueprints, care plans, etc.).
- Unlike academic-style benchmarks, tasks come with reference files, context, and expected deliverables (documents, slides, spreadsheets, multimedia).
- **Grading methodology**: Expert human graders from the same occupations blind-compare AI-generated deliverables against human-produced ones, supplemented by detailed scoring rubrics and an AI-based automated grader (not yet reliable enough to replace humans).
- **Key findings**:
  - Models match or beat expert performance on 25–50% of tasks.
  - Performance more than doubled from GPT-4o (spring 2024) to GPT-5 (summer 2025).
  - **Claude Opus 4.1** ranked as the top-performing model, above even GPT-5 High—OpenAI published this result despite it favoring a competitor.
- Current limitations: one-shot evaluation only; does not capture multi-draft improvement or ambiguously defined real-world tasks. Available at **evals.openai.com**.

### 7. Meta Vibes: AI Video Feed Meets Near-Universal Derision

- Meta launched **Vibes**, a dedicated short-form AI-generated video feed in the Meta AI app, produced in collaboration with Midjourney and Black Forest Labs.
- Features include video creation, remixing, relighting, restyling, music addition, and publishing.
- The response from the tech community was strongly negative, with critics using terms like "slop," "garbage," and "shameful," questioning whether AI compute should be used for attention-capturing content.
- The host offers a measured analysis:
  - The reaction reflects pre-existing concern that Meta's superintelligence team would be used to optimize engagement rather than pursue meaningful AI applications.
  - Distribution platforms will inevitably have to manage a flood of AI-generated content as production costs fall.
  - Segregating AI content into a distinct part of the app at least allows users to opt out.
  - The host believes a **new social platform** built around AI creative tools is likely to emerge, but doubts it will be Meta Vibes in its current form.

### 8. Spotify Removes 75 Million "Spammy" AI Tracks

- Spotify announced removal of 75 million tracks flagged as AI-generated spam, created by bad actors and content farms attempting to capture royalty payments.
- Spotify introduced new policies around impersonation and AI voice cloning.
- The host frames this as an early step, predicting that AI and non-AI music experiences will be explicitly segregated in the short term across streaming platforms.

---

## Key Concepts

- **ChatGPT Pulse**: OpenAI's new background agent feature that proactively delivers a personalized daily briefing based on a user's chat history, preferences, and connected apps.
- **Background agent**: An AI agent that operates asynchronously and autonomously without requiring a user to initiate each interaction; it runs tasks in the background and surfaces results on a schedule.
- **Proactive AI**: An AI system that anticipates user needs and acts without being explicitly prompted, as opposed to reactive AI that responds only to direct queries.
- **Ambient AI**: AI that maintains passive awareness of a user's environment or context and can engage or surface information naturally, without discrete prompting.
- **GDP Val**: OpenAI's evaluation framework benchmarking AI performance against economically valuable, real-world professional tasks across 44 occupations and nine GDP-contributing industries.
- **Memory and context as moat**: The strategic advantage gained when an AI system accumulates rich, personalized context about a user, making it costly to switch to a competing platform.
- **Meta Vibes**: A short-form AI-generated video feed within the Meta AI app, built in collaboration with Midjourney and Black Forest Labs.
- **Slop**: Colloquial term used in the AI community to describe low-quality, mass-produced AI-generated content, often used pejoratively.
- **One-shot evaluation**: A benchmarking approach in which a model is assessed on a single attempt at a task, without opportunity for iteration or multi-draft refinement.

---

## Summary

The episode centers on OpenAI's launch of ChatGPT Pulse, which the host frames as a significant paradigm experiment: moving AI personal assistants from reactive, prompt-driven tools toward proactive, background agents that surface personalized information daily without being asked. The host situates Pulse within a broader industry trend toward ambient and asynchronous AI interaction, noting that memory and context are becoming critical competitive moats. He offers cautious personal skepticism—arguing that the assumption users want anticipatory AI is an untested hypothesis—while acknowledging that his own usage patterns may not be representative. On the benchmarking front, the host is enthusiastic about GDP Val as a long-needed tool for grounding AI progress in economically meaningful, real-world performance rather than academic proxies, noting that Claude Opus 4.1 currently leads even GPT-5 on the evaluation. Meta's Vibes launch is examined as a case study in the inevitable collision between AI-generated content and existing social platforms, drawing near-universal criticism from the tech community and raising broader questions about how distribution platforms will handle the coming flood of AI content.
