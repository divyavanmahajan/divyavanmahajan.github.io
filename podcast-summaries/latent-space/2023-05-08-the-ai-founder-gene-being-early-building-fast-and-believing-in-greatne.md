---
title: "The AI Founder Gene: Being Early, Building Fast, and Believing in Greatness — with Sharif Shameem of Lexica"
date: 2023-05-08
show: latent-space
url: "https://lspace.beehiiv.com/podcast/s/latent_space_the_ai_engineer_podcast/the_ai_founder_gene_being_early_building_fast_and_believing_in_greatness_with_sharif_shameem_of_lexica"
duration_min: 51
hosts: ["Alessio Fanelli", "swyx"]
guests: ["Sharif Shameem"]
description: "Sharif Shameem argues that AI capabilities far outrun products, so founders should ship the smallest useful thing fast, as Lexica did a day after Stable Diffusion launched."
tags: ["founders", "stable-diffusion", "image-search", "ai-agents", "product-development"]
source_transcript: "latent-space/episodes/2023/05/2023-05-08-the-ai-founder-gene-being-early-building-fast-and-believing-in-greatne.md"
draft: false
---

## Thesis

Sharif Shameem, founder of Lexica, traces a path from GPU marketplaces to viral GPT-3 demos to an image search engine and its own diffusion models. His argument, echoing the AI Grant programme, is that model capabilities far exceed the products built on them, so builders should ship small, useful things quickly, let users set the roadmap and pursue unusual ideas.

## Key points

- **Early bets.** Shameem describes VectorDash, which rented crypto miners' GPUs to ML researchers (over 120,000 Nvidia GPUs, about 20 cents an hour) before pivoting to cloud gaming, limited by home upload bandwidth. His 30-second GPT-3 demo generating React components drew 20,000 likes overnight and led to Debuild.
- **Lexica's launch.** He scraped about 10 million images from the Stable Diffusion Discord, built a search site in two days and shipped it 24 hours after the weights were released. He says it passed 1 million users in about a week and a half and now serves over 5 billion images a month; swyx adds that people knew how to search but not how to prompt.
- **Search and models.** Search moved from Postgres full-text to CLIP embeddings with Faiss on CPUs. For the Aperture models, Shameem says quality "boils down to" data: Lexica uses traffic-based pairwise rankings and aesthetic models to filter training sets. V1 aimed at photorealism and disappointed artists; V2 and V3 trained more on art.
- **Learning ML.** He recommends the Fast.ai course, the Deep Learning Book and Andrej Karpathy's courses, and says fine-tuning small open models such as Flan-T5 on real user data can be 10 to 100 times cheaper than an API.
- **Web agents.** His 2021 browsing-agent demo cost about $100 for 60 seconds. He sees the remaining problem as engineering: representing pages as text (for example via terminal browsers) and targeting actions, such as Vimium-style labels.
- **Startup manual.** Build the smallest useful version, launch to start product development and avoid over-engineering.

## Quotes

> "If a model can score in the top 10% on the bar, it can definitely browse a webpage." — Sharif Shameem

> "Build the absolute smallest thing that can be considered a useful application and ship it." — Sharif Shameem
