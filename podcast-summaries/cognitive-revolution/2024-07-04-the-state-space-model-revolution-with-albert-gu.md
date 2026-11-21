---
title: "The State Space Model Revolution, with Albert Gu"
date: 2024-07-04
show: cognitive-revolution
url: "https://www.cognitiverevolution.ai/the-state-space-model-revolution-with-albert-gu/"
youtube: "https://www.youtube.com/watch?v=1zjMalKLHiA"
duration_min: 102
hosts: ["Nathan Labenz"]
guests: ["Albert Gu", "Jason Moe"]
description: "Albert Gu explains how Mamba's selective state compresses context into a fixed-size memory, why Mamba 2 trades some expressivity for hardware speed, and why attention-SSM hybrids keep winning."
tags: ["state-space-models", "mamba", "model-architecture", "long-context", "ai-research"]
source_transcript: "cognitive-revolution/episodes/2024/07/2024-07-04-the-state-space-model-revolution-with-albert-gu.md"
draft: false
---

## Thesis

Albert Gu, CMU assistant professor and Cartesia AI co-founder, argues that stateful recurrence, compressing history into a fixed-size state, is a fundamental mechanism that complements attention rather than replacing it. He tells Nathan Labenz and Jason Moe that Mamba made recurrence competitive by making the state update depend on the input, and that Mamba 2 gives up a little of that flexibility to run on the matrix-multiply hardware modern GPUs are built for.

## Key points

- **Years in the making.** Gu traces Mamba back through HiPPO (2020, with Tri Dao) and S4. He says he tried input-dependent models right after HiPPO, but they were too hard to train until the models were simplified.
- **Selection as gating.** Gu describes Mamba's core change as making the parameters that weigh the old state against the new input a function of the input itself, so the model can skip filler tokens or focus on important ones, similar to LSTM gates.
- **State versus KV cache.** Each layer has its own state. A transformer's memory grows with the tokens it caches, while an SSM uses a tunable expansion factor (for example 100 or 200 times the model width), trading fuzzier memory for speed.
- **Mamba 2 trade-off.** Mamba 2 decays whole blocks of the state by one shared factor, which lets it compute in chunks with matrix multiplications and scale to larger states. Gu reports it is much faster to train, and that it beats Mamba 1 by a wide margin on associative recall, which he cannot yet explain.
- **Hybrids and raw data.** Gu thinks attention and SSMs do complementary things: attention acts as a scratch pad for exact lookup, while SSMs suit raw, less processed data, citing MambaByte on byte-level modelling. Labenz notes a rough consensus of one attention layer in 8 to 12.
- **Ecosystem and openness.** Moe has catalogued 267 Mamba-derived papers and projects, 56.6% of them in vision. Gu says he keeps publishing because he is an academic at heart.

## Quotes

> "To be clear, I don't think attention is going anywhere. I think it is very important, but is all you need? Not sure I believe that either." — Albert Gu

> "No matter how many engineering improvements you throw in, it's still gonna be finite. And that speaks to me that there is like still a missing piece." — Albert Gu
