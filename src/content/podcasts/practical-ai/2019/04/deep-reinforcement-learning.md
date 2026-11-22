---
title: Deep Reinforcement Learning
description: >-
  Deep reinforcement learning advances by scaling trial-and-error learning
  across GPUs, moving from Atari to StarCraft II, Dota 2, job scheduling and
  robotics.
pubDate: '2019-04-23'
show: practical-ai
episode: 40
url: 'https://share.transistor.fm/s/1d3b3ebb'
durationMin: 46
hosts:
  - Chris Benson
guests:
  - Adam Stooke
tags:
  - reinforcement-learning
  - gpu-computing
  - robotics
  - distributed-training
  - research
draft: false
---
## Thesis

Recorded at NVIDIA's GPU Technology Conference in March 2019, Chris Benson talks with Adam Stooke, a UC Berkeley PhD student working with Pieter Abbeel. Stooke explains deep reinforcement learning as trial-and-error learning driven by reward signals, with a deep neural network making the agent's decisions, and argues that scaling these algorithms across GPUs speeds up research and opens the way to real-world uses such as robotics.

## Key points

- **Background.** Stooke studied physics, served in the Air Force at the Air Force Research Lab in Albuquerque, where MATLAB simulation work got him interested in modelling, then moved from Berkeley's physics department to its robotics group.
- **From Atari to scale.** DeepMind's Atari results, learned from screen pixels alone, drew him in. He first parallelised an algorithm across CPU cores, tried an Intel Knights Landing kit with 60 to 70 cores, and concluded GPUs were the way to go.
- **The DGX-1.** NVIDIA donated a DGX-1 to the lab. Stooke wrote his own multi-GPU code on Theano using NVIDIA's NCCL library, using all eight GPUs and 40 CPU cores to cut Pong training from 10-15 hours to about four minutes.
- **Larger batches.** He explains that filling eight GPUs requires an eight times larger training batch for stochastic gradient descent, and that even Pong scaled almost linearly. In practice he often runs a separate experiment on each GPU.
- **Recent achievements.** Stooke covers DeepMind's StarCraft II and Capture the Flag work, having sat near the StarCraft II team during a DeepMind internship, and OpenAI's Dota 2 agent and robotic-hand dexterity work. He also cites Hongzi Mao's MIT paper on RL for Apache Spark job scheduling, which beat handcrafted heuristics.
- **Advice.** For practitioners, he recommends reimplementing algorithms from scratch (his accel_rl code is on GitHub) until you reproduce published learning curves. For students, he suggests programming plus a broad base in mathematics and statistics.

## Quotes

> "instead of taking 10 or 15 hours to master Pong, you know, we're getting it to like four minutes." — Adam Stooke

> "Make yourself rewrite it from scratch and run it and get all the way to the point where you're recreating the learning curve that is published in the literature." — Adam Stooke
