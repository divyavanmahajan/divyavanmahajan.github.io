---
title: >-
  This Is a Fight Worth Having: The Case for Open Source AI | Raffi Krikorian,
  Mozilla CTO
description: >-
  Mozilla CTO Raffi Krikorian argues open source AI wins when economics and
  application maturity line up, so teams should build an easy exit from closed
  APIs from day one.
pubDate: '2026-01-27'
show: turing-post
url: >-
  https://www.turingpost.com/podcast/s/turing_post/this_is_a_fight_worth_having_the_case_for_open_source_ai_raffi_krikorian_mozilla_cto
durationMin: 26
hosts:
  - Ksenia Se
guests:
  - Raffi Krikorian
tags:
  - open-source-ai
  - ai-economics
  - small-models
  - data-ownership
  - ai-infrastructure
draft: false
---
## Thesis

Raffi Krikorian, CTO of Mozilla, tells Ksenia Se that open source AI cannot win on values alone. Values and economics both have to work. He thinks the switch happens once an application is mature, not once a company reaches a certain size. His goal is to make the open choice possible earlier, through a shared "LAMP stack for AI" and tools that keep a way out of closed providers.

## Key points

- **Maturity, not size.** Krikorian points to Pinterest's report that it saved $10 million by moving to open models after it got past prototyping. Small teams still iterating are better served by the OpenAI API, he says, because putting together an open stack means picking evaluation and tracing providers yourself.
- **A LAMP stack for AI.** He proposes four layers (compute, model, data, developer experience) with standards between them. He names OpenRouter, MCP, AI2, ETH Zurich, Databricks, LangChain and Flower AI as pieces of it. What is missing, in his view, is the connective glue for developers. Compute is the hardest layer to influence.
- **Specialise later.** Krikorian compares it to Twitter moving from Ruby on Rails to the JVM: prototype with a general model, then move parts to models like Qwen or to on-device models when you need offline use (for example in parts of Africa) or low latency (browser autocomplete).
- **Own your context.** The Mozilla Data Collective is building a two-sided marketplace for provenance-tracked data, such as audio from radio stations in many languages. Krikorian also wants user context to be portable, so that the user owns their context rather than the model provider.
- **Lessons from the browser.** Ksenia Se asks how to avoid a repeat of Chrome cutting Firefox to 5%. Krikorian says Firefox still won the larger fight, because Google had to ship an open source browser and respect web standards. He compares this to Signal pushing WhatsApp and others toward encryption.
- **Practical advice.** Add a small abstraction layer such as Mozilla's Choice Suite or any-llm early in the project, and keep track of what the open ecosystem is shipping.

## Quotes

> "I think that it is an unfair thing to assume that open source wins because of values." — Raffi Krikorian

> "give yourself the exit door as early as you can so that you can then do it later when the time is right." — Raffi Krikorian
