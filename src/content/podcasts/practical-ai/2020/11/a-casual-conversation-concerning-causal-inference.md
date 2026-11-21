---
title: A casual conversation concerning causal inference
description: >-
  Sound causal claims need explicit assumptions and sensitivity analysis, and
  correct numbers still fail if audiences misread how they are presented.
pubDate: '2020-11-24'
show: practical-ai
episode: 113
url: 'https://share.transistor.fm/s/4b89ff93'
durationMin: 51
hosts:
  - Chris Benson
  - Daniel Whitenack
guests:
  - Lucy D'Agostino McGowan
tags:
  - causal-inference
  - statistics
  - data-communication
  - propensity-scores
  - r-language
draft: false
---
## Thesis

Lucy D'Agostino McGowan, statistics professor at Wake Forest University and co-host of the Casual Inference podcast, argues that most data questions are causal, so analysts should state their assumptions and test how robust results are to unmeasured confounders. Using COVID-19 vaccine reports and a Georgia dashboard as examples, she adds that communication is only correct if the audience actually interprets the numbers correctly.

## Key points

- **Precision in vaccine headlines.** McGowan notes that Moderna's interim result was 94.5%, often rounded to 95%, based on fewer than 100 cases (about 90 placebo, five treatment); she expects final numbers to differ and worries that changes could erode trust.
- **Certainty versus trust.** Her lab is studying whether people trust recommendations framed with uncertainty; early results suggest people on average prefer being told something definitively.
- **Four checks for communication.** McGowan proposes that a result must be mathematically correct, marketed correctly, disseminated correctly and interpreted correctly by its audience.
- **The Georgia map.** A county map with quantile bins was not built for comparison over time, yet people screenshotted it daily; McGowan says analysts must either label such limits clearly or choose another chart. Benson, who lives in Georgia, adds that local media began using Johns Hopkins data instead.
- **Propensity scores and confounding.** McGowan explains propensity scores as a way to build a counterfactual from observational data, and cites hormone replacement therapy, where observational studies suggested heart protection that a randomised trial did not confirm.
- **Tipping-point analysis.** Her R package tipr estimates how strong an unmeasured confounder would have to be to overturn a result. She sees the main gap in intermediate-level causal inference material.

## Quotes

> "the human instinct is to want to talk about things causally." — Lucy D'Agostino McGowan

> "people are going to consume information as they consume it." — Lucy D'Agostino McGowan
