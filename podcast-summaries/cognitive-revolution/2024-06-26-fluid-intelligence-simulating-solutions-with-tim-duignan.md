---
title: "Fluid Intelligence: Simulating Solutions with Tim Duignan"
date: 2024-06-26
show: cognitive-revolution
url: "https://www.cognitiverevolution.ai/fluid-intelligence-simulating-solutions-with-tim-duignan/"
youtube: "https://www.youtube.com/watch?v=iESd3eCSnq8"
duration_min: 114
hosts: ["Nathan Labenz"]
guests: ["Tim Duignan"]
description: "Tim Duignan argues that small neural networks trained on quantum simulation data can stand in for costly physics calculations and generalise to effects never seen in training."
tags: ["ai-for-science", "neural-network-potentials", "simulation", "equivariance", "big-tech"]
source_transcript: "cognitive-revolution/episodes/2024/06/2024-06-26-fluid-intelligence-simulating-solutions-with-tim-duignan.md"
draft: false
---

## Thesis

Nathan Labenz talks with Tim Duignan, an applied mathematician at the University of Queensland who uses AI to simulate electrolyte solutions such as saltwater and battery electrolytes. Duignan argues that neural networks trained on expensive quantum simulation data can replace most of that computation on modest hardware, and sometimes show behaviour that was absent from the training data. He wants the public sector to build such models too, and asks AI researchers to make tools for scientists rather than chase AGI.

## Key points

- **Why it matters.** Duignan says electrolyte properties such as solubility still come mostly from costly lab experiments. Better simulation would help with climate modelling, mineral processing and batteries, where trial-and-error work on additives for a "million mile battery" takes a long time.
- **Small models, big speed-up.** A neural network predicts the forces that slow quantum calculations would otherwise compute. Duignan reports a speed-up of a factor of 1000 or more, models with tens of thousands of parameters, and training data from a few GPUs over about a day.
- **Equivariance cut data needs.** Building rotational symmetry into a graph neural network gave about 4 times lower error with 1000 times less data. Labenz contrasts this with AlphaFold 3, which adds rotated copies of the data instead.
- **Unexpected generalisation.** A coarse-grained model that dropped the water and kept only the ions showed salt crystallising, which was not in the training data. A water model also showed self-ionisation. Duignan says neither result is quantitatively precise.
- **Automated data loops.** Active learning adds new training examples wherever the model's uncertainty spikes. Duignan notes this needs no human labelling, unlike LLM fine-tuning.
- **Who builds the big models.** ByteDance, Microsoft and Google are building universal models. Duignan calls big-tech dominance a risk and points to the Large Hadron Collider as a model for public projects. Labenz notes that China is not far behind.

## Quotes

> "So 3 orders of magnitude less data. So that kind of blew me away." — Tim Duignan

> "So I think there's no reason that we have to leave it to these big companies." — Tim Duignan
