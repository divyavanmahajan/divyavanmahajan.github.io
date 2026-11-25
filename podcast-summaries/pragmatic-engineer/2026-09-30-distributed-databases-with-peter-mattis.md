---
title: "Distributed databases with Peter Mattis"
date: 2026-09-30
show: pragmatic-engineer
url: "https://newsletter.pragmaticengineer.com/p/distributed-databases-with-peter"
youtube: "https://www.youtube.com/watch?v=0GzwuYGvKA4"
duration_min: 102
hosts: ["Gergely Orosz"]
guests: ["Peter Mattis"]
description: "Cockroach Labs CTO Peter Mattis traces B-trees and replication from Gmail and Colossus to CockroachDB, and argues AI coding agents amplify domain experts without lowering quality."
tags: ["distributed-databases", "b-trees", "consensus", "ai-coding", "code-review"]
source_transcript: "pragmatic-engineer/episodes/2026/09/2026-09-30-distributed-databases-with-peter-mattis.md"
draft: false
---

## Thesis

Peter Mattis, co-founder and CTO of Cockroach Labs and co-creator of GIMP, argues that reliable distributed systems come from understanding every layer, from CPU caches to the speed of light, and that a few structures such as B-trees recur everywhere. He also says AI agents brought him back to writing production database code and that they amplify experts rather than replace expertise.

## Key points

- **Gmail and Colossus.** Mattis worked on Gmail's threading and message storage, which used B-trees for threads and unread counts. On Colossus, the successor to GFS, the team used Reed-Solomon erasure coding to cut storage from three full copies to roughly 2x while raising redundancy, with metadata stored in Bigtable.
- **Beating standard libraries.** At Google he built a B-tree replacement for the STL map that was faster and smaller thanks to spatial locality and fewer pointers. Years later he wrote a Swiss table implementation for Go that the Go team took over the finish line.
- **Why CockroachDB.** Mattis says manual sharding turns application developers into database developers. CockroachDB splits a contiguous key space into ranges, offers strong consistency, and uses Raft with three replicas by default and five for some system tables, because consensus is impossible with only two.
- **Back to coding with AI.** After producing up to about 100,000 lines a year pre-AI, Mattis stepped back from 2022 to 2024. He says Opus-class models restarted his coding: he built a B-tree of about 10,000 lines of optimised Rust in 30 minutes and runs five to 10 sessions with sub-agents.
- **Quality and review.** Mattis argues agents can be held to stricter testing than humans (property-based, metamorphic, deterministic simulation testing). He expects code review scrutiny to keep falling. Non-engineers at Cockroach Labs built 500 to 1,000 internal apps in a few months.
- **Advice.** He tells engineers to use AI as a tutor that dissects senior colleagues' code, and to stay curious outside their area. Orosz closes by noting Mattis finds the pace both exciting and exhausting.

## Quotes

> "the application developer is becoming a database developer at that point. And they're doing it poorly." — Peter Mattis

> "we're materially going to stop looking at the code in the same way that we don't look at assembly anymore." — Peter Mattis
