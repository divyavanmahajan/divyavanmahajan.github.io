---
title: All the Cool Things People are Vibe Coding
description: >-
  This episode of the AI Daily Brief (published July 18, 2025) covers the
  expanding landscape of "vibe coding" — AI-assisted software creation by
  non-traditional or lapsed developers. The host (unnamed in the transcript,
  associated with the AI Daily...
pubDate: 2025-07-18T00:00:00.000Z
type: episode
tags:
  - ai-daily-brief-podcast
url: 'https://www.patreon.com/posts/134445516'
draft: false
---
# All the Cool Things People Are Vibe Coding

## Overview

This episode of the **AI Daily Brief** (published July 18, 2025) covers the expanding landscape of "vibe coding" — AI-assisted software creation by non-traditional or lapsed developers. The host (unnamed in the transcript, associated with the AI Daily Brief podcast/channel) argues that vibe coding has moved well beyond novelty prototyping into legitimate production applications, personal micro-tools, and even general business automation. The episode also covers related headlines: Lovable's unicorn status, Perplexity's new funding round, Apple's AI talent losses to Meta, Mistral's latest product push, and Claude Code's usage limit controversy.

*Source video URL: Not provided.*

---

## Prerequisites

- Basic familiarity with the concept of **AI-assisted coding** (sometimes called "vibe coding") and tools like Cursor, Claude Code, Lovable, Replit, and Bolt
- General awareness of the **large language model (LLM) ecosystem** (Anthropic, OpenAI, Google, Meta, Mistral)
- Understanding of **SaaS business models** and metrics such as ARR (Annual Recurring Revenue) and Series A/B funding rounds
- Familiarity with **MCP (Model Context Protocol)** connectors and what it means for agents to interact with external software
- Basic awareness of **agentic AI** workflows — AI systems that take multi-step actions on behalf of users

---

## Main Points

### 1. Lovable Becomes the Newest AI Unicorn

- Lovable raised a **$200 million Series A** at a **$1.8 billion valuation**.
- Key growth metrics: **2.3 million active users**, **180,000 paying customers**, ARR grew from **$17M in February to $75M** at time of recording.
- Achieved this with only **45 full-time employees**, illustrating the leverage of AI-native small teams.
- CEO Antoine Osika's stated goal: move from casual prototyping to **full production-ready code** that can support real businesses.
- Notable example: A Brazilian edtech company (500,000 paying users) used Lovable to build a premium platform in **two weeks**, reportedly generating **$3 million in 48 hours**.

---

### 2. Perplexity Raises Again; Competitive Dynamics with Google

- Perplexity is raising an **additional $100 million** extension to its Series E at an **$18 billion valuation**.
- Valuation trajectory: ~$500M entering 2024 → $18B by mid-2025 — driven by new features (e.g., Comet browser) and scarcity of cap table access at leading AI firms.
- CEO Arvind Srinivas argued Google faces an **innovator's dilemma**: its advertising revenue model conflicts with letting AI agents perform clicks on behalf of users, limiting how aggressively it can pursue agentic browsing.
- Structural advantage for startups: they are **not constrained by legacy business models**.

---

### 3. Meta Continues Poaching Apple's AI Talent

- Bloomberg reports **Mark Lee and Tom Gunter** have left Apple to join Meta's new superintelligence group under Rumin Pang.
- Apple is offering **retention bonuses to ~100 engineers**, but they fall far short of Meta's packages (Gunter reportedly received a **$100 million offer**).
- Apple is rumored to be considering acquisitions to address its AI gap; **Mistral** is among the reported targets.
- Mistral's current positioning: active open-model development, European regulatory compliance, latest LeChat features include deep research, voice, multilingual reasoning, and image generation.

---

### 4. Claude Code Hit by Usage Limit Controversy

- Users of Claude Code's **$200/month Max plan** encountered unexpected usage limits with no advance notice, flooding Anthropic's GitHub with bug reports.
- The Max plan is described as offering limits **20× higher than the Pro plan**, but Anthropic has never guaranteed a specific access level.
- An Anthropic representative acknowledged the issue but did not confirm policy changes.
- Context: Claude Code's **user base grew 300%** in two months; revenue grew **5.5×** since the Claude 4 model launch in May.
- The episode frames this as a "victim of its own success" problem, with cost vs. usage tension expected to grow as AI coding normalizes.

---

### 5. Survey Data: High Satisfaction with Vibe Coding

- The Information's subscriber survey (tech-oriented audience) found:
  - **75%** of respondents were actively using vibe coding tools
  - **88% total satisfaction**: 53% "somewhat satisfied," 35% "extremely satisfied"
  - Only **12%** reported dissatisfaction
- The host notes that high satisfaction among a technically sophisticated audience is *more* impressive than it would be among general users, who might be more easily wowed.
- Conclusion drawn: satisfaction and penetration rates are inconsistent with a passing fad; this represents a **permanent shift** in how software is written.

---

### 6. Expanding Use Cases — From Prototyping to Production

- Early vibe coding use case: **throwaway prototypes** to communicate product ideas (still common; the host's company Super has soft-banned raw feature requests in favor of vibe-coded prototypes).
- Use cases are now much broader:
  - **Scientific/research tooling**: John Park Hill (Director of ML, Tere Therapeutics) built a custom front-end to visualize drug molecule interaction data — a tool too niche for commercial software but now buildable in an afternoon.
  - **Micro-SaaS entrepreneurship**: Joe Buechler (OpenAI staff) built `turtledit.com`, an Airbnb photo enhancement app, in **10 days with 60 PR merges**, using a stack entirely new to him (GPT Image 1 API, V0 by Vercel, Windsurf, Codex).
  - **Personal micro-apps**: From Lenny Richitsky's crowd-sourced list of 1,000+ replies — carb counters for diabetic children, clothing layer advisors (grown to 85,000 users), procrastination-break apps, chore trackers in the App Store, pickleball trackers, nicotine pouch trackers, emoji-driven story generators.
  - **Work productivity**: Meeting prep automation, Chrome extensions, inbox focus tools, personal time tracking.

---

### 7. Vibe Coding as Business Automation and Agentic Computing

- Greg Eisenberg highlighted user **AmrMXT** (founder of Humblelytics), who runs his entire business from within **Cursor** using MCP connectors to access accounting, marketing, sales, and customer service SaaS platforms — without building separate apps.
  - Example workflow: ask Cursor to pull accounting data → generate a quote → update the backend automatically.
  - Eisenberg's framing: *"How do you make SaaS programmable?"*
- **Swyx (Latent Space)** identified a new pattern: developers using **Claude Code and Cline for non-coding tasks** — sales, BI automation, G Suite integration (reading email, searching Slack/Linear, generating reports), enabled by MCP.
- **Tarek (Anthropic technical staff)** described using Claude Code as a general-purpose agent: "Everything is a file and it knows how to use your computer like you do." Use cases include journals, to-dos, Apple Notes, iMessage, and research notes.
- The host frames this as early evidence of **AI-first computing**: the boundary between app, automation, and feature is dissolving when an agent can write and execute code on demand.

---

## Key Concepts

- **Vibe Coding**: AI-assisted software creation where users describe desired functionality in natural language and an AI model generates the code, often enabling non-developers or lapsed developers to build functional applications.
- **Lovable**: A vibe coding platform (Series A unicorn as of mid-2025) focused on moving from prototyping toward production-ready application generation.
- **MCP (Model Context Protocol)**: A connector standard that allows AI coding agents like Cursor or Claude Code to interface with external SaaS platforms and data sources programmatically.
- **Claude Code**: Anthropic's terminal-based agentic coding tool, used both for software development and, increasingly, general-purpose task automation.
- **Cursor**: An AI-powered code editor (IDE) that can operate agentically across multiple data sources via MCP connectors.
- **Innovator's Dilemma (in this context)**: The structural conflict incumbents (e.g., Google) face when a new technology (AI agents) threatens their core revenue model (advertising clicks), limiting how aggressively they can adopt it.
- **Agentic AI**: AI systems that autonomously take multi-step actions — browsing, writing files, querying APIs — to accomplish goals rather than simply generating a single output.
- **ARR (Annual Recurring Revenue)**: A SaaS metric representing annualized subscription revenue; used here to track Lovable's growth ($17M → $75M).
- **V0 by Vercel**: An AI-powered UI design and generation tool used as part of modern vibe coding stacks.
- **Replit / Bolt**: Cloud-based vibe coding platforms popular for rapid app prototyping and deployment.

---

## Summary

The episode argues that vibe coding has crossed a decisive threshold in 2025: it is no longer a curiosity or a prototyping trick but a broadly adopted, highly satisfying practice reshaping who can build software and what software gets built. Survey data showing 88% satisfaction and 75% tool adoption among a technically savvy audience signals a permanent structural shift. The use cases have expanded from throwaway prototypes to production consumer apps, niche scientific tooling, personal micro-apps serving tens of thousands of users, and agentic business automation that blurs the line between coding, workflow, and computing itself. Supporting this trend at the infrastructure level, Lovable's unicorn raise and Claude Code's runaway growth (despite its usage limit stumbles) confirm that demand is outpacing supply. The host's central message is that vibe coding represents the early stages of a fundamentally different computing paradigm — one where anyone who can articulate a goal can build software to achieve it — and that this shift is still accelerating.
