---
title: "When Will We Train Once and Learn Forever? Insights from Dev Rishi, CEO and co-founder @Predibase "
date: 2025-05-30
show: turing-post
url: "https://www.turingpost.com/podcast/s/turing_post/when_will_we_train_once_and_learn_forever_insights_from_dev_rishi_ceo_and_co-founder_predibase"
duration_min: 28
hosts: ["Ksenia Se"]
guests: ["Devvret Rishi"]
description: "Predibase CEO Devvret Rishi argues that enterprise AI is moving toward specialized open models that keep improving in production, with reinforcement fine-tuning and inference in one feedback loop."
tags: ["fine-tuning", "reinforcement-learning", "inference", "open-source-models", "enterprise-ai"]
source_transcript: "turing-post/episodes/2025/05/2025-05-30-when-will-we-train-once-and-learn-forever-insights-from-dev-rishi-ceo.md"
draft: false
---

## Thesis

Devvret (Dev) Rishi, CEO and co-founder of Predibase, tells Ksenia Se that "train once, learn forever" will mean replacing static models with pipelines that keep improving a model while it runs in production. In his view reinforcement fine-tuning (RFT) is the technique that makes this possible. He argues that most enterprise value will come from narrow, specialized models rather than general-purpose ones.

## Key points

- **How RFT works.** Rishi says Predibase was the first end-to-end platform to offer reinforcement fine-tuning. RFT replaces large labelled datasets with about a dozen examples plus reward functions, which are rubrics such as points for correct formatting, compiling code and passing unit tests. Today it is a one-off training run, and he expects it to become a continuous online loop.
- **Early feedback loops.** Healthcare customers building patient assistants combine LLM-as-judge scoring with clinician labels and feed both into RFT. Predibase has launched automatic collection of production prompts and responses, and is researching RFT on user feedback data.
- **Agents are brittle.** Rishi defines an agentic workflow as multi-turn, multi-call and tool-using. Drawing on his time as a Google Assistant product manager, he warns that errors compound across chained calls, so demos break once users leave the "golden path".
- **The pivot to narrow AI.** He says OpenAI "democratized deep learning" in late 2022, so Predibase bet in early 2023 on specialized, customized LLMs. He gives Checkr's background-check extraction as an example and expects a mix of open, closed and differently sized models rather than one model for everything.
- **Inference gets hard at scale.** Prototypes are easy with open-source servers like Predibase's LoRAX. Production needs 99.9% or higher SLAs, failover, blue-green deployments, multi-region replication and cost tuning, such as Turbo LoRA, which he says can double throughput. He expects base-model inference to become a commodity, while "intelligent inference" linked to post-training does not.
- **Evaluation and open source.** He sees evaluation as the main gap. Companies use holdout data, LLM judges or "vibes" from product feedback. He says models such as DeepSeek R1, Qwen 3 and Llama 4 matched commercial models about six months earlier than he expected.

## Quotes

> "So the goal with reinforcement fine-tuning is if you can measure it, you can improve it." — Devvret Rishi

> "rather than artificial general intelligence, it's like practical, specialized intelligence." — Devvret Rishi
