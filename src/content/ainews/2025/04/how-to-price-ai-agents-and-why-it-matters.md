---
title: 'How to Price AI Agents (And Why It Matters) '
description: >-
  This episode of the AI Daily Brief (recorded April 26, 2025) examines one of
  the most consequential open questions in the AI industry: how should AI agents
  be priced, and what are the downstream implications for business models,
  company design, an...
pubDate: 2025-04-26T00:00:00.000Z
type: episode
tags:
  - ai-daily-brief-podcast
draft: false
---
# How to Price AI Agents and Why It Matters

## Overview

This episode of the *AI Daily Brief* (recorded April 26, 2025) examines one of the most consequential open questions in the AI industry: how should AI agents be priced, and what are the downstream implications for business models, company design, and enterprise adoption? The host argues that agent pricing is not merely an operational detail for startups but a structurally important question that will shape the trajectory of the entire AI and agent industry. The episode also covers two headline items: a U.S. executive order on AI education and OpenAI's revenue projections through 2029.

*Source video URL: not available*

---

## Prerequisites

- Basic familiarity with SaaS (Software-as-a-Service) pricing models
- Understanding of what AI agents are and how agentic workflows differ from single-turn LLM queries
- General awareness of the AI coding assistant market (e.g., Cursor, Windsurf/Codeium)
- Familiarity with concepts such as inference costs, tokens, and gross margin
- Awareness of the distinction between software budgets and labor/headcount budgets in enterprises

---

## Main Points

### 1. Headline: U.S. Executive Order on AI Education

- President Trump signed an EO directing federal resources toward AI literacy and workforce training for K–12 students and educators.
- A task force led by the Office of Science and Technology Policy director was established, including the Secretaries of Agriculture, Labor, Energy, and Education.
- Key deliverables include a **Presidential Artificial Intelligence Challenge** prize, online K–12 AI literacy resources via public-private partnerships, and federal grant funding for teacher training.
- The Department of Labor is directed to fund AI apprenticeships and certification programs offering high school students workforce credentials.
- A stated motivator is competitive pressure from China, where multiple provinces have already mandated AI education at all grade levels under a national education overhaul.

---

### 2. Headline: OpenAI Revenue Projections Through 2029–2030

- Investor documents project OpenAI reaching **$125 billion in revenue by 2029** and **$174 billion by 2030** (40% year-over-year growth), compared to $3.7 billion in 2023 (itself ~300% YoY growth).
- The $125B figure is not aspirational — it is approximately what OpenAI needs to reach profitability, given projected cash burn of **$46 billion over four years**.
- Gross margins are expected to improve from ~40% today to ~70% by 2029, driven by declining inference costs (still below the ~74% cloud software industry average).
- Revenue breakdown by 2029:
  - **ChatGPT subscriptions**: $50B (implying billions of paid users or significant enterprise deals)
  - **Packaged agents** (e.g., Operator): $29B, up from $2B today
  - **API usage**: $22B, up from $2B today
- User growth targets by 2030: 3B monthly active users, 2B weekly active users, 900M daily active users (currently at 500M weekly, up 60% since December).

---

### 3. Headline: OpenAI Image Generation API and Open-Source Model

- OpenAI's image generation API is now publicly available to developers, priced at **$40 per million output tokens** (~$0.02/low-quality image, $0.07/medium, $0.19/high).
- Corporate partners already using or integrating it include Adobe, Canva, Figma, Wix, Instacart, GoDaddy, and Airtable.
- OpenAI is planning an open-source reasoning model targeting a **summer 2025 release**, led by VP of Research Aidan Clark.
  - Text-only, designed to run on high-end consumer hardware.
  - Fewer commercial restrictions than comparable models from Google or Meta, positioning it against DeepSeek.
  - A proposed architecture feature would allow the open model to "hand off" difficult queries to OpenAI's closed models.

---

### 4. The Windsurf Price War: Catalyst for the Agent Pricing Conversation

- Windsurf dropped its Pro tier to **$15/month** (500 prompts), Tech to **$30/month**, and Enterprise to **$60/month**.
- Critically, Windsurf **eliminated charges for tool calls** within agentic workflows — users pay only per user prompt, not per intermediate agent action.
- CEO Rob Hu positioned this as a direct competitive move against Cursor, where complex agentic prompts can cost **$1–$2 each** under consumption-based pricing.
- The move raises a key question: is Windsurf profitable at these levels, or is it subsidizing users to capture market share ahead of a rumored **$3 billion OpenAI acquisition**?
- This pricing decision illustrates the broader tension between flat-rate and consumption-based models as agentic workflows grow more complex.

---

### 5. The Two Countervailing Forces in AI Cost Structure

- As articulated by Aaron Levy (Box): two opposing dynamics are simultaneously at work in AI pricing:
  1. **Models are getting cheaper to run** (declining cost per token).
  2. **Use cases require dramatically more inference** — deep research tasks can use up to **100x the compute** of a standard query; coding agents similarly balloon in resource consumption.
- This creates a strategic option for AI companies: **price in anticipation of the cost curve** rather than purely on current cost of goods sold.
  - Companies can unlock use cases today that are marginally uneconomical but will soon be cost-effective, betting on continued efficiency improvements from frontier labs and open-weights model providers.

---

### 6. A Framework for Agent Pricing Models (Manny Medina / Paid)

Manny Medina, founder of Paid, analyzed dozens of AI agent startups and identified **four pricing quadrants**:

| Model | Description | Best For |
|---|---|---|
| **Per workflow** | Pay per completed multi-step process | Agents with clear intermediate deliverables |
| **Per outcome** | Pay per completed objective (regardless of workflows used) | Applications with predictable performance and defined success metrics |
| **Per agent (FTE replacement)** | Fixed monthly fee per agent instance | Agents handling broad job functions with consistent, predictable workloads |
| **Per action / consumption** | Pay per discrete agent action | Varied, unpredictable task frequency or volume |

- The **FTE replacement model** draws from labor/headcount budgets, which are estimated to be **10x larger** than software budgets — a significant strategic advantage.
- The **consumption model** is more transparent but exposes vendors to undercutting by competitors with lower infrastructure costs.

---

### 7. Labor Budget vs. Cost-of-Goods-Sold Pricing: A Fundamental Tension

- Enterprises evaluating agents face a choice: price agents relative to **equivalent human labor cost** or relative to **actual cost of goods sold plus margin**.
- Agent vendors prefer the labor reference because those budgets are radically larger — e.g., positioning a $40,000/year agent against a $100,000/year junior developer.
- **Competitive pressure** undermines this: a provider who can deliver the same agent for a few thousand dollars in COGS has strong incentive to undercut the labor-anchored price.
- A second complication: many agent use cases have **no meaningful human labor equivalent** because the equivalent human cost would have been prohibitively high and was never budgeted. In these cases, vendors must price closer to COGS because the labor comparison is irrelevant to the customer.
  - *Example cited*: Conducting voice agent interviews with all 200 members of a pharmaceutical department. Pricing against what McKinsey would charge for the same exercise would be fictitious — the client never would have commissioned it at that price.

---

### 8. The Ceiling Is Not Zero: Moats and Premium Agent Pricing

- A counterpoint raised from Signal: agents with genuine moats — proprietary data, evaluation frameworks, workflow lock-in, and established trust — could potentially **charge above human-equivalent rates** and still be the obvious choice.
- Differentiating factors beyond cost: **24/7 availability, near-zero error rates, infinite scalability**.
- The competitive floor for AI labor may trend toward zero, but the ceiling for highly specialized, moat-protected agents could be effectively uncapped in the near term.
- *Example*: A voice agent for interviews is available at 1:30 a.m. without scheduling — a qualitatively better experience than human analysts, not merely a cheaper one.

---

## Key Concepts

- **AI Agent**: An AI system that autonomously executes multi-step tasks, using tools and making decisions to complete a defined objective.
- **Agentic workflow**: A sequence of intermediate steps, tool calls, and decisions an agent takes to complete a task — distinguished from a single-turn model query.
- **Inference cost**: The computational cost incurred each time a model processes a query or generates a response.
- **Per-workflow pricing**: A model where customers pay for each completed multi-step process, regardless of how many actions it required.
- **Per-outcome pricing**: A model where customers pay only when a defined objective is successfully achieved.
- **FTE replacement model**: Pricing an AI agent as a fixed monthly or annual fee analogous to a human employee's salary, drawing from headcount/labor budgets.
- **Consumption / per-action pricing**: A usage-based model where customers pay for each discrete action the agent takes.
- **Labor budget vs. software budget**: The distinction between what enterprises allocate for human employees (labor) versus software licenses — labor budgets are typically ~10x larger.
- **Cost curve pricing**: Pricing a product in anticipation of future reductions in cost of goods sold, accepting lower margins now to unlock use cases and market share.
- **Moat**: A durable competitive advantage — in agent pricing, this could include proprietary data, workflow lock-in, evaluation frameworks, or hard-won user trust.
- **Tool calls**: Intermediate API or system calls made by an agent during a workflow (e.g., web searches, code execution) — a significant source of cost and pricing complexity in agentic systems.

---

## Summary

The host argues that AI agent pricing is not a narrow commercial question but a structurally defining issue for the AI industry: how agents are priced will determine which use cases get built, how AI companies are designed, and how enterprises conceptualize and budget for AI adoption. Using Windsurf's aggressive price cut — eliminating charges for agentic tool calls — as a concrete catalyst, the episode maps the landscape of competing pricing philosophies: per workflow, per outcome, per agent (FTE replacement), and per action/consumption. A central tension runs throughout: agent vendors want to price against human labor budgets (which are far larger than software budgets), but competitive dynamics and the nature of genuinely novel use cases often force pricing back toward cost of goods sold plus margin. Simultaneously, because inference costs are falling even as individual use cases demand dramatically more compute, companies face a strategic choice about whether to price for today's economics or tomorrow's. The episode closes on an optimistic note — agents that develop genuine moats may ultimately command above-human-rate pricing precisely because they offer capabilities (perpetual availability, infinite scale, high reliability) that no human workforce can match.
