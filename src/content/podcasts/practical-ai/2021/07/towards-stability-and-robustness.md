---
title: Towards stability and robustness
description: >-
  Most enterprise AI fails in production because models meet unstable, drifting
  data; filtering bad inputs and scoring output confidence makes systems robust
  enough to deliver value.
pubDate: '2021-07-20'
show: practical-ai
episode: 141
url: 'https://share.transistor.fm/s/1f18c42f'
durationMin: 49
hosts:
  - Chris Benson
  - Daniel Whitenack
guests:
  - Roey Mechrez
tags:
  - mlops
  - model-robustness
  - data-drift
  - out-of-distribution-detection
  - enterprise-ai
draft: false
---
## Thesis

Roey Mechrez, CTO and co-founder of BeyondMinds, argues that the 90% failure rate of enterprise AI is a technical problem, not an organisational one. Models that reach 95% accuracy on a static lab dataset break silently once production data shifts. He says the model is only a small part of the solution; the rest is a system around it that keeps garbage out, flags uncertain predictions and adapts over time.

## Key points

- **Specificity blocks off-the-shelf AI.** Mechrez says even "repetitive" problems such as defect detection differ greatly between smartphone glass and PCB boards, with different tolerances, hardware and human-in-the-loop needs, so companies must build, and most are not technology companies.
- **The giraffe problem.** A classifier trained on cats and dogs will call a giraffe a dog with full confidence. Mechrez says real-world equivalents include a changed light bulb, a slight grey-level shift or corrupted text.
- **Two defences.** He recommends out-of-distribution detection on inputs and calibrated confidence estimation on outputs, routing low-confidence cases to humans. This matters most for mission-critical uses such as insurance claims, anti-money laundering and fraud detection.
- **Production from day one.** Mechrez advises training on data that matches production exactly and planning for "evergreen AI": monitoring and retraining as data drifts. Benson notes many data science teams do the opposite because production data is messy.
- **Squads, not lone data scientists.** Mechrez wants engineers, data scientists, product managers and business people working together; Whitenack observes that AI monitoring goes beyond what software engineers mean by testing.
- **A platform approach.** BeyondMinds wraps models in mostly model-agnostic components, including an "input gate" and monitoring, aiming to cut the typical 12-14 months to production to about 12 weeks. Whitenack compares this to PyTorch Lightning decoupling hardware code.

## Quotes

> "state of the art and models are a critical part of the solution, right? But they're probably 5%." — Roey Mechrez

> "Don't do POCs, right? Try to avoid as much as possible from building this model in the lab, right?" — Roey Mechrez
