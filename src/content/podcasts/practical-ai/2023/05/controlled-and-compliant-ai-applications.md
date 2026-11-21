---
title: Controlled and compliant AI applications
description: >-
  Daniel Whitenack argues businesses need structured, validated LLM output and
  compliant hosting, and explains how his company Prediction Guard wraps open
  models to provide both.
pubDate: '2023-05-31'
show: practical-ai
episode: 225
url: 'https://share.transistor.fm/s/4817f35b'
durationMin: 50
hosts:
  - Chris Benson
  - Daniel Whitenack
guests: []
tags:
  - llm-guardrails
  - structured-output
  - compliance
  - open-models
  - enterprise-ai
draft: false
---
## Thesis

Chris Benson interviews his co-host Daniel Whitenack about Prediction Guard, the company Whitenack founded, and flags the conflict of interest up front. Whitenack argues two problems block business use of LLMs: inconsistent, unstructured output, and compliance worries about hosting and data. He says wrapping open access models with typed output and validation checks addresses both.

## Key points

- **Pressure from both sides.** Benson says legal and compliance teams face licensing, IP and compliance questions "with essentially no guidance". Whitenack cites an Accenture estimate that insurers could save $1.5 million per 100 full-time employees, so ignoring AI is also a liability.
- **Output you can parse.** Whitenack's example is sentiment extraction from a database comments column: the model may answer "positive", " positive" or a full sentence. He wants output limited to fixed choices such as POS, NEG and NEU, or to types like integer, float, JSON and YAML.
- **Hosting choices.** He calls a private OpenAI setup in Azure workable but costly, notes open models such as MosaicML's MPT are improving, and recommends model-agnostic workflows such as LangChain to lower switching costs.
- **Checks on output.** Prediction Guard adds a factuality score against reference text, toxicity detection, and consistency checks that accept an answer only if several models (he names MPT, Dolly and OpenAI among others) agree.
- **Ease over flexibility.** Whitenack credits Guardrails, Microsoft's Guidance and Matt Rickard's ReLLM, but says flexible query languages add complexity. Prediction Guard is working on generating constraints from a few examples of the desired JSON or CSV.
- **Open models catching up.** He argues that structure, retries and checks can bring open models closer to commercial output while keeping data private.

## Quotes

> "There's a whole host of challenging business problems with essentially no guidance." — Chris Benson

> "a vomit of text blob out of a large language model doesn't really actually do you that much good" — Daniel Whitenack
