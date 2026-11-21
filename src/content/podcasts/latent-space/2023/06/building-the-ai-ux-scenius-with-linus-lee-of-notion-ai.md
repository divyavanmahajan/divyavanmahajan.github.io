---
title: Building the AI × UX Scenius — with Linus Lee of Notion AI
description: >-
  Linus Lee argues that good AI interfaces add the right constraints to steer
  users toward what language models do well, and that knowledge work needs more
  than text generation.
pubDate: '2023-06-01'
show: latent-space
url: >-
  https://lspace.beehiiv.com/podcast/s/latent_space_the_ai_engineer_podcast/building_the_ai_x_ux_scenius_with_linus_lee_of_notion_ai
durationMin: 70
hosts:
  - Alessio Fanelli
  - swyx
guests:
  - Linus Lee
tags:
  - ai-ux
  - interface-design
  - notion-ai
  - prompt-engineering
  - agents
draft: false
---
## Thesis

Linus Lee of Notion AI tells Alessio Fanelli and swyx that the core design problem with language models is flexibility versus intuitiveness. Good interfaces add constraints that guide users toward what the model does well and set expectations. He also argues that the companies winning the next few years will set the default interface metaphors for AI, which is why he joined Notion rather than a lab.

## Key points

- **Beyond text generation.** Lee ranks uses in three tiers: content generation, knowledge work (search, synthesis, understanding) and automation. He says most knowledge work is about understanding and deciding, not producing more words.
- **Constraints set expectations.** His example: the same input box styled as a chat window invites "hi, hello", while styled as a search bar it gets keywords. Notion keeps a fully custom prompt as an escape hatch for power users and for discovering new use cases.
- **Notion AI's three surfaces.** Lee describes the writer, the AI block (for example, a self-updating meeting summary) and AI autofill, which fills database columns and re-runs in the background when a page changes. Testing autofill on 6,000 pages used 2 to 3 million tokens in about 20 minutes.
- **Trust, control and zones of influence.** For agents, he treats trust and control as two sides of one problem, and says users need to see clearly which content the AI wrote and what it has access to.
- **Prompt engineering practice.** Notion leans on few-shot examples, including multilingual ones so answers come back in the document's language. Some prompts run to thousands of tokens, and the team uses a hand-rolled regression suite where a language model grades outputs.
- **A field in formation.** Lee notes that HCI and AI historically competed for funding, and says AI UX is still a scene rather than a field with shared methods. Asked about open problems, he names predictability: having models write auditable code, such as a regex, instead of making black-box decisions.

## Quotes

> "most knowledge work, the artifact that you produce isn't actually about, like, writing more words." — Linus Lee

> "I would be really disappointed if in 1,000 years humans are still using the same kind of, like, writing tools and writing systems that we are today." — Linus Lee
