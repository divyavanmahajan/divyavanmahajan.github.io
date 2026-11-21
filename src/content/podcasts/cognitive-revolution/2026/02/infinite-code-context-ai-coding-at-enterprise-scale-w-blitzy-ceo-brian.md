---
title: >-
  Infinite Code Context: AI Coding at Enterprise Scale w/ Blitzy CEO Brian
  Elliott & CTO Sid Pardeshi
description: >-
  Blitzy's founders argue that orchestration, not raw model capability, delivers
  AGI-like effects: a dynamic multi-model agent system now completes over 80% of
  large enterprise software projects autonomously.
pubDate: '2026-02-04'
show: cognitive-revolution
url: >-
  https://www.cognitiverevolution.ai/infinite-code-context-ai-coding-at-enterprise-scale-w-blitzy-ceo-brian-elliott-cto-sid-pardeshi/
youtube: 'https://www.youtube.com/watch?v=PfN3HvOsTl4'
durationMin: 117
hosts:
  - Nathan Labenz
guests:
  - Brian Elliott
  - Sid Pardeshi
tags:
  - ai-coding
  - context-engineering
  - agents
  - enterprise-software
  - llm-evaluation
draft: false
---
## Thesis

Blitzy CEO Brian Elliott and CTO Sid Pardeshi tell Nathan Labenz, in a sponsored episode, that single LLMs are limited but a well-built system around them can do most enterprise development work. Their platform maps codebases of up to 100 million lines, then generates agents dynamically to plan, write and test code. It returns a pull request plus a report on what humans still need to finish.

## Key points

- **Relational context, not just semantic search.** Elliott argues context engineering is domain-specific. Blitzy spends days of compute mapping each codebase's relationships, builds and runs the application, and uses the map and embeddings only to locate the real source code.
- **Dynamic harness.** Agents are created just in time, with prompts written by other agents. Evals are full projects, such as a custom Apache Spark build of about 1.3 million lines, judged with "taste" from LangSmith traces.
- **Model zoo.** Blitzy uses OpenAI, Google and Anthropic models. As of January, Elliott rates Anthropic best for first-pass code, OpenAI for structured output and review, and Gemini for long-horizon task tracking. A reviewing model must come from a different family. The team is more bullish on system-level memory than on fine-tuning.
- **Pricing and the last 20%.** Pricing includes 20 cents per line, and Elliott says Blitzy will raise prices rather than limit compute. The leftover work is mostly untested edge cases, conflicting tests or contradictory specs, which the report breaks down with estimated hours.
- **Strange model behaviour.** Pardeshi describes "context anxiety": models that give up or write tests that just return true. He puts the effective context window below 100k tokens and says reasoning budgets have replaced temperature as the main control. Blitzy reported one such issue to Anthropic, which fixed it in Opus 4.5.
- **Security and jobs.** Pardeshi relies on defensive tests and vulnerability scanners like Snyk before each PR. He expects AI to favour senior engineers now but AI-fluent juniors later. Blitzy's cash salaries range from $100k to $300k.

## Quotes

> "We might be the most bearish on LLM capabilities as a pure standalone single LLM asset and the most bullish on the orchestration of those in long running complex systems." — Brian Elliott

> "Like, what time constraints? I never told you you have to finish in an hour or 10 seconds." — Sid Pardeshi
