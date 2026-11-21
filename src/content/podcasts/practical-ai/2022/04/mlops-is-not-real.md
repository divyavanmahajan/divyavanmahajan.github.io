---
title: MLOps is NOT Real
description: >-
  OctoML CEO Luis Ceze argues that once a model is trained it should be treated
  as ordinary software, so everything after training belongs to DevOps rather
  than a separate MLOps discipline.
pubDate: '2022-04-26'
show: practical-ai
episode: 176
url: 'https://share.transistor.fm/s/444b43ae'
durationMin: 46
hosts:
  - Chris Benson
  - Daniel Whitenack
guests:
  - Luis Ceze
tags:
  - mlops
  - devops
  - model-deployment
  - inference
  - edge-ai
draft: false
---
## Thesis

Luis Ceze, CEO of OctoML, argues that MLOps should cover only data curation and model creation. Packaging, CI/CD, serving and monitoring should be plain DevOps. The hard step in between, turning a trained model into an optimised, deployable artifact for specific hardware, can and should be automated so data scientists and DevOps teams can each work as they already do.

## Key points

- **Progress since last year.** Ceze reports about 1,700 live attendees at the December TVM conference, the TVM Unity effort, OctoML growing to about 130 people, and a private hub of models pre-accelerated for different hardware.
- **Naming causes confusion.** Ceze suggests new labels are sometimes coined to attract investors. He says the trend is away from end-to-end platforms such as SageMaker or Azure ML towards best-in-class tools with clean integration points. Benson agrees that the model is just part of the software.
- **The handoff gap.** Today a specialised ML-infrastructure team sits between data scientists and DevOps, choosing libraries and compilers (TensorRT for NVIDIA, TVM for broader hardware) and weighing cloud cost. Ceze wants a data scientist to export a container that GitHub Actions and existing microservices can handle.
- **Security parallel.** Whitenack compares this to Snyk automating vulnerability checks. Ceze accepts the analogy but says the skills gap between model creators and systems engineers is much wider, and the automation needed is deeper.
- **Deployment in the loop.** Ceze does not want model creators constrained by hardware too early, but fast automated benchmarking could show how each candidate model would do in production. He stresses that real applications run ensembles of models.
- **Low code and the edge.** Ceze sees a path to low or no code for model creation, but not for defining the API that ties a model into an application. For Benson's edge-focused work, he sees automated benchmarks telling a model creator, for example, that a model will run on 85% of phones. In five years he hopes systems will decide automatically what runs on the edge and what runs in the cloud.

## Quotes

> "if you ask 10 people what ML Ops is, in this space, what ML Ops is, you're probably going to get 12 answers" — Luis Ceze

> "I want human creativity, ingenuity to go into making a better model and not have to worry about systems aspects too early" — Luis Ceze
