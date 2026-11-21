---
title: >-
  Generative Video WorldSim, Diffusion, Vision, Reinforcement Learning and
  Robotics — ICML 2024 Part 1
description: >-
  Latent Space's ICML 2024 recap frames video generation as converging on world
  simulation, tracing Sora, Genie and VideoPoet through diffusion theory,
  vision-language models and data-hungry robotics.
pubDate: '2024-12-10'
show: latent-space
url: >-
  https://lspace.beehiiv.com/podcast/s/latent_space_the_ai_engineer_podcast/generative_video_worldsim_diffusion_vision_reinforcement_learning_and_robotics_icml_2024_part_1
durationMin: 428
hosts:
  - Alessio Fanelli
  - swyx
guests: []
tags:
  - video-generation
  - world-models
  - diffusion
  - computer-vision
  - robotics
  - reinforcement-learning
draft: false
---
## Thesis

This seven-hour ICML 2024 recap, curated by guest co-host Brittney Walker of CRV, is mostly conference talks and poster interviews. Taken together, the speakers argue that scaling video models is producing early world simulators, and that the same building blocks (diffusion, tokenisation, vision-language models) are being turned towards agents and robots. Several of them also stress that compute is not enough: control, evaluation and the right data are the hard parts.

## Key points

- **Sora as a world simulator.** Bill Peebles of OpenAI describes compressing video into a single latent space and training diffusion transformers on it. He reports that quality rises steadily with compute (base, 4x, 32x) and that 3D consistency and object permanence emerge without any built-in inductive biases.
- **Genie adds actions.** Jack and Ashley Edwards of Google DeepMind trained an 11 billion parameter model on 30,000 hours of filtered 2D platformer footage. It learns eight discrete latent actions without labels, so humans can play the worlds it generates, even from children's sketches.
- **Language models versus diffusion.** Lijun Yu and Dan Kondratyuk present VideoPoet, a diffusion-free LLM built on a MAGVIT v2 tokeniser with a vocabulary of about 200,000 tokens. Kondratyuk concedes that diffusion still wins on pixel quality, but says the LLM route trains faster and scales more predictably.
- **How diffusion works.** Sander Dieleman describes diffusion as approximate spectral autoregression and calls guidance a "cheat code". Ricky TQ Chen explains flow matching, and Patrick Esser reports that rectified flow with logit-normal timestep sampling came out best in a study of 61 formulations for Stable Diffusion 3.
- **Vision beyond CLIP.** Trevor Darrell credits DeCAF's impact to its open-source release. Lucas Beyer argues that CLIP's contrastive loss cannot learn relations like "left of", favours captioning objectives and PaliGemma, and shows RL tuning lifting COCO detection mAP from 39 to 54.
- **Robotics is short of data.** Chelsea Finn says spoken corrections ("YAY Robot") improved success rates by 20 percent. Younghyo Park argues that RL in practice depends on manual environment shaping, which he calls "graduate student descent", and that this step needs automating.

## Quotes

> "while these models may have world knowledge, they're not world models." — Jack (Genie, Google DeepMind)

> "the things that lack abundant data are often the things that are most challenging for machines." — Chelsea Finn
