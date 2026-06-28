---
title: How the Best Companies Use AI
description: >-
  This episode of The AI Daily Brief (recorded April 19, 2026) synthesises
  several major consulting studies and a detailed company case study to answer a
  single question: what separates organisations that are extracting
  transformational value from A...
pubDate: 2026-04-19T00:00:00.000Z
type: episode
tags:
  - ai-daily-brief-podcast
draft: false
---
# How the Best Companies Use AI

## Overview

This episode of *The AI Daily Brief* (recorded April 19, 2026) synthesises several major consulting studies and a detailed company case study to answer a single question: what separates organisations that are extracting transformational value from AI from those that are not? The host draws on a PwC study, McKinsey's *AI Transformation Manifesto*, an Andreessen Horowitz opinion piece by George Savolka, and an internal post by Seb Gotogen (head of internal AI at Ramp) to argue that the leading companies are not merely using AI for efficiency—they are restructuring their organisations around it as a growth and coordination technology.

*Source video URL: not available (internal/unlisted recording)*

---

## Prerequisites

- Familiarity with large language models and coding agents (e.g., Claude Code, OpenAI Codex)
- Basic understanding of enterprise software concepts: SSO, CRM (Salesforce), ticketing systems (Zendesk), project management tools (Notion, Linear)
- General awareness of organisational concepts: OKRs, EBITDA, lines of business, moats
- Familiarity with prompt engineering and context management in AI workflows

---

## Main Points

### The Growing Gap Between AI Leaders and AI Laggards

- A PwC study found that **75% of AI's economic gains are captured by just 20% of companies**.
- Leading companies are not simply doing the same work more efficiently; they are using AI to identify and pursue new growth opportunities.
- AI leaders are **2–3× more likely** to use AI to pursue growth opportunities and **2.6× more likely** to report that AI improves their ability to reinvent their business model.
- The gap is widening because leaders are thinking structurally about AI, not tactically.

### McKinsey's 12 Themes Separating AI Leaders from Laggards

- **Technology alone does not create advantage**—enduring, adaptive organisational capabilities do. Companies that are "wired" to build systems outperform those that simply deploy tools.
- Leaders focus AI investment on **economic leverage points** (e.g., supply chain integration in automotive) rather than broad productivity initiatives.
- McKinsey studied 20 AI-leader companies across industries and found that AI-driven business transformations delivered a **20% EBITDA uplift**, broke even in **1–2 years**, and generated **$3 of incremental EBITDA per $1 invested**.
- Senior business leaders—not just IT departments—must develop AI literacy and take ownership of transformation in their own domains.
- More than **70% of AI talent should be in-house**; outsourcing the transformation to consultants undermines the capability-building that is itself the point.
- Data is consistently the **constraining factor** in organisations not using AI well; treating data as an ongoing operational discipline (not a one-time project) is a differentiator.
- **Agentic engineering**—ingesting unstructured data, extending AI platforms with agent capabilities, automating guardrails, and codifying repeatable playbooks—is the next major capability frontier.
- Speed and continuous relearning are cited as defining organisational advantages as skill half-lives shorten.

### Individual AI vs. Institutional AI (George Savolka, A16Z)

- While AI has made individuals ~10× more productive, **no company has become 10× more valuable** as a result—individual gains do not automatically aggregate into institutional gains.
- Savolka identifies **seven pillars of institutional intelligence**; the key insight is that institutional AI is a *different layer*, not a sum of individual AI outputs.
- **Coordination** is the first and most critical pillar: without a coordination layer, employees with their own ChatGPT habits and prompting styles produce outputs that do not connect, creating organisational chaos rather than compounded advantage.
- Institutional AI must also filter signal from the noise of massively expanded AI-generated content and maintain **professional objectivity** where individual AI tends toward over-alignment with the individual user's goals.
- The distinction in objective: *individual AI saves time; institutional AI scales revenue.*

### Case Study: Ramp's Internal AI Platform ("Glass")

- Ramp co-founder Eric Gleeman reported that **99% of Ramp employees use AI daily**, but most were stuck due to painful setup, not model limitations.
- Ramp built *Glass*, an internal AI workspace, around three principles:
  1. **Don't limit anyone's upside** — avoid dumbing down the interface; make complexity invisible while preserving full capability.
  2. **One person's breakthrough becomes everyone's baseline** — workflows discovered by one employee should not stay siloed.
  3. **The product is the enablement** — targeted nudges within the tool teach faster than workshops.
- Glass comes **auto-configured on install**: employees authenticate once via SSO and all internal tools (Salesforce, Gong, Ramp's own CLI, etc.) are immediately available.
- Agent **skills** (markdown files instructing the agent on a specific task) are shared through an internal marketplace called *Dojo*; currently over 350 skills are available.
- An AI-powered recommendation layer called *Sensei* surfaces the 5 most relevant skills to a given employee based on their role, connected tools, and recent work—eliminating the need to browse 350 options.
- A **memory system** is initialised on first login from authenticated connections (Slack, Notion, Calendar, Linear tickets), and a **synthesis and cleanup pipeline** runs every 24 hours so the agent stays current without users re-explaining context.
- Employees can schedule **automations** (daily, weekly, or custom cron) that act autonomously—e.g., posting to Slack—without the employee being at their device.

### Why Ramp Built Glass In-House (Not Bought It)

- **Internal AI productivity is a moat**: handing that moat to a vendor externalises a core competitive capability.
- **Speed**: owning the tool enables same-day fixes; waiting on a vendor's roadmap is too slow.
- **Product feedback loop**: problems solved internally (memory, skill distribution, surfacing functionality through usage) directly inform Ramp's external finance product, giving the team conviction before shipping to customers.

### The Broader Design Principle: Raise the Floor, Not Lower the Ceiling

- The conventional enterprise instinct is to simplify AI tools for the median user; Ramp's experience argues the opposite—make full capability accessible to everyone.
- AI itself (as tutor and build partner) changes the equation: organisations no longer need to limit employees' AI ceiling because of assumed technical skill gaps.
- Learning by doing, accelerated by a well-configured tool, outperforms structured training: users who installed a skill on day one and got an immediate result learned faster than those who attended workshops.
- The compounding effect: when the floor rises for everyone simultaneously, the organisation's aggregate capability grows non-linearly.

---

## Key Concepts

- **AI Leaders vs. AI Laggards**: McKinsey's taxonomy distinguishing companies that use AI for structural business transformation from those using it only for incremental efficiency.
- **Economic leverage points**: The specific parts of a business model where AI investment produces the highest impact (e.g., supply chain in automotive).
- **Institutional AI**: A coordination and context layer that aligns and amplifies the outputs of individual AI users toward shared organisational objectives; distinct from the sum of individual AI use.
- **Harness**: The configured environment, integrations, memory, and workflows built around an AI model that determines how much of the model's capability is actually accessible and usable.
- **Agentic engineering**: The practice of building, deploying, and governing AI agents that can take autonomous, multi-step actions within organisational systems.
- **Skills (in Glass/Dojo context)**: Markdown files that instruct an AI agent how to perform a specific, repeatable task; shareable across an organisation.
- **Dojo**: Ramp's internal marketplace for sharing agent skills across the organisation.
- **Sensei**: Ramp's AI-powered skill recommendation layer within Glass that personalises skill discovery based on role and context.
- **Context engineering**: The practice of designing AI systems so that all relevant organisational context (tools, projects, people, documents) is available to the agent by default.
- **Memory pipeline**: An automated background process (at Ramp, running every 24 hours) that synthesises prior sessions and connected tool updates to keep the agent's context current.
- **Code factory**: An emerging term for end-to-end automated coding infrastructure where agents handle large portions of the software development lifecycle.

---

## Summary

The central argument of this episode is that the companies extracting the most value from AI in 2026 are not the ones that have deployed the most tools or achieved the greatest individual productivity gains—they are the ones that have built *systems* that coordinate, contextualise, and compound those individual gains into institutional capability. Drawing on PwC data, McKinsey's transformation research, and Savolka's framework, the host establishes that a structural divide has opened between AI leaders, who treat AI as a growth and business-model transformation technology, and laggards, who treat it as an efficiency tool. The Ramp case study then provides a concrete blueprint: build a fully configured, context-rich, memory-enabled internal AI harness; share breakthroughs organisationally through a skill marketplace; and resist the instinct to simplify for the lowest common denominator, instead raising the floor for everyone simultaneously. The episode concludes that agentic engineering is no longer solely the domain of software teams—it is becoming the work of entire organisations—and that companies which own this capability internally, rather than outsourcing it, will compound advantages their competitors cannot match.
