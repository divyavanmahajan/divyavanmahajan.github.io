---
title: "Building resilient systems with Sam Newman"
date: 2026-10-07
show: pragmatic-engineer
url: "https://newsletter.pragmaticengineer.com/p/building-resilient-systems-with-sam"
youtube: "https://www.youtube.com/watch?v=a0sZV0qIbI0"
duration_min: 118
hosts: ["Gergely Orosz"]
guests: ["Sam Newman"]
description: "Sam Newman argues that resilience is a matter of degree, set by business context and people as much as technology, and that AI use needs hedging and clear module boundaries."
tags: ["distributed-systems", "resilience-engineering", "microservices", "observability", "software-architecture", "ai-coding"]
source_transcript: "pragmatic-engineer/episodes/2026/10/2026-10-07-building-resilient-systems-with-sam-newman.md"
draft: false
---

## Thesis

Sam Newman, author of Building Microservices and the new Building Resilient Distributed Systems, argues that resilience is not a binary property: how much a team needs depends on business context, and getting there takes observability, honest learning from incidents and psychological safety as well as technical patterns. On AI, he argues for hedging vendors and keeping humans in charge of module boundaries.

## Key points

- **Microservices as a last resort.** Newman, who was in the Thoughtworks room when James Lewis's "micro apps" idea became "microservices", defines them first by independent deployability and second by business-domain boundaries. He says the best reason to adopt them is wanting team autonomy; Orosz adds that Uber's service sprawl came from a rule that all new work go outside the monolith.
- **Three rules of distributed systems.** Information takes time to travel, the thing you want to talk to is sometimes not there (his examples include a SAN fire and rabbits eating network cable), and resource pools are not infinite. Newman says most outages come from resource saturation, as in Square's 2017 Multipass retry storm with 500 retries and no delay.
- **Idempotency keys versus fingerprints.** Newman recommends idempotency keys from the start, as Stripe and PayPal use. Fingerprints are easier to retrofit but reject legitimate duplicates, such as a Danish payment system that blocks a second 40-kroner purchase within five minutes.
- **Business context decides failure modes.** Newman says an e-commerce shop can sell an item it is unsure it has, but a Taylor Swift ticket seller should not. Orosz describes Uber moving from failing open to failing closed on payments as it pursued profitability.
- **Four resilience concepts.** Drawing on David Woods, Newman covers robustness, rebound, graceful extensibility and sustained adaptability, noting that engineers focus on robustness although the last two depend on people and culture.
- **AI: hedge and modularise.** Newman cites an Economist analysis that AI labs need 2.6 trillion in revenue by 2030 against a 1.4 trillion software market, and advises being multi-vendor and multi-model. He warns of cognitive debt and cognitive surrender, and suggests letting AI work freely inside modules while humans design the boundaries between them.

## Quotes

> "I've described microservices as being an architecture of last resort." — Sam Newman

> "Why did the LLM delete my database? Well, because it has no concept of causality." — Sam Newman
