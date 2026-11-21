---
title: >-
  Bolt.new, Flow Engineering for Code Agents, and >$8m ARR in 2 months as a
  Claude Wrapper
description: >-
  Eric Simons credits Bolt's growth to an in-browser OS plus frontier models
  with full app context; Itamar Friedman argues enterprise code agents need task
  decomposition and deployment flexibility.
pubDate: '2024-12-02'
show: latent-space
url: >-
  https://lspace.beehiiv.com/podcast/s/latent_space_the_ai_engineer_podcast/bolt_new_flow_engineering_for_code_agents_and_8m_arr_in_2_months_as_a_claude_wrapper
durationMin: 99
hosts:
  - Alessio Fanelli
  - swyx
guests:
  - Eric Simons
  - Itamar Friedman
tags:
  - code-agents
  - ai-codegen
  - webcontainer
  - enterprise-ai
  - pricing
  - flow-engineering
draft: false
---
## Thesis

StackBlitz CEO Eric Simons argues that Bolt.new took off because years of work on WebContainer, an operating system that runs in a browser tab, met models finally good enough to write working apps, opening software building to people who do not code. Guest co-host Itamar Friedman of Qodo (formerly CodiumAI) contrasts this "highway" market with the "city" of enterprise software, where testing, code review, task decomposition and on-prem deployment dominate.

## Key points

- **Shelved, then relaunched.** Simons says an early-2024 attempt failed because models were not good enough; Bolt launched on October 1, reached about $4M ARR in four weeks, and was adding up to half a million of ARR per day by week six.
- **Two user groups.** Developers use Bolt to go from zero to one and then export to GitHub or Cursor; non-developers stay in Bolt, including his 71-year-old mother and a PM in Thailand who built ViralHooks.ai after a $5,000, three-month Upwork quote.
- **Owning the runtime.** Because StackBlitz wrote the OS from scratch (about a megabyte), Bolt can instrument errors at process and runtime level and offer a "fix it" loop. Deployment uses Netlify's anonymous upload, which swyx says many agent startups rely on.
- **Context costs money.** Simons argues Copilot-style flat pricing discourages sending full context. Bolt moved from $9 to tiers up to $200, plus usage billing worth another 20-30% of revenue, and says it takes almost no margin on inference.
- **Enterprise code agents.** Friedman says Qodo supports 96 deployment combinations, lets tech leads tag repos and best practices for indexing, and cites 38-50% enterprise retention for GitHub Copilot. He argues breaking problems into small steps (flow engineering, as in AlphaCodium) makes prompts less model-specific.
- **What's next.** Power users want a database, auth and payments; Simons plans built-in Supabase/Firebase provisioning and hosting, and stays focused on JavaScript web apps rather than Replit-style general VMs.

## Quotes

> "Like, the more context you give it, the more it can do, and that's the magic of, of what we're doing with Bolt" — Eric Simons

> "But when you take a, like a big, a problem and break it into small tasks, we can talk how we do that, then the prompt matters less." — Itamar Friedman
