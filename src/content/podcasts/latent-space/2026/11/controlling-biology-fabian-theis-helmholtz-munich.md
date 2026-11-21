---
title: 'Controlling Biology - Fabian Theis, Helmholtz Munich'
description: >-
  Virtual cells are really perturbation world models; with richer data, strong
  baselines and generative models, computational biology can move from mapping
  and prediction to steering the next experiment.
pubDate: '2026-11-06'
show: latent-space
url: >-
  https://lspace.beehiiv.com/podcast/s/latent_space_the_ai_engineer_podcast/controlling_biology_-_fabian_theis_helmholtz_munich_1
durationMin: 51
hosts:
  - Alessio Fanelli
  - swyx
guests:
  - Fabian Theis
tags:
  - virtual-cell
  - computational-biology
  - single-cell
  - world-models
  - lab-in-the-loop
draft: false
---
## Thesis

Fabian Theis, who leads AI and computational biology work at Helmholtz Munich, tells Latent Space AI for Science co-hosts RJ (Mira Omics) and Brandon (Atomic AI) that a virtual cell is best understood as a world model: given a cell state and an action (a perturbation), predict the next state. He argues the field went from mapping cells to predicting them, and is now starting to use inverse models to decide which experiment to run next.

## Key points

- **Data is the unlock.** Theis's lab started perturbation prediction in 2019 with scGen. He says early models were limited by simple datasets; now experiments measure about ten million transcriptomes at once, across many cell lines and drug batteries. He cites Biohub's $1.8 billion collaboration with the DOE, NIH, Meta and Google as part of this scale-up, and argues organoids are needed for richer multicellular readouts.
- **A perturbation is any input.** Theis defines perturbation broadly: CRISPR knockouts, but also drugs, media conditions, signals from neighbouring cells and human genetic variation.
- **Baselines matter.** His lab once published that deep learning is not needed for cell type prediction within an organ, where logistic regression works. He says the Arc Institute's Virtual Cell Challenge used metrics that could be exploited, but the underlying winner was a nonlinear flow matching model. He tells students to beat even predicting the mean.
- **Scaling and world models.** His contrastive model scConcert now has a 350-million-cell, 16-species version on Hugging Face with up to about 100 million parameters and shows scaling behaviour. Representation learning gives the state space; a generative model such as CellFlow (accepted at Nature Methods) handles the push forward under a perturbation.
- **Commercialisation needs data.** Theis notes many platform companies pivot to drugs. He sees the moat in pairing models with unique data, as in the Cancer Organoid Perturbation Atlas consortium that pharma buys into.
- **Institutions.** His Computational Health Center has about 45 group leaders and 500-600 people. Munich School for Data Science students have two advisors, one methods and one domain (the "Y model"). He says Germany creates startups but loses companies at the scaling stage.

## Quotes

> "From mapping, we went to prediction. But now we can go to actually steering the next experiment." — Fabian Theis

> "the ultimate vision being that we want to RL everything. We want to do RL also in, in this loop." — Fabian Theis
