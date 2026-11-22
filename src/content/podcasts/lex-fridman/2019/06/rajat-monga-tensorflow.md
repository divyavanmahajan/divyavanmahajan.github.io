---
title: 'Rajat Monga: TensorFlow'
description: >-
  Rajat Monga explains how TensorFlow grew from Google Brain's internal
  DistBelief into an open ecosystem, and why TensorFlow 2.0 trades some
  compatibility for simplicity through Keras and eager execution.
pubDate: '2019-06-03'
show: lex-fridman
url: 'https://lexfridman.com/rajat-monga/'
youtube: 'https://www.youtube.com/watch?v=NERNE4UThHU'
durationMin: 71
hosts:
  - Lex Fridman
guests:
  - Rajat Monga
tags:
  - tensorflow
  - deep-learning
  - open-source
  - machine-learning-infrastructure
  - google
draft: false
---
## Thesis

Rajat Monga, the Google engineering director leading TensorFlow, tells Lex Fridman that TensorFlow succeeded because it was built for both research flexibility and production deployment, open-sourced at the moment deep learning took off, and then shaped by listening to its community. He presents TensorFlow 2.0 as a simplification: one recommended API (Keras), eager execution by default, and a goal of running machine learning on every device with compute.

## Key points

- **From DistBelief to open source.** Monga describes Google Brain's 2011 start with Jeff Dean and Andrew Ng, early wins in speech and the "cat paper", and runs on up to 10,000 machines. Work on TensorFlow began in summer 2014 and it was open-sourced in November 2015; he credits Dean with pushing for openness, partly after watching Hadoop and HBase become standards built on Google papers.
- **Graphs versus eager.** Monga says the original graph design came from production needs: without a graph, deployment was hard. He acknowledges PyTorch's research-first approach was a useful competitor and says eager execution "might have taken longer" without it.
- **Keras integration.** François Chollet built Keras outside Google; Monga recounts inviting him to join the team for a quarter, which turned into about two years. With several competing high-level APIs confusing users, the team picked Keras as the standard for 2.0.
- **What enterprises want.** Monga argues that enterprises mostly need stability, structured-data predictions and full pipelines (TensorFlow Extended), not the newest models; many still run Inception or ResNet-50. He advises starting with something basic that works.
- **Scale and modularity.** Fridman cites 41 million downloads and 1,800 contributors. Monga says the core is still monolithic and the next challenge is splitting it with clean interfaces, likening it to changing an engine while the car runs. He moved governance towards RFCs and special interest groups rather than a single decision-maker.
- **Teams and ads.** On management, Monga values cohesion and motivation over lone superstars. Recalling his search ads work, he says ads below a quality threshold were not shown even at a revenue cost, and he expects a mix of ad-funded and paid services.

## Quotes

> "unless you've designed with the clean slate and not worried about that you'll never get to a good place" — Rajat Monga

> "how do we help get machine learning on every device that has the compute capability" — Rajat Monga
