---
title: >-
  Building Visual Intelligence — Andreas Blattmann & Dustin Podell, Black Forest
  Labs
description: >-
  Black Forest Labs argues that one diffusion model trained on images, video and
  audio learns enough intuitive physics to power editing, video and robot
  control.
pubDate: '2026-11-16'
show: latent-space
url: 'https://latent.space/p/bfl'
durationMin: 98
hosts:
  - Alessio Fanelli
  - swyx
guests:
  - Andreas Blattmann
  - Dustin Podell
tags:
  - diffusion-models
  - image-generation
  - video-generation
  - robotics
  - world-models
draft: false
---
## Thesis

Andreas Blattmann, co-founder of Black Forest Labs (BFL) and co-inventor of latent diffusion, and founding researcher Dustin Podell argue that BFL was never meant to be only an image lab. In their view, training one diffusion model on images, video and audio gives it intuitive, "system one" visual intelligence. From that single FLUX 3 model they derive image, video, upscaling and robot-action products.

## Key points

- **From Stability to BFL.** Podell, a former software developer who quit his job the day Stable Diffusion launched, describes SDXL's refiner as an unreleased SDXL variant repurposed for high-frequency detail. He says the founders left Stability because it could not capture the value of its models. BFL started with 13 or 14 people and launched Flux.1 about three months later.
- **Money.** The guests say BFL has raised $450 million in total, reported $100 million in revenue in December, and has passed that figure since.
- **Data over algorithms.** Blattmann says data filtering is underrated. In Stable Video Diffusion, about 1,000 fine-tuning steps on 3D data turned a video model into a 3D model, which he reads as evidence that video pre-training learns 3D structure. Both credit SD3's text rendering mainly to better modelling, data and captions.
- **Flux Context began as a side project.** Podell pitched an "omni" editing model at an offsite. A short training run of about four to six hours on a small relationship-description dataset showed general editing. Flux.2 later handled about 10 reference images.
- **Autoregressive vs diffusion.** Blattmann says autoregressive models are more data-efficient in training, while diffusion samples faster because 50 steps can be distilled to four. Podell says the debate is not settled.
- **Robotics.** Flux.3 action is a 7B model that predicts robot actions together with video. Blattmann says it needed about four hours of data, eight times less than an open-source comparison, and that BFL is working towards in-context learning from a single demonstration. He predicts 2027 will be the year of robotics in manufacturing.

## Quotes

> "video modeling is actually the central means to understanding how our world basically works." — Andreas Blattmann

> "I wanted to get away from the slot machine, essentially." — Dustin Podell
