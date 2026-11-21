---
title: "2024 in Post-Transformers Architectures (State Space Models, RWKV) [LS Live @ NeurIPS]"
date: 2024-12-24
show: latent-space
url: "https://lspace.beehiiv.com/podcast/s/latent_space_the_ai_engineer_podcast/2024_in_post-transformers_architectures_state_space_models_rwkv_ls_live_neurips"
duration_min: 43
hosts: ["Alessio Fanelli", "swyx"]
guests: ["Dan Fu", "Eugene Cheah"]
description: "Dan Fu and Eugene Cheah argue that sub-quadratic architectures like state space models and RWKV can match transformer quality at far lower compute, especially for long contexts."
tags: ["state-space-models", "rwkv", "model-architecture", "long-context", "linear-attention"]
source_transcript: "latent-space/episodes/2024/12/2024-12-24-2024-in-post-transformers-architectures-state-space-models-rwkv-ls-liv.md"
draft: false
---

## Thesis

Dan Fu (Together AI) and Eugene Cheah (RWKV, Featherless AI) argue that attention's quadratic cost in context length is not a law of intelligence, and that recurrent and state-space alternatives can deliver similar quality with much less compute. Fu traces the research ideas that closed the quality gap since 2020; Cheah shows how RWKV can be retrofitted onto existing transformer weights cheaply.

## Key points

- **Four ideas behind the progress.** Fu lists principled sequence modelling borrowed from signal processing (S4 and its FFT-based convolution), hardware-efficient kernels from day one, selection mechanisms such as gating in H3 and data-dependent matrices in Mamba, and new test-time paradigms such as Just Read Twice.
- **Kernels are table stakes.** Fu says a model that is theoretically efficient but twice as slow in practice is dead on arrival; his ThunderKittens CUDA library builds everything around small matrix-multiply primitives.
- **Results in 2024.** Fu cites Jamba as a leading non-transformer hybrid, MIT's SANA diffusion model using linear attention, and a gated SSM DNA model from Stanford and the Arc Institute that made the cover of Science.
- **Converting transformers.** Cheah describes QRWKV6, a Qwen 32B Instruct model with its attention replaced by RWKV linear layers; after a few hours on two nodes it came close to the original. He argues a converted 70B model could serve most enterprise workloads, which he says run under 32K context.
- **Hybrids beat both parents.** Cheah says neither his team nor the Jamba and Black Mamba teams understand why SSM-transformer hybrids outperform either baseline.
- **Long context and memory.** Fu half-jokingly says few people use 2-million-token prompts; Cheah argues fixed-size states forget like humans do, may still pair with search-style retrieval, and stay stable beyond training length.

## Quotes

> "So our entire organization has less compute than a single researcher in Google." — Eugene Cheah

> "Clearly, intelligence doesn't need to be quadratic." — Dan Fu
