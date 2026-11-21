---
title: "Pausing to think about scikit-learn & OpenAI o1"
date: 2024-09-17
show: practical-ai
episode: 287
url: "https://share.transistor.fm/s/35fff0ca"
duration_min: 50
hosts: ["Chris Benson", "Daniel Whitenack"]
guests: []
description: "The hosts set scikit-learn steward Probabl's open 'own your data science' funding round against OpenAI's proprietary o1, which they see as RLHF-tuned chain of thought rather than a new architecture."
tags: ["scikit-learn", "openai-o1", "open-source", "reasoning-models", "data-science"]
source_transcript: "practical-ai/episodes/2024/09/2024-09-17-pausing-to-think-about-scikit-learn-openai-o1.md"
draft: false
---

## Thesis

Daniel Whitenack and Chris Benson compare two pieces of news: seed funding for Probabl, the official operator of the scikit-learn brand, and OpenAI's o1-preview model. They welcome the backing for open, owned data science. They are more sceptical of o1, which Whitenack sees as an evolutionary RLHF step that is marketed as "thinking", and they note that both describe their analysis of o1 as speculation.

## Key points

- **Probabl's plans.** Whitenack reports that Probabl plans an acqui-hire, an official scikit-learn certification programme in Q4 2024, and a product aimed at data scientists in the "pre-MLOps" phase. Both hosts say traditional data science is still widespread, even though GenAI gets most of the attention.
- **How o1 probably works.** Whitenack guesses that OpenAI preference-tuned a pre-trained model on curated chain-of-thought examples, with a special token that tells the interface to show the answer. He says the model "is not thinking. It's just generating text". He wonders whether this is a stopgap before GPT-5 or a sign of diminishing returns.
- **Latency changes usage.** Benson notes that o1 is the first OpenAI release people did not switch to by default, because it is too slow for voice conversation. OpenAI points it at coding and maths, and he has seen claims of a 15% gain on complex reasoning.
- **Limitations.** Benson lists the October 2023 knowledge cutoff, no web browsing and no file upload for RAG in the preview.
- **A hands-on test.** Whitenack asked o1 for a new research problem in density functional theory, the subject of his PhD. It "thought for 10 seconds" and gave a relevant but familiar answer, which he called "good-ish, but not mind-blowing".
- **Openness values.** Whitenack reads out Probabl's values, such as openness rather than proprietary lock-in and transparency rather than stealth. Benson says the large companies he talks to use proprietary models in some areas but do not bet their business on them.

## Quotes

> "the model is not thinking. It's just generating text." — Daniel Whitenack

> "nobody's betting their business. At least in the conversations I have, they're not betting their business on an entirely opaque proprietary approach." — Chris Benson
