---
title: "The AI Chip Revolution with Andrew Feldman of Cerebras"
date: 2023-05-25
show: cognitive-revolution
url: "https://www.cognitiverevolution.ai/the-ai-chip-revolution-with-andrew-feldman-of-cerebras/"
youtube: "https://www.youtube.com/watch?v=JjQkNzzPm_Q"
hosts: ["Nathan Labenz"]
guests: ["Andrew Feldman"]
description: "Cerebras CEO Andrew Feldman argues that a wafer-sized chip built only for sparse AI workloads avoids the distributed-compute overhead that makes GPU clusters slow and complex."
tags: ["ai-hardware", "semiconductors", "cerebras", "gpus", "sparsity"]
source_transcript: "cognitive-revolution/episodes/2023/05/2023-05-25-the-ai-chip-revolution-with-andrew-feldman-of-cerebras.md"
draft: false
---

## Thesis

Andrew Feldman, CEO and co-founder of Cerebras Systems, argues that AI work is mostly simple compute plus heavy communication, so the best machine keeps that communication on one very large chip. Cerebras's wafer-scale chip and full systems, he says, remove most of the effort of sharding models across many GPUs and run tens to hundreds of times faster for AI.

## Key points

- **Why a giant chip.** Feldman says on-chip communication is thousands of times faster and more energy efficient than going off chip; the chip has 850,000 cores and, he claims, enough memory for trillions of parameters, so even the largest layers need not be split up.
- **Founding and funding.** The founders started in late 2015, mostly people who had worked together before; Feldman says they made 8 pitches and got 8 term sheets, and solved the known big-chip problems in about 6 months for $20 million.
- **Manufacturing.** TSMC greenlit the project in the first meeting with "30 dudes in a PowerPoint". Cerebras kept TSMC's process unchanged and patented ways to communicate across the scribe lines, producing a chip 56 times larger than any before, cooled with water.
- **Sparsity and specialisation.** Feldman says GPUs multiply by zero needlessly, while Cerebras skips zeros because the design targets sparse linear algebra and drops features such as 64-bit double precision.
- **Clusters and business.** The Andromeda supercomputer links 16 machines (13.6 million cores); Cerebras released 7 GPT models under Apache 2. Systems are sold on premise or via cloud, with customers such as GlaxoSmithKline and Total; managed inference was "around the corner".
- **Edge and society.** Feldman expects training to stay in data centres, with small chips handling classification at the edge, and believes AI will improve life on balance despite real risks of misuse.

## Quotes

> "Not a little bit, not 10 times better, but 50 or 100 times better." — Andrew Feldman

> "I think it's easier to correct algorithms than it is to correct people." — Andrew Feldman
