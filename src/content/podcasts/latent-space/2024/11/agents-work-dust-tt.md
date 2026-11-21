---
title: 'Agents @ Work: Dust.tt'
description: >-
  Dust CEO Stanislas Polu argues companies need a horizontal platform where
  non-developers build simple, API-connected agents on company data; connectors
  and product, not models, are the constraint.
pubDate: '2024-11-11'
show: latent-space
url: >-
  https://lspace.beehiiv.com/podcast/s/latent_space_the_ai_engineer_podcast/agents_work_dust_tt
durationMin: 60
hosts:
  - Alessio Fanelli
  - swyx
guests: []
tags:
  - agents
  - enterprise-ai
  - integrations
  - openai
  - open-source
draft: false
---
## Thesis

Stanislas Polu, co-founder and CEO of Dust and a former Stripe engineer and OpenAI researcher, argues that model capability already exceeds how much it is deployed. Dust's response is a horizontal platform where non-technical employees write simple, instruction-scripted agents over company data reached through APIs. In his view the limits are connector infrastructure and product design, not the models.

## Key points

- **OpenAI years.** Polu joined OpenAI from Paris as a contractor in 2019, working on LLMs and formal mathematics with Ilya Sutskever as adviser. He describes compute allocation as the way research was steered. He left in September 2022 after seeing GPT-4, calling it the "last train leaving the station" to start a company.
- **Simple agents first.** Agents with vague instructions and sixteen tools make mistakes, so Dust has users script a few actions in plain English. Its own agents build the incident and shipped-work tables for the weekly meeting from Slack; Polu expects them to combine into one meeting agent later.
- **APIs, not clicking.** Dust targets tech scale-ups of 500 to 5,000 people whose SaaS tools have APIs. Polu says headless browsing is "really, really broken", which the hosts note is the opposite of Adept's bet.
- **Connectors are the work.** Dust maintains its own integrations because quality depends on structure, such as whether a Notion database holds text or numbers; Salesforce would need user-supplied SOQL queries. It runs on Temporal, and Polu regrets starting in JavaScript instead of TypeScript.
- **Adoption over evals.** Peak penetration at a customer is 88% daily active users, with 60 to 70% weekly active typical, so Polu ranks product work above choosing models, which he puts at about a 5% gain. Users can pick models; he suspects GPT-4 Turbo beats GPT-4o at function calling.
- **Open source and SaaS.** Dust is open source "because we can", not as a go-to-market. He predicts companies past hypergrowth, like Klarna, will replace some SaaS with AI built on their own data.

## Quotes

> "I think we're at the pong level of LLM productization, and we haven't invented the Civ III, we haven't invented Counter-Strike" — Stanislas Polu

> "if the future is that you're gonna stand in front of your computer and looking at an agent clicking on stuff, then I'll eat my computer." — Stanislas Polu
