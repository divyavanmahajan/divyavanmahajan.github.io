---
title: "RAG Is A Hack - with Jerry Liu from LlamaIndex"
date: 2023-10-05
show: latent-space
url: "https://lspace.beehiiv.com/podcast/s/latent_space_the_ai_engineer_podcast/rag_is_a_hack_-_with_jerry_liu_from_llamaindex"
duration_min: 68
hosts: ["Alessio Fanelli", "swyx"]
guests: ["Jerry Liu"]
description: "Jerry Liu argues retrieval-augmented generation is a hack, but a good and easy one that beats fine-tuning today, while learned, end-to-end approaches may eventually absorb it."
tags: ["rag", "llamaindex", "retrieval", "fine-tuning", "evaluation"]
source_transcript: "latent-space/episodes/2023/10/2023-10-05-rag-is-a-hack-with-jerry-liu-from-llamaindex.md"
draft: false
---

## Thesis

Jerry Liu, co-founder of LlamaIndex, calls RAG a hack: a fixed model plus hand-tuned algorithms (chunking, top-k lookup, hybrid search) that stuff context into a prompt, none of it optimised end to end. He still recommends it as the default because it is easy to adopt, gives source transparency and access control, and fits the 80/20 rule, while expecting fine-tuning and new architectures to take over parts of its job over time.

## Key points

- **Origin story.** Liu left Robust Intelligence, where Harrison Chase of LangChain was a teammate, after hacking on GPT-3 context-window limits; the November 9 "GPT Tree Index" had GPT-3 build and traverse a summary tree, which he admits did not work very well.
- **Why context windows don't kill RAG.** Enterprise data runs to gigabytes or petabytes; Liu says uploading 50 GB per query would be wasteful, and RAG lets builders trade cost and latency against performance.
- **Fine-tuning knowledge.** He believes new knowledge can be fine-tuned in, but his attempts with OpenAI's endpoints, training on generated question-answer pairs, have not worked well yet.
- **Retrieval is the bottleneck.** Liu says 2k-4k tokens of context is enough if retrieval finds the right chunks; he points to chunking, metadata, embedding fine-tuning and query-side transforms (an idea from Joe of Vespa) as levers, and says vector-store lookup algorithms are mostly solved.
- **Build it from scratch.** He wants every AI engineer to build RAG once, because the three-line quickstart hides the parameters, and he says 90% of users he talks to ask how to improve performance.
- **Evaluation and SEC Insights.** He suggests checking end-to-end output first, then retrieval with ranking metrics and synthetic GPT-4-generated question sets. LlamaIndex open-sourced SEC Insights, a full-stack 10-K/10-Q chatbot, as an app template.

## Quotes

> "One is like RAG is basically just, just a hack. But it turns out it's a very good hack" — Jerry Liu

> "for what it's worth, I don't think the final state will be RAG." — Jerry Liu
