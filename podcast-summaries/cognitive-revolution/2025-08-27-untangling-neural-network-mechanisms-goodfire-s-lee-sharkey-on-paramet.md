---
title: "Untangling Neural Network Mechanisms: Goodfire's Lee Sharkey on Parameter-based Interpretability"
date: 2025-08-27
show: cognitive-revolution
url: "https://www.cognitiverevolution.ai/untangling-neural-network-mechanisms-goodfires-lee-sharkey-on-parameter-based-interpretability/"
youtube: "https://www.youtube.com/watch?v=tbc5QfzVgbk"
duration_min: 122
hosts: ["Nathan Labenz"]
guests: ["Lee Sharkey"]
description: "Lee Sharkey argues that decomposing a network's parameters, not just its activations, can reveal the computations models actually use, with stochastic parameter decomposition fixing earlier methods' flaws."
tags: ["mechanistic-interpretability", "parameter-decomposition", "sparse-autoencoders", "ai-safety"]
source_transcript: "cognitive-revolution/episodes/2025/08/2025-08-27-untangling-neural-network-mechanisms-goodfire-s-lee-sharkey-on-paramet.md"
draft: false
---

## Thesis

Lee Sharkey, principal investigator at Goodfire, argues that interpretability has to move from identifying the variables a network represents (what sparse autoencoders find in activations) to identifying the computations it performs. His team does this by splitting a model's parameters into simple subcomponents that sum back to the original weights, and he presents stochastic parameter decomposition (SPD) as a more stable successor to their earlier attribution-based method.

## Key points

- **Why activations are not enough.** Labenz and Sharkey use the days-of-the-week example: some networks put the days on a plane and apply one rotation as a "next day" function. Sharkey says an SAE might learn a separate feature for each day and miss the shared computation.
- **Three losses.** Attribution-based parameter decomposition (APD), first published under the Apollo Research banner, trains parameter components under faithfulness (they sum to the original parameters), minimality (as few active as possible) and simplicity (low rank, few layers).
- **APD's problems.** Sharkey calls APD "extremely janky": a discontinuous top-k step, many hyperparameters, heavy compute and a dependence on gradient attributions that can be biased.
- **What SPD changes.** SPD splits each layer into randomly initialised rank-1 subcomponents and learns a small "causal importance" function (roughly 16 to 128 parameters) that predicts how far each subcomponent can be masked. Because unimportant subcomponents are masked at random rather than switched off, Sharkey says components cannot quietly do work the original network does not do.
- **Avoiding feature splitting.** Sharkey argues SPD avoids SAE pathologies like feature absorption (an "elephant" feature split out of "words starting with e"), since components must sum to the original parameters, which caps how many there can be.
- **Next steps.** The team has tried models in the low billions of parameters and is working with smaller ones. Sharkey sees uses in unlearning and in monitoring for functions such as deception, which may show up across many input directions.

## Quotes

> "the larger your network, the more ways it has to get things right." — Lee Sharkey

> "unlearning more straightforward than, say, in SAEs because you're already working in parameter space." — Lee Sharkey
