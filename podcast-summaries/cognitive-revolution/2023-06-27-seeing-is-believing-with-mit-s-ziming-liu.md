---
title: "Seeing is Believing with MIT’s Ziming Liu"
date: 2023-06-27
show: cognitive-revolution
url: "https://www.cognitiverevolution.ai/seeing-is-believing-with-mits-ziming-liu/"
youtube: "https://www.youtube.com/watch?v=VKxwlxb2XWw"
hosts: ["Nathan Labenz"]
guests: ["Ziming Liu"]
description: "MIT's Ziming Liu explains Brain-Inspired Modular Training, a distance-weighted penalty plus neuron swapping that makes small neural networks sparse, modular and easier to interpret."
tags: ["mechanistic-interpretability", "ai-safety", "neural-networks", "modularity", "sparsity"]
source_transcript: "cognitive-revolution/episodes/2023/06/2023-06-27-seeing-is-believing-with-mit-s-ziming-liu.md"
draft: false
---

## Thesis

Ziming Liu, a physics PhD student in Max Tegmark's group at MIT, argues that if neural networks are to be interpretable they should be trained to be interpretable. His Brain-Inspired Modular Training (BIMT) borrows the energy cost of long connections in brains: neurons are placed in geometric space and long connections are penalised, so networks become sparse and modular enough to read from a picture. Liu sees this as a first step that still has to be shown to scale to language models.

## Key points

- **The method.** Liu describes BIMT as L1 regularisation multiplied by connection distance, adding a single locality-strength hyperparameter. Periodic swapping of important neurons within a layer, suggested by Tegmark, shortens connections without changing the network's function.
- **Symbolic tasks.** On functions of four inputs the network split into two independent paths with only a few active neurons; zeroing the invisible weights left outputs unchanged. Liu credits smooth SiLU activations, which the network combines so first-order Taylor terms cancel and a square remains.
- **Modular addition.** BIMT consistently produced three parallel modules. Liu says each is an imperfect version of a "pizza" algorithm, distinct from the "clock" algorithm described by Neel Nanda and collaborators, and the final layer aggregates them like error correction.
- **Permutations and MNIST.** For the S4 group exactly nine active neurons matched the nine-dimensional representation, so Liu argues BIMT shows where to look without knowing the task. MNIST networks showed consistent pattern anti-matching.
- **Practicalities.** All results ran on a Mac M1 without a GPU: under a minute for symbolic formulas, about 20 minutes for modular addition, up to two hours for transformers. Transformers needed head-aware swapping and dropping layer norm; modular addition needed 64-bit precision to be reproducible.
- **Next steps.** Liu plans to try BIMT on language models such as Tiny Stories and on scientific problems, and expects pruned, parallel modules to cut inference cost. On US-China tensions he says extinction risk is a shared threat that calls for collaboration.

## Quotes

> "So the lesson we learned from our human brains is that locality gives rise to modularity and that is the key trick we used." — Ziming Liu

> "In some sense, neural networks are more clever than myself." — Ziming Liu
