---
title: Apache TVM and OctoML
description: >-
  Luis Ceze argues that a machine learning compiler, tuned by machine learning
  itself, can replace weeks of manual work needed to make trained models run
  fast on varied hardware.
pubDate: '2021-05-18'
show: practical-ai
episode: 134
url: 'https://share.transistor.fm/s/25d635e8'
durationMin: 49
hosts:
  - Chris Benson
  - Daniel Whitenack
guests:
  - Luis Ceze
tags:
  - ml-compilers
  - model-optimization
  - edge-deployment
  - open-source
  - hardware-acceleration
draft: false
---
## Thesis

Luis Ceze, co-founder and CEO of OctoML and a University of Washington professor, argues that the cross product of models, frameworks and hardware targets has become too large to handle with hand-tuned vendor libraries. Apache TVM compiles a trained model into optimized code for a specific target and uses machine learning to search the huge space of possible compilations. OctoML's Optimizer wraps this in a SaaS service for data scientists who do not want to run the stack themselves.

## Key points

- **Origins.** Ceze traces TVM to his hardware-software co-design work on IBM's Blue Gene and approximate computing at UW, with co-advised student Tianqi Chen and Thierry Moreau, who built FPGA backends.
- **What the compiler does.** Ceze says TVM's optimizations largely leave model accuracy unchanged, quantization being an optional exception. The output is an executable plus a tuned runtime, for example a .so library or Python wheel, called with about two lines of code.
- **Workflow.** Models enter TVM via ONNX or directly from TensorFlow, PyTorch, MXNet or Keras. Auto-tuning requires users to set up benchmark infrastructure; the Optimizer lets them upload a model, tick targets such as NVIDIA GPUs, Intel CPUs or Raspberry Pi, and compare performance.
- **Limits.** Responding to Benson's question about running GPT-3 on small devices, Ceze says compilation cannot get around physics: a model that does not fit in memory will not run.
- **Hardware ecosystem.** Ceze says ARM built its CPU, GPU and NPU compilers on TVM, NVIDIA contributes commits, and TVM can pick between cuDNN and native code per part of a model. He argues that open, Linux-style collaboration is the only way to manage the diversity.
- **Community and outlook.** His advice for open-source tool builders is to recruit early users, respond fast and be clear on differentiation. He is watching hardware-aware architecture search, Snorkel-style programmatic data sets and FPGAs tuned for machine learning.

## Quotes

> "There's literally billions of ways in which you can compile the same model on the same hardware target. The question is, how do you pick the fastest one?" — Luis Ceze

> "it could take weeks to months of hardcore software engineering work." — Luis Ceze
