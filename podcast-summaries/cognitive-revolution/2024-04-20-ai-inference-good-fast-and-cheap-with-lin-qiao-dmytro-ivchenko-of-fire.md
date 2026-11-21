---
title: "AI Inference: Good, Fast, and Cheap, with Lin Qiao & Dmytro Ivchenko of Fireworks AI"
date: 2024-04-20
show: cognitive-revolution
url: "https://www.cognitiverevolution.ai/ai-inference-good-fast-and-cheap-with-lin-qiao-dmytro-ivchenko-of-fireworks-ai/"
youtube: "https://www.youtube.com/watch?v=KVlEYLULbss"
duration_min: 102
hosts: ["Nathan Labenz"]
guests: ["Lin Qiao", "Dmytro Ivchenko"]
description: "Fireworks AI's cofounders argue that inference providers win on latency, quality and total cost of ownership, not on price, by hiding hardware and optimization complexity from developers."
tags: ["inference", "gpu-optimization", "fine-tuning", "open-source-models", "image-generation"]
source_transcript: "cognitive-revolution/episodes/2024/04/2024-04-20-ai-inference-good-fast-and-cheap-with-lin-qiao-dmytro-ivchenko-of-fire.md"
draft: false
---

## Thesis

Lin Qiao and Dmytro Ivchenko, former PyTorch leads at Meta who cofounded Fireworks AI, tell Nathan Labenz that reselling GPUs is a low-margin dead end and that subsidized pricing is unsustainable. Their pitch is low latency, high quality through fine-tuning, and low total cost of ownership, delivered by absorbing the complexity of hardware, sharding and kernel work so developers can focus on their products.

## Key points

- **Not a commodity business.** Qiao says customers come for stable low latency they cannot get elsewhere, even from OpenAI or Anthropic; low TCO is a byproduct of performance. Fireworks runs on AWS, GCP and Oracle OCI rather than its own racks.
- **Open source converges with closed.** Qiao expects same-size open and closed models to converge in quality, with fine-tuning closing the gap; she describes LoRA-based tuning that typically needs around 1,000 examples, and Labenz notes his own company fine-tunes GPT-3.5 on a few hundred.
- **Prefill versus generation.** Ivchenko explains that typical workloads have about a 10-to-1 input-to-output ratio; prefill is compute bound with huge batches, while token generation is memory bound, which is why KV caching and different deployments matter.
- **Hardware keeps moving.** Ivchenko compares NVIDIA's H100, AMD's MI300, Intel Gaudi and specialized ASICs, and says falling precision (FP8, 4-bit, the 1.58-bit paper) forces continual re-optimization down to CUTLASS and PTX.
- **Shard only when forced.** Ivchenko describes data, tensor and pipeline parallelism, warning that tensor sharding cuts throughput, so it should be used only to meet a latency budget. Qiao likens the long-term goal to a database query optimizer that self-tunes.
- **Stability AI partnership.** In a bonus segment, Ivchenko says Fireworks became the exclusive inference provider for Stable Diffusion 3, whose transformer architecture let text-model optimizations carry over; SD3 runs about 50 denoising steps by default versus around 4 for Turbo.

## Quotes

> "Our value add is low latency, high quality, and low TCO. So I almost saying low TCO is a byproduct of our high performance." — Lin Qiao

> "So there, then the optimizer becomes smarter and you don't need to hire DBAs at all. It's fully automated." — Lin Qiao
