---
title: "Demis Hassabis — Scaling, superhuman AIs, AlphaZero atop LLMs, AlphaFold"
date: 2024-02-28
show: dwarkesh
url: "https://www.dwarkesh.com/p/demis-hassabis"
youtube: "https://www.youtube.com/watch?v=qTogNUV3CAI"
duration_min: 62
hosts: ["Dwarkesh Patel"]
guests: ["Demis Hassabis"]
description: "Demis Hassabis argues large multimodal models are necessary but not sufficient for AGI, needing AlphaZero-style planning on top, careful scaling, and stronger evaluations and security."
tags: ["agi", "scaling-laws", "reinforcement-learning", "ai-safety", "google-deepmind"]
source_transcript: "dwarkesh/episodes/2024/02/2024-02-28-demis-hassabis-scaling-superhuman-ais-alphazero-atop-llms-alphafold.md"
draft: false
---

## Thesis

Google DeepMind CEO Demis Hassabis tells Dwarkesh Patel that today's large models are "unreasonably effective" world models, but that AGI will also need AlphaZero-style planning and search on top. He frames scaling as an empirical craft, not magic, and says DeepMind is on track with the 20-year plan it set in 2010. He argues for cautious optimism: better evaluations, hardened sandboxes, secure weights and broad international governance.

## Key points

- **Search on top of models.** Hassabis says better world models make search cheaper: Deep Blue or Stockfish look at millions of moves, AlphaGo and AlphaZero at tens of thousands, and a human grandmaster at a few hundred.
- **Scaling is an art form.** Asked why Gemini was not made an order of magnitude bigger, he cites data-center limits, cross-data-center training, TPUs and hyperparameter tuning. He says training loss can be predicted, but downstream capabilities like MMLU do not always follow, so about one order of magnitude per step is the maximum.
- **Compute and timelines.** He says Gemini 1 used roughly the compute rumoured for GPT-4 and that Google will have the most compute of any research lab this year. He would not be surprised by AGI-like systems within a decade.
- **Safety tooling.** Hassabis wants evals for deception and self-exfiltration, narrow AI tools to analyse general systems, and sandboxes that keep the AI in and hackers out. He would pause training if a model did something it was told not to do and lied about it, and promises published frameworks similar to responsible scaling policies.
- **Securing weights and open source.** He describes Google's firewall plus DeepMind-specific protections, and expects air gaps within three to five years. He calls DeepMind a proponent of open science (AlphaFold, transformers, GraphCast) but questions open-sourcing general-purpose foundation models.
- **Why build narrow systems now.** Patel asks why not wait for AGI. Hassabis says products and AI-for-science work such as AlphaFold and Isomorphic deliver benefits early and keep research honest against real-world metrics.

## Quotes

> "I wouldn’t be surprised if we had AGI-like systems within the next decade." — Demis Hassabis

> "You don’t want to be live A/B testing out in the world with these very consequential systems because unintended consequences may be quite severe." — Demis Hassabis
