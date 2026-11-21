---
title: "Claude Interpreter: Taking Safe AI to Market with Alex Albert of Anthropic"
date: 2024-05-22
show: cognitive-revolution
url: "https://www.cognitiverevolution.ai/claude-interpreter-taking-safe-ai-to-market-with-alex-albert-of-anthropic/"
youtube: "https://www.youtube.com/watch?v=5cQouQZm9fI"
duration_min: 58
hosts: ["Nathan Labenz"]
guests: ["Alex Albert"]
description: "Anthropic's Alex Albert on what makes Claude 3 Opus different, why evaluations and product UX are the frontier, and how developers should orchestrate models and add guardrails."
tags: ["anthropic", "claude", "prompt-engineering", "evaluations", "ai-safety", "developer-tools"]
source_transcript: "cognitive-revolution/episodes/2024/05/2024-05-22-claude-interpreter-taking-safe-ai-to-market-with-alex-albert-of-anthro.md"
draft: false
---

## Thesis

Alex Albert built jailbreakchat.com and is now developer relations lead at Anthropic. He tells Nathan Labenz that Claude 3's strengths come from deliberate work on Claude's character plus some luck in training. He sees model APIs converging while products and evaluations are only getting started. His advice to developers is to orchestrate cheap and expensive models together, to separate safety screening from the main prompt, and to build things rather than follow the hype.

## Key points

- **Examples beat instructions.** Labenz has Opus write podcast intros from 30 of his past essays. Albert does the same for Anthropic Cookbook recipes using five existing ones, and says people underestimate how much good examples in a prompt help.
- **Haiku plus Opus.** Albert describes a sub-agent RAG pattern: Haiku reads 100 documents and pulls out the relevant passages, then Opus synthesises them. He says this often beats embeddings because the model actually reasons over the documents. Labenz is building something similar for Athena to profile a client from their email.
- **Honesty about uncertainty.** Albert says Claude's willingness to talk about its own experience comes from Amanda Askell's work on Claude's character and from constitutional AI principles. On the needle-in-a-haystack "you're testing me" moment, he says spotting a test is not the same as being self-aware.
- **Evaluations next.** Albert wants three kinds of eval: multi-step agentic tasks, long-context synthesis across 200,000 tokens that goes beyond needle in a haystack, and many more domain benchmarks like GPQA. He calls LMSYS useful but limited.
- **Roadmap and data.** He says Claude has worked up to 1,000,000 tokens in tests and that fine-tuning through Bedrock is coming soon. Inputs and outputs are not used for training except in three cases: trust-and-safety flags, feedback users report explicitly, and explicit permission.
- **Guardrails.** For app developers, Albert recommends a separate Haiku classifier that answers with a single token before the main model runs, and adding manually scored examples to it with RAG. He says this has given double-digit improvements in classification.

## Quotes

> "people really undervalue the importance of the examples, especially in the prompt." — Alex Albert

> "I think at the root of it is we're just honest with Claude about the things we know and and the things we don't know." — Alex Albert
