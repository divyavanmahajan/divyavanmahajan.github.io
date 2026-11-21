---
title: The perplexities of information retrieval
description: >-
  Perplexity CTO Denis Yarats argues an answer engine should do the
  search-and-read step for users, prioritising accuracy, citations and speed
  through a model-agnostic system of many models.
pubDate: '2024-06-19'
show: practical-ai
episode: 274
url: 'https://share.transistor.fm/s/be091144'
durationMin: 46
hosts:
  - Chris Benson
  - Daniel Whitenack
guests:
  - Denis Yarats
tags:
  - information-retrieval
  - search
  - answer-engines
  - llm-orchestration
  - generative-ui
draft: false
---
## Thesis

Denis Yarats, co-founder and CTO of Perplexity, argues that classic search engines are only an approximation of what users want: an accurate answer. Perplexity retrieves documents and synthesises them into a cited answer, optimising for accuracy and speed. He sees the path forward as model-agnostic orchestration, interfaces beyond chat, and eventually decision-making and actions on the user's behalf.

## Key points

- **From Slack bot to product.** Yarats says the first Perplexity was a Slack/Discord bot combining a search engine with OpenAI's DaVinci 2; switching to DaVinci 3, weeks before ChatGPT, was a clear step up. Angel investor Jeff Dean told them Google held back because it needed around 99.9% accuracy.
- **Citations first.** Coming from academia, Yarats and co-founder Aravind treated citations as a first-class feature, which answered the main complaint about ChatGPT: users could not verify answers.
- **Many models per query.** A single request touches at least 10 models, including ranking models, embeddings and classifiers. Yarats describes prompting a large model to find product fit, then collecting data and distilling smaller, faster specialist models.
- **Model agnosticism.** Asked by Whitenack about "AI model debt" when new models change behaviour, Yarats says no single model will rule, so Perplexity evaluates each component independently and can route simpler queries to smaller models. Anticipating multimodal models meant image upload needed only a couple of days of adjustment.
- **Beyond chat.** Yarats calls chat interfaces temporary and too limiting for search; Perplexity has prototyped generative UI and invested in voice-to-voice on mobile, with vision via glasses as the next step.
- **Generated content on the web.** On data poisoning, he compares the problem to spam filtering and argues detection is easier than generation.

## Quotes

> "The fastest way to get the most accurate answers to your questions." — Denis Yarats

> "From machine learning fundamentals, discrimination is a much easier problem than generation." — Denis Yarats
