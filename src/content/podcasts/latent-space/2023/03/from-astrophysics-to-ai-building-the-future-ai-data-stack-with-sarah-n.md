---
title: >-
  From Astrophysics to AI: Building the future AI Data Stack — with Sarah Nagy
  of Seek.ai
description: >-
  Seek.ai founder Sarah Nagy argues natural-language data querying must be built
  for accuracy first, automating repetitive ad hoc analysis while leaving new
  ideas and deep research to people.
pubDate: '2023-03-10'
show: latent-space
url: >-
  https://lspace.beehiiv.com/podcast/s/latent_space_the_ai_engineer_podcast/from_astrophysics_to_ai_building_the_future_ai_data_stack_with_sarah_nagy_of_seek_ai
durationMin: 38
hosts:
  - Alessio Fanelli
  - swyx
guests:
  - Sarah Nagy
tags:
  - text-to-sql
  - data-analytics
  - enterprise-ai
  - semantic-layer
  - llmops
draft: false
---
## Thesis

Sarah Nagy, a former astrophysics researcher and quant who most recently worked at Citadel, explains to Alessio Fanelli and swyx why she built Seek.ai, a natural-language interface for business users to query company data. She argues that because LLMs produce plausible but sometimes wrong output, a data product has to be designed around trustworthy answers, and that AI will take over tedious ad hoc requests rather than replace data teams.

## Key points

- **The pain point.** Nagy says colleagues constantly asked her to pull simple data for customer meetings, which took time away from higher-value research; Seek aims to remove that queue.
- **The improv analogy.** Drawing on her improv comedy experience, she compares LLMs to an actor playing a doctor: they say believable things that may not be factual, which is dangerous when generating code against real data.
- **Accuracy over self-serve.** She recalls business users misusing earlier self-serve tools, and says Seek adds guardrails and a collaboration workflow with the data team; it has a patent pending.
- **Semantic layer.** Nagy expects increasingly fine-grained semantic layers, mapping natural-language metrics to SQL or Python, to give business users better access; she credits dbt with giving teams a place to organise that code.
- **Models and measurement.** Seek uses whatever performs best, combining third-party and in-house models in a proprietary multi-model architecture, and judges performance by customer happiness rather than benchmarks.
- **Limits of generation.** She argues models predict the most likely output, so new ideas and long-form research stay with people; she names LangChain, GPT Index and the EleutherAI Discord as projects she follows.

## Quotes

> "they can say things that sound believable, but you know, they're not necessarily true." — Sarah Nagy

> "My philosophy is build something that provides accurate results and don't cut corners around that." — Sarah Nagy
