---
title: "Getting in the Flow with Snorkel AI"
date: 2020-12-21
show: practical-ai
episode: 117
url: "https://share.transistor.fm/s/a2bb5bd9"
duration_min: 47
hosts: ["Chris Benson"]
guests: ["Braden Hancock"]
description: "Training data, not models, is the bottleneck in applied machine learning, so labeling should be done programmatically with noisy rules that are aggregated, versioned and reused."
tags: ["training-data", "weak-supervision", "data-labeling", "mlops", "enterprise-ai"]
source_transcript: "practical-ai/episodes/2020/12/2020-12-21-getting-in-the-flow-with-snorkel-ai.md"
draft: false
---

## Thesis

Braden Hancock, co-founder and head of technology at Snorkel AI, argues that the real bottleneck for new machine learning applications is training data, not model architecture. Instead of labeling examples one by one, experts should write labeling functions whose noisy votes are combined by an algorithm, giving many good-enough labels quickly. Snorkel Flow turns this Stanford research into a platform for end-to-end AI applications.

## Key points

- **From research to company.** Hancock says Snorkel grew out of PhD work under Chris Ré at Stanford with co-founders Alex Ratner, Paroma Varma and Henry Ehrenberg, backed by about 35 peer-reviewed papers and a collaboration with Google.
- **Labeling functions.** Using a spam example, Hancock explains that a rule such as "emails mentioning Vicodin are spam" can label hundreds of examples at once; aggregating many such rules yields "100,000 pretty good labels" instead of 100 perfect ones.
- **Open source versus Flow.** The pip-installable snorkel.org library (4,000-plus GitHub stars) covers labeling; Snorkel Flow adds guidance, infrastructure such as security and versioning, integrated models (scikit-learn, Hugging Face, XGBoost), analysis tools, and both a GUI and an SDK.
- **Privacy and speed.** Hancock describes customers who show only a small approved subset of data to humans, a DARPA human-trafficking project, and a COVID-related task where three engineers reached over 99% accuracy in one day versus a usual month.
- **Data as a depreciating asset.** Hancock says schema changes make old labels useless and that training data has a half-life, so companies now budget for it on a recurring basis.
- **What's next.** He plans to extend beyond text to images and to use labeling functions as monitoring hooks for data drift, and wants higher-level interfaces for expressing expertise.

## Quotes

> "80% of the work is making that training set." — Braden Hancock

> "training data is not a one-time cost. This is a capital expenditure. This is an asset that loses value." — Braden Hancock
