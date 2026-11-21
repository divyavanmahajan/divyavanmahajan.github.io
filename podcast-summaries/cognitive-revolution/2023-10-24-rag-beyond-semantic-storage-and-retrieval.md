---
title: "RAG & Beyond: Semantic Storage and Retrieval"
date: 2023-10-24
show: cognitive-revolution
url: "https://www.cognitiverevolution.ai/rag-beyond-semantic-storage-and-retrieval/"
youtube: "https://www.youtube.com/watch?v=fDmQnB8Ga6g"
duration_min: 87
hosts: ["Nathan Labenz"]
guests: ["Anton Troynikov"]
description: "Chroma's Anton Troynikov argues retrieval quality, not context stuffing, decides whether RAG works, and that the data layer should become an adaptive feedback loop owned in-house."
tags: ["rag", "vector-databases", "embeddings", "retrieval", "enterprise-ai"]
source_transcript: "cognitive-revolution/episodes/2023/10/2023-10-24-rag-beyond-semantic-storage-and-retrieval.md"
draft: false
---

## Thesis

Anton Troynikov, founding CTO of Chroma, argues that retrieval-augmented generation only works well in production when teams measure retrieval quality and return relevant information without distracting noise. He sees the data layer turning into a control loop that adapts to user feedback, and expects companies to keep more of that loop in-house. Nathan Labenz tests these ideas against his own RAG work for the executive-assistant company Athena.

## Key points

- **Wartime mode.** Troynikov says Chroma has a clear mandate: build a horizontally scalable version of its vector search and storage engine and offer it as a cloud service, which is what users ask for most.
- **More chunks is not automatically better.** Labenz raised his retrieval from 2-3 results to 10. Troynikov says the first step is a reliable measure of performance, from offline evals or in-app human feedback, then as much relevant and as little irrelevant context as possible.
- **Adapting the embedding space.** Troynikov explains that an affine transform applied to the query can tune retrieval per user or per application without re-embedding the data. Chroma plans a feedback endpoint that plugs into eval tools such as LangSmith. He also says many users are happy with open-source embedding models rather than OpenAI's Ada.
- **New data, not displaced databases.** Troynikov says much of the data going into Chroma has never been in a database, because models can now process documents. He compares Chroma's ambitions to how Salesforce unified data around the customer funnel.
- **Representation over approximation.** Missed results are almost always a representation problem, Troynikov says; on default settings the approximate nearest-neighbour step misses roughly one in a million, depending on the data distribution.
- **Retrieval and agents.** Troynikov notes Chroma is the memory engine in NVIDIA's Voyager Minecraft agent and argues good retrieval is a large part of making agents work. He describes fine-tuning as shaping style and retrieval as supplying facts.

## Quotes

> "distracting information in the model's context window does tend to measurably destroy the performance of the overall application" — Anton Troynikov

> "Data that goes into Chroma has never been in a database before in many cases." — Anton Troynikov
