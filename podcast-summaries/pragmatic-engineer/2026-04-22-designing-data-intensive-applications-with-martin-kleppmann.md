---
title: "Designing Data-intensive Applications with Martin Kleppmann"
date: 2026-04-22
show: pragmatic-engineer
url: "https://newsletter.pragmaticengineer.com/p/designing-data-intensive-applications"
youtube: "https://www.youtube.com/watch?v=SVOrURyOu_U"
duration_min: 85
hosts: ["Gergely Orosz"]
guests: ["Martin Kleppmann"]
description: "Martin Kleppmann explains how cloud object stores reshaped the second edition of his book, why scaling is a risk-cost trade-off, and why AI may make formal verification mainstream."
tags: ["distributed-systems", "data-systems", "formal-verification", "local-first", "cloud-architecture"]
source_transcript: "pragmatic-engineer/episodes/2026/04/2026-04-22-designing-data-intensive-applications-with-martin-kleppmann.md"
draft: false
---

## Thesis

Martin Kleppmann, author of Designing Data-Intensive Applications and a Cambridge researcher, argues that application developers benefit from knowing how data systems work internally, even as cloud services hide more of the details. He frames reliability and scale as business trade-offs between risk and cost, and expects LLMs to make formal verification practical where it used to be too expensive.

## Key points

- **From startups to the book.** Kleppmann ran GoTestIt, a Selenium-based testing service that struggled for adoption, then Rapportive, a Gmail extension sold to LinkedIn in 2012 with five people. Seeing Kafka and stream processing (Samza) at LinkedIn gave him the mental model behind the book; the first edition took about four years.
- **Second edition.** Co-written with Chris Riccomini, it weaves cloud-native architecture throughout: databases built on object stores rather than local disks. MapReduce coverage was cut, while vector indexes and data frames were added to reflect AI workloads.
- **Scaling down and sharding.** Kleppmann says serverless makes scaling down cheap, and that bigger machines mean fewer teams need to shard across machines. Replication remains relevant at every scale because it is about fault tolerance.
- **Trade-offs, not best practices.** He treats multi-region and multi-cloud as decisions for the business, and mentions European dependence on US cloud providers as a geopolitical risk some critical workloads may want to hedge. He adds that engineers should also surface societal and reputational risks.
- **Formal verification.** He describes model checkers such as TLA+ and FizzBee as the entry point and proof assistants such as Isabelle, Rocq and Lean as harder. LLMs both write proofs better and generate more code than humans can review.
- **Local-first and new research.** His work on Automerge tackles decentralised access control, where a revoked user's concurrent edit causes devices to disagree. He is also starting research on cryptography to prove supply-chain claims such as emissions or deforestation compliance without revealing sensitive supplier data.

## Quotes

> "But basically, MapReduce is dead. Nobody uses it anymore." — Martin Kleppmann

> "we're vibe coding a bunch of stuff if we have to manually review all of that code then that will become the bottleneck" — Martin Kleppmann
