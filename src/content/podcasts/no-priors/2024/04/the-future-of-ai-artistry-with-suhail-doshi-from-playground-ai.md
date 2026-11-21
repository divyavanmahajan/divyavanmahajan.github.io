---
title: The Future of AI Artistry with Suhail Doshi from Playground AI
description: >-
  Suhail Doshi argues image models are stuck at text-to-art and that
  Playground's path runs through editing, careful data curation and, eventually,
  a large vision model that creates, edits and understands.
pubDate: '2024-04-18'
show: no-priors
episode: 60
url: 'https://www.youtube.com/watch?v=YKXgQQ-ELG8'
youtube: 'https://www.youtube.com/watch?v=YKXgQQ-ELG8'
durationMin: 25
hosts:
  - Sarah Guo
  - Elad Gil
guests:
  - Suhail Doshi
tags:
  - image-generation
  - diffusion-models
  - multimodal
  - model-training
  - generative-music
draft: false
---
## Thesis

Suhail Doshi, founder of Playground AI (after Mixpanel and Mighty), argues that today's image models mostly produce art and have little practical use. He wants to move Playground towards editing real images and, in the long run, a multitask "large vision model". He says good results depend less on clever architecture than on curated data, taste and better evals.

## Key points

- **Why images.** Doshi says DALL-E 2 and early access to Stable Diffusion in 2022 convinced him that the field needed a real UI instead of Colab notebooks. He found language crowded and saw few teams fully committed to images.
- **Training Playground v2.5.** Doshi says the team kept the SDXL architecture (UNet, CLIP, the same VAE) to test how far a known recipe could go. The EDM formulation removed SDXL's "average brightness" and gave stronger colour and contrast. He also lists Power EMA (from Tero Karras), offset noise and DPO, but calls supervised fine-tuning on curated data the most important trick.
- **Evals and taste.** Doshi says most industry evals are flawed and built for marketing. His team reviews thousands of images in grids across checkpoints. He admits recent gaps, such as photorealistic faces that looked as if they "hadn't gone to sleep for 3 days".
- **Editing over text-to-art.** He thinks Playground is probably number two in text-to-art. He wants to focus on editing, character consistency and text synthesis, because current generation feels like a loot box.
- **Architecture.** Doshi sees Transformers as the right direction but doubts that DiT is the right architecture. He argues that image models must gain a language model's knowledge, because pixels carry far denser information than language.
- **Music.** He skipped music partly because the whole industry is worth about $26 billion. He now uses Suno for vocals, splits the stems with another tool and adds his own instrumentals.

## Quotes

> "it feels a little like a loot box right now" — Suhail Doshi

> "I don't think that dit is like the right architecture but Transformers certainly" — Suhail Doshi
