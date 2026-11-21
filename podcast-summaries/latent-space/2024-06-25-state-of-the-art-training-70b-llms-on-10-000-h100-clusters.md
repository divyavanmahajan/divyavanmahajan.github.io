---
title: "State of the Art: Training >70B LLMs on 10,000 H100 clusters"
date: 2024-06-25
show: latent-space
url: "https://lspace.beehiiv.com/podcast/s/latent_space_the_ai_engineer_podcast/state_of_the_art_training_70b_llms_on_10_000_h100_clusters"
duration_min: 82
hosts: ["Alessio Fanelli", "swyx"]
guests: ["Jonathan Frankle", "Josh Albrecht"]
description: "Imbue's Josh Albrecht and Databricks' Jonathan Frankle argue that the unglamorous work of cluster bring-up, health checks, hyperparameter scaling and clean evals decides whether large model training succeeds."
tags: ["llm-training", "gpu-infrastructure", "model-evaluation", "hyperparameter-optimization", "open-source"]
source_transcript: "latent-space/episodes/2024/06/2024-06-25-state-of-the-art-training-70b-llms-on-10-000-h100-clusters.md"
draft: false
---

## Thesis

Josh Albrecht, CTO of Imbue, and Jonathan Frankle, chief AI scientist at Databricks, argue that the hard part of training large models is rarely discussed: getting thousands of GPUs to run reliably, choosing hyperparameters that scale, and measuring progress with trustworthy evals. Imbue is releasing infrastructure scripts, cleaned benchmarks and its CARBS tuner from training a 70B dense model, and Frankle endorses the effort as the difference between success and failure.

## Key points

- **Building a cluster from scratch.** Albrecht describes a 4,092-GPU H100 cluster across 511 machines with a three-tier InfiniBand network, about 12,000 cables, built with Voltage Park, Dell and Nvidia by an infrastructure team of three to six people. Working directly with vendors let Imbue get firmware fixes instead of restarting and hoping.
- **Failures are normal.** Others report about 3% of machines breaking each week; Albrecht says Imbue's rate is lower because it root-causes failures and automates health checks, including one that compares every boot log line against known output. A slow MFU decline turned out to be unsynchronised garbage collection.
- **Simple versus standard.** Imbue runs Bash, Python, SSH and Docker without Kubernetes and uses Uber's Kraken to distribute images. Frankle, running on six or seven clouds, standardises on Kubernetes and vanilla FSDP; he says networking was the hardest part of training DBRX, a 132B-parameter mixture-of-experts model.
- **CARBS and scaling.** CARBS, a cost-aware Pareto region Bayesian search, tunes at small scale so the 70B run works first time; Imbue checked one 14B run against predicted curves. Its metric is perplexity on multiple-choice answers, which also let CARBS tune the data mix.
- **Cleaned evals.** Imbue cleaned 11 benchmarks, rebuilt them to avoid contamination and gathered about 450,000 human judgments on ambiguity. Once ambiguous questions are removed, Albrecht says, many benchmarks are saturated.
- **Narrow usefulness over puzzles.** Frankle says his 12,000 Databricks customers want things like SQL-backed data chat, not abstract reasoning tests, and calls needle-in-a-haystack weak. Albrecht treats code as the general tool for agents.

## Quotes

> "Evaluation is the single hardest part of the whole thing." — Jonathan Frankle

> "people often build things that are more complicated than necessary to get the job done, and complication is the enemy of everything." — Jonathan Frankle
