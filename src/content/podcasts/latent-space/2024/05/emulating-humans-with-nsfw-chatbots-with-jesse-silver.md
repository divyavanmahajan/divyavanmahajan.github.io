---
title: Emulating Humans with NSFW Chatbots - with Jesse Silver
description: >-
  Jesse Silver explains how an LLM agent that chats with fans for adult creators
  has to lead the conversation, match each creator's brand, and run cheaply on
  open-source models.
pubDate: '2024-05-16'
show: latent-space
url: >-
  https://lspace.beehiiv.com/podcast/s/latent_space_the_ai_engineer_podcast/emulating_humans_with_nsfw_chatbots_-_with_jesse_silver
durationMin: 54
hosts:
  - Alessio Fanelli
  - swyx
guests:
  - Jesse Silver
tags:
  - llm-agents
  - persona-emulation
  - dspy
  - evals
  - open-source-models
draft: false
---
## Thesis

Jesse Silver built a SaaS tool that takes over one-on-one fan chat for creators on adult fan platforms. His argument is that the hard part is not tone but the experience: the agent has to lead the conversation toward goals that fit the creator's brand, and it needs a modular, fine-tuned, open-source pipeline with strong evals to do that profitably.

## Key points

- **An underserved market.** Silver says about 80% of revenue on a well-run profile comes from chatting, and that creators otherwise depend on offshore chat teams or agencies. He says the product has worked with over 150 creators, handles about 50K users per day, and usually lifts earnings 2 to 5X, with the company taking 20% of only what it sells.
- **Brand over generic friendliness.** On a profile earning over 150K a month, the bot first made almost nothing in two days. The creator's appeal was being an inaccessible "diva", and a friendly bot broke that fantasy. The fix was to model the experience each creator archetype implies.
- **Open source for cost and control.** Prototyping on OpenAI was too expensive for very long conversations (Silver mentions spending thirty dollars on a fan) and too restrictive, so the team moved to open-source models. The stack includes a state machine, reasoning modules and per-module fine-tuned models, and it moved from a low-code tool to DSPy.
- **Evals as process control.** Silver describes hand-labelled state-transition sets, targeted behaviour evals, golden sets for base-model changes, LLM-as-judge checks, and a fractional ops team paid three to seven dollars an hour to review generations.
- **Guardrails.** Inputs and outputs go through several sanitising steps, pricing is separated from the chat module, and prices have hard-coded limits. Silver does not claim to have solved prompt injection.

## Quotes

> "If we're not at least 2Xing how much they're making, something is usually wrong with our approach." — Jesse Silver

> "they're not leading the conversation. They don't seem to have objectives. They're just sort of giving you what you want." — Jesse Silver, on other NSFW chatbots
