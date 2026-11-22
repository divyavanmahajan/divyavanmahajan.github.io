---
title: "The landscape of AI infrastructure"
date: 2019-04-02
show: practical-ai
episode: 37
url: "https://share.transistor.fm/s/9b817c8f"
duration_min: 52
hosts: ["Chris Benson", "Daniel Whitenack"]
guests: []
description: "AI practitioners need little local hardware; the real infrastructure decisions are driven by data governance and by layering experimentation, pipelines and serving on top of compute and storage."
tags: ["ai-infrastructure", "mlops", "cloud-computing", "data-governance", "model-serving"]
source_transcript: "practical-ai/episodes/2019/04/2019-04-02-the-landscape-of-ai-infrastructure.md"
draft: false
---

## Thesis

Daniel Whitenack and Chris Benson argue that an AI practitioner can work from a modest laptop and should move to production-like cloud or on-prem environments as early as is reasonable. They describe AI infrastructure as layers: compute and storage at the base, then experimentation tools, automated pipelines and serving, with data governance shaping the choices before any platform is picked.

## Key points

- **Local setups are light.** Both hosts use a MacBook with Homebrew Python rather than Anaconda, plus Jupyter and Docker; Whitenack adds Vim and Postman. Benson says data prep, most of the work, happens locally, while training goes to the cloud or to his employer's hardware.
- **Buy versus rent.** Benson describes a crossover point: owning GPUs (such as NVIDIA DGX systems at Lockheed Martin) pays off only when training runs around the clock; otherwise cloud is cheaper. Whitenack, at a nonprofit, relies on the cloud because a "200 grand" box would never be approved.
- **Data drives the architecture.** Whitenack says his biggest blockers have been data issues, not compute: privacy, healthcare storage rules and GDPR audit trails. Benson has seen organisations relocate training and storage to other countries to fit local laws.
- **Experimentation spectrum.** Whitenack contrasts free tools (JupyterLab, Google Colab, Binder) with paid data science platforms (Domino, DataRobot, Databricks, H2O), which he sees as experiment-centred rather than production tools. Benson notes cloud vendors compete for students through courses such as deeplearning.ai on Colab.
- **Pipelines and serving.** Whitenack, a Pachyderm user, lists Airflow, Luigi and Kubeflow for automated retraining, and sketches a CI/CD flow where a GitHub push triggers Jenkins to retrain and update a model in TensorFlow Serving or Seldon. Benson says data scientists often forget CI/CD and deployment, increasingly at the edge.
- **Learning resources.** Whitenack recommends Google Colab for free GPU and TPU experiments and Intel's AI DevCloud for optimised TensorFlow and PyTorch on Xeon processors.

## Quotes

> "AI doesn't really do you any good. You know, if it just stays on your laptop, it has to get out there and be practical." — Daniel Whitenack

> "This thing you're working on only matters if it's usable in the real world out there as a piece of software." — Chris Benson
