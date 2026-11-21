---
title: 'Designing for Agents — Zeno Rocha, Resend'
description: >-
  Resend won developers with taste and an API-first design, and now treats
  agents as first-class users through MCP, machine-readable pages and answer
  engine optimisation.
pubDate: '2026-11-10'
show: latent-space
url: >-
  https://lspace.beehiiv.com/podcast/s/latent_space_the_ai_engineer_podcast/designing_for_agents_zeno_rocha_resend
durationMin: 86
hosts:
  - Alessio Fanelli
  - swyx
guests:
  - Zeno Rocha
tags:
  - email-infrastructure
  - developer-experience
  - mcp
  - answer-engine-optimization
  - agents
draft: false
---
## Thesis

Zeno Rocha, founder and CEO of Resend, argues that email infrastructure was a crowded market with no one caring about developers, and that a "naive" outsider's approach plus close attention to design created an opening. He now builds for agents as well as humans: an API-first, "formless" product with a large MCP server and web pages written for LLMs to read.

## Key points

- **Scale.** Rocha says Resend serves 4.3 million users, up from one million in December, and has crossed 120,000 paid customers. Its SDK's npm downloads are now more than double SendGrid's. swyx, an angel investor, says a coding agent chose Resend for him even though Cloudflare email was already set up.
- **Deliverability means behaving unlike abusers.** Rocha describes ordering sends so the most engaged recipients go first, spacing batches, and building steady sending patterns. He also auto-generates plain-text versions, which he says improved deliverability. Resend trusts new users by default but blocks them quickly when bounce or complaint signals appear.
- **Going down to the metal.** Resend started on AWS SES, but Rocha says the hidden costs of SNS, CloudWatch and SQS add up. It is now buying IP blocks, building its own sending infrastructure and moving the sending path from Node.js to Go.
- **MCP growth.** The first MCP server was built by Yoko of a16z. Rocha says monthly calls passed a million, growing roughly 2x a month, and tools grew from about 20 to over 80. He switched from Plausible to PostHog because PostHog had an official MCP server.
- **AEO tactics.** Rocha added FAQs to most pages, llms.txt and markdown versions of marketing pages. After an LLM misquoted Resend's pricing calculator, a JavaScript widget, he published the numbers in the page's .md version and saw answers corrected days later.
- **Priorities.** Resend went through YC Winter 2023. When a YC partner told him he cared too much about design, Rocha decided to keep design as Resend's differentiator. He says he puts time with his daughter ahead of faster growth.

## Quotes

> "you need to do exactly what an abuser wouldn't do. It's the opposite of that." — Zeno Rocha

> "I want my product to be formless. Whatever they wanna do with the product, it should be possible." — Zeno Rocha
