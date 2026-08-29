---
title: The Most Useful New AI Features and Tools to Try
description: >-
  This episode of the AI Daily Brief covers two broad categories: major industry
  news (the Hugging Face/NVIDIA acquisition, NVIDIA earnings, Salesforce's
  resurgence, and AI policy developments) and a practical survey of new AI
  features, models, and ...
pubDate: 2026-08-28T00:00:00.000Z
type: episode
tags:
  - ai-daily-brief-podcast
url: 'https://www.patreon.com/posts/167967968'
draft: false
---
# Study Document: The Most Useful New AI Features and Tools to Try
*AI Daily Brief — Episode dated 2026-08-28*

---

## Overview

This episode of the *AI Daily Brief* covers two broad categories: major industry news (the Hugging Face/NVIDIA acquisition, NVIDIA earnings, Salesforce's resurgence, and AI policy developments) and a practical survey of new AI features, models, and tools released in the preceding week. The host positions the episode as a useful inventory for practitioners who want to know what is immediately usable, spanning browser-based agents, voice transcription, video generation, and enterprise integrations. No speaker name or affiliation beyond "AI Daily Brief / AIDB" is provided.

**Source video URL:** Not available (URL field blank in video metadata)

---

## Prerequisites

- Familiarity with major AI assistant platforms: Claude (Anthropic), ChatGPT (OpenAI), Grok (xAI/SpaceX AI), Gemini (Google)
- Basic understanding of the distinction between AI models and AI harnesses/wrappers
- General awareness of the open-source AI ecosystem and Hugging Face as a model distribution platform
- Familiarity with enterprise software concepts (CRM, SaaS, governance guardrails)
- Basic financial literacy (revenue multiples, ARR, accounts receivable, free cash flow)

---

## Main Points

### 1. NVIDIA Acquires Hugging Face for $12.9 Billion

- The Information broke the story; NVIDIA agreed to purchase Hugging Face at approximately 80× annualized revenue ($150M ARR).
- The acquisition is interpreted as both offensive (building a full-stack open AI business) and defensive (ensuring open-model ecosystem traffic continues to run on CUDA/NVIDIA GPUs rather than custom silicon from Google, AMD, etc.).
- Hugging Face is the primary distribution channel for open-source model weights; millions of developers download, fine-tune, and serve models predominantly on NVIDIA infrastructure.
- Key concern: Hugging Face's value partly derives from perceived hardware neutrality; researchers, startups, enterprises, and NVIDIA competitors all use the platform. Acquisition may erode that trust.
- Counterargument: NVIDIA has built unusual goodwill in the AI community; some observers see it as a "great fit" that supports plural AI rather than consolidating power.

### 2. NVIDIA Q2 Earnings: Strong Revenue, Some Red Flags

- Quarterly revenue: $96.2 billion, representing 106% year-over-year growth (accelerating from prior quarter).
- Q3 guidance: ~89.5% growth; fiscal year 2027 guidance limited to ~70% due to supply chain constraints.
- Free cash flow fell 50% year-over-year to $21 billion; accounts receivable rose 50%, with days sales outstanding climbing from 45 to 60 days — attributed to extended payment terms on large multi-quarter agreements.
- NVIDIA officially re-entered the Chinese market with a small volume of H200 chip sales under revised export control rules.
- Amazon announced a purchase of an additional 2 million NVIDIA chips, reinforcing sustained demand.
- Stock rose ~4.8% after hours. A revenue-sharing program with NeoClouds was quietly paused amid antitrust concerns.

### 3. SaaS Comeback: Salesforce and the "SaaSpocalypse" Reversal

- Six months prior, a dominant market narrative held that vibe-coding would render SaaS obsolete ("SaaSpocalypse"). That scenario did not materialize.
- Salesforce's AgentForce product is now tracking toward $1.5 billion in revenue for the year (up from a $1.2B forecast in Q1); overall quarterly sales were $11.5 billion, growing 11%.
- Salesforce stock rose 22% on the earnings report; the company is now within 5% of recovering its full SaaSpocalypse drawdown.
- Similar recoveries observed at ServiceNow, Figma, Atlassian, CrowdStrike, and Okta.
- Analyst commentary: markets are concluding that AI augments rather than destroys enterprise software, with agentic platform usage surging 6× via MCP and API calls.

### 4. AI App Layer Revenue Growth

- Cognition (Devin coding agent): ~$900M annualized run rate, 3× growth since start of year.
- Higgs Field (video/image model wrapper): ~$700M ARR, tripled.
- Perplexity: ~$750M ARR, tripled.
- Open Evidence (doctors' chatbot): ~$300M ARR, doubled.
- Manus: ~$400M ARR, quadrupled.
- DeepSeek (China): $70M revenue in 2026 YTD, a 10× increase from full-year 2025.

### 5. AI Policy Update: FINRA-for-AI Executive Order Stalled

- A draft executive order circulating within the Trump administration proposed a self-regulatory body for AI, modeled on FINRA (the financial industry's self-regulatory organization).
- The proposal would require AI labs to share security notes, conduct safety testing, and create industry-wide regulations.
- Former White House AI Czar David Sachs publicly opposed it, calling it a "Trojan horse for an open-source model ban," arguing frontier labs would set compliance standards that open-source developers cannot meet.
- The executive order has stalled; no formal body has been created.
- Separately, OpenAI, Anthropic, Google, Microsoft, AWS, Visa, GM, PwC, and 100+ other companies signed an open letter calling for urgent collective action on AI-enabled cybersecurity threats, warning of a limited "defender's window."

### 6. Claude Gets a Built-in Browser (Claude Cowork)

- Claude's desktop app (Cowork) now includes a built-in browser that opens alongside sessions to handle web-based tasks: form filling, web app interaction, agentic browsing.
- The browser is isolated from the user's personal browsers and logins.
- A separate Claude-in-Chrome option exists for users who prefer to stay in their own browser.
- Commentary: perceived as a meaningful capability shift — AI moving from answering questions to opening tabs and completing tasks. Grokbot's browser capability was cited as the primary inspiration.
- Anthropic was noted as late relative to ChatGPT Work and Grokbot, both of which had similar functionality earlier.

### 7. ChatGPT Work: Browser Agent and Temporary Chat Upgrade

- ChatGPT Work now provides its own cloud computer for web-based agentic tasks, with use cases including scheduling, insurance lookups, apartment searches, and document preparation.
- New quality-of-life feature: users can now toggle context and memory into temporary chats and optionally save them to history, giving more granular control over privacy versus continuity.
- Practical example use cases pitched by OpenAI lean heavily toward consumer/life management tasks rather than pure B2B workflows.

### 8. Multiple Gmail Accounts in ChatGPT Plugins

- Users can now connect more than one Gmail account to ChatGPT plugins, a long-requested feature for power users managing multiple inboxes.
- Grokbot already supported multiple Gmail and Slack connections; this update brings ChatGPT to parity.
- Framed as a significant quality-of-life improvement regardless of which platform implements it first.

### 9. Hermes Agent: Open, Flexible Alternative

- Hermes agent is tracking all major harness feature releases and implementing equivalents rapidly.
- Recent additions: seamless browsing using the user's own Chrome profile (with real logins), and "bot mode" — named agent profiles each with their own role, model, memory, skills, and communication channels, able to talk to each other.
- Positioned as a lower-cost ($"a few dollars per month" vs. $200), open-source, model-agnostic alternative to proprietary agents.
- Also offers a "HUD mode": a transparent overlay allowing agent interaction while the user does other tasks (e.g., gaming).

### 10. CloudForce: Salesforce + Anthropic Partnership

- Salesforce and Anthropic announced "CloudForce," integrating Claude agents natively into Salesforce CRM via plugins and the AI Force governance layer.
- Agents can query Salesforce data as context and take agentic actions within existing governance guardrails.
- Strategic interpretation: Anthropic is acknowledging that displacing enterprise software outright is premature while agentic governance infrastructure matures (estimated 1–2 year runway). Native integrations with incumbent software are the near-term path.
- Benioff framing: "The UI is the AI" — agents dynamically surface and act on CRM data rather than users navigating static interfaces.
- Practical response noted: at least one enterprise user paused plans to build Salesforce alternatives upon hearing the announcement.

### 11. Gemini 3.5 Transcribe: New Speech-to-Text Model

- Supports 85+ languages; operates in two modes:
  - **Verbatim mode**: direct transcription of exactly what was said.
  - **Smart translate mode**: strips filler words, condenses rambling, handles self-corrections, and outputs clean intended meaning.
- Supports custom vocabulary for jargon/slang, performs well in noisy environments, distinguishes up to three speakers.
- Available across Google's AI suite and as an API for third-party developers.
- Key insight: prior voice input required speaking in structured, written-language style; this model accommodates natural spoken thought patterns and reconstructs intended text.

### 12. Grok Voice Think Fast 2.0

- xAI/SpaceX AI released an updated voice model, claiming the #1 ranking on the Artificial Analysis Speech-to-Speech Index.
- The index measures reasoning over speech, real-issue resolution, and agentic tool use completion.
- Production deployment: Starlink uses Grok Voice to handle 15,000+ inbound customer support and sales calls per day, diagnosing hardware issues, shipping replacements, and fulfilling ~3,000 orders per week via voice.

### 13. Gemini Omni 1.1 Flash: Video Generation Update

- New capabilities: scene extension, specification of start/end frames, video input references, 4K upscaling, and a 360p quick-test mode.
- Rated #1 in text-to-video and #2 in image-to-video on Arena benchmarks.
- Average generation latency: ~26.7 seconds.
- User impressions positive but mixed when compared directly to Seed Dance 2.5.
- Focus is on usability and controllability rather than raw quality improvement.

### 14. Kling H3 Max: Ultra-Fast Video Generation

- Kling (by Kwai/Fowl) released H3 Max, claiming average generation latency of 3.49 seconds — compared to Gemini Omni Flash's 26.7 seconds and Seed Dance 2.5's 68 seconds.
- Users reported generating clips in as little as 1.3–15 seconds, meaning generation is faster than playback.
- Described as highly prompt-adherent ("does exactly what you tell it to"), with strong audio and voice sound effects.
- Conceptual implication: sub-playback-time generation opens the door to live, interactive, fully generated visual environments and massively multiplayer responsive experiences.
- Available to try via Venice.ai (a privacy-focused AI platform recently crossing $100M ARR).

---

## Key Concepts

- **Agentic browsing**: AI agents that can autonomously navigate websites, fill forms, and complete web-based tasks within their own isolated browser environment.
- **Temporary chat (ChatGPT)**: A session mode that does not create new memories or persist to history by default, now upgradeable on demand.
- **Bot mode (Hermes)**: A configuration system where each agent profile ("bot") has its own role, model, memory, and skills, and bots can communicate with each other.
- **Hermes HUD mode**: A transparent overlay interface allowing agent interaction while the user focuses on other screen activities.
- **CloudForce**: A named partnership between Anthropic and Salesforce integrating Claude agents into Salesforce CRM with governance guardrails via the AI Force layer.
- **AI Force (Salesforce)**: Salesforce's agentic governance and infrastructure layer that enforces existing enterprise rules and workflows when agents take actions.
- **Verbatim mode (Gemini 3.5 Transcribe)**: Transcription that reproduces speech exactly as spoken.
- **Smart translate mode (Gemini 3.5 Transcribe)**: Transcription that cleans speech into the user's probable intended written output.
- **Artificial Analysis Speech-to-Speech Index**: A benchmark measuring voice agents' ability to reason over speech, resolve real issues, and complete tasks using agent tools.
- **Scene extension (Gemini Omni 1.1 Flash)**: The ability to lengthen an existing generated video clip beyond its original duration.
- **SaaSpocalypse**: A market narrative from early 2026 predicting that AI-enabled vibe-coding would make SaaS software obsolete; widely considered to have failed to materialize.
- **FINRA for AI**: A proposed self-regulatory organization for the AI industry, modeled on the financial industry's FINRA body; the related executive order has stalled.
- **Plural AI**: The principle that AI power is distributed across multiple models, labs, and nations rather than monopolized by a single actor.
- **Defender's window**: The near-term period during which AI tools can be used to remediate longstanding cybersecurity vulnerabilities before AI-enabled attacks become widespread.
- **Days Sales Outstanding (DSO)**: A measure of how long a company takes to collect payment after a sale; NVIDIA's rose from 45 to 60 days, flagging extended customer payment terms.
- **MCP (Model Context Protocol)**: A protocol enabling AI agents to make structured calls to external data and workflow systems; referenced in context of Salesforce agentic usage growth.

---

## Summary

The episode presents the week ending 2026-08-28 as a moment of accelerating convergence between AI capabilities and real-world utility across multiple layers of the stack. At the infrastructure level, NVIDIA's acquisition of Hugging Face signals an ambition to own the full open-AI value chain — from silicon to model distribution — while its earnings confirm staggering but maturing revenue growth. At the application layer, the widely predicted collapse of enterprise SaaS failed to occur; instead, AI is augmenting incumbents like Salesforce, driving revenue growth and a dramatic stock recovery. Simultaneously, a cohort of AI-native companies (Cognition, Perplexity, Higgs Field) are posting rapid revenue gains. On the feature side, the week was characterized by a practical theme: AI systems are crossing from advice-giving to task-doing, with browser agents (Claude Cowork, ChatGPT Work, Grokbot, Hermes), native enterprise integrations (CloudForce), and improved voice infrastructure (Gemini 3.5 Transcribe, Grok Voice) all pushing in the same direction. Video generation reached a symbolic inflection point with Kling H3 Max, where clips can be produced faster than they can be watched, opening conceptual possibilities for real-time interactive generated environments. The host's underlying message is that amidst a relentless news cycle dominated by model benchmarks, the quieter wave of harness and feature improvements is collectively reshaping how AI is actually used day to day.
