---
title: "Observability: the present and future, with Charity Majors"
date: 2025-01-22
show: pragmatic-engineer
url: "https://newsletter.pragmaticengineer.com/p/observability-the-present-and-future"
youtube: "https://www.youtube.com/watch?v=SvEjS4-2WJQ"
duration_min: 74
hosts: ["Gergely Orosz"]
guests: ["Charity Majors"]
description: "Charity Majors argues observability must move from the costly three-pillars model to unified storage of wide, high-cardinality events, making it a development feedback tool and a prerequisite for AI-generated code."
tags: ["observability", "opentelemetry", "slos", "devops", "platform-engineering"]
source_transcript: "pragmatic-engineer/episodes/2025/01/2025-01-22-observability-the-present-and-future-with-charity-majors.md"
draft: false
---

## Thesis

Charity Majors, co-founder and CTO of Honeycomb, tells Gergely Orosz that observability is about understanding the intersection of code, systems and users, not just outages. She argues the industry is shifting from "Observability 1.0" (metrics, logs and traces stored separately) to "2.0": wide structured events in unified, columnar storage. In her view this makes observability the backbone of development feedback loops and a precondition for safely running AI-generated code.

## Key points

- **Origins at Parse and Facebook.** Majors says Parse, running over a million mobile apps on a Ruby on Rails stack, kept going down until the team fed data into Facebook's Scuba. Slicing by app ID or query cut debugging from hours to seconds.
- **Three pillars and cost.** She says storing every request in up to 15 tools creates an "obscene" cost multiplier. Cardinality is the other driver: teams spend most of their time governing it, and a Datadog bill can jump from $200,000 to $2 million a month without code changes.
- **Wide events and columnar stores.** Majors argues for fewer but wider logs, and a columnar store so fields need no predefined schema. Honeycomb built its own database, Retriever, because ClickHouse did not exist in 2016; it later moved querying to Lambda and aged data out to S3.
- **OpenTelemetry and lock-in.** She says OTel, now the top CNCF project ahead of Kubernetes, lets teams instrument once and switch vendors, forcing vendors to compete on quality.
- **Common mistakes.** Majors criticises adding observability only after production, relying on static dashboards, and not using SLOs as the entry point. She calls SLOs a hedge against micromanagement; Honeycomb uses its error budget to kill the oldest Kafka node every Monday.
- **DevOps and AI.** She sees DevOps in its "fulfillment stage" as engineers own their code in production, and favours platform teams. On AI, she says good AI observability must sit inside good software observability because it is a trace-shaped problem.

## Quotes

> "it was always kind of a crazy idea that half your engineers could build the software and the other half would understand and operate it." — Charity Majors

> "This is a software problem with non-deterministic elements. It's not an AI problem is how I think of it." — Charity Majors
