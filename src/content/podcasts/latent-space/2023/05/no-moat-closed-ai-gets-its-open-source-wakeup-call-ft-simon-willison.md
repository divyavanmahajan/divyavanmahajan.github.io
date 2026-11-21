---
title: 'No Moat: Closed AI gets its Open Source wakeup call — ft. Simon Willison'
description: >-
  Reacting to the leaked Google memo 'We Have No Moat', Simon Willison and the
  hosts debate whether fast-moving open models built on LLaMA and LoRA erode the
  lead of Google and OpenAI.
pubDate: '2023-05-05'
show: latent-space
url: >-
  https://lspace.beehiiv.com/podcast/s/latent_space_the_ai_engineer_podcast/no_moat_closed_ai_gets_its_open_source_wakeup_call_ft_simon_willison
durationMin: 44
hosts:
  - Alessio Fanelli
  - swyx
guests:
  - Simon Willison
tags:
  - open-source-ai
  - llama
  - lora
  - google
  - mojo
  - ai-safety
draft: false
---
## Thesis

Recorded the day the "We Have No Moat and Neither Does OpenAI" memo leaked, this space has Simon Willison argue that open source models, kicked off by Facebook's LLaMA, caught up in about two months and that small, cheaply fine-tuned models may beat ever-larger ones. The hosts and a guest named Travis push back on where the real moats lie: GPUs, first-party data, distribution and talent.

## Key points

- **The memo's argument.** Willison sums it up: LLaMA (March), then Stanford Alpaca two weeks later, then Vicuna a week after that. Stackable LoRA fine-tunes that train in hours on a laptop may move faster than retraining a giant model every few months.
- **Models on consumer hardware.** Willison runs Vicuna 13B on his phone and in the browser through Web LLM (a roughly 2 GB download). He points to 4-bit quantisation, popularised by llama.cpp, and a new pruning paper as the techniques shrinking models.
- **Where the moats are.** Alessio says the moat may be access to GPUs and first-party data loops. swyx asks why Google is panicking when it holds users' email, calendars and docs. Travis expects LLMs to commoditise because switching costs are low, and points to Google losing senior researchers.
- **LoRA lock-in.** LoRAs are tied to one exact base model, so Willison argues a well-established open base with many LoRAs stacked on top could outrun a company that retrains from scratch.
- **Search ads at risk.** Willison says his Google use has "dropped like a stone" since ChatGPT, which explains Google's alarm. He also covers Mojo, Chris Lattner's Python superset, citing Jeremy Howard's demo of a 2,000x matrix-multiplication speed-up.
- **Real-world harms.** Willison worries less about science-fiction risk than about scaled abuse such as automated romance scams, and about prompt injection in systems that handle private data.

## Quotes

> "if I've got a chatbot, chatbot that's not showing me ads and chatbot that is showing me ads, I'm gonna pick the one that's not showing me ads." — Simon Willison

> "The only thing which can keep up with the pace of AI these days is open source." — Travis
