---
title: "Keeping the AI Revolution on the Rails with Shreya Rajpal of Guardrails AI"
date: 2023-05-23
show: cognitive-revolution
url: "https://www.cognitiverevolution.ai/keeping-the-ai-revolution-on-the-rails-with-shreya-rajpal-of-guardrails-ai/"
youtube: "https://www.youtube.com/watch?v=97plVwe5hxI"
hosts: ["Nathan Labenz"]
guests: ["Shreya Rajpal"]
description: "Shreya Rajpal argues that stochastic LLMs need a deterministic validation layer around them, with developer-defined correctness specs, re-asking and filtering, before they can be trusted as software components."
tags: ["llm-reliability", "output-validation", "guardrails", "prompt-injection", "ai-agents"]
source_transcript: "cognitive-revolution/episodes/2023/05/2023-05-23-keeping-the-ai-revolution-on-the-rails-with-shreya-rajpal-of-guardrail.md"
draft: false
---

## Thesis

Shreya Rajpal, creator of the open-source Guardrails AI library, tells Nathan Labenz that language models are powerful but inherently stochastic, so reliability cannot come from the model alone. Her answer is a specification layer: developers define what a correct output looks like, validate each part of it with code, classifiers or other LLMs, and let the system correct itself when checks fail. She argues this matters most when an LLM is used as a software abstraction rather than a creative writing aid.

## Key points

- **Origin and spec.** Rajpal built Guardrails to fix her own pain: prompts with "a lot of exclamation marks" were the only control developers had. The library uses RAIL (Reliable AI Markup Language) to describe an output schema separately from the prompt; Labenz notes the project had about 1,200 GitHub stars at recording.
- **Concrete validators.** Her examples include extracting terms from a Chase credit card agreement into JSON with range-checked interest rates, text-to-SQL correctness, and summarisation checks that match each summary sentence back to the source and drop redundant ones.
- **Self-correction and fixes on failure.** When validation fails, Guardrails can re-ask the model with the specific error, filter offending content, raise an exception or fix deterministically. The default is a no-op that only logs failures so developers can iterate.
- **Security and determinism.** Rajpal does not expect prompt injection to be solved by machine learning; she proposes sandwiching the model call with input and output validation. She qualifies "deterministic" as an ensemble of rules, controllable small models and LLM checks.
- **Agents and trust.** She says agents need validation at each step and that a "trust deficit" will limit delegation; Labenz takes the other side, expecting people to over-trust capable systems, citing Tesla FSD and medical use.
- **Market outlook.** Rajpal expects many model providers at different price and latency points, with OpenAI-shaped frameworks pushing competitors toward interoperability.

## Quotes

> "These are fundamentally stochastic systems and it's very hard to, there's a big long tail of what these stochastic systems can't have guarantees for." — Shreya Rajpal

> "You sandwich the LLM API call with input validation, output validation to essentially ensure that you have multiple layers of security" — Shreya Rajpal
