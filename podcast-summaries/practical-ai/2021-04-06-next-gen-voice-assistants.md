---
title: "Next-gen voice assistants"
date: 2021-04-06
show: practical-ai
episode: 128
url: "https://share.transistor.fm/s/36c3d094"
duration_min: 51
hosts: ["Chris Benson", "Daniel Whitenack"]
guests: ["Nikola Mrkšić"]
description: "PolyAI's Nikola Mrkšić argues that voice remains the main customer service channel, and that task-oriented, multi-turn assistants built on spoken language understanding and dialogue pre-training can handle it."
tags: ["voice-assistants", "conversational-ai", "customer-service", "spoken-language-understanding", "multilingual-nlp"]
source_transcript: "practical-ai/episodes/2021/04/2021-04-06-next-gen-voice-assistants.md"
draft: false
---

## Thesis

Nikola Mrkšić, CEO and co-founder of PolyAI, argues that multi-turn, task-oriented dialogue is a hard compound problem that chains speech recognition, language understanding, dialogue management, language generation and text-to-speech. He says narrow customer service tasks can be evaluated, and so improved, unlike general assistants such as Alexa or Siri. PolyAI's edge, he claims, is spoken language understanding plus a pre-trained dialogue encoder.

## Key points

- **Background.** Mrkšić did his PhD with Steve Young at Cambridge. His earlier company, VocalIQ, was acquired by Apple in 2015 to make Siri more conversational.
- **Voice still dominates.** He says 60 to 70% of customer service interactions happen by phone, and that during COVID call volumes rose rather than moving to chatbots.
- **Spoken vs natural language understanding.** PolyAI combines several speech recognisers and reasons over n-best hypotheses (Serbian, Siberian or Syrian food). It also uses conversation history and primes the recogniser for expected input, such as a caller's surname during authentication.
- **Less labelled data.** Mrkšić recalls hand-annotating datasets of a few hundred examples at Cambridge. PolyAI's ConveRT encoder is instead pre-trained on billions of conversations from Reddit, Quora and Twitter, and he cites a Salesforce study that rated it the best model to pre-train with.
- **Multilingual by design.** Drawing on work with Ivan Vulić, he describes shared cross-lingual embedding spaces and retraining one unified model for each new language, which he compares to how PageRank unified search.
- **Long horizon.** Mrkšić expects to work on the problem for life. He notes profanity can reach double-digit percentages of input to big-tech assistants, and says natural voice interfaces are still far off.

## Quotes

> "When I need customer service, I like to call." — Nikola Mrkšić

> "It takes much less data to get to a high level of performance than something being trained from scratch." — Nikola Mrkšić
