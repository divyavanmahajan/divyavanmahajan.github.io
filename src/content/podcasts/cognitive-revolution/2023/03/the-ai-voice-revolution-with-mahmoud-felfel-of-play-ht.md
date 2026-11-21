---
title: The AI Voice Revolution with Mahmoud Felfel of Play.ht
description: >-
  Mahmoud Felfel explains how Play.ht moved from reselling big-tech
  text-to-speech to its own transformer voice models, and how it handles
  directable voices, moats and voice-cloning abuse.
pubDate: '2023-03-24'
show: cognitive-revolution
url: >-
  https://www.cognitiverevolution.ai/the-ai-voice-revolution-with-mahmoud-felfel-of-play-ht/
youtube: 'https://www.youtube.com/watch?v=9YtxBnj52Wc'
hosts:
  - Nathan Labenz
  - Erik Torenberg
guests:
  - Mahmoud Felfel
tags:
  - text-to-speech
  - voice-cloning
  - generative-audio
  - deepfakes
  - ai-startups
draft: false
---
## Thesis

Mahmoud Felfel, CEO of Play.ht, argues that self-supervised transformer models have turned text-to-speech into "human voice" generation, opening markets such as games, TV and podcasts that robotic voices could never serve. He expects the base models to commoditise over time. In his view, the durable value lies in vertical fine-tuning, private data, on-premise deployments for studios and polished applications. Nathan Labenz pushes him on deepfake risk, and Felfel describes Play.ht's layered approach to preventing abuse.

## Key points

- **From wrapper to model builder.** Play.ht began as a Chrome extension that read Medium articles aloud using IBM Watson voices, then resold AWS, Google and Azure voices. Felfel says buyers in the high-end market rejected the quality, so the company trained its own model. Five months after launch it served about 60% of usage.
- **Architecture.** Felfel describes a transformer pipeline of roughly 300 million parameters that generates mel spectrograms, which vocoders turn into audio. It was trained on large, mixed-quality datasets such as Mozilla's Common Voice. He says the model learned emotion from the text itself, without labels.
- **Directable voices.** Users now compare the output with human actors, not older TTS. Felfel expects people to "direct" voices with descriptive prompts and controls such as voice guidance, rather than with SSML markup. He treats output variation as a feature: users generate several takes and pick one.
- **New markets.** Felfel cites South Park and HBO using a Play.ht voice in production, gaming studios that want voiced NPCs players can talk to, and creators producing English videos or cloning their own voices.
- **Moats.** Felfel argues that individual users will become a crowded market, but gaming, production and enterprise customers will need specialised, often privately deployed models. He compares base models to cloud platforms that support large application businesses on top.
- **Abuse controls.** Play.ht reviewed early cloning users by hand, added strict content moderation and released a free public classifier for AI-generated audio. Felfel argues that moderating the text people generate matters more than blocklisting celebrity voices.

## Quotes

> "This was the first time ever you're automating the human voice." — Mahmoud Felfel

> "Because now they are not comparing it with text to speech, they are comparing it with humans." — Mahmoud Felfel
