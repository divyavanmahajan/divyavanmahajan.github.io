---
title: "AI Engineering with Chip Huyen"
date: 2025-02-05
show: pragmatic-engineer
url: "https://newsletter.pragmaticengineer.com/p/ai-engineering-with-chip-huyen"
youtube: "https://www.youtube.com/watch?v=98o_L3jlixw"
duration_min: 75
hosts: ["Gergely Orosz"]
guests: ["Chip Huyen"]
description: "Chip Huyen argues AI engineering starts from the product rather than the model, so simple techniques, careful evaluation and clear problem framing matter more than fine-tuning or new frameworks."
tags: ["ai-engineering", "llm-evaluation", "rag", "fine-tuning", "applied-ml"]
source_transcript: "pragmatic-engineer/episodes/2025/02/2025-02-05-ai-engineering-with-chip-huyen.md"
draft: false
---

## Thesis

Chip Huyen, author of the O'Reilly book AI Engineering, tells Gergely Orosz that foundation models flip the old ML workflow. ML engineers went from data to model to product; AI engineers start with a product demo over an API and only later gather data or host their own models. She argues that solving the actual problem with the simplest workable approach matters more than adopting the newest technique.

## Key points

- **Writing a durable book.** Huyen says she cited over a thousand references and mapped hundreds of GitHub repos. To stay current she asked whether each problem reflected a fundamental limit or a temporary one, and so skipped prompt tricks that newer, more robust models no longer need.
- **A progression of techniques.** She recommends defining good and bad responses first (citing LinkedIn's job-fit tool), then prompting, examples and RAG. She suggests keyword retrieval and BM25 before vector databases, and better data preparation, such as Anthropic's Contextual Retrieval. Fine-tuning is a last resort because of hosting costs and fast-moving base models.
- **Rolling out carefully.** For customer support she describes a Microsoft framework that moves from low- to high-stakes deployment: AI suggests replies to human agents first, and the rollout widens once acceptance rates reach around 90%.
- **Evaluation is hard.** Huyen says the smarter models get, the harder they are to judge, citing Terence Tao's assessment of OpenAI's o1. She combines functional correctness, AI as a judge and comparative evaluation. She also recommends daily human review of about 50 real interactions, since one meeting-summary team found users only wanted their action items.
- **Common mistakes.** She describes a startup pitching GenAI to cut electricity bills by 30% that had never tried simply scheduling usage off-peak. A resume parser was wrong about 50% of the time and nobody knew which step failed. Some agent frameworks ship default prompts with typos.
- **Learning and the future.** She advises combining project-based and structured learning. She argues coding is not software engineering: AI may automate typing code, but not problem solving or the precision software needs.

## Quotes

> "the more we want to not miss out on things, the more things we will miss" — Chip Huyen

> "And remove the roadblock using the simplest solutions, not the fanciest one." — Chip Huyen
