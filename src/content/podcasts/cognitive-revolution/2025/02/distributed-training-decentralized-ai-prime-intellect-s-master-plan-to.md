---
title: >-
  Distributed Training, Decentralized AI: Prime Intellect's Master Plan to Make
  AI Too Cheap to Meter
description: >-
  Prime Intellect's founders argue that a global compute marketplace plus
  low-bandwidth distributed training can keep powerful AI widely owned rather
  than concentrated in a few labs.
pubDate: '2025-02-05'
show: cognitive-revolution
url: >-
  https://www.cognitiverevolution.ai/distributed-training-decentralized-ai-prime-intellects-master-plan-to-make-ai-too-cheap-to-meter/
youtube: 'https://www.youtube.com/watch?v=atJo38nAeLU'
durationMin: 136
hosts:
  - Nathan Labenz
guests:
  - Vincent Weisser
  - Johannes Hagemann
tags:
  - distributed-training
  - decentralized-ai
  - compute-markets
  - open-source-ai
  - ai-policy
draft: false
---
## Thesis

Vincent Weisser and Johannes Hagemann, founders of Prime Intellect, argue that the biggest AI risk is concentration: superintelligent systems controlled by a few states, tech giants or individuals. Their answer is a staged plan to make compute and intelligence "too cheap to meter" by aggregating global compute, making training work across the open internet, and eventually placing models under collective, permissionless ownership. Host Nathan Labenz is sympathetic but unsure a stable equilibrium is realistic.

## Key points

- **The four-part master plan.** Labenz summarises it: an international compute market (an H200 for $1.49 an hour at the time), distributed training frameworks, high-impact science models, and a decentralized protocol for collective ownership of models.
- **A marketplace, not a cloud.** Weisser says Prime Intellect does not buy GPUs; it aggregates supply from hyperscalers, data centres and startups with spare capacity, so users can rent 1,000 H100s on demand instead of signing multi-year contracts.
- **How DiLoCo-style training cuts bandwidth.** Hagemann explains that workers take hundreds of local steps before syncing "pseudo gradients", sent in 8-bit instead of 32-bit. INTELLECT-1, a 10 billion parameter model, synced roughly every 100 steps for a 400x communication cut; scaling past about 16 workers and to 100 billion parameters remain open problems.
- **Fault tolerance as the real engineering work.** Their open-source Prime framework lets nodes drop out or join mid-run, which Hagemann says standard training frameworks do not support.
- **R1-style reasoning suits decentralization.** Weisser argues inference-heavy RL and synthetic data generation need little communication, so the new scaling paradigm fits a distributed network.
- **Policy and defensive science.** Weisser calls the EU AI Act one of the worst policy ideas and compute governance naive in the face of decentralized training. Both point to Metagene-1, a model built with partners for early pandemic detection from wastewater, as an example of defence-favouring open models.

## Quotes

> "we're not a hotel, we're more like Airbnb or in that sense, right? We are more marketplace sitting on top even of other marketplaces." — Vincent Weisser

> "and so we had a total communication reduction of 400 x, right, which was enough to still train very efficiently across the whole globe" — Johannes Hagemann
