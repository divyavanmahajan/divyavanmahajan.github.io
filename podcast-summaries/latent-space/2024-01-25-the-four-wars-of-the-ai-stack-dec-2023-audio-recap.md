---
title: "The Four Wars of the AI Stack (Dec 2023 Audio Recap)"
date: 2024-01-25
show: latent-space
url: "https://lspace.beehiiv.com/podcast/s/latent_space_the_ai_engineer_podcast/the_four_wars_of_the_ai_stack_dec_2023_audio_recap"
duration_min: 68
hosts: ["Alessio Fanelli", "swyx"]
guests: []
description: "swyx and Alessio Fanelli frame the 2023 AI stack as four contests (data, GPU inference, multimodality, RAG/ops tooling) and set out what each means for 2024."
tags: ["ai-engineering", "inference-pricing", "synthetic-data", "vector-databases", "multimodality"]
source_transcript: "latent-space/episodes/2024/01/2024-01-25-the-four-wars-of-the-ai-stack-dec-2023-audio-recap.md"
draft: false
---

## Thesis

swyx and Alessio Fanelli walk through swyx's December 2023 recap, which sorts the year's AI news into four "wars": the data war, GPU rich versus poor, multimodality, and RAG/ops tooling. swyx argues that these are the battlegrounds where money, power and talent concentrate, while topics such as agents, open source and code models drew less heat than expected. Both hosts expect data engineering, synthetic data and inference economics to dominate 2024.

## Key points

- **Data war.** swyx expects the New York Times lawsuit against OpenAI to reach the Supreme Court and decide what fair use means for AI. He criticizes Reddit, Stack Overflow and Twitter for closing their APIs to train their own models, a result he calls locally optimal but globally suboptimal. Fanelli adds that post-ChatGPT web data ("low background tokens") will push more work onto data engineering.
- **Synthetic data.** swyx says synthetic data was the top topic among researchers at NeurIPS. He cites Louis Castricato's plan for pre-train scale synthetic datasets and a DeepMind paper on verifiable math and code data.
- **Mixtral price war.** After Mixtral's release, prices fell sharply. Using Dylan Patel's analysis, swyx estimates break-even at about 50-75 cents per million tokens, so Anyscale, OctoAI, Abacus AI (30 cents) and DeepInfra (27 cents) are pricing below cost. He also faults Anyscale's self-serving benchmark.
- **Multimodality.** Midjourney reportedly has at least $200 million in ARR, is bootstrapped, and has 15-30 staff. ElevenLabs is rumoured to be a unicorn. Fanelli questions how voice API companies can build a repeatable go-to-market.
- **RAG and ops.** swyx argues that databases, frameworks and ops tools are drifting into each other's territory, as LangChain did with LangSmith. He notes that Anthropic and OpenAI use Qdrant internally. Fanelli compares the dynamic to Vercel building Next.js on top of its CDN.
- **Coding agents.** swyx separates inner-loop tools (inside the IDE) from outer-loop agents (from PR onward) and says that only inner-loop tools are working today.

## Quotes

> "Anyway, anyone charging under 50, definitely losing money." — swyx

> "Outer loop is a mirage going to forever be five years away, and the people working on inner loop companies have, have been the, the right bet." — swyx
