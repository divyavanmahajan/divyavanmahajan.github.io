---
title: Exploring the COVID-19 Open Research Dataset
description: >-
  CORD-19 turned tens of thousands of coronavirus papers into machine-readable
  text, but making AI tools useful depends on medical experts judging the
  results and on unglamorous infrastructure.
pubDate: '2020-04-20'
show: practical-ai
episode: 86
url: 'https://share.transistor.fm/s/15bb67dd'
durationMin: 44
hosts:
  - Chris Benson
  - Daniel Whitenack
guests:
  - Lucy Lu Wang
tags:
  - open-data
  - nlp
  - information-retrieval
  - healthcare
  - scientific-literature
draft: false
---
## Thesis

Lucy Lu Wang of the Allen Institute for AI (AI2) explains how the CORD-19 dataset was built in days to help the machine learning community mine the fast-growing COVID-19 literature. Her central point is that the dataset was possible because Semantic Scholar already had a paper-processing pipeline, and that the hard part now is connecting ML practitioners with medical experts who can judge which tools are useful.

## Key points

- **Literature overload.** Wang says more than 4,000 COVID-19 papers had appeared since January, with several hundred new ones a day. The dataset was updated weekly and moving to a daily cadence.
- **Who built it.** Wang describes a White House Office of Science and Technology Policy effort, initiated through Georgetown CSET, with AI2, Microsoft Research, Chan Zuckerberg, Kaggle and the National Library of Medicine. AI2's contribution was harmonised metadata and structured full-text parses of PDFs.
- **Scope and size.** Papers came from a WHO-curated list, PubMed Central and the bioRxiv and medRxiv preprint servers, selected by keyword searches that also covered SARS and MERS. Wang puts the size at more than 50,000 papers, about 40,000 with full text.
- **Community response.** The Kaggle challenge launched with 10 open-ended questions; Wang reports millions of page views and more than 70,000 downloads, plus self-organised groups such as CoronaWhy. A second batch of questions was planned because clinicians already knew some answers.
- **Experts as the bottleneck.** Wang says volunteer medical students review Kaggle extractions, and a TREC task run with NIST uses medical students from OHSU, University of Texas and University of Washington as annotators. She notes that simpler methods such as Lucene and Elasticsearch often beat transformer models on the Kaggle questions.
- **What comes next.** Wang wants citations, tables and figures added, more publishers opening relevant content, and continued work with collaborator Kyle Lo on extracting relationships such as drug-drug interactions. Benson asks whether this could change how AI tackles other hard medical problems; Wang hopes so.

## Quotes

> "for many of the questions on the CORD19 challenge, something simpler methods, the more traditional methods have actually worked better" — Lucy Lu Wang

> "infrastructural improvements can be really important, even if it's not particularly sexy." — Lucy Lu Wang
