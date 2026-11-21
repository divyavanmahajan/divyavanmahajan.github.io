---
title: "Better Data is All You Need — Ari Morcos, Datology"
date: 2025-08-29
show: latent-space
url: "https://lspace.beehiiv.com/podcast/s/latent_space_the_ai_engineer_podcast/better_data_is_all_you_need_ari_morcos_datology"
duration_min: 79
hosts: ["Alessio Fanelli", "swyx"]
guests: ["Ari Morcos"]
description: "Ari Morcos argues that automated data curation is the most underinvested lever in AI, letting teams train models faster, better and smaller than with architecture tweaks."
tags: ["data-curation", "synthetic-data", "scaling-laws", "small-models", "pre-training"]
source_transcript: "latent-space/episodes/2025/08/2025-08-29-better-data-is-all-you-need-ari-morcos-datology.md"
draft: false
---

## Thesis

Ari Morcos, CEO and co-founder of Datology, argues that "models are what they eat": at scale, inductive biases stop mattering and the training data decides model quality. Curation (filtering, rebalancing, ordering, batching and rephrasing) can bend the scaling curve. He says it has to be automated, because humans are bad at judging which data points matter.

## Key points

- **From inductive biases to data.** Morcos says papers such as ConvIT showed that a soft convolutional bias helps below roughly a million data points and then becomes mildly harmful, which pushed him to work on data.
- **Humans cannot curate by hand.** He cites the DCLM study: about 30 students who spent two years designing filters could not predict, above chance, what the DCLM classifiers would keep. A data point's value depends on the rest of the dataset, so 10,000 Hamlet summaries are redundant even if each one is good.
- **Bending scaling laws.** His NeurIPS best paper, Beyond Neural Scaling Laws (led by Ben Sorcher), links power-law scaling to the power-law decay in marginal information per data point. Morcos says Datology matches DCLM about 12x faster, beats the best open datasets by four to five points, and can match larger models with fewer than half the parameters.
- **Rephrasing over distillation.** Morcos separates synthetic data that creates new knowledge (which he calls "distillation in disguise", prone to model collapse) from rephrasing existing data. A weak model can rephrase, and the result can beat training on raw tokens. He names diversity as the single most important property of good data.
- **Train smaller for inference.** He argues that for mature enterprises inference dominates total cost. At $50 million a year in inference, a model twice as big as needed wastes $25 million, while a smaller custom model might cost two or three million dollars to train. He expects most models in use within three years to be single-digit B or smaller.
- **Arcee case.** Datology combined DCLM, Nemotron and FineWeb (about 25 trillion tokens, per Morcos) into about seven trillion for Arcee's model, which was beating Gemma before the one-trillion-token mark.

## Quotes

> "data is the most underinvested in area of research relative to its impact, and I don't think it's even close." — Ari Morcos

> "If you can easily align a model through post-training, you can easily misalign a model through post-training." — Ari Morcos
