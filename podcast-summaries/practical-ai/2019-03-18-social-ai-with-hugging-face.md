---
title: "Social AI with Hugging Face"
date: 2019-03-18
show: practical-ai
episode: 35
url: "https://share.transistor.fm/s/ac4fdee5"
duration_min: 39
hosts: ["Chris Benson", "Daniel Whitenack"]
guests: ["Clément Delangue"]
description: "Hugging Face's Clément Delangue argues that conversational AI should be fun and emotional rather than transactional, built on transformer models, large user data and open source."
tags: ["conversational-ai", "nlp", "transformers", "open-source", "chatbots"]
source_transcript: "practical-ai/episodes/2019/03/2019-03-18-social-ai-with-hugging-face.md"
draft: false
---

## Thesis

Clément Delangue, co-founder and CEO of Hugging Face, argues that most conversational AI (Siri, Alexa) is built to save time, while people are social and want AI that is entertaining and emotional. He links this "social AI" to transformer models, transfer learning and an open source community that he says is driving fast progress in natural language processing.

## Key points

- **Social over transactional.** Delangue compares the bond with an AI to the bond with pets, noting the dog was domesticated for social reasons rather than usefulness. Hugging Face had passed half a billion messages between users and their AI, plus more than half a million "love declarations".
- **A sassy personality.** Users start with transactional requests, Delangue says, but the AI answers in its own tone, for example calling weather talk boring or telling users to Google something themselves.
- **Many models per message.** Each message runs through several models in parallel: classic NLU, state manager and generation pipelines plus end-to-end models. A simple intent model with a canned answer handles "what's the weather", while long, ambiguous conversations switch to end-to-end generation.
- **Production is the hard part.** Delangue advises AI founders to invest first in getting models working in production. Hugging Face uses a one-second response threshold and falls back to faster models when one is too slow.
- **Open source and multi-task NLP.** He calls Hugging Face's PyTorch repository of BERT and GPT-2 the largest open source collection of pre-trained transfer learning models in NLP, and cites the team's HMTL work: language tasks such as co-reference and emotion are intertwined.
- **Bets and advice.** Delangue predicts NLU will be largely solved within three years. Whitenack raises the 7,110 living languages; Delangue expects other languages to follow if models and datasets are open. He recommends small organisations, Fast.ai courses and Betaworks' Synthetic Camp.

## Quotes

> "So it's hard to explain why people want to be social with an artificial intelligence, but it's pretty obvious that they do." — Clément Delangue

> "I think in like three years, we're going to be able to really understand algorithmically 95% of the natural language." — Clément Delangue
