---
title: >-
  Lindy Teammate: Flo Crivello on Multiplayer Agents, Memory & Why He'd Ban the
  Chinese Models He Uses
description: >-
  Lindy's Flo Crivello on building a multiplayer AI employee for Slack (agentic
  memory, context buckets, caching) and why he would ban the Chinese models his
  product runs on.
pubDate: '2026-08-10'
show: cognitive-revolution
url: >-
  https://www.cognitiverevolution.ai/lindy-teammate-flo-crivello-on-multiplayer-agents-memory-why-he-d-ban-the-chinese-models-he-uses/
youtube: 'https://www.youtube.com/watch?v=4JYoTE_VKaU'
durationMin: 127
hosts:
  - Nathan Labenz
guests:
  - Flo Crivello
tags:
  - ai-agents
  - agent-memory
  - multiplayer-ai
  - context-management
  - chinese-models
draft: false
---
## Thesis

Flo Crivello is launching Lindy Teammate, an AI employee that lives in Slack and accumulates a whole team's context. He argues that as AGI arrives, context matters more than intelligence. The hard engineering is memory and context management rather than the model, and AI is shifting from single-player chat to multiplayer, shared-context agents. In the second half he defends a position Nathan Labenz disputes: Chinese frontier models, including the DeepSeek models Lindy runs on, should be banned in the US.

## Key points

- **Agentic memory over RAG.** A memory agent "naps" every 15 minutes, keeping public team and private personal file systems backed by Git (via Mesa). It learns to ignore log channels, and users set privacy rules by editing a plain memory.md prompt.
- **Context buckets.** Oversized tool outputs and compacted history go into sub-agent "context buckets". These are arranged in a self-balancing tree with 100 children per node, so about 2 billion tokens are two LLM calls away. Crivello says compaction wrongly assumes you never need ground truth.
- **Caching drives architecture.** Lindy runs at an 85% cache hit rate. Crivello avoids mixing models within one agent, keeps validators on the same model, and prefers one agent over role-based multi-agent setups, splitting mainly for security.
- **DeepSeek as driver.** DeepSeek is Lindy's default, roughly Sonnet 4.6 level at about 100x lower cost, though "more spiky". Teammate pushed Lindy back to negative gross margins, and a roughly $10,000 prompt-optimisation run follows each major model release.
- **Inside Lindy.** PRs per week have tripled while headcount stayed flat, and agents review most code. Crivello says models are superhuman yet "walk to the car wash" 50 times a day, and that today's centaur phase is temporary.
- **The ban argument.** Crivello cites distillation, CCP censorship and influence, and protecting domestic champions. Labenz pushes back with the knowledge commons, US labs' strength and the need for future US-China deals. Crivello concedes protectionism is his weakest point and is open to a regime that certifies fine-tuned, sanitised models.

## Quotes

> "It's like July 2026. We have AGI. We are in takeoff, and we've not figured that alignment." — Flo Crivello

> "I think compaction operates under the faulty assumption that you never need access to ground truth, which is is false." — Flo Crivello
