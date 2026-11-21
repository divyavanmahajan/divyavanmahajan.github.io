---
title: "\U0001F917 All things transformers with Hugging Face"
description: >-
  Transformers changed NLP through attention and large-scale pre-training, and
  Hugging Face turned that into a shared open source ecosystem of models,
  datasets and tokenizers with one common interface.
pubDate: '2020-07-27'
show: practical-ai
episode: 98
url: 'https://share.transistor.fm/s/0b827357'
durationMin: 47
hosts:
  - Chris Benson
  - Daniel Whitenack
guests:
  - Sasha Rush
tags:
  - transformers
  - nlp
  - pre-training
  - open-source
  - ai-conferences
draft: false
---
## Thesis

Sasha Rush, associate professor at Cornell Tech and a member of the Hugging Face team, argues that "transformer" covers two innovations: an attention-based architecture and, more important in his view, pre-training on huge text corpora followed by fine-tuning. Hugging Face's value, he says, is giving researchers, practitioners and end users one consistent open source interface to all of it.

## Key points

- **From chatbots to open source.** Rush, who joined about eight months earlier as a fan, says Hugging Face moved from chatbots to open source after quickly porting BERT to PyTorch. The Transformers library grew from no users to about 30,000; the company has 15 to 20 people split between Paris and New York.
- **Attention explained.** Rush describes attention as feeding a softmax distribution over earlier words back into the network, repeated for 6 to 24 rounds, replacing LSTMs. Models range from 50 million to tens of billions of parameters.
- **Pre-training matters most.** Rush traces the line from ELMo and CoVe to BERT's masked-word task. Fine-tuning on small to medium supervised data is standard; OpenAI's zero-shot approach is, he says, still an open research question.
- **Three kinds of users.** Rush splits users into architects (OpenAI, AllenAI) training new models, trainers fine-tuning on their own data, and end users running inference. The model hub's shared interface enables a common visualiser, tools such as TextAttack, an inference API and a Twitter bot.
- **Datasets and tokenizers.** Rush highlights the NLP library (almost 150 datasets, led by Tom Wolf) and a Rust tokenizer library, as research shifts toward building harder datasets.
- **Virtual ICLR.** As general chair, Rush built a fully virtual ICLR in about six weeks, with per-paper videos and chat rooms, higher attendance and around 100,000 messages. The MiniConf tooling was later reused by ACL and ICML.

## Quotes

> "Models range from 50 million parameters to tens of billions of parameters at the top end." — Sasha Rush

> "things work, but we have no real sense of why. And as a scientist, that can be a little bit frustrating." — Sasha Rush
