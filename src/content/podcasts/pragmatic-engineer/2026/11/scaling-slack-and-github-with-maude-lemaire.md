---
title: Scaling Slack and GitHub with Maude Lemaire
description: >-
  Maude Lemaire argues that scaling work at Slack, GitHub and Cursor depends on
  modelling real product usage, cutting needless load, and verifying AI output
  by hand for foundational systems.
pubDate: '2026-11-05'
show: pragmatic-engineer
url: 'https://newsletter.pragmaticengineer.com/p/scaling-slack-and-github-with-maude'
youtube: 'https://www.youtube.com/watch?v=x6WqD4qHxSc'
durationMin: 79
hosts:
  - Gergely Orosz
guests:
  - Maude Lemaire
tags:
  - scalability
  - load-testing
  - databases
  - platform-engineering
  - ai-coding-tools
draft: false
---
## Thesis

Maude Lemaire, a principal engineer who worked on performance at Slack, database scaling at GitHub and time to first token at Cursor, argues that scaling is as much a product question as an engineering one: you need to know how users actually behave, decide what load is worth carrying, and test the paths that really break. She uses LLMs all day but checks their output herself, because platform work has to be a stable foundation.

## Key points

- **Slack's enterprise growing pains.** Lemaire describes IBM trialling Slack before enterprise GA. Data was sharded by team, and the sidebar query joined separate tables for DMs, public and private channels. While she merged them (roughly 400 call sites, with feature flags, double writes and shadow reads), one mistaken backfill blanked Slack staff's sidebars for about half an hour.
- **Thundering herds and event floods.** A CEO message in a 100,000-person channel sets off a wave of emoji reactions, each one fanned out over WebSockets. Lemaire says Slack caps a message at 23 distinct custom emoji. Event floods hit single power users: an IBM admin logged into about 30 workspaces got each shared message 30 times.
- **Cheaper load testing.** Running headless Chrome cost 37 cents per instance per five-hour run, which Orosz works out at about $150,000 per 500,000-connection test. Lemaire's team switched to lightweight Go clients (Koi Pond) and built a recorder so PMs could capture the flows they wanted tested.
- **GitHub's shard ceiling.** When Lemaire joined GitHub in 2024, pull requests and issues ran on only 16 shards, because scatter queries without a sharding key had to hit every shard. She says Active Record hid query costs; the repo home page made over 100 MySQL queries across three clusters.
- **AI and judgment.** At Cursor, Lemaire says, Opus proposed parallelising tasks that only about 1% of users ever triggered, so it bought nothing; raising Redis TTLs helped more. She uses mutation tests so LLM-written tests actually cover edge cases.
- **Rotate platform and product engineers.** She recommends two-way rotations so platform guardrails fit how product teams now ship.

## Quotes

> "It has not helped me with performance optimizations, basically, at all." — Maude Lemaire

> "But now we're at this point where like the spaghetti has like a life of its own and it like actively wants to spill out of the plate." — Maude Lemaire
