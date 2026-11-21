---
title: NeurIPS 2023 Recap — Top Startups
description: >-
  Walking interviews at NeurIPS 2023 show LLM building becoming a commodity
  skill, with startups competing on inference speed, synthetic data, search and
  developer tooling.
pubDate: '2023-12-30'
show: latent-space
url: >-
  https://lspace.beehiiv.com/podcast/s/latent_space_the_ai_engineer_podcast/neurips_2023_recap_top_startups
durationMin: 162
hosts:
  - Alessio Fanelli
  - swyx
guests:
  - Top Startups
tags:
  - neurips
  - ai-startups
  - inference
  - synthetic-data
  - ai-search
draft: false
---
## Thesis

swyx closes 2023 with short hallway interviews recorded at NeurIPS in New Orleans. Jonathan Frankle sets the frame: building large models is now an assumed skill, so differentiation moves to data, evaluation and product. The founders who follow, often direct competitors, each argue for a different place to build a moat, and swyx picks out synthetic data as the theme that keeps coming up.

## Key points

- **Mosaic after Databricks.** Frankle, whose company was bought for $1.3 billion, calls this a "garden variety" NeurIPS with about 15,000 attendees. He wants academics to work on evaluation and on synthetic data that humans curate rather than write from scratch.
- **Inference speed as a moat.** Lin Qiao says her team ran PyTorch at Meta at more than 5 trillion inferences per day. Fireworks served Mixtral within a day by retrofitting Llama code to the released weights, and counts Tome, Sourcegraph's Cody, Poe and DoorDash as customers.
- **Cursor's tricks.** Aman Sanger confirms an $8 million raise from OpenAI with a team of seven. He explains KV caching to CPU RAM, and using GPT-4 with TrueSkill to rank documents and build retrieval training data.
- **Two takes on search.** Aravind Srinivas reports a million mobile users for Perplexity and an online API built on Llama 2 fine-tunes. He argues inference-as-a-service companies are commoditised and that Perplexity is an app company first. Will Bryk positions Metaphor as search infrastructure for LLMs.
- **Answer.AI.** Jeremy Howard describes his new lab as an Edison-style "invention factory" funded by Decibel. He wants to hire people who have overcome a lot to get where they are, and points to 20-year-old Tanishq Abraham as an example.
- **Expo floor.** Joel Hestness covers Cerebras's Arabic Jais models built with G42 and a wafer-scale CS-2 roughly equal to 20 A100s. Nomic, Voxel51 and Lightning AI (launching Lightning Studio) pitch data and developer tooling, and Jay Alammar is updating the Illustrated Transformer for his O'Reilly book.

## Quotes

> "Everybody's figured out how to build LLMs. Like, it's no longer a coveted skill of, you know, a handful of people, but now we've all become LLM builders." — Jonathan Frankle

> "Infrastructure exists in service of the product. You always have to remember that." — Aravind Srinivas
