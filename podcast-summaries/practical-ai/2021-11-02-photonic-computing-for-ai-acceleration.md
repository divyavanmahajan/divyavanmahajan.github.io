---
title: "Photonic computing for AI acceleration"
date: 2021-11-02
show: practical-ai
episode: 156
url: "https://share.transistor.fm/s/d60b2f55"
duration_min: 44
hosts: ["Chris Benson", "Daniel Whitenack"]
guests: ["Nicholas Harris"]
description: "Lightmatter CEO Nick Harris argues that transistor power and heat limits will slow AI progress, and that photonic chips running matrix maths with light offer a more efficient path for inference."
tags: ["ai-hardware", "photonics", "inference", "energy-efficiency", "data-centers"]
source_transcript: "practical-ai/episodes/2021/11/2021-11-02-photonic-computing-for-ai-acceleration.md"
draft: false
---

## Thesis

Nick Harris, CEO of Lightmatter, argues that every AI accelerator today is built on transistors, and that their energy use no longer shrinks as they get smaller. Heat and power, not ideas, will become the limit on AI scale. Lightmatter's answer is a photonic chip that does the multiply-and-add work of deep learning with light, packaged as a normal server card and driven from PyTorch and TensorFlow.

## Key points

- **The energy wall.** Harris cites a Department of Energy estimate that compute and interconnect will use 10% of the planet's energy by 2030. He says the end of Dennard scaling pushes chips such as NVIDIA's A100 (about 450 watts) and Intel's water-cooled Ponte Vecchio (600 watts) to the limits of cooling.
- **From quantum labs to a product.** Harris worked on transistor physics at Micron, then built photonic quantum computers at MIT before realising the same processors could run neural networks. Lightmatter showed its Mars chip at Hot Chips 2020, uses GlobalFoundries as its fab and has patented about 70 architectures.
- **What the chip looks like.** Harris compares it to a Google TPU: a quad-core matrix processor with a 2D array of multiply-accumulate units fed by light through waveguides about 300 by 200 nanometres. It sits in a server like any other card, with optical fibres attached.
- **Scaling without shrinking.** Instead of making devices smaller, Harris says photonics scales through higher clock rates (20-50 GHz) and by running several colours of light through the same array at once. The Passage optical interconnect, a wafer-scale chip, aims to keep processors fed as systems scale out.
- **Software and inference focus.** The Idiom SDK compiles PyTorch and TensorFlow models (via ONNX) to the Envise chip's own instruction set. Harris expects more software than hardware engineers by the end of next year. He targets inference over training because deployment is where most AI energy goes, and quotes about 80 watts for Envise.
- **A mixed future.** Harris expects photonics for AI, digital electronics for general computing and analog electronics at the edge, and he is less bullish on near-term quantum computing.

## Quotes

> "Deep learning as a field is really just relying on multiplication and addition to do evaluations." — Nick Harris

> "Like my goal is to have all of Google run on light matters processors." — Nick Harris
