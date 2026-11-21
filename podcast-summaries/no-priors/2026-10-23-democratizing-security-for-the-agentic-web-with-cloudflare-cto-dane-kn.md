---
title: "Democratizing Security for the Agentic Web with Cloudflare CTO Dane Knecht"
date: 2026-10-23
show: no-priors
episode: 184
url: "https://www.youtube.com/watch?v=6VprwfSc4Xk"
youtube: "https://www.youtube.com/watch?v=6VprwfSc4Xk"
duration_min: 41
hosts: ["Sarah Guo", "Elad Gil"]
guests: ["Dane Knecht"]
description: "Dane Knecht argues that AI-driven vulnerability discovery will make security the main engineering job for the next 18 months, while agents force the web toward new payment and content rails."
tags: ["cybersecurity", "agentic-web", "micropayments", "ai-adoption", "open-models"]
source_transcript: "no-priors/episodes/2026/10/2026-10-23-democratizing-security-for-the-agentic-web-with-cloudflare-cto-dane-kn.md"
draft: false
---

## Thesis

Speaking with Sarah Guo at Cloudflare Connect, Cloudflare CTO Dane Knecht argues that AI has made finding vulnerabilities so cheap that Log4j-scale incidents now happen weekly instead of yearly. He expects most engineering time over the next 18 months to go to security, before the backlog clears and productivity jumps. Meanwhile the web is in a "messy middle" where humans and agents share the same rails, and it needs new economic models.

## Key points

- **The attacker landscape.** Knecht says many recent large vulnerabilities came from people such as high-school students pointing agents at targets for bug bounties, not from nation states. He cites a key in web PKI that was seeded with the number four and could be reverse engineered. He is less pessimistic than those who want to air-gap everything, and credits the shift from castle-and-moat to zero trust.
- **Writing more secure software.** Knecht's first principle is to reduce attack surface, which AI makes harder because it tends to write verbose, complex code. Cloudflare has turned its internal RFCs into principles that agents enforce during review, and it plans to grow from one red team to four or five.
- **Paying for content.** Knecht expects agents to pay a site's CPM rate through micropayments. Cloudflare has released a monetization gateway with agent wallets and a stablecoin. It is also building Signals with OpenAI so agents can find new content without re-crawling the web.
- **Cloudflare OS.** The internal platform gives employees governed access to AI. Go-to-market and G&A teams use it more than engineers.
- **Becoming AI-first.** In its first-ever restructuring, a customer-email process that once needed three teams became a single tool. There is no token leaderboard: spending $300 a day triggers an email, and higher spend notifies a manager or VP. After seeing what about 200 interns did, Cloudflare hired a thousand interns this year, at a company of about 5,000.
- **Open models and smaller sites.** Knecht thinks security-capable models will end up open because attackers will get them anyway. He says Cloudflare gives protection against major vulnerabilities to free customers as well as paid ones.

## Quotes

> "over time it all has to be open because everyone's going to get access to it anyways" — Dane Knecht

> "if you're not shipping you're dying is how we think about it" — Dane Knecht
