---
title: The Ultimate Guide to Prompting
description: >-
  Sander Schulhoff, lead author of The Prompt Report, says a few techniques like
  few-shot and chain of thought do most of the work, while role and emotion
  prompts are overrated.
pubDate: '2024-09-20'
show: latent-space
url: >-
  https://lspace.beehiiv.com/podcast/s/latent_space_the_ai_engineer_podcast/the_ultimate_guide_to_prompting
durationMin: 69
hosts:
  - Alessio Fanelli
  - swyx
guests:
  - Sander Schulhoff
tags:
  - prompt-engineering
  - llm-evaluation
  - prompt-injection
  - dspy
  - ai-engineering
draft: false
---
## Thesis

Sander Schulhoff, creator of Learn Prompting and lead author of The Prompt Report, argues that the prompting literature is bloated: many published techniques are small variations on chain of thought, and popular tricks such as role and emotion prompting do little for accuracy on modern models. His working toolbox is few-shot examples, chain of thought and good information about the problem, with automated optimisers like DSPy increasingly beating hand-tuning. Hosts Alessio Fanelli and swyx push on practical issues such as cost and exemplar leakage.

## Key points

- **The Prompt Report.** Schulhoff led a 30-person team from OpenAI, Google, Microsoft, Princeton, Stanford and Maryland over about nine months, using the PRISMA systematic review process (with AI-assisted paper screening) to catalogue 58 text-based techniques, grouped by problem-solving strategy.
- **Role prompting does not help accuracy.** In a mini study on a couple of thousand MMLU questions, an "idiot" role prompt outperformed a "genius" Harvard math professor prompt; Schulhoff says roles are still useful for styling text.
- **Few-shot design matters.** Exemplar ordering alone has moved accuracy from 0% to 90% on some tasks; he recommends randomised order and common formats like "Q:" and "A:", and notes models learn structure more than labels.
- **Chain of thought should be gone, but isn't.** He expected models to reason by default; at scale, he still sees GPT-4 skip reasoning in some outputs, so he keeps the instruction.
- **Cost and automation.** swyx describes drafting summaries ten times with GPT-4o mini (15 cents per million input tokens) and judging with GPT-4o ($5). Schulhoff changed his mind on automated prompt engineering after DSPy beat his manual effort, though it needs ground-truth labels.
- **HackaPrompt and security.** The competition collected 600,000 malicious prompts and won a best paper award at EMNLP. Schulhoff uses "prompt hacking" as a catch-all because "prompt injection" and "jailbreaking" are so conflated, and is fundraising for HackaPrompt 2.0 focused on agentic harms.

## Quotes

> "The idiot prompt outperformed the genius prompt." — Sander Schulhoff

> "I spent 20 hours prompt engineering for a task and DSPy beat me in 10 minutes and that's when I changed my mind." — Sander Schulhoff
