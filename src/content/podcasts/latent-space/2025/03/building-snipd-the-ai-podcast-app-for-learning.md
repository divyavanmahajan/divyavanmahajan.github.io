---
title: 'Building Snipd: The AI Podcast App for Learning'
description: >-
  Snipd treats podcasts as a knowledge source, not music, and uses a
  cost-conscious AI pipeline to help listeners capture, search and retain what
  they hear.
pubDate: '2025-03-14'
show: latent-space
url: >-
  https://lspace.beehiiv.com/podcast/s/latent_space_the_ai_engineer_podcast/building_snipd_the_ai_podcast_app_for_learning
durationMin: 78
hosts:
  - Alessio Fanelli
  - swyx
guests: []
tags:
  - consumer-ai
  - speech-to-text
  - speaker-diarization
  - llm-as-judge
  - voice-ai
draft: false
---
## Thesis

Kevin, a co-founder of Snipd, argues that podcast apps are still repurposed music players, even though podcasts are one of the largest sources of knowledge in the world. Snipd uses AI as a means to an end: helping people who listen to learn capture and apply what they hear. His product lesson for consumer AI is to focus on the job to be done and move beyond the chat box.

## Key points

- **Hypothesis flipped.** Snipd launched about three and a half years ago, before ChatGPT and Whisper, as a social feed of short clips ("snips"). Users did the opposite of what the team expected: they listened to full episodes but created snips constantly, for example by triple-tapping their headphones. The team then doubled down on learning.
- **Origin and team.** The idea started at Hack Zurich, where natural-language search over a Joe Rogan episode with Elon Musk won the hackathon. The company now has four people, all technical, with a mostly Python backend on Google Cloud and a Flutter app.
- **Pipeline at scale.** More than a million podcasts have been processed. Transcription and speaker diarization run on self-hosted models, helped by podcast heuristics: someone who speaks for thirty seconds in a one-hour episode is probably in an ad. Later steps use OpenAI and Gemini models, plus Perplexity for book lookups at about five dollars per thousand queries.
- **Production details.** Dynamic ad insertion breaks transcript timestamps, so the team built a fuzzy audio matcher to re-sync them. Regexes clean up LLM formatting in streamed chat answers. A stronger LLM judge picks the best of five candidate quotes and checks book and speaker extraction.
- **Cost drives model choice.** Kevin likes Claude's style but uses cheaper models for high-volume work. He tried Gemini 2 Flash on raw audio and expects to switch to multimodal models once their cost comes down.
- **Next bets.** The roadmap covers content (audiobooks, AI-generated episodes), discovery, and voice. The idea is an AI companion that comes on when an episode ends, building on an existing listening habit instead of Duolingo-style notifications. swyx argues that YouTube is the best podcasting platform and that Snipd should serve creators.

## Quotes

> "we basically built Shazam for podcasts." — Kevin

> "But if you're building a consumer app, you have to move beyond the chat box." — Kevin
