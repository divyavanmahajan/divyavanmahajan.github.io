---
title: Advent of GenAI Hackathon recap
description: >-
  Intel Liftoff and Prediction Guard's Advent of GenAI hackathon drew 2,000
  participants and showed that commoditised models, APIs and notebooks let
  non-experts build MVP-grade generative AI apps in days.
pubDate: '2024-01-17'
show: practical-ai
episode: 252
url: 'https://share.transistor.fm/s/23880001'
durationMin: 48
hosts:
  - Daniel Whitenack
guests:
  - Rahul Nair
  - Ryan Metz
  - Eugenie Wirz
  - Ralph de Wargny
tags:
  - hackathon
  - generative-ai
  - rag
  - intel-developer-cloud
  - open-models
draft: false
---
## Thesis

Daniel Whitenack (Prediction Guard) and the Intel Liftoff team look back on the first Advent of GenAI hackathon. Rahul Nair and Ryan Metz argue that AI has become commoditised: with APIs, hosted open models and ready-made notebooks, people from school students to startup founders could build solutions that Nair compares to the MVPs startups spend six months to a year on.

## Key points

- **Origin and scale.** Nair modelled the event on Advent of Code, with a fun element in every challenge. Metz says a couple of hundred participants would have counted as success and 1,000 was the stretch goal; registrations were closed at 2,000.
- **Skill progression.** Metz describes five challenges covering text-to-image prompting, LLM APIs, image-to-image editing, RAG applications and a Python code explainer, followed by a final two-day product sprint. The first challenge, a narrative set of images, needed no code but was hard to make coherent; one participant built a comic book generator.
- **Standout submissions.** Nair highlights RAG over YouTube audio and a code explainer submitted in about three hours that cited its sources. Metz argues that sourcing answers through retrieval gives a practical form of explainable AI, replacing older approaches such as SHAP values.
- **Retrieval first.** Whitenack says RAG systems are the first thing Prediction Guard's clients build, and that teams can do a lot by integrating their own data before reaching for fine-tuning.
- **Infrastructure.** Free-tier participants on Intel Developer Cloud got shared JupyterHub with Xeon processors and Data Center GPUs; Prediction Guard runs on Gaudi 2. Whitenack points to Hugging Face Optimum, and Nair to Intel Extension for PyTorch, as near drop-in optimisations.
- **Open models in use.** Whitenack notes Intel's Neural Chat, a Mistral fine-tune released about a week before the event, and Notus were used straight away, alongside Zephyr, Yi and WizardCoder.

## Quotes

> "AI has become truly commoditized, and you don't really need to go through masters or a couple of courses on neural networks to build an application right now." — Rahul Nair

> "when you do a hackathon with Intel Liftoff, you better be ready to scale your servers." — Daniel Whitenack
