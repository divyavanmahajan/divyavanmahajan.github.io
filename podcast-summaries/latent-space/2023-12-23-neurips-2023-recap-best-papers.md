---
title: "NeurIPS 2023 Recap — Best Papers"
date: 2023-12-23
show: latent-space
url: "https://lspace.beehiiv.com/podcast/s/latent_space_the_ai_engineer_podcast/neurips_2023_recap_best_papers"
duration_min: 200
hosts: ["Alessio Fanelli", "swyx"]
guests: ["Best Papers"]
description: "Award-winning and notable NeurIPS 2023 papers keep showing that simpler, cheaper methods beat complex ones, from word2vec and DPO to QLoRA and attention-free state space models."
tags: ["neurips", "ai-research", "fine-tuning", "agents", "state-space-models", "evaluation"]
source_transcript: "latent-space/episodes/2023/12/2023-12-23-neurips-2023-recap-best-papers.md"
draft: false
---

## Thesis

swyx stitches together talks and poster-session interviews from NeurIPS 2023, from the award winners through fine-tuning, multimodality, prompting, agents and state space models. A theme across many talks is that simpler, cheaper methods keep beating complicated ones. swyx adds commentary, including doubt about one award pick.

## Key points

- **Test of Time.** Jeff Dean and Greg Corrado look back at word2vec and argue that fast, weakly synchronized, parallel computation beat tight synchronization. Dean expects asynchronous training to make a comeback.
- **Emergence as a metric artifact.** Rylan Schaeffer reports that over 90% of emergent abilities on BIG-Bench appear under two harsh metrics (exact string match, multiple choice grade) and fade with continuous ones. swyx questions why it won best paper, since it does not deny emergence.
- **DPO and data limits.** The DPO authors show the RLHF objective has a closed-form solution, so a classification loss replaces PPO; they name Zephyr, Tulu and Mixtral Instruct as DPO-trained. A Hugging Face team finds about four epochs of repeated data nearly as good as fresh data, and that up to 50% code does no harm.
- **Cheaper fine-tuning, open multimodal models.** Tim Dettmers says QLoRA cuts fine-tuning a 70B model from 840 GB of GPU memory to 46 GB, two consumer GPUs. DataComp's 1.4-billion-sample filtered dataset beats OpenAI's, and Haotian Liu says LLaVA 1.5 trains in one day on a single node.
- **Reasoning and agents.** Tree of Thoughts lifts GPT-4 on the Game of 24 from 4% with chain of thought to 74%. Toolformer sees tool use emerge at 775 million parameters, Voyager collects three times more novel Minecraft items than prior agents, and Ida Momennejad's CogEval puts GPT-4 at about 40% on planning tasks.
- **State space models.** Chris Ré traces S4 to Mamba and Based. S4 was five perplexity points behind transformers; his group attributes 82% of that gap to associative-recall lookups, and says attention-free models now get lower perplexity at 350 million parameters, though not necessarily at larger scale.

## Quotes

> "if you want to predict changes in model capabilities with increasing scale, you need to consider the interplay between known scaling properties, the amount and quality of evaluation data" — Rylan Schaeffer

> "I don't really know if this paper affected literally anything in the field, so I don't know why it's best paper and not just a regular paper." — swyx
