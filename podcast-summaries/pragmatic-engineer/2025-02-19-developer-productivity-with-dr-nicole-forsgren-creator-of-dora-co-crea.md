---
title: "Developer productivity with Dr. Nicole Forsgren (creator of DORA, co-creator of SPACE)"
date: 2025-02-19
show: pragmatic-engineer
url: "https://newsletter.pragmaticengineer.com/p/developer-productivity-with-dr-nicole"
youtube: "https://www.youtube.com/watch?v=WufjP_WRnPM"
duration_min: 83
hosts: ["Gergely Orosz"]
guests: ["Nicole Forsgren"]
description: "Nicole Forsgren argues no single metric such as PR count captures developer productivity; teams need a constellation of measures, attention to developer experience, and an experimental attitude to AI tools."
tags: ["developer-productivity", "developer-experience", "dora-metrics", "engineering-metrics", "ai-assisted-coding"]
source_transcript: "pragmatic-engineer/episodes/2025/02/2025-02-19-developer-productivity-with-dr-nicole-forsgren-creator-of-dora-co-crea.md"
draft: false
---

## Thesis

Nicole Forsgren, creator of DORA, co-creator of SPACE and now at Microsoft Research, tells Gergely Orosz that PRs and diffs are both good and terrible signals: useful for spotting friction in the system, harmful as a solo or individual metric. She argues for a constellation of metrics plus qualitative feedback, treats developer experience as the main lever, and expects DORA and SPACE to stay relevant as AI tools change how code is written.

## Key points

- **PRs in context.** Forsgren notes that senior engineers often have low PR counts because they unblock others, design and mentor. She describes Microsoft's EngThrive effort, inspired by SPACE, which combines survey data with system data such as build times and PR review delays.
- **DORA's scope.** The four DORA metrics are a good signal of pipeline health, but only cover commit to production, she says. She shows how they adapt to air-gapped systems such as the US Navy's, and argues DORA is itself an instance of SPACE.
- **Developer experience.** Forsgren defines it as the developer's lived experience and says friction, blockers and slow approvals add delay and cognitive load. She calls Google's DevEx the best she has seen because it does not tolerate friction; startups have speed but less infrastructure.
- **Making the case.** To fund platform work she recommends combining rough data, such as Chef's weekly time-loss spreadsheet, with stories, framing trade-offs and admitting a tipping point beyond which more investment adds little.
- **High-performing teams.** She lists psychological safety and curiosity, and calls onboarding time a strong indicator. Research by Brian Houck at Microsoft found an early dummy pull request raised later productivity measures by 30 to 50%. Orosz argues fast onboarding, as at Meta or in Uber's mobile monorepo, can weaken Brooks's law.
- **AI tools.** Forsgren expects DORA to stay useful and SPACE to gain a trust dimension. She cites a GitHub study showing over 50% more unit tests passing, sees release engineering as an LLM opportunity, and advises developers to experiment, including turning off autocomplete when it breaks flow.

## Quotes

> "It's real hard to build the AI things when your pipeline's trash." — Nicole Forsgren

> "Dora is an instance. It's an instantiation of space." — Nicole Forsgren
