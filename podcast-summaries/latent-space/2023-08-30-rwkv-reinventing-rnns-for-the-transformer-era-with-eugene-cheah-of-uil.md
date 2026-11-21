---
title: "RWKV: Reinventing RNNs for the Transformer Era — with Eugene Cheah of UIlicious"
date: 2023-08-30
show: latent-space
url: "https://lspace.beehiiv.com/podcast/s/latent_space_the_ai_engineer_podcast/rwkv_reinventing_rnns_for_the_transformer_era_with_eugene_cheah_of_uilicious"
duration_min: 72
hosts: ["Alessio Fanelli", "swyx"]
guests: ["Eugene Cheah"]
description: "Eugene Cheah argues RWKV, an attention-free RNN that trains in parallel like a transformer, can match transformer quality at linear rather than quadratic cost."
tags: ["rwkv", "model-architecture", "recurrent-neural-networks", "long-context", "multilingual-llms"]
source_transcript: "latent-space/episodes/2023/08/2023-08-30-rwkv-reinventing-rnns-for-the-transformer-era-with-eugene-cheah-of-uil.md"
draft: false
---

## Thesis

In a conversation recorded in Singapore, swyx talks with Eugene Cheah, CTO of UIlicious and a member of the RWKV community. Cheah argues that the quadratic cost of attention makes very long contexts impractical, and that RWKV, a recurrent network that can be trained in parallel like a transformer, offers similar quality at linear cost. He puts its low profile down to weak marketing, a late paper and training on smaller datasets, not to the architecture.

## Key points

- **Why he looked beyond transformers.** Cheah's UI testing AI failed on Amazon: stripped e-commerce HTML can run to megabytes, possibly over a million tokens, which is far too much for quadratic attention.
- **How RWKV works.** It builds on Apple's attention-free transformer (AFT) paper. Time mix acts like LSTM-style long-term memory, while channel mix holds short-term "perfect" memory. Because state passes between layer blocks, training cascades and saturates the GPU without waiting token by token.
- **Origins.** Bo Peng (Blink) started the project at the EleutherAI forum. EleutherAI and Stability donated A100s to train 7B and 14B models, which Cheah says match GPT-NeoX trained on the same data.
- **Multilingual by design.** The community added non-English data that eval-focused labs drop. The World model mixes 70% English, 15% multilingual and 15% code, and uses a simple trie-based tokenizer that does not split on spaces. Native speakers test each language.
- **Known weakness.** Cheah says RWKV is trained for about 8K-16K context and degrades beyond what it was trained on. The community is working on longer memory so it can reach 100K tokens.
- **Advice to engineers.** He urges AI engineers to experiment with prompts and providers first, recommends Andrej Karpathy's Zero to Hero videos, and notes that software engineers contribute fixes researchers miss, such as memory mapping for llama models.

## Quotes

> "the long-term goal for us, at least internally, is that we wanted an AI model for everyone, and everyone does not mean USA. It means the world." — Eugene Cheah

> "We just suck at marketing." — Eugene Cheah
