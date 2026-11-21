---
title: "Zero-shot multitask learning"
date: 2021-11-23
show: practical-ai
episode: 158
url: "https://share.transistor.fm/s/8b358e66"
duration_min: 46
hosts: ["Chris Benson", "Daniel Whitenack"]
guests: []
description: "BigScience's T0 shows that training on many NLP tasks reframed as natural-language prompts yields a model that handles new prompts zero-shot while being far smaller than GPT-3."
tags: ["zero-shot-learning", "large-language-models", "bigscience", "prompting", "ai-conferences"]
source_transcript: "practical-ai/episodes/2021/11/2021-11-23-zero-shot-multitask-learning.md"
draft: false
---

## Thesis

Daniel Whitenack and Chris Benson range from the return of in-person conferences to automation and jobs, then focus on T0, the first model from the BigScience research workshop. Whitenack argues that T0's distinguishing idea is training on many labelled NLP tasks rewritten as prompts, which targets the zero-shot, custom-prompt use people actually want from language models.

## Key points

- **Two kinds of conferences.** Whitenack explains that research conferences such as NeurIPS, ACL and EMNLP peer-review original work, while industry events such as ODSC and NVIDIA GTC accept talks without that review. Benson advises splitting up from colleagues at lunch and valuing hallway conversations over sessions.
- **The "humology" scale.** Whitenack recounts a keynote that placed tasks on a scale from human-only to fully automated, using weed control as the example: hand weeding, blanket spraying from trucks, computer-vision spot spraying, and autonomous machines from companies such as John Deere.
- **Pace of change.** Benson argues that technology is evolving faster than people can adapt, that AI mistakes will keep happening, and that he is unsure how to prepare his nine-year-old daughter for work.
- **BigScience and T0.** Whitenack describes BigScience as a CERN-style collaboration of 600 researchers from 50 countries and more than 250 institutions working on large multilingual models and datasets. He says T0 outperforms GPT-3 on some tasks while being 16 times smaller.
- **Prompted multitask training.** Rather than proxy tasks like masking, Whitenack says T0 was trained on datasets for paraphrasing, summarisation, question answering, named entity recognition and natural language inference, all reframed as prompts paired with outputs. It builds on Google's T5 encoder-decoder transformer.
- **Beyond transformers.** Whitenack points to convolutional speech models, multimodal work and graph neural networks. Benson recommends an IEEE Spectrum explainer on deep learning and an article on five activation functions.

## Quotes

> "I wouldn't phrase it as transformers is all that matters, but I think transformers have been, you know, no pun intended, transformational." — Daniel Whitenack

> "If you go forward in time after you and I are gone, they're going to look back on this as pioneering days." — Chris Benson
