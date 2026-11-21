---
title: >-
  The New Apex Predator: CrowdStrike CEO George Kurtz on Adversaries Armed With
  AI Agents
description: >-
  George Kurtz argues that AI agents give low-skill attackers nation-state
  capability, so defenders need security models at least as capable as the
  offence, trained on their own data.
pubDate: '2026-10-22'
show: no-priors
url: 'https://www.youtube.com/watch?v=PST8yesYOSo'
youtube: 'https://www.youtube.com/watch?v=PST8yesYOSo'
durationMin: 45
hosts:
  - Sarah Guo
  - Elad Gil
guests:
  - George Kurtz
tags:
  - cybersecurity
  - ai-agents
  - open-weight-models
  - security-models
  - enterprise-ai
draft: false
---
## Thesis

CrowdStrike founder and CEO George Kurtz argues that AI agents have flattened the attacker hierarchy: a hacktivist today has what a nation state had a few years ago. The answer, he says, is to give defenders AI at least as good as the offence, which is why CrowdStrike built its own security models. He rejects calls to cut critical systems off the internet as "doomerism" and sees security becoming an enabler of AI adoption.

## Key points

- **The agent state.** Kurtz describes a "pyramid of pain" of hacktivists, e-crime and nation states that agents have collapsed. Average breakout time after an intrusion is now 29 minutes, and as fast as 27 seconds. Attacks are now prompts, not malware.
- **Open weights for offence.** He says most attacks use open-weight or ablated models such as GLM and Qwen, which he runs on two DGX Sparks at home. Frontier models refuse even a cybersecurity slide deck.
- **The Hugging Face lesson.** His main takeaway from the incident was that defenders lacked the offence's capability: Hugging Face was refused by frontier models and had to use open-weight models to investigate.
- **SafeMind.** CrowdStrike built a security lab with Nvidia: a red model (Tempest) and a blue model (Solano), built on Nemotron and post-trained on over a decade of security data. They iterate against a digital twin of each customer, an idea Kurtz credits to Jensen Huang. He quotes remediation at about 3 cents versus about $10 on a top frontier cyber model.
- **Platform and AIDR.** CrowdStrike has grown from one module to 33. Its new AIDR product finds shadow AI and traces each agent's sub-agents, tool calls and MCP access. Its sensors generate about 7 trillion events a day.
- **Open models and incumbents.** CIOs tell Kurtz that open-weight models three months behind are good enough, keeping the frontier for "Formula 1" work. He expects an open "operating system of AI", as Linux became for the internet. For large companies, his advice is small squads and disrupting yourself.

## Quotes

> "The new apex predator is the agent state." — George Kurtz

> "a lot of what we see people today doing is they're not necessarily breaking in, they're logging in." — George Kurtz
