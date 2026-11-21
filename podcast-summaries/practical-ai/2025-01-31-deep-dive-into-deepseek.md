---
title: "Deep-dive into DeepSeek"
date: 2025-01-31
show: practical-ai
episode: 302
url: "https://share.transistor.fm/s/ffcbf272"
duration_min: 51
hosts: ["Chris Benson", "Daniel Whitenack"]
guests: []
description: "DeepSeek R1's privacy risks lie in DeepSeek's hosted product, not the open weights, which can run isolated; its arrival makes model optionality a business necessity."
tags: ["deepseek", "open-models", "ai-security", "distillation", "model-optionality"]
source_transcript: "practical-ai/episodes/2025/01/2025-01-31-deep-dive-into-deepseek.md"
draft: false
---

## Thesis

Daniel Whitenack and Chris Benson separate DeepSeek R1 the model from DeepSeek the consumer app. Whitenack argues that the privacy concerns attach to the hosted product and its terms of service. The openly released weights can run in an isolated environment, although they still bring their own biases and weaknesses. His wider point is that businesses should now plan for many interchangeable models.

## Key points

- **The cost narrative.** DeepSeek published a training figure of roughly $5-6 million. Whitenack, citing Philipp Schmid of Hugging Face, says this covers only the final base-model run. It excludes reinforcement learning, smaller runs and data generation, and the team had access to tens of thousands of GPUs.
- **Product versus model.** Whitenack says the app's terms show that user data is kept, used for training and stored on servers in China. The weights, in safetensors format, can run through Hugging Face Transformers on a machine with no network access. Benson says the terms "horrified" him when he signed up.
- **Bias and robustness.** Benson found that the app refused to answer a question about Tiananmen Square in 1989. Whitenack points out that the app first generated an answer and then withdrew it, which suggests a product-level filter rather than the weights. He adds that a study found the model more sensitive to prompt injection than other leading models.
- **How it was built.** R1 is a mixture-of-experts model of roughly 700 billion parameters. Running it at full precision takes about 16 H100 GPUs. An interim model, R1-Zero, generated synthetic chain-of-thought data for supervised fine-tuning. Distilled dense versions based on Llama and Qwen, from 1.5B to 70B parameters, can run on a laptop or a single GPU.
- **What changes.** Whitenack expects organisations to stop locking in to one model family and to focus on secure self-hosting and monitoring. Benson wonders whether investors will now question $100 million funding rounds, and whether enterprises will train their own models. Whitenack replies that data curation remains the real cost.

## Quotes

> "For me, the scarier thing is not the model itself. It's the infrastructure around the model, where it's being housed" — Chris Benson

> "Not secure, quote unquote, in terms of you putting data into it. It is the product built around that model." — Daniel Whitenack
