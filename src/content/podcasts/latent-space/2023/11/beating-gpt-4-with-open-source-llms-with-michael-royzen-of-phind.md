---
title: Beating GPT-4 with Open Source LLMs — with Michael Royzen of Phind
description: >-
  Michael Royzen argues that search-grounded, fine-tuned open source models can
  match GPT-4 for programmers, and traces how Phind got from a college RAG demo
  to its own Code Llama model.
pubDate: '2023-11-03'
show: latent-space
url: >-
  https://lspace.beehiiv.com/podcast/s/latent_space_the_ai_engineer_podcast/beating_gpt-4_with_open_source_llms_with_michael_royzen_of_phind
durationMin: 67
hosts:
  - Alessio Fanelli
  - swyx
guests:
  - Michael Royzen
tags:
  - retrieval-augmented-generation
  - code-generation
  - open-source-llms
  - fine-tuning
  - llm-evaluation
draft: false
---
## Thesis

Michael Royzen argues that models do not know what they do not know, so useful answers require search plus a strong reasoning engine. He expects the gap between proprietary and open source models to shrink enough in 2024 that a vertical company with its own data, like Phind, can fine-tune an open model that beats the proprietary default for its users.

## Key points

- **From college demo to search engine.** After the SmartLens vision app in 2017, Royzen was inspired by a Hugging Face long-form question answering demo in summer 2020. He filtered Common Crawl to the top 10,000 sites (about 350 million pages) in Elasticsearch and fine-tuned T0 3B on ELI5, launching as Hello on Hacker News in January 2022.
- **Pivot to programmers.** In June 2022, around joining YC, the team focused on developers, where models must reason and debug rather than summarise. They moved to Bing as a data source and later to OpenAI models; GPT-4 offered free without login drove a 1,500-point Hacker News post in April.
- **The Phind model.** Built on Code Llama 34B and trained on many more billions of tokens, it tops the BigCode leaderboard with a ten-point gap on JavaScript. Royzen says users mostly cannot tell it apart from GPT-4, though some reasoning problems remain.
- **Evals.** Royzen considers HumanEval contaminated, noting GPT-4 can predict exact docstrings. Phind instead uses GPT-4 at temperature zero as a grader, plus user reactions, and is exploring reinforcement learning for correctness.
- **Product stance.** Unlike Aman of Cursor, Royzen does not think you must own the IDE; Phind ships a web app and a VS Code extension, and pinned messages help manage 60-to-100-message pair-programmer threads.
- **YC story.** Paul Graham invested, suggested the Phind name, and introduced Ron Conway, whose email to Jensen led NVIDIA to add streaming for T5 models to FasterTransformer.

## Quotes

> "So models don't know what they don't know. You always have to do a search." — Michael Royzen

> "releasing those models is that human eval doesn't really matter." — Michael Royzen
