---
title: NLP for the world's 7000+ languages
description: >-
  Taking AI beyond the roughly 100 supported languages needs linguistic data
  from groups like SIL combined with scalable, open source infrastructure like
  Pachyderm, packaged as reusable pipelines.
pubDate: '2020-02-24'
show: practical-ai
episode: 78
url: 'https://share.transistor.fm/s/f918e894'
durationMin: 55
hosts:
  - Chris Benson
  - Daniel Whitenack
guests:
  - Dan Jeffries
tags:
  - low-resource-languages
  - nlp
  - text-to-speech
  - mlops
  - ai-for-good
  - open-source
draft: false
---
## Thesis

Daniel Whitenack, speaking for SIL International rather than as host, and Dan Jeffries of Pachyderm argue that local languages will only get AI support when linguistic expertise and data are combined with industry infrastructure. Their goal is reproducible, open pipelines that can cover many languages at once instead of one at a time.

## Key points

- **Scale of the gap.** Whitenack says there are 7,111 living languages, about 700 in Indonesia alone, and that over half the world speaks about 23 of them. He links language to all 17 UN Sustainable Development Goals and cites studies showing children do better when schooling starts in their mother tongue.
- **SIL's role.** Whitenack describes SIL as a nonprofit with staff from over 80 countries that has worked with over 2,000 languages, and maintains Ethnologue and the Keyman keyboard, which supports over 1,000 languages. He wants to push building blocks such as speech-to-text, translation and predictive text into the long tail.
- **Why partner.** Whitenack says SIL has data but is not a tech company. Jeffries describes Pachyderm as version control and data lineage for data science on Kubernetes, and cites a customer whose language preprocessing fell from about ten weeks to six or seven days once parallelised.
- **Singlish text-to-speech.** Whitenack walks through adapting a TTS model to Singlish using about 800 GB of audio from roughly 2,000 speakers, obtained via partner Wordly and Singapore's IMDA. The resulting pipeline is published on GitHub as a template others can rerun on their own data.
- **Open source and tool choice.** Jeffries, a former nine-year Red Hat employee, argues that tool-agnostic open infrastructure lets teams use niche toolkits like Kaldi that cloud services would not support.
- **Augmentation, not AGI.** Jeffries frames AI as a lever that scales scarce experts. Whitenack imagines pipelines that use Ethnologue data to find the closest related language with a pre-trained model, for example for Kabundu, an Angolan language.

## Quotes

> "How could we knock out 40 languages at a time?" — Daniel Whitenack

> "they were able to parallelize it with Pachyderm and get it down to about six or seven days." — Dan Jeffries
