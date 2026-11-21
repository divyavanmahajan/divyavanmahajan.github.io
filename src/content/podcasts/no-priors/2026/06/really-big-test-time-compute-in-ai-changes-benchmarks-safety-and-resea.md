---
title: >-
  Really Big Test-Time Compute in AI Changes Benchmarks, Safety and Research
  with OpenAI Research Scientist Noam Brown
description: >-
  Noam Brown argues that because model capability now scales with test-time
  compute budget, benchmarks and safety evaluations must be reported against
  tokens, cost or time instead of single-number grids.
pubDate: '2026-06-26'
show: no-priors
episode: 167
url: 'https://www.youtube.com/watch?v=AZrU6y3pUcU'
youtube: 'https://www.youtube.com/watch?v=AZrU6y3pUcU'
durationMin: 36
hosts:
  - Sarah Guo
  - Elad Gil
guests:
  - Noam Brown
tags:
  - test-time-compute
  - benchmarks
  - ai-safety
  - reasoning-models
  - recursive-self-improvement
draft: false
---
## Thesis

OpenAI research scientist Noam Brown tells Sarah Guo that the standard benchmark grid is misleading, because modern models keep improving with more thinking time and that time is not controlled for. Performance should be plotted against tokens, cost or time. The same flaw affects safety frameworks, and Brown argues heavy reliance on test-time compute makes an overnight intelligence explosion unlikely.

## Key points

- **Why GPT-5.5 looked underwhelming.** Brown says the launch grid showed only a few points over 5.4, but 5.4 at max settings thinks far longer; controlled for thinking time, 5.5 is a large jump. Well-scaffolded models can think for weeks before plateauing.
- **Benchmark-maxxing.** Best-of-five sampling or a judge model can inflate scores without a better model. He makes the same point about routing vendors: consensus across models has to beat letting one model think longer. Labs keep the grid only because everyone expects it, a bad equilibrium he wants to break.
- **Poker bots as a private eval.** With GPT-5.2 he built a river solver about five times faster than alone, though the model often "gaslit" him. With 5.5 it works almost zero-shot, and he expects a full poker solver, essentially his PhD thesis, within six months to a year.
- **Safety frameworks ignore budget.** Preparedness frameworks and responsible scaling policies ask what a model can do, but capability at $10 differs from $10,000 or $10 million. With new models every two or three months, nobody runs one long enough to find its ceiling.
- **Latent capability.** After an internal OpenAI model disproved the Erdős unit distance conjecture, people found 5.5 could reach it with steering; Brown estimates a general scaffold might cost $1,000 to $100,000.
- **Limits on self-improvement.** Factual recall does not improve with more thinking, and models still lack research taste: they made his PhD algorithms 10-100x faster but could not invent better ones. Brown expects a gradual takeoff, bottlenecked by time, and sees large-scale multi-agent knowledge sharing as underexplored.

## Quotes

> "we're in a world now where the capability of the model is a function of how much money you put into it" — Noam Brown

> "nobody actually knows what the ceiling of capabilities are for these models because nobody's actually run them for long enough to really tell" — Noam Brown
