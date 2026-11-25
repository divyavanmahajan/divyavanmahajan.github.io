---
title: Building Codex with Tibo Sottiaux
description: >-
  Tibo Sottiaux explains why Codex was built in Rust, open-sourced and opened to
  other models, and how agents are automating code review and maintenance inside
  OpenAI.
pubDate: '2026-09-09'
show: pragmatic-engineer
url: 'https://newsletter.pragmaticengineer.com/p/building-codex-with-tibo-sottiaux'
youtube: 'https://www.youtube.com/watch?v=sLSTM9znQNs'
durationMin: 73
hosts:
  - Gergely Orosz
guests:
  - Tibo Sottiaux
tags:
  - coding-agents
  - openai
  - open-source
  - code-review
  - software-architecture
draft: false
---
## Thesis

Tibo Sottiaux, who helped create Codex and now leads the broader Codex team at OpenAI, describes a harness designed to give the model temporary "crutches" that fall away as models improve. He argues that agents are making correctness review, maintenance and even re-architecture cheap, so the human work moves to intent, abstractions and caring about users.

## Key points

- **Background.** Sottiaux recalls a Google Ads project cancelled after two years with only hundreds of users, a lesson in questioning impact. At DeepMind he worked on an internal LLM chat tool that spread widely but never launched. He joined OpenAI after learning only about 20 people worked on ChatGPT.
- **Rust and open source.** Codex was built in Rust for robustness, security and efficiency, and to keep a clean boundary between the agent and the product. Open source helps onboarding and community energy, he says, but brings a flood of low-quality contributions and competitors sometimes ship copied features first.
- **Other models.** Supporting other providers felt natural to him: a fork would only need about 10 lines changed, and he wants to win users on merit rather than lock-in.
- **Harness versus model.** The harness supplies guardrails, steerability and the developer message; each new model needs less of it. Sottiaux says newer models no longer need the /goal command to work on a task for long periods.
- **Inside OpenAI.** New joiners are told "have you asked Codex?", since it can see Slack, documents and code. AI security review is mandatory on OpenAI pull requests and blocks merges, and he expects correctness review to be fully automated, with discussion of intent moving earlier.
- **The merge.** ChatGPT Work runs the full Codex harness on a cloud computer, efficient enough to include in the Plus plan; Codex also documented the project's debates as a "journalist".

## Quotes

> "So the harness, in a sense, is always a little bit ahead of the model." — Tibo Sottiaux

> "If you're doing something and you're building this 10,000 lines of code crutch to work around the model flaws, you're probably doing the wrong thing." — Tibo Sottiaux
