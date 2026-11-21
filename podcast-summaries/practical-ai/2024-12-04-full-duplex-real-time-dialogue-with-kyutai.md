---
title: "Full-duplex, real-time dialogue with Kyutai"
date: 2024-12-04
show: practical-ai
episode: 298
url: "https://share.transistor.fm/s/3f7b3ef6"
duration_min: 50
hosts: ["Chris Benson", "Daniel Whitenack"]
guests: ["Alexandre Défossez"]
description: "Kyutai co-founder Alexandre Défossez explains how a small non-profit Paris lab built Moshi, an open, full-duplex speech-to-speech model with roughly 200 ms latency."
tags: ["speech-ai", "open-science", "real-time-dialogue", "on-device-ai", "small-models"]
source_transcript: "practical-ai/episodes/2024/12/2024-12-04-full-duplex-real-time-dialogue-with-kyutai.md"
draft: false
---

## Thesis

Alexandre Défossez argues that a small, independent non-profit lab can still out-innovate big labs by picking a niche where it has an edge. For Kyutai that niche was combining text-model knowledge with top-tier audio modelling, which produced Moshi, a speech foundation model that listens and speaks at the same time. He sees the future in smaller, on-device models that handle the conversation and hand harder questions to larger models.

## Key points

- **Who funds Kyutai.** Défossez says the Paris non-profit launched about a year earlier, funded by Xavier Niel, Rodolphe Saadé and Eric Schmidt, with a mission of open-source research. He credits France's engineering and maths culture, and the option of doing a PhD while working at a company, for the strength of the local AI scene.
- **What open science means.** Kyutai published a detailed technical report on Moshi, released it under a commercially friendly licence, and plans to release training code too. Défossez says the non-profit setup lets them decide faster and work on on-device models that for-profit labs may avoid for IP reasons.
- **Full duplex, low latency.** Moshi is not turn-based. It can listen and speak at any moment, with about 200 milliseconds between audio leaving the microphone and a reply that takes it into account.
- **One framework, many tasks.** Moshi runs separate audio and text streams. Défossez explains that putting the text stream ahead of the audio turns the model into text-to-speech, while putting it behind turns it into speech recognition.
- **Data work.** The team built its own text pre-training set, bootstrapped speaker-separated audio from the Fisher phone-call dataset, recorded voice actors at a London studio, and wrote audio-specific instruction scripts.
- **Size and what comes next.** Moshi has 7 billion parameters, picked as a safe, well-known size. Défossez now wants smaller models for on-device use, and is watching for a possible post-Transformer architecture and better ML frameworks.

## Quotes

> "So it's not turn-based like walkie-talkies, which I think is an important feature like when us, we communicate." — Alexandre Défossez

> "So we have like around 200 milliseconds between the time the audio leaves your microphone and the time you get a reply that has accounted for that audio." — Alexandre Défossez
