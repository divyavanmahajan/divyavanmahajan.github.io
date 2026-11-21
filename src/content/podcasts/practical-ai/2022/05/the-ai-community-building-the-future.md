---
title: "\U0001F917 The AI community building the future"
description: >-
  Hugging Face's Merve Noyan argues the Hub is the core of open source machine
  learning, making models reproducible, testable and, with new pull requests and
  discussions, collaborative.
pubDate: '2022-05-31'
show: practical-ai
episode: 179
url: 'https://share.transistor.fm/s/306f6fbd'
durationMin: 47
hosts:
  - Chris Benson
  - Daniel Whitenack
guests:
  - Merve Noyan
tags:
  - hugging-face
  - open-source
  - model-cards
  - reproducibility
  - ml-community
draft: false
---
## Thesis

Merve Noyan, a developer advocate engineer at Hugging Face, argues that the Hugging Face Hub matters more than any single library because it tackles the core problems of open source machine learning: reproducing experiments, letting others stress test a model, and declaring limitations and biases. Newly launched pull requests and discussions on model, dataset and Space repositories aim to bring GitHub-style collaboration to machine learning.

## Key points

- **Her route in.** Noyan came from applied maths and operations research, built chatbots as a machine learning engineer, and joined Hugging Face after contributing to its community dataset and audio sprints. She recommends sprints and good first issues as the easiest way into open source.
- **Chatbot lessons.** She found narrow-domain bots easy because they reduce to text classification, but gave up on open-domain bots because she would not put a language model in front of end users without filtering. The Transformers pipeline abstraction amazed her.
- **Spaces for demos.** Noyan says Spaces, with Streamlit or Gradio, removes the pain of Flask and front-end work for data scientists without a developer background; she sends professors Space links instead of setup instructions.
- **Automated model cards.** She built Keras integration that pushes a model with metrics, architecture graph and TensorBoard logs in one line, and is now designing the same for scikit-learn with core contributor Adrian, including handling the risk of unpickling arbitrary code.
- **Collaboration and ethics.** The new features let users contribute TensorFlow weights to a PyTorch repository or flag bias. Whitenack describes a Masakhane talk at ACL finding that some crawled datasets contained 0% of their labelled language, a fit for dataset PRs. Noyan says the ethics team stress tests models and asks authors to declare bias.
- **Tasks and tabular data.** Noyan maintains Hugging Face Tasks to show software developers which task fits their product, and is building auto-EDA and AutoML tools with Gradio Blocks.

## Quotes

> "we want to get people to declare the limitations of their model, declare the biases in their model, so that we can have good open source models on the hub." — Merve Noyan

> "I want people to call one line of code and just push their models on the hub, which will create these model cards" — Merve Noyan
