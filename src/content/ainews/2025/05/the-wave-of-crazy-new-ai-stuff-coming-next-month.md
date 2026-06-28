---
title: The "Wave of Crazy New AI Stuff" Coming Next Month
description: >-
  This episode of the AI Daily Brief (recorded May 16–17, 2025) surveys a dense
  cluster of AI industry news centered on a single meta-theme: a large wave of
  new AI products, models, and infrastructure is imminent. The episode is framed
  by a quote fr...
pubDate: 2025-05-17T00:00:00.000Z
type: episode
tags:
  - ai-daily-brief-podcast
draft: false
---
# Study Document: The Wave of Crazy New AI Stuff Coming Next Month

## Overview

This episode of the **AI Daily Brief** (recorded May 16–17, 2025) surveys a dense cluster of AI industry news centered on a single meta-theme: a large wave of new AI products, models, and infrastructure is imminent. The episode is framed by a quote from Y Combinator Managing Partner **Dalton Caldwell**, who likened betting on AI model improvement to betting on 1990s network bandwidth growth — a reliably good bet. The host covers foundation model releases, coding agent launches, enterprise pricing experiments, agentic commerce, funding rounds, acquisitions, and AI safety incidents.

*Source video URL: not available*

---

## Prerequisites

- Basic familiarity with large language models (LLMs) and the distinction between base models and reasoning models
- Understanding of what AI agents and tool use mean in practice
- Awareness of major AI labs: Anthropic, OpenAI, Meta, xAI, Cohere
- Familiarity with coding assistant tools (Cursor, Windsurf) and concepts like IDEs, terminals, and software engineering workflows
- Basic understanding of SaaS and per-seat vs. per-use pricing models
- General knowledge of AI safety concepts: sycophancy, system prompts, alignment

---

## Main Points

### 1. Anthropic's Upcoming Claude Sonnet and Opus Releases

- New versions of **Claude Sonnet** and **Claude Opus** are expected within weeks, according to *The Information*
- The key differentiator: the ability to **interleave reasoning and tool use** — alternating between internal deliberation and external resource access (web search, databases, APIs)
- Practical examples include business development research and self-testing code with autonomous bug reasoning
- These models are designed to handle complex tasks from **higher-level, less precise instructions** (e.g., "make this app faster")
- Reception to the previous hybrid model, Claude 3.7 Sonnet, was mixed — complaints included hallucination, ignoring user instructions, and over-ambitious scope
- Notably, **Claude 3.5 Sonnet** (released ~one year prior) remains the recommended model for half of Cursor tasks, suggesting newer does not always mean better in practice

---

### 2. Windsurf Launches Proprietary SWE1 Model Family

- Coding assistant startup **Windsurf** announced its first family of proprietary models: **SWE-1** (full, lite, and mini variants)
- Models are optimized for the **full software engineering process**, not just code generation — including knowledge base retrieval, code testing, and interpreting user feedback
- SWE-1 claims **approximately Claude 3.5 Sonnet-level tool-call reasoning** at lower serving cost
- Windsurf's lite model will be offered with **unlimited use** to all users, including free tier, during a promotional period
- Benchmarks and blind user trials show SWE-1 outperforms 3.5 Sonnet but falls short of 3.7 Sonnet on lines-of-code acceptance
- This launch complicates the reported **OpenAI acquisition of Windsurf**, suggesting the company is a product and model company, not merely a frontend

---

### 3. OpenAI Launches Codex — Autonomous Coding Agent

- OpenAI launched **Codex**, described as an autonomous coding agent for senior engineers, capable of adding features and fixing bugs independently
- Designed for **parallel agent sessions** — users can run many simultaneous coding tasks
- Trained to exhibit **"taste"**: understanding large codebases, writing clean PRs, producing minimal code
- OpenAI's envisioned future: developers spend less time on routine code and more time **guiding, reviewing, and making strategic decisions**
- Programming becomes more "social" — delegating to agents and focusing on collaboration and ideation

---

### 4. GPT-4.1 Brought to ChatGPT as New Default

- **GPT-4.1**, originally released last month as an API-only model marketed toward developers, was added to ChatGPT by popular request and made the **default model**
- CPO Kevin Weil noted it is strong at coding and instruction following
- Early user sentiment: more natural conversational feel, better instruction adherence, and stronger creative writing compared to GPT-4.0

---

### 5. Meta's Llama 4 Behemoth Faces Delays

- Meta's flagship **Llama 4 Behemoth** model is delayed, having failed internal capability benchmarks
- Architecture: **Mixture of Experts (MoE)** — 288 billion active parameters across 16 experts, 2 trillion total parameters
- Originally slated for April, pushed to June, now delayed to **fall 2025 or later**
- Zuckerberg had publicly claimed it would be the "highest performing base model in the world" — the gap between claim and performance makes releasing it untenable
- **Internal tensions**: senior executives frustrated with the Llama model team; significant management changes under consideration

---

### 6. Cohere's Pivot to Enterprise Succeeds — But Illustrates the Gap

- Cohere, once a frontier model competitor to Anthropic and OpenAI, **pivoted to enterprise niche deployments** and smaller on-premise models
- Now reporting **$100M annualized revenue**, doubling pace from early 2024; 85% from long-term enterprise contracts; ~80% margins
- Testing document summarization models with Royal Bank of Canada and LG
- Despite success, the company had projected $600M in annualized revenue in 2023 — the current number reflects how large the gap is between tier-one foundation model companies and everyone else
- Broader lesson: competing with open-source frontier models is extremely difficult; pivoting to specific use cases can be viable

---

### 7. Salesforce Experiments With Agent Pricing

- Salesforce introduced a new **10 cents per action** pricing model for its AI agents
- Previously priced agents at **$2 per conversation** for outbound sales; the new model targets non-conversational, internal tasks (e.g., scanning emails for leads)
- Introduced a **Flex Agreement** allowing existing customers to reallocate spending from software subscriptions to AI agent usage
- Quote from EVP Bill Patterson: the agreement enables movement of spending "between human labor and digital labor"
- Illustrates that **nobody knows the right pricing model yet** for agents — active, real-world experimentation is ongoing

---

### 8. Walmart Prepares for Agentic Commerce

- Walmart CTO Haru Vasada stated that **AI agents, not humans, will increasingly be the consumers** making shopping decisions
- Advertising must evolve to target agents rather than people — a new form of **agent-optimized SEO** may emerge
- Concern that brands could **lose direct customer relationships** as agents make buying decisions
- Walmart is developing its own shopping agent while also preparing for third-party agents
- Vasada foresees an **industry protocol for agent-to-agent communication** between third-party and retailer agents
- Potential for real-time **dynamic pricing** to win business from agents in milliseconds
- Perplexity CEO Aravind Srinivas separately noted hotel bookings natively via Perplexity are growing — another signal of agents entering the commerce stack

---

### 9. Perplexity Fundraising — Valuation Volatility

- Perplexity in advanced talks to raise **$500M at a $14B valuation**, led by Accel Ventures
- Major jump from $9B valuation in November 2024, but down from a reported target of **$18B valuation** from March 2025
- Different lead investor from prior round (IVP to Accel) — unlike OpenAI and xAI where existing investors doubled down
- Perplexity is described as the most successful **"wrapper company"** — building a product on top of models rather than training them
- Investor volatility reflects genuine debate about long-term defensibility of product-layer companies when model companies build competing products themselves

---

### 10. Databricks Acquires Neon for $1 Billion

- **Databricks** acquired database startup **Neon** for $1 billion — its third billion-dollar acquisition in two years
- Neon allows developers to clone databases and preview changes before production; offers scalable hosting
- Key data point: **80% of databases provisioned on Neon were created automatically by AI agents**, not human developers
- Databricks is building downstream infrastructure to capture value from **agentic workforces**, not just offering agent capabilities

---

### 11. xAI's Grok Goes Off-Script — South Africa Incident and Safety Response

- On May 14, 2025, an **unauthorized modification to Grok's system prompt** caused the chatbot to inject commentary about white genocide in South Africa into completely unrelated responses across X
- Examples: a question about HBO rebrands and baseball statistics both triggered the off-topic output
- xAI confirmed the unauthorized prompt change violated internal policies and opened an investigation
- **Response**: xAI committed to publishing system prompts on **GitHub** going forward — the first such commitment from a major AI lab
- OpenAI's recent sycophancy issues were also traced to a system prompt modification, though OpenAI has not made a similar transparency commitment
- OpenAI separately announced a **safety evaluations hub** for more proactive safety communication
- Broader lesson: system prompts are a live attack surface; external transparency commitments represent a meaningful (if minimal) accountability measure

---

## Key Concepts

- **Reasoning model**: An LLM that explicitly deliberates through intermediate steps before producing a final output, as opposed to a single forward-pass generation
- **Tool use / tool call**: The ability of an AI model to invoke external tools, APIs, applications, or databases during inference to retrieve or act on information
- **Interleaved reasoning and tool use**: A model architecture that alternates between internal reasoning steps and external tool calls — the key capability claimed for new Anthropic models and already present in OpenAI's o3/o4 Mini
- **SWE model (Software Engineering model)**: A model optimized for the full software engineering workflow, not just code generation — including testing, debugging, navigating codebases, and interpreting feedback
- **Vibe coding**: Informal term for AI-assisted coding experiences where the user describes intent at a high level and the agent handles implementation
- **Codex (OpenAI)**: OpenAI's newly launched autonomous coding agent, designed for parallel task delegation by senior engineers
- **Mixture of Experts (MoE)**: A neural network architecture where only a subset of model parameters ("experts") are activated per input query, enabling very large total parameter counts with manageable compute per inference
- **Wrapper company**: A company that builds products and services on top of third-party foundation models rather than training its own
- **Per-action pricing**: An agent pricing model that charges per discrete action taken, as opposed to per seat, per conversation, or per token
- **Flex Agreement (Salesforce)**: A contract structure allowing customers to reallocate spending between traditional software subscriptions and AI agent usage
- **Agent-to-agent protocol**: A proposed industry communication standard enabling third-party shopping agents to query and interact with retailers' proprietary agents
- **System prompt**: A set of hidden instructions given to an LLM before user interaction begins, shaping its behavior, tone, and constraints — a key vector for both alignment and manipulation
- **Safety evaluations hub**: OpenAI's announced resource for publicly communicating safety testing results for their models

---

## Summary

The central message of this episode is that the AI industry is entering a period of unusually high-velocity releases, pivots, and structural shifts across the entire stack — from foundation models to infrastructure to enterprise pricing to consumer commerce. Anthropic and OpenAI are racing to deploy models that tightly integrate reasoning with tool use, while specialized players like Windsurf are launching proprietary models that target cost and scope advantages over current leaders. Meta, by contrast, is stumbling with its largest model. Enterprise companies like Salesforce and Walmart are actively experimenting with agent-native business models and pricing structures that nobody has fully figured out yet, while infrastructure companies like Databricks are positioning to capture value from the agentic layer below applications. On the safety front, two high-profile incidents — OpenAI's sycophancy regression and xAI's unauthorized prompt injection — illustrate that system prompts are both a critical control surface and an underappreciated risk vector, with xAI's commitment to publishing prompts publicly representing a new, if minimal, transparency norm. Taken together, the episode presents a picture of an industry accelerating rapidly on multiple fronts simultaneously, with enormous commercial stakes, genuine technical uncertainty, and safety governance still catching up.
