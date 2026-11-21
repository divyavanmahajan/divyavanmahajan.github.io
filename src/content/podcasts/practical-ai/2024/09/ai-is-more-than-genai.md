---
title: AI is more than GenAI
description: >-
  Generative AI is the latest stage in a longer history of statistical machine
  learning and transfer learning, and real systems often combine all three kinds
  of models.
pubDate: '2024-09-05'
show: practical-ai
episode: 285
url: 'https://share.transistor.fm/s/ba93c83c'
durationMin: 40
hosts:
  - Daniel Whitenack
guests: []
tags:
  - machine-learning
  - generative-ai
  - transfer-learning
  - embeddings
  - ai-history
draft: false
---
## Thesis

In a solo episode, Daniel Whitenack argues that AI is not the same as generative AI, and that GenAI did not appear out of nowhere. He walks through three phases (statistical machine learning, foundation models with transfer learning, and generative models) and argues that all three are still in use and are often best combined.

## Key points

- **Phase one, 2010-2017.** Whitenack describes statistical machine learning as fitting the parameters of a software function to curated example inputs and known outputs. The model is the function plus its parameters, which he says explains confusion over whether to license models as code or data. Many of these models need no GPU.
- **Phase two, from 2017.** With models such as BERT and YOLO, large players train big models on huge datasets, and others fine-tune them with much less domain data. His example is an agriculture company classifying bugs on plants. These larger models drove demand for GPUs.
- **Why transfer works.** He estimates that 90% or more of a model's processing goes into building an internal representation (an embedding), with 10% or less for the downstream task. Self-supervised "meta tasks" such as predicting the next word let developers build training data from internet-scale scrapes without human labelling.
- **Phase three, 2022 onwards.** Large autocomplete models turned out to be general enough to prompt rather than fine-tune. Model producers like Meta add instruction tuning, and most teams are now consumers whose work is prompt curation and evaluation rather than training. Embeddings were repurposed for semantic search and RAG.
- **Roles are shifting.** Whitenack notes that domain experts now prompt models directly, which shrinks the data scientist's role as translator between business and infrastructure.
- **Combine methods.** He gives the example of a generative model turning "forecast our revenue for two years" into a tool call to a statistical forecasting model. For newcomers he recommends scikit-learn or AutoML tools such as H2O's Driverless AI.

## Quotes

> "all of these things that we're executing are software functions and not some sort of fairy dust or sentience that comes about after you leave your laptop in the corner of a room" — Daniel Whitenack

> "It doesn't really make sense in many cases to maybe utilize a huge heavyweight vision LLM" — Daniel Whitenack
