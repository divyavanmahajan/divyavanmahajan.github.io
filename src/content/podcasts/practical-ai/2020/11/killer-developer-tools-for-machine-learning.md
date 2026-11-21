---
title: Killer developer tools for machine learning
description: >-
  Lukas Biewald argues that machine learning tooling is broken at almost every
  step, and that passive experiment tracking and data versioning are the first
  fixes practitioners need.
pubDate: '2020-11-09'
show: practical-ai
episode: 111
url: 'https://share.transistor.fm/s/209b5978'
durationMin: 51
hosts:
  - Chris Benson
  - Daniel Whitenack
guests:
  - Lukas Biewald
tags:
  - mlops
  - experiment-tracking
  - data-versioning
  - developer-tools
  - data-labeling
draft: false
---
## Thesis

Lukas Biewald, founder and CEO of Weights & Biases, tells Daniel Whitenack and Chris Benson that standard software practices do not translate well to statistical machine learning work. He argues that the tooling is especially poor for deep learning, and that recording every training run automatically is the foundation for reproducibility, safety and team collaboration.

## Key points

- **Labels decide quality.** Biewald describes finding that his grad-school research on word sense disambiguation was really detecting annotators, and that search launches at Yahoo depended on how carefully each country labelled data. This led him to found Crowdflower (later Figure Eight, sold to Appen).
- **Back to basics at OpenAI.** Worried he was out of date on deep learning, he took an internship at OpenAI and found the tooling "strikingly, shockingly bad", which prompted Weights & Biases.
- **Track runs passively.** The core product logs system and performance metrics and compares runs in context, unlike TensorBoard at the time. It saves the commit and a diff of uncommitted code, so a team can later reconstruct what a deployed model was trained on.
- **Culture gap with DevOps.** Biewald says data scientists learn to write throwaway code, while continuous integration tools assume every test must pass. He argues teams should accept that ML systems have non-zero error rates and plan for errors.
- **Customer-driven features.** Sweeps (hyperparameter search) and Artifacts (data versioning) came from user requests. He says Git LFS goes unused because datasets live in object stores and many practitioners find Git intimidating.
- **Case study and roadmap.** John Deere's Blue River team attaches reports to pull requests and links data versions to experiments for weed-spraying tractors. Biewald wants to add production monitoring and drift detection, and mentions Andrej Karpathy's idea of an IDE for ML.

## Quotes

> "I think data science trains you to be bad at DevOps, right?" — Lukas Biewald

> "the industry does have to acknowledge that 100% accuracy in most applications is not attainable, even in life or death ones" — Lukas Biewald
