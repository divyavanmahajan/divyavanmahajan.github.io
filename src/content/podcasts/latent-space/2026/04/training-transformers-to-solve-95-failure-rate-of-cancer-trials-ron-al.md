---
title: "\U0001F52C Training Transformers to solve 95% failure rate of Cancer Trials — Ron Alfa & Daniel Bear, Noetik"
description: >-
  Noetik argues most cancer drugs fail because of patient selection, and that
  self-supervised models trained on proprietary multimodal tumor data can match
  drugs to the right patients.
pubDate: '2026-04-20'
show: latent-space
url: >-
  https://lspace.beehiiv.com/podcast/s/latent_space_the_ai_engineer_podcast/training_transformers_to_solve_95_failure_rate_of_cancer_trials_ron_alfa_daniel_bear_noetik
durationMin: 85
hosts:
  - Alessio Fanelli
  - swyx
guests:
  - Ron Alfa
  - Daniel Bear
tags:
  - ai-for-biology
  - clinical-trials
  - self-supervised-learning
  - foundation-models
  - data-strategy
draft: false
---
## Thesis

Noetik CEO Ron Alfa argues that 90-95% of cancer drugs fail in the clinic not because of bad chemistry but because trials enrol the wrong patients. He and VP of AI Daniel Bear say the answer is self-supervised models trained on purpose-built human tumor data, which can find therapeutically relevant patient subtypes. Both say that only works once the data reaches a certain scale.

## Key points

- **Cell lines don't translate.** Alfa argues that decades-old immortalized cell lines and mouse xenografts tell clinical teams little about which patients to enrol. Early trials therefore run open-label across all tumor types and miss the signal.
- **Designed data, not scraped data.** Noetik sources its own tumors and generates paired H&E, multiplex protein and spatial transcriptomics data. Each patient appears on several randomized arrays so batch effects can be controlled. Bear says the dataset is over 100 million spatially resolved cells. Training on 40% or 10% of it makes models clearly worse, especially at generalizing to other cancers.
- **H&E-only inference.** Bear explains that the models train on all modalities but need only a standard H&E image at inference time. That means archived images from past Phase II/III trials can be split into responder and non-responder clusters, with predicted gene expression to help interpret them.
- **Scaling with autoregression.** Bear describes moving from masked autoencoding (OctoVC) to an autoregressive transformer the transcript renders as "Tarreo". It scaled better, but larger models only pulled ahead at longer context lengths, meaning more tissue in view.
- **Validation handles.** Alfa says the models recover known biology without labels, such as the roughly 12% of lung cancer patients who respond to checkpoint inhibitors. A barcoded in-vivo mouse knockout platform (PerturbMap) checks the predictions.
- **Model licensing as business.** Alfa describes a $50 million GSK deal for OctoVC: an upfront payment, milestones and an annual license fee, with GSK able to fine-tune on its own translational data. He calls it the first announced foundation-model licensing deal in the space. He also says Noetik generated data for about 18 months before it could train any model.

## Quotes

> "Most of those drugs fail, we'd argue, is because we're bad at selecting which patients those drugs are going to work in." — Ron Alfa

> "you only really see the benefits of using larger models when you're looking at longer context lengths." — Daniel Bear
