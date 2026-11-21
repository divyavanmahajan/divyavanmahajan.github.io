---
title: "Gaudi processors & Intel's AI portfolio"
date: 2024-08-07
show: practical-ai
episode: 281
url: "https://share.transistor.fm/s/0ef709e4"
duration_min: 46
hosts: ["Chris Benson", "Daniel Whitenack"]
guests: ["Benjamin Consolvo", "Greg Serochi"]
description: "Intel's Benjamin Consolvo and Greg Serochi pitch Gaudi accelerators, Xeon CPUs and AI PCs as cheaper, available alternatives to NVIDIA GPUs, with easy migration through PyTorch and Hugging Face."
tags: ["ai-hardware", "intel", "gaudi", "pytorch", "hugging-face"]
source_transcript: "practical-ai/episodes/2024/08/2024-08-07-gaudi-processors-intel-s-ai-portfolio.md"
draft: false
---

## Thesis

Intel's Benjamin Consolvo (AI engineering manager) and Greg Serochi (Gaudi developer ecosystem manager) argue that Intel competes in AI on cost, performance and availability rather than raw dominance. They present the Gaudi accelerator, Xeon CPUs and the AI PC as alternatives to NVIDIA GPUs, and say upstream work in PyTorch and Hugging Face makes moving existing code straightforward. Daniel Whitenack, whose company Prediction Guard runs on Gaudi, backs up the migration story from his own experience.

## Key points

- **Portfolio.** Consolvo lists Xeon for data-centre inference, the AI PC with CPU, GPU and NPU, Gaudi for data-centre training and inference, and the future Falcon Shores GPU, which will combine Gaudi with the Max series GPU.
- **Software path.** PyTorch 2.4 supports Intel GPUs, with Arc support planned for 2.5. Serochi points to Optimum Habana, a Hugging Face library with documented Llama 2, Llama 3, Mistral and Mixtral examples, plus Megatron DeepSpeed for large-scale training and the OPEA open platform for enterprise AI.
- **Gaudi's history and design.** Intel invested in Habana in 2016-2017 and bought it in 2019. Gaudi 1 runs in AWS DL1 instances; Gaudi 2 submitted MLPerf LLM training results. Serochi highlights 96 GB of HBM and 24 100-gigabit Ethernet ports for scale-out.
- **Hands-on use.** Daniel says he had models running on Gaudi in Intel Developer Cloud during a flight to Bangalore. Consolvo describes running Whisper and geophysical imaging models on Xeon, and a 2-billion-parameter multimodal model on an AI PC NPU.
- **Roadmap.** Serochi says free Gaudi access is coming to Intel Tiber Developer Cloud, a PCIe Gaudi 3 card will serve edge use cases, Gaudi 2 workloads will carry forward to Gaudi 3 and Falcon Shores, and Intel is building fabs in Ohio and Germany.

## Quotes

> "Gaudi really is is that low-cost alternative to the standard NVIDIA GPU solutions that are in the market today." — Greg Serochi

> "a lot of the same tools that I'm used to using for development on the NVIDIA platforms, I can use those same tools with some slight code modifications for the Intel products." — Benjamin Consolvo
