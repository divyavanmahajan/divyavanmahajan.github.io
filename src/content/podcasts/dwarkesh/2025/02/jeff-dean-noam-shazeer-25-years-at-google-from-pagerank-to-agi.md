---
title: 'Jeff Dean & Noam Shazeer — 25 years at Google: from PageRank to AGI'
description: >-
  Gemini co-leads Jeff Dean and Noam Shazeer trace Google's path from N-gram
  models to Gemini and argue that inference compute, automated research and
  modular models drive what comes next.
pubDate: '2025-02-12'
show: dwarkesh
url: 'https://www.dwarkesh.com/p/jeff-dean-and-noam-shazeer'
youtube: 'https://www.youtube.com/watch?v=v0gjI__RyCY'
durationMin: 135
hosts:
  - Dwarkesh Patel
guests:
  - Jeff Dean
  - Noam Shazeer
tags:
  - google
  - gemini
  - inference-scaling
  - mixture-of-experts
  - ai-hardware
  - ai-safety
draft: false
---
## Thesis

Jeff Dean and Noam Shazeer argue that algorithms follow hardware: cheap arithmetic and expensive data movement shaped deep learning, and co-design of chips and models keeps paying off. Both expect fast progress from inference-time compute and automated idea search. Dean sketches a future of large, organically growing modular models (his Pathways vision) that could serve much of Google's work through one system.

## Key points

- **Early language models.** Dean recounts how a 2007 machine translation system that took 12 hours per sentence was rebuilt around an in-memory five-gram model over 2 trillion words on 200 machines, cutting it to about 100 milliseconds. Shazeer built a language-model spelling corrector in 2001.
- **Scaling signals.** Dean describes the Brain team's 2,000-computer, 16,000-core system that learned a "cat neuron" from 10 million YouTube frames unsupervised, and a 60% relative improvement on ImageNet's 20,000-category task.
- **Inference compute headroom.** Shazeer estimates a million tokens per dollar for a large model, roughly 100 times cheaper than reading a paperback, so spending more compute to "think harder" has a lot of room. Dean cites search (Rich Sutton's Bitter Lesson) and drafter models as levers.
- **Coding and research automation.** Dean says Gemini has been further trained on Google's internal codebase, and that Sundar Pichai has said 25% of checked-in characters come from AI coding models. Shazeer imagines running thousands or millions of experiments in parallel.
- **Modularity and distillation.** Dean wants sparse, mixture-of-experts models with uneven experts, independently trained modules (for example Southeast Asian languages or Haskell), and continual distillation into smaller serving models. He notes Gemini already trains across multiple metro areas.
- **Safety and openness.** Dean favours human-in-the-loop safeguards and "shaping" deployment, while Shazeer argues analysing text is easier than generating it, so models can help check models. On the Transformer's publication, Shazeer says the pie is not fixed, though Google now publishes "a little less".

## Quotes

> "Talking to a language model is like 100 times cheaper than reading a paperback." — Noam Shazeer

> "I've stopped cleaning my garage because I'm waiting for the robots." — Noam Shazeer
