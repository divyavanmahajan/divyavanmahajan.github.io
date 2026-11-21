---
title: Why Agents Love Supabase
description: >-
  Agents now create most new Supabase projects, so the company is building a
  backend that scales down to billions of tiny databases and up to sharded
  Postgres, with schemas agents can read.
pubDate: '2026-10-28'
show: latent-space
url: 'https://latent.space/p/supabase'
durationMin: 77
hosts:
  - Alessio Fanelli
  - swyx
guests:
  - Paul Copplestone
  - Ant Wilson
tags:
  - postgres
  - databases
  - agents
  - developer-tools
  - open-source
draft: false
---
## Thesis

Supabase co-founders Paul Copplestone and Ant Wilson tell swyx, an investor since their seed round, that AI coding agents have turned Supabase's growth exponential. Their response is to scale in both directions: tiny, cheap databases for the flood of agent-built prototypes, and a rewritten Postgres operator for the largest workloads, while making the database legible to agents through code-first, declarative schemas.

## Key points

- **Select announcements.** Supabase Compute runs long-lived, serverless containers next to the database, replacing Deno Edge Functions' two-second limit. OrioleDB, a drop-in Postgres storage engine said to run 1.5 to 2 times faster, enters full beta under Apache 2 with its patent. Multigress, a ground-up Postgres operator by the creator of Vitess, survived 1,000 sequential failovers without data loss; sharding is expected around early next year.
- **Billions of databases.** Supabase launches about five million databases a month and expects to need billions. It is acquiring Turso, whose rewrite gives SQLite multiple writers, to power a new small instance type, Supabase Spark, with an upgrade path to full Postgres and Multigress.
- **Agents improve the funnel.** The founders say growth took off at the start of this year as models improved, with little marketing spend. Unusually, activation and paid conversion rose too, because an agent completes setup in one step. One user earned $10,000 within days of launch.
- **Code-first, Git-native.** Rather than having agents read thousands of migration files, Supabase now represents the whole schema declaratively in a folder, with a new library, pgdelta. swyx notes every frontier model in his AEO tracker recommends Supabase as an integrated backend, which the founders attribute to timing, community content and open source.
- **Product-led sales.** The founders describe emailing customers who hit product triggers, using non-responders as a control group: they grow 25% month over month, while helped accounts grow 125%, and salespeople are paid on the difference. Enterprise wins are greenfield, since production databases "almost never" migrate.
- **Community and AI spend.** Supabase is giving about $1 million in stock to community members, starting with a Discord helper who answered 20,000 questions. It spends roughly $300,000 a month on AI for about 450 people and has some 50 open roles, especially SREs.

## Quotes

> "what you have to do is land with them on day one and then make sure that they stick around to day one thousand, day ten thousand." — Supabase co-founder

> "We know that agents are gonna operate mostly on code. They don't wanna reach out to anything." — Supabase co-founder
