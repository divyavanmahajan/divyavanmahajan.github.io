---
title: 'Data, data, everywhere - enough for AGI?'
description: >-
  Order-of-magnitude estimates suggest there is enough raw data for a
  GPT-5-scale model, but high-quality text may run short for a trillion-dollar
  training run unless synthetic data and self-play fill the gap.
pubDate: '2024-04-13'
show: cognitive-revolution
url: 'https://www.cognitiverevolution.ai/data-data-everywhere-enough-for-agi/'
youtube: 'https://www.youtube.com/watch?v=IdCWaWupMrk'
durationMin: 62
hosts:
  - Nathan Labenz
guests:
  - Nick Gannon
tags:
  - training-data
  - scaling-laws
  - synthetic-data
  - compute
  - agi
draft: false
---
## Thesis

Nathan Labenz and data scientist Nick Gannon test the scaling hypothesis with back-of-the-envelope numbers: is there enough high-quality data to keep scaling? Their bull case is that a GPT-5-sized run needs only a tiny fraction of the data the world produces. Their bear case is that high-quality text runs out well before a trillion-dollar training run, which leaves synthetic data and self-play as the likely way forward.

## Key points

- **The GPT-5 budget.** Gannon puts GPT-3 at about 1 trillion tokens and GPT-4 at about 10 trillion, so GPT-5 would need about 100 trillion. Labenz links this to Chinchilla scaling: 100x compute (a run of roughly $1 billion) buys 10x parameters and 10x data.
- **Raw volume is huge.** About 64 zettabytes of data were created in 2020, so only 1 part in 100 million would need to be good text. By Labenz's arithmetic, 1 in 1,000 emails would be enough, while a year of Twitter is roughly 3x GPT-4's data.
- **Other modalities.** YouTube and astronomy each produce 1-2 exabytes a year, and genomics about 40 exabytes. The Evo model was trained on 300 billion tokens from 2.7 million prokaryotic and phage genomes, compared with the 2 trillion image tokens reportedly added to GPT-4.
- **The bear case.** Gannon cites the paper "Will We Run Out of Data", which puts high-quality text at about 10 trillion words and predicts it runs out between 2024 and 2026. The Library of Congress holds a similar amount.
- **The trillion-dollar run.** Gannon treats about 1% of gross world product (Apollo took 2.2% of US GDP) as the ceiling and expects such a run between 2029 and 2033. Labenz estimates it would need 10^16 to 10^17 tokens, far more high-quality data than exists.
- **Synthetic data and self-play.** Gannon sees code and AlphaGo-style self-play as the best synthetic data. Labenz notes that GPT-4's self-critique loops plateau after 3 to 5 rounds without retraining.

## Quotes

> "if the goal was to create systems with superhuman performance, we have to throw most of the human generated data in the trash." — Nick Gannon

> "can GPT-five create a coding problem that even GPT-five can't solve?" — Nathan Labenz
