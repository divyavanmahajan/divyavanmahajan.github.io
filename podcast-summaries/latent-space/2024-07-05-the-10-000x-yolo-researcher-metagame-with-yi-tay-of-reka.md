---
title: "The 10,000x Yolo Researcher Metagame — with Yi Tay of Reka"
date: 2024-07-05
show: latent-space
url: "https://lspace.beehiiv.com/podcast/s/latent_space_the_ai_engineer_podcast/the_10_000x_yolo_researcher_metagame_with_yi_tay_of_reka"
duration_min: 105
hosts: ["Alessio Fanelli", "swyx"]
guests: ["Yi Tay"]
description: "Yi Tay argues a tiny, experienced team can reach frontier-class models by de-risking fast, surviving unreliable GPU clusters and trusting proven architecture, and that hands-on senior ICs now drive AI."
tags: ["frontier-models", "llm-training", "gpu-infrastructure", "model-architecture", "ai-research-careers"]
source_transcript: "latent-space/episodes/2024/07/2024-07-05-the-10-000x-yolo-researcher-metagame-with-yi-tay-of-reka.md"
draft: false
---

## Thesis

Yi Tay, former PaLM 2 modelling co-lead at Google Brain and now chief scientist of Reka, argues that a very small team with deep prior experience can train competitive models because its real asset is the ability to hill-climb quickly, not any single artifact. He pairs that with frank accounts of broken rented compute, a defence of the well-tested "Noam" transformer recipe, and a closing claim that senior individual contributors who still write code now matter more than managers.

## Key points

- **Small lab, frontier results.** The hosts note Reka has about 20 employees with only five on pre-training, yet Reka Core launched as roughly the fifth-best model. Tay says the team was confident because it could de-risk with small runs and reach targets in few iterations.
- **Compute pain.** Reka waited months with 500 A100s while H100 deliveries slipped; when nodes arrived they were often broken. Tay says one bad node kills an entire training run, and that providers willing to share the cost of node failures would stand out.
- **Architecture.** Tay says the transformer with SwiGLU, GQA, RoPE and RMSNorm is a very hard baseline to beat. He describes encoder-decoders as having "intrinsic sparsity": UL2 at 20B costs roughly what a 10B decoder-only model does.
- **Emergence and evals.** He still believes in emergent abilities, noting the Mirage paper itself conceded roughly 25% of metrics showed genuine emergence. He sees LMSYS as the most credible public signal and says MMLU and GSM8K are saturated.
- **Long context, MoEs, efficiency.** Tay sees long context as the future over RAG for tasks where accuracy matters more than cost, is bullish on MoEs for their FLOP-to-parameter trade-off, and says many efficiency papers ignore real throughput.
- **Career lessons.** From Jason Wei he learned to market work deliberately; he advises unknown researchers to collaborate with a visible co-author. In a Tech in Asia coda he says governments should back hands-on senior ICs rather than policy talk.

## Quotes

> "A good eval set is one that you don't release." — Yi Tay

> "The senior person writes code. Everybody writes code." — Yi Tay
