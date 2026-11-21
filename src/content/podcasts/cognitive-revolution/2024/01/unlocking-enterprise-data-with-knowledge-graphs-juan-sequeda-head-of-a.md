---
title: >-
  Unlocking Enterprise Data with Knowledge Graphs | Juan Sequeda, Head of AI Lab
  at data.world
description: >-
  Juan Sequeda argues that accurate chat-with-your-data over enterprise SQL
  needs a knowledge graph of business meaning, citing a benchmark where GPT-4
  was three times more accurate with one.
pubDate: '2024-01-18'
show: cognitive-revolution
url: >-
  https://www.cognitiverevolution.ai/unlocking-enterprise-data-with-knowledge-graphs-juan-sequeda-head-of-ai-lab-at-data-world/
youtube: 'https://www.youtube.com/watch?v=1Km4JKr3Og0'
hosts:
  - Nathan Labenz
guests:
  - Juan Sequeda
tags:
  - knowledge-graphs
  - enterprise-data
  - text-to-sql
  - semantics
  - data-catalogs
draft: false
---
## Thesis

Juan Sequeda, principal scientist and head of the AI Lab at data.world, argues that enterprises have spent 30 years moving and storing data without managing what it means. LLMs do not know an organisation's private semantics, so he wants a knowledge graph to act as the company's "brain" and the LLM to generate queries against it rather than answer questions itself. Nathan Labenz probes how this applies to benchmarks, fine-tuning and unstructured data.

## Key points

- **data.world's background.** Founded in February 2016 as a "GitHub for data", it remains a large open data catalog with over 2 million users, and is a public benefit corporation. Its platform is built on RDF, OWL and SPARQL; customers use it for search and discovery, governance and DataOps lineage.
- **Old problems, new tools.** Sequeda describes the spreadsheet, query and data-warehouse approaches, and says warehouses fail for social reasons: people trust the numbers they control. He gives an example of a hard-coded 0.02 discount that skewed a customer's reports for two years.
- **The benchmark.** Using an OMG property-and-casualty insurance schema and questions sorted into quadrants of question and schema complexity, the simplest GPT-4 prompts produced three times more accurate answers via an OWL ontology and SPARQL than via SQL DDL alone. SQL questions needing more than four table joins always failed.
- **Know what you don't know.** Overall accuracy was about 60%; Sequeda expects around 90% by rejecting questions whose concepts are missing from the graph and explaining answers at the level each audience needs.
- **Fine-tune metadata, not data.** He advises against fine-tuning on raw rows, favouring metadata such as question-to-query patterns, plus static checks on the generated code. He calls naive RAG the simplest kind of agent.
- **Vectors as a feature.** He predicts every database will add vector search, leaving room for only one standalone vector database winner, and says GPT-powered Socratic interviews can capture tribal knowledge at scale.

## Quotes

> "I'd argue that we've always been a data company and data is the lifeblood for AI." — Juan Sequeda

> "There's three times more accurate queries if you're doing the knowledge graph versus if you only do SQL." — Juan Sequeda
