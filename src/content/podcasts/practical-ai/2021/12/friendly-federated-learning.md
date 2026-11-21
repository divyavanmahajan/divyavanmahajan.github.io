---
title: "Friendly federated learning \U0001F33C"
description: >-
  Flower co-creator Daniel Beutel argues federated learning lets organisations
  train on far more data than they could share, and that frameworks must make it
  practical from prototype to production.
pubDate: '2021-12-07'
show: practical-ai
episode: 160
url: 'https://share.transistor.fm/s/9cf347ca'
durationMin: 47
hosts:
  - Chris Benson
  - Daniel Whitenack
guests:
  - Daniel Beutel
tags:
  - federated-learning
  - privacy
  - distributed-training
  - open-source
  - medical-ai
draft: false
---
## Thesis

Daniel Beutel, co-creator of the open-source Flower framework, argues that federated learning solves a data access problem: organisations that cannot pool data for regulatory or confidentiality reasons can still train models together. In practice, he says, the alternative is usually not centralised training but no model at all. Flower aims to make these workloads easy to start in research and then move into production.

## Key points

- **How it works.** Beutel uses hospitals as an example. A central server sends a model out, each site trains it for one or two epochs on local data, and the server aggregates the returned parameters, in the simplest case by weighted averaging. Rounds repeat until the model converges.
- **Confidentiality in unexpected places.** He describes manufacturers who would not share sensor data for predictive maintenance because it could reveal how many parts they produce. Competitors can also federate a model's backbone and train their own heads locally.
- **Cross-silo and cross-device.** Clients can range from embedded devices and phones to HPC clusters. Beutel cites Cambridge research showing federated training does not always have a higher CO2 impact, because passively cooled edge devices need no cooling energy.
- **Non-IID data and stragglers.** Clients hold data from different distributions and in very different amounts. Servers must handle slow clients, for example by accepting partial updates. On bias, he mentions algorithmic approaches such as q-fair federated learning, and access to more representative data.
- **Friendly by design.** Flower wraps existing TensorFlow, PyTorch or JAX code in a client class, often in under 20 lines. Libraries such as Opacus add differential privacy, and C clients (for example MISRA C in automotive) can talk to the server directly. By default the server does not persist client updates or log client-specific metrics.
- **Scale and impact.** Beutel says the new Virtual Client Engine ran 15 million clients, with 1,000 training concurrently, on average hardware. He is also excited about MedPerf, hosted by MLCommons, which uses federated evaluation for medical AI models.

## Quotes

> "It's either federated learning or nothing." — Daniel Beutel

> "having more data beats any fancy model architecture." — Daniel Beutel
