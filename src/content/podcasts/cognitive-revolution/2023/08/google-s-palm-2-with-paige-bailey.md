---
title: Google’s PaLM-2 with Paige Bailey
description: >-
  PaLM 2's lead product manager explains how Google built and shipped a frontier
  model in about a year, and why apparent reasoning often turns out to be
  pattern matching.
pubDate: '2023-08-09'
show: cognitive-revolution
url: 'https://www.cognitiverevolution.ai/googles-palm-2-with-paige-bailey/'
youtube: 'https://www.youtube.com/watch?v=K-XYxLifpQE'
hosts:
  - Nathan Labenz
guests:
  - Paige Bailey
tags:
  - large-language-models
  - google-deepmind
  - product-management
  - code-generation
  - reasoning
draft: false
---
## Thesis

Paige Bailey, lead product manager on PaLM 2 at Google DeepMind, describes product-managing a frontier language model as coordinating data, compute, evals and dozens of downstream deployments. She tells Nathan Labenz that what looks like model reasoning often breaks under small perturbations. In her view, the biggest gains will come from code data and from loops that combine models with execution feedback.

## Key points

- **A PM for a model, not an app.** Bailey says the job covers the pre-training data mix, compliance, responsible-AI and capability evals, keeping eval data out of training, and constantly testing the latest checkpoints. She compares the effort to an Apollo program.
- **Shipping at scale.** PaLM 2 launched at I/O with over 25 deployments already in place. Bailey says it is now in more than 38 products and features, in sizes ranging from mobile devices to clusters. She calls the Brain-DeepMind merger good for collaboration and rejects the narrative that Google cannot ship.
- **Efficiency broadens access.** Bailey argues that distillation and efficient serving matter so that powerful models do not stay limited to people who can pay for accelerators.
- **Reasoning versus pattern matching.** Using the blocks-on-a-shelf example, Bailey says models that seem to reason often fail once the entities or wording change. She recommends a reasoning workshop panel and the talk "Avenging Polanyi's Revenge".
- **Surprising capabilities from data.** Including diffs and commit messages unlocked performance fixes and API migrations. Engineer Rohan Anil had PaLM 2 explain code line by line in Malayalam.
- **Code drives progress.** Bailey leads a Code AI effort of 150+ researchers and points to Codey and Duet AI for Developers. She says continued pre-training on code improved math, logic and natural language too. She expects execution feedback to matter and would not be surprised by a successor to the transformer.

## Quotes

> "It feels an awful lot like working on an Apollo program to be training one of these models." — Paige Bailey

> "the more source code that you include in pretraining data mixtures and the more math style data, the better it gets at all the things." — Paige Bailey
