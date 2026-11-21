---
title: "Guaranteed quality and structure in LLM outputs - with Shreya Rajpal of Guardrails AI"
date: 2023-05-16
show: latent-space
url: "https://lspace.beehiiv.com/podcast/s/latent_space_the_ai_engineer_podcast/guaranteed_quality_and_structure_in_llm_outputs_-_with_shreya_rajpal_of_guardrails_ai"
duration_min: 62
hosts: ["Alessio Fanelli", "swyx"]
guests: ["Shreya Rajpal"]
description: "Shreya Rajpal argues LLMs will never be deterministic, so production apps need a validation layer that enforces structure and semantic contracts on outputs and corrects failures."
tags: ["llm-validation", "structured-outputs", "guardrails", "text-to-sql", "open-source"]
source_transcript: "latent-space/episodes/2023/05/2023-05-16-guaranteed-quality-and-structure-in-llm-outputs-with-shreya-rajpal-of.md"
draft: false
---

## Thesis

Shreya Rajpal, creator of the open-source Guardrails AI package, argues that longer context, lower latency and cheaper inference will all arrive, but the lack of determinism in deep learning models will not go away. Reliable LLM applications therefore need a layer that specifies what a good output looks like, validates every output against it and handles failures, combining LLMs with rules, heuristics and classical ML.

## Key points

- **Spec plus enforcement.** Rajpal describes Guardrails as a two-part system: RAIL, an XML-based markup for output structure, types and semantic checks, plus code that builds better prompts, validates outputs and corrects them. It is model agnostic: any string-in, string-out callable works.
- **Why XML.** She started code-first but found Python classes too verbose; XML lets each field carry descriptions (a "proxy prompt"), validity criteria and HTML-like event handlers for failures. A code-first version and other markup formats are in the works.
- **No determinism, even at temperature zero.** Rajpal notes that the same input can give different outputs and that hosted models change underneath developers; one of her own prompts broke after an internal model update.
- **Validators as contracts.** The package ships about 20 validators (profanity-free, valid URL, faithful summaries). Bug-free SQL runs queries in a sandbox built from the schema and feeds errors back to the model; cheaper fixes such as fuzzy-matching table names avoid extra LLM calls.
- **Agents and plugins.** She sees guardrails as essential for agents and for business rules such as "don't mention competitors", which prompts alone cannot guarantee.
- **Career lessons.** Rajpal recalls Ian Goodfellow at Apple asking for help on Slack after about 45 seconds, which taught her the job is to solve the problem, not to solve it alone.

## Quotes

> "Like, fundamentally, machine learning models, deep learning models specifically, like, are impossible to add guarantees on." — Shreya Rajpal

> "So you would need kind of this ensembling basically of, of LLMs, of, like, these really powerful models, along with, like, deterministic guarantees, rule-based heuristics, et cetera." — Shreya Rajpal
