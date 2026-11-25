---
title: "Stop being skeptical about AI for development with Charity Majors"
date: 2026-08-12
show: pragmatic-engineer
url: "https://newsletter.pragmaticengineer.com/p/stop-being-skeptical-about-ai-for"
youtube: "https://www.youtube.com/watch?v=HC8T1OlgYi0"
duration_min: 86
hosts: ["Gergely Orosz"]
guests: ["Charity Majors"]
description: "Charity Majors argues that shipping AI-written code nobody has read is a question of when, not if, and that this requires more verification discipline, honest accounting of costs and observability."
tags: ["ai-coding", "observability", "code-review", "reliability", "engineering-leadership"]
source_transcript: "pragmatic-engineer/episodes/2026/08/2026-08-12-stop-being-skeptical-about-ai-for-development-with-charity-majors.md"
draft: false
---

## Thesis

Honeycomb co-founder and CTO Charity Majors tells Gergely Orosz that skepticism about AI was reasonable in 2025 but no longer is. In her view, engineers will ship code they never read, so the trust lost in code generation must be rebuilt through tests, evals and production feedback. She also argues that both the enthusiast and skeptic camps are seeing real things and need to tell the whole story.

## Key points

- **Turning point.** Majors says that at SREcon in March 2025 she and Fred Hebert told the audience to try vibe coding and got groans. Her own shift came with Opus 4.5 in November 2025, though she credits the harnesses and tooling more than the model.
- **Code as cattle.** Drawing on Chad Fowler's Phoenix Architecture, she argues that cheap generation pushes application code towards being replaced rather than edited in place. She recalls Parse taking six months to write a Rails API and two years to rewrite it in Go.
- **Code review is overrated.** Majors says humans are good at deciding whether something belongs in the product, but reading code for syntax and bugs is at the bottom of her list of what review is for. She praises Intercom for publishing that reliability and code quality fell for 18 months after adopting AI.
- **Two camps.** She says people on call see slop and melting mental models, while enthusiasts see real wins in rewrites and removing toil. Orosz reports a rise in Sev0 incidents at Meta after reliability staff were reassigned, which he links to the trend without claiming direct cause.
- **Observability for non-deterministic systems.** Majors says DevOps failed to connect developers to production. She argues that OpenTelemetry auto-instrumentation now makes instrumenting faster than not. The second edition of Observability Engineering is a full rewrite at 600 pages.
- **Careers and fatigue.** She advises anxious directors to return to IC work and "get AI on your resume", says juniors will be fine if hired, and suggests small acts of control, such as Honeycomb's team not using AI on Wednesdays.

## Quotes

> "Production is not what happens after development. It is a stage of development." — Charity Majors

> "If you're debiting from this trust account and the creation of the code, it has to get built up somewhere else." — Charity Majors
