---
title: >-
  Twisting the rules of building software: Bending Spoons (the team behind
  Evernote)
description: >-
  Bending Spoons' leaders describe buying products like Evernote to run long
  term, rebuilding them on a shared platform, and running the company on radical
  simplicity: no on-call, bonuses or titles.
pubDate: '2024-10-23'
show: pragmatic-engineer
url: >-
  https://newsletter.pragmaticengineer.com/p/twisting-the-rules-of-building-software
youtube: 'https://www.youtube.com/watch?v=6WM_q193Kls'
durationMin: 79
hosts:
  - Gergely Orosz
guests:
  - Luca Ferrari
  - Francesco Mancone
  - Federico Simionato
tags:
  - acquisitions
  - engineering-culture
  - legacy-modernization
  - platform-engineering
  - radical-simplicity
draft: false
---
## Thesis

CEO Luca Ferrari, CTO Francesco Mancone and Evernote product lead Federico Simionato tell Gergely Orosz that Bending Spoons buys products to own and operate indefinitely, then closes the gap between their current state and a long-term vision. Ferrari credits being self-funded and profitable from the start, plus a principle of "radical simplicity", for the company's unusual choices.

## Key points

- **Scale.** Ferrari cites about $700 million in revenue, profitability in all 11 years, well over 200 million monthly active users and about 450 staff (over 800 including WeTransfer). Mancone says the shared platform serves more than 100 products and over 100,000 requests per second; Remini averages 2,000 inferences per second on around 4,000 dynamically allocated GPUs.
- **Acquisitions and layoffs.** Ferrari describes a learning phase of weeks to months after each deal, often followed by a smaller, more autonomous organisation. He calls layoffs painful, says the company tries to support those affected, and accepts that critics who hold a different view of business will disagree.
- **Rebuilding Evernote.** Mancone says Evernote ran as a Java 11 monolith on 750 manually provisioned Google Cloud VMs with locally stored, unevenly sharded data. The team moved data to managed databases, began splitting the core into microservices, replaced client polling with event-driven sync, moved CI from self-hosted Jenkins to CircleCI, and aimed to retire the monolith by year end.
- **Shipping visible wins.** Simionato says the Evernote team ranks features by user value and ease of building, shipping items like collapsible sections and slash commands alongside long migrations.
- **Radical simplicity.** Ferrari says the burden of proof sits with whoever wants to add complexity. Examples include aiming for no on-call rotations, fixed pay with no bonuses, no titles beyond "software engineer" and "lead", and few levels.
- **Teams and hiring.** Business units choose their own stacks and processes; Python with FastAPI is the most common backend, and one attribution tool runs on Rust. Ferrari says the company prefers hiring talented new graduates and reports about 1% unwanted churn per year.

## Quotes

> "If you know that the on-call is there, it's not the same." — Luca Ferrari

> "we should seek out the most radically simple solution and approach and adding complexity, the burden of proof is always on those who want to do so" — Luca Ferrari
