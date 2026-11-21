---
title: "[State of RL/Reasoning] IMO/IOI Gold, OpenAI o3/GPT-5, and Cursor Composer — Ashvin Nair, Cursor"
date: 2025-12-30
show: latent-space
url: "https://lspace.beehiiv.com/podcast/s/latent_space_the_ai_engineer_podcast/state_of_rl_reasoning_imo_ioi_gold_openai_o3_gpt-5_and_cursor_composer_ashvin_nair_cursor"
duration_min: 45
hosts: ["Alessio Fanelli", "swyx"]
guests: ["Ashvin Nair"]
description: "Ashvin Nair argues RL on LLMs is peaky and generalises poorly, so progress depends on bringing real work into the training distribution, which is why he joined Cursor."
tags: ["reinforcement-learning", "reasoning-models", "cursor", "continual-learning", "openai"]
source_transcript: "latent-space/episodes/2025/12/2025-12-30-state-of-rl-reasoning-imo-ioi-gold-openai-o3-gpt-5-and-cursor-composer.md"
draft: false
---

## Thesis

Ashvin Nair worked on the o1 and o3 reasoning models at OpenAI and now works on Cursor's Composer model. He argues that RL, as it is applied to LLMs today, can master its training distribution but generalises little beyond it. That explains why models win IOI gold but still cannot automate most jobs. His answer is to design the product and the model together, so that the full context of real work becomes something to train on.

## Key points

- **Benchmark overfitting.** Nair did his PhD with Sergey Levine at Berkeley from 2017 to 2022. He thinks the RL research community of that period overfit to benchmarks by adding knobs it could tune, and that academia rewards ideas with more maths over simple ones that work.
- **Context is the bottleneck.** He says the intelligence of the models is not the limiting factor. For most jobs, the context lives in Slack, PDFs and knowledge built up over time. His own hyperparameter-scaling research at OpenAI relied on a year of graphs that existed only in his head.
- **Inside OpenAI.** He says o1 had 50-100 contributors and grew out of a long commitment to RL associated with Ilya Sutskever and Jakub Pachocki. Small RL runs that produced strong maths scores won it more resources. He describes progress inside the lab as smooth and estimates that labs now release new capabilities only about one to two months after they have them internally.
- **Why Cursor.** Cursor's ML group has 20-25 people, and its product and ML staff sit side by side. He cites the online Tab model, which gets a policy update about every two hours. He says Composer is popular because it is fast enough that users stay in the loop.
- **Continual learning.** Nair thinks models are orders of magnitude away from human data efficiency, because they repeat mistakes even within the same context. He suspects a paradigm shift within a year.
- **Robotics.** He places robotics in a GPT-1 to GPT-2 era and expects LLM agents to become a trillion-dollar market before robotics reaches $10 billion.

## Quotes

> "if you told me that, uh, we could have gotten IOI gold then, I would have just assumed that we could all just go on vacation" — Ashvin Nair

> "it doesn't feel like intelligence of the models is the bottleneck." — Ashvin Nair
