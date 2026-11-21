---
title: High Agency Pydantic > VC Backed Frameworks — with Jason Liu of Instructor
description: >-
  Jason Liu argues that typed, structured outputs via Pydantic and a thin
  library like Instructor beat heavy frameworks, and explains why he chose
  consulting over a venture-backed startup.
pubDate: '2024-04-19'
show: latent-space
url: >-
  https://lspace.beehiiv.com/podcast/s/latent_space_the_ai_engineer_podcast/high_agency_pydantic_vc_backed_frameworks_with_jason_liu_of_instructor
durationMin: 52
hosts:
  - Alessio Fanelli
  - swyx
guests:
  - Jason Liu
tags:
  - structured-outputs
  - function-calling
  - pydantic
  - ai-engineering
  - open-source
draft: false
---
## Thesis

Jason Liu, creator of Instructor, tells Alessio Fanelli and swyx that the real gain from function calling is typed responses from language models, and that a small library in the spirit of Requests, not a Django-style framework, is all most developers need. He keeps Instructor a utility and runs a consulting business instead of raising venture money, because he does not see a billion-dollar company in it. (The transcript has no speaker labels; attributions follow the conversation's context.)

## Key points

- **From skeptic to convert.** Liu spent five years at Stitch Fix building Flyte, a recommendation framework he says had over 80% adoption, and was bearish on language models until ChatGPT, after which he wrote the company an apology letter.
- **Function calling over JSON mode.** Liu says JSON mode is often worse because it does not specify the schema; function calling lets you define lists, fields and validators, giving autocomplete and type checking.
- **Rank your tools.** With 20 to 60 or more functions, Liu would store tool specs in a vector database and train a ranker such as XGBoost on mean reciprocal rank, rather than putting every function in one call.
- **Anthropic in production.** Liu reports parsing errors on about half a percent of traffic, such as numbers returned as strings, but praises Sonnet and Haiku for cost, citing a 70% cost reduction for consumer apps.
- **Workflows, not loops.** He prefers planning a DAG of steps (the LLM compiler route) over ReAct-style loops, since workflows can be fixed component by component and fine-tuned.
- **Agency and process.** Liu says high-agency people track process metrics, likening it to weighing pounds of clay in pottery, and argues app-layer startups should promote motivated software engineers rather than hire ML engineers who leave for research labs.

## Quotes

> "really the difference is LLMs give you strings and Instructor gives you data structures." — Jason Liu

> "the agency is just, like, the norm of the vector. What also matters is the direction, right?" — Jason Liu
