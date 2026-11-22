---
title: "Model inspection and interpretation at Seldon"
date: 2019-06-17
show: practical-ai
episode: 48
url: "https://share.transistor.fm/s/743c2f04"
duration_min: 44
hosts: ["Chris Benson", "Daniel Whitenack"]
guests: ["Janis Klaise"]
description: "Deployed models need more than throughput monitoring: explanations, outlier and drift detection belong in production, which Seldon's open source Alibi library aims to provide."
tags: ["interpretability", "model-deployment", "mlops", "kubernetes", "open-source"]
source_transcript: "practical-ai/episodes/2019/06/2019-06-17-model-inspection-and-interpretation-at-seldon.md"
draft: false
---

## Thesis

Janis Klaise, a data scientist at Seldon, argues that monitoring production models from a data science angle means explaining individual predictions and detecting outliers and data drift, not just tracking requests per second. Seldon built Alibi, an open source Python library of model explanation methods, because most existing code was hard-to-use research code.

## Key points

- **Seldon Core.** Klaise describes Seldon as an open core company. Seldon Core deploys models from any framework as Docker images on Kubernetes, and an enterprise layer adds a central dashboard, permissions and team collaboration. Whitenack says deploying a reading comprehension model took only a Python class with a predict function.
- **Silos versus small teams.** Klaise says data scientists at large enterprises such as banks often hand models to engineers with no feedback loop, while small companies expect people to cover several roles.
- **Inference graphs.** Seldon Core deployments can combine models in parallel for ensembling, route traffic for A/B tests or business rules, and include components such as explainers and outlier or concept drift detectors.
- **Alibi's design.** Alibi is standalone and works in a Jupyter notebook. Its interface mirrors scikit-learn: an optional fit step, then explainer.explain on a single instance. Early methods are black-box, needing only a predict function.
- **Anchors.** Klaise explains anchors, from the authors of LIME, using the US census income dataset: for one individual, marital status "separated" plus government work kept the same low-income prediction 95% of the time regardless of other features. Alibi also implements trust scores and counterfactual instances.
- **What's next.** Seldon planned to demo its enterprise product, Seldon Deploy, with live anchor explanations at CogX in London. Klaise recommends Christoph Molnar's free book "Interpretable Machine Learning".

## Quotes

> "in an ideal world, we would be the Scikit-learn of model explanations" — Janis Klaise

> "once they're kind of happy, then they just chuck it over the wall" — Janis Klaise
