---
title: The Mathematics of Training LLMs — with Quentin Anthony of Eleuther AI
description: >-
  EleutherAI's Quentin Anthony walks through rules of thumb for LLM compute,
  memory and distributed training, arguing that optimizer state and
  communication, not raw FLOPS, are the bottlenecks.
pubDate: '2023-08-16'
show: latent-space
url: >-
  https://lspace.beehiiv.com/podcast/s/latent_space_the_ai_engineer_podcast/the_mathematics_of_training_llms_with_quentin_anthony_of_eleuther_ai
durationMin: 51
hosts:
  - Alessio Fanelli
  - swyx
guests:
  - Quentin Anthony
tags:
  - llm-training
  - distributed-training
  - gpu-memory
  - transformers
  - eleutherai
draft: false
---
## Thesis

Quentin Anthony, head engineer at EleutherAI and a PhD student at Ohio State, explains the "good enough" rules of thumb behind EleutherAI's Transformers Math 101 blog post. His main point is that training is limited less by compute than by memory, especially optimizer state, and by the communication needed to spread a model across GPUs. Practical choices should favour the fewest GPUs and the simplest setup that does the job.

## Key points

- **The compute equation.** Compute is throughput times time, and roughly 6PD (parameters times tokens): 2PD for the forward pass and 4PD for the backward pass. Anthony says to benchmark throughput on your own stack, then derive time and cost.
- **Smell tests for FLOPS.** An A100 should deliver roughly 100-180 TFLOPS. Anthony says EleutherAI has never set up a new system that could not exceed 115, so anything below that means something is wrong in the software.
- **Use the minimum GPUs.** More GPUs mean more hardware failures, hangs and synchronisation bugs. He prefers NVIDIA and PyTorch for their community support; AMD hardware is comparable, but he thinks ROCm will take a few years to catch up.
- **Memory math.** Mixed precision keeps both FP16 and FP32 weights. Vanilla Adam needs 12 bytes per parameter (FP32 copy, momentum, variance), against 2 bytes for FP16 weights, so 8-bit optimizers such as bitsandbytes save more than quantising weights. The KV cache can match or exceed model size at inference. Activation recomputation ranges from recomputing everything to Megatron's selective scheme to NeoX's simple size threshold.
- **ZeRO and 3D parallelism.** ZeRO stages 1-3 shard optimizer state, then gradients, then parameters. 3D parallelism combines data, tensor and pipeline parallelism. Anthony says it gives the most control and the most ways to go wrong, and many teams now use pure sharding. On Summit, about 20 billion parameters across 100-200 GPUs was the limit before communication dominated.
- **Open problems.** Anthony names parallelism for RLHF and multimodal models, and on-the-fly compression of communication, as under-studied.

## Quotes

> "I'm a systems guy. I'm an engineer, and a lot of these things come to me as magic. Adam comes to me as magic." — Quentin Anthony

> "you should take the minimum number of GPUs that you have, 'cause those are the easier cases to debug" — Quentin Anthony
