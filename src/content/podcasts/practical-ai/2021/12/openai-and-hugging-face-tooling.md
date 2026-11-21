---
title: OpenAI and Hugging Face tooling
description: >-
  With OpenAI's API open to all and Hugging Face expanding into reinforcement
  learning and dataset analysis, the hosts argue AI tooling is maturing, and
  Whitenack shows how his team connects the pieces.
pubDate: '2021-12-14'
show: practical-ai
episode: 161
url: 'https://share.transistor.fm/s/695b726b'
durationMin: 51
hosts:
  - Chris Benson
  - Daniel Whitenack
guests: []
tags:
  - openai-api
  - hugging-face
  - reinforcement-learning
  - mlops
  - gpu-infrastructure
draft: false
---
## Thesis

Chris Benson and Daniel Whitenack argue that the AI field is maturing from a focus on models to a focus on the tooling around them. OpenAI's API dropping its waitlist and new Hugging Face releases are examples of this. Whitenack then describes how his NLP team at SIL International combines notebooks, an on-prem GPU server, experiment tracking and model hubs into one workflow.

## Key points

- **OpenAI without a waitlist.** Whitenack explains that GPT-3 access was tightly controlled over misuse and bias concerns. Benson lists the nine prohibited content categories, from hate and harassment to spam and malware. Whitenack walks through the playground: presets such as Q&A, few-shot prompting, and "view code" that produces Python or curl calls. His team has used GPT-3 for data augmentation.
- **Hugging Face as a hub.** Whitenack describes Hugging Face as a one-stop shop with model and dataset hubs, Spaces and an inference API. Its first ML-Agents reinforcement learning environment, Snowball Fight, built with Unity, points towards shared simulation environments for training agents.
- **Why simulation matters.** Benson recalls DARPA's AlphaDogfight, where a deep reinforcement learning agent repeatedly beat an Air Force weapons school instructor in an F-16 simulator. Whitenack notes that building such environments is the hard part.
- **Data Measurements Tool.** Hugging Face's open-source tool calculates dataset statistics and bias-related metrics to support responsible data development.
- **SIL's stack.** For roughly 15 people spread around the world, Whitenack's team uses GitHub and Google Colab, an on-prem A100 server in Dallas split into virtual GPUs with MIG, ClearML for experiment tracking and job queues, S3 for versioned artefacts, Pachyderm for data pipelines, and the Hugging Face hubs for models and inference, including on internet-connected edge devices.
- **On-prem versus cloud.** Whitenack says the server paid off once projected training volume passed a break-even point and shared queues improved GPU use, though he calls the question unsettled.

## Quotes

> "Reinforcement learning in general is not like a model. It's a framework in which you can train agents or models." — Daniel Whitenack

> "we would be making back our cost on the GPU server with the amount of training that we're doing." — Daniel Whitenack
