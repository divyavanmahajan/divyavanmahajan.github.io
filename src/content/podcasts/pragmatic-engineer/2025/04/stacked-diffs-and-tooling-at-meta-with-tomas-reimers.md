---
title: Stacked diffs and tooling at Meta with Tomas Reimers
description: >-
  Graphite co-founder Tomas Reimers argues that Meta-style stacked diffs and
  monorepos remove code review bottlenecks, and that AI-generated code makes
  careful human review more important.
pubDate: '2025-04-02'
show: pragmatic-engineer
url: 'https://newsletter.pragmaticengineer.com/p/stacked-diffs-and-tooling-at-meta'
youtube: 'https://www.youtube.com/watch?v=qBRJxIw7gBg'
durationMin: 73
hosts:
  - Gergely Orosz
guests:
  - Tomas Reimers
tags:
  - stacked-diffs
  - code-review
  - monorepos
  - developer-tooling
  - ai-coding
draft: false
---
## Thesis

Tomas Reimers, a former Meta developer-tools engineer and co-founder of Graphite, tells Gergely Orosz that Meta's internal tooling was roughly a decade ahead of the industry because it was tightly integrated and built around stacked diffs and monorepos. He argues these practices are now spreading to mid-sized companies, and that AI coding tools will push even more work into code review.

## Key points

- **Integration as the defining trait.** Reimers describes Phabricator (code review) linked to Sandcastle (CI), OnDemand (dev boxes) and Landcastle (deploys), plus Herald and later ButterflyBot rules that could flag deprecated APIs. A landed diff showed its rollout percentage and A/B test results on one page.
- **Stacking unblocks authors.** Instead of waiting for review, developers branch off their pending branch and keep going, which keeps pull requests small. Reimers says early adopters at Meta got about 3x faster and became internal evangelists; he sees open source, with its untrusted and sometimes vanishing contributors, as the case where stacking does not fit.
- **Culture versus process.** Reimers cites a "trust matrix": high trust and tolerance for mistakes means leaning on culture, low trust means automation and enforcement. He notes constraints differ within one company, such as mobile teams on weekly releases versus web teams that hold pagers.
- **The move to monorepos.** Reimers says most Graphite customers, Silicon Valley companies of roughly 100 to 10,000 people, are in or migrating to a monorepo. He believes GitHub favours polyrepos because that suits open source.
- **AI raises the stakes for review.** More generated code means more pull requests, bigger ones and more CI failures. Reimers expects AI to check the mechanics while humans focus on intent and business decisions; Orosz suggests the Linux model of personal ownership of patches as one answer.
- **Metrics and origins.** Reimers' favourite metric, from Uber, is the time a pull request sits in review with no clear next action. Graphite started on mobile release tooling and pivoted in November 2021, when it had six people, after former Meta colleagues kept asking for its stacking tool.

## Quotes

> "We like to joke that once you stack, you don't go back." — Tomas Reimers

> "Because if the author didn't read the code, then someone else certainly should." — Tomas Reimers
