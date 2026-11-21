---
title: "Personalized AI Language Education — with Andrew Hsu, Speak"
date: 2025-07-11
show: latent-space
url: "https://lspace.beehiiv.com/podcast/s/latent_space_the_ai_engineer_podcast/personalized_ai_language_education_with_andrew_hsu_speak"
duration_min: 64
hosts: ["Alessio Fanelli", "swyx"]
guests: ["Andrew Hsu"]
description: "Speak CTO Andrew Hsu argues that superhuman speech and language models make an AI-native 'gen three' of language learning possible, built around speaking drills rather than gamification."
tags: ["edtech", "language-learning", "speech-recognition", "realtime-voice", "consumer-ai"]
source_transcript: "latent-space/episodes/2025/07/2025-07-11-personalized-ai-language-education-with-andrew-hsu-speak.md"
draft: false
---

## Thesis

Andrew Hsu, co-founder and CTO of Speak, argues that he and his co-founder bet in 2016 that speech and language models would become superhuman, and that this would let software replace the human tutor needed for real fluency. After years without product-market fit, a narrow focus on teaching English in South Korea, followed by Whisper and LLMs in 2022, turned that bet into what he calls "gen three" of language learning.

## Key points

- **Painful early years.** Hsu says the first "Red App" (open-ended content packs, free) did not work. In 2018 the team rebuilt around structured courses, went premium only, and focused on South Korea, partly because their first employee was Korean.
- **Scale.** Hsu says Speak is the biggest English app in South Korea, that about six percent of Koreans have tried it, and that revenue is well over fifty million ARR. B2B started about a year ago as a side bet.
- **Pedagogy.** Speak teaches sentence patterns drilled until they become automatic, not vocabulary and grammar. Hsu contrasts this with Rosetta Stone (gen one) and gamified mobile apps like Duolingo (gen two).
- **Models.** A custom streaming ASR still runs the fast core loop. Whisper and LLMs drive open-ended tutoring, and a pronunciation coach is a fine-tuned wave2vec. An LLM pipeline with curriculum-writing agents aims for a hundred x more content, reviewed by the content team.
- **Fluency measurement.** Hsu describes a knowledge graph of the vocabulary and patterns each learner knows, with subscores that will roll up into a single "Speak score".
- **Real-time voice.** Speak is building on OpenAI's real-time API, but nothing is in production yet, mostly because of price. Hsu says turn detection dominates perceived latency, because learners hesitate mid-sentence for 10 seconds or more.

## Quotes

> "We don't teach vocabulary and grammar. We teach sentence patterns, and we try to get you to just repeat and drill and drill and drill" — Andrew Hsu

> "I would argue that's actually, like, a vanity metric because what you don't take into account is how the VAD works." — Andrew Hsu
