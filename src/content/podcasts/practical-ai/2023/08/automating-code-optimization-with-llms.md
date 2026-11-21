---
title: Automating code optimization with LLMs
description: >-
  TurinTech's Mike Basios argues LLMs can turn slow code into faster code when
  generation is paired with compile, test and benchmark feedback loops.
pubDate: '2023-08-29'
show: practical-ai
episode: 237
url: 'https://share.transistor.fm/s/edad1d61'
durationMin: 45
hosts:
  - Chris Benson
  - Daniel Whitenack
guests:
  - Mike Basios
tags:
  - code-optimization
  - llms
  - developer-tools
  - fine-tuning
  - enterprise-ai
draft: false
---
## Thesis

Mike Basios, CTO and co-founder of TurinTech, argues that code optimization, long a manual job for specialists with profilers and compiler flags, can be automated by treating it like translation from slow code to fast code. The key is not a single prompt but an iterative loop in which LLM suggestions are compiled, tested and benchmarked, with the results fed back to the models.

## Key points

- **From rules to LLMs.** Basios traces TurinTech's roots to a 2018 paper on automatically choosing better data structures; before LLMs, most refactoring tools relied on rule-based pattern transformations.
- **Optimization in CI/CD.** TurinTech's tool, Artemis, runs after unit, integration and security scans and recommends changes such as a 20% CPU or execution-time gain, optimizing several objectives (speed, memory, CPU) that often trade off.
- **Feedback loops beat one-shot prompts.** Basios compares the process to grading essay drafts: variations from different LLMs are scored on speed, fed back and improved, which he says cut execution time of an open source library by 30%. Compiler errors and failing tests are returned to the model automatically.
- **Guarding against hallucination.** He aims for minimal changes first (data structures, then single and nested loops) and delivers them as pull requests that developers still validate, noting many open source projects lack passing tests.
- **Private models for private code.** A large technology client refused to send code to OpenAI, so TurinTech deployed open source models such as Llama 2 on premise, letting the client build its own fine-tuning data. Basios advises starting with closed APIs unless deployment is your business, and keeping workflows LLM-agnostic.
- **Productivity and headcount.** Basios says developers with Copilot or ChatGPT will outperform those without, and that managers will need fewer developers; a colleague described himself as a manager of the LLM rather than a coder.

## Quotes

> "That doesn't mean that will be beautiful code necessarily, but it will be faster for the hardware that you need to run it." — Mike Basios

> "So it is like you have a very, very good assistant next to you that you should use. Otherwise, you are losing." — Mike Basios
