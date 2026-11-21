---
title: >-
  How to train your own Large Multimodal Model — with Hugo Laurençon & Leo
  Tronchon of HuggingFace M4
description: >-
  Hugging Face's M4 team explains how they built OBELICS and trained IDEFICS, an
  open 80B reproduction of Flamingo, and why data work matters more than
  architecture.
pubDate: '2024-01-19'
show: latent-space
url: >-
  https://lspace.beehiiv.com/podcast/s/latent_space_the_ai_engineer_podcast/how_to_train_your_own_large_multimodal_model_with_hugo_laurencon_leo_tronchon_of_huggingface_m4
durationMin: 72
hosts:
  - Alessio Fanelli
  - swyx
guests:
  - Hugo Laurençon
  - Leo Tronchon
tags:
  - multimodal-models
  - open-source-ai
  - datasets
  - training-stability
  - hugging-face
draft: false
---
## Thesis

Hugo Laurençon and Leo Tronchon of Hugging Face's M4 team walk swyx through building OBELICS, an open web-scale dataset of interleaved image-text documents, and training IDEFICS, an open reproduction of DeepMind's Flamingo scaled to 80 billion parameters. Their main argument is that multimodal quality comes mostly from data curation, image resolution and good pretrained backbones, and that Hugging Face has an incentive to put the best models in the open. The transcript has no speaker labels, so most points are credited to the guests jointly.

## Key points

- **Why Hugging Face does research.** The guests say the company has about 160 people with roughly 15 in research, and argue that, unlike labs that keep their best models in-house, Hugging Face benefits from releasing the best open model.
- **Interleaved documents beat pairs for reasoning.** OBELICS holds more than 300 million images parsed from raw Common Crawl HTML. The guests found image-text pairs like LAION are enough for captioning, while web documents drive VQA reasoning; ablations on the mix were inconclusive beyond a threshold.
- **Data cleaning is the slow part.** Building the pipeline took about a month of exploration and up to two more months of processing; text quality was checked with perplexity, which matched The Pile and beat C4 and OSCAR.
- **Training instabilities.** IDEFICS only became stable after adding query-key layer norms, a trick from Google's 22B vision transformer work; they also fixed an attention-mask leak and checkpointed every 250 steps.
- **IDEFICS 2 plans.** The next version swaps Llama for Mistral and the CLIP encoder for Google's SigLIP (384 resolution, about 400M parameters), drops Flamingo-style cross-attention for a linear projection, and fixes the non-commercial licence. Better data alone already matched the 80B model's performance at 9B.
- **Hallucinations and the 2024 update.** The guests split hallucinations into categories such as attributes, absent objects, counting and environment. In a later add-on, Tronchon says training was delayed to address CSAM found in LAION, and the team released WebSight, a synthetic image-to-HTML dataset.

## Quotes

> "the LAION dataset has had, um, an issue with CSAM images, and so we want to get ahead of this and fix the problem before we start the training." — Leo Tronchon

> "releasing the datasets, architecture, and training insights that we get along the way, and then releasing the model." — Leo Tronchon
