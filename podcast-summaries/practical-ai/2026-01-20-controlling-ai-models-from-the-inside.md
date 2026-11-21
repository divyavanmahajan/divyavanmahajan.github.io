---
title: "Controlling AI Models from the Inside"
date: 2026-01-20
show: practical-ai
episode: 343
url: "https://share.transistor.fm/s/df33214d"
duration_min: 44
hosts: ["Daniel Whitenack", "Chris Benson"]
guests: ["Alizishaan Khatri"]
description: "Alizishaan Khatri argues that prompt and response filters are too slow, costly and blind, and that reading a model's internal states at runtime gives cheaper, customisable safety."
tags: ["ai-safety", "guardrails", "interpretability", "ai-security", "edge-ai"]
source_transcript: "practical-ai/episodes/2026/01/2026-01-20-controlling-ai-models-from-the-inside.md"
draft: false
---

## Thesis

Alizishaan Khatri, founder of Wrynx, argues that today's AI guardrails, which inspect only the prompt going in and the response coming out, are like checking IDs at the gate of a thousand-condo building: they cannot see what happens inside. His company instead monitors which internal subregions of a model activate during generation, which he says gives model-native safety at a fraction of the cost and latency.

## Key points

- **Background.** Khatri spent about three years at Meta building infrastructure for safety models that check every Facebook message, then built fraud systems at Roblox (transcribed as "roadblocks") protecting about $3 billion in payments.
- **Two kinds of risk.** He separates a general category of content nobody wants (child safety, hate speech) from context-specific risks, such as money laundering for a bank or a shoe brand not wanting its bot to discuss a competitor.
- **Why black-box filters fall short.** Jailbreaks and adversarial examples work by triggering internal behaviour a separate guard model cannot see. For video and audio, analysing output costs as much as generating it, so many vendors ship models with little protection; Khatri says his team got harmful output from audio, video and image models "with little to no trickery".
- **The numbers.** Protecting an 8B Llama model with Llama Guard 3 on both prompt and response means about 160 billion parameters of extra inference; Wrynx claims a module of about 20 million parameters that runs in parallel, matches standalone guard models and adds no visible latency. That makes safety feasible on edge devices.
- **Defence in depth.** Khatri does not position the approach as a replacement: model-level signals such as a "lying score" can be combined with system rules, for example blocking a customer with a history of large refunds.
- **No model changes.** The safety module sits on top of off-the-shelf open-weight models (Llama, Granite, Mistral, Wan) without retraining them, and can be tailored to each company's policies.

## Quotes

> "it's like paying someone a thousand dollars to guard a $100 bill." — Alizishaan Khatri

> "the model needs of most companies are similar ish but the safety needs are dramatically different." — Alizishaan Khatri
