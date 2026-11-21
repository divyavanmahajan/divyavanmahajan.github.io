---
title: 'Mistral 7B and the Open Source Revolution With Arthur Mensch, CEO Mistral AI'
description: >-
  Arthur Mensch argues that small, efficient open models and a shared research
  culture beat closed labs, and that today's open-source safety fears are
  unproven and enable regulatory capture.
pubDate: '2023-11-09'
show: no-priors
episode: 40
url: 'https://www.youtube.com/watch?v=EMOFRDOMIiU'
youtube: 'https://www.youtube.com/watch?v=EMOFRDOMIiU'
durationMin: 33
hosts:
  - Sarah Guo
  - Elad Gil
guests:
  - Arthur Mensch
tags:
  - open-source-ai
  - small-models
  - scaling-laws
  - ai-safety
  - ai-regulation
  - european-ai
draft: false
---
## Thesis

Arthur Mensch, CEO and co-founder of Mistral AI, tells Sarah Guo and Elad Gil that models can be compressed much further than people thought. In his view, cheap inference is what makes AI usable, and open sharing of research is what drove the field's progress. He argues that bans on open source would mostly protect large incumbents and would not make anyone safer.

## Key points

- **From DeepMind to Mistral.** Mensch says he joined a 10-person LLM team at DeepMind and worked on retrieval (Retro), sparse mixture of experts using optimal transport, and Chinchilla. Chinchilla showed that training data should grow with model size, which gave better models that were four times cheaper to serve.
- **Small models, cheap inference.** Mensch says Mistral 7B shows how far compression can go: it runs on a MacBook Pro and is still useful. Low inference cost matters for agents. Mistral is also training larger models, partly so it can distil better small ones.
- **Why open source.** Mensch argues that machine learning moved quickly while labs published openly, until about 2020. He says the closed regime that followed is bad for science because the technology still reasons poorly and still needs new techniques.
- **Safety and regulation.** Mensch says he finds no evidence that an LLM gives bad actors more help than a search engine, or that knowledge is the bottleneck for misuse. He calls the 10^26 compute threshold arbitrary and says capabilities, not flops, should be measured. He traces the bioweapon narrative to a remark in the GPT-4 report that was then amplified by policy papers citing each other.
- **Guardrails as modules.** Mistral ships the raw model plus separate filters for inputs and outputs. In Mensch's view, application makers should be required to meet the rules, so that guardrail providers compete.
- **Platform and Europe.** Mensch describes a shared API alongside self-hosted enterprise deployments. He credits France, the UK and Poland for producing strong mathematicians, and DeepMind and Meta for seeding a Paris ecosystem that now has hundreds of startups.

## Quotes

> "assuming that the model should be well behaved is I think a wrong assumption you need to make the assumption that the model should know everything" — Arthur Mensch

> "nothing is showing that um a llm is actually marginally better than than a search engine to to find knowledge" — Arthur Mensch
