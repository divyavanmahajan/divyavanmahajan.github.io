---
title: Making Transformers Sing - with Mikey Shulman of Suno
description: >-
  Mikey Shulman argues that transformer models predicting audio tokens, with
  minimal built-in music knowledge, can turn music from passive listening into
  something ordinary people actively make together.
pubDate: '2024-03-14'
show: latent-space
url: >-
  https://lspace.beehiiv.com/podcast/s/latent_space_the_ai_engineer_podcast/making_transformers_sing_-_with_mikey_shulman_of_suno
durationMin: 53
hosts:
  - Alessio Fanelli
  - swyx
guests:
  - Mikey Shulman
tags:
  - music-generation
  - generative-audio
  - transformers
  - text-to-speech
  - suno
draft: false
---
## Thesis

Suno co-founder Mikey Shulman tells Alessio Fanelli and swyx that audio generation is one to two years behind text and images, and that Suno treats it like language modelling: predict the next audio token, with as little hand-built music knowledge as possible. His goal is not to serve professionals but to make music an active, social pastime for ordinary people.

## Key points

- **Tokenising audio is the hard part.** Shulman says Suno prefers transformers to diffusion and that its secret sauce lies mainly in how audio is turned into discrete tokens. Training data is not only music; other vocal audio helps, much as CodeLlama benefits from English text.
- **Small models by choice.** Because music has to stream as fast as people listen, he doubts Suno will reach a 175-billion-parameter model, and he says working with small models forced the team to learn things scaling would have hidden.
- **From Bark to music.** The founders met at Kensho doing financial speech recognition. Their open source text-to-speech model Bark borrowed code from Andrej Karpathy's NanoGPT, and users on Discord trying to pull music out of it convinced them to focus on music.
- **How people use it.** More than half of usage is the custom mode, Shulman says. He describes two use cases, quick joke songs and refining a song stuck in your head, and says Suno blocks other people's lyrics because users lack publishing rights.
- **Making the pie bigger.** He notes gaming is about 50 times larger than the music industry because it is active, and wants multiplayer music and collaborative concerts. He also says Suno is popular with blind and vision-impaired users.
- **Aesthetics matter.** Citing Goodhart's law, Shulman says audio benchmarks are worse than text ones, so the team relies on listening, and he rates economists as machine learning hires.

## Quotes

> "the gaming industry is 50 times bigger than the music industry, and it's because gaming is super active." — Mikey Shulman

> "I'm a machine learning person, but, like, machine learning people are stupid sometimes" — Mikey Shulman
