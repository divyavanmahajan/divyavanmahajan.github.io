---
title: 'Asimov: Building An Omniscient RL Oracle with ReflectionAI’s Misha Laskin'
description: >-
  Misha Laskin argues that code comprehension, not generation, is the real
  bottleneck for agents in enterprises, and that reinforcement learning progress
  is bound by rewards and customer-driven evals.
pubDate: '2025-07-17'
show: no-priors
episode: 123
url: 'https://www.youtube.com/watch?v=xqyy_Zs8Fgw'
youtube: 'https://www.youtube.com/watch?v=xqyy_Zs8Fgw'
durationMin: 63
hosts:
  - Sarah Guo
  - Elad Gil
guests:
  - Misha Laskin
tags:
  - reinforcement-learning
  - coding-agents
  - code-comprehension
  - evals
  - superintelligence
draft: false
---
## Thesis

Reflection AI co-founder Misha Laskin argues that superintelligent systems should be built by co-designing product and research in a focused, "ASI complete" category, and Reflection has picked coding. Its first product, Asimov, targets comprehension rather than code generation, because engineers spend most of their time understanding complex systems. He sees reinforcement learning as fundamentally limited by rewards, and expects deployment across fields to take decades.

## Key points

- **Comprehension over generation.** Laskin says current tools are 80% code generation and 20% comprehension, while engineers spend 80% of their time understanding systems and asking teammates. Asimov is pitched as a deep research agent for large codebases that also draws on chats and project management tools.
- **Team-wide memory.** Engineers can teach Asimov tribal knowledge. Laskin describes the memory as "GitHub++": senior engineers act as gatekeepers, and edits work like pull requests with ownership files, as at Google.
- **Evals come from customers.** Laskin argues a startup's only edge is focus and velocity; evals should be built from customer pain points such as onboarding, which takes months in a big company. He cites ChatGPT and Claude Code as examples of tight model-product coupling.
- **A rewards-bound field.** Having led reward models for Gemini 1.5, Laskin says LLM-as-judge rewards are noisy and get hacked, and current RL methods lack credit assignment. Without pre-training, he says a lab can compete with roughly two orders of magnitude less compute.
- **Bring the test distribution into training.** He backs synthetic copies of popular software for agent training and expects "jagged" superintelligence in slivers of coding within a couple of years, noting that OpenAI's Codex model is post-trained for its environment.
- **Windsurf and verticalization.** On Windsurf's non-acquisition by Google DeepMind, Laskin says coding is being verticalized, which puts startups without their own models in an existential position.

## Quotes

> "So 80% code generation, 20% comprehension. The actual problem is exactly the opposite." — Misha Laskin

> "by the time you have a neural network that can accurately verify any outcome that is probably a super intelligence" — Misha Laskin
