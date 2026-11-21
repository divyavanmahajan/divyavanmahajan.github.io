---
title: Practical workflow orchestration
description: >-
  Prefect's Adam Azzam argues that LLM pipelines need orchestration with
  retries, caching, transactions and observability, and that deterministic LLM
  workflows solve most business problems before agents do.
pubDate: '2024-10-15'
show: practical-ai
episode: 291
url: 'https://share.transistor.fm/s/483a51a6'
durationMin: 58
hosts:
  - Chris Benson
  - Daniel Whitenack
guests:
  - Adam Azzam
tags:
  - workflow-orchestration
  - llm-workflows
  - agents
  - observability
  - python
draft: false
---
## Thesis

Adam Azzam, principal product manager at Prefect, argues that running LLM calls at scale exposes the same failure modes as classic data pipelines, plus a new one: dynamic behaviour that you cannot plan for in advance. He presents workflow orchestration (what to run, where, when, and what to do on failure) together with observability as the way to make AI applications durable. He also says agents should be adopted only where deterministic workflows fall short.

## Key points

- **Learned the hard way.** Azzam built a job-search co-pilot in early 2023 that made millions of LLM calls a week. He found Airflow hard to debug, and a friend running conversational AI at Square helped him rewrite his pipelines in Prefect in one afternoon.
- **Why LLM pipelines fail.** He lists flaky APIs, schema drift, scraped pages that change, and early models that failed to return the requested JSON. He says LLMs add a "dynamism" that classic ETL tooling never had to handle.
- **Prefect basics.** Prefect is an open-source Python library; version 3 came out the month before the recording. A flow decorator adds retries, timeouts, caching and transactions, and the same code can be served on a server or deployed to Kubernetes or Amazon ECS.
- **Observability.** The UI shows successes and failures across thousands of runs. Prefect Cloud adds AI summaries of errors, so users do not have to read huge stack traces.
- **Marvin and ControlFlow.** Marvin began as a mascot, became a Slack bot serving a community of 30,000 data engineers, and is now an LLM framework with more than 5,000 GitHub stars. ControlFlow is Prefect's agent workflow system.
- **What comes next.** Azzam thinks the hard resiliency problems will shift to planning, which needs idempotency and transactions to roll back bad multi-step plans. In time he expects LLMs to provision infrastructure and parallelise jobs on their own.

## Quotes

> "I like to think about workflow orchestration as if you tell us what to run, where to run it, when to run it, and what to do when it fails." — Adam Azzam

> "structured outputs from OpenAI managed to wipe out just a whole host of your like classic resiliency issues." — Adam Azzam
