---
title: >-
  Virtual Cell Models, Tahoe-100 and Data for AI-in-Bio with Vevo Therapeutics
  and the Arc Institute
description: >-
  Vevo and Arc argue that virtual cell models are data-limited, and that the
  open Tahoe-100M perturbation dataset plus Arc's curated atlas give the field
  its ImageNet-style starting point.
pubDate: '2025-02-25'
show: no-priors
episode: 103
url: 'https://www.youtube.com/watch?v=ak_f1BoLP24'
youtube: 'https://www.youtube.com/watch?v=ak_f1BoLP24'
durationMin: 58
hosts:
  - Sarah Guo
  - Elad Gil
guests:
  - Vevo Therapeutics
  - Arc Institute
tags:
  - virtual-cell
  - single-cell-data
  - drug-discovery
  - open-data
  - ai-for-biology
draft: false
---
## Thesis

Sarah Guo talks with Nima Alidoust and Johnny Yu of Vevo Therapeutics and Patrick Hsu, Dave Burke and Hani Goodarzi of the Arc Institute. Their shared claim is that protein and DNA models already had decades of data, but models of whole cells are held back by a lack of large, consistent, perturbational data. They present the open Tahoe-100M dataset and the Arc Virtual Cell Atlas as the step that could unlock virtual cell models for drug discovery.

## Key points

- **Scale and consistency.** Yu says Tahoe-100M roughly doubles all single-cell data published over the past decade: cells from 50 patient cancer models, 1,200 drug treatments and about 60,000 drug-patient interactions, run by four people over about three days to limit batch effects.
- **Why perturbations matter.** Alidoust says all public perturbational data combined was about one to two million cells, and that downsampling earlier observational data by 99% barely hurt model performance. Hsu argues perturbations move biology from correlation to causation.
- **Arc's agent-curated atlas.** Burke describes scBaseCamp, an agent that crawls public sequencing archives and reprocesses about 230 million cells uniformly, giving 330 million cells alongside Tahoe. Goodarzi estimates 100 million cells equals roughly 200-300 billion tokens, against a target near one trillion.
- **Models are still weak.** Burke says the best models predict differentially expressed genes at around 10% accuracy, with no accepted benchmark; Hsu notes 90% of drugs fail in clinical trials, often from picking the wrong target.
- **Platform over single hypothesis.** Alidoust argues for small teams, open sourcing to recruit the community, and a hypothesis-free platform rather than a single-asset biotech. Hsu and Yu see Chinese biotechs' lower cost base as pressure to rethink how US startups are built.
- **Where the field stands.** Burke cites Evo 2, trained on 9.3 trillion nucleotides, predicting BRCA1 variant pathogenicity zero shot. The guests place virtual cell models between GPT-1 and GPT-2, with protein models further along.

## Quotes

> "a small team of superstars rather than you know hiring 100 people paradoxically open sourcing actually allows us to do that" — Nima Alidoust

> "it's going to be the data right that's going to be the difference between where we were yesterday and where we are starting this week" — Dave Burke
