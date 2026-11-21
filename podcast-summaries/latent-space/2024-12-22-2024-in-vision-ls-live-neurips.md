---
title: "2024 in Vision [LS Live @ NeurIPS]"
date: 2024-12-22
show: latent-space
url: "https://lspace.beehiiv.com/podcast/s/latent_space_the_ai_engineer_podcast/2024_in_vision_ls_live_neurips"
duration_min: 57
hosts: ["Alessio Fanelli", "swyx"]
guests: ["Isaac Robinson", "Peter Robicheaux", "Vik Korrapati"]
description: "Vision in 2024 moved from images to video and from YOLOs to DETRs, while vision language models still struggle to see fine-grained details."
tags: ["computer-vision", "vision-language-models", "video-generation", "object-detection", "edge-ai"]
source_transcript: "latent-space/episodes/2024/12/2024-12-22-2024-in-vision-ls-live-neurips.md"
draft: false
---

## Thesis

Isaac Robinson and Peter Robicheaux of Roboflow pick the papers that shifted computer vision in 2024: per-image methods extended to video, transformer-based detectors overtaking YOLOs, and new work on why vision language models (VLMs) miss fine visual detail. Vik Korrapati of Moondream adds that VLMs lag LLMs at perception because the internet holds little data on how to look at images.

## Key points

- **Sora and video.** Robinson calls Sora the biggest paper of the year even though it is only a blog post. He fills in its likely recipe from OpenSora: LLM-captioned video, space-time latents, a diffusion transformer and a lot of compute.
- **SAM 2.** He says SAM has saved Roboflow users 75 years of labelling time. SAM 2 extends it to video with a memory bank of recent frames and an encoder that gives six times faster inference.
- **DETRs pass YOLOs.** According to Robinson, YOLOs have plateaued, while RT-DETR, LW-DETR and D-FINE reach almost 60 AP on COCO at about 10 ms, helped largely by pre-training.
- **LLMs can't see.** Robicheaux shows ChatGPT and Claude failing to read a watch. The MMVP paper traces this to CLIP-based encoders and builds "CLIP-blind" image pairs on which LLaVA scores below random.
- **Fixes with pixel grounding.** He covers Florence 2, PaliGemma 2 (47.3 on MMVP against 94% for humans) and AIMv2, whose image-reconstruction objective keeps improving with scale.
- **Moondream on the edge.** Korrapati describes pruning a 2B model into a 0.5B one, and using grounded chain-of-thought to read gauges and clocks, which he says is far more sample-efficient than millions of synthetic images.

## Quotes

> "SAM, for us, has saved our users seventy-five years of labeling time." — Isaac Robinson

> "But humans are just so good at perception that we never really talk about it." — Vik Korrapati
