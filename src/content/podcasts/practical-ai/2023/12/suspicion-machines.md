---
title: Suspicion machines ⚙️
description: >-
  Lighthouse Reports journalists took apart Rotterdam's welfare fraud model and
  argue its biased training data, subjective features and weak accuracy show why
  such systems need transparency.
pubDate: '2023-12-05'
show: practical-ai
episode: 248
url: 'https://share.transistor.fm/s/ce204655'
durationMin: 47
hosts:
  - Daniel Whitenack
guests:
  - Gabriel Geiger
  - Justin-Casimir Braun
tags:
  - algorithmic-fairness
  - public-sector-ai
  - training-data
  - model-auditing
  - investigative-journalism
draft: false
---
## Thesis

Gabriel Geiger and Justin-Casimir Braun of Lighthouse Reports tell Daniel Whitenack that the welfare fraud risk scores used across Europe act as "suspicion machines" that generate suspicion of vulnerable groups. Having obtained and tested Rotterdam's model, they argue that the real problems sit in how training data and features are built, not only in outcome fairness metrics, and that these systems should be public.

## Key points

- **Getting the model.** Geiger describes sending freedom of information requests in eight or nine countries, starting with documents such as data scientists' manuals to make later requests specific. Rotterdam sent its training code but withheld the final model file, citing gaming risk, and released it only after a year-long fight.
- **Training data leaked by a plot.** Braun says the gradient boosting model takes 314 variables. Plotly histograms the city supplied in an HTML file turned out to contain the entire training data.
- **Questionable features.** According to the guests, around 30 variables covered language skills, which they see as a proxy for ethnic background, and caseworker assessments included judgements such as how women wore makeup, reduced to a 0-1 flag.
- **Biased labels.** The training set held over 12,000 past investigations, only about 1,000 of them random; many came from tips or campaigns such as checking every man in a neighbourhood. Braun argues that flagging patterns may reflect this selection rather than actual fraud.
- **Weak performance.** Against a 21% baseline rate, Braun says the model hits about 30%; he notes Margaret Mitchell called it close to random guessing. Geiger contrasts French auditors' estimate of fraud at about 0.2% of benefits with consultancies' 5-6%. Rotterdam later stopped using the model.
- **What practitioners should take away.** Braun calls for judging fairness across the whole lifecycle, starting with representative samples. Geiger notes that about 30% of eligible people in France do not claim welfare, yet no models look for them.

## Quotes

> "encouraging people to game those systems is probably a good thing because that means you're probably closer to abiding by the law." — Justin-Casimir Braun

> "what we don't see is models that try to find people who are eligible for welfare benefits who aren't using them because they're afraid of the system." — Gabriel Geiger
