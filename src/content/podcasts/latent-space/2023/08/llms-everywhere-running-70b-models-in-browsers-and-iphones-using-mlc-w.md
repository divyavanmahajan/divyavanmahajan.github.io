---
title: >-
  LLMs Everywhere: Running 70B models in browsers and iPhones using MLC — with
  Tianqi Chen of CMU / OctoML
description: >-
  Tianqi Chen argues machine learning compilation lets one optimized model
  pipeline run anywhere, from CUDA servers and AMD cards to iPhones and a 70B
  model in the browser.
pubDate: '2023-08-10'
show: latent-space
url: >-
  https://lspace.beehiiv.com/podcast/s/latent_space_the_ai_engineer_podcast/llms_everywhere_running_70b_models_in_browsers_and_iphones_using_mlc_with_tianqi_chen_of_cmu_octoml
durationMin: 52
hosts:
  - Alessio Fanelli
  - swyx
guests:
  - Tianqi Chen
tags:
  - ml-compilation
  - local-llms
  - webgpu
  - quantization
  - open-source
draft: false
---
## Thesis

Tianqi Chen, creator of XGBoost, MXNet and Apache TVM, argues that machine learning problems now have to be solved across algorithms, data and systems together. His MLC project uses machine learning compilation to take one model through a single optimization pipeline written in Python and deploy it universally, so that hardware without hand-tuned vendor libraries, including phones and browsers, can still run large language models well.

## Key points

- **XGBoost as a byproduct.** Chen says XGBoost came out of testing whether tree models fed with big data could match deep learning, a hypothesis that turned out wrong. He still sees tree models as the default for tabular data and uses XGBoost for TVM's cost models.
- **Why TVM exists.** Spending six months hand-writing CUDA kernels for his master's thesis convinced Chen that a generic, automatic compiler was needed. TVM can generate kernels where no vendor library exists, which is how MLC supports Apple M2, WebGPU and AMD via Vulkan.
- **Four optimizations.** Chen walks through kernel fusion, memory planning with symbolic shape tracking for dynamic shapes, loop transformations (a naive matrix multiply is a hundred times slower than the best code), and weight quantization, where int4 is now common for inference. MLC is adding "bring your own quantization".
- **Performance numbers.** MLC reports top single-batch 4-bit performance on CUDA, and a recent AMD consumer card reaching about 80% of an NVIDIA 4090.
- **LLMs in the browser.** WebLLM compiles models to WebGPU; a 70B Llama 2 needs roughly 50 GB of RAM, so an M2 Max. There is an npm package, an OpenAI-compatible REST API, and a shared Chrome cache so apps need not redownload weights.
- **Positioning and future.** Chen contrasts GGML (hand-written C per backend) and Mojo (develop and deploy in one language) with MLC's Python optimization plus deployment to any language. He describes OctoAI as the hosted service on this stack and hopes for an ecosystem of personal local models working with larger cloud models; RWKV support is coming to MLC.

## Quotes

> "it's no longer at algorithm layer, right? You kind of need to solve it from both algorithm data and systems angle" — Tianqi Chen

> "I think it's less about trying to get impact, more about, you know, wanted to have fun." — Tianqi Chen
