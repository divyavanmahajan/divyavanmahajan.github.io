---
title: "Runway’s WorldPrompt and the Engineering of Real-Time Worlds"
date: 2026-09-25
show: latent-space
url: "https://www.latent.space/p/runway"
duration_min: 96
hosts: ["Alessio Fanelli", "swyx"]
guests: ["Anastasis Germanidis"]
description: "Runway's co-founder argues that scaling video prediction is enough to build general world models, and that real-time, action-conditioned video will power interfaces, robotics simulation and creative tools."
tags: ["world-models", "video-generation", "robotics", "real-time-inference", "generative-media"]
source_transcript: "latent-space/episodes/2026/09/2026-09-25-runway-s-worldprompt-and-the-engineering-of-real-time-worlds.md"
draft: false
---

## Thesis

Anastasis Germanidis of Runway traces the company's path from tools for artists to general world models. He argues that the bitter lesson applies to video: predict pixels, scale compute, and physics and dynamics will improve predictably, with no need for JEPA-style architectures. He thinks real-time, autoregressive, action-conditioned video will become the main way to use these models, for people and for training agents.

## Key points

- **Origins.** Germanidis describes early art projects and the pix2pix-based "Uncanny Road" built with co-founder Chris, then Green Screen rotoscoping, which was used on *Everything Everywhere All at Once*. After that came a bet on a 1,000-A100 cluster as a Series B startup. Gen-2 began as a weekend hack: a text-to-depth model whose output was fed into the depth-to-video model Gen-1.
- **The Sora shock.** When Sora launched in February 2024, Runway briefly faced an "existential crisis". In about three months it scaled model size and compute by 10x, learned model parallelism from scratch and shipped Gen-3, followed by what he believes was the first step-distilled video model in production.
- **Scale over architecture.** Germanidis says Runway sees its Physics IQ scores improve predictably with scale. He dismisses Yann LeCun's objection that generating "cute videos" differs from understanding physics, while warning that cherry-picked demos overstate current models.
- **Real time.** Runway's Characters avatar model runs at 24 FPS and can generate up to 30 minutes of video. Its open-ended GWM Worlds model holds a few minutes before errors accumulate. He expects real-time models to dominate within two years, and demos an "interface world model" that renders a UI directly as pixels in response to clicks, drags and scrolls.
- **Robotics.** GWM Robotics fine-tunes the Gen-4.5 backbone on hundreds of hours of robot data. On RoboArena scenarios it correlates well with real-world results, so policies can be evaluated from a single photo instead of a digital twin. His thesis is that third-person video pre-training beats teleoperation and egocentric data on scale.
- **What's next.** Germanidis proposes a "lucid dream test" for world models, says counterfactuals and simulated failure are the big gaps, and argues for omni models that absorb more modalities. He notes that most of the top video models on leaderboards are Chinese, which is part of why Runway co-founded the open Cosmos Coalition with NVIDIA.

## Quotes

> "why, why generate the code that generates the pixels? Just generate the pixels directly." — Anastasis Germanidis

> "the most plentiful source of video data is third person video data." — Anastasis Germanidis
