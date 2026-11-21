---
title: "Generative models: exploration to deployment"
date: 2023-10-03
show: practical-ai
episode: 240
url: "https://share.transistor.fm/s/e3e8f060"
duration_min: 49
hosts: ["Chris Benson", "Daniel Whitenack"]
guests: []
description: "Daniel Whitenack lays out a staged path for open generative models: pick by behaviour in hosted demos, test in a notebook, optimise only if needed, then serve behind an API."
tags: ["model-deployment", "open-models", "model-optimization", "inference", "mlops"]
source_transcript: "practical-ai/episodes/2023/10/2023-10-03-generative-models-exploration-to-deployment.md"
draft: false
---

## Thesis

Daniel Whitenack, founder of Prediction Guard, walks Chris Benson through how a team should take an open model from experiment to production in autumn 2023. His argument is to choose a model by its output behaviour first, worry about hardware second, and treat the model server as a separate service with its own API. Most of the work, he says, is following existing examples rather than building infrastructure up front.

## Key points

- **Hardware news.** Whitenack reports from the Intel Innovation conference on "AI PCs", the Intel Developer Cloud with Gaudi 2 processors and confidential computing (Intel TDX); Benson explains trusted execution environments. Whitenack also notes Cloudflare's Workers AI joining serverless GPU providers such as Modal, Baseten and Banana.
- **Select by behaviour.** On Hugging Face he points to hosted widgets and Spaces for models such as Whisper, DETR ResNet-50 and Mistral 7B, and advises starting small and scaling up. Beyond roughly 7 to 15 billion parameters, models usually need more than a consumer GPU.
- **Test in a notebook.** He runs the model card's example in Google Colab, or a Hugging Face Transformers Docker image, and checks memory with docker stats or nvidia-smi. He prefers a single accelerator or CPU over a GPU cluster.
- **Optimise only if needed.** For limited hardware such as an offline CPU at a microscope lab, he lists llama.cpp, GPTQ, GGML, bitsandbytes, QLoRA, Intel's BigDL and OpenVINO, and Hugging Face Optimum.
- **Serve behind an API.** Whitenack recommends a REST or gRPC model server separate from application code, deployed serverless or as a container on a GPU VM, using tools like Baseten's Truss, Seldon, Hugging Face TGI or vLLM. He says packaging is not standardised across vendors.

## Quotes

> "convince yourself that you can't run it on a single accelerator or a single CPU before you make the jump to spin up a GPU cluster or something like that." — Daniel Whitenack

> "there's a lot of copy and pasting that happens. So that's okay. And that's how development works." — Daniel Whitenack
