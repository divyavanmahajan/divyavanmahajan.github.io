---
title: 'Windsurf: The Enterprise AI IDE - with Varun and Anshul of Codeium AI'
description: >-
  Codeium's founders explain why they forked VS Code into Windsurf, how they
  evaluate agentic coding, and why enterprise focus and owned infrastructure
  beat chasing individual-developer revenue.
pubDate: '2024-12-13'
show: latent-space
url: >-
  https://lspace.beehiiv.com/podcast/s/latent_space_the_ai_engineer_podcast/windsurf_the_enterprise_ai_ide_-_with_varun_and_anshul_of_codeium_ai
durationMin: 67
hosts:
  - Alessio Fanelli
  - swyx
guests:
  - Varun
  - Anshul
tags:
  - ai-coding
  - developer-tools
  - ai-agents
  - enterprise-ai
  - evals
draft: false
---
## Thesis

Varun Mohan and Anshul of Codeium argue that agentic coding only works when the AI can see the developer's whole trajectory in the editor, which is why they built their own IDE, Windsurf, rather than staying a VS Code extension. They describe a company that builds its own infrastructure, measures progress with evals made from real commits, and treats enterprises, not individual developers, as the durable business.

## Key points

- **Why fork VS Code.** The guests say the extension APIs capped the experience. Codeium had to render PNGs just to show Super Complete refactor suggestions. Windsurf's agent, Cascade, combines retrieval, tools such as terminal execution, and signals about what the developer has been doing, like which files they opened.
- **Evals from real commits.** Varun describes stripping open-source commits back to an incomplete state with no commit message, then testing whether the system can plan, retrieve and make the tests pass. Anshul adds that retrieval is scored at 50 results, not as a needle-in-a-haystack problem, and dismisses popular coding benchmarks as unrepresentative.
- **Own models where it matters.** Autocomplete, fill-in-the-middle and LLM-based retrieval run on Codeium's models. High-level planning uses third-party models such as Claude 3.5 Sonnet and GPT-4o, and Anshul admits his 2022 bet on first-party models was wrong.
- **Toward full agency.** Varun says limited human interaction is the goal, but blockers remain: approving every command, the risk of running arbitrary binaries locally, speed, and the need for checkpoints that let agents roll back.
- **Enterprise economics.** The guests cite over 800,000 developers, customers such as JPMorgan Chase and Dell, and going from zero to $10 million ARR in under a year. Varun says individual developers churn easily and are sensitive to price, so the $10 pro plan exists mainly to cover costs. They add that over 80% of developers use Windows.
- **Build versus buy.** Varun argues that buying away a core competency such as model inference means losing it for good. Anshul says founders should run sales themselves before hiring a VP of sales, and that the company also uses deployed engineers.

## Quotes

> "We believe that developers will never completely pose the problem statement, right?" — Varun Mohan

> "No actual professional work looks like SWE-bench." — Anshul
