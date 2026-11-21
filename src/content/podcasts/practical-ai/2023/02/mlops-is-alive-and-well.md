---
title: MLOps is alive and well
description: >-
  The hosts of Practical AI and the MLOps Community podcast argue that
  generative models do not make MLOps obsolete; they add moving parts that make
  operations engineering more important.
pubDate: '2023-02-07'
show: practical-ai
episode: 210
url: 'https://share.transistor.fm/s/652123fd'
durationMin: 57
hosts:
  - Chris Benson
  - Daniel Whitenack
guests:
  - Demetrios Brinkmann
  - Mihail Eric
tags:
  - mlops
  - generative-ai
  - devops
  - synthetic-data
  - ml-engineering
draft: false
---
## Thesis

In a joint episode with the MLOps Community podcast, Demetrios Brinkmann and Mihail Eric argue that MLOps is mostly a software engineering discipline for getting models from research into reliable production. Asked whether foundation models will make it obsolete, all four speakers conclude the opposite: Eric and Whitenack say generative systems such as GPT-3 and ChatGPT were themselves operations achievements, and chaining models together only adds operational burden.

## Key points

- **What MLOps is.** Eric places it at the intersection of data science, software engineering and DevOps. Brinkmann frames it as "N plus one": not one model in production but a repeatable process. Whitenack separates experiment tracking (Weights & Biases, ClearML) from the harder work of serving models to real users.
- **Engineers versus data scientists.** Brinkmann says it is easier for a software engineer to move into MLOps than for an ML researcher. Eric recalls DevOps people being puzzled when data scientists presented unit testing as a new idea.
- **Will MLOps get "Hadooped"?** Brinkmann asks whether large models will make MLOps legacy. He hopes LLMs can write YAML and set up Kubernetes clusters; Benson says Kubernetes setup is still painful.
- **Rick and Mortify.** Eric describes a toy app combining Stable Diffusion, DALL-E and GPT-3 to generate storyboarded fan episodes of Rick and Morty from a user's premise.
- **Synthetic data feedback loop.** Whitenack worries that future web crawls will be filled with model output. Eric sees possible gains in writing quality but warns models could overfit to a narrow distribution, such as marketing copy.
- **You are not Google.** Brinkmann says teams set themselves up to fail by copying Google's maturity levels; Eric says the right approach depends on budget, maturity and open source versus tools like SageMaker. Brinkmann adds that VCs have moved on from MLOps to generative AI.

## Quotes

> "And the dirty secret, I think, is that, yes, it is just DevOps, but then you sprinkle a little bit of data on it." — Demetrios Brinkmann

> "It's not the fact that there was this new scientific achievement that we really came up with. It was really like an engineering achievement." — Mihail Eric
