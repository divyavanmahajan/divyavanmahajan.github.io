---
title: "Testing ML systems"
date: 2020-01-27
show: practical-ai
episode: 74
url: "https://share.transistor.fm/s/75950ab8"
duration_min: 48
hosts: ["Chris Benson", "Daniel Whitenack"]
guests: ["Tania Allard"]
description: "A production ML system is data, models and infrastructure together, and teams should test all three, score their maturity, and find where testing is weakest."
tags: ["mlops", "testing", "jupyter-notebooks", "reproducibility", "data-science"]
source_transcript: "practical-ai/episodes/2020/01/2020-01-27-testing-ml-systems.md"
draft: false
---

## Thesis

Tania Allard, a developer advocate at Microsoft and Python Software Foundation fellow, argues that testing an ML system means much more than measuring model accuracy. Data, features, model development and infrastructure all need tests, and her "ML score" rubric helps teams see which area needs work first.

## Key points

- **What an ML system is.** Allard defines it as the data sources, the pipeline into the model, training and prediction infrastructure, and how users reach the model (API, web app, mobile). Unlike deterministic software, the expected output is often unknown, so tests must cover data distributions, repeatability, bias and model staleness.
- **Why test.** Allard cites explainability, traceable predictions and catching implicit bias early. She adds that GDPR requires teams to show, export or delete a person's data on request, which needs data lineage.
- **Feature cost.** She warns that adding a feature can raise accuracy marginally while doubling or tripling compute, and that this trade-off should be tested.
- **Roles and collaboration.** Allard argues against R&D teams handing models over a wall to software engineers. Data scientists check feature distributions, correlations and privacy; ML engineers handle version control, peer review, hyperparameter impact and comparison with simpler models; infrastructure tests are often neglected.
- **The ML score.** For each test across data science, ML engineering and infrastructure: 0 points if absent, 1 if manual, 2 if automated in CI (GitHub Actions, Travis, Azure Pipelines, GitLab CI). The lowest-scoring area is where to start. Whitenack and Benson score themselves, with different gaps.
- **Notebooks.** Allard uses Jupyter for prototyping and parameterisation with Papermill. She recommends Git hooks that clear outputs, nbval regression tests, pinned environments and fast.ai's nbdev, and moving reused code into modules. She recommends Emily Freeman's "DevOps For Dummies" and pair programming with software engineers.

## Quotes

> "When you're testing a machine learning system or a machine learning model, in many cases, you don't even know what that end result is." — Tania Allard

> "I love Jupyter Notebooks, but I always try to use them within reasons." — Tania Allard
