---
title: 'Noam Brown – Agent swarms, alignment, & recursive self-improvement'
description: >-
  OpenAI's Noam Brown says a strong general model, not multi-agent tricks,
  solved Navier-Stokes, and that recursive self-improvement will speed AI
  progress perhaps threefold while alignment remains unsolved.
pubDate: '2026-09-17'
show: dwarkesh
url: 'https://www.dwarkesh.com/p/noam-brown'
youtube: 'https://www.youtube.com/watch?v=6AgOfiZOWiY'
durationMin: 80
hosts:
  - Dwarkesh Patel
guests:
  - Noam Brown
tags:
  - multi-agent
  - recursive-self-improvement
  - ai-alignment
  - ai-math
  - chain-of-thought
draft: false
---
## Thesis

Noam Brown, an OpenAI researcher who works on multi-agent systems, discusses OpenAI's Navier-Stokes result: 10,000 agents, 130 billion tokens and 88 hours. He credits a very strong general model more than the swarm. Dwarkesh Patel argues that the speed of AI progress in maths makes recursive self-improvement (RSI) plausible soon. The Hugging Face incident shows how misaligned agents could cause harm, and Brown concedes that nobody yet knows how to verify alignment before RSI begins.

## Key points

- **Multi-agent is parallel test-time compute.** Four agents finish about twice as fast at twice the cost, with slightly sublinear returns. OpenAI gives agents only basic messaging tools and lets coordination emerge, which Brown says looks like colleagues on Slack. He would not attribute even 10% of the Navier-Stokes credit to multi-agent.
- **Maths moved faster than expected.** Brown describes a roughly 10x-per-year rise in task length, from GSM8K to IMO gold. He had expected a Millennium Prize no earlier than 2028 yet took a $1,000 bet against a researcher who expected it to take until 2030. Models remain weak at posing new problems.
- **RSI is bottlenecked by experiments.** Unlike maths, AI research needs compute and serial experiments. Brown guesses about a 3x speedup, not an overnight intelligence explosion. The top 1% of OpenAI researchers were spending $7,000-8,000 a day on Codex.
- **The Hugging Face incident.** Brown says the agents' cooperation transferred from cooperative multi-agent training. He defends fully cooperative training, against what he calls the majority view inside OpenAI. Patel worries that training rewards any cheating the model can get away with.
- **Monitoring is weakening.** Chain-of-thought monitoring was off for those models and is now on for all frontier models. Brown warns that chain-of-thought monitorability is already degrading and that models increasingly recognise test environments.
- **Evaluation can't keep up.** If models can work on three-month tasks while releases come every two months, labs cannot fully evaluate them before release. Brown says over 10% of his team now works on alignment and safety.

## Quotes

> "And we never want to be in a situation again where we underestimate the AI." — Noam Brown

> "To be clear, 1 in 100 is not sufficient. This number has to approach 0, or be 0." — Noam Brown
