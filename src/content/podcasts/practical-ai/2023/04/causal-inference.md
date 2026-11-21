---
title: Causal inference
description: >-
  Paul Hünermund argues that most business questions are causal, about the
  effect of an action, and that correlation-based machine learning cannot answer
  them without causal inference and domain knowledge.
pubDate: '2023-04-25'
show: practical-ai
episode: 220
url: 'https://share.transistor.fm/s/311a1f1d'
durationMin: 42
hosts:
  - Chris Benson
  - Daniel Whitenack
guests:
  - Paul Hünermund
tags:
  - causal-inference
  - experimentation
  - data-science
  - explainability
  - fairness
draft: false
---
## Thesis

Paul Hünermund, assistant professor at Copenhagen Business School, tells Daniel Whitenack and Chris Benson that standard machine learning finds correlations, while executives mostly ask what will happen if they act. Causal inference treats this as predicting the likely impact of an intervention. He says it cannot be done purely from data: it needs background knowledge to rule out alternative explanations.

## Key points

- **Interventions and counterfactuals.** Hünermund cites philosopher James Woodward's definition of causal inference as a special prediction problem about actions. Business questions such as entering a market or a new HR policy are interventional; questions about what would have happened otherwise are counterfactual.
- **A mismatch in practice.** In Hünermund's interviews with practitioners, one IT consultant said most client questions are causal, yet teams answer them with predictive analytics, creating tension in projects.
- **Two families of methods.** Experiments such as A/B tests are easy but can be costly or unethical. Observational methods, including difference-in-differences, regression discontinuity, matching and directed acyclic graphs, must handle self-selection bias, as in post-rollout COVID vaccine studies.
- **Tools and starting points.** He recommends Microsoft's DoWhy library, The Book of Why by Judea Pearl, Scott Cunningham's Causal Inference: The Mixtape, sensitivity analysis and the annual Causal Data Science Meeting he co-founded. Getting closer to causal is often good enough, he says.
- **Whitenack's candle test.** For the free two-ounce sample sent with his wife's 87,837 orders last year, Hünermund suggests a small experiment, since the business controls who gets the sample, plus heterogeneous treatment effects for high- and low-volume customers.
- **Fairness and trends.** He argues Google's pay-equity analysis likely conditioned on variables affected by gender, such as job level. He is watching heterogeneous treatment effects, causal discovery, root cause analysis at Amazon, and interactions between treatments.

## Quotes

> "And we should get away from this idea that it's zero or one, right, that either it's causal or it's not." — Paul Hünermund

> "I think explainability almost comes for free with causal inference." — Paul Hünermund
