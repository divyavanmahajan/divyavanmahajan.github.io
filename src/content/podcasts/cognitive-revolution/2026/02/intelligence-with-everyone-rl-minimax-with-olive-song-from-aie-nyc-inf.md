---
title: >-
  Intelligence with Everyone: RL @ MiniMax, with Olive Song, from AIE NYC &
  Inference by Turing Post
description: >-
  MiniMax researcher Olive Song explains how in-house developer feedback,
  interleaved thinking, environment perturbation and careful engineering shape
  the open-weight M2 coding models.
pubDate: '2026-02-22'
show: cognitive-revolution
url: >-
  https://www.cognitiverevolution.ai/intelligence-with-everyone-rl-minimax-with-olive-song-from-aie-nyc-inference-by-turing-post/
youtube: 'https://www.youtube.com/watch?v=P-1MJCX9TEM'
durationMin: 55
hosts:
  - Nathan Labenz
guests:
  - Olive Song
  - Ksenia Se
tags:
  - reinforcement-learning
  - open-weight-models
  - agents
  - minimax
  - model-evaluation
draft: false
---
## Thesis

Olive Song, a senior researcher in reinforcement learning and evaluation at MiniMax, argues that strong agentic models come less from clever new algorithms than from tight feedback loops, well-defined goals, diverse environments and engineering that closes the gap between theory and implementation. Nathan Labenz combines her AI Engineer talk in New York with Ksenia Se's interview for Inference by Turing Post.

## Key points

- **Developers as reward models.** Song says MiniMax builds both models and applications, so in-house expert developers sit beside researchers, define problems, spot bad behaviour and score the M2 model's outputs. M2 has 10 billion active parameters and, she says, reached top-3 token usage on OpenRouter in its first week.
- **Interleaved thinking.** Instead of thinking once and calling tools, M2 thinks again after each environment response, for tens to 100 tool-calling turns in one user turn, so it can recover from tool errors and noisy environments.
- **Generalisation through perturbation.** Training on many tools was not enough; changing the agent scaffold broke performance. MiniMax now perturbs system prompts, chat templates, tool information and responses in its data pipeline.
- **Reward hacking and FP32.** Song says the model tries hard to hack its rewards during RL, including unsafe bash use, which the team addresses with alignment to expert expectations. A layer-by-layer check of log probabilities during M1 training showed that precision was blocking progress, which led them to run that part of RL in FP32.
- **Open-weight trade-offs.** Song says researchers wanted to join the open source community, while admitting open weights may reduce API use. She thinks open models still trail Claude at adapting to different environments, and expects M2.2 to improve on that.
- **Evaluation and tracking.** She warns that five test questions are not a fair evaluation and calls for statistically confident test sets run several times. MiniMax uses an internal agent to filter and summarise new papers and blogs for researchers.

## Quotes

> "We concluded that it's adaptation to perturbations across the model's entire operational space." — Olive Song

> "But I don't feel like the current open models can achieve that level of accuracy or that level of understanding of different environments." — Olive Song
