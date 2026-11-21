---
title: 'Big data is dead, analytics is alive'
description: >-
  MotherDuck's Till Döhmen and Adithya Krishnan argue that most analytics fits
  on a single machine, making in-process DuckDB a fast, simple base for AI
  workflows.
pubDate: '2024-10-24'
show: practical-ai
episode: 292
url: 'https://share.transistor.fm/s/a1eb867f'
durationMin: 50
hosts:
  - Chris Benson
  - Daniel Whitenack
guests:
  - Till Döhmen
  - Adithya Krishnan
tags:
  - duckdb
  - analytics
  - text-to-sql
  - vector-search
  - databases
draft: false
---
## Thesis

Till Döhmen and Adithya Krishnan of MotherDuck argue that the big data era overestimated how much data most queries touch. They say a fast, in-process analytical database like DuckDB, running on a laptop, in a browser, or on one large cloud machine, covers most needs. Daniel Whitenack adds that the same properties make DuckDB a strong base for AI uses such as text-to-SQL and hybrid search.

## Key points

- **First contact.** Döhmen wrote his master's thesis at CWI, where DuckDB began. He recalls an aggregation on a roughly 100 MB dataset finishing so fast that he thought it had failed, after years of waiting on Spark.
- **Why in-process matters.** Döhmen explains that research by DuckDB's founders, Hannes and Mark, showed client-server protocols to be a major bottleneck, even for a local Postgres. Running inside Python or R removes the transfer, and Krishnan notes the database can read data frames straight from shared memory.
- **Where it is used.** Krishnan names three groups: Python users who use it in place of data frames, data engineers joining CSV, Postgres and S3 sources, and analysts who like its SQL dialect (for example `FROM table`). Döhmen calls it "the SQLite for analytics".
- **AI features.** Krishnan describes array-typed embeddings with cosine similarity, full-text search, and the two combined into hybrid search, all built through DuckDB's extension mechanism.
- **MotherDuck's bet.** Döhmen says one DuckDB on modern cloud hardware, with up to 24 TB of memory, goes very far. He positions MotherDuck as a simpler, cheaper alternative to Snowflake or Databricks, with dual execution that splits a query between local and cloud to cut data transfer.
- **AI in the product.** Döhmen describes FixIt, an unobtrusive SQL error fixer that relies on DuckDB running in the user's browser. Future plans include embedding and prompting functions in SQL. Krishnan imagines shareable remote knowledge bases that local models could pull in for RAG.

## Quotes

> "one way to describe DuckDB is it's the SQLite for analytics." — Till Döhmen

> "single-node compute, which means one DuckDB database, with nowadays hardware, cloud hardware, actually gets you very, very, very far." — Till Döhmen
