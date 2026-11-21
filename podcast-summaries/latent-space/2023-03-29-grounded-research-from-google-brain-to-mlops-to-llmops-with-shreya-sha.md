---
title: "Grounded Research: From Google Brain to MLOps to LLMOps — with Shreya Shankar of UC Berkeley"
date: 2023-03-29
show: latent-space
url: "https://lspace.beehiiv.com/podcast/s/latent_space_the_ai_engineer_podcast/grounded_research_from_google_brain_to_mlops_to_llmops_with_shreya_shankar_of_uc_berkeley"
duration_min: 42
hosts: ["Alessio Fanelli", "swyx"]
guests: ["Shreya Shankar"]
description: "Shreya Shankar argues that most production ML pain comes from data management and the gap between development and production, and that LLM pipelines are repeating the same MLOps problems."
tags: ["mlops", "llmops", "data-management", "data-validation", "ml-research"]
source_transcript: "latent-space/episodes/2023/03/2023-03-29-grounded-research-from-google-brain-to-mlops-to-llmops-with-shreya-sha.md"
draft: false
---

## Thesis

Shreya Shankar, a database PhD student at UC Berkeley, argues that the hard part of production machine learning is data management, not modelling. She wants development and production to behave the same way, with models treated as continuously recomputed data transformations. She sees early LLM applications rebuilding the same improvised stack that MLOps teams built before.

## Key points

- **Three Vs from interviews.** Shankar's interview study, which used grounded theory, found velocity, validation and versioning as the recurring themes. Even mature teams at large companies stay highly experimental: many attempts for a few that stick.
- **Dev/prod gap.** Shankar says the two environments differ at every layer: hardware (GPUs vs clusters), execution (perfectly fresh features in training vs features generated weekly or daily in production) and interface (notebooks vs scheduled jobs). She also flags easy data leakage, such as running a summary query before the train/test split.
- **Her thesis system.** She is building a pipeline system in which training is a recurring process that monitors data distributions and refits automatically. Her goal is that the accuracy measured in development matches what is seen after deployment.
- **Practical advice.** Shankar recommends versioning code and data (even just saving training-set copies to S3, or using DVC, Weights & Biases or MLflow) and basic data validation for completeness, schema and frequent values. She says generic observability tools such as Monte Carlo produce false positives for ML.
- **LLMOps today.** On model choice, Shankar says a team's ability to host and maintain a model matters more than its size, and APIs are often the better option. LLM pipelines she has seen combine changing prompts, database lookups injected into prompts and many output filters.
- **Academia vs industry.** She says PhD students cannot compete with companies on compute or data, so should pick different problems. She predicts widespread frustration with data management when teams try to move LLM prototypes into production.

## Quotes

> "Models are views that are frequently recomputed over your data, to use database speak." — Shreya Shankar

> "the number that you get at development time, that should be the number that you get when you deploy." — Shreya Shankar
