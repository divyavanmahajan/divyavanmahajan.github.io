---
title: >-
  Captaining IMO Gold, Deep Think, On-Policy RL, Feeling the AGI in Singapore —
  Yi Tay
description: >-
  Yi Tay argues one end-to-end model trained with on-policy RL can subsume
  specialist systems, as Gemini Deep Think's IMO gold showed, and that new
  ideas, not just scale, still drive progress.
pubDate: '2026-01-23'
show: latent-space
url: >-
  https://lspace.beehiiv.com/podcast/s/latent_space_the_ai_engineer_podcast/captaining_imo_gold_deep_think_on-policy_rl_feeling_the_agi_in_singapore_yi_tay
durationMin: 92
hosts:
  - Alessio Fanelli
  - swyx
guests:
  - Yi Tay
tags:
  - reinforcement-learning
  - reasoning-models
  - gemini
  - ai-research
  - ai-coding
draft: false
---
## Thesis

Yi Tay, back at Google DeepMind and starting a Gemini reasoning team in Singapore, argues that on-policy reinforcement learning is now the main modelling tool and that a single general model should absorb what used to need specialist systems. Gemini Deep Think's IMO gold, achieved text-in, text-out without AlphaProof-style formal tools, is his main example. He also pushes back on the idea that the last five years were "just scaling".

## Key points

- **On-policy versus imitation.** Tay explains SFT as off-policy imitation of someone else's outputs, while modern LLM RL rewards the model on its own generations, which he believes generalises better. He likens it to people learning from their own mistakes; swyx adds a human "learning rate" analogy about updating sharply when a world model breaks.
- **IMO gold.** After last year's silver with AlphaGeometry and AlphaProof, this year's attempt used Gemini end to end. Tay was one of four co-captains training the checkpoint across London, Mountain View and Singapore, babysitting runs across time zones during a live competition. The model shipped as Gemini Deep Think with a cheaper inference configuration.
- **One model for everything.** Tay expects most tools, like a calculator, to be absorbed into parameters over time, with tools reserved for what cannot be.
- **Using AI himself.** He now pastes training-job bugs into Antigravity and relaunches with its fix, calling the effect a "passive aura" that boosts everyone rather than replacing one person, though models still sometimes claim bugs are fixed when they are not.
- **Research views.** He expects AGI to still be a transformer, sees the gap between closed labs and open models widening, and frames data efficiency as spending more compute per token or finding a better learning algorithm. He also recounts co-inventing DSI generative retrieval, whose semantic IDs now appear in YouTube recommendations.
- **Singapore team.** The new team, launched with Quoc Le and Jeff Dean visiting, prioritises talent density and compute per person, hiring people with RL research records or exceptional competition results.

## Quotes

> "if the model can't get to IMO gold, then can we get to AGI?" — Yi Tay

> "there's also a sweet lesson where it's like ideas matter." — Yi Tay
