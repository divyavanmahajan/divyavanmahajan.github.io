---
title: Brex’s AI Hail Mary — With CTO James Reggio
description: >-
  Brex CTO James Reggio explains a three-pillar AI strategy, a startup-style AI
  team inside the company, and why simple SOP-driven agents beat sophisticated
  techniques in regulated operations.
pubDate: '2026-01-17'
show: latent-space
url: >-
  https://lspace.beehiiv.com/podcast/s/latent_space_the_ai_engineer_podcast/brex_s_ai_hail_mary_with_cto_james_reggio
durationMin: 73
hosts:
  - Alessio Fanelli
  - swyx
guests:
  - James Reggio
tags:
  - enterprise-ai
  - fintech
  - multi-agent-systems
  - ai-adoption
  - evals
draft: false
---
## Thesis

James Reggio, CTO of Brex, describes how the corporate card and spend platform organised its AI work into corporate, operational and product pillars on a shared internal platform. He argues that operational AI in a regulated business works best when well-defined SOPs are translated into prompts and evals, and that the product's agent layer needs a multi-agent "network" in which specialist agents converse with each other.

## Key points

- **Three pillars.** Corporate AI (buying tools for every function), operational AI (lowering the cost of running a financial institution: KYC, underwriting, fraud, disputes) and product AI (features customers can cite as their own AI strategy). Reggio calls operational AI the most immediately impactful.
- **A startup inside Brex.** About 10 people in pods pairing an AI-native young engineer, a staff engineer who knows the codebase and a product-minded person, building in TypeScript on Mastra. Engineering stays at about 300 people while Reggio says the business has grown significantly.
- **Simple beats clever.** A reinforcement-learning approach to credit decisions underperformed a web research agent. Brex targets touchless onboarding decisions within 60 seconds for 80% of startup and commercial applicants, with ops staff refining prompts and running evals in Retool.
- **Agent networks.** The Brex assistant for every employee coordinates sub-agents (policy, travel, reimbursements) via multi-turn conversations rather than single tool calls. An audit agent flags possible policy violations aggressively, a review agent decides which become cases, and the employee's assistant collects justification.
- **Let employees choose tools.** Instead of picking winners, Brex buys seats across ChatGPT, Claude, Gemini, Cursor, Windsurf and Claude Code, and uses usage data at renewal. Greptile handles agentic code review.
- **Culture and fluency.** All engineers, managers included, retook a new agentic-coding interview; operations staff follow a user-advocate-builder-native fluency framework. Reggio says the next problem is slop and fading code understanding, not adoption.

## Quotes

> "the half-life of code has declined so significantly with agentic coding." — James Reggio

> "I view agentic development as being something that amplifies all the, all the good just as much as it amplifies all the bad" — James Reggio
