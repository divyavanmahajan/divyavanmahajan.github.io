---
title: >-
  Mechanistic Interpretability: Philosophy, Practice & Progress with Goodfire's
  Daniel & Tom
description: >-
  Goodfire's CTO and chief scientist argue interpretability now has a
  proto-paradigm, is bottlenecked on algorithms rather than compute, and already
  pays off in science and guardrails.
pubDate: '2025-05-29'
show: cognitive-revolution
url: >-
  https://www.cognitiverevolution.ai/mechanistic-interpretability-philosophy-practice-progress-with-goodfires-daniel-tom/
youtube: 'https://www.youtube.com/watch?v=Ap8YSyUdafM'
hosts:
  - Nathan Labenz
guests:
  - Dan Balsam
  - Tom McGrath
tags:
  - interpretability
  - sparse-autoencoders
  - ai-safety
  - ai-for-science
  - goodfire
draft: false
---
## Thesis

Dan Balsam (CTO) and Tom McGrath (chief scientist) of Goodfire argue that mechanistic interpretability has moved past its pre-paradigmatic stage into a "proto-paradigm". Today's tools, such as sparse autoencoders (SAEs), are imperfect lenses, but they are already useful. New algorithms, not more compute, are the main bottleneck. Balsam frames interpretability as the measurement apparatus needed to verify any other alignment technique.

## Key points

- **Algorithms over compute.** McGrath says the field could not productively spend a single million-dollar SAE training run yet. That is a sign it is algorithm-bound. Balsam compares current tools to early microscopes: crude, but enough to build a science on.
- **The proto-paradigm.** McGrath lists its parts: networks contain understandable things, features are roughly linear directions, superposition packs more features than dimensions, magnitude encodes intensity, and features connect into circuits. He sees parameter decomposition (Lee Sharkey's work) as complementary, not competing.
- **Doing the ML better.** Fixes like batch top-K, end-to-end SAEs and Matryoshka SAEs (motivated by "feature absorption") push the sparsity-versus-reconstruction frontier. Michael Pearce's minimum description length idea offers a single metric, though it cannot yet be optimised directly.
- **Dark matter.** McGrath cites Josh Engels' Dark Matter of SAEs paper, which suggests SAE scaling plateaus before full reconstruction. Balsam adds that structures like days of the week on a ring get fragmented into separate features.
- **Applications.** Goodfire focuses on scientific discovery (including genomics work with Arc Institute, described at a high level), inference-time guardrails as a cheaper alternative to LLM-as-judge, and creative models.
- **Funding.** Balsam says Goodfire raised $50 million led by Menlo Ventures, including $1 million as Anthropic's first corporate investment.

## Quotes

> "I would say that we don't have the transformer but for interpretability" — Tom McGrath

> "Our core belief here is that interpretability is as big as AI itself." — Dan Balsam
