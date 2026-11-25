---
title: AI Skills with Matt Pocock
description: >-
  Matt Pocock argues that agents now handle tactical programming, so engineers
  should own the strategic layer, encoding classic software fundamentals into
  small, reusable skills that steer agents.
pubDate: '2026-09-17'
show: pragmatic-engineer
url: 'https://newsletter.pragmaticengineer.com/p/ai-skills-with-matt-pocock'
youtube: 'https://www.youtube.com/watch?v=4DhcSPkEbwI'
durationMin: 96
hosts:
  - Gergely Orosz
guests:
  - Matt Pocock
tags:
  - coding-agents
  - agent-skills
  - software-fundamentals
  - context-engineering
  - developer-education
draft: false
---
## Thesis

Matt Pocock, the former voice coach behind Total TypeScript and the "grill me" skill, argues that AI has absorbed the tactical work of programming and left engineers with the strategic work: aligning with the agent, shaping the codebase it operates in, and splitting work so it stays within a manageable context. Old software engineering books, he says, turn out to be the best guide to doing that well.

## Key points

- **From teaching to tech.** Pocock taught himself JavaScript while working as a voice coach, took a three-days-a-week contract at Vercel while building Total TypeScript, and left once the course took off. He says AI has cut demand for syntax-level material, while wisdom has become no easier to learn.
- **Grill me and skills.** The grill-me skill, inspired by Anthropic's Thariq, simply tells the agent to interview the user relentlessly. Orosz says it asked him 35 questions about one API endpoint. Pocock says his skills repo now has about 230,000 stars.
- **Staying in the smart zone.** Citing Dex Horthy, Pocock keeps sessions under roughly 150k tokens: grill, turn the result into a spec, break the spec into one ticket per session, and let an implementer loop run during the "night shift". The Wayfinder skill extends this with a map of tickets for larger plans.
- **Leading words.** Terms like "tracer bullet" and "vertical slices" from The Pragmatic Programmer, "deep modules" from John Ousterhout and ubiquitous language from Eric Evans' DDD change agent behaviour, and the agent repeats them in its reasoning.
- **Cloud over local.** Pocock is moving off his local setup and runs agents on a Hetzner box he chats with via Discord, saying this enables collaboration and scheduled work.
- **TDD and tech debt.** He thinks TDD addresses short human working memory, which agents do not have, so he asks agents for proof that a change works. Automated review agents help counter the tech debt agents produce.

## Quotes

> "AI has largely eaten tactical programming in my view, and it's up to us to handle the strategic." — Matt Pocock

> "An agent can't do that. It starts fresh every single session. And so you need to optimize your code base for that person." — Matt Pocock
