---
title: Openai Devday 2025 Did Openai Just Kill A Bunch Of Agent Startups Bon
description: >-
  This is a same-day, first-impressions episode recorded while OpenAI Dev Day
  2025 was still ongoing. The host walks through the major announcements — the
  Apps SDK and AgentKit being the two headliners — and addresses the question
  immediately circul...
pubDate: 2025-10-06T00:00:00.000Z
type: episode
tags:
  - ai-daily-brief-podcast
draft: false
---
# OpenAI Dev Day 2025 — Rapid Reaction: Did OpenAI Just Kill a Bunch of Agent Startups?

**Source:** Bonus rapid-reaction episode published alongside OpenAI Dev Day (October 6, 2025)
**Speaker/Host:** Not explicitly named in transcript (references "Super Intelligent" as their outlet)
**YouTube URL:** Not available

---

## Overview

This is a same-day, first-impressions episode recorded while OpenAI Dev Day 2025 was still ongoing. The host walks through the major announcements — the **Apps SDK** and **AgentKit** being the two headliners — and addresses the question immediately circulating in the developer community: *did OpenAI just kill a class of agent-builder startups?* The episode also evaluates whether the new Apps feature is meaningfully different from the failed GPTs product line, and reflects on the broader shift from headline innovation toward practical integration.

---

## Prerequisites

- Familiarity with **ChatGPT** and **OpenAI's API** ecosystem
- Basic understanding of **AI agents** and **multi-agent workflows**
- Awareness of competing agent/automation platforms: **Zapier**, **Lindy**, **N8N**
- Knowledge of **GPTs** (OpenAI's earlier custom-chatbot feature) and why they underdelivered
- Understanding of **Model Context Protocol (MCP)** as an integration standard
- Familiarity with **Codex** (OpenAI's coding assistant) and **Sora** (OpenAI's video model)

---

## Main Points

### What Was *Not* Announced
- No new flagship models were released at Dev Day; this is consistent with historical Dev Day focus on tooling rather than model launches
- Two minor model updates were released but not highlighted in the keynote: **GPT Real-Time Mini** (70% cheaper than the larger voice model) and **GPT Image 1 Mini** (80% cheaper)

### Platform Scale Update
- 4 million developers building with OpenAI
- 800 million weekly ChatGPT users
- 6 billion tokens per minute processed on the API platform
- Codex has served 40 trillion tokens since its release

### The Four Announcement Categories
OpenAI structured announcements into four buckets:
1. **Apps and ChatGPT**
2. **AgentKit**
3. **Codex updates**
4. **API updates**

Developer excitement in the room ranked (unscientifically): agents > Codex > apps, measured by applause, phone activity, and sidebar conversations.

---

### Apps SDK: A Richer App-in-Chat Experience
- Apps are native integrations built directly into ChatGPT; users can tag them in or ChatGPT can recommend them contextually
- Apps render inline, support picture-in-picture and full screen; videos pin to the top of the screen during conversation
- The key differentiator is **"talking to apps"**: ChatGPT receives live context from whatever is happening inside the app, enabling genuine two-way interaction
- **Launch partners:** Coursera, Zillow, Canva, Booking.com, Expedia, Figma, Spotify
- **Coming soon:** Khan Academy, Instacart, Uber, Thumbtack, TripAdvisor, and others
- Built on **Model Context Protocol (MCP)**

**Demos highlighted:**
- *Coursera:* User pauses an educational video and asks ChatGPT to explain what's being discussed; ChatGPT has full context of the video content
- *Zillow:* User clicks a property listing and asks ChatGPT about proximity to a dog park — information Zillow itself doesn't surface
- *Canva:* User generates a logo and pitch deck from within ChatGPT (host found this less compelling as a real-world use case)

---

### AgentKit: Visual Agent-Building for Developers
- **Agent Builder:** Visual canvas for creating multi-agent workflows
- **Chat Kit:** Tool for embedding chat experiences into products and agents
- **Native Evals Platform:** Covers trace grading, step-by-step agent decision review, and automated prompt optimization
- Connects to external data sources via OpenAI's existing **Connectors** platform
- Live demo: an agent was built and shipped in 8 minutes, turning the Dev Day website into an interactive session-finder
- Built on MCP; designed to reach outside the OpenAI ecosystem

**Key limitation noted:** AgentKit, as currently expressed, is developer-facing and coding-heavy — not a mass-market consumer agent builder. Ethan Mollick observed it "may still be too technical and single player to be a true replacement for the dream of GPTs."

---

### Did OpenAI Kill Agent-Builder Startups?

**Companies most discussed:** Lindy, Indy, N8N, Zapier

**The "yes" argument:**
- OpenAI's distribution is immense and extremely difficult to compete against
- Building software moats against a foundation model company is inherently difficult
- OpenAI's MCP-based approach signals willingness to be the aggregation layer for the whole ecosystem

**The "no / not yet" argument:**
- **Zapier's counter:** Their ecosystem of 8,000 apps and 30,000 actions is fundamentally different and complementary; AgentKit ships with only a few native integrations
- **Model flexibility:** Enterprises will want to swap models for different use cases — a monoculture model provider is an inherent constraint for any agent tool from a foundation model company
- **Normalization effect:** A major player entering the space could expand the overall market for visual workflow agent builders rather than cannibalize it
- **Still too technical:** AgentKit is not yet democratizing agent creation for non-developers

**Host's conclusion:** OpenAI made life harder for these startups, but the competitive outcome is not a foregone conclusion.

---

### Is Apps Just GPTs 2.0?

**The skeptical view:**
- GPTs were announced with great excitement but did not become the breakout "AI app store" many anticipated
- Canva inside ChatGPT may be a downgrade from the full Canva.com experience

**The counter-view:**
- Apps SDK is architecturally deeper: ChatGPT actively holds and uses app context, rather than apps sitting passively inside a chat window
- Swix (Sean Wang): "This isn't Canva, it's Canva inside ChatGPT. This isn't the ChatGPT you grew up with."
- The Coursera and Zillow demos are fundamentally additive — ChatGPT provides capabilities those apps cannot replicate internally
- The Canva demo is less persuasive because users lose significant functionality for only marginal convenience

**Host's conclusion:** Apps ≠ GPTs 2.0. Some integrations will be genuinely transformative; others will be weak fits. The education and real estate categories appear to be strong fits because ChatGPT adds capabilities that the native app cannot provide.

---

### API Updates: The Developer Crowd-Pleaser
- **GPT-5 Pro** now available in the API (12x the price of standard GPT-5)
- **Sora 2** and **Sora 2 Pro** now available in the API
- Matt Schumer: "These models are both massively better than what developers had access to just a day ago."
- GPT-5 Pro's price is significant but potentially justified for use cases that only become viable at that capability level
- Sora 2 Pro coming to the API validated the host's hypothesis that a "Pro" tier existed but had not been publicly accessible

---

### Broader Vibe: Shift from Innovation to Integration
- Dan Shipper (Every): "It feels less exciting for developers and more for developer-adjacent roles… if you're a hardcore AI engineer, it's a bit underwhelming."
- Codex updates (Slack integration, enterprise controls) described as incremental
- Host's framing: this reflects a necessary maturation phase — real usage at scale demands practical, reliable tooling over headline-grabbing demos
- The "integration phase" is what unlocks real-world value beyond the demo stage

---

### Apps as a "Context Black Hole" — The Strategic Risk
- Apps may be a mechanism for OpenAI to accumulate unprecedented consumer context, creating deep lock-in around ChatGPT
- Once users experience Coursera *with* a ChatGPT tutor in context, or browse Zillow *with* a research assistant embedded, reverting to standalone apps may feel like a regression
- This could quietly advance OpenAI's long-stated vision of a **true personal assistant for every person**
- The host flags this as speculative but worth watching closely

---

## Key Concepts

- **Apps SDK:** OpenAI's framework for building native applications that live inside ChatGPT and share bidirectional context with the assistant
- **"Talking to apps":** A feature of the Apps SDK enabling ChatGPT to receive and act on live context from within a running application
- **AgentKit:** OpenAI's suite of developer tools for building, evaluating, and deploying multi-agent workflows, including a visual Agent Builder
- **Agent Builder:** A visual canvas within AgentKit for designing multi-agent pipelines without writing all logic by hand
- **Chat Kit:** An AgentKit component for embedding chat-based agent experiences into third-party products
- **Native Evals Platform:** AgentKit's built-in evaluation tooling covering trace grading, step-by-step decision auditing, and automated prompt optimization
- **Model Context Protocol (MCP):** An open standard for connecting AI models to external tools, data sources, and applications; the foundation of both Apps SDK and AgentKit
- **GPT-5 Pro:** A premium-tier version of GPT-5 available via API at approximately 12x the standard model price
- **Sora 2 / Sora 2 Pro:** OpenAI's second-generation video generation models, now available via API
- **GPT Real-Time Mini:** A smaller, cheaper voice model (70% less expensive than the full real-time model)
- **GPT Image 1 Mini:** A smaller, cheaper image model (80% less expensive than the full version)
- **GPTs:** OpenAI's earlier (2023) custom-chatbot feature, referenced as context for evaluating whether Apps represents genuine progress
- **Context lock-in:** The competitive dynamic whereby accumulating user context within a single platform makes switching to alternatives increasingly costly

---

## Summary

OpenAI Dev Day 2025 centered on two major announcements — the **Apps SDK** and **AgentKit** — neither of which introduces new foundation models, but both of which deepen the infrastructure around existing ones. The host argues that AgentKit, while a meaningful step toward mainstream agent creation, remains developer-facing and technically demanding enough that it does not immediately threaten agent-builder startups like Zapier, Lindy, and N8N, whose ecosystem breadth and model flexibility remain genuine differentiators. The Apps SDK is judged to be meaningfully different from the failed GPTs product, particularly in cases like Coursera and Zillow where ChatGPT adds capabilities the native app cannot replicate — though it is a weaker fit where the native app already offers a superior full-featured experience. The most strategically significant possibility the host raises is that Apps could function as a "context black hole," pulling users into a ChatGPT-centric workflow that becomes difficult to abandon, quietly advancing OpenAI's long-term vision of a universal personal assistant. The episode frames the overall Dev Day as a marker of a broader industry shift from big-bang innovation toward practical integration — less spectacular, but arguably more consequential for real-world adoption.
