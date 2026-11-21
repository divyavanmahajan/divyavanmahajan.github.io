---
title: "The Future of AI Security with Adam Wenchel, CEO of Arthur.ai"
date: 2023-09-19
show: cognitive-revolution
url: "https://www.cognitiverevolution.ai/the-future-of-ai-security-with-adam-wenchel-ceo-of-arthur-ai/"
youtube: "https://www.youtube.com/watch?v=o04b9sylblQ"
duration_min: 84
hosts: ["Nathan Labenz"]
guests: ["Adam Wenchel"]
description: "Because LLMs act directly on untrusted text, Adam Wenchel argues they need outboard firewalls, task-specific evaluation and clear liability rather than relying on fixes inside the model."
tags: ["ai-security", "llm-evaluation", "hallucinations", "model-governance", "enterprise-ai"]
source_transcript: "cognitive-revolution/episodes/2023/09/2023-09-19-the-future-of-ai-security-with-adam-wenchel-ceo-of-arthur-ai.md"
draft: false
---

## Thesis

Adam Wenchel, who founded Arthur in 2019 after building Capital One's AI team, argues that AI security means moving from deterministic to probabilistic thinking. LLMs take raw user text and act on it, so he says the problem cannot be fixed inside the model alone. Enterprises need an external layer that filters inputs and outputs, plus benchmarks built from their own tasks, before they can put generative AI into production.

## Key points

- **Pre-LLM attacks.** Wenchel describes a boundary detection attack on a large bank: fraudsters learned that transactions under $500 were not flagged and split luxury-purse purchases across cards. Under SR 11-7 a new model can take 6 to 12 months to approve, so banks patch with rules and end up with hundreds of heuristics in front of models that are years old.
- **Models interact.** A stricter fraud model can push up call-center volume or move a card to the "back of the wallet", so Wenchel argues accuracy alone is the wrong target.
- **Layered firewall.** Arthur Shield checks for prompt injection and enforces usage policies, for example stopping an HR assistant from planning weekend trips. It combines pattern matching, custom classifiers and LLM-as-judge checks so it does not double latency or cost.
- **Hallucination detection for RAG.** Wenchel says Arthur breaks a response into claims and checks each one against the retrieved context. He cites about 87% detection accuracy and an average 87% cut in hallucinations, and says one industrial equipment maker's field-rep tool now has almost none.
- **Benchmark your own tasks.** Arthur Bench, open-sourced about three weeks before the interview, lets teams test providers on around 100 of their own prompts with metrics such as concision and hedging. In Arthur's testing, Cohere hedged rarely and was strong on multilingual work.
- **Liability over a final fix.** Wenchel doubts alignment will ever be fully solved. He says Microsoft gained from the Sydney launch, but argues that whoever deploys a system should be liable for wrong or harmful answers.

## Quotes

> "You're really moving from a deterministic world into a probabilistic world, and that has pretty significant implications in terms of the way you think about things" — Adam Wenchel

> "If you're putting out a system, then you need to own the consequences of that system." — Adam Wenchel
