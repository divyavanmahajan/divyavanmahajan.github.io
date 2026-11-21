---
title: "Reiner Pope – Chip design from the bottom up"
date: 2026-05-22
show: dwarkesh
url: "https://www.dwarkesh.com/p/reiner-pope-2"
youtube: "https://www.youtube.com/watch?v=oIk3R-sMX5o"
duration_min: 81
hosts: ["Dwarkesh Patel"]
guests: ["Reiner Pope"]
description: "Building up from logic gates, MatX CEO Reiner Pope shows that chip design is mostly a fight to spend area on compute rather than on moving data."
tags: ["chip-design", "ai-hardware", "systolic-arrays", "gpus", "tpus"]
source_transcript: "dwarkesh/episodes/2026/05/2026-05-22-reiner-pope-chip-design-from-the-bottom-up.md"
draft: false
---

## Thesis

In a blackboard lecture, Reiner Pope, CEO of chip start-up MatX (in which Dwarkesh Patel is an angel investor), builds an AI chip from AND gates and full adders upwards. His recurring point is that the arithmetic itself is cheap; most of the cost of a chip lies in selecting, moving and synchronising data, and AI hardware is designed to raise the ratio of compute to communication at every level.

## Key points

- **Quadratic payoff of low precision.** Pope shows that a multiply-accumulate needs about p x q gates, so area grows with the square of bit width. He says this is the main reason low-precision arithmetic works so well for neural nets, and notes Nvidia's B300 specs now list FP4 as three times faster than FP8 (Patel points out the theory suggests 4x).
- **Data movement dominates.** In a classic CUDA core or CPU, the muxes that read three operands from even a small register file cost far more gates than the arithmetic unit; Pope estimates seven-eighths of the cost goes on register-file access.
- **Systolic arrays.** Tensor Cores and TPU matrix units hard-wire a whole matrix-vector loop and keep the weight matrix stored locally, trickle-loading it slowly. Older TPUs used 128x128 arrays; Pope calls this the most efficient known circuit for matrix multiplication. Most design choices are sizing trade-offs, such as register file versus array area.
- **Clocks and pipelines.** The clock synchronises the chip roughly every nanosecond. Inserting pipeline registers raises clock speed at the cost of area, and feedback loops such as running sums set the hard limit.
- **FPGAs, caches and CPUs.** FPGAs are built from lookup tables and muxes, so are about an order of magnitude less efficient than ASICs, but cost around $10,000 versus roughly $30 million for a first ASIC tape-out. Caches make CPUs fast but non-deterministic; TPUs use software-managed scratchpads instead. CPU area goes largely to caches and branch predictors.
- **GPU versus TPU.** Pope describes a GPU as many tiny TPUs tiled across the die, and mentions MatX's "splittable systolic array" as a middle path.

## Quotes

> "From a very high-level point of view, the GPU has a lot of tiny TPUs tiled across the whole chip." — Reiner Pope

> "all of this work just moving the data from the register file to the logic unit is many, many times more expensive than the logic unit." — Reiner Pope
