---
title: "Titans: Neural Long-Term Memory for LLMs, with author Ali Behrouz"
date: 2025-05-15
show: cognitive-revolution
url: "https://www.cognitiverevolution.ai/titans-neural-long-term-memory-for-llms-with-author-ali-behrouz/"
youtube: "https://www.youtube.com/watch?v=ShYJc3Nm6QE"
duration_min: 128
hosts: ["Nathan Labenz"]
guests: ["Ali Behrouz"]
description: "Ali Behrouz explains Titans, which adds a neural network that learns at test time as long-term memory alongside attention, scaling to millions of tokens of context."
tags: ["llm-memory", "model-architecture", "long-context", "test-time-training", "research-papers"]
source_transcript: "cognitive-revolution/episodes/2025/05/2025-05-15-titans-neural-long-term-memory-for-llms-with-author-ali-behrouz.md"
draft: false
---

## Thesis

Ali Behrouz, a Cornell PhD student and lead author of the Titans paper, argues that LLMs need a brain-inspired memory hierarchy. Attention acts as short-term memory, a small neural network updated by gradient descent at inference time acts as long-term memory, and learnable persistent weights hold task knowledge. Nathan Labenz frames this as a step towards the "missing middle" between frozen model weights and the context window.

## Key points

- **Memory as a network.** Behrouz explains that classic RNNs and Mamba store memory in a vector, and linear attention uses a matrix. Titans makes the memory an MLP, so writing becomes a gradient update and reading becomes a forward pass.
- **Associative memory objective.** The memory module is trained to map each token's key to its value, so a later query retrieves an approximation of what full attention would have returned. Labenz calls this the most important intuition in the paper.
- **Surprise and momentum.** Updates scale with the loss on the current token ("surprise"), carry momentum from past surprise and include a decay term. Behrouz says the decay, momentum and step-size parameters are all input-dependent. The recurrence can be rewritten as matrix multiplications so it trains in parallel on GPUs.
- **Three integration designs.** Memory as context (MAC), memory as gate (MAG) and memory as layer (MAL). Behrouz says MAL, the usual hybrid design, is the weakest; Labenz counts it winning roughly 2 of about 30 benchmark cells.
- **Long context.** The result Behrouz rates highest is synthetic long-context retrieval: Titans scales to 2 million tokens and reaches about 70% accuracy at 10 million, where GPT-4's performance drops quickly. He credits the MAC architecture and notes the benchmark is synthetic.
- **Open problems.** Behrouz names catastrophic forgetting as the main barrier to very long test-time learning. He wants to see the approach tried in reinforcement learning, decision making and other modalities.

## Quotes

> "everything that is, like, surprising probably is worth memorizing" — Ali Behrouz

> "No matter how large you want to choose the context links for training the transformer part, you can always go farther with using additional memory." — Ali Behrouz
