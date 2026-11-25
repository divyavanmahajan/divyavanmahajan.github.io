---
title: Software factories and code reviews with Harjot Gill
description: >-
  CodeRabbit CEO Harjot Gill argues that agent-driven software factories,
  verification loops and release-level human review let a small team ship at
  very high volume, with high AI spend justified.
pubDate: '2026-11-18'
show: pragmatic-engineer
url: 'https://newsletter.pragmaticengineer.com/p/software-factories-and-code-reviews'
youtube: 'https://www.youtube.com/watch?v=4Cjb7691GJ8'
durationMin: 87
hosts:
  - Gergely Orosz
guests:
  - Harjot Gill
tags:
  - software-factories
  - code-review
  - ai-agents
  - ai-costs
  - engineering-hiring
draft: false
---
## Thesis

Harjot Gill, founder and CEO of CodeRabbit, tells Gergely Orosz that he merged more than 5,000 pull requests in a month by keeping fleets of agents busy, mostly on "janitorial" work. He argues that line-by-line human code review is dead, but that humans still review risk at the release level, and that funded startups will need far more capital for tokens and compute. Orosz pushes back on the spending claims, and on Gill's sleep habits.

## Key points

- **Hill climbing.** Gill says agents need ways to verify their own work: TLA+ models (which found race conditions in a Slack bot product), Lean theorems, deterministic simulations, emulated cloud APIs, dev environments, and production rollouts behind feature flags that an agent watches.
- **Factory examples.** By his account, one agent goal ran for six weeks to build a write-ahead log on object stores in Rust, now in production, and another migrated all services to Bun over a weekend. He uses the Codex desktop app and says he has not opened a code editor since.
- **Release review and "driving licences".** At CodeRabbit, Gill says, a release (not a PR) is the unit of change for SOC 2. Engineers on a review-exempt list can ship directly, but regressions traced back to their PRs earn strikes, and enough strikes mean their changes need human review again.
- **Cost.** Gill puts his own AI spend at $250,000 to $275,000 a month, around $150 per PR, and the company's at several million a month. After a vendor quoted about $13 million a year for CI, the team built its own CI, which he says is roughly 50% cheaper. Fine-tuning models stopped paying off because frontier models moved faster than the team could keep up.
- **Funding debate.** Gill argues $8 million seed rounds are no longer enough because copycats now arrive within weeks. Orosz says the case holds mainly for AI dev-tool startups.
- **Hiring.** Gill looks for agency, range of experience and systems thinking, and he advertised for people with 1,000+ PRs in 30 days or 500+ hours of strategy games such as Civilization or Factorio.

## Quotes

> "the human code review is dead, but the human review is not dead. Some review still has to happen." — Harjot Gill

> "I mean, this might be a hot take, but like humans were writing slop, not AI." — Harjot Gill
