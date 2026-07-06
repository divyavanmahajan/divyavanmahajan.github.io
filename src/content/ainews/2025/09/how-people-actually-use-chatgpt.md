---
title: How People Actually Use ChatGPT
description: >-
  This episode of the AI Daily Brief (published 2025-09-18) examines two major
  research reports on how people actually use large language models (LLMs): a
  large-scale consumer study jointly produced by OpenAI's economic research
  team, the National B...
pubDate: 2025-09-18T00:00:00.000Z
type: episode
tags:
  - ai-daily-brief-podcast
url: 'https://www.patreon.com/posts/139148376'
draft: false
---
# How People Actually Use ChatGPT — Study Document

## Overview

This episode of the *AI Daily Brief* (published 2025-09-18) examines two major research reports on how people actually use large language models (LLMs): a large-scale consumer study jointly produced by **OpenAI's economic research team**, the **National Bureau of Economic Research (NBER)**, and **Harvard economist David Deming**, as well as **Anthropic's third edition of its Economic Index Report**. The episode also covers several headline news items: Google's new agentic payments protocol (AP2), YouTube's AI creator tools, Microsoft GitHub Copilot's model preferences, and OpenAI's new teen safety guardrails.

The central argument is that these studies move beyond anecdote to provide empirical evidence of who uses AI, what they use it for, and how those patterns are shifting — with significant implications for product development, startups, and the future of work.

> **Source video URL:** Not provided (transcript only)

---

## Prerequisites

- Basic familiarity with large language models (LLMs) and consumer AI assistants (ChatGPT, Claude)
- General understanding of AI agent concepts (what agents do, how they differ from chatbots)
- Awareness of the AI startup/product landscape and the distinction between consumer and enterprise AI use
- Familiarity with terms like API usage, reasoning models, and multimodal AI
- Optional: knowledge of the MCP (Model Context Protocol) and A2A (Agent-to-Agent) standards for context on the AP2 protocol

---

## Main Points

### 1. Google's Agentic Payments Protocol (AP2)

- Google announced **AP2 (Agent's Payment Protocol)**, described as an open protocol for securely initiating and transacting agent-led payments across platforms.
- Supported by over **60 partners** including American Express, MasterCard, PayPal, Coinbase, Revolut, and UnionPay — a broad global consortium.
- AP2 is explicitly designed as an **extension of MCP and A2A**, addressing three problems agentic shopping creates: **authorization, authenticity, and accountability**.
- Transactions are codified as cryptographically signed **"mandates"** (tamper-proof digital contracts), which can represent user intent or be fully pre-delegated to agents.
- Supports complex transaction logic (e.g., buy a jacket in a different color for up to 20% more; book a round-trip and hotel within a $700 total budget).
- Enables **agent-to-agent commerce**, such as a merchant agent automatically bundling upsell offers in response to a buyer agent's intent.
- Includes a stablecoin/crypto integration layer.
- The protocol is **fully open source** and available on GitHub.
- The host's view: if adopted, AP2 could make agentic commerce use cases ubiquitous by end of 2026.

---

### 2. YouTube's New AI Creator Tools

- YouTube announced a suite of AI features at its **Made on YouTube** event, including **VO3 video model integration** for short clip generation.
- AI editing tools include: applying motion templates to still images, style overlays (pop art, origami), and adding characters/props via text prompts.
- The **"Edit with AI"** feature can generate a workable first draft (short-form video) from raw footage, including music and voiceover — a semi-automated short-form content pipeline.
- Podcasters will soon be able to generate YouTube Shorts and clips from long-form audio, including AI-generated video to accompany audio-only content.
- The host emphasised that **native distribution-platform tools** remove friction for creators who lack separate production skill sets.

---

### 3. Microsoft GitHub Copilot Favors Claude Sonnet 4

- Microsoft introduced an **automatic model selector** in GitHub Copilot that chooses among Claude Sonnet 4, GPT-5, GPT-5 Mini, and others.
- For paid users, Microsoft plans to **primarily rely on Claude Sonnet 4**.
- Per *The Verge*, Microsoft has internally been directing its own developers to use Claude Sonnet 4 for months.
- The host declined to frame this as the Microsoft–OpenAI relationship fraying, accepting it as a practical model capability preference.

---

### 4. OpenAI ChatGPT Personalization Update and "Orders" Easter Egg

- OpenAI consolidated personality configuration, custom instructions, and memories into a single personalization page.
- An AI engineer spotted a hidden **"Orders" tab** in the interface, suggesting agentic shopping or integration management features may be coming.

---

### 5. OpenAI Teen Safety Guardrails

- ChatGPT will now **refuse to engage in sexual topics or self-harm conversations** with underage users.
- The chatbot can now **contact parents or police** in certain circumstances.
- New **parental controls** allow parents to set blackout hours.
- Changes followed a Senate hearing entitled *"Examining the Harm of AI Chatbots"*, attended by parents of teenage victims but no AI lab representatives.
- Sam Altman personally authored the announcement blog post; OpenAI acknowledged a privacy trade-off but judged it worthwhile.

---

### 6. OpenAI/NBER/Harvard Consumer Usage Study — High-Level Findings

- Sampled **1.5 million conversations** in a privacy-preserving manner; described as the most comprehensive study of consumer AI use ever released. **Enterprise data was excluded.**
- ChatGPT's growth has been extraordinary: it reached 100 million weekly active users in under a year, with an even steeper inflection after the release of reasoning models.
- **Gender gap closed**: In January 2024, 37% of identifiable users had typically feminine names; by July 2025, that figure was 52%.
- **Global adoption**: ChatGPT reached 90% of usage from outside North America in under 3 years; the internet took 23 years to reach the same milestone. Growth rates in the lowest-income countries are over **4× those in the highest-income countries**.
- **Three quarters of conversations** focus on practical guidance, seeking information, and writing.

---

### 7. OpenAI Study — Usage Categorization

- OpenAI proposed three meta-categories:
  - **Asking** — 49% of messages (advisory, information-seeking)
  - **Doing** — 40% (task-focused: drafting, planning, coding)
  - **Expressing** — 11% (personal reflection, exploration, play)
- Work-related usage accounts for approximately **30%** of total use; non-work is **70%**.
- Top usage categories by share of conversations:
  | Category | Share |
  |---|---|
  | Practical guidance | 28.8% |
  | Seeking information | 24.4% |
  | Writing | 23.9% |
  | Multimedia | 7.3% |
  | Self-expression | ~5% |
  | Technical help | ~5% |
- Within practical guidance, **tutoring/teaching = 10.2%** and **how-to advice = 8.5%** of all ChatGPT usage.
- **Writing usage is declining** over time as users discover other capabilities.
- **Multimedia usage spiked** to ~12% following the GPT-4o image generation release and the "Ghiblification" meme, then settled at 7.3% — roughly double its pre-spike baseline of ~4%.
- **Seeking information grew** from 18% a year ago to 24.4%, correlating with the introduction of deep research tools.
- The study notably **lacks an explicit "therapy/companionship" category**, which some observers flagged as a potential omission or misclassification relative to a prior Harvard Business Review study.

---

### 8. OpenAI Study — Startup and Product Implications

- Multiple commentators (Greg Eisenberg, ARC Prize President Greg Kamrat) argued that **each usage subcategory represents a potential billion-dollar vertical AI startup wedge**.
- The counter-argument (Jamie Forward, Michael Cove): building directly on top of categories ChatGPT already serves is risky, because OpenAI may absorb those use cases natively, causing churn for wrappers.
- Andreessen Horowitz's Olivia Moore noted that **work-related usage on consumer accounts has fallen** from ~47% in June 2024 to ~27% in mid-2025.
- Only **4.2% of consumer ChatGPT conversations involve code**, contrasting sharply with Claude's usage profile.
- Significant usage inflections visible around the launches of reasoning models and deep research; GPT-5's impact is still unclear.

---

### 9. Anthropic Economic Index — Third Edition

- Anthropic's study analyzes **all Claude usage including API**, not just the consumer chatbot.
- **Coding dominates** Claude usage at **36%** of the total sample.
- Upticks observed in **educational and scientific tasks**.
- **Shift toward autonomous/directive usage**: conversations where users delegate complete tasks jumped from **27% to 39%**.
- In coding specifically: debugging is down (−2.9 pp), program creation is up (+4.5 pp).
- API usage is even more automation-heavy: **77% of business API uses involve automation patterns**, vs. ~50% for Claude.ai users.
- Anthropic attributes the autonomy shift to improved model capabilities increasing user trust.
- **Weak price sensitivity** in enterprise: the most-used (and expensive) tasks dominate usage; capability and economic value matter more than cost currently. The host predicts cost sensitivity will become more important as frontier capabilities propagate to older, cheaper models.
- **Context is the bottleneck**: Anthropic flags that data modernization and organizational investments to supply models with the right context will be a critical constraint for high-impact enterprise AI deployments.
- Anthropic co-founder Jack Clark cited a timeline of **end of 2026 / early 2027** for "powerful AI systems" as defined in Dario Amodei's *Machines of Loving Grace* essay.

---

### 10. Labor Market Implications

- Fortune interpreted Anthropic's data as confirming that **entry-level workers are being replaced by AI**.
- Anthropic's head of economics, Peter McCrory, stated that businesses are building embedded infrastructure and that there are "likely some labor market implications."
- Harvard professor Christopher Stanton speculated that entry-level wages may fall as workers compete with AI for experience-accumulation roles.
- The host expressed skepticism about over-reaching from current data, calling for empirical observation rather than policy based on supposition.

---

## Key Concepts

- **AP2 (Agent's Payment Protocol):** Google's open protocol for secure, standardized agent-led payments, built as an extension of MCP and A2A.
- **Mandate:** A cryptographically signed, tamper-proof digital contract in AP2 that encodes user intent or purchasing authorization for an AI agent.
- **MCP (Model Context Protocol):** A standard protocol enabling AI agents to access external data in a structured way; AP2 is built on top of it.
- **A2A (Agent-to-Agent Protocol):** A communication protocol for agents to interact with one another; also a foundation for AP2.
- **Asking / Doing / Expressing:** OpenAI's three meta-categories of ChatGPT usage representing advisory (49%), task-completion (40%), and personal/exploratory (11%) interactions respectively.
- **Directive conversation:** Anthropic's term for interactions where a user delegates a complete task to Claude rather than collaborating iteratively.
- **Reasoning models:** AI models designed for multi-step logical reasoning (e.g., OpenAI's o-series); their launch correlated with a major inflection in ChatGPT usage volume.
- **Deep research:** A ChatGPT and Claude feature enabling extended, multi-source information retrieval; associated with growth in "seeking information" usage.
- **Context engineering / context orchestration:** The practice of curating and structuring the inputs and memory available to an AI model to improve its performance in complex enterprise deployments; flagged as a key bottleneck and watchword for 2026.
- **Vertical AI agent:** A specialized AI application targeting a specific industry or use case, as opposed to a general-purpose chatbot.
- **Ghiblification meme:** A viral trend (April 2025) of using GPT-4o's image generation to render photos in Studio Ghibli art style; caused a measurable spike in ChatGPT multimedia usage.
- **Economic Index Report (Anthropic):** A quarterly report by Anthropic categorizing anonymized Claude conversations to track AI usage patterns and potential economic impacts.

---

## Summary

Both the OpenAI/NBER/Harvard consumer study and Anthropic's third Economic Index Report provide the most data-grounded picture to date of how people and businesses actually use AI. On the consumer side, ChatGPT has grown explosively and is now demographically broad — roughly gender-equal and increasingly global, with the fastest adoption in lower-income countries. The dominant use cases are practical guidance, information-seeking, and writing, with users primarily treating the tool as an advisor rather than a task executor. On the enterprise and API side, Anthropic's data shows a clear shift toward autonomous, delegation-heavy interactions, particularly in coding and automation workflows, with capability mattering far more than cost at this stage. Both reports converge on a common theme: context — having the right information available to the model — is becoming the critical bottleneck for unlocking further value, especially in complex enterprise deployments. For entrepreneurs, the data reveals both opportunity (large, underserved behavioral niches) and risk (building in areas that general-purpose models may absorb natively). Looking ahead, Anthropic's leadership continues to point to late 2026 or early 2027 as the timeframe for substantially more powerful and autonomous AI systems.
