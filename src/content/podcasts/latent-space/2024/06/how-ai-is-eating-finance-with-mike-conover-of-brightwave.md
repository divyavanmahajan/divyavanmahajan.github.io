---
title: How AI is eating Finance — with Mike Conover of Brightwave
description: >-
  Mike Conover argues that useful financial AI comes from decomposed,
  domain-aware subsystems acting as a partner in thought, not from giant context
  windows, autonomous agents or generated spreadsheets.
pubDate: '2024-06-11'
show: latent-space
url: >-
  https://lspace.beehiiv.com/podcast/s/latent_space_the_ai_engineer_podcast/how_ai_is_eating_finance_with_mike_conover_of_brightwave
durationMin: 55
hosts:
  - Alessio Fanelli
  - swyx
guests:
  - Mike Conover
tags:
  - finance
  - rag
  - llm-systems
  - evaluation
  - open-source-models
draft: false
---
## Thesis

Mike Conover, formerly head of the Dolly open-model team at Databricks and now founder of Brightwave, tells Alessio Fanelli that finding mispriced assets requires more reading and working memory than a human analyst has. He says reliable financial analysis comes from systems engineering: splitting the work into specialised subsystems, grounding them in sources, and treating the model as a partner in thought rather than an oracle.

## Key points

- **Company and customers.** Brightwave raised a $6 million seed round led by Decibel, with Point72 and Moonfire Ventures taking part. Conover says customers range from $500 million owner-operated RIAs to a $20 billion crossover hedge fund. In one example, a question about NVIDIA and rare earth shortages leads to China's controls on germanium and gallium.
- **Long context is not synthesis.** Conover says models have a typical output length of about 1,200 tokens, so putting all SEC filings into a million-token window gives shallow answers. Brightwave splits documents into smaller reasoning units and builds retrieval that understands time, such as quarterly data and Fed policy over 18 months.
- **Factuality and evaluation.** Brightwave makes several passes over its output, compares models, trains its own entailment checkers and lets users spend more compute to double-check surprising findings. It uses LLM supervision, measured against paid domain-expert annotations.
- **Fine-tuning as differentiation.** Conover compares a base model to a stem cell that fine-tuning turns into specialised cells. He prefers finite-state-machine-like systems to open-ended agents, uses RAG for grounding, and is investing in knowledge-graph extraction done once over large bodies of text.
- **No generated Excel models.** He says a subtle spreadsheet bug can make hours of work useless, and financial models are personal. He compares the change to accountants after VisiCalc arrived in 1979.
- **Open source shifts to data.** Conover says the payoff from training your own $5-40 million pretrained model is shrinking as models converge. He expects new instruction-tuning datasets to drive the next round of progress.

## Quotes

> "the worst failure state for these systems is that they are wrong in a convincing way." — Mike Conover

> "I don't think that unbounded agentic behaviors are useful." — Mike Conover
