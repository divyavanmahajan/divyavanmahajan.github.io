---
title: A Brief History of the Open Source AI Hacker - with Ben Firshman of Replicate
description: >-
  Ben Firshman argues the bottleneck in AI is no longer the models but developer
  tooling that lets ordinary software engineers run, tinker with and fine-tune
  open models.
pubDate: '2024-02-28'
show: latent-space
url: >-
  https://lspace.beehiiv.com/podcast/s/latent_space_the_ai_engineer_podcast/a_brief_history_of_the_open_source_ai_hacker_-_with_ben_firshman_of_replicate
durationMin: 70
hosts:
  - Alessio Fanelli
  - swyx
guests:
  - Ben Firshman
tags:
  - open-source
  - developer-tools
  - model-hosting
  - gpu-compute
  - startups
draft: false
---
## Thesis

Replicate co-founder Ben Firshman, who created Fig (later Docker Compose), tells Alessio Fanelli and swyx how years of false starts led to a hosted API for open models. His argument is that the limit on AI is now tooling, not technology: software engineers need Docker-style standards and simple APIs. Open models should also stay tinkerable so the ecosystem can fine-tune and remix them.

## Key points

- **A seven-year overnight success.** Firshman and Andreas Jansson built Arxiv Vanity in 2017, then joined YC with a benchmarking idea for ML research. The batch collapsed in March 2020; side projects such as COVID tools and the experiment tracker Keepsake went nowhere.
- **Following the tinkerers.** Researchers posted once every six months and left, he says, but the 2021 CLIP-plus-GAN community on the Eleuther and LAION Discords behaved like open source. The PixRay creator reverse-engineered Replicate's internal API and became the first customer at about $1,000 a month, selling NFT art.
- **Inflection points.** Stable Diffusion in August 2022 made Replicate the layer between model builders and product builders; Llama 2 brought its biggest week of growth. Firshman cites about 2 million users, 30,000 paying customers and a $40 million Series B.
- **Cog as a standard.** Cog wraps a Docker container with an OpenAPI specification and a cog.yaml that ML researchers can write without knowing Linux. He sees Ollama, llamafile and Hugging Face transformers as complementary rather than rival formats.
- **A GPU bank.** Replicate runs on GCP and CoreWeave, aggregating demand into long cloud commitments; swyx likens this to a bank's maturity transformation. Firshman says Replicate prices sensibly rather than joining the Mistral price war.
- **Licensing and AI engineers.** He is fine with model makers taking a cut, provided fine-tuning stays possible. He compares ignoring AI today to ignoring the internet as a 1990s developer.

## Quotes

> "It's not the containers that are interesting, it's just, like, the size and shape of the damn box, you know?" — Ben Firshman

> "Because if you release a big model under a non-commercial license and people can't fine-tune it, you've lost the magic of it being open." — Ben Firshman
