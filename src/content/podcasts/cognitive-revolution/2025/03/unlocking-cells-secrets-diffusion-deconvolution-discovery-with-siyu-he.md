---
title: >-
  Unlocking Cells' Secrets: Diffusion, Deconvolution, & Discovery with Siyu He
  of Squidiff & CORAL
description: >-
  Stanford postdoc Siyu He explains how carefully designed diffusion and graph
  models can simulate single-cell transcriptomes and integrate mismatched
  spatial data, speeding up slow lab research.
pubDate: '2025-03-23'
show: cognitive-revolution
url: >-
  https://www.cognitiverevolution.ai/unlocking-cells-secrets-diffusion-deconvolution-discovery-with-siyu-he-of-squidiff-coral/
youtube: 'https://www.youtube.com/watch?v=tmyuSya_hUM'
hosts:
  - Nathan Labenz
guests:
  - Siyu He
tags:
  - ai-for-biology
  - diffusion-models
  - synthetic-data
  - graph-neural-networks
  - model-validation
draft: false
---
## Thesis

Siyu He, a Stanford postdoc in biomedical data science, argues that purpose-built generative models can stand in for parts of slow, expensive wet-lab work. Her two papers are Squidiff, which generates virtual cell states under different conditions, and CORAL, which merges spatial data captured at different resolutions. Nathan Labenz notes that focused architectures like these still matter in a field the bitter lesson has not yet taken over. He stresses that model outputs give direction but still need experimental validation.

## Key points

- **Why simulate at all.** He says culturing organoids can take months, some brain organoids a year or more, and failed runs mean starting over. A real sequencing round takes at least one week, while the model can explore other conditions in about an hour.
- **Architecture choices.** He corrects the first manuscript: Squidiff pairs a semantic encoder with a DDIM diffusion model, not a VAE, and trains both end to end. Because the data is one-dimensional (30,000 to 60,000 genes per cell), it uses an MLP rather than a U-Net. She picked diffusion over transformers to model complex, stochastic distributions.
- **Latent arithmetic, with caveats.** Conditions are manipulated as vectors in the semantic space, similar to the king/queen embedding example Labenz brings up. He calls the linear approximation an assumption. For validation, intermediate days were held out of training and predicted, and the predictions for those intermediate stages were weaker than expected.
- **Small data, community data.** Around 5,000 cells train in about 15 minutes. She sees data quality and supply as the field's main bottleneck and wants to build foundation models for organoids.
- **CORAL for spatial data.** CORAL deconvolves spatial transcriptomics and proteomics captured at different resolutions. A graph neural network models nearby cells (k nearest neighbours), and a graph Laplace loss term trades smoothness against sharp tissue boundaries.
- **Synthetic data as ground truth.** He validates on simulated data, including a collaborator's SC-Design model, because simulation provides known answers, then transfers to real tissue. She cites Google DeepMind's virtual cell work and CZI's Billion Cells project as signs of larger efforts.

## Quotes

> "So it's a risky thing that we directly rely on the results from the model, so we need to validate as well." — Siyu He

> "I would not say trust the model totally about having some information." — Siyu He
