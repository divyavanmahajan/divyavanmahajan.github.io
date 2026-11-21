---
title: "AI:AM Highlights: Exploring the J-Space, AI Superforecasters, SambaNova's Chips, & LTX Video Gen"
date: 2026-07-09
show: cognitive-revolution
url: "https://www.cognitiverevolution.ai/ai-am-highlights-exploring-the-j-space-ai-superforecasters-sambanova-s-chips-ltx-video-gen/"
youtube: "https://www.youtube.com/watch?v=pcx85mLekHw"
duration_min: 127
hosts: ["Nathan Labenz"]
guests: ["Prakash"]
description: "Anthropic's J-space paper suggests models cannot easily hide elaborate plans from cheap interpretability probes; guests cover AI forecasting, open world models and inference as data movement."
tags: ["interpretability", "forecasting", "ai-chips", "world-models", "ai-safety"]
source_transcript: "cognitive-revolution/episodes/2026/07/2026-07-09-ai-am-highlights-exploring-the-j-space-ai-superforecasters-sambanova-s.md"
draft: false
---

## Thesis

In this highlights cut from their live show AI in the AM, Nathan Labenz and Prakash Narayanan work through Anthropic's global workspace paper. Labenz argues that its readable "J-space", combined with limits on hidden serial reasoning, makes it hard for a model to scheme undetected. Guest segments add Dan Schwarz on AI forecasting, Zeev Farbman on open world models and Kunle Olukotun on inference hardware.

## Key points

- **A readable workspace.** Anthropic's J-lens is a Jacobian-based probe of where the model holds concepts. Labenz notes that interventions behave as predicted only from the 50s to about 70% of the time, leaving "dark cognition". Ablating the J-space collapses hard multi-step reasoning, and a model trained with a hidden misaligned goal shows concepts like "fake" and "deliberately hidden fraud" on its first token.
- **AI detection.** Labenz ran roughly 400 podcast intro essays through Pangram. One essay he had rewritten heavily was still scored as fully AI, so he trusts it as a consumer but would not convict on it. Prakash argues physical businesses such as Nike have little to fear from Anthropic.
- **Forecasting as the ultimate eval.** Dan Schwarz of FutureSearch says his systems now beat the human superforecaster median. His team's "past-casting" scored Claude Fable within 24 hours as the best single-agent forecaster on its leaderboard. He calls forecasting the only renewable source of hard, ungameable questions.
- **Open world models.** Zeev Farbman of Lightricks/LTX says real-time avatars are basically solved, but persistent world consistency is not: a coin left in a drawer should still be there later. He rejects the closed labs' "toll road" business model.
- **Inference is data movement.** Kunle Olukotun of SambaNova says GPUs use 10-20% of their memory bandwidth during inference. SambaNova's reconfigurable dataflow chips aim for 70-80% by fusing the decoder into one kernel and moving data SRAM to SRAM.

## Quotes

> "And that is essentially a data movement problem, right? And it's a data movement problem from the memory to the compute units." — Kunle Olukotun

> "I've learned never to bet against the innovation capabilities of software people and people." — Kunle Olukotun
