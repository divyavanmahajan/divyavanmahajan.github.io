---
title: "OpenAI's new \"dangerous\" GPT-2 language model"
date: 2019-02-25
show: practical-ai
episode: 32
url: "https://share.transistor.fm/s/723c06be"
duration_min: 40
hosts: ["Chris Benson", "Daniel Whitenack"]
guests: []
description: "GPT-2's advance is scale rather than a new algorithm, and OpenAI's partial release starts a needed debate about responsible disclosure as fake text becomes easy to generate and hard to detect."
tags: ["gpt-2", "language-models", "ai-safety", "responsible-release", "nlp"]
source_transcript: "practical-ai/episodes/2019/02/2019-02-25-openai-s-new-dangerous-gpt-2-language-model.md"
draft: false
---

## Thesis

Daniel Whitenack and Chris Benson argue that OpenAI's GPT-2 is not an algorithmic breakthrough but a scaled-up transformer whose text quality is now hard to tell from human writing. They see the real danger not in conscious AI but in people misusing narrow tools, and both give OpenAI the benefit of the doubt for holding back the full model while the community works out norms for safe release.

## Key points

- **What GPT-2 is.** Whitenack explains a language model as a pre-trained encoder that produces contextual word embeddings for tasks such as sentiment analysis, translation and question answering. Benson cites OpenAI's description: 1.5 billion parameters, trained on 8 million web pages to predict the next word.
- **Scale, not novelty.** Whitenack notes that the transformer architecture and the next-word task are not new; the diverse web data and compute produce the gains, including zero-shot results on summarisation and translation. He adds that few teams have that data or compute.
- **The unicorn sample.** Whitenack reads OpenAI's example where a two-sentence human prompt about English-speaking unicorns in the Andes yields a coherent news-style story. Benson calls the language sophisticated and points to uses in gaming and remote telemedicine.
- **Misuse risks.** Whitenack lists OpenAI's concerns: misleading news, impersonation, abusive social media content, spam and phishing. Benson, drawing on his role at Lockheed Martin, warns of fake news at scale and its use in conflicts.
- **Responsible release.** OpenAI published the paper and code plus a smaller model, but not the full model or dataset. Benson says this only slows bad actors but buys time; Whitenack notes critics who say it stops the community from building defences, and expects big labs to stop releasing everything openly.

## Quotes

> "It's generating the text is a lot easier than detecting if it was AI generated." — Daniel Whitenack

> "It's much harder to differentiate the real from the unreal than it is to simply create the unreal." — Chris Benson
