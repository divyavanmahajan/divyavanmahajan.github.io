---
title: "Emergency Pod: Mamba, Memory, and the SSM Moment"
date: 2023-12-22
show: cognitive-revolution
url: "https://www.cognitiverevolution.ai/emergency-pod-mamba-memory-and-the-ssm-moment/"
youtube: "https://www.youtube.com/watch?v=X5F2X4tF9iM"
duration_min: 150
hosts: ["Nathan Labenz"]
guests: []
description: "Nathan Labenz argues the Mamba selective state space model gives AI a durable memory mechanism transformers lack, ending the single-architecture era and pushing toward hybrid models and agents."
tags: ["state-space-models", "mamba", "model-architecture", "long-term-memory", "ai-agents"]
source_transcript: "cognitive-revolution/episodes/2023/12/2023-12-22-emergency-pod-mamba-memory-and-the-ssm-moment.md"
draft: false
---

## Thesis

In a solo episode, Nathan Labenz argues that Mamba, the selective state space model from Albert Gu and Tri Dao, is the first credible architecture to match transformers on their own benchmarks while adding a fixed-size state that persists through time. He does not expect it to replace attention. He expects hybrids and deliberately built long-sequence datasets to make agents and assistants more coherent, and he thinks this cycle will move much faster than the transformer era did.

## Key points

- **Transformers have no memory.** Labenz describes transformers as episodic: apart from the weights, there is only a context window that grows quadratically in cost, around 100,000 tokens for The Great Gatsby and up to 200,000 for Claude 2.1. RAG and system prompts are workarounds, in his view.
- **Selectivity plus hardware-aware code.** Mamba lets the input shape how the state is updated. That rules out the parallel convolutional form, so Dao's CUDA work keeps the state in the A100's 164 KB of SRAM instead of the 40 GB of high-bandwidth memory.
- **Results so far.** At 1.4B and 2.8B parameters trained on 300B tokens, Mamba matches a "Transformer++" recipe at 2,000-token sequences and does slightly better at 8,000. On DNA it keeps improving out to 1 million tokens. A Mamba plus attention hybrid did best of all.
- **Limits in practice.** Labenz tried Mamba Chat (Haven, fine-tuned on 16,000 UltraChat conversations) and saw summarisation lose coherence at about 3,000 tokens, which he puts down to training chats averaging around 1,467 tokens. A state can also drop details that attention would have kept.
- **What comes next.** He predicts the gains will be "2 thirds datasets and 1 third architectures": deliberately designed long-episode data that records whole jobs, multi-state models, saved states replacing RAG, and hybrids such as Together AI's StripedHyena 7B and the Block-State Transformer.
- **Safety and pace.** A single state could be easier to interpret, though states never leave SRAM, so watching them at runtime is hard. He also suggests FunSearch-style automated architecture search could start closing a research feedback loop.

## Quotes

> "I think we are looking at not the end of transformers, but the end of the transformers era." — Nathan Labenz

> "If I had to guess, I would say it's like 2 thirds datasets and 1 third architectures." — Nathan Labenz
