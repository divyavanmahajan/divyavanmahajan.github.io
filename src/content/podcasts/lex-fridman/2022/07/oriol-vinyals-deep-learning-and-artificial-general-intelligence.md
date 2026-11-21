---
title: '#306 – Oriol Vinyals: Deep Learning and Artificial General Intelligence'
description: >-
  DeepMind's Oriol Vinyals presents Gato as the start of general agents built
  from one sequence model, arguing that modular reuse of weights, interactive
  teaching and scale are the next steps toward AGI.
pubDate: '2022-07-26'
show: lex-fridman
episode: 306
url: 'https://lexfridman.com/oriol-vinyals-2/'
youtube: 'https://www.youtube.com/watch?v=aGBLRlLe7X8'
durationMin: 135
hosts:
  - Lex Fridman
guests:
  - Oriol Vinyals
tags:
  - deep-learning
  - agi
  - transformers
  - multimodal-models
  - meta-learning
  - deepmind
draft: false
---
## Thesis

Oriol Vinyals, research director and deep learning lead at DeepMind, tells Lex Fridman that a single transformer trained to predict the next token across text, images and actions can already act as a general agent, and that Gato is the beginning of this work, not the end. He argues the field's open problems are memory and lifelong learning, reusing trained weights instead of starting from scratch, and teaching models new tasks through interaction. He expects human-level AI in his lifetime but is unsure about going far beyond it.

## Key points

- **How Gato works.** Vinyals describes Gato as a roughly one-billion-parameter transformer trained by imitation on web text plus trajectories from DeepMind's own agents in Atari, 3D games and robotics. Text, image patches and discretised actions get separate token ranges; the data connects them. It is not yet as good as the specialist agents it learned from.
- **Modularity over retraining.** Flamingo froze the 70-billion-parameter Chinchilla language model and added about 10 billion new parameters to give it vision. Vinyals sees this reuse, like software libraries, as a way to grow models; Gato, by contrast, was trained from scratch.
- **Meta-learning becomes interactive.** Since GPT-3, prompting has let models pick up new tasks without retraining. Vinyals hopes that within five to ten years a system could be taught a game like StarCraft through conversation, examples and feedback, and compares prompting to an advanced form of nearest neighbour.
- **Limits of today's models.** He notes context of about 2,000 words, no learning after deployment, and emergent abilities that only appear past certain scales.
- **People, engineering and benchmarks.** Vinyals credits team engineering, data work and stable benchmarks (citing AlphaFold) for breakthroughs, and notes attention emerged in Montreal partly because of limited compute. He shares Ilya Sutskever's belief in scale but is less convinced than Rich Sutton about search.
- **Sentience.** Asked about the Google engineer who called LaMDA sentient, Vinyals says current models are far from it. Fridman predicts a civil rights movement for robots and future laws restricting displays of sentience.

## Quotes

> "so far the recipe is what's common but the weights you generally throw away which feels very sad" — Oriol Vinyals

> "if the ratio is not at most one to one i would not be happy so i would hope that we are part of the equation" — Oriol Vinyals
