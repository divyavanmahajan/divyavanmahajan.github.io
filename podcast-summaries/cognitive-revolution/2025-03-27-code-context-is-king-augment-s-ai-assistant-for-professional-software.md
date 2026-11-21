---
title: "Code Context is King: Augment’s AI Assistant for Professional Software Engineers, with Guy Gur-Ari"
date: 2025-03-27
show: cognitive-revolution
url: "https://www.cognitiverevolution.ai/code-context-is-king-augments-ai-assistant-for-professional-software-engineers-with-guy-gur-ari/"
youtube: "https://www.youtube.com/watch?v=LYWkB6apLfw"
duration_min: 83
hosts: ["Nathan Labenz"]
guests: ["Guy Gur-Ari"]
description: "Coding assistants for enterprise codebases succeed or fail on context: Augment built a fast, real-time retrieval stack and learns from developer behaviour to serve large engineering teams."
tags: ["ai-coding-assistants", "rag", "retrieval", "enterprise-software", "reinforcement-learning", "ai-economics"]
source_transcript: "cognitive-revolution/episodes/2025/03/2025-03-27-code-context-is-king-augment-s-ai-assistant-for-professional-software.md"
draft: false
---

## Thesis

Guy Gur-Ari, co-founder and chief scientist at Augment, argues that AI coding help for professional engineers is mainly a context problem: codebases with millions of lines cannot fit in a prompt, so the model must be fed the right code at the right moment. Augment's answer is a retrieval-heavy stack tuned for both quality and speed. He also expects developers to keep steering agents for a long time, even as agents write most of the code.

## Key points

- **Why long context is not enough.** Gur-Ari estimates about 10 tokens per line of code, so a 1,000,000-token window covers roughly 100,000 lines, which counts as a small project in industry. Augment's customers typically have hundreds of developers, and some have thousands.
- **Custom RAG, built for speed.** Augment's third research approach became RAG with its own retriever models. Retrieval runs on every keystroke, and a completion should finish within about 300 milliseconds. The team built its own vector database because none it found supported near-real-time updates and a separate view for each developer's branch.
- **Evals first, then turn the knobs up.** For people building RAG apps, Gur-Ari recommends starting with an off-the-shelf retriever and 10 to 20 hand-labelled samples, then hill-climbing on that set. He agrees with Labenz that modern models cope well with retrieving more chunks, but says piling on instructions does not scale the same way.
- **Reinforcement learning from developer behaviours.** Data from the free community tier, never from enterprise customers, shows what developers were actually trying to do in the IDE. Augment post-trains open-source models rather than training from scratch.
- **Economics.** Gur-Ari says AI companies need more capital than SaaS because inference is expensive, and agents make 10 or more model calls per instruction. Augment leases GPUs and uses consumption-based credits instead of per-seat pricing.
- **Advice for juniors.** He thinks Dario's 3-to-6-month timeline for models writing most code is too quick, but not off by years. Augment still hires junior developers. For his 14-year-old, he suggests fields tied to the physical world, such as mechanical engineering or robotics.

## Quotes

> "You can start with even 10 to 20 samples labeled by hand." — Guy Gur-Ari

> "if you took away the human, nothing good would happen." — Guy Gur-Ari
