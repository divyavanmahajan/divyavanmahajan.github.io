---
title: 'Synthetic Data with Alex Watson, Founder of Gretel AI'
description: >-
  Gretel AI's Alex Watson argues that synthetic data, measured against real
  distributions and trained with differential privacy, can make datasets both
  more useful and safe to share.
pubDate: '2023-11-14'
show: cognitive-revolution
url: >-
  https://www.cognitiverevolution.ai/synthetic-data-with-alex-watson-founder-of-gretel-ai/
youtube: 'https://www.youtube.com/watch?v=uX8RgKJXjdQ'
durationMin: 81
hosts:
  - Nathan Labenz
guests:
  - Alex Watson
tags:
  - synthetic-data
  - differential-privacy
  - tabular-data
  - small-models
  - data-quality
draft: false
---
## Thesis

Alex Watson, founder and chief product officer of Gretel AI, tells Nathan Labenz that synthetic data has two jobs: letting organisations share data without exposing individuals, and filling gaps in messy, imbalanced training sets. He argues both depend on proving that generated data matches the real distribution, and that small, specialised models are a better route than ever-larger general ones.

## Key points

- **From privacy to training data.** Watson co-founded Harvest AI, which AWS acquired in 2016 and which became Amazon Macie (6,000 customers in its first week). Gretel started on privacy. He says usage is now about fifty-fifty between safe data sharing and improving machine learning datasets, for example boosting a rare minority class.
- **Measuring realism.** Gretel's synthetic quality score (1 to 100) combines pairwise correlations, per-field distributions and PCA distance metrics. Watson says above 80 should work for most ML uses. "Validators" filter outliers such as an age of 135.
- **TabLLM as an agent.** The model was fine-tuned on openly licensed datasets from GitHub and Kaggle. Watson notes a 16k context holds only about 350 rows, so an agent splits million-row requests into smaller tasks and writes code for exact steps like unit conversions.
- **Steering the output.** Watson says temperature alone rarely produces a 1% class, so Gretel uses RLHF to push for more diverse data. Some enterprise customers need guardrails off, for example to generate spear-phishing emails that test their own detectors.
- **Small models and regulation.** Watson, whose company has about 65 people, prefers open models and specialist models run by a "smart enough" LLM. He welcomed the White House executive order. Labenz agrees on narrow systems but wants more caution about scaling to 10^30 FLOPs.
- **Differential privacy.** Watson explains adding noise to the optimiser and clipping gradients so rare attribute combinations are not memorised. He says the utility cost is real on small datasets but shrinks above 100,000 examples. He calls model-collapse worries a matter of unresolved details.

## Quotes

> "I always love this term, you want the model to learn about a disease, but not about a patient." — Alex Watson

> "the idea that synthetic data can be kind of a cleaner, more diverse version of the limited data you might be starting with is a really powerful idea" — Alex Watson
