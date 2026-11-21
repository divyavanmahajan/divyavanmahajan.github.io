---
title: "ICLR 2024 — Best Papers & Talks (Benchmarks, Reasoning & Agents) — ft. Graham Neubig, Aman Sanger, Moritz Hardt)"
date: 2024-06-10
show: latent-space
url: "https://lspace.beehiiv.com/podcast/s/latent_space_the_ai_engineer_podcast/iclr_2024_best_papers_talks_benchmarks_reasoning_agents_ft_graham_neubig_aman_sanger_moritz_hardt"
duration_min: 269
hosts: ["Alessio Fanelli", "swyx"]
guests: ["Graham Neubig", "Aman Sanger", "Moritz Hardt"]
description: "ICLR 2024 research shows agent benchmarks are far from solved, and that progress on reasoning now depends as much on better evaluation and verifiers as on bigger models."
tags: ["benchmarks", "ai-agents", "coding-agents", "reasoning", "evaluation"]
source_transcript: "latent-space/episodes/2024/06/2024-06-10-iclr-2024-best-papers-talks-benchmarks-reasoning-agents-ft-graham-neub.md"
draft: false
---

## Thesis

In this four-hour ICLR 2024 compilation, CMU's Graham Neubig, Cursor co-founder Aman Sanger and a run of paper authors argue that agents for the web and for code remain far below human level. Most recent gains come from how agents use models, not from the models themselves. Moritz Hardt's keynote and the OpenAI talks add that benchmarks and verifiers now limit progress, so they need scientific study of their own.

## Key points

- **WebArena and agent gaps.** Neubig says models scored under 15% on WebArena against 78% for humans; agent design, not newer LLMs, lifted the best results to 25-30%. OpenDevin reached 21% on SWE-bench Lite, and a full SWE-bench run with GPT-4 costs about $6,000.
- **Humans stay in the loop.** Sanger is more bearish on autonomous agents, expects them to handle the "bottom percent" of pull requests, and wants Cursor to run background tasks while the developer stays in control. He suspects SWE-bench scores are inflated because models have seen the public repositories.
- **SWE-bench and contamination.** Carlos Jimenez reports Claude 3 Opus resolving only 3.8% of 2,294 real GitHub issues with retrieval, and 12.5% with SWE-agent. Yonatan's ordering-based test detects test sets seen ten or more times in training, but not single copies.
- **Science of benchmarks.** Hardt notes MMLU's 14,000 questions were downloaded millions of times in a month. His ImageNot experiment still reproduced ImageNet's model rankings, one noisy label per data point turns out to be optimal, and multitask benchmarks trade diversity for sensitivity.
- **Verifiers beat raw sampling.** OpenAI's process reward model, trained on a million step-level labels, reached 78.2% on the MATH benchmark, against 72.4% for outcome supervision and 69.6% for majority voting. Lilian Weng describes rule-based safety rewards and an instruction hierarchy against prompt injection.
- **Agent systems.** Google DeepMind's WebAgent reached about 80% on map tasks, with planning causing over half of its errors. MetaGPT assigns software roles to agents; the hosts add that multi-agent papers rarely report cost or latency.

## Quotes

> "I don't wanna be working on insignificant things that are already solved by the strongest models." — Graham Neubig

> "And what we prove is that in all cases, it's best to sample N data points with one noisy label each." — Moritz Hardt
