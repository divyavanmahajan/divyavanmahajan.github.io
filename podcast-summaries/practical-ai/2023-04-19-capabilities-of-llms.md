---
title: "Capabilities of LLMs 🤯"
date: 2023-04-19
show: practical-ai
episode: 219
url: "https://share.transistor.fm/s/73986a0f"
duration_min: 38
hosts: ["Chris Benson", "Daniel Whitenack"]
guests: ["Rajiv Shah"]
description: "Rajiv Shah of Hugging Face argues that in-context learning and prompt chaining put many ML tasks within reach of non-specialists, while enterprises will move toward open models they can control."
tags: ["large-language-models", "in-context-learning", "open-source-ai", "fine-tuning", "enterprise-ai"]
source_transcript: "practical-ai/episodes/2023/04/2023-04-19-capabilities-of-llms.md"
draft: false
---

## Thesis

Rajiv Shah, a machine learning engineer at Hugging Face, argues that in-context learning, which emerges only in large models, makes possible natural-language workflows that used to need a separate trained model for each task. He expects enterprises to move from black-box APIs to open, fine-tunable models they control. He also tells practitioners that they do not need to follow every weekly release.

## Key points

- **Learning by video.** Shah says he started making TikTok data science videos after watching his college-age son learn to code from YouTube. He finds that skit formats with several voices are a good way to teach nuance.
- **In-context learning.** Shah explains that instead of labelling hundreds of movie reviews, you can give a large model three examples and it classifies new ones without retraining. With LangChain, prompts that clean, summarise and route a support transcript can replace several separate models.
- **Agents.** Shah points to HuggingGPT, which picks and runs Hugging Face models, and Auto-GPT, which iterates on open-ended goals. He says a year earlier he would have put this three or four years away.
- **The model landscape.** Shah sorts models by access (OpenAI's closed API versus Databricks' openly licensed Dolly), size (Bloom at roughly 170 billion parameters versus smaller LLaMA models), and training data, such as how much code a model saw.
- **Tooling and control.** Shah highlights Hugging Face's RLHF work and its PEFT library for low-rank fine-tuning, along with Microsoft's DeepSpeed Chat. He argues that enterprises want full control over models and data.
- **Hallucination and adoption.** Shah warns that the models lie, recommends grounding them with information retrieval, and notes customer worries about copyrighted training data. He favours adopting the tools in education and at work, and has shown his sales team Claude in Slack.

## Quotes

> "I knew the infatuation with OpenAI's APIs were only going to last so long because I've tried to sell data scientists a black box solution." — Rajiv Shah

> "I always suggest to people to pair this with traditional information retrieval techniques." — Rajiv Shah
