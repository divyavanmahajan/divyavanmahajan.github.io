---
title: AI researchers debate how close we are to recursive self-improvement
description: >-
  Three researchers debate whether current methods lead to recursive
  self-improvement, agreeing that defining objectives, not running experiments,
  may be the last human job.
pubDate: '2026-09-11'
show: dwarkesh
url: 'https://www.dwarkesh.com/p/john-beren-charlie'
youtube: 'https://www.youtube.com/watch?v=PrSf7IOYu-I'
durationMin: 97
hosts:
  - Dwarkesh Patel
guests:
  - Beren Millidge
  - John Schulman
  - Charlie O'Neill
tags:
  - recursive-self-improvement
  - reinforcement-learning
  - distillation
  - continual-learning
  - ai-timelines
draft: false
---
## Thesis

Dwarkesh Patel asks John Schulman (Thinking Machines), Beren Millidge (Zyphra) and Charlie O'Neill (Baseten) what could still stop recursive self-improvement (RSI). They broadly expect AI to automate research on well-specified objectives soon. They disagree on whether it can also find new objectives and paradigms, which O'Neill doubts. Schulman argues that deciding what we actually want will be the role humans keep longest.

## Key points

- **Steelmanning the case against RSI.** Millidge's main technical risk is a lasting sim-to-real gap with no real spark of generalisation, though he thinks regulation is the likelier brake. Schulman describes a repeating cycle in which each new model feels like AGI, then feels dumb a month later. O'Neill fears another discontinuity like the move from pre-training to RL is needed, and the current recipe may not find it.
- **Distillation fights centralisation.** Schulman says anything learned through RL is a small number of bits and easy to distil. Chinese labs reportedly gain realistic prompt distributions from router services that resell US-model traffic.
- **Continual learning is stuck on technique.** O'Neill and Millidge describe catastrophic forgetting when small updates are applied repeatedly. They expect specialised modules such as LoRAs and "cartridges", plus ever-faster retraining, to stand in for live weight updates.
- **Data drives progress.** Patel's experiment with Jerry Han found that newer datasets gave about 12x compute efficiency, against 3.7x from architecture, at small scale. Millidge says the remaining signal is not in Common Crawl and has to come from humans or designed environments.
- **Why RL works.** Millidge credits strong mid-training plus RL's high signal-to-noise ratio. O'Neill points to the ability to work over longer horizons generalising across tasks. Schulman warns that RL and widespread distillation from Claude are creating a monoculture of writing tics.
- **Timelines.** Remote-worker agents arrive in about one to three years by the panel's estimates. Schulman expects a 10x uplift for AI researchers in two years and AI that beats top experts in 3-4 years. O'Neill says 5-10 years for both.

## Quotes

> "So I would expect that we’re nowhere near the ceiling of how well you can do research." — John Schulman

> "I would say that the last job for humans, or the role for humans that’ll last the longest, is defining the objective and deciding what we actually want." — John Schulman
