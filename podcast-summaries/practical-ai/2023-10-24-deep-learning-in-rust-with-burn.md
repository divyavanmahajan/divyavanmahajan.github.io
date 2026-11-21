---
title: "Deep learning in Rust with Burn 🔥"
date: 2023-10-24
show: practical-ai
episode: 242
url: "https://share.transistor.fm/s/11dc4d43"
duration_min: 41
hosts: ["Chris Benson", "Daniel Whitenack"]
guests: ["Nathaniel Simard"]
description: "Nathaniel Simard explains why he built Burn, a Rust deep learning framework with swappable backends that targets deployment anywhere and training as well as inference."
tags: ["rust", "deep-learning", "frameworks", "edge-ai", "open-source"]
source_transcript: "practical-ai/episodes/2023/10/2023-10-24-deep-learning-in-rust-with-burn.md"
draft: false
---

## Thesis

Nathaniel Simard, creator of Burn, argues that Rust is a general-purpose language well suited to deep learning because it combines high-level abstractions with fine control over memory and concurrency. Burn abstracts over hardware backends so models can be trained and deployed on almost any platform. Chris Benson sees this as part of AI maturing beyond Python, especially for edge and autonomous systems.

## Key points

- **Why Rust.** Simard says Rust is wrongly labelled low-level; its value is crossing abstraction boundaries without paying in performance. Benson adds that the compiler prevents memory faults, which he cites as about 70% of software bugs according to Microsoft.
- **Origin of Burn.** Simard was experimenting with asynchronous neural networks that needed multi-threading and concurrency, which was hard in Python. At the time Rust had no practical deep learning framework comparable to PyTorch.
- **Backend-generic design.** Burn defines a backend trait with associated types, and started on LibTorch to settle the API first. Backends now include Torch (fastest on NVIDIA), NDArray (portable), a new Rust framework from Hugging Face, and WebGPU for non-NVIDIA GPUs. Next on his list: kernel fusion and lazy evaluation.
- **What users do with it.** Simard says most users come to deploy models reliably, including to WebAssembly or devices without an operating system, and some then port training too. Community ports include Llama, Stable Diffusion and Whisper, and model import is a work in progress.
- **Tooling.** A PyTorch-like modelling API, a training library similar to PyTorch Lightning with a CLI metrics dashboard, and the Burn Book tutorial at burn.dev.
- **Training everywhere.** Simard argues that, unlike inference-only deployment tools, Burn lets you train on any platform, which matters if future models call backward during inference.

## Quotes

> "I said to myself well if it's hard for me to do that then maybe it's too hard for any researcher to do that." — Nathaniel Simard

> "I think it's valuable to be able to do training everywhere." — Nathaniel Simard
