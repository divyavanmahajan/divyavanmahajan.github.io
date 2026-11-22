---
title: "Real-time conversational insights from phone call data"
date: 2020-02-17
show: practical-ai
episode: 77
url: "https://share.transistor.fm/s/60978022"
duration_min: 52
hosts: ["Chris Benson", "Daniel Whitenack"]
guests: ["Mike McCourt"]
description: "Classifying and mining phone call transcripts for marketers needs per-customer, self-serve models and unsupervised topic models constrained by language statistics such as Zipf's law."
tags: ["nlp", "call-analytics", "topic-modeling", "unsupervised-learning", "marketing"]
source_transcript: "practical-ai/episodes/2020/02/2020-02-17-real-time-conversational-insights-from-phone-call-data.md"
draft: false
---

## Thesis

Mike McCourt, an astrophysicist turned data scientist at Invoca, explains how the company turns transcribed phone calls into marketing signals. He argues that phone data brings particular problems (varied length, noisy transcripts, hold messages, small per-customer datasets) and that unsupervised models are only useful to customers if every layer is human-interpretable.

## Key points

- **Why calls matter.** McCourt says marketers lose attribution when a buyer picks up the phone, yet high-value purchases such as mortgages, home improvement and cruises still happen by phone. Invoca swaps unique tracking numbers into each ad to link calls to campaigns.
- **Signal AI.** McCourt describes a supervised classifier trained on customer-labelled calls, for example 150 calls with an appointment and 150 without for a dentist's office, that tags every incoming call as true or false.
- **Phone-specific challenges.** Calls range from under a minute to two hours, people phrase the same request differently, and recorded hold messages repeat word for word and can sound like a purchase. McCourt treats mistranscriptions caused by noise as artificial synonyms.
- **Privacy and self-service.** Each customer gets its own model trained only on its own data, even though pre-training on millions of calls might work better. Training and model selection are fully automated, and thumbs up/down corrections retrain the model. McCourt notes 100 calls is hard to train on but is often all customers offer.
- **Interpretable topic models.** For Invoca's unsupervised product, McCourt built a hierarchical model that moves from dictionary to a Zipf's-law lexicon, to topics, to caller and agent roles, and finally to per-caller variants, so humans can read the themes in, say, 20,000 calls.
- **Next step.** McCourt is prototyping a semi-supervised model that combines a few hundred labelled calls with many thousands of unlabelled ones.

## Quotes

> "words like hire, tire, fire, hire, those might all be synonyms for the purposes of phone call transcripts, even though they have different meanings in the dictionary." — Mike McCourt

> "I want AI to tell me what I don't know about. I want AI to tell me what I should be looking for." — Mike McCourt
