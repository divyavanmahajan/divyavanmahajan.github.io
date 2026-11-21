---
title: "AI AMA – Part 1: OpenAI’s o3, Deliberative Alignment, and AI Surprises of 2024"
date: 2025-01-08
show: cognitive-revolution
url: "https://www.cognitiverevolution.ai/ai-ama-part-1-openais-o3-deliberative-alignment-and-ai-surprises-of-2024/"
youtube: "https://www.youtube.com/watch?v=Eifck_QvMFU"
duration_min: 124
hosts: ["Nathan Labenz"]
guests: ["Adi"]
description: "Nathan Labenz reads o3 as a real reasoning leap that shifts compute governance and access, calls deliberative alignment useful but evasive on hard safety questions, and says deployment lags capability."
tags: ["reasoning-models", "ai-safety", "compute-governance", "ai-automation", "ai-agents"]
source_transcript: "cognitive-revolution/episodes/2025/01/2025-01-08-ai-ama-part-1-openai-s-o3-deliberative-alignment-and-ai-surprises-of-2.md"
draft: false
---

## Thesis

In a listener AMA run by producer Adi of AI Podcasting, Nathan Labenz argues that OpenAI's o3 results are real and mark a shift to expensive, inference-heavy reasoning. That shift could bring unequal access to AI but also make compute governance workable again. He finds 2024's frontier models stronger at hard reasoning than expected, yet weaker at agents, memory and perception. He also thinks people have used far less of the existing capability than they could.

## Key points

- **o3 on ARC-AGI.** Labenz notes o3 scored 75% in low-effort mode, about 15 points ahead of any earlier system, and 87.5% with high compute. His open question is how o3 picks an answer from 6 or 1,024 samples, since that decides whether the gains carry over to domains that are hard to verify.
- **Reasoning models are still weird.** His tic-tac-toe test tripped up o1 pro, Gemini Flash Thinking and DeepSeek. They fell back on "solved game, always a tie," misread the board, or reasoned badly.
- **Deliberative alignment.** Labenz describes it as a constitutional method: a purely helpful model reasons over a long policy, grades its own outputs, and is fine-tuned with that reasoning baked in. Results are "on par with Claude", but the paper says nothing about deception, models forming their own goals, or what the policy itself should say. He jokes that it is "the Ron Burgundy of AI alignment."
- **Compute and power.** Expensive inference could mean inequality of access. It also echoes Zvi's "physics being kind to us" and Zuckerberg's argument that bigger compute beats spammers, which favours defence and governance.
- **Underused models.** Labenz thinks fine-tuning GPT-4o on a small set of good examples could automate 100x more work than it does today. He says RAG has underperformed and recommends running whole corpora through cheap models like Gemini Flash.
- **2025 outlook.** The biggest surprise of 2024 for him was the gap between PhD-level reasoning and unreliable agents. He expects agents, benchmark saturation, and more "Move 37"-style weirdness and scheming as models get harder to read.

## Quotes

> "we are beating PhDs in their own domain of expertise on all these really hard questions. And yet you can't reliably book a calendar event without extreme guardrails." — Nathan Labenz

> "If these things can match you on quality, they will crush you on breadth." — Nathan Labenz
