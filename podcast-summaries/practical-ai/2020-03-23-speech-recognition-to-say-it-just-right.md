---
title: "Speech recognition to say it just right"
date: 2020-03-23
show: practical-ai
episode: 82
url: "https://share.transistor.fm/s/0d860c05"
duration_min: 49
hosts: ["Chris Benson", "Daniel Whitenack"]
guests: ["Catherine Breslin"]
description: "Catherine Breslin explains how commercial speech recognition combines a lexicon, acoustic model and language model, and why the next step is extending it to more languages and people."
tags: ["speech-recognition", "voice-assistants", "acoustic-models", "transfer-learning", "accessibility"]
source_transcript: "practical-ai/episodes/2020/03/2020-03-23-speech-recognition-to-say-it-just-right.md"
draft: false
---

## Thesis

Catherine Breslin, a solutions architect at Cobalt and former Amazon Alexa scientist, walks Daniel Whitenack and Chris Benson through how speech technology works. She argues that hybrid systems built from separate components still power most commercial products, and that the main opportunity now is taking the technology beyond English to new languages and users.

## Key points

- **Inside a virtual assistant.** Breslin describes a pipeline: a small on-device wake-word detector, speech recognition from audio to text, and language understanding that buckets requests into intents and slots. She says long conversations remain weak, so designers keep them short, and dialogue state tracking replaces older flowchart-style IVR designs.
- **Beyond assistants.** She points to automated subtitling for accessibility and search, and to transcribing regulated conversations such as financial advice.
- **Three components.** A lexicon maps words to pronunciations (around 50 sounds in English), an acoustic model predicts phonemes from audio, and a language model predicts word sequences. Breslin credits the move from Gaussian mixture models to neural networks over the past decade with large accuracy gains.
- **Audio as input.** Audio is cut into roughly 25 millisecond frames, passed through a Fourier transform and a filter bank spaced to mimic the human ear. Accent affects every component, and noise, informal speaking style and specialist domains still degrade accuracy. Microphone arrays or voice characteristics support diarization.
- **End-to-end versus hybrid.** Breslin says end-to-end neural models, pushed by Google, are a major research topic but need more audio data and are, to her knowledge, on par with or slightly behind hybrid systems.
- **Data and new languages.** Transfer learning from an English acoustic model to a language such as German needs roughly 100 to 1,000 hours of audio, and semi-supervised learning on automatically transcribed audio adds further gains. She wants voice interfaces to help people who do not read and write, elderly users and people with speech-affecting conditions.

## Quotes

> "you very much get the feeling that you're being walked through a flow chart by voice." — Catherine Breslin

> "the order of 100 hours up to 1000 hours of audio can get you really good starting points for your model" — Catherine Breslin
