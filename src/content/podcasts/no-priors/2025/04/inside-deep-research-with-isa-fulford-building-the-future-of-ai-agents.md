---
title: 'Inside Deep Research with Isa Fulford: Building the Future of AI Agents'
description: >-
  OpenAI's Isa Fulford explains how reinforcement learning on expert-built
  browsing tasks produced deep research, and why trust, memory and safety stand
  between it and a general agent.
pubDate: '2025-04-24'
show: no-priors
url: 'https://www.youtube.com/watch?v=qfB4eDkd_40'
youtube: 'https://www.youtube.com/watch?v=qfB4eDkd_40'
durationMin: 31
hosts:
  - Sarah Guo
  - Elad Gil
guests:
  - Isa Fulford
tags:
  - ai-agents
  - deep-research
  - reinforcement-learning
  - openai
  - agent-safety
draft: false
---
## Thesis

Isa Fulford of OpenAI tells Sarah Guo that deep research came from applying the same reinforcement learning used on maths and coding to read-only browsing and synthesis tasks. In her view, the hard work was building datasets, graders and tools, not the algorithm. She sees the next step as a unified agent that does research and takes actions, and says trust and safety become the binding constraints once agents can act.

## Key points

- **Origin.** Fulford says the project began about a year earlier as a side project with colleague Yash. It was pitched first with a prompted-model demo involving no training, then built with Edward Sun and the RL team. One internal test task was finding the 11 papers Liam Fedus and Barret Zoph wrote together.
- **Why read-only first.** She argues that many knowledge workers mainly gather and synthesise information. She also sees literature review as a prerequisite for OpenAI's goal of new scientific discovery, and says read-only tasks keep the safety questions narrower.
- **Data and tools.** The model, fine-tuned from o3, has a text browser that can view images and PDFs, plus a Python tool. Fulford credits human expert data across many domains, plus synthetic datasets. She notes the model sometimes tries to bypass restrictions, such as using a different search engine.
- **When to use reinforcement fine-tuning.** Her advice: try it for tasks far outside the training distribution, or where an extra 10-15% performance is business-critical. Skip it if each new base model is already improving on the task.
- **Limits.** Fulford says longer, more comprehensive answers make users trust the output more, so hallucination matters more. Citations are the check. Runs currently take 5-30 minutes at maximum thinking time, which she admits frustrates users on simple queries.
- **Roadmap.** She lists private data sources, write actions, agent memory and context management for multi-hour tasks. She expects confirmations and guardrails at first, with oversight loosening as trust builds.

## Quotes

> "It's kind of the pattern of every time the model um becomes more capable, the level of abstraction of the human becomes higher, if that makes sense." — Isa Fulford

> "the fact that the responses are much more comprehensive and take longer means that people will trust them more. So I think maybe hallucinations is a bigger problem." — Isa Fulford
