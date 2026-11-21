---
title: Speech tech and Common Voice at Mozilla
description: >-
  Mozilla's Common Voice crowdsources open, consent-based speech data so that
  languages and speakers left out by big tech, including African language
  communities, can build their own speech technology.
pubDate: '2020-09-09'
show: practical-ai
episode: 104
url: 'https://share.transistor.fm/s/62b03a44'
durationMin: 59
hosts:
  - Chris Benson
  - Daniel Whitenack
guests:
  - Jenny Zhang
  - Remy Muhire
  - Josh Meyer
tags:
  - speech-recognition
  - open-data
  - low-resource-languages
  - dataset-bias
  - data-governance
draft: false
---
## Thesis

Jenny Zhang, Remy Muhire and Josh Meyer argue that speech technology has been held back by closed, English-heavy and demographically skewed data. Zhang presents Mozilla's Common Voice as a crowdsourced, privacy-minded alternative. Muhire and Meyer describe how their Mozilla fellowship uses it with DeepSpeech to build speech tools for African languages and to measure bias.

## Key points

- **Scale of Common Voice.** Zhang says the June 2020 release had 7,200 recorded hours in 54 languages, about 5,600 of them validated, from just under 400,000 contributors. A language goes live once the site is localised and the community supplies 5,000 CC0-licensed sentences.
- **How much data.** Meyer says a narrow task can sometimes work with zero data by adapting an English model, but people usually cite about 2,000 hours for open-domain recognition.
- **Why voice in Rwanda.** Muhire notes that about 30% of adults in sub-Saharan Africa are illiterate and that people already use WhatsApp voice notes. He describes Kinyarwanda, spoken by over 12 million people, and Digital Umuganda collecting over 1,000 hours for a COVID-19 chatbot.
- **Measuring bias.** Meyer's Artie Bias Corpus, about 1,700 clips with self-reported demographics, tests whether a model performs statistically worse for a group. He finds accent and gender matter much more than age.
- **No inferred demographics.** Zhang rejects using models to label contributors who did not self-identify, because those models are biased too. Meyer adds that withheld data signals the person does not want you to have it.
- **Democratising expertise.** Meyer wants reusable playbooks from the Kinyarwanda project and a Makerere University radio keyword-spotting project. Zhang warns that voice data is inherently biometric and raises hard governance questions.

## Quotes

> "the only data you can, you know, guarantee to be secure is data you never collect in the first place." — Jenny Zhang

> "if the person didn't give you that data, they don't want you to have it." — Josh Meyer
