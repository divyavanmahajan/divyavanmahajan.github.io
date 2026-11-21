---
title: Creating instruction tuned models
description: >-
  Label Studio's Erin Mikail Staples argues that human feedback from domain
  experts, careful annotation instructions and transparent open data matter as
  much as the model in building instruction-tuned LLMs.
pubDate: '2023-05-16'
show: practical-ai
episode: 223
url: 'https://share.transistor.fm/s/e4bc043b'
durationMin: 27
hosts:
  - Daniel Whitenack
guests:
  - Erin Mikail Staples
tags:
  - rlhf
  - data-labeling
  - fine-tuning
  - open-data
  - llms
draft: false
---
## Thesis

Recorded at ODSC East in Boston, Daniel Whitenack talks with Erin Mikail Staples, developer community advocate at Label Studio, about reinforcement learning from human feedback (RLHF). Staples argues that prompt engineering will never match retraining on data shaped by subject matter experts, that the context of the problem should decide model size, and that how data is labelled and published needs to be disclosed.

## Key points

- **Human signal beats prompting.** Staples, who has a journalism and liberal arts background, says large generative models can all be improved with human feedback, and points to Bloomberg retraining on its own financial data as an example. She, Label Studio CTO Nikolai and Jimmy Whitaker built an open-source RLHF repo based on GPT-2 that runs in a Google Colab notebook.
- **The RLHF workflow.** Using an opossum example, she walks through ranking two model outputs, feeding rankings into a reward or preference model, adding an update rule so the model does not just game the reward, and combining it with a copy of the original model to prevent drift.
- **Context over size.** Her hobby project on a "Naked and Afraid" survival dataset does not need a large foundation model; thinking about the problem first saves time, energy and compute, she says.
- **Annotation is harder than it looks.** At an internal Label Studio labelling competition, Staples sped through and got the lowest accuracy score. Whitenack urges data scientists to take part in labelling themselves.
- **Open data and disclosure.** Staples credits open data, which she says got federal funding under the Obama administration, with teaching her Python, but warns it is often messy (she cites the 2020 census). She wants people to publish data and how it was processed, and notes academic research requires disclosing how annotators were paid and prepared.
- **Accessible tooling.** She highlights Hugging Face Spaces and in-browser tools as making ML more accessible.

## Quotes

> "The details that you give your annotation team can really directly influence the model." — Erin Mikail Staples

> "we need more of the humanities in data science because we're missing the context." — Erin Mikail Staples
