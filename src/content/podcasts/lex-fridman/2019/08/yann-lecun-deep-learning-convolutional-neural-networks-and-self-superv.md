---
title: >-
  Yann LeCun: Deep Learning, Convolutional Neural Networks, and Self-Supervised
  Learning
description: >-
  Yann LeCun argues that the next step towards human-level AI is self-supervised
  learning of predictive world models that can handle uncertainty, not more
  labels or trial-and-error reinforcement learning.
pubDate: '2019-08-31'
show: lex-fridman
url: 'https://lexfridman.com/yann-lecun/'
youtube: 'https://www.youtube.com/watch?v=SGSOCuByo24'
durationMin: 76
hosts:
  - Lex Fridman
guests:
  - Yann LeCun
tags:
  - deep-learning
  - self-supervised-learning
  - world-models
  - reinforcement-learning
  - ai-history
draft: false
---
## Thesis

Yann LeCun, Turing Award co-recipient and Chief AI Scientist at Facebook, tells Lex Fridman that intelligence is inseparable from learning, and that the main obstacle to human-level AI is getting machines to learn predictive models of the world by observation, as babies do. He says self-supervised learning works for language because uncertainty over words is easy to represent, but not yet for images and video, and that solving this is the first of an unknown number of "mountains" to climb.

## Key points

- **Objectives as law.** LeCun reads HAL 9000 as a case of value misalignment and argues that designing objective functions is not new: legal codes have shaped human objectives for millennia.
- **Reasoning without logic.** He argues reasoning must be made compatible with gradient-based learning, needing a hippocampus-like working memory, recurrent access to it, and planning by energy minimisation. He cites Geoff Hinton's idea of replacing symbols with vectors and Léon Bottou's paper "From Machine Learning to Machine Reasoning".
- **Why neural nets fell out of favour.** LeCun recalls writing a Lisp interpreter and a compiler to C at Bell Labs, AT&T lawyers blocking open source, and a convolutional net patent that went to NCR in the 1996 split and expired in 2007. Check-reading systems based on convolutional nets were deployed in ATMs from 1994.
- **Humans are not general.** Using a thought experiment of randomly permuting the optic nerve's million fibres, he argues the visual cortex can compute only a tiny sliver of possible Boolean functions, so he rejects the term AGI.
- **Limits of model-free RL.** LeCun notes model-free RL needs about 80 hours to reach the Atari level humans reach in 15 minutes, and AlphaStar the equivalent of 200 years of play; people learn to drive in 20 to 30 hours because they carry a model of intuitive physics.
- **Benchmarks and hype.** He wants benchmarks where unlabelled pre-training cuts the labelled samples needed (for example in medical imaging), criticises the Sophia robot and hyped startups, and says grounding, not embodiment, is needed for language understanding.

## Quotes

> "machine learning is the science of sloppiness really" — Yann LeCun

> "I don't like the term a GI because it implies that human intelligence is general and human intelligence is nothing like general it's very very specialized" — Yann LeCun
