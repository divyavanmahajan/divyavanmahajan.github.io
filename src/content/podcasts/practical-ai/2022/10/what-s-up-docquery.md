---
title: 'What''s up, DocQuery?'
description: >-
  Impira's Ankur Goyal explains how DocQuery, an open source question-answering
  model built on LayoutLM, lets users query invoices and contracts without
  labelling, and why open sourcing it fits Impira's business.
pubDate: '2022-10-12'
show: practical-ai
episode: 196
url: 'https://share.transistor.fm/s/d38492e4'
durationMin: 42
hosts:
  - Chris Benson
guests:
  - Ankur Goyal
tags:
  - document-ai
  - question-answering
  - open-source
  - layoutlm
  - ocr
draft: false
---
## Thesis

Ankur Goyal, founder and CEO of Impira, argues that extracting data from documents has long been possible but rarely used because existing tools are too hard to use. DocQuery, Impira's open source model announced on September 1st, lets people ask natural-language questions of semi-structured and unstructured documents with no labelling, while Impira's paid product keeps the feedback loop and workflow tooling.

## Key points

- **A database background.** Goyal was the second employee and a VP of engineering at SingleStore. He started Impira in 2017 expecting to work on images and video, but customers using its OCR asked about invoices and forms.
- **Why earlier tools fell short.** OCR templates only work for identical documents. Pre-trained services such as AWS Textract give no recourse when they misread poor scans, miss fields ("bald spots") or return different schemas for similar documents, so some customers built models on top to normalise the output.
- **Impira's design.** The product is self-service, works with any schema and targets Excel-level users. Users correct or confirm predictions, and each correction incrementally trains a lightweight model. Before DocQuery, a customer with 100 vendors might still need 50 or 60 labels.
- **How DocQuery came about.** Goyal pasted invoice text into Hugging Face question-answering models, then teamed up with CTO Richard and Hugging Face to build a question-answering pipeline for Microsoft's LayoutLM, which also takes each word's bounding box.
- **Why open source.** Goyal cites removing barriers to innovation, distribution and mindshare, and confidence that Impira's real-time data flywheel, UI, security and integrations remain hard to replicate.
- **What's next.** Users want to ask what type a document is and to query tables. Goyal says a model is training to answer questions across many documents by compiling language into queries. Users also request actions such as filing documents into folders.

## Quotes

> "the bottleneck is actually creation. It's not understanding." — Ankur Goyal

> "Answer is just stupid naivete. Like I didn't even think about that." — Ankur Goyal
