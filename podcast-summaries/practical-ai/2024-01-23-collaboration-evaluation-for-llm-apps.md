---
title: "Collaboration & evaluation for LLM apps"
date: 2024-01-23
show: practical-ai
episode: 253
url: "https://share.transistor.fm/s/5727b584"
duration_min: 46
hosts: ["Daniel Whitenack"]
guests: ["Raza Habib"]
description: "Prompts let domain experts build LLM apps directly, so teams need shared tooling for prompt versioning and a three-stage evaluation discipline: interactive testing, regression tests and production monitoring."
tags: ["prompt-engineering", "llm-evaluation", "fine-tuning", "llmops", "collaboration"]
source_transcript: "practical-ai/episodes/2024/01/2024-01-23-collaboration-evaluation-for-llm-apps.md"
draft: false
---

## Thesis

Raza Habib, CEO and co-founder of Humanloop, argues that because LLM apps are partly programmed in natural language, product managers and domain experts can now implement them directly alongside engineers. That shift creates new problems: prompt versioning, subjective evaluation and regressions when prompts or models change. Habib's answer is shared tooling, which he compares to Figma, with evaluation built in.

## Key points

- **The typical journey.** Habib describes teams prototyping in a provider playground, reaching an "80% good enough" version quickly, then hitting trouble with 20 prompt versions stored as strings in code. One listed company traced unexplained behaviour to whitespace differences from pasting prompt configs through Microsoft Teams.
- **Who does what.** In Habib's question-answering example, domain experts define what good looks like and iterate on prompts in the playground. Engineers build retrieval, orchestrate model calls, add logging and usually set up evaluation the first time.
- **Evaluators.** Humanloop supports code metrics (precision, recall, ROUGE, BLEU), model-as-judge scoring such as checking whether an answer is supported by retrieved context, and human or end-user feedback, both explicit thumbs up/down and implicit signals like whether a generated email was sent.
- **Three stages of evaluation.** Habib separates interactive and adversarial testing (one customer red-teams an app for children), regression tests against gold-standard sets, and production monitoring with alerts. He says a model upgrade should be treated like any other change.
- **Prompting before fine-tuning.** Habib advises pushing prompt engineering first; RAG has handled private knowledge better than fine-tuning. He sees fine-tuning as useful mainly for cost, latency, tone or output format such as valid JSON, and compares it to compilation.
- **Open models and agents.** He says the gap to GPT-4 is closing with Mistral and Llama 2, but self-hosting mostly makes sense for privacy, edge use or high volume. He cites Ironclad, which built the open-source tool Rivet, as a rare agent success, and plans a Humanloop that proactively suggests cheaper prompts.

## Quotes

> "we've had some serious companies you would have heard of who are sending their model configs to each other via Microsoft Teams." — Raza Habib

> "people should first push the limits of prompt engineering. Because it's very fast, it's easy to do, and it can have very high impact" — Raza Habib
