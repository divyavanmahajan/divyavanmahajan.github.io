---
title: UBER and Intel’s Machine Learning platforms
description: >-
  Edge deployment needs pruned, quantized networks that stay portable across
  silicon, while production ML at scale needs a shared platform with a feature
  store, as Intel and Uber explain.
pubDate: '2018-11-19'
show: practical-ai
episode: 21
url: 'https://share.transistor.fm/s/27edd2af'
durationMin: 29
hosts:
  - Chris Benson
  - Daniel Whitenack
guests:
  - Cormac Brick
  - Mike Del Balso
tags:
  - edge-ai
  - model-compression
  - ml-platforms
  - feature-store
  - mlops
draft: false
---
## Thesis

Two interviews recorded by Daniel Whitenack at O'Reilly AI in San Francisco. Cormac Brick of Intel's Movidius group argues that a small set of compression techniques lets a network run well on edge hardware without giving up portability across chips. Mike Del Balso of Uber argues that a company-wide ML platform, Michelangelo, is needed to move models from prototype to reliable production.

## Key points

- **Edge use cases.** Brick says Movidius's Myriad 2 chip is used in smart cameras, robots, the Google Clips camera and DJI drones, which can land on a user's palm after a hand gesture.
- **Four portable techniques.** Brick names channel pruning, sparsification, 8-bit quantization and lower-bit weights. A model retrained from ResNet 50's 1,000 ImageNet classes for 100 household objects can be much smaller, and the techniques help on any chip while some chips gain more. For a single known target, he points to AutoML-style search as a research area.
- **Tooling.** Brick says reproducing these results is still non-trivial. Intel's open source Distiller project gathers scattered PyTorch techniques in one place (exportable via ONNX), and he credits similar tools in TensorFlow contrib.
- **Why a platform.** Del Balso describes Uber before Michelangelo: teams trying to serve R models at low latency, duplicated per-team infrastructure, and some teams unable to reach production. Michelangelo now runs well over 100 use cases, from fraud to arrival-time prediction to Uber Eats dish ranking.
- **Feature store.** Del Balso says the most adopted feature is the feature store. It applies the same transforms offline for training and in real time for serving, and lets teams such as Uber Eats, which use more than 10 models, reuse each other's features.
- **Balancing users.** Del Balso says Michelangelo lets data scientists keep working in Jupyter, makes the move to hardened production systems easy, and monitors accuracy and model drift.

## Quotes

> "it's not sexy at all to work on that stuff, and also because it's just super hard to do properly." — Mike Del Balso

> "If you go back 15 months, people, you know, or two years ago, people really associated AI with the cloud, right?" — Cormac Brick
