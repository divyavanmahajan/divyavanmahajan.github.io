---
title: The Future of AI Infrastructure with CoreWeave
description: >-
  AI workloads need infrastructure built for AI from the ground up, and
  agent-guided improvement loops will replace consoles and click-through apps
  within five to seven years.
pubDate: '2026-07-17'
show: practical-ai
episode: 364
url: 'https://share.transistor.fm/s/01c30767'
youtube: 'https://www.youtube.com/watch?v=Pd1T7Fv84AQ'
durationMin: 50
hosts:
  - Chris Benson
guests:
  - Corey Sanders
tags:
  - ai-infrastructure
  - gpu-cloud
  - inference
  - mlops
  - agents
draft: false
---
## Thesis

Corey Sanders, SVP of Product at CoreWeave and a 20-year Microsoft Azure veteran, argues that bolting AI onto general-purpose cloud slows teams down. Training and inference need hardware layout, networking, storage and orchestration designed around expensive, tightly interconnected GPUs. He predicts AI applications will follow the path of cloud, but in about half the time, with agents guiding a continuous loop of model and prompt improvement.

## Key points

- **Why AI differs from classic cloud.** Sanders says big clouds rely on fungible capacity added as needed, but AI clusters wired with InfiniBand or RoCE and specialised storage must be planned ahead. He admits his Azure experience was also a limiter, because it came with assumptions he had to question.
- **Finding failures in huge jobs.** For jobs spanning thousands of GPUs, CoreWeave launched GPU straggler detection to find the one slow GPU holding a run back, alongside observability and storage services.
- **Agent-led research.** CoreWeave ARIA (AI Research and Iteration Agent) analyses experiments tracked in Weights & Biases and suggests the next run. Sanders expects consoles and line charts to give way to conversations with agents.
- **The "AI loop" for inference.** He describes production apps built from many models, using Weave traces to spot slow or wrong paths, then trying a new prompt or model (he cites Kimi), running evaluations in a sandbox, and fine-tuning or using reinforcement learning only when needed.
- **Open and multi-cloud.** Sanders expects customers to use several clouds. CoreWeave's SUNK (Slurm on Kubernetes) combines Slurm job scheduling with Kubernetes orchestration, and SUNK Anywhere runs it on other infrastructure.
- **Robotics and industry.** Weights & Biases added robotics views that show robot motion instead of line charts, and the acquisition of Monolith brought industrial and manufacturing expertise to CoreWeave's direct-to-expert support.

## Quotes

> "I think within, you know, five to seven years, that's gonna be our world and websites with, you know, buttons that you click are gonna be legacy." — Corey Sanders

> "lock in with love is sort of the joke I use" — Corey Sanders
