---
title: 'How AI Companies Are Using AI '
description: >-
  This episode of the AI Daily Brief (recorded July 3, 2025) examines a report
  published by Iconic, a wealth management and investment firm, surveying
  approximately 300 AI-building companies on how they are using AI internally
  and in their products....
pubDate: 2025-07-03T00:00:00.000Z
type: episode
tags:
  - ai-daily-brief-podcast
draft: false
---
# How AI Companies Are Actually Using AI

## Overview

This episode of the **AI Daily Brief** (recorded July 3, 2025) examines a report published by **Iconic**, a wealth management and investment firm, surveying approximately 300 AI-building companies on how they are using AI internally and in their products. The host (Nathaniel Whittemore, though not named in this transcript) positions the report as uniquely valuable because it reflects the practices of companies best positioned to know — the builders themselves — rather than traditional enterprise adopters. The central thesis is that AI adoption among builder companies mirrors broad enterprise trends (exiting the pilot phase, scaling, rising costs), but with notable differences in maturity, use case focus, and business model experimentation.

**Source:** AI Daily Brief podcast/video, published approximately July 3, 2025. *(No YouTube URL provided in the source material.)*

---

## Prerequisites

- Familiarity with basic AI/ML terminology (LLMs, inference, fine-tuning, model training)
- General understanding of enterprise software adoption cycles (pilot → beta → general availability → scaling)
- Awareness of major AI model providers: OpenAI, Anthropic, Google, Meta, Mistral, DeepSeek, Cohere
- Basic understanding of SaaS business models (subscription/seat-based, usage-based, outcome-based pricing)
- Familiarity with common developer tools (GitHub Copilot, Cursor, Salesforce, Zendesk, Canva)

---

## Main Points

### Survey Demographics and Company Categories

- The survey covered ~300 respondents across three categories of AI companies:
  - **AI-enabled (adding AI to existing products):** e.g., Atlassian — 31% of respondents
  - **AI-enabled (new AI product alongside core product):** e.g., Salesforce with Agentforce — 37% of respondents
  - **AI-native (core product is AI):** e.g., ElevenLabs — 32% of respondents
- AI-native companies are significantly further along: only 10% remain in beta vs. 34% of AI-enabled companies; 47% of AI-native companies are actively scaling vs. 13% of AI-enabled companies
- Both categories show ~42% general availability of their AI products

### What Companies Are Building

- Primary focus areas: agentic workflows, vertical AI applications, horizontal AI applications, AI platforms/infrastructure, and core AI models
- **62%** of AI-enabled companies and **79%** of AI-native companies are working on agents in some form
- Agents are the dominant development theme across the entire builder ecosystem

### Model Selection and Usage

- Companies use an average of **2.8 models per respondent** — suggesting multi-model strategies are the norm, not the exception
- **Model rankings by usage:** OpenAI (clear leader) → Anthropic (second) → Google and Meta (close third)
- Also represented: Mistral, DeepSeek, Cohere
- **Top considerations for model selection:**
  - Accuracy: **74%** ranked it in their top three (by far the leading factor)
  - Cost: **57%** ranked it in their top three (jumped from the lowest consideration in 2024 to second in 2025)
  - Open source: only **9%** ranked it as a key consideration
  - Vendor lock-in: only **6%** ranked it as a key consideration
- The cost jump from 2024 to 2025 reflects the transition from experimentation to full production scale, as well as competitive pressure from lower-cost models like DeepSeek

### Challenges With AI Models

- **Top model challenges reported:**
  - Hallucinations (top concern)
  - Explainability and trust
  - Improving ROI
  - Compute cost
  - **Finding the right use cases** — cited by ~25% of respondents, notable even among companies that build AI

### Agent Deployment Status

- Among **high-growth companies:** 47% are actively deploying AI agents in production; 42% are in pilot/experimentation
- Among **all other companies:** 32% actively deploying; 32% in pilot/experimentation
- The 32% active deployment figure mirrors KPMG's quarterly enterprise pulse survey finding (itself a large jump from just 11% the prior quarter), suggesting convergence across builder and enterprise sectors

### Talent and Hiring

- Dedicated AI leadership becomes common once companies reach ~$100M scale, with frequency increasing at larger sizes
- Roles being hired: AI engineers, data scientists, prompt engineers, AI design specialists, AI product managers
- **46%** say they are not hiring fast enough; of those, **60%** attribute slowness to lack of qualified candidates
- Talent is the **largest cost center**: among companies actively scaling, **36%** of AI budget goes to salaries, hiring, and upskilling
  - Compare: 12% for model training; 10% for model inference

### Cost Management

- Hardest costs to control: storage, training, model retraining, and inference (all ranked by 40–50% of respondents)
- **API usage fees** are the hardest by far: **70%** ranked them as a top challenge
- Despite open source ranking low as a model selection criterion, **41%** said they are considering a shift to open source models specifically to control costs

### ROI Measurement and Internal AI Usage

- **Top ROI metrics tracked:**
  - Productivity gains: **75%**
  - Cost savings: **51%**
  - Revenue uplift: only **20%**
- This contrasts with KPMG enterprise data showing ~46% of large enterprises equally split between productivity/efficiency and revenue growth — explained by the relative youth of these builder companies, which are still establishing their business models rather than disrupting mature ones
- Internal AI productivity budgets are set to **nearly double in 2025**, with companies spending 1–8% of total revenue
- Budget sourcing is shifting away from dedicated innovation budgets (47% in 2024 → 23% in 2025) toward R&D and business unit budgets, reflecting the move from experimentation to operational deployment
- **Finding the right use cases** is the top internal deployment challenge: **46%** ranked it first

### Most Common Internal Use Cases

- Coding assistance: **77%**
- Content generation and writing: **65%**
- Documentation and knowledge retrieval: **57%**
- Product and design: **56%**
- Sales productivity: **45%**
- Customer engagement/service: **42%** (lower figure attributed to younger companies having less mature customer service organizations)

### Productivity Impact of Use Cases

- Most organizations see productivity gains of **15–30%** across use cases
- **Coding assistance** is the standout: high-growth companies report **33%** of total code written by AI; even non-high-growth companies report **27%**
- These figures exceed publicly reported numbers from Google and Microsoft

### Pricing Models and Business Model Experimentation

- Current pricing breakdown:
  - Subscription/seat-based: **36%**
  - Hybrid: **38%** (most popular)
  - Usage-based: **19%**
  - Outcome-based: **6%**
- **37%** of respondents plan to change their AI pricing model in the next 12 months, moving toward consumption- and outcome-based models

### Tech Stack: Tools the Builders Use

- **Coding assistance:** GitHub Copilot (~75% of development teams) and Cursor (~50%) — a clear two-player race; Cursor is closing the gap rapidly
- **Model evaluation:** No clear standalone leader; **20%** of respondents did not know which tool they use; ~25% admitted to having no evaluation tool in place — identified as a major gap and growth opportunity
- Other stack categories covered in the report (recommended for direct review): model training/fine-tuning, LLM/AI application development, monitoring/observability, inference optimization, model hosting, data processing, vector databases, synthetic data, DevOps/MLOps, product and design

### Incumbent Advantage in Enterprise AI Tooling

- Even among AI-native startups, incumbent platforms dominate embedded AI usage:
  - **Sales:** Teams default to Salesforce's built-in AI features (forecasting, recommendations, opportunity scoring)
  - **Marketing:** Canva's generative features dominate for visuals and content
  - **Customer engagement:** Zendesk and Salesforce embedded AI features win over standalone conversational AI platforms
- New entrants have more opportunity in areas where AI represents a genuinely new paradigm, such as knowledge retrieval and documentation
- This presents a significant competitive challenge for vertical AI startups competing against deeply entrenched legacy platforms

---

## Key Concepts

- **AI-enabled company:** An organization that adds AI capabilities to an existing product or builds a secondary AI product alongside its core offering
- **AI-native company:** An organization whose primary and core product is itself an AI product
- **Agentic workflows / AI agents:** Autonomous AI systems deployed to execute multi-step tasks with minimal human intervention
- **General availability (GA):** The stage at which a product is released for broad customer use, as opposed to beta or limited testing
- **Scaling (product stage):** The phase in which a product moves beyond GA into active growth and broad deployment across large user bases
- **Model evaluation (evals):** Systematic processes and tooling used to assess AI model performance, accuracy, and reliability in production
- **Vendor lock-in:** Dependency on a single vendor's technology that makes switching difficult; rated low as a concern in this survey
- **Outcome-based pricing:** A billing model in which customers pay based on measurable results or outcomes delivered, rather than seats or usage volume
- **Hybrid pricing model:** A combination of subscription/seat-based and usage-based pricing structures
- **API usage fees:** Costs incurred by companies when accessing AI model capabilities via third-party APIs; identified as the hardest cost to control
- **Prompt engineering:** The practice of designing and optimizing inputs to AI models to improve output quality; still an active hiring category
- **MLOps / DevOps for AI:** Operational practices and tooling for deploying, monitoring, and maintaining machine learning models in production
- **Agent readiness audit:** A framework (referenced by the host) for rapidly identifying the most valuable AI use cases within an organization

---

## Summary

The Iconic report on how AI-building companies use AI confirms that the industry has broadly moved out of the experimentation and pilot phase into active production and scaling — a transition visible in rising cost sensitivity, shifting budget sourcing from innovation funds to core business units, and widespread agent deployment. The builders largely mirror enterprise adoption trends but differ in important ways: they prioritize productivity gains over revenue growth (reflecting their early-stage nature), use an average of nearly three AI models simultaneously, and have coding assistance as their single highest-impact use case, with AI now authoring 27–33% of code across respondent companies. Despite being the most technically sophisticated actors in the ecosystem, these companies still struggle with finding the right internal use cases, controlling API costs, and establishing rigorous model evaluation practices — the last of which the host identifies as a major near-term growth opportunity. Incumbent platforms (Salesforce, Zendesk, Canva) retain a strong advantage even among startups, complicating the path for vertical AI challengers, while the coding tool space shows the clearest disruption dynamic with Cursor rapidly challenging GitHub Copilot's dominance.
