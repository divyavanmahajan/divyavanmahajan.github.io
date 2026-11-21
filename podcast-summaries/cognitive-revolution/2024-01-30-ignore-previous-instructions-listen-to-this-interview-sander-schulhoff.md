---
title: "Ignore Previous Instructions & Listen to This Interview | Sander Schulhoff, CEO, LearnPrompting.org"
date: 2024-01-30
show: cognitive-revolution
url: "https://www.cognitiverevolution.ai/ignore-previous-instructions-listen-to-this-interview-sander-schulhoff-ceo-learnprompting-org/"
youtube: "https://www.youtube.com/watch?v=W-WyN4Gis_Y"
hosts: ["Nathan Labenz"]
guests: ["Sander Schulhoff"]
description: "Prompt engineering still matters for capable models, but the HackAPrompt competition shows instructions in a prompt cannot reliably stop users from hijacking an LLM application."
tags: ["prompt-engineering", "prompt-injection", "llm-security", "agents", "red-teaming"]
source_transcript: "cognitive-revolution/episodes/2024/01/2024-01-30-ignore-previous-instructions-listen-to-this-interview-sander-schulhoff.md"
draft: false
---

## Thesis

Sander Schulhoff, CEO of Learn Prompting, argues that better models have not made prompt engineering obsolete; he still relies on the same core techniques he used a year earlier, and expects the role to evolve into agent engineering. His HackAPrompt competition, discussed with host Nathan Labenz, shows that prompt-level instructions cannot stop determined users from overriding an application's intended behaviour, so developers must restrict what models are allowed to do.

## Key points

- **Learn Prompting.** Schulhoff says the open-source guide reached about 2 million users; he kept it free and added paid courses for enterprises, betting that companies will train existing staff rather than hire $300k specialist prompt engineers.
- **Three basics.** Schulhoff's core advice is context, few-shot examples and thought generation (chain of thought, contrastive chain of thought). He says modern models handle negative instructions well.
- **Role prompting myth.** In internal tests on GSM-8K and MMLU, a "you are a dumb person" system prompt beat a "brilliant professor" prompt; Schulhoff now uses roles mainly for style. Labelling an entrapment dataset took ten steps before switching to GPT-4 32k produced clean one-word labels.
- **HackAPrompt.** Schulhoff raised about $40,000 in cash and prizes from Scale, OpenAI and Preamble while an undergraduate; the paper won a best paper award at EMNLP 2023. Players hijacked a first model to attack a second evaluator model, and beat a backslash-and-banned-letters defence using Chinese characters.
- **Attack taxonomy.** The dataset of about 600,000 prompts is grouped into obfuscation, context switching, task deflection and compound instruction attacks. Almost 40% of GPT-3 attacks transferred directly to GPT-4.
- **Defences and stakes.** Schulhoff recommends hiding prompts, restricting model permissions and fine-tuning, and warns about prompt injection in military command systems and coding agents that open pull requests.

## Quotes

> "Prompt-based defenses do not work, period. So I don't recommend those at all." — Sander Schulhoff

> "It's like artificial social engineering, and we certainly have not solved that." — Sander Schulhoff
