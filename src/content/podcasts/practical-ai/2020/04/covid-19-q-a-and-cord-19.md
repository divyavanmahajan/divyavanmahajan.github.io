---
title: COVID-19 Q&A and CORD-19
description: >-
  COVID-QA pairs question matching against official FAQs for the public with
  extractive QA over the CORD-19 research corpus, built in the open with
  volunteer expert annotators.
pubDate: '2020-04-06'
show: practical-ai
episode: 84
url: 'https://share.transistor.fm/s/fb45563d'
durationMin: 54
hosts:
  - Chris Benson
  - Daniel Whitenack
guests:
  - Timo Möeller
  - Tony Reina
tags:
  - question-answering
  - nlp
  - covid-19
  - open-source
  - data-annotation
draft: false
---
## Thesis

Timo Möeller of deepset and Tony Reina of Intel describe COVID-QA, a hackathon project that aims to give trustworthy answers about the pandemic. They argue it serves two groups: the public, by matching questions to official FAQ answers, and researchers, by extracting answers from peer-reviewed papers in the CORD-19 dataset. Both say open, fast volunteer collaboration is what made it possible.

## Key points

- **Origin in a hackathon.** Möeller says the project started at a German government hackathon with 45,000 people in one Slack workspace. About 25 developers joined, including five core deepset developers, to pull together information spread across many official pages.
- **Question matching for the public.** Möeller explains the baseline indexes scraped FAQ questions in Elasticsearch, which is fast and language-agnostic. The team then fine-tuned BERT embeddings with UKP Lab's Sentence Transformers (a Siamese network), evaluated on about 30 manually rephrased questions, with feedback from the UI and a Telegram bot.
- **Extractive QA for researchers.** Reina describes CORD-19, released on Kaggle by the Allen Institute, the White House, NIH and others, as roughly 25,000 PubMed articles. Möeller says deepset's Haystack uses a retriever-reader design: a cheap first pass picks candidate documents before a BERT reader extracts answers.
- **Domain adaptation and data scale.** Möeller notes one or two thousand matched questions per language is enough for matching, while extractive QA datasets like Stanford's SQuAD run to about 150,000 pairs. His team adapted an English BERT to CORD-19 text.
- **Expert annotators wanted.** Reina recruited physicians, nurses and bioscience PhDs, including medical students at home, to highlight facts and write questions. He seeks people at master's level or above, plus proofreaders for a "Second Opinion" channel.
- **Developer needs.** Möeller asks for an intelligent scraper that can extract Q&A from any FAQ page, and multilingual models such as Facebook's cross-lingual model to bring matching beyond English.

## Quotes

> "I have never heard of an open source labeling process. And I think this will be a mess at some point" — Timo Möeller

> "it's designed to be a tool. You know, it's not designed to replace anything." — Tony Reina
