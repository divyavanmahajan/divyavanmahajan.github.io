---
title: >-
  State Space Models and Real-time Intelligence with Karan Goel and Albert Gu
  from Cartesia
description: >-
  Cartesia's founders argue state space models, as efficient fuzzy compressors,
  suit real-time audio and on-device inference better than Transformers,
  especially in hybrids with a little attention.
pubDate: '2024-06-27'
show: no-priors
episode: 70
url: 'https://www.youtube.com/watch?v=neQbqOhp8w0'
youtube: 'https://www.youtube.com/watch?v=neQbqOhp8w0'
durationMin: 34
hosts:
  - Sarah Guo
  - Elad Gil
guests:
  - Karan Goel
  - Albert Gu
tags:
  - state-space-models
  - text-to-speech
  - on-device-ai
  - model-architecture
  - voice-agents
draft: false
---
## Thesis

Albert Gu and Karan Goel, co-founders of Cartesia and co-authors of S4 and Mamba, tell Sarah Guo and Elad Gil that state space models (SSMs) are a general building block that compresses a stream of data into a constantly updated state. Gu argues this gives linear scaling and a better fit for raw audio and video than Transformers. Goel argues that this efficiency will move capable models from the data center to the edge, starting with real-time speech.

## Key points

- **Fuzzy compression versus exact recall.** Gu describes SSMs as fuzzy compressors with constant time per new token, while a Transformer remembers every token and scales quadratically. Hybrids work best: he says at least five groups have found the optimal mix is roughly 10 SSM layers to one attention layer.
- **No free lunch on data types.** Gu says Transformers co-evolved with tokenisation and do poorly on raw pixels or audio samples, where SSMs do well; Mamba narrowed the gap on text.
- **Sonic and latency.** Goel says Cartesia's Sonic text-to-speech engine targets gaming characters and voice agents, already shaving about 150 milliseconds off typical pipelines, with a goal of removing the next 600. The show notes cite 135ms model latency.
- **Speech is not solved.** Goel's test is whether he would talk to a system for more than 30 seconds; he wants control over emotion and role-specific speaking styles. Gu adds that correct pronunciation needs language understanding, which pushes towards multimodal models.
- **Edge over cloud.** Goel wants a capability that costs a million dollars in the data center to run for $10 on a commodity GPU. A 7B model on a Mac loses tokens per second as memory climbs; he demoed Sonic running in real time on a laptop. The end goal is one multimodal model instead of orchestrated speech-to-text-to-speech pipelines.
- **Team and taste.** Gu, now a CMU professor, says he picks research problems on aesthetics. Cartesia has 15 staff and eight interns and is hiring modelling roles.

## Quotes

> "in general there's no free lunch there so people think that like you can throw a Transformer at like anything and it just works" — Albert Gu

> "would I want to talk to this thing for more than 30 seconds and if the answer is no then it's not solved" — Karan Goel
