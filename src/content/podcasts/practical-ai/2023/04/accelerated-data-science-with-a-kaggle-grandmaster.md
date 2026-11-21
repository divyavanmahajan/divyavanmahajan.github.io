---
title: Accelerated data science with a Kaggle grandmaster
description: >-
  Kaggle grandmaster Christof Henkel argues that competitions closely mirror
  real prototyping work, and that fast, GPU-accelerated pipelines win by
  allowing more experiments.
pubDate: '2023-04-04'
show: practical-ai
episode: 217
url: 'https://share.transistor.fm/s/c04ce2de'
durationMin: 44
hosts:
  - Chris Benson
  - Daniel Whitenack
guests:
  - Christof Henkel
tags:
  - kaggle
  - data-science
  - gpu-acceleration
  - careers
  - ml-workflow
draft: false
---
## Thesis

Christof Henkel, a senior deep learning data scientist at NVIDIA and a triple Kaggle grandmaster, argues that Kaggle competitions build the same skills as real-world prototyping projects. At the top level, he says, the edge comes from running more experiments than rivals. That means optimising and GPU-accelerating the whole pipeline, not just model training.

## Key points

- **What a grandmaster is.** Henkel explains Kaggle's four progression tracks: competitions, notebooks, discussions and datasets. He is a grandmaster in the first three. He says only about 280 of Kaggle's 10 million users are competition grandmasters.
- **Career path.** Henkel started Kaggle while waiting for his mathematics PhD defence, about six years earlier, while working as a risk analytics consultant. He later moved to a data science team, founded his own deep learning consultancy, and then joined NVIDIA. He recalls early clients who were cautious and had no GPUs.
- **Kaggle as work practice.** Henkel says a three-month competition resembles a prototype project: an unfamiliar domain, teamwork under pressure, and code that has to run within restricted inference limits. Benson suggests using Kaggle teams for recruiting, and Henkel notes that some sponsors already offer jobs to top finishers.
- **Proudest result.** Henkel won the Google Landmark competition three times, twice solo. It has 5 million images and 80,000 classes, some with only one or two images.
- **Accelerating the pipeline.** Henkel cites NVIDIA RAPIDS (cuDF for pandas-style work, cuML for scikit-learn-style work) and DALI for GPU image decoding. He says data loading can be about 100x faster. He spends a competition's first two weeks optimising his workflow, which runs on a modular, Docker-based setup.
- **Advice for beginners.** Henkel says to enter one of the 15 to 20 open competitions, expect to do poorly at first, and start with simple models on subsets or downsampled data.

## Quotes

> "Most of the time, I'm not running out of ideas, but I'm running out of time in the competition." — Christof Henkel

> "There's basically nothing to lose. You just can gain knowledge." — Christof Henkel
