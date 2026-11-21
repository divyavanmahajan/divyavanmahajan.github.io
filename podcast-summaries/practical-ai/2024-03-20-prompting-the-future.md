---
title: "Prompting the future"
date: 2024-03-20
show: practical-ai
episode: 261
url: "https://share.transistor.fm/s/f7d9e521"
duration_min: 46
hosts: ["Chris Benson", "Daniel Whitenack"]
guests: ["Jared Zoneraich"]
description: "Prompt engineering is the systematic tuning of LLM inputs, and teams need prompt registries, eval datasets and logging to shorten its feedback loop as products mature."
tags: ["prompt-engineering", "llm-evaluation", "llmops", "observability", "generative-ai"]
source_transcript: "practical-ai/episodes/2024/03/2024-03-20-prompting-the-future.md"
draft: false
---

## Thesis

Jared Zoneraich, founder of PromptLayer, defines prompt engineering as tuning everything that goes into an LLM: the prompt, the model choice and parameters such as temperature. He argues that building on a probabilistic black box, with non-engineers as new stakeholders, requires its own workflow for versioning, evaluation and logging rather than a direct copy of traditional software practice. He expects the discipline to last, because even a human-level model still has to be told what you want.

## Key points

- **Treat models as black boxes.** Zoneraich says tricks such as offering a $100 tip will fade, but each model (Mistral, Claude, GPT-4) needs to be addressed differently, so teams should track inputs against outputs instead of reasoning about tokens.
- **Two skill sets.** He describes prompting as clear writing combined with "thinking algorithmically", the scientific method of hypothesis and test, and says ML specialists tend to overcomplicate it.
- **Decouple prompts from deploys.** Prompts typically move from code to a text file to a registry or CMS. Zoneraich calls the early stage "vibe-based prompt engineering" and lists A/B releases, regression tests and backtesting on old responses as the next steps.
- **Eval datasets.** For Chris Benson's production system he recommends building a small ground-truth set of 15 to 100 examples, then adding user thumbs-up/down feedback to close the loop.
- **Logging is table stakes.** Latency and cost per prompt template and version are easy metrics; correctness is the hard one. He mentions Grit migrating PromptLayer's code base to TypeScript, where latency did not matter.
- **Market shift.** After launching in January 2023, PromptLayer's users moved from indie hackers to AI-first startups and, from autumn 2023, to revenue-generating companies.

## Quotes

> "our biggest goal with PromptLayer, our MO, is to shorten the prompt engineering feedback loop" — Jared Zoneraich

> "You still have to tell a human what you want. You still have to tell the intern what task you want him to do." — Jared Zoneraich
