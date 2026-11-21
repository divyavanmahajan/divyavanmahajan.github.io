---
title: >-
  Scaling "Thinking": Gemini 2.5 Tech Lead Jack Rae on Reasoning, Long Context,
  & the Path to AGI
description: >-
  Jack Rae argues that reasoning models came from steady RL progress crossing a
  visible threshold, and that RL, long context and memory together are the path
  to AGI.
pubDate: '2025-04-05'
show: cognitive-revolution
url: >-
  https://www.cognitiverevolution.ai/scaling-thinking-gemini-2-5-tech-lead-jack-rae-on-reasoning-long-context-the-path-to-agi/
youtube: 'https://www.youtube.com/watch?v=u0iIPxfwjKU'
durationMin: 73
hosts:
  - Nathan Labenz
guests:
  - Jack Rae
tags:
  - reasoning-models
  - reinforcement-learning
  - gemini
  - long-context
  - interpretability
draft: false
---
## Thesis

Nathan Labenz interviews Jack Rae, principal research scientist at Google DeepMind and technical lead on thinking for Gemini 2.5 Pro. Rae argues that the sudden wave of reasoning models reflects smooth, almost predictable gains from reinforcement learning on verifiable rewards that finally crossed a threshold people notice. In his view, RL must teach models genuinely new skills, and better reasoning, agents and memory together will feel like AGI.

## Key points

- **No single breakthrough.** Rae says Gemini has used RL with verifiable rewards for at least a year, before "thinking" launched. The reasoning team formed around September or October and shipped an experimental Flash Thinking model in December. He thinks other labs converged because the vein was rich, not because of San Francisco parties.
- **Why small-model RL failed.** He compares RL on LLMs to pretraining six years ago, when 100-billion-parameter runs were "alchemy": with five things broken, fixing one can look useless.
- **Raw thoughts, few priors.** Gemini shows raw chain-of-thought tokens in AI Studio and the Gemini app. The thoughts mostly stay in English even on non-English tasks. Rae prefers the simplest recipe and agrees training should not encourage deceptive thoughts.
- **Human process data.** He finds people poor at writing down their own reasoning on demand. He credits pretraining text, where people naturally explain their thinking, for models picking up step-by-step reasoning.
- **Latent reasoning and interpretability.** Rae would not taboo Meta-style latent reasoning, citing MuZero, whose latent states could still be decoded. He expects interpretability to advance with capabilities rather than fall behind.
- **Long context and system cards.** Labenz describes a 400,000-token code base that 2.5 Pro handled well. Rae ties this to work on 1-2 million token contexts, and says system cards will come at general availability rather than for experimental releases.

## Quotes

> "There hasn't been one key thing which is like discretely made it working. It's just kind of crossed the capability threshold where people have really taken notice." — Jack Rae

> "It can't then just be reshaping the knowledge that it's seen from behavioral cloning during the pre training stage." — Jack Rae
