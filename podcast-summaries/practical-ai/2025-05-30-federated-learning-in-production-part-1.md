---
title: "Federated learning in production (part 1)"
date: 2025-05-30
show: practical-ai
episode: 314
url: "https://share.transistor.fm/s/e283a9d0"
duration_min: 45
hosts: ["Chris Benson", "Daniel Whitenack"]
guests: ["Patrick Foley"]
description: "Intel's Patrick Foley argues that privacy, IP protection and governance, more than distributed data alone, are pushing federated learning from research into production."
tags: ["federated-learning", "privacy", "confidential-computing", "open-source", "healthcare-ai"]
source_transcript: "practical-ai/episodes/2025/05/2025-05-30-federated-learning-in-production-part-1.md"
draft: false
---

## Thesis

Patrick Foley, lead AI architect for federated learning at Intel, explains how federated learning sends the model to the data instead of collecting the data in one place. He argues that privacy, protecting model IP and governance between parties who do not trust each other are now the main drivers. Foley's goal is to move the technique out of research and make it a standard way to train models on siloed data.

## Key points

- **How a round works.** Foley describes an aggregator (the server) and collaborators (the clients). The code and a "federated learning plan" are vetted in advance, then only NumPy model weights cross the network. Updates are combined with methods such as FedAvg, which Google introduced in 2017, or FedOpt when data differs between sites.
- **The brain tumour federation.** From around 2018, Intel and the University of Pennsylvania trained a 3D segmentation model across roughly 70 hospitals. Foley says it reached 99% of the accuracy of a centrally trained model. Finding mislabelled data without seeing it was the hardest part.
- **Model types.** Most real deployments use neural networks rather than generative AI, because shared weights are easy to combine. OpenFL recently added federated XGBoost. For large generative models, PEFT and quantisation keep network traffic manageable.
- **OpenFL and Flower.** OpenFL went open source around 2020 and now sits under the Linux Foundation, with Foley chairing its technical steering committee. Flower workloads can now run on OpenFL infrastructure, including inside Intel SGX enclaves.
- **Leakage controls.** Foley lists differential privacy, homomorphic encryption, confidential computing and the Privacy Meter tool, and notes that each one has trade-offs, sometimes in accuracy.
- **Governance as the missing piece.** Benson suggests privacy is the real driver, and Foley agrees. Intel's Hyper Secure Federated AI service adds vetting and identity records so that, for example, competing pharma companies could train together.

## Quotes

> "There's no free lunch, as we say." — Patrick Foley

> "Because we don't want for federated learning to sit in the research world forever." — Patrick Foley
