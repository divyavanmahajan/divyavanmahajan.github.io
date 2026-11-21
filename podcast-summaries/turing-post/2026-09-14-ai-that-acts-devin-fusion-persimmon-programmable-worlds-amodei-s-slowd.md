---
title: "AI That Acts: Devin Fusion, Persimmon, Programmable Worlds & Amodei’s Slowdown Call"
date: 2026-09-14
show: turing-post
url: "https://www.turingpost.com/podcast/s/turing_post/ai_that_acts_devin_fusion_persimmon_programmable_worlds_amodei_s_slowdown_call"
duration_min: 18
hosts: ["Ksenia Se"]
guests: []
description: "A weekly digest on world models that remember, robots facing their own mistakes, dual-model coding agents, and whether Amodei's call to pace the frontier serves safety or incumbents."
tags: ["world-models", "robotics", "coding-agents", "ai-safety", "ai-policy"]
source_transcript: "turing-post/episodes/2026/09/2026-09-14-ai-that-acts-devin-fusion-persimmon-programmable-worlds-amodei-s-slowd.md"
draft: false
---

## Thesis

In the first weekly news edition of Attention Span, Ksenia Se follows AI's ability to understand and act in the world from September 7 to 13. Her theme is consistency and feedback: generated worlds that remember off-screen changes, robots whose own errors shape what they see next, and agents whose graders, simulated users and monitors can mislead. She ends by backing the push for independent safety evaluators while asking who would write the rules.

## Key points

- **Worlds with a record.** Alaya's programmable world model keeps the world's state separate from the video: a coding agent writes a program, an engine updates the record, and the video model renders from it. World Labs' Atlas and Westlake's World-in-World address unseen views and returning to earlier viewpoints.
- **Robots and compounding errors.** In Telexistence's DreamZero tests on AWS, the best simulation-trained setup reached 45% on block picking, while one trained on real demonstrations scored zero in simulation. NVIDIA reports about 66% per-step success for Skild's S1.
- **Two models, lower cost.** Cognition's Fusion pairs a lead model that plans with a cheaper execution model. Swapping in a lead that costs twice as much per token made sessions 9% cheaper, because it delegated earlier and gave better instructions. Cognition also says SWE-2 is within one point of Fable 5.1 and 64% cheaper, after it fixed faulty verifiers.
- **Realistic simulated users.** Persimmon plays customers who reveal details gradually, unlike GPT 5.6, which volunteered everything in its first reply.
- **Monitors and reasoning.** In Anthropic's review, a monitor flagged about 1% of actions when it could read the model's reasoning and about 50% without it.
- **The slowdown debate.** Dario Amodei proposed embedded independent evaluators inside labs, and Hugging Face asked to join. David Sacks countered that Anthropic and OpenAI are dressing up business interests as public service.

## Quotes

> "So in that case, reading the explanation made the monitor less likely to flag the actions." — Ksenia Se

> "Yes, I want safer systems. I also want to know who gets to write the rules and who those rules end up protecting." — Ksenia Se
