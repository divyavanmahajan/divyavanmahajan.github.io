---
title: Why AI Agents Don't Work (yet) - with Kanjun Qiu of Imbue
description: >-
  Kanjun Qiu argues agents fail today because of weak reasoning and leaky
  abstractions, and that Imbue's reasoning-focused models, inspectable
  interfaces and tooling can make them reliable enough to deploy.
pubDate: '2023-10-14'
show: latent-space
url: >-
  https://lspace.beehiiv.com/podcast/s/latent_space_the_ai_engineer_podcast/why_ai_agents_don_t_work_yet_-_with_kanjun_qiu_of_imbue
durationMin: 65
hosts:
  - Alessio Fanelli
  - swyx
guests:
  - Kanjun Qiu
tags:
  - ai-agents
  - reasoning
  - reliability
  - foundation-models
  - developer-tools
draft: false
---
## Thesis

Kanjun Qiu, CEO of Imbue (formerly Generally Intelligent), argues that agents able to pursue larger goals are blocked mainly by reasoning, plus the lack of reliable, non-leaky abstractions on top of stochastic models. Imbue's answer is to train foundation models optimised for reasoning, keep reasoning in natural language so humans can inspect and steer agents, and build tooling that turns agent building from a bare-metal craft into something closer to programming with high-level languages.

## Key points

- **Agents mostly don't work.** Qiu says Imbue's internal agents (a type-error fixer, a test generator) only succeed at very small tasks; the test generator "goes off the rails all the time". Users expect high reliability, so 50% success is not enough.
- **Lessons from Sorceress.** Her earlier AI recruiting company raised $30 million but suffered from built-in churn, and taught her that users must trust an agent's choices before relying on it.
- **Data over compute.** Qiu cites estimates that Llama 2 took about $3-4 million of compute but $20-25 million of labelled data. Imbue generates reasoning traces and code, which she calls the most explicit reasoning data on the internet.
- **Avalon and RL limits.** Imbue built Avalon, a simulator about 100 times faster than Minecraft, in roughly six to eight weeks. It showed RL fails without a curriculum and that pure RL is a poor vehicle for planning and reasoning.
- **Interfaces beyond chat.** Echoing Linus Lee, she calls chat skeuomorphic; Imbue's tools let users inspect, fork and edit an agent's plan mid-run, which she compares to an IDE for programming computers in natural language.
- **Policy work.** An Imbue agent analysed the 20,000 pages of proposals sent to the US Department of Commerce's request for AI policy input.

## Quotes

> "It is actually really annoying if they only work fifty percent of the time" — Kanjun Qiu

> "we're like in the like bare metal phase of agent building, and we'll eventually get to something with much nicer abstractions." — Kanjun Qiu
