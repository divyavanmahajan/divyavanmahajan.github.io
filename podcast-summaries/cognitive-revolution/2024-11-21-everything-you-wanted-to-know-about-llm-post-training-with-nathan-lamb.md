---
title: "Everything You Wanted to Know About LLM Post-Training, with Nathan Lambert of Allen Institute for AI"
date: 2024-11-21
show: cognitive-revolution
url: "https://www.cognitiverevolution.ai/everything-you-wanted-to-know-about-llm-post-training-with-nathan-lambert-of-allen-institute-for-ai/"
youtube: "https://www.youtube.com/watch?v=LVXtFnEbNU0"
duration_min: 107
hosts: ["Nathan Labenz"]
guests: ["Nathan Lambert"]
description: "Tulu 3 shows a small open team can match Llama 3.1's post-training, and that data curation and verifiable-reward RL matter far more than the DPO-versus-PPO debate."
tags: ["post-training", "rlhf", "open-source-ai", "synthetic-data", "reinforcement-learning"]
source_transcript: "cognitive-revolution/episodes/2024/11/2024-11-21-everything-you-wanted-to-know-about-llm-post-training-with-nathan-lamb.md"
draft: false
---

## Thesis

Nathan Lambert of the Allen Institute for AI (AI2) walks Nathan Labenz through Tulu 3, an open post-training recipe that set out to beat Meta's Llama 3.1 Instruct starting from the same Llama base model. His core claim is that data curation and evaluation feedback loops, not the choice of preference algorithm, drive most of the gains, and that reinforcement learning with verifiable rewards opens a new frontier for open and task-specific models.

## Key points

- **Open recipe, small team.** Meta shares only an outline of its post-training and no data; Lambert says AI2 built 3 to 6 new datasets and will release everything. Llama 3 had hundreds of people on it, Tulu 3 had 10 to 20, and the team trained roughly 1,000 8B models along the way.
- **Where compute and value go.** The SFT mix is about 1,000,000 prompts, over 30% of it math, and takes about a day on 32 H100s; Labenz estimates around $1,500. Lambert says SFT delivers about 90% of the performance, with DPO and RL adding the last 10%.
- **Data beats algorithms.** Moving from DPO to PPO (Tulu 2 to 2.5) gained about 1%, while better data curation (Tulu 2 to 3) gained about 14%. PPO still has not beaten their DPO setup in Tulu 3.
- **Evaluation details.** Datasets with more than a 2% exact prompt match against test sets are dropped as contaminated. Answer-format choices matter: Qwen's 72B model scores about 6 on math under Llama 3.1's setting and 74 under AI2's.
- **LLM judges.** Lambert estimates over $50K in OpenAI credits for LLM-as-a-judge work, versus millions with humans, though he remains unsure what human preference data adds.
- **Verifiable rewards.** Rewarding correct math answers produced o1-like "wait, let me check" behaviour when the model was trained far past the practical point. Lambert expects open groups to reproduce o1-style reasoning, given time and new infrastructure.

## Quotes

> "It's probably not worth the effort to spend all your time on preference tuning when you could just be making better data and better pipelines, which is what Tulu 3 is about" — Nathan Lambert

> "I would guess it's over $50K we spent on LLM as a judge credits for this project, which if you're doing that with humans, it would be millions." — Nathan Lambert
