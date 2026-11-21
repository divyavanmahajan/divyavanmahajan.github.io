---
title: >-
  SAM 3: The Eyes for AI — Nikhila & Pengchuan (Meta Superintelligence), ft.
  Joseph Nelson (Roboflow)
description: >-
  Meta's SAM 3 team explains how concept prompts, a largely automated data
  engine and a new benchmark let one model detect, segment and track any short
  noun phrase in images and video.
pubDate: '2025-12-18'
show: latent-space
url: >-
  https://lspace.beehiiv.com/podcast/s/latent_space_the_ai_engineer_podcast/sam_3_the_eyes_for_ai_nikhila_pengchuan_meta_superintelligence_ft_joseph_nelson_roboflow
durationMin: 75
hosts:
  - Alessio Fanelli
  - swyx
guests:
  - Nikhila
tags:
  - computer-vision
  - segmentation
  - data-engines
  - multimodal-models
  - open-source-models
draft: false
---
## Thesis

Nikhila Ravi and Pengchuan of Meta's SAM team present SAM 3 as a unified vision model that finds, segments and tracks every instance of a concept named by a short text phrase, replacing several task-specific models. They argue the data engine, with AI verifiers taking over human review, is what made this possible. Roboflow's Joseph Nelson, co-hosting, adds evidence from production use and positions SAM 3 as the "eye" to pair with language models.

## Key points

- **Three releases, one core model.** Nikhila clarifies that Meta shipped SAM 3 plus two separate models, SAM 3D Objects and SAM 3D Body. SAM 3 uses concept prompts (for example "yellow school bus") and can be refined with clicks or visual exemplars.
- **A much larger benchmark.** The team built the SA-Co benchmark with more than 200,000 unique concepts, against about 1.2K in the previously used LVIS benchmark. More than 70% of training annotations are negative phrases, and a "presence token" separates recognition from localisation.
- **Data engine efficiency.** Pengchuan says annotation time per data point fell from over two minutes (all human) to about 45 seconds with the model in the loop, then about 25 seconds after fine-tuned Llama 3.2 verifiers reached superhuman accuracy on mask and exhaustivity checks.
- **Architecture.** Nikhila explains that detection (identity-agnostic) and tracking (identity-preserving) conflict, so SAM 3 keeps them separate on a shared Perception Encoder backbone. Swyx quotes 30 ms per image with 100 objects on an H200.
- **Real-world use.** Nelson reports 106 million SAM-assisted labels on Roboflow, an estimated 100-130 years of labelling time saved, and 8 million SAM 3 inferences in the first five days. In his head-to-head demo, SAM 3 beat Gemini 3 and Florence 2 on grounding.
- **Next steps.** Pengchuan wants smaller, efficient models, end-to-end video training and tighter integration with frontier LLMs; a SAM 3 agent paired with an MLLM already handles complex queries that SAM 3 alone cannot.

## Quotes

> "SAM three isn't just a version bump. It's, you know, an entirely new approach to do segmentation." — Nikhila Ravi

> "now we have a very good brain with this kind of frontier models, and we have a very good eye with SAM three." — Pengchuan
