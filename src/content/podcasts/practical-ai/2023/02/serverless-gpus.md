---
title: Serverless GPUs
description: >-
  Banana founder Erik Dunteman explains why serverless GPUs took so long,
  arguing that solving cold boots makes scale-to-zero inference practical for
  application developers.
pubDate: '2023-02-14'
show: practical-ai
episode: 211
url: 'https://share.transistor.fm/s/4d6d9bbf'
durationMin: 39
hosts:
  - Chris Benson
  - Daniel Whitenack
guests:
  - Erik Dunteman
tags:
  - serverless
  - gpu-infrastructure
  - inference
  - fine-tuning
  - autoscaling
draft: false
---
## Thesis

Erik Dunteman, founder of Banana, argues that serverless (scaling to zero servers when there is no traffic) has existed for CPUs for years but not for GPUs, because loading large models makes cold boots painfully slow. Banana focuses on real-time inference, and Dunteman expects per-user fine-tuned models to make scale-to-zero infrastructure essential.

## Key points

- **The cold boot problem.** On CPU platforms such as AWS Lambda a cold boot can take up to about 10 seconds. With GPUs, Dunteman says, a 20 gigabyte model must move from disk to CPU to GPU, which can take 10 minutes. The constraint is that idle models cannot occupy GPU RAM, so the aim is to keep weights as close to it as possible, for example cached on local disk.
- **Price over latency.** Replicas stay up for a configurable 10 seconds after a call by default. Dunteman is surprised how few users raise that idle time: most are more price-sensitive than latency-sensitive.
- **Stack and workflow.** Banana's infrastructure is about 95% Go, with Python for the user-facing HTTP template and C++ and CUDA in the runtime. Users fork one-click templates or push a custom repo to GitHub, and a CI pipeline builds and deploys it. He says Python, Hugging Face and Docker are enough, and many users are full-stack engineers.
- **Custom workloads dominate.** About 80% of deployments come from custom repos rather than templates, which Dunteman takes as validation of a platform over an ML-as-an-API approach. Users add tricks such as a warm-up flag in the JSON payload to pre-start servers.
- **Where serverless fits poorly.** Completely steady traffic, exploratory training that needs observability, and predictable batch jobs.
- **Advice and outlook.** Dunteman tells teams building in-house to skate to where the puck is going by picking a GPU cloud with an automation API and guaranteed capacity. Bring-your-own-AWS support will come eventually but loses much of the benefit of shared multi-tenant capacity.

## Quotes

> "if you have completely steady traffic all the time, don't use serverless." — Erik Dunteman

> "every human on earth, just like they have a phone in their pocket, they're going to have a fleet of models fine-tuned just on them." — Erik Dunteman
