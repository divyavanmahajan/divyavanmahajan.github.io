---
title: "RLHF 201 - with Nathan Lambert of AI2 and Interconnects"
date: 2024-01-11
show: latent-space
url: "https://lspace.beehiiv.com/podcast/s/latent_space_the_ai_engineer_podcast/rlhf_201_-_with_nathan_lambert_of_ai2_and_interconnects"
duration_min: 86
hosts: ["Alessio Fanelli", "swyx"]
guests: ["Nathan Lambert"]
description: "Nathan Lambert argues RLHF is mostly about preference data and infrastructure, not RL, and explains why DPO is spreading while PPO-style methods may still have a higher ceiling."
tags: ["rlhf", "preference-data", "dpo", "alignment", "llm-evaluation"]
source_transcript: "latent-space/episodes/2024/01/2024-01-11-rlhf-201-with-nathan-lambert-of-ai2-and-interconnects.md"
draft: false
---

## Thesis

Nathan Lambert, then newly at the Allen Institute for AI, walks Alessio Fanelli and swyx through the history, maths and practice of reinforcement learning from human feedback. His core claim is that the "RL" part is small: what matters is preference data, reward models and infrastructure, and RLHF is better at changing how a model feels than at raising benchmark scores. He expects DPO to dominate open releases in the near term while the deeper questions about it stay unanswered.

## Key points

- **Roots outside NLP.** Lambert traces RLHF from the 2008 TAMER paper (Knox and Stone) and Christiano et al.'s 2017 preference work to OpenAI's 2020 summarisation paper, and notes it rests on assumptions like the Bradley-Terry model and the idea that human preferences can be aggregated at all.
- **Instruction tuning first.** He tells most startups that instruction tuning covers most needs cheaply, and that serious RLHF used to need a team of about five people.
- **Preference data costs.** Lambert revises his Llama 2 estimate: about $6-8 million on preference data (1.5 million data points, perhaps 400,000 prompts), comparable to compute. Reward models agree with held-out labels only 65-75% of the time; humans agree about 70%, GPT-4 about 80%.
- **Synthetic data wins on price.** He calls GPT-4 labelling very cheap compared with humans, while warning companies about contamination and terms of service, citing ByteDance losing OpenAI access.
- **Constitutional AI and DPO.** Lambert says Anthropic's constitutional AI samples from about 30 principles to generate AI preferences, which is looser than many assume. AI2's Tulu 2 70B was a first-run copy of the Zephyr DPO recipe in JAX on TPUs, with no ablations.
- **Evaluation.** He calls Chatbot Arena the best available signal, uses AlpacaEval and MT-Bench as table stakes, and urges researchers to actually talk to models rather than trust leaderboard numbers.

## Quotes

> "I think DPO is closer to RLHF than RLHF is to RL." — Nathan Lambert

> "RLHF is not an easy tool to make numbers go up with. It's a, it's a powerful tool to change your language model." — Nathan Lambert
