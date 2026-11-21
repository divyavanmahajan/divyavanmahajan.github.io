---
title: Dealing with increasingly complicated agents
description: >-
  Donato Capitella argues that prompt injection cannot be solved inside the
  model, so agent security must come from system design: deterministic access
  control, data-flow policies and guardrails used as detection signals.
pubDate: '2025-10-16'
show: practical-ai
episode: 332
url: 'https://share.transistor.fm/s/e60866e6'
durationMin: 55
hosts:
  - Chris Benson
  - Daniel Whitenack
guests:
  - Donato Capitella
tags:
  - ai-security
  - prompt-injection
  - agents
  - penetration-testing
  - red-teaming
draft: false
---
## Thesis

Donato Capitella, principal security consultant at Reversec, argues that agentic systems turn every tool given to an LLM into a tool available to anyone who can influence its input. Because prompt injection and jailbreaking remain unsolved, he says security has to be enforced outside the model through design patterns and deterministic controls, not through LLM red teaming alone.

## Key points

- **Agentic is now the norm.** Capitella says a year ago clients mostly built RAG chatbots; now most systems he tests are agentic, such as customer-support email workflows. Many enterprises use their own frameworks, often in C#, because MCP is too new for their development cycles.
- **Internal APIs become exposed.** Turning internal APIs into tools means an attacker who sends a support email can make the LLM call them with chosen parameters. He wants a deterministic, non-LLM check of identity and authorisation before production.
- **Mixed context is the risk.** In one test, RAG over all support tickets let an attacker plant an email full of keywords and addresses that later steered replies to other users into phishing. He cites a Copilot exfiltration bug found by Aim Labs that bypassed markdown-image filtering.
- **Jailbreaks resemble password guessing.** The question is how much effort an attacker needs, not whether it is possible. Guardrails should act as a feedback signal that suspends a user after, say, three triggers, like an account lockout.
- **Design patterns over alignment.** He highlights the paper "Design Patterns to Secure LLM Agents Against Prompt Injection", which sets out six patterns. Action Selector is the most secure; code-then-execute fixes a plan before untrusted data enters and enforces per-tool policies via data-flow analysis, which he compares to SELinux.
- **Spikee for applications.** Reversec's open-source Spikee builds custom datasets from seeds, talks to targets via adapters (Playwright, AWS) and adds evasion attacks, because LLM applications are not inference endpoints.

## Quotes

> "any tool exposed to an LLM becomes a tool exposed to any person that can control any part of the input into an LLM." — Donato Capitella

> "you don't solve the problem of LLM agent security inside the LLM. This is not an alignment problem." — Donato Capitella
