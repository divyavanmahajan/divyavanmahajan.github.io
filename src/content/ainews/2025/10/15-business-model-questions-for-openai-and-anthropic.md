---
title: '15 Business Model Questions for OpenAI and Anthropic  '
description: >-
  This episode of the AI Daily Brief examines the rapidly evolving revenue
  trajectories of OpenAI and Anthropic, and explores the strategic questions
  those numbers raise. The host (name not stated) uses newly reported revenue
  figures from both compa...
pubDate: 2025-10-17T00:00:00.000Z
type: episode
tags:
  - ai-daily-brief-podcast
url: 'https://www.patreon.com/posts/141456035'
draft: false
---
# Business Model Questions for OpenAI and Anthropic

## Overview

This episode of the *AI Daily Brief* examines the rapidly evolving revenue trajectories of OpenAI and Anthropic, and explores the strategic questions those numbers raise. The host (name not stated) uses newly reported revenue figures from both companies to interrogate their business model choices: enterprise vs. consumer focus, subscription pricing, advertising, acquisitions, and the feasibility of the growth projections needed to justify massive infrastructure spending. The episode also covers Claude's new Skills feature, Microsoft's Windows 11 AI update, Spotify's music-label AI deal, and other product news in a headlines segment.

**Source video:** Not publicly linked (AI Daily Brief podcast/video, published ~October 17, 2025)

---

## Prerequisites

- Basic familiarity with large language model (LLM) providers: OpenAI, Anthropic, Google (Gemini), xAI (Grok)
- Understanding of annualized revenue run rates and what they indicate about business trajectory
- General awareness of the AI infrastructure investment cycle (compute, data centers, NVIDIA/Oracle deals)
- Familiarity with concepts like API-based revenue, enterprise SaaS, and consumer subscription models
- Awareness of agentic AI systems and model context windows

---

## Main Points

### Claude Skills: A Potentially Significant Agent Architecture Feature

- Anthropic launched **Skills**, a feature that gives Claude agents access to modular "buckets" of context—markdown files with YAML metadata, optional documents, and executable scripts—covering things like brand guidelines or task-specific instructions.
- Skills are **token-efficient**: at the start of a session, Claude reads only short descriptions of available skills and loads full details only when a skill is relevant to the task.
- Skills work across **Claude Apps, Claude Code, and the API**, so they only need to be built once and are reusable.
- Users with no programming knowledge can create skills; Claude can also be prompted to **design, refine, or improve its own skills**, enabling collaborative agentic design.
- Skills are **stackable**—e.g., a quarterly investor deck workflow could simultaneously draw on brand guideline, financial reporting, and presentation formatting skills.
- Commentators (Daniel Meisler, Simon Willison) compared the significance of Skills to MCP, noting that the innovation is in **system design**, not model intelligence. Willison described the design as close to the spirit of LLMs: "throw in some text and let the model figure it out."
- The key UX distinction: rather than building step-by-step workflow schematics (à la n8n), users define modular pieces and let the LLM determine which to assemble for a given task.

### Microsoft's AI Push Across Windows 11

- Microsoft is integrating **Copilot** as a default feature for all Windows 11 users—not restricted to Copilot+ hardware.
- New capabilities include **Copilot Vision** (the AI sees the desktop), voice activation ("Hey Copilot"), and **Copilot Actions** (agentic task completion in a separate window with human oversight).
- Agentic features will tap into emails, calendars, Office suite data, and the local file system.
- The stated vision: rewrite the OS around AI, with voice becoming a third primary input mechanism alongside keyboard and mouse.
- The host notes Microsoft's competitive advantage lies in its **end-to-end distribution** across hundreds of millions of devices.

### Spotify and the Music Industry Reach an AI Agreement

- Spotify announced a collaboration with Sony, Universal, Warner, Merlin, and Believe to develop AI products that respect artists' rights and create new revenue streams.
- The agreement positions AI features as **opt-in for rights holders and artists**, not unilaterally imposed.
- Copyright advocacy leader Ed Newton Rex called it a positive step—licensing music for training rather than taking it without permission—while noting Spotify's broader platform policies on AI-generated music remain problematic (75 million AI tracks were purged in September 2025).

### Other Product Headlines

- **Manus v1.5**: 4x faster task completion, 15% quality improvement, 6% user satisfaction increase; new ability to build full-stack web apps end-to-end within Manus.
- **Lindy AI CMO**: An agentic "Chief Marketing Officer" that runs marketing workflows end-to-end, including market research, creative production, and ad experimentation, with integrations including Sora 2, VO 3.1, and GPT ImageGen.
- **Alibaba ROI**: Preliminary AI feature testing in e-commerce showed a **12% increase in return on advertising spend**; the company announced break-even on AI in its e-commerce business.

### Anthropic's Revenue Trajectory

- Anthropic's annualized revenue progression in 2025:
  - January: ~$1B
  - Summer: ~$5B
  - Current (October 2025): ~$7B run rate
  - Target by end of 2025: $9B
  - Projected end of 2026: $20B–$26B
- This represents roughly **9x growth in revenue relative to OpenAI's starting position** within approximately 10 months.
- **80% of Anthropic's revenue comes from enterprise**; they have over 300,000 business/enterprise customers, including large single deals such as Deloitte (hundreds of thousands of users from one company).

### OpenAI's Revenue and Burn Rate

- OpenAI began 2025 at ~$5.5B annualized revenue; now at approximately **$13B**.
- Revenue mix: ~70% consumer subscriptions, ~30% API.
- **800 million users**, of whom ~5% (40 million) are paying subscribers.
- **Burn rate: ~$20B annually**.
- Long-term projection: **$100 billion in annual revenue by 2028**, requiring growth historically unprecedented in speed and scale.
  - Only Google, among companies that reached $10B+ revenue in under three years, went on to exceed $100B.
  - No company has gone from $10B to $100B in under six years; OpenAI is projecting to do it in approximately three.

### Strategic Question 1: Should OpenAI Double Down on Enterprise?

- Anthropic's enterprise success—growing from roughly 1/20th of OpenAI's revenue to more than half in ~10 months—raises the question of whether OpenAI should allocate more resources to enterprise.
- OpenAI has taken some steps: a **forward-deployed engineering team** for customers spending $10M+; Altman and Brockman publicly acknowledged enterprise focus at Dev Day.
- Much of Anthropic's enterprise lead was built on **coding model superiority**, which GPT-5 was explicitly designed to address.
- The host frames coding as a likely "Trojan horse" for broader enterprise penetration.

### Strategic Question 2: Consumer Monetization and the Role of Advertising

- 760 million non-paying ChatGPT users represent a large untapped monetization opportunity; the host compares this to Spotify's 276 million paid subscribers.
- One hypothesis: as models become more demonstrably valuable, conversion rates will rise naturally.
- The host assesses that **OpenAI likely views advertising as partially inevitable** but does not want to be purely in the attention business.
- A more integrated, less disruptive variant—e.g., **"Checkout with ChatGPT"** and referral/discovery revenue—is framed as the probable template rather than traditional display advertising.
- Subscription pricing ($20/month consumer, $30/month enterprise, $200/month premium) was largely arbitrary at launch; the host suggests there is room for **price discovery and experimentation**.

### Strategic Question 3: Model Tiers, Efficiency, and Agentic Economics

- The host expects that a growing share of high-value enterprise use cases will become viable on **cheaper, more efficient models** (e.g., Claude Haiku 4.5) rather than requiring state-of-the-art models.
- Agentic systems will increasingly **route tasks to appropriately priced models**, optimizing cost; Claude Skills is cited as an early example (lightweight model identifies which skills to load; heavier compute only engaged when needed).
- Enterprise is bullish regardless of consumer trajectory because **agentic workflows across business processes represent enormous aggregate token consumption**.

### Strategic Question 4: Vertical Products and Acquisitions

- The host raises whether foundation model companies (OpenAI, Anthropic) will **siphon revenue from vertical AI apps** or whether both can coexist.
- Anthropic has signaled readiness for **more acquisitions**, focusing currently on technical targets rather than product acquisitions—though this could shift.
- Several AI companies are approaching $1B in vertical-app revenue; whether foundation models consolidate this market is an open question.

### The Core Macro Question: What Is "Sufficient" Growth?

- The host frames the AI bubble question as contingent on whether revenue growth keeps pace with investor expectations—a **moving target** tied to market confidence rather than a fixed threshold.
- The unprecedented nature of the required growth (faster than any historical precedent) means standard benchmarks do not apply.
- Key monitoring signal: compare actual reported growth numbers against whatever the market has defined as "sufficient" at any given moment.

---

## Key Concepts

- **Annualized Revenue Run Rate**: A projection of annual revenue based on current performance, used here to track the rapid growth of Anthropic and OpenAI.
- **Claude Skills**: Anthropic's modular agent context system—markdown files with metadata and optional scripts that Claude agents load on demand to perform specific tasks.
- **Token Efficiency**: Minimizing the number of tokens consumed in an LLM interaction; Skills achieve this by loading only skill descriptions initially and full content only when needed.
- **Enterprise vs. Consumer Revenue Mix**: The proportion of revenue derived from business/API customers versus individual subscriber-paying users; Anthropic is ~80% enterprise, OpenAI ~70% consumer.
- **Forward-Deployed Engineers**: OpenAI staff embedded with large enterprise clients ($10M+ spend) to help build and implement AI solutions.
- **Agentic Scaffolding**: The surrounding system architecture that enables an AI model to take sequences of actions, use tools, and complete multi-step tasks autonomously.
- **MCP (Model Context Protocol)**: Anthropic's earlier protocol for standardizing how models interact with external tools and data; cited as a comparator for the significance of Skills.
- **Vibe Coding**: Informal term for directing an AI agent to build software through natural language instructions rather than explicit code authorship.
- **AI PC**: Microsoft's concept of a personal computer whose operating system is rebuilt around AI-native features, including voice input and agentic task execution.
- **Sufficient Growth**: The host's term for the level of revenue growth needed to maintain investor confidence in AI infrastructure spending—a subjective, market-defined threshold.

---

## Summary

The episode uses newly reported revenue figures—Anthropic growing from $1B to a $7B run rate in under a year, OpenAI reaching $13B with a $100B target by 2028—to frame a set of interconnected strategic questions about how the leading AI companies will sustain and extend their growth. Anthropic's dominance in enterprise (80% of revenue, 9x relative growth versus OpenAI) prompts the question of whether OpenAI needs to rebalance toward enterprise, particularly through coding-model leadership as a foothold. Simultaneously, OpenAI's 800 million users—of whom only 5% pay—represent a large untapped consumer monetization opportunity, likely to be addressed through a combination of increased model value, subscription price experimentation, and integrated (rather than intrusive) advertising models such as referral and checkout features. On the cost side, the host anticipates that cheaper, efficient models and intelligent agentic routing will make enterprise AI economically viable at scale. The overarching macro question is whether any company can realistically achieve the growth trajectory OpenAI has projected—historically unprecedented even among the fastest-growing companies ever—and the host suggests the key signal to watch is whether reported growth numbers continue to meet the market's perpetually shifting definition of "sufficient."
