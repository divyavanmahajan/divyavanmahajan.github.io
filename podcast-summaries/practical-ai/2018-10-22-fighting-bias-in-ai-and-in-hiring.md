---
title: "Fighting bias in AI (and in hiring)"
date: 2018-10-22
show: practical-ai
episode: 17
url: "https://share.transistor.fm/s/2150f5d5"
duration_min: 41
hosts: ["Chris Benson", "Daniel Whitenack"]
guests: ["Lindsey Zuloaga"]
description: "Hiring is already biased; algorithms trained on objective performance data and continuously monitored for adverse impact can reduce that bias, but fairness has competing definitions that require explicit trade-offs."
tags: ["algorithmic-fairness", "hiring", "bias-mitigation", "model-monitoring", "hr-tech"]
source_transcript: "practical-ai/episodes/2018/10/2018-10-22-fighting-bias-in-ai-and-in-hiring.md"
draft: false
---

## Thesis

Lindsey Zuloaga, director of data science at HireVue, argues that traditional hiring runs on keyword filters and gut feeling, and that an algorithm can be inspected and corrected in ways a human interviewer cannot. Because fairness has several definitions that cannot all be met at once, she says data science teams must choose which ones matter, monitor them, and be open about it.

## Key points

- **A broken funnel.** Zuloaga, a former nanophotonics physicist, describes applicant tracking systems as a black hole for applicants that often filter by keywords, school or GPA, which she says correlate weakly with job performance.
- **HireVue's approach.** The company runs asynchronous on-demand video interviews and trains assessment models on customers' performance data. Zuloaga prefers objective metrics such as sales numbers or call handle time over subjective manager ratings, and says IO psychologists help design situational questions that separate top and bottom performers.
- **Blinding and mitigation.** She says the models use only what was said, tone of voice and facial expressions, with no facial recognition or outside data. If monitoring shows groups scored differently, the team removes the features that leak demographics, accepting some loss of predictive power.
- **The four-fifths rule.** Under EEOC rules, at the customer's cutoff no group may score below 80% of the top-scoring group. Zuloaga says ongoing monitoring catches problems that small, less diverse training sets hide.
- **Competing fairness definitions.** She cites the COMPAS recidivism model, where Black defendants had a higher false positive rate, and a job-ad example comparing equal exposure with an equal true positive rate. She recommends IBM AI Fairness 360 and Google's "attacking discrimination with smarter machine learning" demo.
- **Outlook.** Zuloaga reports a customer increasing diversity by 16%, expects most data scientists to know fairness well within five to ten years, but says debate over the right definition will continue.

## Quotes

> "algorithms are really good at stereotyping." — Lindsey Zuloaga

> "Human beings don't even know why they made the decisions they made." — Lindsey Zuloaga
