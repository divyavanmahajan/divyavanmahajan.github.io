---
title: "Intelligence on the Edge: Liquid AI's Ramin Hasani on the Search for Device-Native Foundation Models"
date: 2026-07-04
show: cognitive-revolution
url: "https://www.cognitiverevolution.ai/intelligence-on-the-edge-liquid-ai-s-ramin-hasani-on-the-search-for-device-native-foundation-models/"
youtube: "https://www.youtube.com/watch?v=Vvad9lpEy8Q"
duration_min: 108
hosts: ["Nathan Labenz"]
guests: ["Ramin Hasani"]
description: "Model architecture should depend on scale: unstructured attention wins at trillions of parameters, while small on-device models benefit from biases like gated convolutions found by hardware-aware search."
tags: ["on-device-ai", "model-architecture", "small-models", "liquid-neural-networks", "ai-hardware"]
source_transcript: "cognitive-revolution/episodes/2026/07/2026-07-04-intelligence-on-the-edge-liquid-ai-s-ramin-hasani-on-the-search-for-de.md"
draft: false
---

## Thesis

Ramin Hasani, co-founder and CEO of Liquid AI, argues that "scaling laws define architecture": the larger a model, the more unstructured it should be, which is why transformers dominate at frontier scale. Below that, architectural bias pays off. Liquid uses an automated, hardware-in-the-loop search to find efficient designs for phones, laptops and cars, and Hasani sees this market outside the data centre as both huge and necessary given energy limits.

## Key points

- **From a worm to closed form.** At MIT CSAIL, Hasani and co-founder Mathias Lechner modelled neurons on C. elegans, whose 300-cell nervous system was fully mapped. Their liquid time-constant networks parallel-parked a car with 12 neurons, drove with 19 and flew a drone with 30. A closed-form solution, published in Nature Machine Intelligence in November 2022, removed the need for numerical solvers, and a Quanta profile in February 2023 brought the investors.
- **Why nonlinearity limits scale.** Hasani explains that nonlinear recurrences cannot easily be turned into parallel tensor operations, which is why state space models are linear. Liquid networks add input-dependent dynamics, which he distinguishes from continual learning because the weights stay fixed.
- **Search instead of "Avengers".** Hasani criticises labs where a few senior researchers hand-tune architectures. Liquid's Automated Foundation Model Design runs evolutionary search with target hardware in the loop, scored on about 100 downstream benchmarks rather than perplexity. On CPUs from AMD, Qualcomm, Intel and Arm it converged on double-gated short convolutions for 70-80% of layers, plus some attention. He says Liquid-S4 introduced input-dependent SSMs about a year and a half before Mamba.
- **Where bias wins.** Genomics (sequences of billions of elements), audio with little data, video diffusion and physics simulation all favour specialised designs.
- **Commercial traction.** Liquid's open models get over 1 million Hugging Face downloads a week, fifth among US organisations. They run in production at Shopify, and a Mercedes-Benz deal puts a 600MB model behind the in-car voice. Hasani says the CUDA moat is gone and chipmakers must own an "intelligence layer", as Nvidia has with Nemotron.
- **Local agents.** For Labenz's private-data setup, Hasani recommends a local model as router, PII filters before cloud calls and fine-tuning costing "tens of dollars" to "low thousands", since no local model is good enough off the shelf yet.

## Quotes

> "the larger neural networks you make, the more you want them to become less and less structured." — Ramin Hasani

> "We really have to work smart. We cannot just do the simplest format or maybe more constrained use cases." — Ramin Hasani
