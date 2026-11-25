---
title: Scaling Uber with Thuan Pham (Uber’s first CTO)
description: >-
  Thuan Pham argues that Uber's rewrites, microservices and program/platform
  split were survival tactics for hypergrowth, and that AI raises the floor
  without changing what makes engineers great.
pubDate: '2026-04-01'
show: pragmatic-engineer
url: 'https://newsletter.pragmaticengineer.com/p/scaling-uber-with-thuan-pham-ubers'
youtube: 'https://www.youtube.com/watch?v=3jjRNVfm3V4'
durationMin: 99
hosts:
  - Gergely Orosz
guests:
  - Thuan Pham
tags:
  - hypergrowth
  - microservices
  - engineering-leadership
  - org-design
  - ai-coding
draft: false
---
## Thesis

Thuan Pham, Uber's first CTO and now CTO of Faire, tells Gergely Orosz that most of Uber's engineering choices were made to buy runway, not to build the ideal system. With growth this fast, he argues, the job is to find the next thing that will break, fix it just enough to survive, and repeat. He also argues that reputation, built by treating colleagues well, shaped his career more than any job search did.

## Key points

- **Racing the brick wall.** Pham joined in 2013 with about 40 engineers and 30,000 rides a day. The single-threaded Node.js dispatch system would run out of capacity for New York by October, so he set two requirements: one city on many boxes, and one box serving many cities.
- **China in five months.** Travis Kalanick asked for two months; industry peers said 18. The team needed five and launched incrementally, starting with Chengdu, the largest city, which Pham now calls the right call.
- **Org structure before microservices.** At about 100 engineers, functional teams stalled, so Pham, Kalanick and Jeff Holden used coloured sticky notes to form cross-functional program and platform teams. A rule that new code goes outside the "API" monolith led to thousands of microservices; the decomposition took two years.
- **Building in-house tools.** Pham says random Postgres failures and capacity limits in open-source tools pushed Uber to build Schemaless on MySQL, M3 and Jaeger. He hired trusted ex-VMware engineers, including a Denmark team.
- **Levels and mobility.** He defends splitting senior into L5A and L5B to show progress on a five-year path to staff, and making internal transfers easy.
- **AI at Faire.** Pham says Faire uses swarm coding with orchestrated agents and its best engineers doubled output; building features on old, large codebases is the unsolved problem.

## Quotes

> "Because by doing the hardest thing first, once you launch that, everything else is downhill from there." — Thuan Pham

> "Complacency is death. I mean, like every, the world will move faster and faster. And the moment we stand still, we're falling behind." — Thuan Pham
