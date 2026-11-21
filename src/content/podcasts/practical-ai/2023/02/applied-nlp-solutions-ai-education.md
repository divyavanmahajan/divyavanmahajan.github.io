---
title: Applied NLP solutions & AI education
description: >-
  Jay Alammar argues that the value in applied NLP now lies in assembling
  pre-trained models, prompts, embeddings and retrieval into reliable solutions,
  and in teaching people how to do it.
pubDate: '2023-02-22'
show: practical-ai
episode: 212
url: 'https://share.transistor.fm/s/d98fc7ab'
durationMin: 38
hosts:
  - Chris Benson
  - Daniel Whitenack
guests:
  - Jay Alammar
tags:
  - nlp
  - large-language-models
  - embeddings
  - ai-education
  - prompt-engineering
draft: false
---
## Thesis

Jay Alammar, author of "The Illustrated Transformer" and an applied NLP practitioner at Cohere, tells Daniel Whitenack that most practical work now happens above the modelling layer: picking a pre-trained model, then combining few-shot prompts, embeddings, retrieval and, when needed, fine-tuning. He argues the industry owes newcomers a discerning view that separates cherry-picked demos from use cases the models handle reliably.

## Key points

- **Learning in public.** Alammar started writing tutorials about eight years ago, when TensorFlow was open-sourced, as a way to track his own progress. The blog led to about two years building Udacity deep learning and NLP nanodegree lessons. His advice to new creators: start now, don't wait for a magnum opus, and emulate writers such as Andrej Karpathy, Chris Olah and Andrew Trask.
- **Demos versus reliability.** He cites Stack Overflow banning GPT-generated answers as evidence that programming Q&A is not yet reliable, while neural and semantic search with embeddings is a mature use case that he says deserves more attention than it gets.
- **The generative AI playbook.** Prompt engineering alone is not a competitive advantage, Alammar argues. Proprietary data, fine-tunes, Midjourney-style public galleries of generations and retrieval-augmented generation are further elements.
- **When to fine-tune.** He starts with few-shot examples (three to five) and reaches for fine-tuning once he has 500 or 1,000 labelled examples.
- **Cohere and APIs.** Cohere offers generation and text embedding models via API, including a multilingual embedding model covering over 100 languages. Alammar compares hosted models to other cloud services that let teams focus on their own product.
- **Chaining and multimodality.** A Cohere notebook reproduces DeepMind's Dramatron, using seven prompts to write a screenplay and Stable Diffusion calls to picture characters and settings. Next on his list: combining generation and embeddings, as in the open-source Topically library for naming topic clusters.

## Quotes

> "Writing publicly and learning publicly is maybe one of the greatest life hacks I've ever stumbled into." — Jay Alammar

> "Be discerning of cherry-picked examples versus reliable use cases." — Jay Alammar
