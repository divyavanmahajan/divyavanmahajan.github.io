---
title: Reinforcement learning for chip design
description: >-
  Google Brain researchers treat chip floor planning as a reinforcement learning
  game, using edge-focused graph embeddings so a pre-trained agent places new
  chips faster and better.
pubDate: '2020-04-27'
show: practical-ai
episode: 87
url: 'https://share.transistor.fm/s/55498544'
durationMin: 45
hosts:
  - Chris Benson
  - Daniel Whitenack
guests:
  - Anna Goldie
  - Azalia Mirhoseini
tags:
  - reinforcement-learning
  - chip-design
  - graph-neural-networks
  - hardware
  - google-brain
draft: false
---
## Thesis

Anna Goldie and Azalia Mirhoseini of Google Brain argue that chip placement, studied since the 1960s with methods like simulated annealing and genetic algorithms, can be improved by agents that learn from experience. Unlike earlier methods, their reinforcement learning policy gets better at placing new chips the more chips it has placed.

## Key points

- **The problem.** Goldie explains that a netlist is a graph of SRAMs, macros and standard cells (logic gates) joined by wires. The task is to place it on a 2D grid to minimise wire length, latency, power and area under density and congestion constraints, with hundreds of millions of components in total.
- **Placement as a game.** The agent places nodes one at a time. Goldie says the reward is a weighted mix of approximate wire length, congestion and timing. Mirhoseini says the idea grew out of earlier work on device placement of TensorFlow graphs onto GPUs and TPUs, a far smaller problem.
- **Handling scale.** Mirhoseini describes grouping standard cells so the input becomes a graph of thousands of nodes. Goldie notes the policy head moved from an LSTM over placement images to a deconvolutional network predicting over the grid.
- **Representation is the key.** The team pre-trained an encoder with supervised learning to predict cheap "pseudo labels" (proxy wire length and congestion) on a large dataset of placements. Goldie says their graph embeddings focus on edge features rather than node features.
- **Results.** Mirhoseini reports superhuman results on a good portion of Google's complex chips. Goldie says a policy pre-trained on 20 real netlists and fine-tuned for 12 hours beat one trained from scratch for 24 hours or more.
- **Why it matters.** Goldie notes chip design takes nearly two years, so faster design could make new ML architectures viable. Mirhoseini hopes AI can optimise across all stages, from architecture to verification, instead of each stage separately.

## Quotes

> "a pre-trained policy that was fine-tuned for, say, only 12 hours would outperform a policy that was trained from scratch on this netlist for 24 hours or more." — Anna Goldie

> "what really matters is the connections between these nodes, because it's about the paths." — Anna Goldie
