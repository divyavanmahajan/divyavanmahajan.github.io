---
title: "Reading Minds from Shared Latent Space"
date: 2024-04-17
show: cognitive-revolution
url: "https://www.cognitiverevolution.ai/reading-minds-from-shared-latent-space/"
youtube: "https://www.youtube.com/watch?v=7_BS8tuUoZY"
duration_min: 94
hosts: ["Nathan Labenz"]
guests: ["Paul Scotti"]
description: "MindEye2 reconstructs what a person saw from fMRI using only one hour of their scans, by mapping brains into a shared latent space and then into frozen CLIP and SDXL models."
tags: ["brain-computer-interfaces", "neuroscience", "foundation-models", "image-generation", "open-science"]
source_transcript: "cognitive-revolution/episodes/2024/04/2024-04-17-reading-minds-from-shared-latent-space.md"
draft: false
---

## Thesis

Paul Scotti, lead author of MindEye2 (MedArc and Stability), explains how his team cut the scan time needed to reconstruct images from a person's fMRI from 30-40 hours to one hour. The key is a shared-subject model plus mapping brain data into the latent space of frozen pre-trained foundation models. Scotti argues that as foundation models improve, medical uses of them improve too, and that the next step is an fMRI foundation model. Nathan Labenz pushes on evaluation, compute and misuse risks.

## Key points

- **The data.** Scotti describes the Natural Scenes Dataset: 8 participants scanned for 30-40 hourly sessions, seeing about 750 images per session, each image shown three times. Only visual-cortex voxels (roughly 12,000-17,000 per person) go into the model.
- **Simple shared space.** Each subject gets their own linear (ridge regression) mapping into a shared 4,096-dimensional latent, even though subjects saw different images. Scotti says this was the first thing they tried and it worked.
- **Map to CLIP, not pixels.** Brain latents are mapped into CLIP image space. Because no good "unCLIP" model existed, the team fine-tuned SDXL to rebuild images from unpooled CLIP embeddings, which preserves layout and low-level detail.
- **Metrics vs. humans.** Scotti says standard reconstruction metrics often disagree with human raters in two-alternative forced-choice tests. Neuroscientists value the retrieval module most: it can pick the exact zebra image out of about 20.
- **Cheap compute.** The model has about 2 billion parameters, mostly one linear layer. Pre-training took under a day on one H100 node, and each fine-tune under a day. Labenz cites Claude 3's estimate of at most about 0.1% of SDXL's training compute.
- **Next steps and limits.** MedArc is training an fMRI foundation model on public datasets such as the Human Connectome Project and UK Biobank, and is working on mental-imagery reconstruction with the University of Minnesota. Scotti rejects Labenz's lie-detection worry for fMRI, since moving a millimetre distorts the data.

## Quotes

> "The key thing is that you don't want to map the voxels to pixels." — Paul Scotti

> "You cannot access things that the person is not directly thinking about." — Paul Scotti
