---
title: ⚡️The Rise and Fall of the Vector DB Category
description: >-
  Search veteran Jo Bergum argues that vector databases are fading as a separate
  category, since vector search is now a feature, and that search is the right
  abstraction for RAG.
pubDate: '2025-05-01'
show: latent-space
url: >-
  https://lspace.beehiiv.com/podcast/s/latent_space_the_ai_engineer_podcast/the_rise_and_fall_of_the_vector_db_category
durationMin: 27
hosts:
  - Alessio Fanelli
  - swyx
guests:
  - Jo Kristian Bergum
tags:
  - vector-databases
  - search
  - rag
  - embeddings
  - retrieval
draft: false
---
## Thesis

Jo Bergum has worked on search systems for twenty years, including at Yahoo. He explains his viral post: vector search is now built into most databases and search engines, so a separate "vector database" infrastructure category no longer makes sense. He separates this from any claim that the companies or RAG are dying. In his view, the natural abstraction for connecting AI to knowledge is search, and embeddings are just one way to implement it.

## Key points

- **How the category formed.** Bergum says OpenAI's post-ChatGPT cookbook tied RAG retrieval to vector embeddings, and he wrote its Chroma example himself. Pinecone then framed vector databases as a new infrastructure category. The host notes that vector database funding in 2023 totalled about $230 million, more than MongoDB raised over its whole life.
- **Features converge.** Bergum points to pgvector in PostgreSQL, which added HNSW, half-precision and binary vectors, and to Elasticsearch, Solr and Vespa. He suggests Postgres is fine at modest scale, but a real search engine is the better choice when the business depends on search quality.
- **Search as a tool.** He uses Windsurf's agent tools (codebase search, web search, grep) as an example: a reasoning model picks the right kind of search for the task.
- **A practical sequence.** Start with clean data and a BM25 keyword baseline, add an off-the-shelf embedding model with hybrid search, and add re-ranking only if latency and cost allow.
- **Long context does not remove retrieval.** About 300 articles can fit in a Gemini context window, but a TREC-COVID dataset of about 170,000 documents is 36 million tokens. On GraphRAG, he says building the knowledge graph is the hard part, not choosing a graph database.
- **Embeddings ahead.** Bergum wants domain-specific embedding models like those from Voyage, which NVIDIA acquired, and embedding models built on vision-language models that skip OCR. He doubts the business model works on its own.

## Quotes

> "I'm not saying that the companies are dying, right? I'm just saying that the separate infrastructure category is dying, right?" — Jo Bergum

> "And I, I think that RAG is definitely not dead, right?" — Jo Bergum
