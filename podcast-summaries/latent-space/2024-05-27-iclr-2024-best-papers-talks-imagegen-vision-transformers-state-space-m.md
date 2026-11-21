---
title: "ICLR 2024 — Best Papers & Talks (ImageGen, Vision, Transformers, State Space Models) ft. Durk Kingma, Christian Szegedy, Ilya Sutskever"
date: 2024-05-27
show: latent-space
url: "https://lspace.beehiiv.com/podcast/s/latent_space_the_ai_engineer_podcast/iclr_2024_best_papers_talks_imagegen_vision_transformers_state_space_models_ft_durk_kingma_christian_szegedy_ilya_sutskever"
duration_min: 218
hosts: ["Alessio Fanelli", "swyx"]
guests: ["Best Papers"]
description: "An audio tour of ICLR 2024 arguing that learning representations is compression, from VAEs and adversarial examples to vision registers, long-context tricks and state space models."
tags: ["iclr-2024", "diffusion-models", "vision-transformers", "state-space-models", "long-context"]
source_transcript: "latent-space/episodes/2024/05/2024-05-27-iclr-2024-best-papers-talks-imagegen-vision-transformers-state-space-m.md"
draft: false
---

## Thesis

The hosts stitch together ICLR 2024 award talks and poster interviews around one thread: learning good representations is a form of compression, and many model flaws come from what models compress away. Speakers cover image generation, vision, efficient transformers and state space models, ending with a paper that tempers the claim that SSMs beat transformers.

## Key points

- **The VAE, ten years on.** Kingma and Welling's Auto-Encoding Variational Bayes won the first ICLR Test of Time Award. Kingma presents diffusion models as a special case of the VAE and names a VAE that scales to the largest sizes as an open problem.
- **Compression as a theory of unsupervised learning.** In a Simons Institute clip, Ilya Sutskever frames unsupervised learning as compressing two datasets jointly, with low regret meaning you got all the help the unlabeled data could give. Christian Szegedy of xAI calls DeepMind's "Language Modeling is Compression" paper mostly known, but notes that a text-only model still compresses images well.
- **Adversarial examples.** Accepting the runner-up award, Szegedy says the paper was first written in MATLAB using L-BFGS. He calls its most underrated result the transfer of adversarial examples across models and across data splits, which makes black-box attacks possible.
- **Vision fixes.** Meta's "Vision Transformers Need Registers" shows that high-norm artifact tokens store global information; adding even one register token cleans the attention maps. A Google pause-token paper adds delays at random positions during pre-training, at a ten percent rate.
- **Efficient transformers.** LongLoRA extends Llama 2 7B to 100K context on a single 8xA100 machine; Nous Research's Bowen Peng explains YaRN; FastGen cuts KV cache memory by about forty percent; DeepSpeed's ZeRO++ reduces communication volume by 4x.
- **State space models.** Sasha Rush explains Mamba-style selective SSMs and parallel scans, then applies them to byte-level modeling and diffusion without patching. A closing outstanding paper finds that self pre-training improves transformers on Long Range Arena by more than thirty percent.

## Quotes

> "It is not obvious, but it is well known that compression is prediction. Every compressor can be turned to a predictor and vice versa." — Ilya Sutskever

> "The models are still large. You still have to have a lot of parameters, and it still requires the same amount of data." — Sasha Rush
