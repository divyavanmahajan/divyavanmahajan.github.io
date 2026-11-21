---
title: The Age of Async Agents — Cognition's Walden Yan & OpenInspect's Cole Murray
description: >-
  Background coding agents became practical in late 2025; the hard parts now are
  sandbox architecture, environment setup, testing, memory and integration into
  the company.
pubDate: '2026-05-28'
show: latent-space
url: >-
  https://lspace.beehiiv.com/podcast/s/latent_space_the_ai_engineer_podcast/the_age_of_async_agents_cognition_s_walden_yan_openinspect_s_cole_murray
durationMin: 68
hosts:
  - Alessio Fanelli
  - swyx
guests:
  - Walden Yan
  - Cole Murray
tags:
  - background-agents
  - coding-agents
  - agent-infrastructure
  - sandboxes
  - devin
draft: false
---
## Thesis

Walden Yan (Cognition co-founder and CPO) and Cole Murray (creator of the open-source OpenInspect) agree that models such as Opus 4.5 and GPT 5.2 made it possible around December 2025 to go from a good spec to a pull request with little hand-holding. Their argument is that the agent loop is now the easy part; the value lies in the infrastructure, testing and company integration around it.

## Key points

- **Adoption numbers.** Yan says Cognition's merged PRs grew about 7x over a few months while engineering headcount rose about 10%; the hosts cite Devin's share of commits on Devin repos rising from 16% in January to 80% in March.
- **Harness in or out of the box.** Murray explains the choice between running the agent inside the sandbox (simpler, but secrets live there) and running the "brain" in a control plane that uses the sandbox as hands. Both prefer the latter; Yan says Devin was built that way from the start so only tightly scoped secrets sit on the machine.
- **Environment and testing.** Both call repo setup the perennial hard problem. Yan argues testing is mainly a reasoning problem about running and triggering features, not computer use, and says some cases needed several frontier models working together. He also describes infrastructure details such as network file systems that made grep slow.
- **Memory and multi-agent.** Murray considers memory unsolved and relies on skills files; Yan says about 95% of Devin's memories are auto-generated from user corrections. Yan still finds one manager agent spawning isolated sub-agents most practical, but sees agents pushing back on users as a sign multi-agent work may become viable.
- **Slop control.** Murray warns a code base "regresses to your worst engineer" and uses lint rules (for example banning getattr) plus scheduled clean-ups. Yan reports unreviewed vibe-coded products became unworkable after about two weeks.
- **Use cases and cost.** Murray sees SRE first response, PMs fixing bugs from Slack and customer support as the main uses, with spend of $1,000-5,000 per engineer.

## Quotes

> "the meme that I have is that your code base regresses to your worst engineer" — Cole Murray

> "when you sell an agent as a company, you sell agent plus agent infra." — Walden Yan
