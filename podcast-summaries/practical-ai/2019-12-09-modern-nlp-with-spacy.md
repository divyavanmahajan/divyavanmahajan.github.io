---
title: "Modern NLP with spaCy"
date: 2019-12-09
show: practical-ai
episode: 68
url: "https://share.transistor.fm/s/020a47bd"
duration_min: 56
hosts: ["Chris Benson", "Daniel Whitenack"]
guests: ["Ines Montani", "Matthew Honnibal"]
description: "spaCy's creators argue that practical NLP depends more on fast annotation tooling, well-framed labelling schemes and rule-based baselines than on ever-larger end-to-end models."
tags: ["nlp", "spacy", "data-annotation", "open-source", "developer-tools"]
source_transcript: "practical-ai/episodes/2019/12/2019-12-09-modern-nlp-with-spacy.md"
draft: false
---

## Thesis

Ines Montani and Matthew Honnibal, co-founders of Explosion, argue that most NLP projects succeed or fail on data: how annotation is framed, how fast data scientists can iterate on it, and whether a simple baseline exists to beat. spaCy and their annotation tool Prodigy are built around programmable pipelines rather than black-box APIs.

## Key points

- **Origins.** Honnibal left academic research after companies tried to use his research code in production; Montani joined to build a visualiser and then the core library, first released in early 2015. They bootstrapped Explosion with about six months of consulting rather than venture funding, then funded it with Prodigy, sold as a one-off licence.
- **Annotation economics.** Honnibal argues that roughly $4,000 spent annotating four times as much data might add 10-12% accuracy, against about 1% from a longer hyperparameter search. Annotation often stalls at organisational boundaries, so Prodigy lets data scientists label data themselves.
- **Embed, encode, attend, predict.** Honnibal walks through his four-step formula for neural NLP models. He says transformers have overtaken LSTMs for encoding, but spaCy uses a convolutional architecture so it runs well without a GPU.
- **Pipelines and rules.** Montani says named entity recognition and text classification are the most-used components, and she is pleased to see rule-based matching combined with statistical models. She recommends a rule-based baseline, such as checking for a trailing question mark, before training anything.
- **Framing and languages.** Honnibal advises separating "symptom mentioned" from "symptom currently present" when labelling medical text. Montani says language support is limited mainly by commercially usable data; community work produced Greek, Norwegian and Japanese support.
- **Trends and resources.** Honnibal sees developers choosing programmable libraries such as PyTorch over hosted language APIs. They recommend the free course at course.spacy.io, fast.ai and Andrew Ng's Machine Learning Yearning.

## Quotes

> "labeling data is actually great because that's how you can program your model." — Ines Montani

> "that's really where the innovation or iteration speed goes to die" — Matthew Honnibal
