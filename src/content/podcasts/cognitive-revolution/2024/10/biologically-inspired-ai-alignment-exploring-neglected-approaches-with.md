---
title: >-
  Biologically Inspired AI Alignment: Exploring Neglected Approaches with AE
  Studio's Judd and Mike
description: >-
  AE Studio funds neglected, brain-inspired alignment bets from consulting
  profits, and its self-modeling and self-other overlap results suggest simple
  training changes can make models simpler and less deceptive.
pubDate: '2024-10-05'
show: cognitive-revolution
url: >-
  https://www.cognitiverevolution.ai/biologically-inspired-ai-alignment-exploring-neglected-approaches-with-ae-studios-judd-and-mike/
youtube: 'https://www.youtube.com/watch?v=1C3yLKAvPw8'
hosts:
  - Nathan Labenz
guests:
  - Mike Vaiana
  - Judd Rosenblatt
tags:
  - ai-alignment
  - ai-safety
  - neglected-approaches
  - self-modeling
  - deception
  - consciousness
draft: false
---
## Thesis

Judd Rosenblatt and Mike Vaiana of AE Studio argue that alignment research should put far more effort into neglected approaches: ideas that are individually unlikely to work but very high impact if they do. Their two recent results, borrowed from how brains model themselves and others, show that small changes to the loss function can make networks simpler and less deceptive without losing capability. Host Nathan Labenz calls both papers among his favourites of 2024.

## Key points

- **A bootstrapped route to alignment.** Rosenblatt describes growing a profitable, investor-free software consultancy to over 160 people, selling a spin-off startup, and funding brain-computer interface work. Internally they estimated BCI was at least 30 years from helping alignment, so they moved to shorter-horizon bets.
- **The researcher survey.** Rosenblatt says alignment researchers do not think the field is on track, yet most effort goes to mechanistic interpretability and evals. 70% disagreed that research which might also advance capabilities should not be done.
- **Self-modeling.** Vaiana explains that they add one output layer asking a network to predict its own penultimate-layer activations. On MNIST, CIFAR and IMDB the networks became simpler, measured by the RLCT metric, with no performance loss. The work was inspired by Princeton's Michael Graziano and his attention schema theory.
- **Self-other overlap.** In a toy reinforcement-learning setup, an already deceptive agent was fine-tuned so its activations matched with and without an adversary present. Vaiana says this removed deception while keeping capability, without needing to know how the policy works. LLM results were still unpublished.
- **Cost and scale.** Vaiana says self-modeling adds a single square linear layer, while self-other overlap fine-tuning might cost about as much as an RLHF pass.
- **Policy and talent.** Rosenblatt calls for more people with "softer" skills in alignment organisations, stronger whistleblower protections, and keeping AI safety from becoming a partisan issue.

## Quotes

> "You just add another loss function that says, "Do your task, but also predict yourself." That's the entire setup." — Mike Vaiana

> "It seems to turn out that it may be possible to have a negative alignment tax" — Judd Rosenblatt
