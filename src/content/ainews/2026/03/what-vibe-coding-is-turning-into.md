---
title: 'What Vibe Coding is Turning Into '
description: >-
  This episode of the AI Daily Brief (dated March 12, 2026) examines how the
  concept of "vibe coding" — using plain-language prompts to build software —
  has evolved dramatically in the 13 months since the term was coined. The
  episode covers two majo...
pubDate: 2026-03-12T00:00:00.000Z
type: episode
tags:
  - ai-daily-brief-podcast
url: 'https://www.patreon.com/posts/152895278'
draft: false
---
# What Vibe Coding Is Turning Into

## Overview
This episode of the **AI Daily Brief** (dated March 12, 2026) examines how the concept of "vibe coding" — using plain-language prompts to build software — has evolved dramatically in the 13 months since the term was coined. The episode covers two major product announcements (Perplexity Computer for Enterprise and Replit Agent 4) as its central case studies, and argues these products signal where AI-assisted building is heading: beyond coding, into a broader paradigm of AI-orchestrated knowledge work. The speaker is the unnamed host of the AI Daily Brief podcast and video channel.

**Source video:** URL not provided.

---

## Prerequisites
- Basic familiarity with the concept of **vibe coding** (using natural language to instruct AI to write code)
- General understanding of **AI agents** and **agentic systems** (AI that can plan and execute multi-step tasks)
- Awareness of tools such as Cursor, Replit, OpenAI's ChatGPT, and Anthropic's Claude
- Familiarity with common enterprise software concepts (Slack integrations, productivity suites, seat-based vs. usage-based pricing)
- Some exposure to **multi-agent orchestration** concepts (agents spawning sub-agents)
- Basic knowledge of **MCP (Model Context Protocol)** and **API/CLI** concepts is helpful for the headlines section

---

## Main Points

### Headlines: AI Agents Get Virtual Credit Cards
- Both **Ramp** and **Stripe** are launching virtual payment cards designed specifically for AI agents, accessible via API, MCP, and CLI.
- Cards feature programmable spend limits, merchant category controls, and real-time transaction visibility and risk scoring.
- Neither company opted for new agent-focused payment protocols (e.g., X402 or AP2); instead they chose to plug into existing human-designed payment rails, which agents are now capable enough to use directly.
- This signals growing agent capability and the practical need to both enable and safely constrain autonomous agent spending.

### Headlines: Anthropic Surging in Business Adoption (Ramp AI Index)
- Overall AI adoption among Ramp customers has reached **47.6%** — nearly half of businesses have at least one AI subscription.
- **Anthropic** is the only company seeing *accelerating* growth, now at **24.4%** of Ramp customers; OpenAI is at **34.4%** and declining.
- Most notably, Anthropic now wins **70% of first-time AI business spend** head-to-head against OpenAI — a complete reversal from 2025 trends.
- Caveat: this data is from one provider and may undercount enterprise customers purchasing via purchase order.

### Headlines: OpenAI Reintegrates Sora into ChatGPT
- The standalone Sora app launched in September garnered initial downloads but usage waned; only a small percentage of users shared videos publicly.
- Recent Sensor Tower data showed Sora surpassing **3 million daily active users** — a partial counter-narrative to the "Sora is dead" framing.
- OpenAI is nonetheless refocusing on **ChatGPT as the core experience**, with a target of **1 billion weekly active users**, and Sora will be folded back in.
- Increased competition from **Google Gemini**, which includes video generation in its core app, is a contributing factor.

### Headlines: Elon Musk's MacroHard / Digital Optimus Project
- Tesla and xAI are collaborating on a project called **MacroHard** (also referred to as Digital Optimus), framed as a computer-use AI system.
- Architecture: **Grok** acts as System 2 (deliberate reasoning/navigation), while **Digital Optimus** acts as System 1 (instinctive, real-time screen interaction).
- The system is designed to run on Tesla's low-cost **AI4 silicon** rather than NVIDIA hardware.
- Behind-the-scenes reporting from Business Insider indicates the project has faced roadblocks: two project leads departed, and a large data annotation effort was paused for architectural changes.

### Headlines: Ben Affleck's AI Startup Interpositive Acquired by Netflix (~$600M)
- **Interpositive** built custom-trained models for individual film productions, focused on post-production tasks: adjusting lighting, reframing shots, replacing backgrounds — *not* generating new scenes.
- The technology keeps creative control with human filmmakers, positioning AI as a cost-cutting post-production tool rather than a creative replacement.
- The deal, reportedly up to **$600 million**, would be among the largest Netflix has ever done; Affleck joins as an advisor.
- Already in use by director **David Fincher** on an upcoming film.

### Headlines: Lovable's Revenue Surge
- Lovable added **$100 million in annualized revenue in a single month** — ARR jumped from $300M to $400M in February alone.
- Combined with **Cursor doubling ARR to $2 billion** over three months, the vibe coding / AI dev tools market is in a clear "rising tide" moment.
- Lovable's new brand campaign notably omits the words "AI" or "vibe coding," instead framing the product as collapsing the space between an idea and something real.

---

### Main Topic: Perplexity Computer for Enterprise
- **Perplexity Computer** (announced late February) is positioned as an "AI everything machine" — moving beyond chat or single agentic tasks to **complex, long-running workflows** (hours or even months).
- Users describe a *goal or outcome*; the system breaks it into tasks and subtasks and spins up agents and sub-agents to execute them.
- **Computer for Enterprise** (announced this week) extends this to businesses: 400+ integrated enterprise applications, with a featured **Slack integration** so employees can interact from within their existing workspace.
- Pricing uses a **usage-based model** rather than per-seat, on the rationale that workload costs vary dramatically by task type (e.g., video generation vs. text memo).
- Perplexity revealed Computer was originally built as an **internal Slack bot** — described by their head of business as "the single biggest productivity unlock in our entire history."
- **Perplexity Personal Computer** was also announced: an always-on, locally running system on a **Mac Mini** connected to personal files, apps, and sessions — explicitly analogous to what the host calls the "OpenClawification" (persistent computer-use agents) trend.

### Main Topic: Replit Agent 4
- Paul Graham confirmed Replit Agent 4 represents "a real paradigm shift," saying it "generalizes the idea of vibe coding beyond what people usually think of as coding."
- Agent 4 expands the **types of outputs** that can be built (not just websites and web apps, but slides, videos, and other digital artifacts) and changes the **interaction surface**:
  - An **extensible canvas** combining design tools (Photoshop-like), natural language annotation, and the ability to edit specific parts of a generated artifact rather than the whole thing.
  - **Parallel execution**: multiple changes (e.g., update fonts, build a new feature, change copy) can be issued simultaneously and executed in parallel rather than sequentially.
  - **Multiplayer mode**: multiple human collaborators can work on the same file simultaneously, alongside agents.
- Latent Space summarized: Replit has gone "up the stack" from a coding platform to "a fully integrated productivity suite with a canvas, apps, sites, slides, videos, and others."
- The underlying logic: now that coding agents have "approximately solved" coding, the same builders are expanding their scope to more and more knowledge work tasks.

---

### Synthesis: Themes of Where Vibe Coding Is Heading
The host identifies five key themes emerging from these announcements:

1. **Blended user experiences**: No longer chat-only or traditional input; instead, extensible canvases that combine chat, design tools, annotations, and direct manipulation simultaneously.
2. **Persistent context**: Giving agents ongoing access to your systems and files (the "OpenClawification" of everything) solves memory and continuity problems that previously limited agents.
3. **Multi-agent systems**: Modern products are not single agents — they are orchestrated *teams* of agents spun up dynamically to accomplish complex goals.
4. **Multiplayer / team-integrated agent use**: Moving from siloed individual agent use (one person, one chat) to agents embedded in team workflows (Slack, shared canvases, collaborative sessions).
5. **The Mac Mini as an accidental AI strategy**: Apple's Mac Mini has become the default hardware substrate for locally-run persistent computer-use agents — an unintentional but significant AI play.

### Meta-Observation: The New Nature of Pivots
- The speed of change is redefining what a "pivot" means for startups and companies.
- Traditionally, pivots were a path to product-market fit; increasingly, **continuous nimble evolution** is simply what running a successful company looks like.
- Perplexity's example: written off two months ago, now exciting again — not from incremental improvement of search, but from willingness to fundamentally redefine what they are building.

### Andrej Karpathy's Framing: "We Need a Bigger IDE"
- Karpathy pushed back on the narrative that the IDE era (Cursor, etc.) is over.
- His view: "We're going to need a bigger IDE. It just looks very different because humans now move upwards and program at a higher level. The basic unit of interest is not one file, but one agent. It's still programming."
- The host uses this to note that Perplexity Computer and Replit Agent 4 are **glimpses** of the right form factors for agentic interaction — not final answers.

---

## Key Concepts

- **Vibe coding**: The practice of describing desired software or digital outputs in plain English and having an AI system generate and iterate on them, without the user writing code directly.
- **Agentic system**: An AI that can autonomously plan, break down goals into tasks, and execute those tasks — potentially over extended time periods — rather than just responding to single prompts.
- **Multi-agent orchestration**: An architecture in which a primary agent spawns and coordinates multiple sub-agents, each handling specific subtasks in parallel or in sequence.
- **Persistent context / computer use**: Giving an AI agent continuous, ongoing access to a user's local files, applications, and system state, enabling it to act more like an always-on assistant than a one-shot query responder.
- **OpenClawification**: The host's term for the trend of companies racing to build highly capable agents with persistent access to users' real systems — named by analogy to Anthropic's Claude ("Claw") computer-use features.
- **Perplexity Computer**: Perplexity's agentic platform that executes multi-step workflows using multiple AI models, targeting both enterprise (via Slack and 400+ integrations) and personal (via Mac Mini) use cases.
- **Replit Agent 4**: Replit's fourth-generation agentic builder that expands vibe coding beyond code into a broad digital creation canvas, supporting parallel tasks, design tools, and multiplayer collaboration.
- **Usage-based pricing**: A billing model where customers pay based on the volume and type of work consumed, as opposed to a flat per-seat subscription fee.
- **MCP (Model Context Protocol)**: A protocol enabling AI agents to connect to and interact with external services and tools programmatically.
- **Interpositive**: Ben Affleck's AI startup acquired by Netflix, which built custom-trained models for film post-production (lighting, reframing, background replacement) without generating new scenes.
- **MacroHard / Digital Optimus**: A joint Tesla–xAI computer-use AI project combining Grok (System 2 reasoning) with a real-time screen-interaction agent (System 1 execution), designed to run on Tesla's AI4 silicon.
- **System 1 / System 2 thinking**: A psychological framework (from Daniel Kahneman) distinguishing fast, instinctive processing (System 1) from slow, deliberate reasoning (System 2); Musk applied this to describe the Digital Optimus / Grok architecture.

---

## Summary

The host argues that vibe coding — which began as a way to describe simple plain-language software generation — has matured into something far more expansive: an emerging paradigm of AI-orchestrated knowledge work. Using Perplexity Computer for Enterprise and Replit Agent 4 as central evidence, the episode identifies five converging trends — blended canvas interfaces, persistent agent context, multi-agent architectures, multiplayer team integration, and locally-run always-on agents — as the structural direction the field is heading. These developments are happening alongside a broader commercial shift, where Anthropic is overtaking OpenAI in new business adoption, AI dev-tool companies like Cursor and Lovable are experiencing explosive revenue growth, and the very concept of what an "agent" can do (including autonomously spending money via virtual credit cards) continues to expand. The host closes by emphasizing that despite these advances, the right form factors for agentic interaction remain genuinely unknown — echoing Andrej Karpathy's view that we don't need to abandon the IDE paradigm, we simply need a much larger one — and that the speed of change is making continuous organizational reinvention not just desirable but necessary for survival.
