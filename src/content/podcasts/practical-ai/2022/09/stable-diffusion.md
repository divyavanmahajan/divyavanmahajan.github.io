---
title: Stable Diffusion
description: >-
  Stable Diffusion spread quickly because it is openly released and efficient
  enough for consumer GPUs, thanks to a separately trained autoencoder that lets
  diffusion run on compressed images.
pubDate: '2022-09-13'
show: practical-ai
episode: 193
url: 'https://share.transistor.fm/s/e1f7a9a9'
durationMin: 44
hosts:
  - Chris Benson
  - Daniel Whitenack
guests: []
tags:
  - stable-diffusion
  - diffusion-models
  - generative-ai
  - text-to-image
  - open-source-models
draft: false
---
## Thesis

Daniel Whitenack and Chris Benson explain how Stable Diffusion works and why it took off. Whitenack argues that its creators explicitly aimed for accessibility. The model is open and computationally efficient, so anyone with a modest GPU or a Colab notebook can use it. Benson sees it as the start of new creative and commercial uses.

## Key points

- **Who built it and why.** Whitenack names Stability, Runway ML and researchers from Ludwig Maximilian University (paper authors including Robin Rombach). He contrasts it with DALL-E 2, which requires a waitlist and API access, and with earlier diffusion models, citing a figure of five days on a single A100 to generate 50,000 samples.
- **Eight lines of code.** Using Hugging Face's Diffusers library in Google Colab, Whitenack goes from text to image in eight lines. The model is released under an Open RAIL licence, which users must accept on Hugging Face before downloading.
- **Three components.** A text encoder turns the prompt into an embedding. A U-Net diffusion model, a series of convolutional layers, denoises random noise toward that embedding, conditioned via cross-attention. An autoencoder's decoder then upscales the small result into a full image.
- **The key change.** Whitenack says the autoencoder and diffusion model are trained separately rather than jointly. As a result, diffusion operates on compressed images that need about 64 times less memory, and one autoencoder can serve many downstream diffusion models.
- **Training cost.** The model was trained on about 120 million image-text pairs drawn from a dataset of roughly 6 billion. It used 256 A100s for about 150K hours, around 600K at market price according to a team member's tweet.
- **What comes next.** Whitenack expects fine-tuned variants, some open and some commercial, as happened with BERT, plus diffusion for audio and pairing with GPT-3-generated prompts. Benson foresees video, more accessible special effects and "creative entrepreneurship".

## Quotes

> "I have one, two, three, four, five, six, seven, eight lines of code to go from text to image." — Daniel Whitenack

> "And those compressed images require like 64 times less memory." — Daniel Whitenack
