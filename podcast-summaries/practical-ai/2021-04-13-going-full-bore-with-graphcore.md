---
title: "Going full bore with Graphcore!"
date: 2021-04-13
show: practical-ai
episode: 129
url: "https://share.transistor.fm/s/2fb2dbd4"
duration_min: 44
hosts: ["Chris Benson", "Daniel Whitenack"]
guests: ["Dave Lacey"]
description: "Graphcore's Dave Lacey argues that AI chips only pay off when hardware, software stack and ML algorithms are co-designed, with a flexible compiler stack linking TensorFlow and PyTorch to the IPU."
tags: ["ai-hardware", "compilers", "graphcore", "co-design", "deep-learning-frameworks"]
source_transcript: "practical-ai/episodes/2021/04/2021-04-13-going-full-bore-with-graphcore.md"
draft: false
---

## Thesis

Dave Lacey, Chief Software Architect at Graphcore, argues that a processor built specifically for machine learning, the IPU, is only useful if a robust, open and flexible software stack sits between it and the frameworks practitioners already use. He says hardware, software, ML algorithms and the data-centre system should be co-designed, while leaving room for algorithms that do not exist yet.

## Key points

- **Three kinds of processor.** Lacey describes CPUs as scalar processors and GPUs as processors for large contiguous vectors. He calls the IPU a graph processor: highly parallel, but able to gather scattered data, and tuned for low-precision floating point with wide range.
- **Graphs in the data.** He points to grouped and separable convolutions (ResNeXt, EfficientNet), sparsity and graph neural networks as workloads with irregular data connections, and says the field will look different in two or three years.
- **Co-design without hard-wiring.** Graphcore now has more software than hardware engineers, according to Lacey. He warns against baking a model such as ResNet-50 into silicon, because a chip has to last years.
- **From TensorFlow to the chip.** Lacey walks through the stack: TensorFlow's XLA graph, Graphcore's backend optimisations, PopLibs and the Poplar graph framework, then a graph compiler and graph engine. Each chip has about 1,400 cores and around 7,000 parallel compute units, and five or six compilers interact along the way.
- **Testing and openness.** He credits heavy regression testing, documentation and open-source PopLibs and framework backends for keeping up with framework changes.
- **Advice for practitioners.** Lacey estimates about 90% of users program at the PyTorch/TensorFlow level. He recommends some sympathy with the hardware: batch sizes, matrix shapes and floating-point overflow, helped by tools like automatic loss scaling. Whitenack links this to Bill Kennedy's idea of mechanical sympathy.

## Quotes

> "We're as much a software company as a hardware company." — Dave Lacey

> "design for not just the algorithms of today, but the algorithms of three years time or four years time as well" — Dave Lacey
