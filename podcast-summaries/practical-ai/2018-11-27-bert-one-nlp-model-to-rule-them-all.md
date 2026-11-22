---
title: "BERT: one NLP model to rule them all"
date: 2018-11-27
show: practical-ai
episode: 22
url: "https://share.transistor.fm/s/6bc0689d"
duration_min: 39
hosts: ["Chris Benson", "Daniel Whitenack"]
guests: []
description: "Google's pre-trained BERT model makes strong NLP cheap to apply through fine-tuning, while Facebook's Horizon shows reinforcement learning running in production."
tags: ["nlp", "bert", "transfer-learning", "reinforcement-learning", "synthetic-data"]
source_transcript: "practical-ai/episodes/2018/11/2018-11-27-bert-one-nlp-model-to-rule-them-all.md"
draft: false
---

## Thesis

In this news roundup, Daniel Whitenack and Chris Benson work through Google's BERT as learners rather than experts. Their main point is that expensive pre-training done once by Google, followed by cheap fine-tuning, puts state-of-the-art language models within reach of applied teams. They also discuss Facebook's Horizon reinforcement learning platform and the limits of synthetic data.

## Key points

- **AI art at auction.** Benson reports that the GAN-generated Portrait of Edmond Belamy, estimated at $7,000 to $10,000, sold at Christie's for $432,500, roughly 45 times the estimate.
- **What BERT is.** Whitenack explains BERT (bidirectional encoder representations from transformers) as a pre-trained encoder trained on two tasks, masked word prediction and next sentence prediction, which considers the whole context around a word. He also mentions Hugging Face's HMTL and the Allen Institute's ELMo.
- **Pre-training versus fine-tuning.** Benson notes pre-training takes four days on 4 to 16 Cloud TPUs; Whitenack estimates about $7,000 in GCP costs. Google has released pre-trained models, so users only fine-tune, for example adding a named entity recognition layer. Benson compares BERT to a software component in a larger system. Hugging Face has already ported it to PyTorch.
- **Horizon.** Benson describes Facebook's open-source applied RL platform, built on PyTorch and Caffe2. Whitenack, who had thought RL was mostly research, is surprised that Facebook uses it in Messenger and to optimise 360-degree video bit rates.
- **Synthetic data.** Benson says that on an undisclosed past project his team could generate volume but not the diversity of messy real-world data. Image augmentation for convolutional networks worked much better for him.
- **Learning resources.** Whitenack recommends Andrew Trask's Grokking Deep Learning and its GitHub repo, which Benson has read and endorses; Benson recommends Nathalie Jeans' Medium post on backpropagation.

## Quotes

> "the NLP world is just on fire right now." — Chris Benson

> "We could generate the volume, but it was very hard to synthesize the diversity that we needed" — Chris Benson
