---
title: >-
  ⚡ Inside GitHub’s AI Revolution: Jared Palmer Reveals Agent HQ & The Future of
  Coding Agents
description: >-
  Jared Palmer, who built v0 at Vercel, explains why GitHub's Agent HQ hosts
  many coding agents and argues the next step for coding agents is reliability.
pubDate: '2025-11-10'
show: latent-space
url: >-
  https://lspace.beehiiv.com/podcast/s/latent_space_the_ai_engineer_podcast/inside_github_s_ai_revolution_jared_palmer_reveals_agent_hq_the_future_of_coding_agents
durationMin: 36
hosts:
  - Alessio Fanelli
  - swyx
guests:
  - Jared Palmer
tags:
  - coding-agents
  - github
  - developer-tools
  - agent-hq
  - reliability
draft: false
---
## Thesis

Jared Palmer, SVP at GitHub and VP of CoreAI at Microsoft, went from building one coding agent (v0 at Vercel) to running Agent HQ, a home for many agents. Speaking to the hosts on his thirteenth day in the job, he argues that GitHub should offer model and agent choice while adding AI to existing workflows, and that the hard work now is making agents reliable rather than adding new modes.

## Key points

- **From playground to v0.** Palmer recounts shipping an AI playground after Vercel CEO Guillermo flagged nat.dev, which led to the AI SDK and a ChatGPT clone built with shadcn. v0 launched in September 2023 as a "Midjourney for React", took about nine months to reach $1M ARR, and after a rewrite to chat it added roughly another million MRR every fourteen days.
- **Focus as a constraint.** He says restricting v0 to Next.js and shadcn let the team focus, and that composite branded models allowed mixing models per subsystem. At GitHub the stance is model choice: Copilot and Copilot CLI sit alongside Claude Code, Codex and Cognition in Agent HQ.
- **Workflow over features.** The CoreAI group puts Visual Studio, VS Code, GitHub and parts of Azure together. Palmer wants AI added at touch points such as merge conflicts and failing Actions, plus custom agents that can use MCP.
- **Reliability is the frontier.** Palmer says moving from 90% to 99% success gets steeper, and most teams overrate their product's quality. At Vercel he tracked error-free sessions in three-hourly roll-ups and argued that agents also need reliable inference providers.
- **Sandboxes and Dev Containers.** The hosts call repo setup the top pain point for coding agents; Palmer says general-purpose environment detection is hard and Microsoft is still weighing runtime options.
- **Homepage and stacked diffs.** GitHub launched a redesigned homepage after a tweet calling it useless drew 1.3 million views. Stacked diffs, a workflow from Facebook, are GitHub's top feature request; Palmer says internal attempts since 2020 were judged too risky, and it is now being explored.

## Quotes

> "I think that Agent HQ and GitHub itself need to like co-evolve" — Jared Palmer

> "there's a big difference between ninety-eight percent and ninety-nine percent correct, uh, and that's, like, noticeable." — Jared Palmer
