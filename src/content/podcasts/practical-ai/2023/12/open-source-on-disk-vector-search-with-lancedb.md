---
title: 'Open source, on-disk vector search with LanceDB'
description: >-
  Chang She argues that an embedded vector database on a new columnar format
  with disk-based indexes separates compute from storage, making vector search
  simpler and cheaper at scale.
pubDate: '2023-12-19'
show: practical-ai
episode: 250
url: 'https://share.transistor.fm/s/59efe3b9'
durationMin: 42
hosts:
  - Chris Benson
  - Daniel Whitenack
guests:
  - Chang She
tags:
  - vector-databases
  - lancedb
  - rag
  - data-infrastructure
  - rust
draft: false
---
## Thesis

Chang She, co-founder and CEO of LanceDB, argues that the hard part of multimodal AI is the data infrastructure rather than the workflow layer on top. LanceDB pairs its own columnar format with disk-based vector indexes and runs embedded in the application, like SQLite or DuckDB. He says this separates compute from storage, so large vector tables can be queried from cheap, stateless nodes sitting on object storage such as S3.

## Key points

- **Origins in computer vision.** She, an original co-author of pandas, saw multimodal projects at the streaming company Tubi take longer and break more often. He and co-founder Lei, who faced the same issue at Cruise, concluded Parquet works for tabular data but not for unstructured data. The vector index was first built for deduplication and active learning; the open source community found it useful for generative AI.
- **Three technical pillars.** She lists a columnar format that fetches only needed columns, an index stored on disk rather than in memory, and fast random access, which he says Parquet lacks. He claims LanceDB is one of two in-process vector databases in Python and the only one in JavaScript.
- **Scaling.** Some users hold 100 million to several billion vectors in one table. She cites Spark-based writes, GPU-accelerated indexing and stateless query nodes with no leader election, comparing the design to Neon's "shared data" architecture. Whitenack describes running it from Colab and then from S3.
- **Rust rewrite.** The team started in C++ in 2022, then rewrote in Rust after a Christmas hack project, citing productivity and fewer segfaults.
- **Use cases.** She describes RAG apps with tens of thousands to single-digit millions of vectors, e-commerce and recommenders, and vision training data. Table versioning lets a code analysis tool query similarity "as of" an earlier date. Whitenack uses LanceDB to pick table descriptions for LLM-generated SQL run in DuckDB.
- **What's next.** She plans richer DuckDB and Polars integration and sees JavaScript and TypeScript data tooling as underserved.

## Quotes

> "We rewrote roughly six months of solid C++ development in about three weeks with Rust." — Chang She

> "the goal is to essentially make it so that people like vector database is no longer a thing that you even have to think about." — Chang She
