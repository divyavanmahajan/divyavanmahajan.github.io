---
title: Agent Pilots Nearly Doubled Last Quarter
description: >-
  This episode of The AI Daily Brief (published April 21, 2025) covers two main
  topics: a headline segment on hallucination rates in OpenAI's latest reasoning
  models, and a main segment analyzing KPMG's Q1 2025 quarterly AI Pulse survey.
  The central...
pubDate: 2025-04-21T00:00:00.000Z
type: episode
tags:
  - ai-daily-brief-podcast
draft: false
---
# Study Document: Enterprise AI Adoption Accelerating — Agent Pilots Nearly Doubled Last Quarter

## Overview

This episode of *The AI Daily Brief* (published April 21, 2025) covers two main topics: a headline segment on hallucination rates in OpenAI's latest reasoning models, and a main segment analyzing KPMG's Q1 2025 quarterly AI Pulse survey. The central thesis is that enterprise AI adoption is rapidly maturing — moving from experimentation toward deployment — with AI agents emerging as a focal point, while hallucination in reasoning models simultaneously becomes a more pressing practical concern. The host is the creator/presenter of *The AI Daily Brief* (name not explicitly stated in transcript).

**Source video URL:** Not provided.

---

## Prerequisites

- Basic familiarity with large language models (LLMs) and generative AI
- Understanding of the difference between reasoning models and standard language models (e.g., OpenAI's O-series vs. GPT series)
- General awareness of enterprise software adoption cycles (pilot, deployment phases)
- Familiarity with AI benchmarking concepts
- Basic understanding of AI agents and agentic workflows
- Awareness of "vibe coding" as a trend in AI-assisted software development

---

## Main Points

### 1. Hallucinations Worsen as Reasoning Models Scale Up

- OpenAI's internal *PersonQA* benchmark (designed to elicit hallucinations against publicly known facts) revealed a troubling trend across their O-series models.
- O1 hallucinated **16%** of the time; O3 roughly doubled that at **33%**; O4 Mini reached **48%**.
- OpenAI's explanation for O3: longer reasoning chains create more opportunities for inaccurate claims — more thinking produces both more correct *and* more incorrect outputs.
- O4 Mini's result was attributed to smaller models having less world knowledge.
- Mitigation exists: access to web search appears to reduce hallucination rates.
- Practical consequence: developer Patrick Bade reported O3 produces hallucination-filled code snippets, making it unreliable for low-level implementation tasks despite being strong for high-level planning.

### 2. Independent Benchmarkers Cannot Replicate OpenAI's O3 Claims

- Epic AI attempted to reproduce OpenAI's claimed **25%** score on the Frontier Math benchmark (an "ultra-hard" benchmark where no prior model exceeded 2%).
- Epic AI achieved only **10%** — still a record for external evaluators, but far below OpenAI's claim.
- Possible explanations include: OpenAI used a more powerful internal scaffold, more test-time compute, or a different subset of the benchmark.
- OpenAI has acknowledged that the production version of O3 is more optimized for speed and real-world use, not peak benchmark performance.
- Key takeaway: benchmarks should be treated as a limited signal; real-world task performance is the truer measure.

### 3. Vibe Coding Becomes a Must-Have Feature for Design Platforms

- Figma launched an AI app maker accepting text prompts, Figma files, and images, returning fully functional apps — powered by Anthropic's Claude 3.7 Sonnet.
- This follows Canva's introduction of a similar vibe coding tool two weeks prior.
- The host frames this as a structural trend: AI-assisted prototyping is rapidly becoming a baseline feature expectation for design platforms.

### 4. Cursor's AI Support Agent Hallucinated a Fake Policy

- Users reported being logged out of Cursor when switching devices; support agent "Sam" falsely stated this was an intentional policy ("one device per subscription as a core security feature").
- The response went viral on Reddit, causing subscription cancellations — before it emerged that Sam was an AI support bot and the policy did not exist.
- Cursor co-founder Michael Truel clarified no such policy exists and the AI response was incorrect.
- This incident is cited as a real-world example of hallucinations causing tangible business harm, directly connecting the headline to the main episode theme.

### 5. Enterprise AI Investment and Usage Are Rising Sharply (KPMG Q1 2025)

- **Survey scope:** ~130 executives at companies with $1B+ revenue; quarterly longitudinal study providing current data.
- Planned Gen AI spending increased from **$89M** (Q4 2024) to **$114M** (Q1 2025) per organization over the next year.
- Weekly usage of knowledge assistants: **48% → 61%**
- Gen AI embedded in existing workflows: **24% → 35%**
- Daily usage of AI productivity tools: **22% → 58%** (more than doubled quarter-over-quarter)
- The host views the 58% daily usage figure as data catching up to adoption reality, not a statistical anomaly.

### 6. Enterprise Concerns Are Shifting Toward Practical, In-Use Issues

- Top concern shifted from *misuse of AI by bad actors* (**50% → 30%**) to *accuracy and fairness of AI outputs* (**20% → 32%**).
- New concern: *over-regulation stifling innovation* jumped from **2% → 17%**.
- Interpretation: organizations that are actively using AI worry about output quality; theoretical external threats recede as day-to-day practical concerns rise.
- **82%** of leaders cited risk management (data privacy, cybersecurity) as their biggest Gen AI strategy challenge; **64%** cited organizational data quality.

### 7. AI Agent Pilots Nearly Doubled Quarter-Over-Quarter

- Organizations piloting AI agents: **37%** (Q4 2024) → **65%** (Q1 2025).
- Full deployments remained flat at **11%** in both quarters, but the pipeline toward deployment is clearly building.
- **99%** of organizations surveyed plan to deploy agents.
- Buy vs. build: **~two-thirds** plan to buy pre-built agents; **~27%** plan a combination of buying and building — a partial reversal from a near-50/50 split observed in Menlo's 2024 enterprise study, possibly as more specialized startups fill vertical use cases.

### 8. Trust and Human Oversight Become Central to Agent Deployment

- **63%** of leaders plan to deploy agents only from trusted tech partners (up from **23%** in Q4).
- **52%** are restricting AI agent access to sensitive data without human oversight (up from **31%** in Q4).
- As software capabilities commoditize, *trust* becomes a non-commoditized differentiator.

### 9. Organizations Still Favor AI Augmentation Over Workforce Replacement

- **57%** believe AI will help low performers become stronger.
- **69%** believe AI will free strong performers to focus on more strategic work.
- **76%** believe AI will automate specific tasks but will not replace roles entirely.
- The host notes this augmentation framing is a healthy starting point, while flagging that economic instability could increase pressure toward displacement thinking over time.

---

## Key Concepts

- **Reasoning models:** LLMs (e.g., OpenAI O-series) that generate extended chains of thought before producing a final answer, enabling stronger performance on complex tasks.
- **PersonQA:** OpenAI's internal hallucination benchmark that queries models against publicly known facts, designed to elicit and measure hallucination rates.
- **Hallucination:** A phenomenon where an AI model generates confident but factually incorrect or fabricated information.
- **Frontier Math benchmark:** An "ultra-hard" mathematics benchmark used to evaluate advanced reasoning capabilities; historically, no model exceeded 2% before O3.
- **Vibe coding:** A mode of AI-assisted software development where users describe desired functionality in natural language and an AI generates functional code or applications.
- **AI agents / agentic AI:** AI systems capable of autonomously executing multi-step tasks, making decisions, and taking actions within software environments with limited human intervention.
- **Pilot phase (KPMG definition):** A stage of AI adoption beyond initial experimentation, implying higher organizational commitment and intent toward full deployment.
- **KPMG AI Pulse Survey:** A quarterly longitudinal survey of ~130 executives at $1B+ revenue companies tracking enterprise AI adoption trends.
- **Test-time compute:** Additional computational resources applied during inference (rather than training) to improve model reasoning and output quality.
- **Buy vs. build:** The strategic decision of whether an organization purchases pre-built AI tools/agents from vendors or develops custom solutions internally.

---

## Summary

The episode argues that enterprise AI adoption has crossed a meaningful threshold — organizations are no longer primarily experimenting with AI but are actively integrating it into daily workflows, sharply increasing investment, and rapidly piloting AI agents at scale. KPMG's Q1 2025 data shows agent pilots nearly doubling in a single quarter, daily AI tool usage more than doubling, and planned spend rising to $114M per organization. Simultaneously, enterprise concerns are recalibrating from theoretical risks (bad-actor misuse) toward practical operational challenges (output accuracy, data quality, cybersecurity), which the host reads as a sign of genuine, deepening usage. This shift makes the headline story — that OpenAI's reasoning models hallucinate at dramatically higher rates as they scale, and that an AI support bot fabricating a policy caused real customer harm at Cursor — directly consequential: the higher the stakes of enterprise AI deployment, the more costly inaccurate outputs become. The host concludes that while full agentic deployments remain limited, the pipeline is clearly accelerating, trust is emerging as a key competitive differentiator, and most organizations still frame AI as augmenting rather than replacing human workers.
