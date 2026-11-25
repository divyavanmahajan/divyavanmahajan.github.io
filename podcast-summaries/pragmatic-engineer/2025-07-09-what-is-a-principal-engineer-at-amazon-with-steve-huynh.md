---
title: "What is a Principal Engineer at Amazon? With Steve Huynh"
date: 2025-07-09
show: pragmatic-engineer
url: "https://newsletter.pragmaticengineer.com/p/what-is-a-principal-engineer-at-amazon"
youtube: "https://www.youtube.com/watch?v=vZGycBUc1vM"
duration_min: 73
hosts: ["Gergely Orosz"]
guests: ["Steve Huynh"]
description: "Steve Huynh argues Amazon's Principal Engineer role is a hard-to-reach jump where you are given a direction, not a problem, and must combine deep engineering with manager-like skills."
tags: ["career-growth", "principal-engineer", "amazon", "distributed-systems", "engineering-culture"]
source_transcript: "pragmatic-engineer/episodes/2025/07/2025-07-09-what-is-a-principal-engineer-at-amazon-with-steve-huynh.md"
draft: false
---

## Thesis

Steve Huynh, who spent 17.5 years at Amazon and the last four as a Principal Engineer, tells Gergely Orosz why the promotion from Senior (L6) to Principal (L7) is one of the hardest in tech. He argues the role is defined less by code than by owning a broad direction across many teams, and that Amazon's scale, writing culture and principled leadership shaped how he worked.

## Key points

- **Freedom of movement.** Huynh worked on Kindle, payments, Amazon Tickets and Prime Video live sports. He credits an internal policy that stopped directors from blocking transfers, which turned teams into talent "sources" or "sinks" and exposed bad management.
- **Scale and brownouts.** One Prime Video landing page request fans out into hundreds of downstream calls, so services see tens to hundreds of thousands of requests per second. He describes "brownouts", where a service accepts connections but times out or returns errors, and the need to let a recovering dependency "breathe".
- **Latency and monoliths.** Amazon tracked revenue against page latency and found faster pages earned more. Amazon began as a C++ monolith until it hit a 4 GB binary limit, which pushed it to services. Huynh advises startups to start with a monolith.
- **The L6 to L7 gap.** He calls it roughly a two-and-a-half-level jump; it took him eight years. Some strong engineers left for companies with a staff level, while hundreds of Principal roles stayed open.
- **Living the role.** Reporting to a VP over about 450 developers, he says he received a direction such as improving availability for live sports, faced a triple-booked calendar, and had to prioritise hard. He warns principals can wrongly assume expertise in areas like LLMs.
- **Culture.** Huynh names principled thinking, six-page memos (one to four hours of reading a day), blameless COEs, and a patent on fast ticket allocation using CPU cache and bit manipulation.

## Quotes

> "you are assigned not a problem, not even a problem space. You're assigned a direction." — Steve Huynh

> "I think it just makes a ton of sense to start with a monolith, wait till it breaks" — Steve Huynh
