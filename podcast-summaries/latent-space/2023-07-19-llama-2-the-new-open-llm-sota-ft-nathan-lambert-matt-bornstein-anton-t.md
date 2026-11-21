---
title: "Llama 2: The New Open LLM SOTA (ft. Nathan Lambert, Matt Bornstein, Anton Troynikov, Russell Kaplan, Whole Mars Catalog et al.)"
date: 2023-07-19
show: latent-space
url: "https://lspace.beehiiv.com/podcast/s/latent_space_the_ai_engineer_podcast/llama_2_the_new_open_llm_sota_ft_nathan_lambert_matt_bornstein_anton_troynikov_russell_kaplan_whole_mars_catalog_et_al"
duration_min: 80
hosts: ["Alessio Fanelli", "swyx"]
guests: ["Nathan Lambert", "Matt Bornstein", "Anton Troynikov", "Russell Kaplan", "Whole Mars Catalog"]
description: "Day-one reactions to Llama 2: a commercially usable open model with detailed RLHF methods but little detail on its data, expected to start a wave of fine-tunes and startup adoption."
tags: ["llama-2", "open-models", "rlhf", "fine-tuning", "model-licensing"]
source_transcript: "latent-space/episodes/2023/07/2023-07-19-llama-2-the-new-open-llm-sota-ft-nathan-lambert-matt-bornstein-anton-t.md"
draft: false
---

## Thesis

In a Twitter-space emergency episode, swyx and Alessio Fanelli gather day-one reactions to Meta's Llama 2. The panel agrees that the commercial license matters most, since it gives builders a strong base model they can use and fine-tune legally. Hugging Face's Nathan Lambert and others note that the paper documents RLHF methods in depth but says almost nothing about the training data.

## Key points

- **What shipped.** Alessio lists 7B, 13B and 70B models trained on 2 trillion tokens with 4K context. A 34B model was held back for lack of red-teaming time, and the loss curves suggest the models were not saturated. Simon notes that the weights leaked onto Hugging Face within hours.
- **Preference data.** Lambert highlights Meta's two separate reward models, one for helpfulness and one for safety. He estimates data collection at roughly $20-25 million and says code is weak partly because expert code labels are hard to get.
- **Opaque data and license.** Simon argues that not disclosing the training data hurts users choosing between models, and he calls the clause against training competing LLMs vague. The 700 million monthly-active-user limit applies only as of the release date.
- **Chinchilla.** One panelist points out that the Llama paper itself says compute-optimal scaling ignores inference cost. Lambert credits better data quality for training far past Chinchilla ratios.
- **Startups.** a16z's Matt Bornstein expects startups to route workloads across models: GPT-4 for the hardest tasks, and fine-tuned open models elsewhere so they are not fully dependent on OpenAI.
- **What comes next.** Russell Kaplan describes Scale's open-source LLM Engine and predicts domain-specific fine-tunes, plus agents tuned for a single tool. Anton Troynikov of Chroma wants to test retrieval and study model internals. Whole Mars Catalog asks about on-device use after Qualcomm's Snapdragon announcement.

## Quotes

> "I'm, I'm astonished that Meta went ahead with this release." — Simon

> "There's no preference models out there, and it's astonishing to me" — Nathan Lambert
