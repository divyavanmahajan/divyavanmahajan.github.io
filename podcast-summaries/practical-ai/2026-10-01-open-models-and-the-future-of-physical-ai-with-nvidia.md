---
title: "Open models and the future of Physical AI with NVIDIA"
date: 2026-10-01
show: practical-ai
episode: 374
url: "https://share.transistor.fm/s/217445d3"
youtube: "https://www.youtube.com/watch?v=W1DSS-Sz3Fo"
duration_min: 47
hosts: ["Daniel Whitenack", "Chris Benson"]
guests: ["Ming-Yu Liu"]
description: "NVIDIA's Ming-Yu Liu argues that open world models, which robot builders can fine-tune for their own sensors and hardware, are needed for physical AI to mature."
tags: ["physical-ai", "open-models", "world-models", "robotics", "simulation"]
source_transcript: "practical-ai/episodes/2026/10/2026-10-01-open-models-and-the-future-of-physical-ai-with-nvidia.md"
draft: false
---

## Thesis

Ming-Yu Liu, vice president of the Cosmos Lab at NVIDIA, argues that physical AI (robots, vehicles, factory automation) depends on open foundation models. Every device senses the world differently and runs under tight real-time and power limits. Open world models give builders a shared prior that they can fine-tune and make more efficient. Liu says no single company can build the ecosystem alone.

## Key points

- **Why NVIDIA builds open models.** Liu calls models "a new kind of library" on top of NVIDIA's hardware. Building them shows NVIDIA what GPU architectures to make. He sums up the benefit for customers as innovation and freedom: you can inspect, customise and run models offline in ways an API does not allow.
- **Every robot sees differently.** Some robots have cameras on the gripper, and some cars have 11 cameras where others have seven or use LiDAR. Liu argues that open models let teams post-train for their own sensor setup, for example extending a one-camera model to multi-view. The metric that matters in the end is intelligence per watt.
- **Edge inference changes architecture.** Robots need real-time, batch-size-one inference. Memory-bound autoregressive LLMs waste compute on devices where there are no API calls to batch together, so different architectures may be more efficient.
- **What a world model is.** Liu separates world simulation (current observation plus actions in, future video out) from world understanding (video in, text explanation out). Cosmos 3 fuses the two into an omni model that takes text, action, audio and video as input and output. He contrasts this data-driven neural simulation with classical, equation-based simulators.
- **Faster policy iteration.** Instead of sending a fleet of drivers out to test each self-driving checkpoint, developers can run policies against a world model and keep real road tests for the best few.
- **Multi-agent factories are decades away.** Liu sketches LLM planning agents coordinating factory robots, self-driving trucks and drones. He notes that verification, supervisor agents and more capable humanoid robots are still needed. NVIDIA publishes weights, training frameworks, data and cookbooks on Hugging Face and GitHub.

## Quotes

> "Model is a new kind of libraries people can use and to build great amazing applications." — Ming-Yu Liu

> "Innovation, freedom. Innovation, freedom. I think that is maybe the two words to to to summarize." — Ming-Yu Liu
