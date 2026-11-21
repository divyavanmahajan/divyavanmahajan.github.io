---
title: "Cloning voices with Coqui"
date: 2022-07-12
show: practical-ai
episode: 184
url: "https://share.transistor.fm/s/39ef8e3f"
duration_min: 52
hosts: ["Chris Benson", "Daniel Whitenack"]
guests: ["Josh Meyer"]
description: "Coqui co-founder Josh Meyer argues that voice cloning becomes useful once non-coders can use it, and that open source and community-led work are key to building it responsibly."
tags: ["speech-synthesis", "voice-cloning", "open-source", "low-resource-languages", "responsible-ai"]
source_transcript: "practical-ai/episodes/2022/07/2022-07-12-cloning-voices-with-coqui.md"
draft: false
---

## Thesis

Josh Meyer, co-founder of the speech startup Coqui, argues that voice technology works best when it supports people rather than replacing them, and that the main change in voice cloning is access: anyone can now use it from a browser. He sees expressive, controllable emotion as the next hard problem. He also argues that open source, community-led collaboration and open discussion of misuse matter as much as the models.

## Key points

- **Cloning from a few seconds of audio.** The hosts opened the episode with cloned versions of their own voices; Whitenack's took about 11 seconds of audio. Meyer says the core technique was published at ICML and used to require command-line skills. The web app caps samples at 30 seconds, but five seconds is usually enough.
- **Augment, don't replace.** Meyer compares voice tech to self-driving cars: he would not let one drive him around town, but he would let it parallel park. He sees call-centre agents using live transcripts and NLP suggestions rather than being replaced.
- **Emotion as the next problem.** He says flat synthetic speech is now hard to tell from human speech. The open question is how users should direct emotion: a colour-wheel interface, drop-down menus, or free-text directions like those in film scripts.
- **Open source roots.** Coqui's speech-to-text and text-to-speech projects began during about five years of work with Mozilla, with Common Voice supplying the data. Its speech recognition models are about 46 megabytes and run offline; community members built a voice-controlled 3D chessboard and are porting the tools to Wasm.
- **African languages.** Meyer and Whitenack worked with the Masakhane community on BibleTTS, which adds six sub-Saharan African languages. Both say involving language communities made the work better.
- **Mitigating misuse.** Meyer splits misuse into accidental and deliberate cases. Coqui runs an open GitHub discussion on safeguards, added audible background music as a watermark to an earlier anonymous demo, and now requires sign-in with a real email address.

## Quotes

> "five seconds is enough to get a nice voice print or however you want to call it." — Josh Meyer

> "if you're not a part of the community, you have no idea. That's why you really need to be working with people from the community." — Josh Meyer
