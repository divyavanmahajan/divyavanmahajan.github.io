---
title: Artificial intelligence at NVIDIA
description: >-
  NVIDIA chief scientist Bill Dally argues that GPUs ignited deep learning and,
  with tensor cores, combine special-purpose efficiency with the flexibility a
  hardwired ASIC lacks.
pubDate: '2018-10-08'
show: practical-ai
episode: 15
url: 'https://share.transistor.fm/s/0559fa43'
durationMin: 45
hosts:
  - Chris Benson
  - Daniel Whitenack
guests:
  - Bill Dally
tags:
  - gpus
  - ai-hardware
  - nvidia
  - edge-inference
  - robotics
  - industrial-research
draft: false
---
## Thesis

Bill Dally, NVIDIA's chief scientist and head of NVIDIA Research, argues that the deep learning revolution was enabled by hardware: the algorithms existed since the 1980s, but GPUs made them practical. He explains why GPUs with tensor cores remain the platform of choice in the data center, while embedded devices also use dedicated accelerators, and how NVIDIA Research turns ideas into products.

## Key points

- **From graphics to CUDA.** Dally explains that rendering is a highly parallel task, so GPUs became efficient parallel computers. His Stanford stream-processing language Brook, taken to NVIDIA by his student Ian Buck, evolved into CUDA.
- **GPU vs CPU vs TPU.** Dally says a CPU spends most of its energy rescheduling around cache misses, roughly 1% efficient, while GPUs spend over half on arithmetic. A TPU is a matrix-multiply ASIC; NVIDIA instead adds tensor cores to a programmable GPU so it can follow new network architectures.
- **Accelerators at the edge.** NVIDIA open-sourced its NVDLA accelerator (nvdla.org) and uses it in the Xavier self-driving chip alongside 512 CUDA cores, over 10 teraops on the CUDA cores plus another 20 on the accelerators.
- **Research that ships.** Dally runs a group of about 200 people. Each idea needs a champion in a product group; unpromising projects are dropped fast. Turing ray tracing cores, cuDNN, NVSwitch, NVLink and deep learning super sampling began in research, alongside progressive GANs and an optical flow network.
- **Cloud vs edge.** Dally says training belongs in the cloud for large, pooled data sets, and inference is cheaper there through sharing, but vehicles need edge inference because of latency, connectivity and bandwidth limits.
- **Robots and skills.** NVIDIA opened a Seattle robotics lab led by Dieter Fox, aiming to give robots perception and reinforcement-learning-based action. For newcomers Dally recommends statistics and probability plus practical skill in PyTorch or TensorFlow.

## Quotes

> "one of the keys of good research is to kill things quickly." — Bill Dally

> "GPUs basically were the spark that ignited the revolution." — Bill Dally
