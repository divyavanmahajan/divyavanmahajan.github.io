---
title: Explaining AI explainability
description: >-
  Darwin AI's generative synthesis produces compact, explainable neural
  networks, and explainability matters because without knowing how a model
  decides, you cannot know where it will fail.
pubDate: '2020-06-08'
show: practical-ai
episode: 91
url: 'https://share.transistor.fm/s/6bb43cbc'
durationMin: 47
hosts:
  - Daniel Whitenack
guests:
  - Sheldon Fernandez
tags:
  - explainability
  - edge-ai
  - generative-synthesis
  - model-compression
  - bias
draft: false
---
## Thesis

Sheldon Fernandez, CEO of Darwin AI, argues that deep learning is hard to build, expensive to run and opaque, and that his company's generative synthesis technique addresses all three by generating smaller, explainable networks. Daniel Whitenack frames the conversation around bias and fairness, noting that models trained on data from a biased world tend to be biased themselves.

## Key points

- **Origins.** Fernandez built an enterprise consulting firm to 700 people before its 2017 acquisition by Avanade. AlphaGo pulled him into deep learning, and he joined a Waterloo academic team led by chief scientist Alexander Wong.
- **Generative synthesis.** Fernandez says the Waterloo team created it to solve three problems: the skill required, computational cost, and not knowing how networks reach conclusions. An inquisitor-generator pair probes an existing network and generates a family of more compact networks with similar accuracy. He contrasts this with AutoML's search across a large space.
- **Why edge AI.** Fernandez says autonomous vehicles, aerospace and defence need on-device inference for latency, while consumer electronics and health care mostly care about privacy.
- **Nonsensical correlations.** Fernandez describes an autonomous vehicle client whose car turned left more often when the sky was a certain shade of purple, because turning was trained in the Nevada desert. Whitenack cites Marco Ribeiro's behavioural tests, which found many failures in commercial sentiment models.
- **Learning from the model.** Fernandez says explainability can also teach experts: a lung cancer CT model focused on lung walls, which radiologists had not considered. Darwin AI also released COVID-Net for chest X-rays.
- **Product choices.** Darwin AI runs on top of TensorFlow, with PyTorch support planned, and is not SaaS because enterprises refused to share models and data. Fernandez stresses human-machine collaboration, recalling BizTalk's promise to replace coders.

## Quotes

> "It was like debugging a program without the source code, right?" — Sheldon Fernandez

> "if you don't understand how a decision is being made, you don't understand where it will fail." — Sheldon Fernandez
