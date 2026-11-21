---
title: Data science for intuitive user experiences
description: >-
  Intuit's Nhung Ho argues that customer-first problem framing, explainable
  forecasting and pandemic-proof models are what make financial AI useful to
  small businesses.
pubDate: '2021-04-20'
show: practical-ai
episode: 130
url: 'https://share.transistor.fm/s/1a5e6385'
durationMin: 53
hosts:
  - Chris Benson
  - Daniel Whitenack
guests:
  - Nhung Ho
tags:
  - fintech
  - forecasting
  - customer-experience
  - small-business
  - mlops
draft: false
---
## Thesis

Nhung Ho, Director of Data Science at Intuit and a former astrophysicist, argues that applied AI should begin with the customer's "why", not with the model. For financial data, she says explainability and trust matter more than raw accuracy. The pandemic showed her that rare shocks have to be built into forecasting methods, not cut out of the data.

## Key points

- **Design for Delight.** Ho describes Intuit's customer interviews, competing hypotheses and quick MVPs. Her "aha" moment was running models on customers' own data and showing them the predictions, which produced far richer feedback.
- **Building what customers did not ask for.** Small businesses asked for invoice reminders. Ho's team offered a predicted date range for when each invoice would be paid, and customers did not know that was possible.
- **The pandemic step function.** Some small businesses saw revenue drop 99% when lockdowns began. Intuit responded with GoFundMe partnerships, an aid assist tool for checking PPP eligibility, and reworked cash flow models. QuickBooks Capital's accounting data let it underwrite PPP loans for underserved customers.
- **Forecasting sparse data.** Daily sales turned into weekly ones. Ho's team transferred learnings from seasonal businesses, such as Halloween stores, to firms going through similar boom-and-bust patterns.
- **Explainability over black boxes.** Deep learning only recently beat traditional time series methods for her team, but customer-facing money decisions stay with explainable models. She expects trust to grow over time and suggests small A/B tests for bolder ideas.
- **Operating 10 million models.** With 3 million US QuickBooks customers and several transaction streams per customer, the team runs more than 10 million models. Her advice is to start in batch mode, monitor by sampling, and use a platform (Intuit's is built on AWS SageMaker).

## Quotes

> "We can't just clip that chunk of data, remove it, and act as if it never existed." — Nhung Ho

> "Start in batch mode, right? There's this like obsession with building models in real time for everything." — Nhung Ho
