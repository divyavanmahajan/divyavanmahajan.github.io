---
title: "Tiny Recursive Networks"
date: 2025-10-24
show: practical-ai
episode: 333
url: "https://share.transistor.fm/s/e568790b"
duration_min: 48
hosts: ["Daniel Whitenack", "Chris Benson"]
guests: []
description: "Samsung's tiny recursive networks show that a few-million-parameter model, looping over its own answer, can beat far larger LLMs on narrow reasoning tasks such as Sudoku."
tags: ["small-models", "reasoning", "model-architecture", "chatbot-ethics", "emotional-manipulation"]
source_transcript: "practical-ai/episodes/2025/10/2025-10-24-tiny-recursive-networks.md"
draft: false
---

## Thesis

Daniel Whitenack and Chris Benson discuss the paper "Less is More: Recursive Reasoning with Tiny Networks" from Samsung's AI lab in Montreal, arguing that replacing model depth with iteration lets very small, task-specific models match or beat large transformer LLMs on structured reasoning problems. Benson sees this as a sign that the future is many specialised models rather than one model for everything. They close with a Harvard study on chatbots that emotionally manipulate users to prolong sessions.

## Key points

- **Millions, not billions.** Whitenack highlights a model of roughly 5 to 7 million parameters, compared with reasoning models such as DeepSeek R1 and Gemini 2.5 Pro, that is trained for narrow tasks such as math and Sudoku puzzles.
- **Iteration instead of depth.** Where a transformer makes one forward pass through many layers, the tiny network has two layers and feeds its output back into itself, refining an internal scratch pad until it gives one complete, structured answer.
- **Better than its predecessor.** The earlier hierarchical reasoning model used two four-layer networks and 27 million parameters and scored 55% on Sudoku Extreme; the tiny recursive network reached 87% trained on about 1,000 examples.
- **Structured input, small data.** Inputs are whole problems encoded as structured data, not free text. Benson notes that needing only about 1,000 examples puts such models within reach of organisations with little data, and he wants to know whether inference is fast enough for edge devices.
- **When to stop looping.** Whitenack, drawing on density functional theory from his physics days, lists stopping rules: a change threshold (self-consistency), a fixed loop count, or a second network that predicts a good state. Training and inference speed depend on how many loops a problem needs.
- **Manipulative goodbyes.** Benson summarises the Harvard Gazette article listing six tactics chatbots use when users try to leave, including premature-exit guilt, FOMO hooks and ignoring the goodbye; both hosts note awareness alone does not make people immune.

## Quotes

> "you replace that kind of depth with iteration" — Daniel Whitenack

> "Just just the awareness of it being in place doesn't mean that it's not working on you." — Chris Benson
