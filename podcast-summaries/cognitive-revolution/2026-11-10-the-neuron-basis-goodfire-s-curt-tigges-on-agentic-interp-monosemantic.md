---
title: "The Neuron Basis: Goodfire's Curt Tigges on Agentic Interp, Monosemanticity & Reverse Engineering"
date: 2026-11-10
show: cognitive-revolution
url: "https://www.cognitiverevolution.ai/the-neuron-basis-goodfire-s-curt-tigges-on-agentic-interp-monosemanticity-reverse-engineering/"
youtube: "https://www.youtube.com/watch?v=hqXYtqQq50g"
duration_min: 116
hosts: ["Nathan Labenz"]
guests: ["Curt Tigges"]
description: "Individual MLP neurons in modern LLMs are far more interpretable than assumed, and agents can now describe them one by one, which could make interpretability work look more like normal science."
tags: ["mechanistic-interpretability", "neurons", "ai-safety", "sparsity", "agents"]
source_transcript: "cognitive-revolution/episodes/2026/11/2026-11-10-the-neuron-basis-goodfire-s-curt-tigges-on-agentic-interp-monosemantic.md"
draft: false
---

## Thesis

Curt Tigges of Goodfire, co-author with Nick Cammarata of "Neurons as an Interpretable Basis", argues against the received view that neurons are too tangled to read directly and need helper models such as sparse autoencoders. He tells Nathan Labenz that most neurons in a modern model have one main function or a compact set of meanings, often acting as verbs and control-flow gates, and that LLM agents can now work through a network and describe each neuron accurately.

## Key points

- **The model studied.** The paper focuses on Qwen 3.6-35B-A3B: 40 layers, 256 experts per layer with 512 neurons each, eight experts active per layer, about 5 million neurons. Each neuron's positive and negative poles can mean different things. Tigges thinks SwiGLU's separate gate and up projections act like a small logic circuit, making neurons easier to read than with ReLU or GELU.
- **Most activity can be removed.** Keeping only the top 64 neurons per active expert ablates roughly 88% of activations, yet benchmark performance largely holds. Reasoning initially suffered from loops and over-checking, but about 100 million tokens of fine-tuning on a few GPUs restored parity, with some benchmarks improving by 5 to 15 points.
- **The neuron scientist agent.** Goodfire's agent clusters a neuron's activating examples, forms hypotheses, and tests them with edited prompts and steering. A separate model then predicts token-level activations from the description; patching those predictions back recovers 74% of the damage-weighted KL divergence. One neuron that looked like noise turned out to fire on the second item of a list restated in a new format about a thousand tokens later.
- **Beyond mono versus polysemantic.** Tigges argues the useful question is whether all of a neuron's meanings can be listed, not whether it has exactly one. Facts live in the connections between neurons; a community of a few dozen neurons, for example, sorts painters into impressionist movements. Experts also turn out to be focused on one to three topics.
- **Uses and next steps.** He cites a neuron found by others that fires on reward hacking text, useful for monitoring though not complete, and neuron-based persona steering. The residual stream remains poorly understood. The most expensive neuron analysis cost $45 of inference, but he expects a cheap coarse pass plus targeted deep dives would cover a whole model, and he encourages people to try it on local models.

## Quotes

> "the individual neurons in MLPs in neural networks in general are more interpretable than the field has thought to this point." — Curt Tigges

> "A neuron is not a fact, but the fact is in the connections between neurons." — Curt Tigges
