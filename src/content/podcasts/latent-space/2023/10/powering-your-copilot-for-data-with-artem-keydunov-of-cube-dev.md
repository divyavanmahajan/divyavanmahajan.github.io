---
title: Powering your Copilot for Data – with Artem Keydunov of Cube.dev
description: >-
  Cube co-founder Artem Keydunov argues that a semantic layer is the right place
  to hold data context for LLMs, making natural-language queries over tabular
  data more reliable.
pubDate: '2023-10-26'
show: latent-space
url: >-
  https://lspace.beehiiv.com/podcast/s/latent_space_the_ai_engineer_podcast/powering_your_copilot_for_data_with_artem_keydunov_of_cube_dev
durationMin: 39
hosts:
  - Alessio Fanelli
  - swyx
guests:
  - Artem Keydunov
tags:
  - semantic-layer
  - text-to-sql
  - data-engineering
  - business-intelligence
  - llm-agents
draft: false
---
## Thesis

Artem Keydunov, co-founder of Cube, tried to build a natural-language Slack bot for data in 2016 and failed for lack of the right models. He argues that LLMs now make that idea work, provided they query a semantic layer that defines metrics once, rather than generating complex SQL directly against the warehouse.

## Key points

- **From Statsbot to Cube.** Keydunov started Statsbot in 2016 to bring stats into Slack; early versions relied on regex. Cube was built as its semantic layer and open sourced in 2019, and now has over sixteen thousand GitHub stars.
- **Write a book about your data.** He describes indexing metrics, dimensions, relationships and values as text, embedding it in a vector store, and giving that context to the model.
- **Smaller queries, fewer errors.** A query to the semantic layer is simple (a metric grouped by a dimension), while the warehouse SQL may need five joins and must avoid fan traps and chasm traps.
- **Metrics as code.** Asked about conflicting definitions of revenue across teams, Keydunov says Cube definitions are YAML and Python files that teams should debate in pull requests, not hidden Excel files.
- **Where it is used.** He sees copilots for data engineers becoming a baseline feature, chatbots that ask follow-up questions like a data analyst, and BI vendors such as Tableau, AWS QuickSight and Power BI adding natural-language search. Most builders he sees use GPT-3.5 or GPT-4, with Python around the model for math.
- **Embedded analytics.** He agrees it is hard to monetize: the top of the market builds custom, the mid-market is fragmented, and AI just becomes a commodity feature.

## Quotes

> "the query, I believe, should be created against semantic layer because it reduces the room for the error." — Artem Keydunov

> "at the end of the day, semantic layer is a code base" — Artem Keydunov
