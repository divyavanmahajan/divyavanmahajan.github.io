---
title: Open Source AI Is Getting Too Big to Run
description: >-
  Kimi K3 pushes open weights toward frontier capability while Thinking
  Machines' Inkling bets on customization; Ksenia Se argues open models now mean
  operator choice, not small and cheap.
pubDate: '2026-07-23'
show: turing-post
url: >-
  https://www.turingpost.com/podcast/s/turing_post/open_source_ai_is_getting_too_big_to_run
durationMin: 18
hosts:
  - Ksenia Se
guests: []
tags:
  - open-weights
  - mixture-of-experts
  - fine-tuning
  - kimi
  - thinking-machines
  - inference-costs
draft: false
---
## Thesis

Ksenia Se compares two open-weight releases from the same week. Moonshot's Kimi K3 tests how close an open model can get to the frontier. Thinking Machines' Inkling tests how much value comes from adapting a model after training. She argues that open models are no longer defined as smaller, cheaper alternatives. Their main benefit is choice for the organizations that can operate them, because few individuals can.

## Key points

- **K3's benchmark claim.** K3 jumped from 18th to first in the blinded, human-preference Frontend Code Arena with 1,679 points, ahead of Claude Fable 5. Se cautions that this measures front-end preference only. On the Artificial Analysis Intelligence Index, K3 scores 57 against Fable 5's 60, and Moonshot admits it trails the best closed models overall.
- **Too big for a laptop.** K3 has 2.8 trillion parameters and 896 experts, with 16 routed per token. That cuts compute but not storage: even at 4 bits the weights need about 1.4 TB, and Moonshot recommends at least 64 accelerators. K3 also generated 130 million output tokens on the index, against a median of 63 million, so long reasoning raises costs.
- **Control for operators.** Se says open weights split training, hosting and adaptation across companies, so other providers can compete on price, location and privacy. Users benefit indirectly. K3's weights were promised by July 27th.
- **Inkling and Tinker.** Inkling (975B total, 41B active, text, image and audio, 1M context, Apache 2.0) scores 41 on the index, and Thinking Machines says openly that it is not the strongest model. The business is Tinker, a LoRA fine-tuning platform that also supports Kimi, DeepSeek, Qwen and OpenAI models.
- **Running Inkling.** The full checkpoint needs at least 2 TB of GPU memory and the official NVFP4 version 600 GB. Within a day, Unsloth published community quantizations of about 270-285 GB that retain about 74% accuracy.
- **Cross-pollination.** Inkling's architecture largely follows DeepSeek-V3, and some of its early fine-tuning data came from Kimi K2.5. An early K3 did most of Moonshot's GPU kernel optimization. Se calls this controlled engineering, not recursive self-improvement.

## Quotes

> "Open models are therefore no longer defined mainly as smaller and cheaper alternative to closed systems." — Ksenia Se

> "This is the control that Kimi may provide. It is control for operators first, with indirect benefits for everyone who uses their service." — Ksenia Se
