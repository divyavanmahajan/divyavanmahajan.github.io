---
title: "Creating a private AI assistant in Thunderbird"
date: 2025-09-23
show: practical-ai
episode: 329
url: "https://share.transistor.fm/s/c73dd974"
duration_min: 53
hosts: ["Chris Benson", "Daniel Whitenack"]
guests: ["Chris Aquino"]
description: "Thunderbird built an opt-in email assistant on encrypted remote inference and learned that splitting work across small, constrained tasks beats asking one large model to do everything."
tags: ["privacy", "confidential-inference", "email", "llm-applications", "task-decomposition"]
source_transcript: "practical-ai/episodes/2025/09/2025-09-23-creating-a-private-ai-assistant-in-thunderbird.md"
draft: false
---

## Thesis

Chris Aquino, a software engineer at Thunderbird, describes building Thunderbird Assist, an experimental, opt-in AI executive assistant for a privacy-focused email client. His central lesson is that a single big prompt to a big model fails for complex jobs; reliable results came from splitting the workflow into narrow tasks, some handled by non-LLM code. Daniel Whitenack endorses that decomposition as standard advice.

## Key points

- **Why not local inference.** Aquino says building inference into Thunderbird would mean switching it on for all users and joining the desktop roadmap, while a separate local app adds an install. Many Linux users run ten-year-old hardware, and local models drain laptop batteries, so the team chose remote inference.
- **Finding a private provider.** Early prototypes, built as a Thunderbird add-on, sent emails to OpenAI's API. When colleagues' sensitive mail became an issue, the team turned to Flower Labs, introduced via the Mozilla Foundation, an investor in Flower. Flower supplied a TypeScript SDK, end-to-end encryption, post-training for summarisation and an eval system.
- **Encryption path.** After logging in with a Thunderbird account, the client gets a Flower token and exchanges public keys with a server that only runs the model, so traffic is encrypted beyond HTTPS. Whitenack and Aquino note Flower cannot see prompts.
- **Model choice.** BERT, BART and RoBERTa variants were tried before a conversational Llama model from Meta gave much better email summaries.
- **The daily brief.** Asking one model to rank, extract highlights and action items, and format the output produced poor results. Aquino moved importance ranking to a local Bayesian classifier trained on user priority tags and handled formatting in code; the feature is still sidelined while summaries and replies ship.
- **What's next.** Assist is planned for Thunderbird Pro alongside ThunderMail. Aquino wants semantic search, calendar, task, RSS and notes context, deterministic small models wired into workflows, and says chat is the wrong interface for many tasks.

## Quotes

> "This is when I learned the definition of overprompting." — Chris Aquino

> "I want language models that are small and dedicated to specific tasks." — Chris Aquino
