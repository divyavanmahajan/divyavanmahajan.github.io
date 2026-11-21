---
title: "Only as good as the data"
date: 2024-08-14
show: practical-ai
episode: 282
url: "https://share.transistor.fm/s/1edb5dc5"
duration_min: 46
hosts: ["Chris Benson", "Daniel Whitenack"]
guests: []
description: "Whitenack and Benson break the slogan 'AI is only as good as the data' into concrete data categories (training, evaluation, fine-tuning, augmentation) and review the EU AI Act's risk tiers."
tags: ["training-data", "fine-tuning", "benchmarks", "rag", "eu-ai-act", "ai-regulation"]
source_transcript: "practical-ai/episodes/2024/08/2024-08-14-only-as-good-as-the-data.md"
draft: false
---

## Thesis

Daniel Whitenack argues that "AI is only as good as the data" only becomes useful once you separate the kinds of data involved: data for pre-training, for evaluation and benchmarking, for fine-tuning, and for augmenting prompts at runtime. Chris Benson frames the topic as a return to basics after the generative AI hype. The second half covers the EU AI Act, which entered into force on 1 August 2024.

## Key points

- **Model size drives data needs.** Whitenack explains that a model is code plus parameters (7, 70 or 400 billion), and that larger models need more data to fit, which is why most companies should fine-tune an existing model, for example from Hugging Face, rather than train from scratch.
- **Task and structure come first.** For a task like object detection, Whitenack says a pile of unlabelled images in a file store is of little use; supervised models need labels. Small problems such as sentiment analysis or time-series forecasting can still be trained from scratch on thousands of samples.
- **Holdout and public benchmarks.** Test data can be a random holdout scored with metrics such as F1, BLEU, COMET or mean squared error. Whitenack points to shared tasks from academic workshops such as WMT, and to older datasets like SQuAD, which can be reshaped into prompts to test or fine-tune LLMs.
- **The full chain with Llama 3.1.** Meta's pre-training data, benchmark data, the instruction-tuning data behind the Instruct model, and finally RAG data injected at runtime. Whitenack stresses that RAG changes no model parameters.
- **EU AI Act timeline and tiers.** Benson traces the Act from the April 2021 proposal through Parliament (13 March) and Council (21 May) to entry into force on 1 August, with provisions phasing in over 6 to 36 months. The tiers run from unacceptable risk (social scoring, behavioural manipulation) through high risk (healthcare, recruitment, critical infrastructure, law enforcement) to minimal risk (spam filters, video games). Military and national security uses are exempt.

## Quotes

> "the bigger the model you want to use, the more data you need to have to train it, which is why these data sets have got larger and larger." — Daniel Whitenack

> "your model is only as good as the data that you're bringing so that it can train on." — Chris Benson
