---
title: "Using edge models to find sensitive data"
date: 2024-06-13
show: practical-ai
episode: 273
url: "https://share.transistor.fm/s/2a3a610c"
duration_min: 38
hosts: ["Daniel Whitenack"]
guests: ["Ramin Mohammadi"]
description: "Tausight's Ramin Mohammadi argues that small, optimised ML models running on hospital laptops and servers find hidden health data far better than regex rules."
tags: ["healthcare", "data-privacy", "edge-ai", "model-optimization", "federated-learning"]
source_transcript: "practical-ai/episodes/2024/06/2024-06-13-using-edge-models-to-find-sensitive-data.md"
draft: false
---

## Thesis

Ramin Mohammadi, AI and ML lead at Tausight and adjunct professor at Northeastern, argues that rule-based tools cannot keep track of personal health information (PHI) scattered across healthcare networks. Tausight instead runs compact models directly on the devices where data lives, bringing the AI to the data rather than the data to the AI. He tells Daniel Whitenack that the hard parts are data creation, labelling and fitting within strict hardware limits.

## Key points

- **Size of the problem.** Mohammadi cites 133 million breached healthcare records in 2023, affecting one in three Americans; 78% came from network hacking, and about 70% of incidents occurred through third-party business partners rather than hospitals themselves.
- **Dark PHI.** Existing tools rely on regex patterns, but about 80% of healthcare data is unstructured. In one study Tausight found 8,000 file extensions in a prospect's environment, some containing patient last names or used to bypass rules.
- **No real data, no cloud.** Mohammadi says no healthcare organisation will share patient data for training, so Tausight builds curated synthetic datasets; even human labellers have an 8-10% error rate on PHI, and nothing can leave the edge.
- **Tight hardware budgets.** Hospital machines often have at most 4 GB of RAM and legacy CPUs, and IT blocks applications that exceed memory or CPU limits. Even Microsoft's Phi-3 is too heavy, so Tausight uses knowledge distillation, quantisation and pruning; one model has about 50 million parameters.
- **Edge future, slowly.** He cites a Schneider Electric forecast that AI workloads will shift from 95% in data centres to an even split with the edge by 2028, but notes hospitals refresh machines roughly every five years.
- **What's next.** Mohammadi is watching small language models for edge deployment and is working on federated learning, which he considers necessary where data cannot be moved.

## Quotes

> "Regex is always as good as the person who's writing it." — Ramin Mohammadi

> "We bring the AI to the data rather than taking the data to the AI" — Ramin Mohammadi
