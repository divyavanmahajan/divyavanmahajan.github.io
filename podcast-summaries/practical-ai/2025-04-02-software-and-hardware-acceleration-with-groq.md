---
title: "Software and hardware acceleration with Groq"
date: 2025-04-02
show: practical-ai
episode: 308
url: "https://share.transistor.fm/s/5e63c891"
duration_min: 43
hosts: ["Chris Benson", "Daniel Whitenack"]
guests: ["Dhananjay Singh"]
description: "Groq's DJ Singh explains how a compiler-first, deterministic LPU design removes hardware delays, avoids per-model kernels and turns fast inference into better reasoning quality."
tags: ["ai-inference", "ai-hardware", "compilers", "llm-serving", "reasoning-models"]
source_transcript: "practical-ai/episodes/2025/04/2025-04-02-software-and-hardware-acceleration-with-groq.md"
draft: false
---

## Thesis

Dhananjay "DJ" Singh, a staff machine learning engineer at Groq, argues that fast inference comes from co-designing software and hardware, starting with the compiler. Groq's LPU schedules every operation in advance on deterministic hardware. That removes the delays of GPU-style memory hierarchies and hand-written kernels, and it lets new models run without per-model optimization work.

## Key points

- **Compiler first.** Singh says Groq, founded by Jonathan Ross (co-founder of Google's TPU program), built its compiler before its chip. The compiler decides where and when each addition and multiplication runs across multiple chips. Groq removed components such as network switches that add non-determinism, which Singh compares to a road that needs no stop signs because traffic is perfectly scheduled.
- **No kernels.** GPUs need thousands of engineers writing specialized kernels and lose time moving data between memory tiers (about 1 nanosecond for L1 cache versus 50 to 100 for high-bandwidth memory). Singh says Groq's compiler improvements apply to all supported models at once. Onboarding a model mostly means stripping out GPU-specific code.
- **Numbers.** Singh cites Llama 3 70B at 300 to several thousand tokens per second, and Whisper at around 200x real-time speed.
- **Speed buys accuracy.** Citing Google research that users lose interest after about 200 milliseconds, Singh argues that speed also improves quality: reasoning models like DeepSeek R1 can generate more tokens within the same wait.
- **Access.** The stack is mostly custom (with Linux primitives and MLIR) and exposed through an OpenAI-compatible REST API. Switching takes a one- or two-line change, there is a free tier, and dedicated instances run in Groq's own data centers. The developer community has grown to over a million.
- **Strategy.** Groq targets general matrix workloads rather than hard-coding transformers. Singh expects API-based inference to beat on-device models for high-quality results, and says the Llama releases prompted Groq's pivot to LLMs.

## Quotes

> "speed can translate to quality as well." — Dhananjay Singh

> "we don't have to write kernels per model level, you know?" — Dhananjay Singh
