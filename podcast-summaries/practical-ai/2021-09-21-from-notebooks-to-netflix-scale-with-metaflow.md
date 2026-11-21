---
title: "From notebooks to Netflix scale with Metaflow"
date: 2021-09-21
show: practical-ai
episode: 150
url: "https://share.transistor.fm/s/74c2ba01"
duration_min: 48
hosts: ["Daniel Whitenack"]
guests: ["Ville Tuulos"]
description: "Ville Tuulos argues that data science infrastructure should take compute, data access, orchestration and versioning off data scientists' hands so they can focus on modelling and iterate in production."
tags: ["mlops", "data-science-infrastructure", "workflow-orchestration", "metaflow", "open-source"]
source_transcript: "practical-ai/episodes/2021/09/2021-09-21-from-notebooks-to-netflix-scale-with-metaflow.md"
draft: false
---

## Thesis

Ville Tuulos, CEO of Outerbounds and former head of data science infrastructure at Netflix, argues that libraries and cloud hardware are no longer the bottleneck; the hard part is making them usable for data scientists and getting experiments close to production. Metaflow, which he started at Netflix, is opinionated about the lower layers of the stack (compute, data, orchestration, versioning) and leaves modelling tools and monitoring to the user.

## Key points

- **What changed since 2000.** Tuulos worked on self-organizing maps at a startup in 2000, when teams built their own libraries and racked their own servers. Today PyTorch, TensorFlow, XGBoost and the cloud are off the shelf, yet he says data scientists still have to learn Docker files and CI/CD, which eats cognitive bandwidth.
- **Why ML projects stall.** He names three blockers: technical integration, skills focus, and, the biggest, organisational. Netflix's experimentation culture let teams A/B test prototypes in production, accepting that most experiments fail by design.
- **Bottom-up origins.** When Tuulos joined Netflix in 2017, before SageMaker, MLflow and Kubeflow, the pieces existed but data scientists found them too hard to use. Under Netflix's freedom-and-responsibility culture, Metaflow spread organically rather than by mandate.
- **Cloud-first abstraction.** Users declare resources such as GPUs or memory per step; Metaflow packages code, runs containers on Kubernetes or AWS Batch, handles retries, and integrates with AWS Step Functions and Argo, with a local mode for testing.
- **Notebooks plus workflows.** Tuulos recommends notebooks for exploration, then moving code into Python flows defined with step decorators. Getting started is "pip install Metaflow", with a CloudFormation template for AWS.
- **Where it goes next.** He wants centralised, event-triggered scheduling linking ETL and ML instead of cron jobs at 3 a.m., and expects ML infrastructure to become as easy as Shopify made e-commerce, perhaps in five to 10 years.

## Quotes

> "It kind of feels that everything is possible, but I mean, nothing is really easy enough." — Ville Tuulos

> "Everybody always talks about going to production, but how do you come back from production and then keep iterating" — Ville Tuulos
