---
title: Code security for software engineers
description: >-
  Johannes Dahse argues that developers, not security teams, should own code
  security, backed by low-noise automated tools, because AI makes verifying code
  the new bottleneck.
pubDate: '2025-11-26'
show: pragmatic-engineer
url: 'https://newsletter.pragmaticengineer.com/p/code-security'
youtube: 'https://www.youtube.com/watch?v=urVf2oNqtXU'
durationMin: 68
hosts:
  - Gergely Orosz
guests:
  - Johannes Dahse
tags:
  - code-security
  - ai-generated-code
  - software-supply-chain
  - static-analysis
  - prompt-injection
draft: false
---
## Thesis

Johannes Dahse, VP of Code Security at Sonar, tells Gergely Orosz that every vulnerability shows up in code, so the developers who write and fix that code should own code security. Security teams should take on the wider application security work. He argues that automated, developer-friendly tools matter more than ever, because AI coding assistants make writing code cheap and verifying it the bottleneck.

## Key points

- **Ownership.** Dahse says security used to be a compliance audit before quarterly releases. With releases several times a day, review has to be part of development. He compares noisy security tools to a passenger yelling at every possible risk while you drive.
- **Basics still dominate.** Sonar's State of Code Security report looked at 8 billion lines from 1 million developers in 40,000 organizations. It found about one issue per 1,000 lines, led by log injection, cross-site scripting, SQL injection and hard-coded passwords. Insecure regular expressions were a surprise entry.
- **Dependencies.** Dahse recommends software composition analysis to check manifests against known CVEs, such as a Log4j version exposed to Log4Shell. He says there are over 200,000 CVEs and about 50 new ones a day, too many to follow by hand.
- **Tool layers.** He describes IDE linting, SAST that models the code as a graph to trace user input into sensitive operations, secret detection, and infrastructure-as-code scanning. DAST and fuzzing suit security teams better because their feedback loop is longer.
- **AI risks.** Dahse argues that AI security reviews are non-deterministic, and that using AI to review AI-written code is like letting students grade their own homework. Sonar found that GPT-5's reasoning mode produced fewer security issues but more verbose code. He also points to slopsquatting on invented package names, prompt injection in LLM backends, and malicious Jira tickets steering coding agents.
- **No perfect security.** He calls "security as a product" the industry's biggest fallacy. His advice is to automate the basics, run an initial assessment, avoid adding new issues, and reassess each quarter.

## Quotes

> "I think prompt injection is kind of like the new code injection, right? The human language is the new code." — Johannes Dahse

> "if you then use AI to review AI generated code, that's a bit, you know, having students grade their own homework" — Johannes Dahse
