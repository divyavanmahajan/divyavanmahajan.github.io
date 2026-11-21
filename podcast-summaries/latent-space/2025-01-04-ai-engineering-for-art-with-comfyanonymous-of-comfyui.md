---
title: "AI Engineering for Art — with comfyanonymous, of ComfyUI"
date: 2025-01-04
show: latent-space
url: "https://lspace.beehiiv.com/podcast/s/latent_space_the_ai_engineer_podcast/ai_engineering_for_art_with_comfyanonymous_of_comfyui"
duration_min: 55
hosts: ["Alessio Fanelli", "swyx"]
guests: ["comfyanonymous"]
description: "comfyanonymous explains how ComfyUI's node-based, power-user approach to diffusion workflows, plus efficient local inference, overtook Automatic1111 and became the backbone of open image generation."
tags: ["image-generation", "diffusion-models", "comfyui", "open-source", "local-inference"]
source_transcript: "latent-space/episodes/2025/01/2025-01-04-ai-engineering-for-art-with-comfyanonymous-of-comfyui.md"
draft: false
---

## Thesis

In his first podcast appearance, comfyanonymous, the anonymous creator of ComfyUI, tells swyx and Alessio Fanelli why he deliberately built a node graph interface aimed at power users rather than an easy one. In his account, the backend engineering decided the winner: memory management and efficient local execution made ComfyUI the only practical way for many people to run SDXL. He now plans to keep the open-source core and add paid products on top.

## Key points

- **Origins.** He found Stable Diffusion in October 2022 with no PyTorch background. Automatic1111's code base was too hard to extend for chaining models in a high-res fix, so he started writing ComfyUI on January 1, 2023 and released it on GitHub on January 16. An area-conditioning post on Reddit and a video by YouTuber Olivio brought early attention.
- **Stability and SDXL.** Stability hired him in June 2023 to try chaining the SDXL base and refiner models. When SDXL 0.9 weights leaked, and later at the 1.0 release, ComfyUI was the only way many users without a 4090 could run the model, because Automatic's implementation was too inefficient.
- **Engineering choices.** He used the LightGraph JavaScript library instead of React Flow and rejects Gradio for "real software" because it mixes UI and backend logic. Memory management was the hardest part: models must stay in GPU memory without tipping the Nvidia Windows driver into paging to RAM. He says AMD still works badly on Windows.
- **Model landscape.** He calls Flux the best image model and SD 3.5 (2.5B and 8B) more creative. Stable Cascade sat in red teaming for about three months, then lost its momentum when SD3 was announced. Prompt weighting works on CLIP-L but not on deep encoders like T5-XXL, and LongCLIP raises the 77-token limit to 256.
- **Video and ecosystem.** He separates "true" video models with 3D latents and a temporal VAE, such as Mochi, from Stable Video Diffusion and AnimateDiff. Custom nodes became an ecosystem that includes a Krita plugin and even Wolfenstein 3D. A node registry now replaces manual curation.
- **Business.** The company is hiring, building a packaged V1 desktop release, and planning cloud inference and enterprise features. He welcomes startups built on ComfyUI.

## Quotes

> "Let's make a hard-to-use interface." — comfyanonymous

> "You can create a very good model that doesn't generate nice images." — comfyanonymous
