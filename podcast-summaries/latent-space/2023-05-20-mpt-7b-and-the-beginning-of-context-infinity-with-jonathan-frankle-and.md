---
title: "MPT-7B and The Beginning of Context=Infinity — with Jonathan Frankle and Abhinav Venigalla of MosaicML"
date: 2023-05-20
show: latent-space
url: "https://lspace.beehiiv.com/podcast/s/latent_space_the_ai_engineer_podcast/mpt-7b_and_the_beginning_of_context_infinity_with_jonathan_frankle_and_abhinav_venigalla_of_mosaicml"
duration_min: 67
hosts: ["Alessio Fanelli", "swyx"]
guests: ["Jonathan Frankle", "Abhinav Venigalla"]
description: "MosaicML's Jonathan Frankle and Abhinav Venigalla present MPT-7B as proof that companies can cheaply train their own open models, and argue that open research is essential for progress."
tags: ["open-source-models", "llm-training", "long-context", "training-efficiency", "ml-infrastructure"]
source_transcript: "latent-space/episodes/2023/05/2023-05-20-mpt-7b-and-the-beginning-of-context-infinity-with-jonathan-frankle-and.md"
draft: false
---

## Thesis

Jonathan Frankle and Abhinav Venigalla of MosaicML describe MPT-7B, an open, commercially licensed model, as a demo of their platform: if Mosaic can train a strong model hands-free, customers can train their own. Frankle argues that cheap training is what makes real science on data and architecture possible, and that a shrinking open research community will slow progress for everyone.

## Key points

- **Cost and recipe.** Frankle says the base model was trained in 9.5 days for about $200K with no human intervention. Venigalla explains it saw a trillion tokens, roughly seven times the Chinchilla-optimal 140 billion, to make a small model good for inference.
- **Data is poorly understood.** Frankle says the team "know nothing" about data mixes: C4, filtered crudely in the T5 paper, scores oddly well, and he has seen no evidence that adding code improves reasoning. He also distrusts benchmarks and ran "vibe checks" on fixed prompts during training.
- **Long context.** Venigalla credits FlashAttention (about 2x training speed-up) and ALiBi, which improved stability, for the StoryWriter model's 65K context; Frankle says they tested 84K and that context is limited only by memory.
- **Hands-free infrastructure.** Venigalla says GPUs fail about once every 1,000 A100 days, so roughly every two days on a 512-GPU cluster; Mosaic automated detection, node cordoning and deterministic resumption so the logbook stayed empty.
- **Licensing and business.** After criticism over the Books3 data set, the StoryWriter licence was briefly changed but stayed Apache 2; Frankle regrets the timing next to the Hollywood writers' strike. He says customers pulled Mosaic into inference, and cites a Google study putting inference at three-fifths of ML energy.
- **Efficiency and openness.** Venigalla expects H100s and FP8 to cut costs sharply; Frankle targets GPT-3 quality for $100K in 2023 and calls Mosaic, with about fifteen researchers, one of the biggest open industry labs left.

## Quotes

> "So who won, open source or closed source? Yes." — Jonathan Frankle

> "Embrace the fact that we've built extraordinarily useful tools, um, but we haven't built AGI" — Jonathan Frankle
