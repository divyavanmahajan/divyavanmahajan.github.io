---
title: "Intelligent systems and knowledge graphs"
date: 2019-11-18
show: practical-ai
episode: 65
url: "https://share.transistor.fm/s/0f938d24"
duration_min: 57
hosts: ["Chris Benson", "Daniel Whitenack"]
guests: ["James Fletcher"]
description: "A knowledge graph adds a typed schema and logical reasoning on top of a graph database, and combining that reasoning with machine learning over graphs is the next step for intelligent systems."
tags: ["knowledge-graphs", "graph-databases", "graph-neural-networks", "automated-reasoning", "data-modeling"]
source_transcript: "practical-ai/episodes/2019/11/2019-11-18-intelligent-systems-and-knowledge-graphs.md"
draft: false
---

## Thesis

James Fletcher, principal scientist at Grakn Labs, argues that a knowledge graph is more than graph-shaped data: it adds a schema that models the domain faithfully and an automated reasoner that infers new facts. He sees the open research frontier in combining logical deduction with machine learning, which he likens to intuition.

## Key points

- **From relational to graph.** Fletcher compares relational databases to filing cabinets with cross-references, which get messy for network-shaped data. Grakn builds a knowledge representation layer on top of a graph database, with entities, relations and attributes; relations act as hyper-edges linking more than two things.
- **Schema design is real work.** Fletcher compares the schema to classes in object-oriented programming and the data to instances. A good schema rejects invalid data, such as a friendship between a person and an organisation. He sees knowledge engineering, or ontology work, emerging as a career, and favours careful modelling of proprietary data over scraping the web.
- **Reasoning versus learning.** Grakn's open source core includes a reasoner for rules of the form "if A, B and C then D", which Fletcher calls the AI of the 80s and contrasts with Prolog. Rules generalise perfectly and are explainable; machine learning supplies intuition where rules cannot be written.
- **Tasks for graph learning.** He lists question answering, knowledge graph completion such as predicting drug-disease links, and adding background knowledge to NLP and computer vision.
- **Methods.** Fletcher moved from random walks to Stanford's GraphSAGE, which samples neighbourhoods, and then to DeepMind's Graph Nets library. Grakn's KGLIB library hosts its knowledge graph convolutional network work.
- **Getting started.** Grakn Core is open source, with Python, Node.js and Java clients over gRPC, and the Graql query language uses match and insert queries. Migrating from SQL or CSV means writing an ETL pipeline; Fletcher points to the docs, examples repository and blog.

## Quotes

> "Knowledge graphs are going to be central to the effort towards, well, intelligent systems" — James Fletcher

> "what I harp on about is trying to get to the point of true to domain modeling" — James Fletcher
