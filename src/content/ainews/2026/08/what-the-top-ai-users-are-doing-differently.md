---
title: What the Top AI Users Are Doing Differently
description: >-
  This episode of The AI Daily Brief (dated 2026-08-25) examines a growing
  performance gap between advanced and average AI users in enterprise settings,
  drawing primarily on OpenAI's research publication "Enterprise Signals: What
  Frontier Firms Are ...
pubDate: 2026-08-25T00:00:00.000Z
type: episode
tags:
  - ai-daily-brief-podcast
url: 'https://www.patreon.com/posts/167676311'
draft: false
---
# What the Top AI Users Are Doing Differently

## Overview

This episode of **The AI Daily Brief** (dated 2026-08-25) examines a growing performance gap between advanced and average AI users in enterprise settings, drawing primarily on OpenAI's research publication "Enterprise Signals: What Frontier Firms Are Doing Differently." The central thesis is that the adoption of agentic AI — rather than conversational or chat-based AI — is the primary driver of this divergence, and that the gap is compounding over time. The speaker is the host of the AI Daily Brief podcast/video channel, affiliated with the company Superintelligent.

**Source video:** URL not provided.

---

## Prerequisites

- Basic familiarity with large language models (LLMs) and ChatGPT-style interfaces
- Understanding of the distinction between **chat/assistant AI** and **agentic AI** (AI that takes actions, executes tasks, and interacts with external systems)
- General awareness of enterprise software and knowledge work contexts
- Familiarity with token-based pricing and API usage metrics
- Some knowledge of current AI products: OpenAI's Codex, GPT-5.x model series, Cursor, and the broader competitive AI landscape

---

## Main Points

### 1. The Growing Gap Between Frontier and Average AI Users

- OpenAI research shows the usage gap between the most advanced enterprise AI users ("frontier firms") and average users grew from **2.6x in January 2026 to 8.3x by the end of June 2026**.
- Over the same ~18-month window, average firms roughly doubled their token usage, while frontier firms increased theirs **17x**.
- OpenAI defines "frontier firms" as those in the **top 10% of output tokens per active user per month**; "average firms" sit between the 45th and 55th percentile.
- The primary driver of this divergence is **agentic AI adoption**, not model choice — it is about how firms deploy models, not which models they use.

### 2. The Shift from Chat to Agentic Token Consumption

- A year prior (August 2025), virtually **100% of enterprise output tokens** came from ChatGPT-style chat interactions; agentic tokens were negligible.
- By **February 2026** (when the Codex macOS app launched), the split was **87% chat / 13% agentic**.
- By **late April 2026**, a "flippening" occurred: **53% agentic / 47% chat**.
- By **June 2026**, the ratio reached **64% agentic / 36% chat** among enterprise output tokens.
- This metric reflects the *volume of work* being done, not the frequency of individual interactions.

### 3. Non-Technical Knowledge Workers Are Adopting Agents Fastest

- Indexed to February 2026, growth in Codex usage across job functions shows non-technical roles growing far faster than engineering roles (which grew ~5x):
  - Finance and accounting: **20x**
  - Marketing and communications: **26x**
  - People/recruiting and sales/account management: **41x**
  - **Legal: 108x**
- The analogy offered: "LLMs are for lawyers what spreadsheets were for accountants."
- OpenAI attributes the initial slower adoption in knowledge work to tasks having limited context, being hard to specify, and lacking clear verification criteria — barriers now being reduced by model scaling and reinforcement learning improvements.

### 4. Frontier Firms Use More Tools: Plugins and Skills

- At **typical firms**: ~9% of weekly active users use plugins; ~3% use skills.
- At **frontier firms** (top 10%): ~21% use plugins; ~19% use skills.
- At **OpenAI itself**: 95% of employees use plugins; 93% use skills — indicating the ceiling is far above current frontier firm levels.
- Skills are reusable instruction sets for common workflows; plugins connect agents to external applications and data.

### 5. The Use Case Ladder: From Generation to Maintenance

The speaker proposes a four-rung ladder of AI use case sophistication:

1. **Generation** — Drafting emails, reports, formulas (e.g., basic ChatGPT prompts)
2. **Synthesis** — Combining disparate data sources into unified outputs
3. **Execution** — AI actively interacting with and operating within existing systems
4. **Maintenance** — Agents maintaining systems or workflows over time, not just completing one-off tasks

- **Chat usage** is dominated by writing (~57% in legal) and knowledge retrieval (~20%), with minimal systems integration.
- **Agentic usage** in the same legal context shifts dramatically: coding/app building (32.9%), system operations (17.7%), workflow automation (7.7%), classification and extraction (4.6%), with writing dropping to 16.2%.
- This pattern is consistent across other departments — agentic work moves from individual output to **systems-level impact**.

### 6. Institutional and Individual Inertia as the Primary Barrier

- Sam Altman acknowledged he was wrong about the speed of AI-driven job disruption, citing the economy's inertia — people keep using familiar tools, vendors, and workflows.
- He also acknowledged this inertia operates on an individual level: even knowing better tools exist, he still defaults to old computer habits (manual email triage, copy-pasting between apps, maintaining to-do lists manually).
- The speaker frames this as **intellectual mind-muscle memory** — the cognitive cost of rebuilding habits appears high even when the old approach is acknowledged as inferior.
- The implication: breaking this inertia deliberately is what separates frontier users from average users.

### 7. The Next Frontier: Multiplayer and Cross-Team Agents

- Most current agentic deployments, even among frontier firms, still operate within **individual silos**.
- The speaker predicts the next major wave of productivity gains will come from agents operating **across team boundaries** — coordinating between legal, finance, sales, etc. — rather than optimizing within a single function.
- This is described as moving from "individual AI" to **"multiplayer and team AI."**

### 8. Headlines: Industry Context (AI Daily Brief News Segment)

- **Meta** is finalizing a consumer agent product (internally called "Hatch"), potentially priced at $200/month for high-usage subscribers, with a WhatsApp platform for third-party agent coordination.
- Meta's larger model **"Watermelon"** is targeting an October launch; as of July it matched GPT-5.5 on internal benchmarks, though the frontier has since advanced.
- **Grokbot** (Cursor + xAI integration) dropped from confusing ~$500/month pricing to being included in the **$60/month Cursor Pro** and **$100/month Super Grok** subscriptions.
- **OpenAI** cut GPT-5.6 Sol API prices to $4/million input tokens and $20/million output tokens (down from $5 and $30), interpreted as a response to enterprise customers building more sophisticated multi-model stacks rather than purely competitive pressure on Anthropic.
- **Hugging Face** is reportedly in acquisition discussions at a $13 billion valuation, now generating $150M+ in annualized revenue (up 50% in two months); 97% of users access it for free.
- **NVIDIA** has been aggressively investing across the AI ecosystem (Poolside, Mercor, Perplexity, neoclouds), with $42.3B invested in private companies as of March earnings, leading some to describe Jensen Huang as building a role analogous to a "central bank of compute."
- **Taiwan** indicted nine people, including one NVIDIA distribution manager and two Supermicro employees, for smuggling ~74 Blackwell 300 servers (containing Blackwell chips) to China.
- **Microsoft** internal self-reported data showed highly uneven AI usage: monthly AI spend ranged from $1 to $28,000 across departments, with median usage clustered between $150–$975/month depending on division.

---

## Key Concepts

- **Frontier firms**: OpenAI's term for enterprises in the top 10% of output tokens per active user per month — the most advanced AI-deploying organizations.
- **Agentic AI**: AI systems that autonomously execute multi-step tasks, interact with external tools and systems, and complete complex workflows with minimal per-step human instruction.
- **Output tokens as a proxy for work volume**: Using the total tokens generated (rather than number of interactions) to measure the *amount* of work AI is performing for an enterprise.
- **Plugins**: Capability modules that connect AI agents to external applications or data sources.
- **Skills**: Reusable instruction templates within an AI system that help agents handle recurring workflows consistently.
- **The "flippening"**: The point (approximately April 2026) at which agentic output tokens surpassed chat output tokens in enterprise OpenAI usage.
- **Use case ladder**: A conceptual framework organizing AI task types by sophistication — generation → synthesis → execution → maintenance.
- **Mind-muscle memory**: The speaker's term for the habitual cognitive patterns that cause individuals to default to familiar workflows even when better alternatives are available.
- **Codex**: OpenAI's agentic coding and task-execution product, used here as the primary instrument for measuring enterprise agentic adoption.
- **GrokBot / Cursor integration**: A high-capability agentic coding and workflow product combining Cursor IDE with xAI's Grok model, recently made accessible at lower price points.
- **Watermelon**: Meta's codename for a large upcoming model targeting frontier parity, planned for October 2026 launch.
- **Hatch**: Meta's internal codename for a forthcoming consumer AI agent product.

---

## Summary

The central message of this episode is that a significant and accelerating performance gap has opened between enterprises that have moved aggressively into agentic AI and those still primarily using AI in a conversational, chat-based mode. Drawing on OpenAI's "Enterprise Signals" research, the speaker demonstrates that frontier firms — the top 10% of enterprise AI users — now generate 8.3 times more output tokens per active user than average firms, up from just 2.6x six months earlier, and that nearly two-thirds of enterprise AI output tokens are now agentic rather than chat-based. Crucially, the fastest growth in agentic adoption is occurring among non-technical knowledge workers — legal, finance, marketing, and sales — where agents are shifting work from one-off writing and retrieval tasks toward systems-level execution, workflow automation, and continuous maintenance. The speaker argues that this compounding advantage will continue to widen unless average firms deliberately overcome the institutional and individual inertia that keeps workers anchored to familiar patterns, and that the next major unlock will come from agents that operate not just within individual workflows but across team and departmental boundaries.
