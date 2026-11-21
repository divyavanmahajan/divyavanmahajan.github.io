---
title: OpenAI’s Sora team thinks we’ve only seen the "GPT-1 of video models"
description: >-
  Sora's leads argue that scaling diffusion transformers on raw video produces
  world simulators, and that today's model is only the GPT-1 stage of visual
  generation.
pubDate: '2024-04-25'
show: no-priors
episode: 58
url: 'https://www.youtube.com/watch?v=reMnn6bV_fI'
youtube: 'https://www.youtube.com/watch?v=reMnn6bV_fI'
durationMin: 31
hosts:
  - Sarah Guo
  - Elad Gil
guests:
  - Aditya Ramesh
  - Tim Brooks
  - Bill Peebles
tags:
  - video-generation
  - diffusion-transformers
  - world-models
  - scaling-laws
  - ai-safety
draft: false
---
## Thesis

Sora's three co-leads, Aditya Ramesh, Tim Brooks and Bill Peebles, argue that video generation is on the path to AGI. To generate realistic video, a model has to learn how the physical world, people and objects behave. They see Sora as the "GPT-1" of visual models: a simple, scalable recipe of predicting data with transformers, which they expect to improve quickly with more compute.

## Key points

- **Limited access first.** Brooks says there is no product timeline. A small group of artists and red teamers have access, and their feedback shapes the research road map. Artists mainly want more control than text-only prompts allow.
- **Diffusion transformer.** Brooks describes Sora as combining the iterative denoising of diffusion from the DALL-E models with the scalable transformer architecture from GPT. Results improve steadily as compute increases.
- **Spacetime patches.** Peebles explains that video is cut into 3D cubes that act as tokens. This lets Sora train on and generate any resolution, duration or aspect ratio from 1:2 to 2:1, including still images. Earlier models used fixed clips such as 256x256 pixels and about 4 seconds.
- **Built from scratch.** The team aimed directly at a minute of HD footage instead of extending an image generator. They frame this as building what the solution would look like in three years.
- **Limitations.** Peebles says generating long videos takes at least a few minutes and needs to get cheaper. He also says complex object interactions still fail. Election-year misinformation is a central safety concern, and the team expects some mitigations to carry over from DALL-E 3.
- **Emergent world knowledge.** The team says Sora learned 3D structure and effects like a bite mark in a burger without being explicitly trained on them. They hope future models will become better world models than humans.

## Quotes

> "we really do feel like this is the gpt1 moment and these models are going to get a lot" — Bill Peebles

> "that Ball's probably going to like vaporize and maybe come back" — Bill Peebles
