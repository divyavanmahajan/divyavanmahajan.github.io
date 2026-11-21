---
title: Sidekick is an AI Shopify expert
description: >-
  Shopify's Mike Tamir and Matt Colyer explain a pragmatic AI strategy: try many
  models fast, mix commercial and open source, and let rigorous evals decide.
pubDate: '2024-12-11'
show: practical-ai
episode: 299
url: 'https://share.transistor.fm/s/f5a16bd0'
durationMin: 52
hosts:
  - Chris Benson
guests:
  - Mike Tamir
  - Matt Colyer
tags:
  - e-commerce
  - llms
  - evaluation
  - open-source-models
  - ai-assistants
draft: false
---
## Thesis

Mike Tamir, Shopify's head of machine learning, and Matt Colyer, director of product for Sidekick, describe a strategy built on pragmatism: run many experiments across commercial and open-source models, and use evaluation as the compass for choosing between them. Colyer says Sidekick's core has been rebuilt many times as better approaches appeared. Both expect AI to change how people interact with software and information.

## Key points

- **Shopify Magic.** Colyer lists the AI features grouped under the Magic brand: Sidekick (a merchant assistant he calls "the co-founder they wish they had"), image background generation, suggested replies in the Inbox app, product categorisation and variant suggestions, and a docs assistant that writes GraphQL queries.
- **Late but heavy start.** Tamir says Shopify was not historically invested in ML but redirected significant effort towards it from 2022.
- **Evals as compass.** Tamir argues you need a definition of "working" before you can be pragmatic. Colyer's team calls the problem "the dark forest": you can't know absolute quality, but repeatedly picking A over B gets you out.
- **LLMs as search judges.** Tamir says LLMs can label query-product relevance better than human raters, because a query like "white flower dress" has a flat distribution of valid answers, but only when grounded by expert supervision.
- **Open vs commercial.** Colyer expects a hybrid: commercial models get you "from zero to one" quickly; open source gives control. Tamir adds that normalising billions of products is better done by distilling a smaller model than calling a frontier API.
- **Futures.** Colyer predicts agents will replace clicking through forms within roughly ten years; Tamir, drawing on self-driving hype, expects bumps along the way but a lasting change in how information is organised and accessed.

## Quotes

> "I think the people that win in this space are the people that try most things the fastest." — Matt Colyer

> "I'm pretty sure Transformers is not the last architecture out there." — Mike Tamir
