---
title: "The Future of Email: Superhuman CTO on Your Inbox As the Real AI Agent (Not ChatGPT) — Loïc Houssier"
date: 2025-12-11
show: latent-space
url: "https://lspace.beehiiv.com/podcast/s/latent_space_the_ai_engineer_podcast/the_future_of_email_superhuman_cto_on_your_inbox_as_the_real_ai_agent_not_chatgpt_loic_houssier"
duration_min: 71
hosts: ["Alessio Fanelli", "swyx"]
guests: ["Loïc Houssier"]
description: "Superhuman's CTO argues the inbox, enriched with Grammarly and Coda context, is the natural home for a proactive AI executive assistant, built on quality-first evals and local-first speed."
tags: ["ai-agents", "email", "evals", "inference-costs", "ai-coding-adoption"]
source_transcript: "latent-space/episodes/2025/12/2025-12-11-the-future-of-email-superhuman-cto-on-your-inbox-as-the-real-ai-agent.md"
draft: false
---

## Thesis

Loïc Houssier, CTO of Superhuman (now part of Grammarly), argues that AI in email only earns its place if it makes high-expectation users faster, not if it adds sparkle. His goal is an AI executive assistant that drafts, schedules and searches for you, and he sees Superhuman's position inside Grammarly and Coda as a context advantage over reactive chatbots like ChatGPT.

## Key points

- **Small features, then an agent.** Houssier lists auto-labelling, thread summaries, follow-up reminders that come with a ready draft, and "Ask AI" for querying the inbox, such as a weekly digest of 30-40 newsletters or finding a deck link from six months ago.
- **Fighting agent laziness.** The team tuned the agent to act on a request such as finding fifteen minutes to review a document, instead of handing choices back. He says Sonnet handled this well, and deep search pages through results 40 at a time until it finds the answer.
- **Evals by dimension.** Evals moved from query/answer pairs to canonical queries per dimension: agent handoff, needle-in-a-haystack search, and dates. CEO Rahul's five-year-old email about a type of wood for a table was an early benchmark.
- **Infrastructure and cost.** Email is stored locally so every interaction can stay under 100 ms; vectors live in TurboPuffer; Base10 runs open models such as Llama and BERT classifiers. Houssier prefers fixed-capacity boxes for cost predictability, while swyx argues that at scale you should think in price per trillion tokens.
- **AI-assisted engineering.** Superhuman has about 50 engineers, roughly 100,000 paying users and three engineers on AI. Self-reported PR labels show about 80% AI usage, and throughput rose from about four to six PRs per engineer per week between Q1 and Q3, which he says is not all down to AI.
- **Future interfaces.** He expects voice to change email, doubts knowledge graphs are worth building in-house yet, and believes AI will widen the gap between good and lazy engineers.

## Quotes

> "We have everything local. One of the reason is, uh, we want to be fast and under like every interaction should be under one hundred milliseconds." — Loïc Houssier

> "I do believe that AI will do only one thing. It will separate faster the good engineers from the bad engineers." — Loïc Houssier
