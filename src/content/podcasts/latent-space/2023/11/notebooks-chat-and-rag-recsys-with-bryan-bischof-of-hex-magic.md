---
title: Notebooks = Chat++ and RAG = RecSys! — with Bryan Bischof of Hex Magic
description: >-
  Bryan Bischof argues that notebooks are a better interface than chat, that RAG
  is a recommendation system for LLMs, and that LLM evals can and should be
  objective.
pubDate: '2023-11-29'
show: latent-space
url: >-
  https://lspace.beehiiv.com/podcast/s/latent_space_the_ai_engineer_podcast/notebooks_chat_and_rag_recsys_with_bryan_bischof_of_hex_magic
durationMin: 52
hosts:
  - Alessio Fanelli
  - swyx
guests:
  - Bryan Bischof
tags:
  - rag
  - recommendation-systems
  - evals
  - data-notebooks
  - ai-ux
draft: false
---
## Thesis

Bryan Bischof, head of AI at Hex, says the methods of data science and recommendation systems carry over directly to LLM products. He argues that a notebook's chain of atomic cells is a refined chat interface, that retrieval for an LLM is a recommendation problem, and that most quality gains come from evals, retrieval and post-processing, not from fine-tuning.

## Key points

- **Magic and the airlock.** Bischof describes Hex Magic as AI features inside the existing notebook, not a separate product. The "airlock" previews a generated chain of cells that the user accepts or rejects as a group.
- **GPT-4, no fine-tuning.** Hex runs GPT-3.5 Turbo and GPT-4 in production, and Bischof says GPT-4 is required for many tasks because customers range from Hex itself to Blue Bottle-style coffee data. Engineering hides notebook wrappers and Vega so the model writes SQL.
- **RAG as RecSys.** Models hallucinate tables and miss joins and WHERE clauses, so Hex builds warehouse-aware retrieval. Bischof maps this to the multi-stage recommender (retrieval, ranking, serving) described by Eugene Yan.
- **Objective evals.** He started on evals in February, reviewed every internal Magic request by hand, and tracks auxiliary metrics such as hallucinated tables or reused variable names alongside "right answer". His team includes a dedicated experimentalist.
- **Iron mine, not gold mine.** Borrowing Adam Azzam's phrase, Bischof says he sees more pickaxe sellers than prospectors, and when asked for impressive AI integrations at large companies could name only Copilot.
- **AI in the loop.** He prefers keeping the user at the centre with the AI as a tool. He would like to see a personal Memex and more AI hardware, and encourages people to show GPT to students and family.

## Quotes

> "And I would say that ultimately RAG is just Recs for LLM." — Bryan Bischof

> "if you can't get your evals to be sort of like objective, then you're not trying hard enough." — Bryan Bischof
