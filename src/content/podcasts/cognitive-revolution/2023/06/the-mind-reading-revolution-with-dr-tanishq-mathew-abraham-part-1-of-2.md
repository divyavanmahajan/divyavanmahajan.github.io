---
title: The Mind-Reading Revolution with Dr. Tanishq Mathew Abraham (Part 1 of 2)
description: >-
  Tanishq Mathew Abraham explains how MindEye reconstructs images people saw
  from fMRI scans by mapping brain data into the embedding spaces of frozen CLIP
  and diffusion models.
pubDate: '2023-06-20'
show: cognitive-revolution
url: >-
  https://www.cognitiverevolution.ai/the-mind-reading-revolution-with-dr-tanishq-mathew-abraham-part-1-of-2/
youtube: 'https://www.youtube.com/watch?v=JY7K-hoyqns'
hosts:
  - Nathan Labenz
guests:
  - Tanishq Mathew Abraham
tags:
  - brain-computer-interfaces
  - fmri
  - embeddings
  - diffusion-models
  - open-research
draft: false
---
## Thesis

Tanishq Mathew Abraham, founder of MedARC, argues that breakthrough results are still possible with small datasets and modest compute if you map new data into the latent spaces of existing pretrained models. His team's paper, Reconstructing the Mind's Eye, does this for fMRI scans, reconstructing images a subject viewed. Nathan Labenz frames it as evidence that much value is already embedded in foundation models, waiting for clever bridging architectures.

## Key points

- **The data.** Abraham says the work builds on a public 7 Tesla fMRI dataset of about 8 subjects viewing images, much higher resolution than older 1.5 or 3 Tesla sets. The model uses roughly 15,000 visual-cortex voxels, each a 2 mm cube measuring blood oxygenation.
- **Two pipelines.** An MLP maps voxels to a 257 x 768 CLIP image embedding. Trained with a contrastive loss, this supports retrieval, which Abraham says can find the exact zebra image a subject saw, even within LAION-5B. A diffusion prior, borrowed from OpenAI's DALL-E work, then aligns the embedding so a frozen image generator can use it.
- **Low-level guidance.** A separate model predicts a blurry Stable Diffusion VAE image that captures colour and position and seeds an image-to-image diffusion step. Versatile Diffusion gave the best results because it accepts the full per-patch embedding.
- **Modest scale.** Abraham cites a model of about 940 million parameters; Labenz quotes the paper's training on one A100 for 240 epochs. Models are trained per subject, all development was done on subject 1, and train and test images are kept separate.
- **What's next.** Abraham hopes for a shared fMRI latent space or foundation model where a new person calibrates with a handful of images. He sees wearables as blocked by hardware, since EEG is coarser than fMRI, and points to research uses such as tracking neurological disease or depression.
- **Open collaboration.** The project ran through MedARC on Discord with an open GitHub repo, compute from Stability AI, and lead author Paul Scotti.

## Quotes

> "I think this idea of mapping one latent space to another is a very powerful idea." — Tanishq Mathew Abraham

> "It can be done by people that are sitting somewhere halfway across the world working from their laptop." — Tanishq Mathew Abraham
