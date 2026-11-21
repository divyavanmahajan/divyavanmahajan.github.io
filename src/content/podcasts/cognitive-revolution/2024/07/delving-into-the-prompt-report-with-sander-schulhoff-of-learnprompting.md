---
title: 'Delving into The Prompt Report, with Sander Schulhoff of LearnPrompting.org'
description: >-
  Sander Schulhoff walks through The Prompt Report, a 78-page survey of
  prompting, with practical few-shot rules and evidence that automated prompt
  optimisation can beat human experts.
pubDate: '2024-07-09'
show: cognitive-revolution
url: >-
  https://www.cognitiverevolution.ai/delving-into-the-prompt-report-with-sander-schulhoff-of-learnprompting-org/
youtube: 'https://www.youtube.com/watch?v=tv8kqWuEA9Q'
durationMin: 76
hosts:
  - Nathan Labenz
guests:
  - Sander Schulhoff
tags:
  - prompt-engineering
  - few-shot-prompting
  - prompt-injection
  - dspy
  - ai-agents
draft: false
---
## Thesis

Sander Schulhoff, creator of LearnPrompting.org, presents The Prompt Report as a map of a literature that grew faster than anyone could track. His most practical message is that few-shot exemplars matter more than most users realise, and that design choices around them can swing accuracy widely. He also concedes that an automated optimiser, DSPy, beat a prompt he had spent 20 hours on.

## Key points

- **How the survey was built.** The team ran 44 keywords across arXiv, Semantic Scholar and the ACL Anthology, had humans label about 1,000 papers as in or out, then used those labels to prompt a model to screen the rest. Schulhoff planned 3 to 4 months; it took nine.
- **Six few-shot rules.** Use as many exemplars as cost allows, order them randomly, balance labels (or match a known skewed distribution), check labels are correct, use a common format such as Q: and A:, and retrieve exemplars similar to the test input. Exemplar order alone can move accuracy from 0% to 90%.
- **Definitions matter.** Few-shot prompting and in-context learning are not the same thing in the GPT-3 paper. Following Simon Willison, he treats prompt injection as involving developer instructions and jailbreaking as user versus model only.
- **Security outlook.** Schulhoff calls defence "a losing game" and says Haize Labs could jailbreak for an arbitrary intent within seconds. He expects the fix to come from model developers through training or architecture, not add-on classifiers.
- **Open-ended tasks and agents.** For generation without a right answer he suggests critique-and-revise pipelines or multi-agent roles, but is unconvinced they are mature. He agrees agents "don't quite work" and favours simple ReAct-style tool use.
- **Automated prompting and team lessons.** DSPy beat his hand-built classification prompt using under 20 exemplars. His management rule was "trust no one, not even yourself", enforced with tests and CI on every pull request.

## Quotes

> "depending on how you order the exemplars in the prompt, you can be down to 0% accuracy, up to 90% accuracy, really all over the place." — Sander Schulhoff

> "I definitely didn't think I could be defeated by an automated prompt engineering system." — Sander Schulhoff
