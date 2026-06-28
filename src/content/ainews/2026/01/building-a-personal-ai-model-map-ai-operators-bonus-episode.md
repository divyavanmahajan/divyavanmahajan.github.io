---
title: 'Building a Personal AI Model Map [AI Operators Bonus Episode]'
description: >-
  This bonus episode introduces the concept of "AI Operators" — a skills-focused
  format centred on using AI tools and building AI projects, as distinct from AI
  news coverage. The host (from the AI Daily Brief) uses this episode to walk
  through the M...
pubDate: 2026-01-10T00:00:00.000Z
type: episode
tags:
  - ai-daily-brief-podcast
draft: false
---
## Overview

This bonus episode introduces the concept of "AI Operators" — a skills-focused format centred on using AI tools and building AI projects, as distinct from AI news coverage. The host (from the AI Daily Brief) uses this episode to walk through the **Model Map Builder**, a vibe-coded web application designed to help individuals systematically test, score, and track AI models and tools across different use cases. The episode also touches on an emerging workflow philosophy: translating opportunities directly into software using AI-assisted development tools.

**Source video:** No URL was provided for this recording.

---

## Prerequisites

- Basic familiarity with large language models (LLMs) and popular AI tools (e.g., ChatGPT, Claude, Gemini, Gamma, Genspark)
- General understanding of what "vibe coding" means (using AI coding assistants to build software without traditional engineering workflows)
- Awareness of tools such as Lovable, Replit, and Claude Code for AI-assisted development
- Familiarity with the host's "New Year's AI Resolution" programme (10-week AI skills curriculum launched on New Year's Eve 2025)

---

## Main Points

### Background: The AI Operators Concept
- The host had been considering a spinoff podcast called "AI Operators," focused entirely on AI skills and project-building rather than AI news.
- Rather than launching it separately, the host decided to experiment with the format inside the existing AI Daily Brief community.
- The New Year's AI Resolution programme (10 weeks of AI projects) provided a natural launching pad for this experiment.

### The New Year's AI Resolution Programme and Community
- The programme was accompanied by a vibe-coded website where participants can view the weekly projects and share their completed work.
- Within the first week, hundreds of people shared projects and over 200 teams had signed up.
- Notable teams include Google Cloud Startups (90 members) and a Meta team (~35 members).
- A Teams feature was added within approximately 10 minutes of a community member's suggestion, illustrating the rapid iteration possible with vibe-coded projects.

### Week Two: Model Mapping
- Week two of the programme focuses on **model mapping** — running the same prompt across multiple AI tools/models to develop a personal reference for which tools perform best in which contexts.
- The core value proposition: having a personal map of model strengths and weaknesses provides meaningful "alpha" (advantage) over most users.
- This does not require paid subscriptions; even knowing which free-tier tools excel at specific tasks is valuable.
- The task: choose models, test a prompt, and create a personal reference document.

### The Model Map Builder Application
- To support week two, the host built the **Model Map Builder** — a dedicated web app to store, organise, and score model test results.
- Built using **Lovable** (alternatives: Replit, Claude Code).
- The app is not itself the testing environment; testing happens in the individual model interfaces, and results are logged back into the app.

### Application Feature: Use Case Library
- Contains approximately 20 pre-built common use cases grouped by category (e.g., strategic analysis, writing, visual design, code).
- Example use cases: competitive landscape brief, workflow automation, slide creation.
- Users can add custom use cases with: title, category, description, prompt template, and a public/private toggle.
- Over time, the library is intended to become a community-sourced use case repository.

### Application Feature: Test Lab
- Users select a use case, which auto-populates a prompt template they can copy into any model interface.
- Users select which models and tools to compare (the distinction between "model" and "tool" is acknowledged as blurry — e.g., ElevenLabs functions as both).
- After running tests externally, results are logged back into the app using a scoring system:
  - **Accuracy & Quality**: 1–5 stars
  - **Style & Fit**: 1–5 stars
  - **Speed**: Slow / Medium / Fast
  - **X Factor**: 1–3 stars (catch-all for subjective preference or unlisted criteria)

### Application Feature: My Models Tab and Test History
- Rated models appear in a "My Models" tab showing overall ratings and per-use-case breakdowns.
- A test history view allows users to review and edit past results.
- Planned improvement: ability to view the My Models page organised either by model or by use case.

### Live Development Demo: Adding a User-Side Model Entry Feature
- The host demonstrated an in-session development iteration using Lovable's **chat/planning mode** before execution.
- Problem identified: the "Manage" button during model selection was non-functional and conceptually unclear.
- Lovable's planner analysed the codebase and proposed two options: (A) allow all users to add models globally, or (B) keep additions admin-only.
- The host refined the requirement: users should be able to add models **for themselves only**, with an optional checkbox to **suggest the model be added to the master list** by admins.
- The host used **WhisperFlow** (voice-to-text tool, triggered via keyboard shortcut) to dictate the refined requirement.
- The edit was implemented in approximately one minute and functioned as expected.

### Broader Workflow Philosophy: PM-as-Builder
- The host referenced an essay by Google Senior AI PM **Shobhum Sabu** titled *"The Modern AI PM in the Age of Agents."*
- Key mental model from the essay — **"from handoffs to hands-on"**:
  - **Old model**: PM writes spec → engineers build → PM reviews → iterate
  - **New model**: PM figures out what to build → PM builds with agents → PM evaluates and iterates → hands off to engineers for production
- The host's use case skips the handoff entirely, going straight to live deployment.
- The host noted it took roughly a year of working with these tools before this "build first" thinking fully clicked into place.

---

## Key Concepts

- **AI Operators**: A proposed skills-focused format (and community) centred on using AI tools and building AI projects, as opposed to following AI news.
- **Model Mapping**: The practice of systematically testing the same prompt across multiple AI models/tools to develop a personalised reference for relative strengths and weaknesses.
- **Vibe Coding**: Building software by prompting AI coding assistants (e.g., Lovable, Replit, Claude Code) rather than writing code manually.
- **Lovable**: An AI-assisted web application builder used in this episode; features both a chat/planning mode and an execution mode using different underlying models for each.
- **Use Case Library**: A curated (and user-extensible) repository of AI task templates within the Model Map Builder, designed to reduce the blank-slate problem when setting up tests.
- **Test Lab**: The section of the Model Map Builder where users configure, queue, and log the results of model comparison tests.
- **X Factor Rating**: A 1–3 star catch-all scoring dimension for subjective preference or criteria not captured by the structured scoring rubric.
- **WhisperFlow**: A voice-to-text input tool used by the host to dictate prompts and instructions during development, activated via a keyboard shortcut.
- **Chat/Planning Mode (Lovable)**: A pre-execution planning phase in Lovable where the AI analyses existing code and proposes implementation options before making changes; uses a different model than the execution phase.
- **Hands-On PM Model**: A workflow philosophy in which product managers directly build and iterate on software using AI agents, reserving engineer handoff only for production deployment (or skipping it entirely).

---

## Summary

The episode introduces "AI Operators" as an experimental skills-and-building-focused format layered onto the existing AI Daily Brief community, using the New Year's AI Resolution programme's Week Two (model mapping) as its anchor. The host demonstrates the **Model Map Builder** — a custom vibe-coded web application built in Lovable — which provides a structured home for recording, scoring, and organising personal AI model test results across use cases. Key features include a pre-built and community-extensible use case library, a test lab for configuring and logging comparisons, and a personal model dashboard. A live development session illustrates how rapid, iterative AI-assisted coding enables near-instant feature refinement in response to nuanced requirements. Underlying the episode is a broader argument: that the most effective AI practitioners in 2026 will default to asking "can I build something to make this better?" and that the tools now exist to make that a realistic, low-friction habit for non-engineers and engineers alike.
