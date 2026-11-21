---
title: 'TinyGPU, Massive Learning, with Adam Majmudar'
description: >-
  Adam Majmudar explains how he designed a minimal GPU from scratch in a few
  weeks, using open-source chip tooling and AI tutors, and what it teaches about
  GPU architecture.
pubDate: '2024-05-06'
show: cognitive-revolution
url: >-
  https://www.cognitiverevolution.ai/tinygpu-massive-learning-with-adam-majmudar/
youtube: 'https://www.youtube.com/watch?v=WulkHHZVbf4'
durationMin: 111
hosts:
  - Nathan Labenz
guests:
  - Adam Majmudar
tags:
  - gpu-architecture
  - semiconductors
  - chip-design
  - ai-assisted-learning
  - hardware
draft: false
---
## Thesis

Adam Majmudar, who had no prior GPU design experience, built TinyGPU, a minimal Verilog GPU meant as a teaching resource. He walks Nathan Labenz through it layer by layer, from the SIMD programming model down to hardware. His larger argument is that open-source chip tooling, combined with AI tutors like ChatGPT and Claude, lets one person learn a hard engineering field far faster than traditional coursework allows.

## Key points

- **Open tooling made it possible.** Majmudar says commercial EDA software costs hundreds of thousands to millions of dollars per seat. He relied on DARPA-funded OpenROAD, SkyWater's open 130 nm PDK and Efabless, where about 100 chips cost around $10,000, and Tiny Tapeout, which shares one chip among roughly 100 projects.
- **Three priorities.** He reduced the design to architecture, parallelization and memory. His view is that memory latency and bandwidth, not compute, are the real bottleneck in GPUs.
- **A deliberately tiny ISA.** Each instruction is 16 bits, and each thread has 16 registers. The last three registers are read-only and hold the block index, block dimension and thread index. Kernels use those values to decide which element they compute, as in his matrix addition and multiplication examples.
- **Hardware flow.** A dispatcher assigns blocks of threads to four compute cores using round-robin, and each core has a scheduler, fetcher and decoder. Hardening the design on his M2 laptop took 20-25 minutes, and he went through roughly 30-35 cycles of fixing errors.
- **Learning from repos with AI.** He found the existing open GPUs (Meow GPU, Verilog GPU) too large to read directly. Instead, he formed hypotheses from first principles with Claude and ChatGPT, then checked them against the code.
- **Industry view.** Majmudar expects incumbents like NVIDIA and TSMC to keep their moats and points to 7 Powers. He calls Atomic Semi, which is building cheap fabs, the most interesting new attempt in the industry.

## Quotes

> "It's all about managing memory latencies. That really is the bottleneck." — Adam Majmudar

> "in many ways, this would not have been possible without AI." — Adam Majmudar
