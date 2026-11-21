---
title: "97% Cheaper, Faster, Better, Correct AI — with Varun Mohan of Codeium"
date: 2023-03-02
show: latent-space
url: "https://lspace.beehiiv.com/podcast/s/latent_space_the_ai_engineer_podcast/97_cheaper_faster_better_correct_ai_with_varun_mohan_of_codeium"
duration_min: 51
hosts: ["Alessio Fanelli", "swyx"]
guests: ["Varun Mohan"]
description: "Varun Mohan argues that owning efficient GPU inference infrastructure let Codeium ship a free Copilot rival, and that LLM products live or die on latency, quality and correctability."
tags: ["code-generation", "llm-inference", "gpu-utilization", "scaling-laws", "developer-tools"]
source_transcript: "latent-space/episodes/2023/03/2023-03-02-97-cheaper-faster-better-correct-ai-with-varun-mohan-of-codeium.md"
draft: false
---

## Thesis

Varun Mohan, CEO of Exafunction and its code-completion product Codeium, argues that most teams badly underuse their GPUs, and that Exafunction's serving infrastructure is what let Codeium train its own model and offer a GitHub Copilot alternative for free. For builders, he frames LLM products around three properties: latency, quality and correctability.

## Key points

- **Inference efficiency as the moat.** Mohan explains that GPUs, unlike CPUs, usually host one container and sit idle; Exafunction virtualises them and adds compiler tricks such as operator fusion. The hosts cite a customer that moved from 30 clients' worth of GPUs to one and cut costs by 97%.
- **Free by design.** Copilot costs $10 a month; Mohan says Codeium only went free once the team realised its efficiency made that affordable, and sees code completion as "day one" of a broader product line. He reports over 10,000 users, thousands of daily actives and 4-5% daily growth, all word of mouth.
- **Correctability over big demos.** Mohan advises founders to bootstrap on an existing API unless they need to fine-tune on large datasets. Multi-file PR generation is hard to correct, he says, and eroding user trust is easy; Codeium avoids long completions when a developer is in "acceleration mode" rather than "exploration mode".
- **Chinchilla is not the whole story.** Mohan says compute-optimal training ignores serving: code models like CodeGen are deliberately "over-trained" so they stay small enough for low latency and available hardware such as an 80 GB A100.
- **Context and embeddings.** He points to DeepMind's Retro, which retrieves from an embedding database ten times larger than the training set, and says current vector database pricing is prohibitive at that scale, so Codeium would build in-house.
- **Evals and A/B tests.** Mohan warns that HumanEval scores are inflated by training-data contamination; Codeium built its own multi-language evals and ramps models to users at 1%, 10% and 50%, judging them by accepted completions.

## Quotes

> "It's very easy to erode user trust versus enterprise trust." — Varun Mohan

> "small wins at the margins are massive wins in terms of IQ." — Varun Mohan
