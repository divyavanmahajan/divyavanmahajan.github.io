---
title: 'Vibe-Coding an Attention Firewall, w/ Steve Newman, creator of The Curve'
description: >-
  Steve Newman shows how cheap vibe-coded personal tools, built around his
  attention rather than his agents' utilisation, let one person reshape their
  digital life.
pubDate: '2026-04-19'
show: cognitive-revolution
url: >-
  https://www.cognitiverevolution.ai/vibe-coding-an-attention-firewall-w-steve-newman-creator-of-the-curve/
youtube: 'https://www.youtube.com/watch?v=FYpTTChGhSk'
durationMin: 130
hosts:
  - Nathan Labenz
guests:
  - Steve Newman
tags:
  - vibe-coding
  - claude-code
  - personal-productivity
  - ai-agents
  - software-engineering
draft: false
---
## Thesis

Steve Newman, who created Writely (later Google Docs) and now runs the Golden Gate Institute for AI, argues that Claude Code makes bespoke tools so cheap to build that people should adapt software to their workflow rather than the reverse. He builds around his own time and focus, not around keeping agents busy. On the bigger picture, he holds that current models are impressive but still far from AI that matches human experts across every field.

## Key points

- **Attention firewall.** Newman's "Radar" pulls in Gmail, Slack, Signal, WhatsApp and SMS, asks an LLM whether each message is urgent using a one-page rubric, and shows only the timely ones on a second monitor beside a filtered calendar. A reader app pre-summarises the roughly 50 newsletters and posts he gets each day.
- **About 15 small projects.** Each app has its own GitHub repo and Cloudflare backend, chosen after having Gemini, ChatGPT and Claude critique each other's stack advice. Claude runs with permissions skipped inside a Docker container. Integrations were the hardest part: WhatsApp messages are read from the desktop app's unencrypted local SQLite database.
- **Log everything.** His main tip is to send every backend, frontend and Android log to one place, then tell Claude to debug from the evidence, using the Systematic Debugging skill from Jesse Vincent's Superpowers plugin. He pushes straight to production but keeps the originals in Gmail and the other services, so a bug costs only the interface.
- **Anti-tokenmaxxing.** Newman stopped trying to keep agents constantly fed. He runs up to five in parallel, uses a colour-coded status dashboard driven by Claude Code hooks, and fits his coding within the $200 Claude plan. On walks he dictates brain dumps by email and later has an LLM turn them into prompts.
- **Bigger questions.** He thinks Jevons Paradox may keep software jobs growing, while SaaS vendors fight agents over API access. His open questions are how much of AI R&D is more than coding, whether skill at gradable tasks spreads to fuzzier ones, and how long robotics will take, given that Waymo took decades. He now thinks AI's power demand is worse for the climate in the short run than he once expected.

## Quotes

> "wait a minute, the agent's not important. I'm important." — Steve Newman

> "the models are amazing, we're still far from AGI." — Steve Newman
