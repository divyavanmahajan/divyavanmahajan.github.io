---
title: "The Great AI Implementation with Raza Habib of Humanloop"
date: 2023-04-27
show: cognitive-revolution
url: "https://www.cognitiverevolution.ai/the-great-ai-implementation-with-raza-habib-of-humanloop/"
youtube: "https://www.youtube.com/watch?v=EKKJrRWOU30"
hosts: ["Nathan Labenz"]
guests: ["Raza Habib"]
description: "Humanloop CEO Raza Habib argues that getting LLMs from a working prompt to a reliable product depends on evaluation, user feedback and fast iteration, not on exotic techniques like RLHF."
tags: ["llm-deployment", "evaluation", "fine-tuning", "rlhf", "ai-agents"]
source_transcript: "cognitive-revolution/episodes/2023/04/2023-04-27-the-great-ai-implementation-with-raza-habib-of-humanloop.md"
draft: false
---

## Thesis

Raza Habib, CEO of the Y Combinator-backed Humanloop, tells Nathan Labenz that the gap between API access and a robust LLM product is mostly about tooling and workflow. Teams that set up evaluation and feedback loops and iterate quickly succeed; those changing things without measurement cannot tell whether they are improving. He recommends the simplest technique that works: prompt engineering first, then supervised fine-tuning, and RLHF only for large problems.

## Key points

- **Who builds and what.** Habib says customers range from startups to CTOs of large companies running quiet side projects, citing HubSpot's Dharmesh. Use cases include writing assistance, legal contract review, sales process automation, medical paperwork and coding tools such as Cursor.
- **UX matters as much as the model.** He argues ChatGPT succeeded partly because a chat interface tolerates imperfect first answers, while GitHub Copilot works because it sits over your shoulder with low latency.
- **Three kinds of feedback.** Habib sees success with explicit votes (rarely used), implicit actions such as sending or regenerating, and textual corrections. Customers saw satisfaction charts jump when switching from Text DaVinci 2 to GPT-3.5 or GPT-4.
- **More fine-tuning ahead.** In what he calls a contrarian take, Habib predicts much more fine-tuning soon, driven by cost, latency and privacy, as open models like Llama close the gap. One founder fine-tuned DaVinci 2 on just 50 hand-written examples.
- **RLHF and agents.** He describes RLHF as a finicky multi-stage process most teams do not need. On agents, he argues chained steps with 85-90% accuracy compound errors towards zero, so they need a feedback mechanism to course-correct; customers report agents working about 80% of the time, not enough for production.
- **Incumbents must adopt.** Habib calls this an adopt-or-die moment for incumbents, noting Microsoft's speed, while expecting new categories to emerge, comparing today's products to early television that filmed stage plays.

## Quotes

> "RLHF is like sex in high school. Everyone's talking about it, but almost no one's actually doing it." — Raza Habib

> "Without course correction, I just don't see how agents become reliable." — Raza Habib
