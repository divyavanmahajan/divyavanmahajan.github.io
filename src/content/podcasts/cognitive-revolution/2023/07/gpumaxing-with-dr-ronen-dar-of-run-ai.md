---
title: 'GPUMaxing with Dr. Ronen Dar of Run:ai'
description: >-
  Run:ai CTO Ronen Dar explains how GPU sharing and Kubernetes scheduling raise
  utilisation during a shortage, and doubts that controlling hardware can govern
  AI once open models exist.
pubDate: '2023-07-25'
show: cognitive-revolution
url: 'https://www.cognitiverevolution.ai/gpumaxing-with-dr-ronen-dar-of-run-ai/'
youtube: 'https://www.youtube.com/watch?v=RvD1R7iceS0'
hosts:
  - Nathan Labenz
guests:
  - Dr. Ronen Dar
tags:
  - gpus
  - ai-infrastructure
  - kubernetes
  - compute-governance
  - semiconductors
draft: false
---
## Thesis

Dr. Ronen Dar, CTO and co-founder of Tel Aviv-based Run:ai, argues that GPUs are scarce and expensive enough that software to share, schedule and orchestrate them is now a core part of the AI stack. He expects the post-ChatGPT GPU shortage to ease over time, sees NVIDIA's lead resting mostly on its software ecosystem, and is sceptical that compute controls can govern AI once capable open models can be fine-tuned cheaply.

## Key points

- **From vision to LLMs.** Dar traces the scaling trend from AlexNet trained on 2 GPUs in 2012 to ResNet on hundreds; Run:ai started in 2018 to make distributed training simple, and works with customers such as Sony and MIT on-premises and on AWS, Azure and Google.
- **Two technical layers.** Run:ai intercepts CUDA calls to split one GPU between workloads and swap memory between CPU and GPU. It also adds batch scheduling, preemption, queueing and gang scheduling, borrowed from HPC and Hadoop's YARN, to Kubernetes, which was built for CPU microservices.
- **Securing capacity.** Dar says enterprises reserve large GPU clusters because raising a cloud quota from 10 to 1,000 GPUs draws "a lot of questions", while startups mostly use on-demand capacity. He puts the shortage down to demand NVIDIA did not foresee, with many buyers still waiting for H100s.
- **Pricing.** He quotes $30-40 an hour for an 8-GPU A100 machine on AWS and hundreds of thousands of dollars for a DGX system. Labenz notes Lambda Labs at about $1.10 per A100 hour; Dar cannot explain the gap and says price must be weighed against performance.
- **Other chips.** Dar cites a claim that NVIDIA holds 87% of the market. He calls AMD a strong competitor that some customers already use, notes AWS and Google chips largely designed in Israel, and sees edge-inference openings for Qualcomm and Samsung and a unique offering from Cerebras.
- **Geopolitics.** Dar says China now looks behind the US but the gap could close quickly. Speaking from Israel, he names Iran as the main adversary and hopes for less escalation.

## Quotes

> "if a GPU costs 2 times more, but your workloads are actually 4 times faster on those GPUs, then it's actually the best solution for you" — Dr. Ronen Dar

> "So then controlling the access to compute becomes less relevant, I guess." — Dr. Ronen Dar
