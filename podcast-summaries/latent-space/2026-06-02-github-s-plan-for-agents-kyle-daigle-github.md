---
title: "GitHub's plan for Agents — Kyle Daigle, GitHub"
date: 2026-06-02
show: latent-space
url: "https://lspace.beehiiv.com/podcast/s/latent_space_the_ai_engineer_podcast/github_s_plan_for_agents_kyle_daigle_github"
duration_min: 83
hosts: ["Alessio Fanelli", "swyx"]
guests: ["Kyle Daigle"]
description: "GitHub COO Kyle Daigle explains how agent-driven growth is breaking GitHub in new ways, why trust in code review is a social problem, and why context, not code generation, is the next frontier for Copilot."
tags: ["github", "coding-agents", "open-source", "scaling", "developer-tools", "enterprise-ai"]
source_transcript: "latent-space/episodes/2026/06/2026-06-02-github-s-plan-for-agents-kyle-daigle-github.md"
draft: false
---

## Thesis

Kyle Daigle, at GitHub for 13 years and now its COO as well as CMO for developers at Microsoft, tells swyx that AI agents have pushed GitHub's growth past what its architecture assumed, and he owns the resulting outages. His broader argument is that the next leap is not better code generation but agents that carry a team's full context: specs, meetings, chat and taste.

## Key points

- **AI for leaders who used to code.** Daigle's commit count is back up. He builds micro skills and workflows that look backwards over a week of PRs, Obsidian notes, Teams transcripts (via the WorkIQ MCP server) and Slack. He built a revenue-planning deck with AI, styled to look deliberately un-AI, and nobody noticed. GitHub still uses Slack for chat.
- **Small skills over mega skills.** He says large, all-in-one skills are brittle; GitHub has moved to atomic skills that do one thing well, varied per profession.
- **Scale and outages.** swyx cites 1 billion commits in 2025 versus 275 million a week by April. Daigle says growth breaks systems in new ways: more agent PRs mean more Actions builds and CPUs, permissions still sit partly in an old database called MySQL1, monorepos are back, and pushes and PRs are much larger. Vertical and horizontal scaling no longer suffice, so decade-old services are being rewritten; he expects fewer outages over the next three months.
- **Trust is social.** Vouch systems, prompt requests and stars are all ways to codify trust, he argues. Passive signals like stars are gameable; sponsorship is a costlier signal. GitHub prefers to let maintainers choose heuristics rather than impose one process. It now counts over 200 million developers.
- **Copilot's detour.** Daigle says Copilot spent its second phase on fine-tuning just as better models arrived. It now runs one SDK and harness across the coding agent, CLI, desktop app and cloud agents.
- **OpenClaw at work.** Microsoft has a CVP for OpenClaw because, Daigle says, agents need OS-level sandboxing to run safely on work machines.

## Quotes

> "we're ending the era of these like massive, beautiful, perfect skills that are just like not any of those things" — Kyle Daigle

> "ultimately we're trying to codify trust." — Kyle Daigle
