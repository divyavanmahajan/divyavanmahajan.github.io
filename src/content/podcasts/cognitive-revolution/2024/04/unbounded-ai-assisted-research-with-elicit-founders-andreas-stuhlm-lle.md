---
title: >-
  Unbounded AI-Assisted Research with Elicit Founders Andreas Stuhlmüller and
  Jungwon Byun
description: >-
  Elicit's founders argue that reliable AI research tools come from task
  decomposition, easy-to-supervise subtasks and transparent architectures that
  turn more compute into better answers.
pubDate: '2024-04-03'
show: cognitive-revolution
url: >-
  https://www.cognitiverevolution.ai/unbounded-ai-assisted-research-with-elicit-founders-andreas-stuhlmuller-and-jungwon-byun/
youtube: 'https://www.youtube.com/watch?v=sv1E5LX1JvY'
durationMin: 84
hosts:
  - Nathan Labenz
  - Erik Torenberg
guests:
  - Andreas Stuhlmuller
  - Jungwon Byun
tags:
  - research-tools
  - task-decomposition
  - evaluation
  - hallucinations
  - chain-of-thought
draft: false
---
## Thesis

Andreas Stuhlmuller and Jungwon Byun argue that language models become trustworthy for high-stakes research when big questions are broken into small, checkable subtasks. With Elicit's new notebooks they want research to be "unbounded": users and, later, background agents can spend more compute across far more papers, with every step logged for audit and reuse.

## Key points

- **Growth and notebooks.** Byun says Elicit reached $1M ARR four months after launching subscriptions, raised a $9M seed round and spun out of a nonprofit. Notebooks, their fourth attempt at the idea, record each search and column step so others can extend an analysis.
- **Decompose for supervision.** Stuhlmuller says the question has shifted from what chunk a model can do to what is easy to check. Their "factored verification" splits summaries into separate claims, cutting hallucinations from roughly 1.5 to 0.5 per summary.
- **Evaluation against real gold standards.** Elicit tests search by checking whether it finds the papers that published systematic reviews actually cited. Byun says its extraction columns have consistently beaten trained research staff in side-by-side comparisons.
- **Models and chain of thought.** The stack mixes fine-tuned T5 and GPT-3.5 models, GPT-4, GPT-4 Vision for tables, and Claude 3 tests. Every answer uses chain of thought, and Byun says giving models an "I don't know" option reduces hallucination.
- **Search pipeline and the "exascale engine".** Queries are parsed into search terms and filters, about 500 candidates are re-ranked in stages, and a summary is written. Stuhlmuller describes moving work off the browser session so users can pay, for example $100, for hour-long runs over many more papers.
- **Misuse and company structure.** Asked about misuse, Stuhlmuller says it has not been a big issue so far but borderline use cases may need account review. Elicit is now a public benefit corporation of 12 people, hiring senior software engineers, designers and data scientists.

## Quotes

> "I think now the question is starting to be what is easy to supervise?" — Andreas Stuhlmuller

> "Forcing the model to come up with an answer is what leads to hallucination." — Jungwon Byun
