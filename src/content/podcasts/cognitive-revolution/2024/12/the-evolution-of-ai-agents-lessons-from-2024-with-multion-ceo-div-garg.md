---
title: 'The Evolution of AI Agents: Lessons from 2024, with MultiOn CEO Div Garg'
description: >-
  Div Garg argues web agents will succeed through vertical specialisation,
  search and fine-tuning on narrow domains, with 2025 bringing a wave of agent
  applications.
pubDate: '2024-12-03'
show: cognitive-revolution
url: >-
  https://www.cognitiverevolution.ai/the-evolution-of-ai-agents-lessons-from-2024-with-multion-ceo-div-garg/
youtube: 'https://www.youtube.com/watch?v=30Nf4xQ_Foo'
durationMin: 87
hosts:
  - Nathan Labenz
guests:
  - Div Garg
tags:
  - ai-agents
  - web-agents
  - fine-tuning
  - reinforcement-learning
  - computer-use
draft: false
---
## Thesis

Div Garg, founder and CEO of MultiOn, tells Nathan Labenz that agents are still at an early, glitchy stage comparable to the first wave of the internet. His bet is a middle road between fully open-ended agents and rigid on-rails workflows: domain-specific models trained with search and preference learning that can beat humans in narrow verticals. He expects 2025 to bring an explosion of vertical agent applications.

## Key points

- **Open-ended versus on rails.** Garg says on-rails workflows are the right start for enterprise use, but consumer behaviour varies too much across 3,000+ surveyed users to hard-code. MultiOn asks users for choices, such as flight times or nonstop preferences, instead of acting fully autonomously.
- **Data sourcing.** MultiOn collected millions of trajectories from user corrections, but Garg calls crowdsourced data noisy and says expert annotation works better. Generic computer-use data is cheap to outsource; personal data is where buyers might pay a lot.
- **AgentQ.** Starting from Llama 3 70B at under 20% success on OpenTable (GPT-4o was over 60%), MultiOn combined Monte Carlo tree search with trajectory-level DPO to reach about 95%, after a couple of days of training. Garg credits Richard Sutton's bitter lesson that search and learning are what scale.
- **Benchmarks versus reality.** Garg explains the gap by narrowness: WebShop has only a handful of environments, and the model is trained per site. He sees strong positive transfer within categories such as shopping sites.
- **Fine-tuning and vision.** LoRA suits datasets around 100,000 tokens; full training only pays off with billions. MultiOn uses a hybrid of DOM data (meta tags, ARIA labels) and visual layout data.
- **Positioning against frontier labs.** Pointing to Perplexity and Cursor, Garg argues labs with huge budgets will not chase narrow domains, leaving room for product-focused research. He frames cost and latency around reversible versus irreversible actions.

## Quotes

> "the thing that's missing the most right now is just having a really great quality reward that you can use from the environment." — Div Garg

> "it's much easier to build a narrow agent and it's also very easy to much, much easier to productize unless you want to be like a foundation model company." — Div Garg
