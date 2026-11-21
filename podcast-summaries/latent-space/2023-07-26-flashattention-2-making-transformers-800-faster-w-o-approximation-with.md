---
title: "FlashAttention 2: making Transformers 800% faster w/o approximation - with Tri Dao of Together AI"
date: 2023-07-26
show: latent-space
url: "https://lspace.beehiiv.com/podcast/s/latent_space_the_ai_engineer_podcast/flashattention_2_making_transformers_800_faster_w_o_approximation_-_with_tri_dao_of_together_ai"
duration_min: 54
hosts: ["Alessio Fanelli", "swyx"]
guests: ["Tri Dao"]
description: "Tri Dao argues that exact attention became much faster by fixing memory reads and writes, not by approximating, and that progress comes from combining machine learning and systems thinking."
tags: ["flashattention", "gpu-optimization", "transformers", "open-source-ai", "model-architecture"]
source_transcript: "latent-space/episodes/2023/07/2023-07-26-flashattention-2-making-transformers-800-faster-w-o-approximation-with.md"
draft: false
---

## Thesis

Tri Dao, lead author of FlashAttention, joins Alessio Fanelli (swyx is absent). He explains that attention is slow mainly because of memory traffic, not floating-point operations. Combining classic systems techniques with an algorithmic trick gives exact attention with linear memory and a large speed-up. His closing advice is to understand both the algorithms and the hardware they run on.

## Key points

- **IO awareness.** Dao says approximate and sparse attention methods rarely ran faster in wall-clock time. FlashAttention instead combines kernel fusion and tiling from systems work with the online softmax trick, so data stays in fast on-chip SRAM rather than going back and forth to HBM. That gave a 2-4x speed-up. Alessio cites roughly 19 TB/s for SRAM versus 1.5 TB/s for HBM.
- **FlashAttention 2.** Dao started by refactoring onto version 3 of NVIDIA's CUTLASS library and found further inefficiencies. The result is about twice as fast and close to the efficiency of matrix multiply. The code targets NVIDIA, but he says AMD and GGML have their own versions.
- **Hardware lottery.** Dao says transformers benefit from years of hardware and software tuning, which makes alternatives hard to test fairly. He sees compilers such as Mojo, and chips such as Cerebras and Tesla Dojo, as possible ways out.
- **Alternatives.** He is personally bullish on state space models and RNNs such as RWKV, which has a 14B model. Their fixed-size state avoids the KV cache, which could help with long sequences and high-throughput batch generation. He notes this is not yet proven at scale.
- **Academia and industry.** Dao sees the two as complementary: industry has the scale, while academia works on evaluation, understanding and riskier bets. He is joining Princeton as an assistant professor and Together AI as chief scientist.
- **Open source.** He calls Llama 2's commercial licence a positive shift away from a few API providers. He says companies have little incentive to release datasets, and suggests a Wikipedia-style volunteer model for creating them.

## Quotes

> "I think the most important thing will be the artifact, which is the code." — Tri Dao

> "I am personally bullish on RNNs." — Tri Dao
