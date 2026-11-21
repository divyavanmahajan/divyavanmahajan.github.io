---
title: "Video generation with realistic motion"
date: 2025-01-23
show: practical-ai
episode: 301
url: "https://share.transistor.fm/s/7c4c29cc"
duration_min: 45
hosts: ["Chris Benson", "Daniel Whitenack"]
guests: ["Paras Jain"]
description: "Genmo CEO Paras Jain argues video models should learn physics and subject motion, and explains how the open Mochi 1 model tackles motion and prompt adherence."
tags: ["video-generation", "diffusion-models", "open-source-models", "generative-ai", "evaluation"]
source_transcript: "practical-ai/episodes/2025/01/2025-01-23-video-generation-with-realistic-motion.md"
draft: false
---

## Thesis

Paras Jain, CEO of Genmo, argues that the real goal of a video model is to learn the physics of the world (inertia, optics, fluid dynamics, human kinematics), not just to produce sharp frames. He says earlier models produced high-resolution clips where subjects barely moved, and that Genmo's open Mochi 1 model targets subject motion and prompt adherence first. In his view the field is still very early.

## Key points

- **Data is the bottleneck.** Jain says video carries roughly 100x the data of images per clip, pre-training sets run to petabytes, and most internet video is static or talking heads, which teaches a model little about motion.
- **Motion as the test.** Early 2023 generators made people "hover" instead of walk; gymnastics is still a common failure case. Genmo's internal tests include checking whether a character drinks through the side of a glass.
- **Evaluation beyond preference.** Jain notes Mochi tops open models on the Artificial Analysis leaderboard, an Elo-style human preference ranking, but says humans favour detail over motion, so Genmo uses functional test cases inspired by his self-driving safety work.
- **Architecture and size.** Mochi 1 is a 10-11 billion parameter model with a VAE that compresses video about 100x, a new "asymmetric DiT" diffusion transformer, and runs on a consumer-grade GPU. Training used more than 1,000 H100-class GPUs; Jain says walking does not emerge at 1-2 billion parameters.
- **Founding story.** Jain and his brother Ajay, co-author of the DDPM diffusion paper, founded Genmo around Christmas 2022 out of UC Berkeley; Mochi is their third pre-training run.
- **Use cases.** Jain sees stock-footage replacement, storyboarding and editing; a community-built Mochi Edit pipeline appeared within two weeks of release. Genmo's platform has passed 2 million users, and he sees video models as simulators for training embodied AI.

## Quotes

> "it turns out the vast majority of video you find on the Internet doesn't move." — Paras Jain

> "my belief is video generation is super early. I think we're 1% of the way there." — Paras Jain
