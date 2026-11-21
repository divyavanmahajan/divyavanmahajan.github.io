---
title: "AGI is Being Achieved Incrementally (OpenAI DevDay w/ Simon Willison, Alex Volkov, Jim Fan, Raza Habib, Shreya Rajpal, Rahul Ligma, et al)"
date: 2023-11-08
show: latent-space
url: "https://lspace.beehiiv.com/podcast/s/latent_space_the_ai_engineer_podcast/agi_is_being_achieved_incrementally_openai_devday_w_simon_willison_alex_volkov_jim_fan_raza_habib_shreya_rajpal_rahul_ligma_et_al"
duration_min: 143
hosts: ["Alessio Fanelli", "swyx"]
guests: ["Simon Willison", "Alex Volkov", "Jim Fan", "Raza Habib", "Shreya Rajpal", "Rahul Ligma"]
description: "Builders react to OpenAI DevDay: GPT-4 Turbo, the Assistants API and GPTs deliver a huge, cheaper platform, but with opaque defaults, prompt-injection risks and real pressure on startups."
tags: ["openai", "assistants-api", "gpts", "prompt-injection", "multimodal", "ai-startups"]
source_transcript: "latent-space/episodes/2023/11/2023-11-08-agi-is-being-achieved-incrementally-openai-devday-w-simon-willison-ale.md"
draft: false
---

## Thesis

Recorded the day after OpenAI DevDay, swyx and Alessio Fanelli recap the launches with Simon Willison and Alex Volkov, then add on-site interviews with founders and researchers. The shared view is that OpenAI shipped far more than expected (GPT-4 Turbo with 128k context, the Assistants API, GPTs, vision, text-to-speech, Whisper 3) at lower prices, but much of it is undocumented and rough, and it absorbs features many startups were building.

## Key points

- **Opaque defaults.** Simon Willison estimates the releases are about 80% of what the keynote implied, and wants OpenAI to document how its built-in RAG chunks and retrieves. Assistants allow up to 20 files of 512 megabytes each; the hosts cite Jeremy Howard's figure of 20 cents per gigabyte per assistant per day against two cents per month for S3.
- **Security gaps.** The Zapier and browsing demos raise prompt-injection worries; the one safeguard Willison found is marking an action as "consequential" so the user must confirm it.
- **Cost and customization.** Jim Fan calculates that GPT-4V could watch all eight Harry Potter films at one frame per second for $180, and expects prices to keep falling. He sees customization by API, dialogue and data as the theme.
- **Limits of the new features.** Raza Habib finds drop-in RAG gimmicky for enterprises that need permissioning, and treats fine-tuning as a late optimization step. Div Garg says vision helped on only about 5% of websites for MultiOn's browser agent. Louis of Bloop found earlier 32K GPT-4 recovered only one of 10 hidden facts, so he plans to test the 128k window.
- **Startups under pressure.** Surya, a plugin developer, saw plugins disappear from the new UI in favour of GPTs. swyx compares the launch to a "red wedding" for RAG and agent startups. Shreya Rajpal notes OpenAI guarantees valid JSON but not schema compliance.
- **Building anyway.** Rahul Ligma says Julius reached 100,000 users despite launching after Code Interpreter, and highlights Turbo's speed and multiple function calling.

## Quotes

> "this year's theme is customization. Customized by assistant API, customized by dialogue, customized by data." — Jim Fan

> "If you, if you wanna build a risk-free startup, you probably don't wanna work on startups." — Rahul Ligma
