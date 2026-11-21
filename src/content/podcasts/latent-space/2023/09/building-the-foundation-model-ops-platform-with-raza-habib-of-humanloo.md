---
title: Building the Foundation Model Ops Platform — with Raza Habib of Humanloop
description: >-
  Raza Habib argues prompts are now source code, so LLM apps need tooling for
  prompt management, evaluation and feedback, which is a separate category from
  classic MLOps.
pubDate: '2023-09-29'
show: latent-space
url: >-
  https://lspace.beehiiv.com/podcast/s/latent_space_the_ai_engineer_podcast/building_the_foundation_model_ops_platform_with_raza_habib_of_humanloop
durationMin: 81
hosts:
  - Alessio Fanelli
  - swyx
guests:
  - Raza Habib
tags:
  - llm-ops
  - prompt-engineering
  - evaluation
  - human-feedback
  - developer-tools
draft: false
---
## Thesis

Humanloop CEO Raza Habib tells swyx that LLM applications are stochastic and partly made of natural-language prompts. Prompts should therefore be versioned, evaluated and improved with the same care as code. He argues this "foundation model ops" work needs its own tools, built for product-focused software engineers rather than ML specialists, and that the workflow becomes harder to replace as usage grows.

## Key points

- **The pivot.** Humanloop first helped teams with annotated data for NLP. It pivoted to LLMs after InstructGPT, when Habib estimated only 300 to 400 companies might need such a product. In a two-week sales test they signed ten paying design partners by day two.
- **Three kinds of evaluation.** Habib separates evaluation during development, monitoring in production, and regression tests for every change. For subjective tasks, he says, user feedback is the only real ground truth and offline evals are proxies.
- **Three kinds of feedback.** Humanloop supports votes (thumbs up/down, which are rare), actions (implicit signals such as accepting, regenerating or editing, as Sudowrite tracks), and corrections (edited outputs, useful later for fine-tuning).
- **Enterprise customers.** He cites Duolingo, whose CTO was the first contact, Gusto's job-ad generator, and Amex GBT. A new free tier charges only past three users or a certain data volume, and about ten companies are in a closed beta for evals.
- **Category and roles.** Habib prefers "foundation model ops" to "LLM Ops". He thinks MLOps companies will struggle to pivot because both their buyers and their metrics are different. He doubts "prompt engineer" will still be a separate job title in five years.
- **Market views.** Almost no customers ask about prompt injection, since few let models take actions. He thinks GPT-4 changed rather than got dumber, so teams need regression tests. Among unsolved problems he names continual learning, pointing to a DeepMind paper on in-context reinforcement learning.

## Quotes

> "Like, natural language written instructions have become part of your source code, and they have impacts on your product quality." — Raza Habib

> "But you are, you are building on shifting sand whenever you're building on someone else's platform." — Raza Habib
