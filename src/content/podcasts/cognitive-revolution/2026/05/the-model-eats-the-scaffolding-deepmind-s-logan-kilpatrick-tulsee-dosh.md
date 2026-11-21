---
title: >-
  The Model Eats the Scaffolding: DeepMind's Logan Kilpatrick & Tulsee Doshi on
  3.5 Flash, Omni & More
description: >-
  Google DeepMind's Kilpatrick and Doshi explain why Google leads with fast,
  cheap Flash models and a shared agent harness that absorbs scaffolding across
  its products.
pubDate: '2026-05-20'
show: cognitive-revolution
url: >-
  https://www.cognitiverevolution.ai/the-model-eats-the-scaffolding-deepmind-s-logan-kilpatrick-tulsee-doshi-on-3-5-flash-omni-more/
youtube: 'https://www.youtube.com/watch?v=_0vFE4Ti1Gs'
durationMin: 59
hosts:
  - Nathan Labenz
guests:
  - Logan Kilpatrick
  - Tulsee Doshi
tags:
  - gemini
  - google-deepmind
  - agent-harness
  - model-efficiency
  - context-windows
draft: false
---
## Thesis

Recorded at Google days before I/O, Logan Kilpatrick and Tulsee Doshi argue that Google's strategy is to serve billions of users across many products, which makes speed and cost as important as peak capability. DeepMind now ships the model together with a common agent harness, so each model generation absorbs work that product teams used to build themselves.

## Key points

- **I/O launches.** Doshi lists Gemini 3.5 Flash (which she says is about three times faster than other large models), Gemini Omni Flash for video generation and editing, upgrades to Antigravity and Gemini Live, and Gemini Spark for agentic tasks in the Gemini app.
- **Why no Ultra.** Doshi says live experiments in Search and the Gemini app show users punish added latency even when quality improves, which is why Flash and Flash-Lite matter. Kilpatrick says Pro models have kept scaling; the Ultra name is a branding choice. Distillation runs both down from Pro and up from Flash recipes.
- **One harness everywhere.** Kilpatrick describes the Antigravity agent harness as a new through-line across Google products, and advises teams to standardise because the stack must be rewritten every 12-18 months. Doshi says they still train for "harness diversity" so Gemini works in third-party tools.
- **AI-assisted research.** Doshi says Gemini already helps develop Gemini, citing safety lead Anca running ablations from her phone. Kilpatrick expects humans to stay in the driver's seat for costly pre-training runs.
- **Model behaviour.** Doshi says each checkpoint is evaluated for sycophancy, role play and looping; Kilpatrick calls off-the-rails behaviour a model bug and doubts model-welfare interviews, since models lack context on how they are deployed.
- **Context and cutoffs.** Both say context growth stalled mainly on cost (Kilpatrick: a 1-million-token request can cost a few dollars). Doshi sees the frontier in smarter context use and search rather than updating the January 2025 knowledge cutoff.

## Quotes

> "The model eats the scaffolding. That's my favorite way of thinking about this." — Logan Kilpatrick

> "basically every 12 to 18 months now, like you have to rewrite everything from scratch." — Logan Kilpatrick
