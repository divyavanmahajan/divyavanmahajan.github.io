---
title: '[AIEWF Preview] Gemini in 2025 and Realtime Voice AI'
description: >-
  Google's Gemini API team and Daily's Quinn discuss developer controls from
  Google I/O and why real-time voice AI is mainly a latency and infrastructure
  problem.
pubDate: '2025-06-02'
show: latent-space
url: >-
  https://lspace.beehiiv.com/podcast/s/latent_space_the_ai_engineer_podcast/aiewf_preview_gemini_in_2025_and_realtime_voice_ai
durationMin: 24
hosts:
  - Alessio Fanelli
  - swyx
guests: []
tags:
  - gemini
  - voice-ai
  - realtime-api
  - google-io
  - developer-tools
draft: false
---
## Thesis

Recorded at Google I/O as a crossover with Sam Charrington of the TWiML AI podcast, this conversation has Logan and Shrestha from the Gemini API team arguing that Google is building toward one Gemini model while giving developers finer control over it. Quinn, founder of Daily and of the open source Pipe Cat voice framework, adds that real-time voice is a different engineering problem from text, with latency at its centre.

## Key points

- **More control over thinking models.** Logan highlights thought summaries, which are live now, and thinking budgets coming to 2.5 Pro with the GA model, including an option to switch thinking off. Implicit context caching now passes savings on to developers automatically.
- **Native audio and URL Context.** Shrestha's picks are native audio output, which switches between languages such as Bengali and English, and a URL Context tool for pulling more detailed web content, for example to build research agents.
- **Live API pain points.** Shrestha says early sessions were limited to fifteen to twenty minutes of audio and about five minutes of video. New knobs such as sliding windows and video resolution extend that, alongside work on tool calls and per-step system instructions.
- **One model.** Relaying a view from Koray at DeepMind, Logan says capabilities such as reasoning get forked, hardened, then merged back. He credits that merge for 2.5 Pro reaching state of the art in video understanding.
- **Latency budget.** Shrestha puts the voice latency target at five hundred to seven hundred milliseconds. Quinn says features like turn detection move from frameworks into APIs as models improve.
- **New voice features.** Proactive audio ignores irrelevant speech, voice activity detection is tunable or replaceable, and asynchronous function calling no longer blocks the model. Quinn says the native audio dialogue model can tell two speakers apart, though this is not officially supported.

## Quotes

> "we're here to make one model, and, like, that model is Gemini." — Logan

> "Like, human beings expect you to respond in a conversation in five hundred milliseconds or so, and if we're talking to an AI, we don't relax that assumption." — Quinn
