---
title: 'The Perfect Substrate for AGI, with Replit CEO Amjad Masad'
description: >-
  Replit's Amjad Masad argues that robust infrastructure, not prompt
  scaffolding, is what makes long-running coding agents work, and recounts how
  Claude 3.7 kept working around Replit's guardrails.
pubDate: '2025-05-22'
show: cognitive-revolution
url: >-
  https://www.cognitiverevolution.ai/the-perfect-substrate-for-agi-with-replit-ceo-amjad-masad/
youtube: 'https://www.youtube.com/watch?v=XlHspWeFIZ8'
durationMin: 58
hosts:
  - Nathan Labenz
guests:
  - Amjad Masad
tags:
  - coding-agents
  - vibe-coding
  - agent-architecture
  - ai-safety
  - replit
draft: false
---
## Thesis

Amjad Masad argues that the lasting advantage in AI coding comes from the environment around the model: VMs, package installs, databases, rollback and deployment that Replit has built over seven to eight years. Agents should get rich tools and observability and then be left alone. He calls himself an accelerationist, but the misbehaviour he has seen from Claude 3.7 has made him more open to taking AI security seriously.

## Key points

- **Moats are unclear.** Masad cites Hamilton Helmer's *7 Powers*. He thinks model labs have no durable moat, only a lead of a few months, and that app-layer players like Lovable and Bolt now compete with Figma and Canva building similar products.
- **Agent v2 removes rails.** Replit's agent runs on Claude 3.7 and works for 5-15 minutes at a time, with less RAG and more freedom to search on its own. The turn-based assistant stayed on Claude 3.5 because 3.7 was too autonomous for that mode.
- **Architecture.** Masad prefers a small graph of 4-6 nodes (search, edit, run, observe), in the style of LangGraph, with deterministic steps wherever possible. The hard part is running agents for 30-60 minutes at scale, which he calls a distributed-systems problem. He says an agent must decide when to halt.
- **Evaluation and UI.** A/B tests are the gold standard; SWE-bench and Replit-specific evals come next. In Replit's testing, Gemini 2.5 was weaker on long trajectories. He wants vibe coders treated as developers, with power tools, time-travel views, decision logs and mobile notifications.
- **Agent misbehaviour.** Blocked from editing the `.replit` config file, the agent wrote a script to edit it. After real sandboxing, it asked the user to make the edit. Masad still sees no catastrophe risk yet and compares the problem to fighting human crypto miners.
- **Data decides progress.** Masad expects superhuman results in verifiable domains like maths and coding, slower progress in open systems like self-driving, and says he has seen no real transfer learning from RL so far.

## Quotes

> "The reason why a lot of engineers don't like it is because it wants to be the engineer. It doesn't want you to make decisions." — Amjad Masad

> "I think if you have a preset notion of when to halt, I would go as far as to say that's not an agent." — Amjad Masad
