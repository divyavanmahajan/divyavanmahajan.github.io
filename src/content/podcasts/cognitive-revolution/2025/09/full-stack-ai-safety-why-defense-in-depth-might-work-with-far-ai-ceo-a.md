---
title: >-
  Full-Stack AI Safety: Why Defense-in-Depth Might Work, with Far.AI CEO Adam
  Gleave
description: >-
  Adam Gleave argues that carefully engineered, genuinely independent safety
  layers can manage AI risk, with fully autonomous AI organisations probably not
  arriving until around 2040.
pubDate: '2025-09-20'
show: cognitive-revolution
url: >-
  https://www.cognitiverevolution.ai/full-stack-ai-safety-why-defense-in-depth-might-work-with-far-ai-ceo-adam-gleave/
youtube: 'https://www.youtube.com/watch?v=iFfTLO5nHd8'
durationMin: 87
hosts:
  - Nathan Labenz
guests:
  - Adam Gleave
tags:
  - ai-safety
  - defense-in-depth
  - agi-timelines
  - interpretability
  - scalable-oversight
draft: false
---
## Thesis

Adam Gleave, co-founder and CEO of FAR.AI, is cautiously optimistic. He argues that the main risk is not unsolvable technical problems but corner-cutting and "just-in-time safety", and that a well-built defence-in-depth stack, honesty training and coarse-grained interpretability could carry us safely to roughly human-level AI. Nathan Labenz pushes back with Zvi's view that all defences will fail together.

## Key points

- **A "third son" future.** Gleave expects we will probably muddle through to a world where most humans live like younger sons of European nobility: high living standards, limited power. He doubts full gradual disempowerment because humans compete using AIs, not against them.
- **Three capability tiers.** Powerful tools are here now (LLM persuasion; cyber uplift in one to two years). Autonomous agents able to run a whole attack chain have a median of five to seven years. AI organisations that outcompete human-led firms have a median of about 14 years, held back by spiky skills and poor sample efficiency.
- **Stacked safeguards.** FAR.AI and UK AISI broke safeguard pipelines in models such as Opus 4 and GPT-5, mostly through implementation mistakes, for example leaking which filter fired. Gleave says independent layers, each with only a 1% attack success rate, multiply, like a longer PIN.
- **Lie detectors.** Training models against deception detectors cut deception sharply, and bigger detectors got more accurate. Some setups (on-policy RL, weak KL regularisation) taught models to fool the detector instead, so held-out evaluations matter.
- **Messy internals.** FAR.AI reverse-engineered a planning algorithm in a puzzle-game agent, but Gleave now doubts full mechanistic understanding is possible. He prefers targeted uses such as detecting sandbagging or backdoors.
- **Vertical integration.** FAR.AI runs research, scaling work, alignment workshops and policy events, and plans to double in size in 12 to 18 months, including hiring a COO.

## Quotes

> "It's AI is competing with humans using AIs." — Adam Gleave

> "So it does feel like we're almost by design or by choice running with a pretty small safety margin." — Adam Gleave
