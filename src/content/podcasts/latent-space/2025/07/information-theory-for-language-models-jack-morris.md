---
title: 'Information Theory for Language Models: Jack Morris'
description: >-
  Cornell PhD student Jack Morris treats embeddings and model weights as
  information stores, showing how much text they leak and how many bits a
  parameter holds.
pubDate: '2025-07-02'
show: latent-space
url: >-
  https://lspace.beehiiv.com/podcast/s/latent_space_the_ai_engineer_podcast/information_theory_for_language_models_jack_morris
durationMin: 78
hosts:
  - Alessio Fanelli
  - swyx
guests:
  - Jack Morris
tags:
  - information-theory
  - embeddings
  - memorization
  - ai-research
  - datasets
draft: false
---
## Thesis

Jack Morris, a PhD student of Sasha Rush at Cornell Tech, argues that deep learning lacks an equivalent of Shannon's bit: a way to measure usable information under computational limits. His research applies that lens to embeddings and weights, asking how much text a vector reveals and how much a parameter can store. He also argues that AI's paradigm shifts have come from new datasets more than new methods.

## Key points

- **Usable information.** Morris points to the 2020 paper on V-information: a plain text file and its encrypted copy hold the same Shannon information, but only one is usable, which he says helps explain why pre-training works.
- **Embedding inversion.** His paper "Text Embeddings Reveal Almost as Much as Text" (2023) recovered about 90 percent of a long sentence exactly from its embedding; a metric stuck at 30 for months eventually reached around 97. Some vector database companies changed their privacy policies afterwards.
- **Universal geometry.** Building on the Platonic Representation Hypothesis and the 2017 CycleGAN idea, "Harnessing the Universal Geometry of Embeddings" aligns models such as GTR and GTE without paired data. swyx says the result feels obvious; Morris replies that intuition is not proof.
- **Model capacity.** Training on random data, his team measured that GPT-style transformers store about 3.6 to 3.9 bits per parameter, a plateau he compares to measuring a physical constant.
- **Weights to data.** "Approximating Language Model Training Data from Weights" uses the difference between base and fine-tuned checkpoints to select web data via gradients, recreating a fine-tuning set reasonably well.
- **No new ideas, only new datasets.** Morris lists four shifts: AlexNet with ImageNet, web-scale pre-training, instruction tuning with human preference data, and reasoning from verifiable feedback. He says ChatGPT might have been possible with a sophisticated RNN.

## Quotes

> "I don't think we know what a bit is yet in terms of like deep learning models." — Jack Morris

> "transformers that are trained in thirty-two-bit precision, we approximate can store about three point six bits of information to maybe three point nine bits somewhere in there per parameter." — Jack Morris
