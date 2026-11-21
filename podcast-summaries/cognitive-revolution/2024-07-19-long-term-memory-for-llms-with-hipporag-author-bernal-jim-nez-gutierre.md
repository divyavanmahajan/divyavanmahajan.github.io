---
title: "Long-Term Memory for LLMs, with HippoRAG author Bernal Jiménez Gutierrez"
date: 2024-07-19
show: cognitive-revolution
url: "https://www.cognitiverevolution.ai/long-term-memory-for-llms-with-hipporag-author-bernal-jimenez-gutierrez/"
youtube: "https://www.youtube.com/watch?v=YQauz14Pvfk"
duration_min: 81
hosts: ["Nathan Labenz"]
guests: ["Bernal Jimenez Gutierrez"]
description: "Bernal Jimenez Gutierrez explains HippoRAG, a retrieval system modelled on the hippocampus that pre-builds a knowledge graph so multi-hop questions can be answered faster and cheaper."
tags: ["rag", "knowledge-graphs", "long-term-memory", "retrieval", "multi-hop-reasoning"]
source_transcript: "cognitive-revolution/episodes/2024/07/2024-07-19-long-term-memory-for-llms-with-hipporag-author-bernal-jim-nez-gutierre.md"
draft: false
---

## Thesis

Bernal Jimenez Gutierrez, a PhD candidate at Ohio State, argues that standard RAG and chain-of-thought retrieval cannot consolidate knowledge spread across many documents. HippoRAG borrows from the hippocampal memory indexing theory: index the corpus into an associative graph ahead of time, then let retrieval spread through that graph. Nathan Labenz pushes him on how far the idea could go without cost limits.

## Key points

- **Path finding versus path following.** Gutierrez's example is finding a Stanford professor who works on Alzheimer's when no single document says both. Iterative retrieval would have to read thousands of documents. Questions like the GAIA ones Labenz reads out are, in his view, longer chains of path following.
- **The brain mapping.** An LLM (GPT-3.5) plays the neocortex and extracts entities and open information extraction triples. Retrieval encoders such as Contriever and ColBERT act as the parahippocampal bridge and add synonym edges. A knowledge graph stands in for the hippocampus, and Personalized PageRank spreads probability out from the entities in the query.
- **Results.** HippoRAG roughly matches iterative retrieval with about a tenfold cut in online cost and time. Combined with iterative RAG it adds about 7 to 8 percent across benchmarks. GPT-3.5 was chosen because indexing with Claude or GPT-4 would have cost around $500 for the test subsets.
- **Known weaknesses.** PageRank traversal is naive. Entity-centric entry points fail on queries without named entities, such as a question about protons. The system holds only explicit facts, not reflections like "this story has a happy ending".
- **Long context is not a substitute.** Labenz reports that Gemini 1.5 Flash profiled him from 250 emails (about 250,000 tokens) for under 20 cents. Gutierrez says his own experiments show long-context models still struggle with multi-hop reasoning inside the prompt.
- **The no-budget version.** With a quarter per query, Gutierrez would let an LLM pick graph entry points from thousands of facts and guide traversal. He would add summarisation ideas from RAPTOR and MemWalker, building towards an automatically generated semantic web.

## Quotes

> "the hippocampal memory indexing theory basically posits that it's an index that just stores pointers to the actual memories in the neocortex" — Bernal Jimenez Gutierrez

> "this is with like a tenfold decrease in cost and time spent doing the online retrieval." — Bernal Jimenez Gutierrez
