---
title: "#258 – Yann LeCun: Dark Matter of Intelligence and Self-Supervised Learning"
date: 2022-01-22
show: lex-fridman
episode: 258
url: "https://lexfridman.com/yann-lecun-2/"
youtube: "https://www.youtube.com/watch?v=SGzMElJ11Cc"
duration_min: 172
hosts: ["Lex Fridman"]
guests: ["Yann LeCun"]
description: "Yann LeCun argues that self-supervised learning of predictive world models, not supervised or reinforcement learning, is the missing piece for machines to gain common sense."
tags: ["self-supervised-learning", "world-models", "deep-learning", "machine-learning-research", "meta-ai"]
source_transcript: "lex-fridman/episodes/2022/01/2022-01-22-yann-lecun-dark-matter-of-intelligence-and-self-supervised-learning.md"
draft: false
---

## Thesis

Yann LeCun, Meta's Chief AI Scientist, tells Lex Fridman that the "dark matter" of intelligence is the background knowledge humans and animals pick up by observing the world. He argues that self-supervised learning of predictive world models is the main route to machine common sense, and that today's systems lack even the common sense of a house cat. Fridman pushes for a bigger role for interaction, active learning and the human fear of death.

## Key points

- **Why current methods fall short.** LeCun notes that teenagers learn to drive in about 20 hours, while self-driving systems fail after millions of simulated hours. Reinforcement learning gets one scalar of feedback per trial and ImageNet labels give under 10 bits per sample; predicting video gives far more signal.
- **Three challenges.** LeCun lists them as learning to represent the world, reasoning that fits gradient-based learning, and learning hierarchical action plans. He links planning to model predictive control, used since the 1960s for rocket trajectories.
- **Joint embedding over generation.** Predicting pixels struggles with uncertainty, he says. He has switched to non-contrastive joint embedding methods (Barlow Twins, VICReg, DeepMind's BYOL), calling them "the best thing since sliced bread". VICReg was rejected from NeurIPS, which he blames on junior reviewers hunting for flaws.
- **Grounded intelligence.** LeCun argues text alone cannot teach that an object on a pushed table moves with it, so a "GPT 5000" would never learn it. He calls the Cyc project basically hopeless and says data augmentation is temporary.
- **Consciousness and emotions.** LeCun speculates that consciousness configures a single world-model engine in the prefrontal cortex, and that autonomous machines with critics predicting good or bad outcomes will have emotions.
- **Meta and FAIR.** LeCun says FAIR, founded about eight years earlier, produced PyTorch, and that Meta would "crumble" without deep learning. He cites independent studies he says show Facebook does not drive polarization, and suggests renaming FAIR "Fundamental AI Research".

## Quotes

> "I think data augmentation is a temporary necessary evil." — Yann LeCun

> "consciousness is not a consequence of the power of our minds, but of the limitation of our brains." — Yann LeCun
