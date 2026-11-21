---
title: >-
  The First Mechanistic Interpretability Frontier Lab — Myra Deng & Mark Bissell
  of Goodfire AI
description: >-
  Goodfire's Myra Deng and Mark Bissell argue interpretability is ready for
  production, from PII guardrails and trillion-parameter steering to scientific
  discovery and more intentional model design.
pubDate: '2026-02-06'
show: latent-space
url: >-
  https://lspace.beehiiv.com/podcast/s/latent_space_the_ai_engineer_podcast/the_first_mechanistic_interpretability_frontier_lab_myra_deng_mark_bissell_of_goodfire_ai
durationMin: 68
hosts:
  - Alessio Fanelli
  - swyx
guests:
  - Myra Deng
  - Mark Bissell
tags:
  - interpretability
  - model-steering
  - ai-safety
  - goodfire
  - ai-for-science
draft: false
---
## Thesis

Myra Deng (Head of Product) and Mark Bissell (Member of Technical Staff) present Goodfire as an AI research lab that uses interpretability to understand, learn from and design models, not just to probe them after the fact. They argue that today's training and post-training methods lack intentionality, and that looking inside models enables surgical edits, cheap monitoring and new science. The episode coincides with Goodfire's $150 million Series B at a $1.25 billion valuation.

## Key points

- **Production guardrails at Rakuten.** Goodfire monitors Rakuten's model and agent traffic to catch PII before it reaches downstream providers. The guests say it had to work in English and Japanese, transfer from synthetic training data to real data, and classify at token level. Probes add almost no latency compared with a separate judge model.
- **SAEs versus probes.** Deng says probes trained on raw activations often beat sparse-autoencoder probes, though SAEs generalised best on Rakuten's noisy data. For targeted behaviours such as hallucination, the guests prefer supervised probes over hoping an unsupervised feature appears.
- **Steering at scale.** Bissell demonstrates real-time steering of Kimi K2, a one-trillion-parameter model, switching on a Gen Z slang feature while it still calls tools in the SGLang codebase.
- **Steering and prompting.** The guests point to a paper by Goodfire's Ekdeep and fellows, "Belief Dynamics Reveal the Dual Nature of In-Context Learning and Activation Steering", which maps steering strength to prompt examples, for instance predicting how many examples a jailbreak needs.
- **Science and health.** With Mayo Clinic and Prima Menta, the guests say interpretability on partner foundation models found novel biomarkers for Alzheimer's disease. They also check genomics models for shortcuts such as ancestry.
- **Grounded safety.** The guests describe a practical view of alignment, built on control and scalable oversight, and say they are hiring and want design partners in reasoning, world models and robotics.

## Quotes

> "probes just trained on raw activations seem to perform better than SAE probes, which is a bit surprising" — Myra Deng

> "there's not a whole lot of interp being applied to models quite at, at this scale." — Mark Bissell
