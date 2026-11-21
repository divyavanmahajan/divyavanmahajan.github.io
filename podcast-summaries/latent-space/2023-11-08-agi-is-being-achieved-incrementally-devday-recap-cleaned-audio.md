---
title: "AGI is Being Achieved Incrementally (DevDay Recap - cleaned audio)"
date: 2023-11-08
show: latent-space
url: "https://lspace.beehiiv.com/podcast/s/latent_space_the_ai_engineer_podcast/agi_is_being_achieved_incrementally_devday_recap_-_cleaned_audio"
duration_min: 142
hosts: ["Alessio Fanelli", "swyx"]
description: "Builders react to OpenAI DevDay: GPT-4 Turbo, the Assistants API and GPTs are powerful but under-documented, and they push startups out of OpenAI's chosen product lanes."
tags: ["openai", "assistants-api", "gpts", "prompt-injection", "ai-startups"]
source_transcript: "latent-space/episodes/2023/11/2023-11-08-agi-is-being-achieved-incrementally-devday-recap-cleaned-audio.md"
draft: false
---

## Thesis

Recorded the day after OpenAI's first DevDay, the episode has two parts: a recap with Simon Willison and Alex Volkov, then short interviews with builders. The shared view is that OpenAI shipped far more than expected: GPT-4 Turbo, the Assistants API, GPTs, vision, text-to-speech and JSON mode. Much of it is rough around the edges and poorly documented, and it squeezes startups whose product was a thin layer over these features.

## Key points

- **Assistants API.** Alex Volkov praises the threads that hold conversation state and the document parsing. Willison notes the limits: 20 files of up to 512 megabytes each. Storage costs 20 cents per gigabyte per assistant per day, which Alessio compares with S3 at about two cents per month.
- **Undocumented defaults.** Willison wants OpenAI to explain how its built-in RAG chunks and retrieves documents. Raza Habib of Humanloop calls drop-in retrieval "gimmicky" for enterprises, which need control over chunking and permissions.
- **Security.** Willison calls the Zapier and browsing demos a prompt-injection risk. The only safeguard he found is marking an action as "consequential" so the user must confirm it.
- **Pricing and vision.** Jim Fan estimates $180 to run all eight Harry Potter films through GPT-4V at one frame per second. Div Garg of Multion says vision helped on only about 5% of websites, since his parser fits most pages into fewer than 3K tokens.
- **Context and JSON.** Louis of Bloop found that 32k GPT-4 recalled only one of 10 hidden facts, against nine at 1,000 tokens, so 128K context needs testing. Shreya Rajpal of Guardrails AI notes OpenAI guarantees valid JSON, not JSON that matches your schema.
- **Startups under pressure.** Surya joked that "Sam Altman killed my startup" when GPTs replaced his plugins. Julius AI's Rahul says he launched after Code Interpreter and still reached 100,000 users.

## Quotes

> "On the one hand, yes, it was super, super cool, and I can't wait to try that out. On the other hand, it was a prompt injection nightmare." — Simon Willison

> "If you, if you want to build a risk-free startup, you probably don't want to work on startups." — Rahul (Julius AI)
