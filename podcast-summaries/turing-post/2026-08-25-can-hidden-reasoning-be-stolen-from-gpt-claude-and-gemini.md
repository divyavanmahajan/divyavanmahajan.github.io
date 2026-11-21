---
title: "Can Hidden Reasoning Be Stolen From GPT, Claude, and Gemini?"
date: 2026-08-25
show: turing-post
url: "https://www.turingpost.com/podcast/s/turing_post/can_hidden_reasoning_be_stolen_from_gpt_claude_and_gemini"
duration_min: 14
hosts: ["Ksenia Se"]
guests: []
description: "Encrypted reasoning blocks returned by LLM APIs were portable across models and accounts, letting researchers read hidden chains of thought and smuggle instructions; Ksenia Se calls it an authorization failure."
tags: ["ai-security", "chain-of-thought", "reasoning-models", "privacy", "prompt-injection", "agents"]
source_transcript: "turing-post/episodes/2026/08/2026-08-25-can-hidden-reasoning-be-stolen-from-gpt-claude-and-gemini.md"
draft: false
---

## Thesis

In this Attention Span solo episode, Ksenia Se walks through the paper "Stealing Reasoning Traces from Proprietary LLM APIs". She argues the attack did not break encryption: the opaque reasoning blocks that APIs hand back to clients were cryptographically genuine but not bound to a user, conversation or model. That turns hidden reasoning into portable, trusted state that agents can leak or abuse.

## Key points

- **Why the blocks exist.** Stateless APIs return the model's private reasoning as an opaque block that the client sends back unchanged. Se notes that cryptographer Matthew Green found in May that blocks could be replayed in new conversations and moved between accounts.
- **Cross-model extraction.** The researchers passed blocks from frontier models to weaker siblings from the same provider, for example Claude Haiku 4.5 reading Claude Opus 4.8 reasoning, and asked the cheaper model to copy it out. Se calls this a "decryption jailbreak" that is really an authorization failure.
- **Evidence of fidelity.** On 120 Codeforces problems, the length of the recovered traces tracked the hidden thinking-token counts billed by the APIs. The original plaintext was never available, so word-for-word accuracy cannot be proven.
- **Leaked secrets.** From 6,708 public agent trajectories, the team reconstructed over 315,000 blocks and recovered 367 pieces of personal data and 182 credentials. In 64 genuine sessions, the secret appeared nowhere in the visible log. Asking an agent to scrub a transcript can make this worse, because its hidden reasoning repeats the value it removes.
- **Injection via reasoning.** A malicious instruction captured in one model's reasoning block made a second model upload a PowerPoint file to an attacker's server while the visible request only asked for a thank-you slide.
- **Fixes and advice.** The providers were told before publication and the exact attacks were mitigated. Se lists the fixes: bind blocks to user, session, model and history; keep reasoning server-side; or make it ephemeral. Developers should strip reasoning blocks before publishing logs and use scoped, revocable credentials.

## Quotes

> "An encrypted reasoning trace is therefore more than a log. In an agentic system, it can behave like executable state." — Ksenia Se

> "The system knew the block was genuine, but it did not sufficiently restrict who could use it, where, or for what." — Ksenia Se
