---
title: Developer Experience at Uber with Gautam Korlam
description: >-
  Gautam Korlam argues Uber's developer platform succeeded by treating internal
  developers as customers, measuring their workflow end to end and building
  tooling vendors could not yet supply.
pubDate: '2025-03-12'
show: pragmatic-engineer
url: 'https://newsletter.pragmaticengineer.com/p/developer-experience-at-uber'
youtube: 'https://www.youtube.com/watch?v=BSrx9y7npyg'
durationMin: 81
hosts:
  - Gergely Orosz
guests:
  - Gautam Korlam
tags:
  - developer-experience
  - platform-teams
  - monorepo
  - developer-productivity
  - ai-coding-tools
draft: false
---
## Thesis

Gautam Korlam, one of Uber's first Android engineers and later a principal engineer, tells Gergely Orosz that Uber's developer platform worked because it ran like a product team, with developers as customers, published SLOs and funnel analytics. Now co-founder of Gitar, he argues AI agents should cover the whole development lifecycle, and he expects junior engineers and generalists to do well with them.

## Key points

- **Deleting the monorepo.** Korlam recalls accidentally force-pushing over Uber's Java monorepo late in his tenure. Because SubmitQueue paused and backups existed, the result was a delay of about 20 minutes, and only a latency SLO was broken.
- **Built in-house.** With roughly one commit a minute and builds of up to an hour, Uber built SubmitQueue to guarantee a green main, using ML models to speculate on which commit combinations would pass.
- **Monorepos need tooling.** Mobile moved from hundreds of repos to monorepos, later on Buck and Bazel. Korlam says the main gain was standardisation: one central team can upgrade a library for everyone. He notes Amazon and Netflix make multi-repo work with their own tooling.
- **Measure, then fix.** Local Developer Analytics tracked builds, IDE indexing and the path to a PR. Korlam says developer NPS went from about -50 to +8, and code review time, not CI, was the biggest bottleneck. A team of about 10 supported around 1,000 engineers. DevPods cloud environments started in about six seconds.
- **Path to principal.** Korlam credits joining early, going deep in a niche, reassessing every two years and building social capital through office hours. He says principal engineers act more as peers to their managers.
- **AI and skills.** He sees vibe coding as useful for prototyping but not yet at enterprise scale. Gitar's agent, Jimy, targets maintenance work such as library upgrades. He expects taste, business understanding and maintainable design to matter more.

## Quotes

> "So the gist as monorepo non monorepo, if you don't have tooling, it's going to suck at bigger scale." — Gautam Korlam

> "Let's not treat it as another internal thing. Let's really be customer obsessed." — Gautam Korlam
