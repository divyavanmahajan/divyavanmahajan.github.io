---
title: "Mistral: Voxtral TTS, Forge, Leanstral, & what's next for Mistral 4 — w/ Pavan Kumar Reddy & Guillaume Lample"
date: 2026-03-30
show: latent-space
url: "https://lspace.beehiiv.com/podcast/s/latent_space_the_ai_engineer_podcast/mistral_voxtral_tts_forge_leanstral_what_s_next_for_mistral_4_w_pavan_kumar_reddy_guillaume_lample"
duration_min: 49
hosts: ["Alessio Fanelli", "swyx"]
guests: ["Pavan Kumar Reddy", "Guillaume Lample"]
description: "Mistral bets on small, efficient specialised models, open weights and customer fine-tuning, illustrated by its new Voxtral TTS speech model, the Forge platform and Leanstral."
tags: ["text-to-speech", "open-weights", "fine-tuning", "formal-verification", "mixture-of-experts"]
source_transcript: "latent-space/episodes/2026/03/2026-03-30-mistral-voxtral-tts-forge-leanstral-what-s-next-for-mistral-4-w-pavan.md"
draft: false
---

## Thesis

Mistral's chief scientist Guillaume Lample and audio research lead Pavan Kumar Reddy argue for a portfolio of efficient, specialised open-weight models that customers can fine-tune on their own data, rather than one expensive generalist. The launch of Voxtral TTS, the Forge training platform and the Leanstral formal-proof model all follow from that strategy.

## Key points

- **Voxtral TTS.** Mistral's first speech-generation model supports nine languages, is built on a 3B Mistral backbone and ships with open weights. Reddy describes an in-house neural audio codec producing 12.5 Hz latents (one semantic plus several acoustic tokens per 80 ms frame) and an autoregressive transformer with a flow-matching head, which beat a depth transformer on latency and needs only four to sixteen inference steps.
- **No settled recipe.** Reddy says audio, unlike text, has no winning architecture yet. Lample adds that speech models still work much worse in French, Spanish or German than in English, and full duplex speech is the long-term goal, built step by step.
- **Forge and fine-tuning.** Announced at GTC, Forge gives customers the same training stack Mistral's science team uses for continued pre-training, SFT and RL. Lample argues closed models waste companies' years of proprietary data; examples include a model with a rare Asian language at 50% of the mix, an offline in-car assistant, and cutting costs roughly tenfold.
- **Merged models.** The new Mistral Small merges previously separate models (instruct, Devstral, Magistral, Pixtral) into one sparse mixture-of-experts with 6B active parameters and a 256K context. Lample still prefers small dedicated models for tasks such as transcription.
- **Leanstral.** Lample says formal proofs in Lean give verifiable rewards where most maths answers cannot be checked, and expects coding agents to grow the small software verification market.
- **Long-horizon RL.** Lample says current RL algorithms, built for maths problems solved in a few thousand tokens, go badly off-policy when rewards arrive after hours, so Mistral is building new infrastructure and algorithms for very long trajectories.

## Quotes

> "unlike text, even in vision, I think this is true, but in audio it's definitely true, is that there is no winner model yet." — Pavan Kumar Reddy

> "we really don't want to be living in a world where the smartest model, the best models are only behind closed doors" — Guillaume Lample
