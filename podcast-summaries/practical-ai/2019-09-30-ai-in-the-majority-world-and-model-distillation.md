---
title: "AI in the majority world and model distillation"
date: 2019-09-30
show: practical-ai
episode: 58
url: "https://share.transistor.fm/s/fee19798"
duration_min: 45
hosts: ["Chris Benson", "Daniel Whitenack"]
guests: []
description: "AI research and talent-building is spreading beyond the US and Europe, while techniques such as knowledge distillation make large language models small enough for production and phones."
tags: ["ai-talent", "model-distillation", "nlp", "responsible-ai", "ai-for-science"]
source_transcript: "practical-ai/episodes/2019/09/2019-09-30-ai-in-the-majority-world-and-model-distillation.md"
draft: false
---

## Thesis

In this news-and-trends episode, Daniel Whitenack and Chris Benson argue that AI activity is growing in the majority world (Africa, India, Southeast Asia), and that local domain knowledge will produce better results on problems like translation and agriculture. They also cover Hugging Face's DistilBERT as evidence that large language models can be shrunk for practical deployment with little loss of quality.

## Key points

- **Majority-world momentum.** Whitenack points to ICLR being held in Ethiopia, Google AI offices in Bangalore and Ghana, the Deep Learning Indaba and Facebook's AI for India summit. Benson attributes big-tech sponsorship (DeepMind, Microsoft, Google, Facebook, IBM, Apple) partly to the search for scarce talent.
- **AI Singapore as a model.** Whitenack describes the programme tied to Singapore's prime minister's office: competitive apprentices (he recalls roughly 800 applicants for 20 places) spend nine months with mentors solving a real company problem that goes into production. He hopes other countries copy it.
- **AI for science.** Benson highlights ETH Zurich work using neural networks to look for dark matter and dark energy signals in light bending. Whitenack says neural networks fit gaps where the physics is known but the equations are too costly to compute.
- **DistilBERT.** Whitenack explains that Hugging Face used teacher-student knowledge distillation to build a 66-million-parameter model that keeps 95% of BERT's GLUE performance, aimed at low-latency services, smartphones and lower environmental cost. He contrasts it with pruning as a post-training step.
- **People-centred deep learning.** Benson discusses an MIT Sloan article by David Bray and R. Ray Wang on transparency, explainability and reversibility. Whitenack adds that bias can be as simple as training data covering only news, and calls for monitoring live systems for voice users of different accents and dialects.
- **Learning resource.** Whitenack recommends Papers with Code for linking research papers to implementations and task leaderboards.

## Quotes

> "I don't want to see all AI stuff in New York City and London and San Francisco and places like that." — Chris Benson

> "Distilbert still maintains 95% of BERT's performance on language understanding benchmarks like Glue" — Daniel Whitenack
