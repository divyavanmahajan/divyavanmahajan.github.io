---
title: >-
  Rethinking Legacy Data Infrastructure with Eon Co-Founders Ofir Ehrlich and
  Gonen Stein
description: >-
  Eon's founders argue that a company's historical data is now its main moat,
  but it stays locked in business-unit silos and must be mapped, classified and
  protected before AI agents can use it.
pubDate: '2026-08-27'
show: no-priors
episode: 175
url: 'https://www.youtube.com/watch?v=YscDZpVF4CQ'
youtube: 'https://www.youtube.com/watch?v=YscDZpVF4CQ'
durationMin: 35
hosts:
  - Sarah Guo
  - Elad Gil
guests:
  - Ofir Ehrlich
  - Gonen Stein
tags:
  - enterprise-data
  - data-infrastructure
  - ai-security
  - backup
  - non-human-identity
draft: false
---
## Thesis

Eon CEO Ofir Ehrlich and President Gonen Stein tell Elad Gil that models and compute have become close to interchangeable, so an enterprise's own data is its most valuable asset. That data is scattered across business units and old systems, and it carries security and compliance risk. Eon started in cloud backup and now pitches itself as a data foundation that maps, classifies, protects and exposes data to AI, while guarding against agents that hold legitimate permissions.

## Key points

- **Data as moat.** Ehrlich cites Google buying Spirit Airlines' data out of bankruptcy for $10 million. Gil adds that Mercor was rumoured to be the other bidder. Ehrlich says labs are approaching hedge funds for data, because agents need real enterprise data rather than synthetic data.
- **Why the data is locked.** Ehrlich describes a data team that needs another unit's data. The owning unit does not know what its systems contain, fears leaking fields such as the CEO's salary, and protects production uptime. Eon finds and classifies the data, builds a semantic layer, and ingests it without touching production.
- **Agents as insiders.** Eon was founded after the founders, then at AWS, saw a large customer with 60% of its environment exposed to ransomware because resources were not tagged. They now see the same pattern sped up, with agents dropping tables. Ehrlich says almost every leader he meets now fears this or has already been hit.
- **More dashboards, not fewer.** Ehrlich expects agents calling agents to make non-human identity and endpoint security top problems. Non-technical staff building tools with company data become actors outside the organisation's rules.
- **Plumbing gets rebuilt.** Single-purpose ETL tools such as Fivetran and dbt were built for one intended use. Ehrlich argues that AI rewards joining all data with its context, while agents are flooding storage with noisy data and tokens are getting more expensive.
- **Faster than the cloud.** Comparing this shift with their CloudEndure years, the founders say AI adoption is moving much faster because boards demand it. Forward-deployed engineers and buy-and-transform firms such as Long Lake are speeding it up.

## Quotes

> "the plumbing today is very limited and everyone built a solution to their set of problems" — Ofir Ehrlich

> "It's a good thing and bad thing that everyone inside the organization can become builders" — Ofir Ehrlich
