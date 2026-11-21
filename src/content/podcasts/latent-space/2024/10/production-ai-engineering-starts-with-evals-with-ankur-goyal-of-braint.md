---
title: Production AI Engineering starts with Evals — with Ankur Goyal of Braintrust
description: >-
  Ankur Goyal argues that evals are the core workflow of AI engineering, that
  software engineers need tools built for them, and that fine-tuning is a
  technique, not a business.
pubDate: '2024-10-11'
show: latent-space
url: >-
  https://lspace.beehiiv.com/podcast/s/latent_space_the_ai_engineer_podcast/production_ai_engineering_starts_with_evals_with_ankur_goyal_of_braintrust
durationMin: 117
hosts:
  - Alessio Fanelli
  - swyx
guests:
  - Ankur Goyal
tags:
  - evals
  - llmops
  - ai-engineering
  - fine-tuning
  - agents
draft: false
---
## Thesis

Ankur Goyal, CEO of Braintrust, argues that AI products get better when every change is evaluated, and that the people doing this work are now software engineers rather than ML specialists, who need tools that fit their habits. He also argues that anything developers build to work around model limits, such as complex agent frameworks, tends to be absorbed into the models themselves.

## Key points

- **Lessons from Impira.** Goyal says BERT, then LayoutLM and GPT-3, made his company's computer-vision document extraction obsolete; a quick eval setup on Snowflake ended months of team debate. Figma acquired Impira in December 2022.
- **Evals as the product core.** Braintrust replaces hand-written eval loops with a declarative eval (data, task function, scorers), and logs production traces in the same format, which Goyal says removes the ETL step from logs to datasets. Customers named include Notion, Stripe, Zapier, Airtable and Vercel.
- **Early contrarian bets.** Goyal defends a hybrid on-prem model (Zapier, Coda and Airtable needed data to stay in their cloud) and an early TypeScript focus; he says over 75% of users running evals use the TypeScript SDK.
- **Fine-tuning and open source.** He says the real goal is automatic optimization, not fine-tuning; few customers fine-tune, and open-weight models are under 5% of production workloads.
- **Model market share.** Before Claude 3 usage was close to 100% OpenAI; Goyal credits Haiku's price and tool calling for Anthropic's foothold, and OpenAI's availability and rate limits for its lead.
- **Workload mix.** He estimates about 50% single-prompt features, 25% simple agents with tools such as RAG, and 25% advanced agents, and expects o1-style reasoning to push agent logic into the model. The host (swyx) partly disagrees, citing the need for control.

## Quotes

> "I just don't think fine-tuning is a business outcome. I think it is a one of several means to an end, and the end is valuable." — Ankur Goyal

> "Anytime there is control flow complexity or uncertainty complexity, I think the history of AI has been to push more and more into the model." — Ankur Goyal
