---
title: 'AI-Powered Biological Software with Jakob Uszkoreit, CEO of Inceptive'
description: >-
  Transformer co-author Jakob Uszkoreit argues that deep learning at scale lets
  Inceptive design RNA medicines as compiled 'biological software' without first
  needing a full theory of biology.
pubDate: '2023-08-24'
show: no-priors
episode: 29
url: 'https://www.youtube.com/watch?v=xVFNfBaYAwQ'
youtube: 'https://www.youtube.com/watch?v=xVFNfBaYAwQ'
durationMin: 35
hosts:
  - Sarah Guo
  - Elad Gil
guests:
  - Jakob Uszkoreit
tags:
  - transformers
  - ai-hardware
  - compute-efficiency
  - biotech
  - drug-discovery
draft: false
---
## Thesis

Jakob Uszkoreit, co-author of "Attention Is All You Need" and now CEO of Inceptive, argues that deep learning progress comes from architectures that fit the available hardware, and that today's models still allocate compute crudely. He applies the same approach to biology: rather than waiting for a complete theory of how life works, Inceptive treats biology as a black box, learning from large-scale experiments to generate RNA molecules that behave like programs.

## Key points

- **Origins of attention.** Uszkoreit says the Transformer worked because it fit accelerators that do many simple computations in parallel. Language is roughly hierarchical, so repeated all-pairs attention approximates evaluating parse trees.
- **Hardware drives architecture.** He doubts GPUs sit at the sweet spot for large-scale deep learning on trade-offs like memory bandwidth and latency, and points to the all-MLP Mixer vision model as evidence that other designs can compete. He expects architectures to get simpler, and credits part of the Transformer's success to community "optimism and hope".
- **Compute allocation.** His biggest open problem: compute scales with prompt and response length, not problem difficulty, so GPT-4 spends heavy compute on a long-winded "two plus two". He calls test-time search an effective but clunky hack and says adaptive methods like the Universal Transformer don't yet work well enough.
- **Biological software.** Uszkoreit describes mRNA as bytecode and the goal as compiling high-level programs into RNA designs. With around 10 to the 630th possible variants for one antigen, he argues screening cannot work and generation is needed.
- **Market and manufacturing.** He says hundreds of RNA programs are under way, that RNA could become the second or third biggest modality by revenue this decade, and that six to eight billion doses will be manufacturable within two years, unlike many protein biologics.
- **Wet meets dry.** Uszkoreit describes an "anti-disciplinary" team running many small loops between models and lab assays. The hosts compare the black-box approach to drugs such as aspirin and metformin, which were used before their mechanisms were understood.

## Quotes

> "if you look at mRNA vaccines our programming language is just a print statement right just print this protein" — Jakob Uszkoreit

> "we actually think that our work happens on the beach because that's where the wet and the dry meet in harmony" — Jakob Uszkoreit
