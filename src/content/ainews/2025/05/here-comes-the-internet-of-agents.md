---
title: Here Comes the Internet of Agents
description: >-
  This episode of the AI Daily Brief (recorded May 21, 2025) covers the first
  day of Microsoft Build 2025, framed around the emergence of an "open agentic
  web." The host (Nathaniel Whittemore, though not named explicitly in this
  transcript) argues t...
pubDate: 2025-05-21T00:00:00.000Z
type: episode
tags:
  - ai-daily-brief-podcast
url: 'https://www.patreon.com/posts/129488793'
draft: false
---
# Study Document: Here Comes the Internet of Agents — Microsoft Build 2025 & AI Agent Ecosystem

## Overview

This episode of the **AI Daily Brief** (recorded May 21, 2025) covers the first day of **Microsoft Build 2025**, framed around the emergence of an "open agentic web." The host (Nathaniel Whittemore, though not named explicitly in this transcript) argues that Microsoft's announcements signal a decisive shift from AI experimentation ("pilots") to full-scale enterprise agent deployment. The episode also covers several shorter headline stories that reinforce the same theme: AI agents are moving from concept to operational reality across industries.

**Source video:** URL not provided in metadata.

---

## Prerequisites

- Basic familiarity with **large language models (LLMs)** and AI assistants (e.g., ChatGPT, Copilot)
- Understanding of what **AI agents** are: autonomous systems that can plan, act, and iterate on tasks
- Familiarity with **enterprise software ecosystems**, particularly Microsoft (Azure, GitHub, Copilot, Teams/Slack)
- Awareness of key AI companies: OpenAI, xAI (Grok), Anthropic, Salesforce, Perplexity
- Basic knowledge of **developer tooling**: GitHub, VS Code, Cursor, Windsurf
- Some exposure to **API/web protocols** and the concept of open standards

---

## Main Points

### 1. YC Startup Firecrawl Posts Agent-Only Job Listings

- Web crawling company **Firecrawl** posted three roles on Y Combinator's jobs board — content creation agent, junior software engineer agent, and customer support agent — each with a **$25,000/month salary**, targeted at AI agents rather than humans.
- A similar experiment in February yielded no qualified AI applicants; this time, **more than 50 applicants applied** within a week.
- Founder Caleb Peffer's stated vision: "the next 10x engineers are operating armies of agents" — humans as **agent operators**, not direct task executors.
- Described as partly a publicity stunt, but also a genuine early signal of what **agent hiring workflows** may look like.

---

### 2. Salesforce Launches AgentForce in Slack — "Digital Teammates"

- Salesforce announced **AgentForce in Slack**: task-specific AI agents deployable within Slack, where employees already work.
- Framing shifted from general-purpose AI to **specialized, collaborative agents** that can orchestrate workflows across multiple business systems.
- Chief Product Officer Rob Seaman compared it to human specialists collaborating — AI agents doing the same.
- VentureBeat characterized this as a move toward **narrower-scope but higher-capability agents**.

---

### 3. xAI Publishes Grok's System Prompts

- xAI followed through on a transparency pledge by **releasing Grok's system prompts**, revealing the chatbot is instructed to be "extremely skeptical," not defer to mainstream authority, and provide "truthful and based insights."
- These prompts align with Elon Musk's public persona and explain Grok's "edgier" tone compared to competitors.
- Notably, the specific system prompt involved in a recent controversy was **not** among those released.
- AI safety researcher Daniel Kokotajlo called for going further — publishing a **full model spec** (comparable to OpenAI's model spec or Anthropic's Constitutional AI document) to prevent hidden post-training instructions.
- xAI engineering leader Igor Babushkin acknowledged the point positively.

---

### 4. Perplexity's Financial Internals

- In 2024, Perplexity generated **$34 million in revenue** but **burned $65 million**, ending the year with ~**$850 million in the bank** due to frequent fundraising.
- Largest cost driver: **web services/R&D (AWS etc.) at $48 million** — more than double their payroll spend.
- Raises the ongoing question of whether there is a sustainable large-scale opportunity in "AI wrapper" products.

---

### 5. Microsoft Build 2025 — The Open Agentic Web (Main Episode)

#### Overarching Theme
- Microsoft framed Build 2025 entirely around **agents and the open agentic web**: AI agents making decisions and performing tasks on behalf of users and organizations across the full enterprise stack.
- CEO Satya Nadella's core message: the transformation is **not future-tense** — it is happening now.
- Microsoft positions itself as **"customer zero"** for the enterprise AI it is selling, including using AI internally to reduce headcount and boost productivity.

#### Announcement 1: GitHub Copilot → Full Coding Agent
- Copilot upgraded from "pair programmer" to **"peer programmer"**: a full autonomous coding agent embedded in GitHub.
- Can be assigned issues (bug fixes, features, maintenance) and completes them **autonomously**, using context from related PRs and repo instructions.
- Sam Altman (appearing virtually) called it "one of the biggest changes to programming I've ever seen" — true **software engineering task delegation**.
- More developer excitement came from a related announcement: **VS Code going fully open source** (VS Code is the base for both Cursor and Windsurf).

#### Announcement 2: Copilot Tuning
- Organizations can now tune **Copilot on their own proprietary data**, learning company-specific tone, language, and expertise.
- Compared to what **Glean** has been doing — making enterprise AI customization accessible without deep technical overhead.
- Represents maturation beyond surface-level AI adoption toward **deep organizational integration**.

#### Announcement 3: Multi-Agent Orchestration
- Microsoft announced tools enabling **agents to work together as a team** with human oversight.
- **230,000+ organizations**, including 90% of the Fortune 500, already use **Copilot Studio** to build and customize agents.
- Microsoft's entry into orchestration signals that agent-at-scale coordination is becoming an immediate enterprise need, not a future one.

#### Announcement 4: Azure AI Foundry (Agent Factory)
- **Azure AI Foundry** expanded with support for models from **Grok (xAI), Hugging Face, Meta, Mistral**, and others — positioning Azure as a **model-neutral platform**.
- Includes Foundry Agent Service, agentic retrieval in Azure AI Search, and integration with Copilot Studio.
- Identity, management, and security tooling extended to cover agents.
- Elon Musk appeared at the event; noted Grok is used in customer service at **SpaceX and Tesla**, with ambitions to sell to enterprises.

#### Announcement 5: NLWeb
- **NLWeb**: an open project enabling **natural language interaction with any website**, described as "HTML for the agentic web."
- A few lines of NLWeb code plus a chosen AI model and data source can produce a **custom chatbot for any website** in minutes.
- Goal: make every website an **AI-queryable app**, allowing users and other agents to interact with web content semantically.
- Ambition compared to how HTML democratized website creation — NLWeb aims to do the same for intelligent, agent-accessible web experiences.

#### Announcement 6: Microsoft Discovery (Agents for Science)
- **Microsoft Discovery**: an agent-powered platform to accelerate scientific research — agents generate ideas, simulate results, and learn iteratively.
- Positioned as applying the full Microsoft AI stack to **speed up the scientific process itself**.

#### MCP (Model Context Protocol) Endorsement
- Microsoft announced **broad first-party MCP support** across GitHub, Copilot Studio, Azure, and other platforms.
- Microsoft and GitHub **joined the MCP Steering Committee**, contributing to secure, at-scale adoption of the open protocol.
- MCP is now effectively **enshrined as a foundational standard** in the emerging agent developer ecosystem.

---

### 6. Microsoft's Internal Transformation ("Dogfooding the Frontier Firm")

- Recent Microsoft layoffs (3% of staff) framed by *The Information* as tied to **internal automation initiatives**, not just management delayering.
- Senior leaders instructed teams to use AI to boost productivity in sales, engineering, and customer support.
- **20–30% of Microsoft's code** is currently AI-generated; one VP over ~400 engineers targeting **50% AI-generated code**.
- Microsoft describes itself as **"customer zero"** — adopting the same AI-driven workforce transformation it sells to enterprise clients.

---

## Key Concepts

- **Open Agentic Web**: Microsoft's vision of an internet where AI agents autonomously make decisions and perform tasks across organizational and individual contexts.
- **AI Agent**: An autonomous AI system that can plan, reason, take multi-step actions, and complete tasks with minimal human intervention.
- **Multi-Agent Orchestration**: Coordinating multiple specialized AI agents to collaborate on complex tasks, with human oversight.
- **Copilot Tuning**: Fine-tuning Microsoft Copilot on a specific organization's proprietary data to reflect its unique language, tone, and knowledge.
- **NLWeb**: Microsoft's open protocol enabling natural language querying of any website, analogous to HTML for the agent-facing web.
- **MCP (Model Context Protocol)**: An open standard protocol enabling AI agents to securely access tools, data sources, and services; now backed by Microsoft/GitHub.
- **Azure AI Foundry**: Microsoft's unified cloud platform for building, deploying, and managing AI apps and agents across multiple model providers.
- **GitHub Copilot (Agent Mode)**: An upgrade to GitHub's AI coding assistant that enables fully autonomous software engineering task execution.
- **AgentForce in Slack**: Salesforce's platform for deploying specialized collaborative AI agents inside Slack workflows.
- **Frontier Firm**: Microsoft's term for an organization that uses AI to the point that agents handle most execution-layer work, with humans managing agents.
- **Agent Operator**: A human whose primary role is building, maintaining, and overseeing AI agents rather than performing tasks directly.
- **Model Context Protocol (MCP) Steering Committee**: The governance body for the MCP open standard, now including Microsoft and GitHub.

---

## Summary

The central argument of this episode is that AI agents have crossed the threshold from pilot projects to operational enterprise reality, and Microsoft Build 2025 is the clearest institutional signal of that shift. Through six major announcements — a full coding agent in GitHub, enterprise Copilot tuning, multi-agent orchestration, the model-agnostic Azure AI Foundry, the NLWeb open protocol, and agents-for-science via Microsoft Discovery — Microsoft staked its claim as the infrastructure layer for what it calls the "open agentic web." Reinforcing this, Microsoft's own internal operations are being restructured around agent-driven productivity, making it simultaneously the architect and the test case for the frontier firm model. The surrounding headlines — Firecrawl hiring AI agents, Salesforce deploying digital teammates, and the broader normalization of agent-based workflows — all converge on the same conclusion: organizations that are not actively building and deploying agents are already falling behind, and the role of human workers is rapidly shifting from task execution to agent management and oversight.
