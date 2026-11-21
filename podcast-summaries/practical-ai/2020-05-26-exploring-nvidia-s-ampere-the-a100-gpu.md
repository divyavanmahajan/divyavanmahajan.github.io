---
title: "Exploring NVIDIA's Ampere & the A100 GPU"
date: 2020-05-26
show: practical-ai
episode: 90
url: "https://share.transistor.fm/s/cd022cf4"
duration_min: 53
hosts: ["Chris Benson", "Daniel Whitenack"]
guests: []
description: "NVIDIA's Ampere generation scales AI compute from the A100 data-centre GPU down to Jetson edge boards, with the same container tooling across the range."
tags: ["gpus", "nvidia", "ai-hardware", "edge-computing", "data-center"]
source_transcript: "practical-ai/episodes/2020/05/2020-05-26-exploring-nvidia-s-ampere-the-a100-gpu.md"
draft: false
---

## Thesis

Daniel Whitenack and Chris Benson read through NVIDIA's GTC 2020 announcements. Their view is that Ampere is a real jump in GPU capability, and that the same architecture and Docker/Kubernetes tooling now run from the DGX A100 in the data centre down to the Jetson Xavier NX at the edge. Both say up front that they are not hardware experts and invite NVIDIA listeners to correct them.

## Key points

- **Why GPUs fit AI.** Whitenack explains that graphics work applies operations to matrices of pixels, and neural network layers apply weights and activation functions to matrices and vectors in the same element-wise way.
- **A100 numbers.** The hosts cite NVIDIA's claims of 20x more FLOPS for AI, a 3x to 6x speed-up over the V100 for BERT-large training (depending on numeric precision), and 7x for inference. Whitenack describes the new TensorFloat-32 format as trading precision for a wider range.
- **Multi-instance GPU.** Each A100 can be split into seven isolated instances. Whitenack reads the 7x inference figure as seven parallel inferences, and Benson says NVIDIA's wording on this and on "no code changes" is ambiguous.
- **DGX A100.** Benson notes it drops back to eight GPUs from the DGX-2's 16 but can run 56 GPU applications. Whitenack quotes a price of about a million dollars per box, replacing roughly $11 million of older infrastructure. Benson warns that organisations underestimate the data and systems architecture needed to make a DGX productive.
- **Cloud versus owning hardware.** Whitenack says cloud GPUs suit a single practitioner who trains occasionally, but costs add up quickly for teams of 40 people running hyperparameter searches.
- **Edge and security.** Whitenack argues that a model shipped in an EGX- or Jetson-powered product is valuable IP that could be copied off the device, so NVIDIA's focus on encryption at the edge makes sense. He is waiting for a Xavier NX to test how large a model he can train on it.

## Quotes

> "So we've gotten to a point where the actual AI model is a piece of IP and is extremely valuable." — Daniel Whitenack

> "if you learn it one place, you can use it from the most scaled down to the most scaled up version." — Chris Benson
