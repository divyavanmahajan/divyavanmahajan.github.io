---
title: "AI Automation: Making AI Work for You - now with GPT-4o Fine-Tuning!"
date: 2024-08-21
show: cognitive-revolution
url: "https://www.cognitiverevolution.ai/ai-automation-making-ai-work-for-you-now-with-gpt-4o-fine-tuning/"
youtube: "https://www.youtube.com/watch?v=mPGkObr6SeA"
hosts: ["Nathan Labenz"]
guests: []
description: "Nathan Labenz's three-step automation method: pick task-sized work that truly needs intelligence, capture gold standard examples with reasoning, then optimize through prompting, retrieval and fine-tuning."
tags: ["ai-automation", "fine-tuning", "prompt-engineering", "enterprise-ai", "rag"]
source_transcript: "cognitive-revolution/episodes/2024/08/2024-08-21-ai-automation-making-ai-work-for-you-now-with-gpt-4o-fine-tuning.md"
draft: false
---

## Thesis

Nathan Labenz presents the talk he gave at the ADAPTA Summit in Sao Paulo, released on the day OpenAI launched GPT-4o fine-tuning. He argues that most routine business tasks can be automated today if teams follow three steps: choose the right work, document how and why it is done, and then optimize AI performance. The hard part is mostly social, not technical: turning implicit know-how into explicit examples with reasoning.

## Key points

- **Use AI only where intelligence is needed.** Labenz defines intelligence as transforming inputs to outputs without precise instructions. Hand-coded rules reached 14% accuracy on MNIST digits in his test, while small neural nets reach 99.7%. Anything deterministic code can do should stay in code.
- **Pick task-sized targets.** Good targets are slow, expensive, repetitive, low risk, give fast feedback and are no fun for people. He points to Klarna's assistant, which handled 2.3 million conversations in its first month, doing the work of 700 people.
- **Gold standard examples are the checkpoint.** Interview workers ("let's break it down step by step"), map where judgment is needed, and collect inputs, outputs and the reasoning between them. He recommends 10 examples to start.
- **Prompt, retrieve, then fine-tune.** His prompt blueprint is role, task, instructions, format with "analysis before answer always", then examples. Fine-tuning GPT-4o mini costs $3 per million training tokens. Plan for rounds of 10, 100 and 1,000 examples, plus patches for edge cases.
- **Compare to humans, not perfection.** Each extra nine of accuracy costs about 10 times more effort. He advises maximizing performance before cost, preferring no-code tools such as n8n and Zapier, and banking wins before the next model makes the work obsolete.
- **Results from his own work.** At Athena, an AI pipeline turns onboarding call recordings into client briefs for under a dollar, replacing four hours and a $100 budget. At Waymark, users create 10 times more content.

## Quotes

> "I cannot emphasize enough that if you can't get 10 really high-quality examples with reasoning, that you are not going to be able to automate this work successfully." — Nathan Labenz

> "They almost never fail for being too expensive or being too slow." — Nathan Labenz
