---
title: "Replit's VP of AI, Michele Catasta, on Artificial Developer Intelligence"
date: 2023-08-08
show: cognitive-revolution
url: "https://www.cognitiverevolution.ai/replits-vp-of-ai-michele-catasta-on-artificial-developer-intelligence/"
youtube: "https://www.youtube.com/watch?v=u4l6GgFaJmQ"
hosts: ["Nathan Labenz"]
guests: ["Michele Catasta"]
description: "Replit's Michele Catasta argues for 'artificial developer intelligence': AI that makes a billion non-experts productive and experts 10x faster, while human creativity still drives software."
tags: ["ai-coding", "replit", "code-models", "developer-productivity", "open-source-models"]
source_transcript: "cognitive-revolution/episodes/2023/08/2023-08-08-replit-s-vp-of-ai-michele-catasta-on-artificial-developer-intelligence.md"
draft: false
---

## Thesis

Michele Catasta, who joined Replit from Google, says Replit is aiming for "artificial developer intelligence" (ADI) rather than AGI. ADI is a reachable goal: AI that takes amateurs from idea to prototype and turns skilled developers into tech leads who direct AI agents. Catasta argues that designing new abstractions stays a human job for now, and that Replit's cloud IDE, its telemetry and its community give it a lasting advantage.

## Key points

- **Next billion developers.** Catasta says product managers already win Replit hackathons on their first try at coding, because writing clear English requirements is close to prompting. Most new "developers" will automate small personal tasks, such as WhatsApp bots that order pizza.
- **Productivity multipliers.** He says code completion has already roughly doubled productivity (Copilot reports up to 55% faster). He thinks 10x is reachable within about a year through better debugging and agent-like planning and scaffolding. Amjad Masad's "1000x developer" is the long-term goal.
- **Data advantage.** Catasta argues that Replit has more telemetry than Microsoft: the full edit history at keystroke level, collected for multiplayer and rollback. Replit trains only on public Repls and permissively licensed code, and is adding an opt-out.
- **Custom open-source model.** Replit's 3B code model was built with MosaicML by about two and a half people in a 10-day sprint. It uses a 32k code-only vocabulary, trading compression for faster inference. Further pretraining on Replit data gives up to 50% gains over the base model, depending on the language.
- **Economics and safety.** Replit Chat runs on third-party models from Google and OpenAI, and Replit relies on those providers for refusal behaviour because it has no red team yet. Catasta warns that GPT-4 power users can become loss-making within days, which makes free AI for 20M+ users hard.
- **Substrate for AGI.** Catasta reads Masad's tweet this way: any future AGI would orchestrate existing tools, APIs and cloud compute rather than generate everything from scratch, the way human developers work. Replit is that environment.

## Quotes

> "That's exactly why we called it ADI and not AGI. The reason is the creative process you talk about, for me, is still exclusively in the realm of human intellect." — Michele Catasta

> "I would say the 2x has been already kind of accomplished by code completion." — Michele Catasta
