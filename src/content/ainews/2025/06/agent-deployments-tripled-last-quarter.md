---
title: Agent Deployments Tripled Last Quarter
description: >-
  This episode of the AI Daily Brief (dated June 28, 2025) covers two primary
  topics: a set of AI industry headlines and a deep-dive into enterprise AI
  agent adoption. The central thesis of the main episode is that AI agents have
  crossed a critical ...
pubDate: 2025-06-28T00:00:00.000Z
type: episode
tags:
  - ai-daily-brief-podcast
url: 'https://www.patreon.com/posts/132544561'
draft: false
---
# AI Agent Deployments Tripled Last Quarter — Study Notes

## Overview

This episode of the **AI Daily Brief** (dated June 28, 2025) covers two primary topics: a set of AI industry headlines and a deep-dive into enterprise AI agent adoption. The central thesis of the main episode is that AI agents have crossed a critical threshold — moving from pilot experimentation into full production deployment at large enterprises. The episode draws primarily on KPMG's latest quarterly pulse survey of C-suite leaders, supplemented by commentary from Salesforce CEO Mark Benioff and a VentureBeat Transform conference speaker. The host's name is not stated explicitly in the transcript.

Source video URL: Not provided.

---

## Prerequisites

- Basic familiarity with AI terminology: large language models (LLMs), reasoning models, AI agents, and inference compute
- Understanding of enterprise software adoption cycles (pilot → production)
- Awareness of the competitive landscape among major AI labs (OpenAI, Meta/Llama, DeepSeek, Anthropic)
- General knowledge of U.S.–China semiconductor export control policy
- Familiarity with the distinction between "assistant AI" (e.g., ChatGPT for knowledge work) and "agentic AI" (autonomous, multi-step task execution)

---

## Main Points

### 1. Goldman Sachs: AI CapEx Is in the Middle Innings, Not the Late Innings

- Sung Cho, Goldman Sachs co-head of public tech investing, argued that market pessimism about AI capital expenditure earlier in the year was misplaced.
- Three factors shifted sentiment: Meta's aggressive researcher hiring, the surge in inference compute demand driven by reasoning models, and U.S. policy changes opening foreign NVIDIA chip sales.
- Goldman's current hyperscaler CapEx projections: **$330B in 2025** (up ~50% year-over-year), **$391B in 2026**, and **$427B in 2027**.
- The DeepSeek scare in January was a market misread: cheap training costs are negligible relative to the massive inference demands of reasoning models.
- Commentary from financial observers described this as "the biggest capital cycle since railroads."

---

### 2. DeepSeek's R2 Model Stalled by Export Controls and Infrastructure Limits

- DeepSeek's R2 reasoning model (follow-up to the viral R1) was originally slated for May 2025 release but has not shipped; its CEO is reportedly unsatisfied with it.
- Goals for R2 included improved coding ability and multilingual reasoning beyond English.
- A key bottleneck: R2 runs best on NVIDIA H20 chips, which were banned from export to China in April 2025. Chinese cloud infrastructure cannot handle the anticipated inference demand surge.
- R2 was intended to showcase Huawei's Ascend chips as an alternative, but hardware performance is crimping the rollout.
- The episode frames this as evidence that U.S. export controls have been more effective than widely believed.

---

### 3. Meta's Superintelligence Team Continues to Take Shape

- Researcher Trappit Banzel, a foundational contributor to OpenAI's O1 reasoning model, has joined Meta.
- Meta is reportedly in talks to acquire AI voice startup Play.ai.
- Mark Zuckerberg's target of ~50 AI researchers for a superintelligence team is roughly one-quarter filled (~12 names confirmed).
- Rumors of $100M sign-on bonuses were publicly denied by at least one recruit (Lucas Beyer).
- The host's interpretation: the caliber of researchers being recruited signals ambitions beyond incremental Llama improvements — likely a direct push toward superintelligence.

---

### 4. Anthropic Data Challenges the AI Companionship Narrative

- A wave of media coverage (Harvard Business Review, Forbes, Wall Street Journal) suggested AI companionship and therapy are now primary use cases.
- Anthropic's analysis of anonymized Claude usage data found: only **2.9% of interactions** are "affective conversations"; companionship and roleplay combined account for **less than 0.5%** of conversations.
- This aligns with prior OpenAI internal research.
- Counterargument from Justine Moore (a16z): Claude users skew toward work and coding; companionship use is concentrated on other platforms and is undercounted by enterprise-focused data.
- The episode concludes that the actual extent of AI companionship use remains an open and evolving question, with likely generational variation.

---

### 5. KPMG Pulse Survey: Agent Deployments Tripled in Q2 2025

- Survey base: 130+ C-suite/business leaders at U.S. companies with over $1B revenue.
- **Historical trajectory:**
  - Early 2024: AI investment recognized as necessary, but ROI measurement was unclear.
  - Q4 2024 → Q1 2025: Daily knowledge assistant usage (e.g., ChatGPT) jumped from 22% to 58% of workers; agent piloting nearly doubled from 37% to 65% of organizations.
- **Q2 2025 findings:**
  - Agent piloting dropped from 65% to 57% — not due to declining interest, but because organizations moved to deployment.
  - Exploration-only stage dropped from 25% to 10%.
  - **Full agent deployments tripled: from ~10% to ~33% of organizations.**
  - 90% of organizations are now past the experimentation stage.

---

### 6. What Enterprises Are Using Agents For

- Agent use is balanced between efficiency/cost reduction and revenue growth:
  - 36% focused mostly on efficiency with some revenue exploration
  - 18% focused mostly on revenue with some efficiency prioritization
  - **46% equally focused on both** — the largest single group
  - 0% focused exclusively on one dimension alone
- Leader sentiment about agents over the next 12 months:
  - 87% expect agents to prompt workforce upskilling
  - 87% expect agents to redefine performance metrics
  - 86% believe agents will enhance job satisfaction by managing workload
  - **82% expect agents to become "valued teammates and contributors"**
- **82% believe their industry's competitive landscape will look different within 24 months** due to AI.

---

### 7. Barriers and Workforce Readiness Challenges

- Top barriers to agent deployment:
  - Systems complexity: 39%
  - Workforce resistance to change: 47%
  - Technical skills gaps: **59%** (the leading barrier)
- Strategies organizations are using to close skills gaps:
  - 69%: Teaching prompt engineering skills
  - 49%: Creating agent-specific sandbox environments for employee practice
  - 41%: AI agent shadowing programs (employees observe expert users)
  - 39%: Developing role-specific guidelines for agent collaboration
- Data privacy concerns and data quality concerns have both increased as agents scale.

---

### 8. Salesforce as a Case Study in Enterprise AI Transformation

- Salesforce CEO Mark Benioff claimed AI is now doing **30–50% of work** at Salesforce, including software engineering and customer service.
- Salesforce's AI customer service agents have reached **93% accuracy**, sufficient to handle entire roles autonomously.
- The host's view: companies that reinvest efficiency gains into expanded products, services, and total addressable market will outcompete those that treat AI purely as a cost-cutting tool.

---

### 9. Production-Stage Challenges: Non-Deterministic Agent Behavior

- May Habib (Writer CEO), speaking at VentureBeat Transform, highlighted that agents in production do not reliably follow prescribed rules — they are outcome-driven and adaptive, with behavior emerging only in real-world environments.
- Enterprises are struggling to manage **non-deterministic agent behavior** at scale.
- The host illustrated this with a first-person example: constrained voice agents for structured audits behave unnaturally compared to agents given more freedom in less structured contexts.
- The challenge is calibrating agent autonomy: prescriptive tasks require constrained agents; open-ended contexts may benefit from freer agents — but managing this distinction at enterprise scale is non-trivial.

---

## Key Concepts

- **AI CapEx (Capital Expenditure):** Investment by large technology companies (hyperscalers) in AI infrastructure including data centers, chips, and compute capacity.
- **Reasoning models:** AI models that perform extended, step-by-step logical inference (e.g., OpenAI O1, DeepSeek R1), which require substantially more inference compute than standard models.
- **Inference compute:** The computing resources required to run a trained AI model when responding to user queries, as distinct from the compute used during model training.
- **AI agents:** Autonomous AI systems that can take multi-step actions, interact with tools and environments, and complete tasks with minimal human intervention — distinct from simple chat assistants.
- **Pilot stage vs. production deployment:** The difference between organizations testing agents in limited, controlled settings (pilots) versus integrating them into live business operations at scale.
- **Non-deterministic behavior:** The property of AI agents producing variable outputs given the same inputs, making their behavior harder to predict or script than traditional software.
- **KPMG Quarterly Pulse Survey:** A longitudinal survey of C-suite leaders at large U.S. enterprises tracking AI adoption attitudes and execution, used here as a primary data source.
- **Export controls (NVIDIA H20/H100 chips):** U.S. government restrictions limiting the sale of advanced semiconductor chips to China, intended to constrain Chinese AI development.
- **Upskilling:** Retraining or expanding the skills of employees whose roles are being partially displaced or transformed by automation or AI agents.
- **Efficiency AI vs. Opportunity AI:** A framing used by the host to distinguish AI deployed primarily to reduce costs and headcount (efficiency) from AI deployed to open new revenue streams and business models (opportunity).
- **Affective conversations:** Interactions with AI systems that involve emotional content, therapy, companionship, or personal support, as categorized in Anthropic's usage analysis.
- **Hyperscalers:** Large cloud and technology infrastructure companies (e.g., Microsoft, Google, Amazon, Meta) that invest heavily in AI compute capacity.

---

## Summary

The central message of this episode is that enterprise AI adoption has crossed a structural inflection point: AI agents, which were predominantly in pilot or exploration phases at the start of 2025, have tripled their rate of full production deployment by Q2 2025, with one-third of large U.S. enterprises now running agents in live operations. The KPMG survey data shows that leaders at major companies are no longer debating whether to deploy agents, but are actively managing the workforce, data, and behavioral challenges that come with operating them at scale. This shift is occurring in parallel with a broader industry trend of accelerating AI infrastructure investment — Goldman Sachs projects hyperscaler CapEx reaching $427 billion by 2027 — and against a backdrop of competitive dynamics in which Meta is aggressively recruiting frontier AI researchers, DeepSeek's next-generation model is stalled by U.S. export controls, and companies like Salesforce report AI handling 30–50% of internal workloads. The episode consistently argues that the most durable competitive advantage will accrue not to organizations that use AI solely to cut costs, but to those that reinvest efficiency gains into new products, markets, and capabilities.
