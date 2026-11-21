---
title: 'Is finetuning GPT4o worth it? — with Alistair Pullen, Cosine (Genie)'
description: >-
  Cosine's Genie shows that fine-tuning GPT-4o on billions of tokens of data
  showing how human engineers work can beat prompted frontier models on
  SWE-bench.
pubDate: '2024-08-22'
show: latent-space
url: >-
  https://lspace.beehiiv.com/podcast/s/latent_space_the_ai_engineer_podcast/is_finetuning_gpt4o_worth_it_with_alistair_pullen_cosine_genie
durationMin: 65
hosts:
  - Alessio Fanelli
  - swyx
guests:
  - Alistair Pullen
tags:
  - fine-tuning
  - coding-agents
  - synthetic-data
  - swe-bench
  - code-retrieval
draft: false
---
## Thesis

Alistair Pullen, CEO and co-founder of Cosine, argues that a coding agent should be trained on how human engineers actually reason through a task, not just on the final code. By fine-tuning GPT-4o with OpenAI on billions of tokens of largely synthetic data, Cosine's Genie reached state-of-the-art SWE-bench scores. Pullen treats the base model as interchangeable and the data pipeline as the product.

## Key points

- **Software engineering, not code writing.** Pullen says a PR is a lossy artifact: pre-trained models see the final diffs but not why or how they were made. Cosine's pipeline tries to reconstruct that reasoning "forensically". Early uncleaned data mostly taught the model to update READMEs and argue in PR reviews.
- **Retrieval learned through self-play.** Plain embedding search over code worked poorly. Cosine first generated hypothetical code snippets to embed. Genie now learns to navigate like a developer, using the file system, keyword search and language-server go-to-definition. Retrieval accuracy is about 66%, and adding LSP navigation lifted it from 54% into the 60s.
- **Context length limits.** Pullen's log-prob analysis showed the model is most confident when writing code (as diffs). Success degrades roughly linearly with context length, and beyond about 60K tokens a SWE-bench task is more likely to fail than succeed.
- **Learning from mistakes.** To teach iteration, Cosine injected synthetic runtime errors into ASTs and trained successive models on correcting their own failed attempts. Dataset size was limited mainly by money.
- **Larger fine-tunes.** OpenAI gave Cosine larger LoRA adapters than are publicly available, which required changes such as a different learning-rate schedule. Pullen describes the collaboration as pushing the limits of fine-tuning.
- **Benchmarks.** Genie scored 30% on full SWE-bench but is not on the leaderboard because Cosine won't publish its trajectories, which Pullen says could be used to distill the model. It scored 43.8% (219 of 500) on SWE-bench Verified.

## Quotes

> "The certainty of code writing is so much more certain than every other aspect of Genie's loop." — Alistair Pullen

> "no matter how small you are or how much resource you have, just, like, try to do the hard thing 'cause it, it, I think it has the biggest payoff." — Alistair Pullen
