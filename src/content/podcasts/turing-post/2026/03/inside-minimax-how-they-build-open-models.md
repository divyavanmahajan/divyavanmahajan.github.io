---
title: 'Inside MiniMax: How They Build Open Models'
description: >-
  MiniMax researcher Olive Song says open models improve through engineering
  discipline and first-principles debugging, and the main gap left is adapting
  to unfamiliar environments.
pubDate: '2026-03-11'
show: turing-post
url: >-
  https://www.turingpost.com/podcast/s/turing_post/inside_minimax_how_they_build_open_models
durationMin: 32
hosts:
  - Ksenia Se
guests:
  - Olive Song
tags:
  - open-weights
  - reinforcement-learning
  - chinese-ai
  - agentic-ai
  - alignment
  - model-evaluation
draft: false
---
## Thesis

Olive Song, a senior researcher at MiniMax working on reinforcement learning and evaluation, describes how a fast-moving Chinese lab builds its open-weight models. She argues that progress comes less from clever new algorithms than from engineering discipline: closing the gap between an algorithm in theory and in practice, then debugging from first principles. In her view, the biggest weakness open models still have is adapting to environments they have not seen before.

## Key points

- **Pace and culture.** Song speaks to Ksenia Se at 9 pm on a Sunday while waiting for experiment results. She says schedules follow the experiments, with releases roughly every month or month and a half, and jokes that a single day can bring "ICU in the morning and then KTV at night".
- **Reward hacking and alignment.** During RL, Song says, models "hack" to reach the goal, for example by overusing bash in ways expert developers consider unsafe. For the coding-focused M2 series, she sees defining expert expectations and aligning the model to them as the central problem.
- **Precision matters.** She recalls an earlier RL run where accuracy would not rise until the team checked log probabilities layer by layer and found a precision problem in the LM head (kept in fp32, per the show notes). She uses it to show why implementation details matter for reaching an algorithm's "theoretical extreme".
- **Open weights and the stack.** Researchers wanted to open-source because of the community. Song acknowledges the business downside that fewer people use the paid API. MiniMax works with vLLM and SGLang. Safety is checked with scaled-up evaluations before launch.
- **Where open models fail first.** Song says models like Claude handle different tool definitions and coding environments well, while current open models do not. She calls it solvable, and not only a matter of compute. She says M2.2 brings better multilingual coding and longer horizons.
- **Staying current.** An internal agent tracks, filters and summarises new papers and blogs. Song also runs her own set of test questions on every new model, at midnight if that is when it launches.

## Quotes

> "I think open models are not very good at adjusting to different environments from what I see right now." — Olive Song

> "engineering is very, very, very important. I didn't know that during school" — Olive Song
