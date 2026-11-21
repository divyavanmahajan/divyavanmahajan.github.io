---
title: 'Practical, positive uses for deep fakes'
description: >-
  Hour One's CTO argues that consented virtual humans let people digitise and
  lend their likeness, turning deepfake technology into a business video tool
  and a new character economy.
pubDate: '2022-08-24'
show: practical-ai
episode: 190
url: 'https://share.transistor.fm/s/20701c82'
durationMin: 43
hosts:
  - Chris Benson
  - Daniel Whitenack
guests:
  - Lior Hakim
tags:
  - deepfakes
  - synthetic-media
  - virtual-humans
  - generative-video
  - data-pipelines
draft: false
---
## Thesis

Lior Hakim, CTO of Hour One, presents deepfakes as virtual humans: a new interface for communicating with and through machines. He argues that when people control their digitised likeness, they can use it themselves or lend it to others. Trust will grow as positive uses become visible.

## Key points

- **Likeness as a skill set.** Hakim describes appearance, voice and gestures as traits people can digitise and put to work. Examples include presenting as your best self in a sales meeting, or lending your likeness to a commercial or film character.
- **A character economy.** Hakim expects a marketplace where people are paid to have their voice read books or their face present content, and where celebrities control where and for what price they appear. Whitenack imagines putting his face on other creators' tutorials in exchange for revenue sharing. Benson imagines brands built on actors from films such as Grease.
- **How the pipeline works.** Hakim outlines text, then voice cloning and text-to-speech, then a model that renders the face speaking the audio. On Hour One's platform, users write text, choose a character, voice and language, and get a video within minutes.
- **Technical challenges.** Hour One collects video of many people speaking different languages from different angles, labels it with landmarks, and mainly uses GANs to map audio to faces. Hakim says temporal stability is the hard part. His advice to practitioners is to treat the end-to-end data pipeline, from camera to GPU data loader, as the main challenge.
- **Product and roadmap.** Hour One sells a SaaS product with a free trial and subscriptions, focused on business use. Hakim mentions work on prompt-based imagery, 3D environments and inversion, such as rendering a version of himself with hair.
- **Real versus fake.** Asked how people can tell the difference, Hakim argues that bias in models reflects culture, and that society will decide how to moderate the technology.

## Quotes

> "I don't fully subscribe to the notion of a fake and real" — Lior Hakim

> "the biggest challenge with data as I see it is data pipelines." — Lior Hakim
