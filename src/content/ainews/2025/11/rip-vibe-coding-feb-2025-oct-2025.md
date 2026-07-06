---
title: RIP Vibe Coding. Feb 2025-Oct 2025.
description: >-
  This talk is a conversation between Nathaniel Whittemore (host of The AI Daily
  Brief) and Sean Wang ("Swyx") — developer tools veteran, organizer of the AI
  Engineer Summit and AI Engineer World's Fair, and newly joined
  advisor/contributor at Cogni...
pubDate: 2025-11-03T00:00:00.000Z
type: episode
tags:
  - ai-daily-brief-podcast
url: 'https://www.patreon.com/posts/142727537'
draft: false
---
# RIP Vibe Coding (Feb 2025 – Oct 2025): AI Engineering in Transition

## Overview

This talk is a conversation between **Nathaniel Whittemore** (host of *The AI Daily Brief*) and **Sean Wang ("Swyx")** — developer tools veteran, organizer of the AI Engineer Summit and AI Engineer World's Fair, and newly joined advisor/contributor at **Cognition** (the AI coding agent company behind Devin). The discussion centers on the state of AI-assisted coding in late 2025: why "vibe coding" as a concept has peaked, what tensions it has surfaced within the engineering community, and what frameworks — sync/async spectrum, context engineering, agent labs vs. model labs — are shaping the next phase of AI development tooling. The conversation also previews the **AI Engineer Code Summit** (New York, November 2025).

*Source video URL: not available (internal/podcast recording)*

---

## Prerequisites

- Familiarity with large language models (LLMs) and their use in software development
- Basic understanding of AI coding tools: GitHub Copilot, Cursor, Claude Code, Lovable, Bolt, Devin/Cognition
- Awareness of the concept of "vibe coding" (coined by Andrej Karpathy, February 2025)
- General knowledge of software development workflows: IDEs, pull requests, CI/CD, terminal-based tools
- Familiarity with AI agent concepts (background agents, async tasks, agentic loops)
- Understanding of the distinction between foundation/model labs (OpenAI, Anthropic, Meta) and application-layer companies

---

## Main Points

### 1. The AI Engineer Code Summit and the Shift Toward Focused Events

- Swyx has organized AI Engineer Summits for three years; previous events were generalist, covering the broad state of AI.
- The 2025 edition is the first summit focused **entirely on AI coding**, reflecting how coding has become the dominant AI theme of the year.
- The event includes both enterprise leadership tracks and individual contributor (IC) engineering tracks.
- Claude Code, which launched in March 2025, grew to a >$600M business within months; Cursor and Cognition have reached valuations rivaling model labs.
- Swyx notes that no end-of-2024 prediction piece called "AI coding" as the defining theme of 2025 — it emerged faster than anyone anticipated.

---

### 2. The Declared End of "Vibe Coding" as a Cool Concept

- Swyx explicitly declares October 2025 the end of vibe coding's cultural moment, summarized in the tweet "RIP Vibe Coding, Feb 2025 – Oct 2025."
- The term originally captured the idea of non-technical users generating working software through natural language alone, without understanding the underlying code.
- **Two distinct friction points have emerged:**
  - **Non-technical → technical handoff problem:** Non-technical builders use entirely different stacks (e.g., Lovable, Bolt) than professional engineers. When work needs to scale or be handed off, it often has to be rebuilt entirely. Supabase is cited as one of the few crossover technologies thriving in both worlds.
  - **Intra-engineer sloppiness problem:** Even professional engineers using AI coding tools are sometimes being careless — leaving behind insecure code, poor architecture, PRs others have to clean up, and getting stuck in LLM "rabbit holes" that require code understanding to escape.
- The proposed successor concept gaining traction is **spec-driven development** — writing formal specifications or "model alignment specs" before coding — championed by Amazon and Sean Grove (OpenAI) at prior summits.

---

### 3. The Sync/Async Spectrum of Coding Tools

- Swyx introduced the **sync/async spectrum** as a framework for categorizing AI coding interfaces:
  - **Synchronous (sync):** The developer is actively in the loop — IDE-based tools like Cursor, VS Code extensions, terminal tools like Claude Code. Best for deep, complex problems requiring human judgment.
  - **Asynchronous (async):** Background agents work independently on tasks while the developer context-switches — exemplified by Devin/Cognition, factory-style agents.
- Swyx acknowledges this framing may be evolving: async agents are getting **faster** (more sync-like), removing a perverse incentive where agents were measured by "hours worked" rather than outcomes.
- Cognition's acquisition of Windsurf (formerly valued at ~$3B, acquired for significantly less) is framed as securing a strong sync-side position (IDE) to complement async agent capabilities.
- The sync mode is reframed not as "vibe coding with less AI" but as **centaur-style human-AI collaboration** for the hardest engineering problems.
- All major platforms (Claude Code, Cursor, Cognition/Windsurf, Codex CLI) now offer multiple surface areas — IDE, web app, terminal, Slack/team tools — but **cross-platform context handoff** remains unsolved.

---

### 4. Context Engineering as a Dual-Layer Concept

- **Context engineering** is identified as one of the major themes of 2025 and heading into 2026.
- At the **technical layer:** How to design systems that give LLMs the right information — memory, retrieval, planning, tool access — to perform well on complex tasks.
- At the **organizational/leadership layer:** How companies structure their data, documentation, and workflows so AI systems can act on accurate, complete context. Analogous to prompt engineering but at an institutional scale.
- Whittemore predicts this organizational interpretation will give enterprises "license" to undertake difficult, unsexy data infrastructure projects they have been deferring.
- Swyx notes context engineering speaker Dex (one of the term's co-coiners) will speak at the summit.

---

### 5. The "Code AGI / 80-20" Thesis

- Swyx's central thesis from his Cognition joining post ("Devins and the Details"): **Code AGI will be achieved in ~20% of the time of full AGI and capture ~80% of AGI's value.**
- Key supporting arguments:
  - Code is a **verifiable domain** — outputs can be tested, run, and checked automatically, enabling faster iteration and better evals.
  - The people building coding models are also the primary consumers, creating a tight virtuous feedback loop.
  - Coding agents generalize: Claude Code is already being used for non-coding tasks because it has a flexible tool sandbox. Lessons from coding agents transfer directly to broader agentic systems.
  - Claude Code is described as a "new foundation for Claude itself" — Claude for Finance, Excel integrations, and other products are built on top of it.
- Swyx acknowledges the self-referential tension in the term "code AGI" (AGI is general, so a domain-specific version is technically a contradiction) but uses it as shorthand for value concentration vs. timeline analysis.

---

### 6. Agent Labs vs. Model Labs

- Swyx introduces the **agent labs** framework to distinguish companies building products/agents first from companies that build foundation models first.
- **Model labs** (OpenAI, Anthropic, Meta, etc.): Raise large capital, hire researchers, acquire GPUs, develop foundation models, release with limited public access. Applied engineers inside these organizations are lower status and less central to strategy.
- **Agent labs** (Cognition, Cursor, Harvey, Replit agents, etc.): Ship products to users first; build or fine-tune models in service of specific product outcomes. Examples:
  - Replit spent two years on AI products with limited traction, then built an agent and reached ~$300M revenue.
  - Cognition launched the 3GREP model/agent product rather than announcing a model in isolation.
- Swyx cites Sam Altman's live stream (recorded ~day before the conversation) as OpenAI clarifying it will be a **platform**, not primarily an application company — "you should make more money than us on our models" — as confirmation that swim lanes are now clearer.
- Anthropic is flagged as a partial exception: Claude Code functions as an agent lab embedded within a model lab.
- Implication for enterprises: If model companies commit to being platforms, enterprise procurement teams will need to engage a **longer tail of agent-layer vendors** rather than just dealing with two or three foundation model providers.

---

### 7. Organizational Change and ROI as Next-Year Themes

- Earlier in 2025, engineering departments were often the most resistant to AI adoption; that resistance has softened as tools matured.
- Knowledge sharing about what works organizationally is still poorly mapped; the summit's enterprise track aims to surface those learnings.
- Whittemore identifies **ROI and performance measurement** as the second dominant theme heading into 2026 — moving from "what can I demonstrate?" to "what is this actually delivering in time saved, cost saved, and new capabilities?"
- He is running a live ROI survey (250+ responses at time of recording) collecting use cases and subjective benefit ratings to bring data-driven findings to his summit talk.

---

## Key Concepts

- **Vibe coding:** A term coined by Andrej Karpathy (February 2025) describing the practice of building software entirely through natural language prompts, with the developer not reading or deeply understanding the generated code.
- **Spec-driven development (specification-driven development):** A methodology where detailed written specifications or "alignment specs" are authored before code is generated, to guide AI coding agents toward correct, maintainable outputs.
- **Sync/async spectrum:** A framework for categorizing AI coding tool interactions — synchronous tools keep the developer actively in the loop (IDEs, terminal); asynchronous tools run background agents on delegated tasks.
- **Context engineering:** The practice of structuring prompts, memory, retrieval systems, and organizational data so that AI systems receive the right information to perform a task accurately; used both as a technical systems design concept and as an organizational readiness concept.
- **Agent labs:** AI companies that prioritize shipping working products and agents to users first, building or adapting models in service of product goals, contrasted with model labs that prioritize foundation model research.
- **Model labs:** Organizations (e.g., OpenAI, Anthropic, Google DeepMind) whose primary output is foundation model research and infrastructure, with applications as secondary concerns.
- **Centaur model (human-AI collaboration):** A mode of working where human expertise and AI capability are combined for complex tasks, rather than the human delegating entirely to AI.
- **Claude Code Teleport:** An early mechanism by Anthropic allowing users to transfer the JSON state of a Claude Code chat session between web and local CLI instances to maintain context continuity.
- **80-20 / Code AGI thesis:** Swyx's argument that code-domain AI will reach general-purpose capability in a fraction of the time and capture a disproportionate share of the value of full AGI, due to the verifiability, feedback loops, and generalizability of coding as a domain.
- **AI Engineer Code Summit:** A focused conference (New York, November 2025) dedicated to AI coding tools, practices, and organizational adoption; organized by Swyx.

---

## Summary

Swyx and Whittemore argue that AI-assisted coding has been the defining AI story of 2025 — from Karpathy's "vibe coding" tweet in February to Claude Code's rapid growth, Cursor's rise, and the emergence of Cognition and other "agent labs" as billion-dollar companies — but that the cultural moment of vibe coding as an aspirational term has peaked. The core tension is not between technical and non-technical users per se, but between the surface-level productivity gains vibe coding offers and the deeper engineering problems — security, maintainability, architecture, context management — it defers or obscures. The community is actively working toward a successor paradigm, with spec-driven development and more deliberate human-in-the-loop workflows as leading candidates. Structurally, the industry is bifurcating between model labs that are committing to being infrastructure platforms and agent labs that are winning on product-market fit by shipping fast and iterating with users. Swyx's overarching thesis is that coding is the highest-leverage domain in which to pursue AI capability because it is verifiable, self-reinforcing, and generalizable — making "code AGI" both the nearest-term and highest-value milestone on the path to broader AI capability. Heading into 2026, context engineering and ROI measurement are the conversations that will define how organizations translate AI capability into durable business value.
