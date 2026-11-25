---
title: How AWS S3 is built
description: >-
  Mai-Lan Tomsen Bukovec explains how S3 treats failure as constant and uses
  replication, auditors and formal methods to keep durability, availability and
  strong consistency at extreme scale.
pubDate: '2026-01-21'
show: pragmatic-engineer
url: 'https://newsletter.pragmaticengineer.com/p/how-aws-s3-is-built'
youtube: 'https://www.youtube.com/watch?v=5vL6aCvgQXU'
durationMin: 78
hosts:
  - Gergely Orosz
guests:
  - Mai-Lan Tomsen Bukovec
tags:
  - distributed-systems
  - cloud-storage
  - formal-methods
  - reliability
  - vector-search
draft: false
---
## Thesis

Mai-Lan Tomsen Bukovec, VP of Data and Analytics at AWS, who has run S3 for 13 years, tells Gergely Orosz that S3's simple put/get interface sits on top of a system designed on the assumption that servers fail all the time. She argues that correctness has to be proven, not just tested, at this scale, and that every new feature, from strong consistency to S3 Vectors, has to be built so that growth improves the service.

## Key points

- **Scale.** Tomsen Bukovec cites over 500 trillion objects, hundreds of exabytes, hundreds of millions of transactions per second, and tens of millions of hard drives across 120 availability zones in 38 regions.
- **Strong consistency at no extra charge.** S3 launched in 2006 as eventually consistent to favour availability. Moving to strong consistency took a replicated journal, which chains nodes so writes flow sequentially, plus a cache coherency protocol with a "failure allowance". She says the team chose not to pass the hardware cost on to customers.
- **Formal methods on every check-in.** S3 uses automated reasoning to prove its consistency model on each code check-in to the index subsystem, and also to prove cross-region replication and API correctness.
- **Durability is audited.** Over 200 microservices sit behind each regional endpoint, many devoted to durability. Auditors inspect every byte and trigger repair systems, so the team can report actual durability for any period.
- **Correlated failure and crash consistency.** She calls correlated failures the main threat. S3 stores objects multiple times across fault domains and designs services to return to a consistent state after a fail-stop failure.
- **New primitives.** S3 Tables (December 2024) manages Iceberg/Parquet data that can be queried with SQL. S3 Vectors is a new data structure: precomputed "vector neighbourhoods" give sub-100 ms warm queries, with up to 2 billion vectors per index and 20 trillion per bucket. She describes two Amazon tenets in tension, "respect what came before" and "be technically fearless".

## Quotes

> "at a certain scale, math has to save you, right? Because at a certain scale, you can't do all the combinatorics of every single edge case" — Mai-Lan Tomsen Bukovec

> "So if you're thinking about availability at any scale, it's the correlated failure that'll get you." — Mai-Lan Tomsen Bukovec
