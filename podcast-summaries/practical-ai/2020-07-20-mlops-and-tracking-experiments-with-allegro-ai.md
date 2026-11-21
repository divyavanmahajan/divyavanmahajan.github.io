---
title: "MLOps and tracking experiments with Allegro AI"
date: 2020-07-20
show: practical-ai
episode: 97
url: "https://share.transistor.fm/s/df5b1946"
duration_min: 51
hosts: ["Chris Benson", "Daniel Whitenack"]
guests: ["Nir Bar-Lev"]
description: "MLOps differs from DevOps because teams run many untested, heavy experiments where data matters as much as code, so experiment tracking, orchestration and data versioning must be integrated."
tags: ["mlops", "experiment-tracking", "data-versioning", "open-source", "deep-learning"]
source_transcript: "practical-ai/episodes/2020/07/2020-07-20-mlops-and-tracking-experiments-with-allegro-ai.md"
draft: false
---

## Thesis

Nir Bar-Lev, CEO and co-founder of Allegro AI and a former Google executive, argues that deep learning needs its own operations discipline. Unlike DevOps, which scales one tested piece of software in production, MLOps must handle many changing experiments on expensive hardware from day one, and track data as closely as code. Allegro's open source Trains tool targets that gap.

## Key points

- **MLOps versus DevOps.** Bar-Lev defines MLOps as moving work from a data scientist's laptop to remote clusters, orchestrating it across a team and automating it. Training runs take hours or days, the code is untested and each experiment differs slightly.
- **Culture is the obstacle.** Bar-Lev says scientists trained in academia were often wary of tools, junior data scientists sometimes led AI teams, and companies told Allegro they could build its product "in three weeks". Tracking usually starts when an engineer on the team says "stop, this is crazy."
- **Data is the "holy grail".** Bar-Lev says novices focus on models while experienced practitioners focus on data: finding skews and holes, adding synthetic data, and versioning datasets and metadata. Whitenack notes the same code can produce different models when only the data changes.
- **How Trains works.** A server logs experiments, clients connect with two lines of code ("automagical"), and agents on GPU or CPU machines pull jobs from queues across on-premises, cloud or hybrid setups. The enterprise version adds caching, "zero data move" and federated learning.
- **Open core strategy.** Bar-Lev says Allegro first built a large data-centric platform before most companies needed it, then open sourced experiment management and lighter MLOps to meet the market where it was. Whitenack cites a friend, Will, who praises its ease of use and responsive team; Trains had just joined the PyTorch ecosystem.

## Quotes

> "It's all about the data. Novices are focused more on the models." — Nir Bar-Lev

> "companies would tell us, what are you talking about? I can build this in three weeks." — Nir Bar-Lev
