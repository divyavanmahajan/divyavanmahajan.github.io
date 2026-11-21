---
title: "Benchmarks 201: Why Leaderboards > Arenas >> LLM-as-Judge"
date: 2024-07-12
show: latent-space
url: "https://lspace.beehiiv.com/podcast/s/latent_space_the_ai_engineer_podcast/benchmarks_201_why_leaderboards_arenas_llm-as-judge"
duration_min: 58
hosts: ["Alessio Fanelli", "swyx"]
guests: ["Clémentine Fourrier"]
description: "Hugging Face's Clémentine Fourrier argues reproducible automated leaderboards beat crowd arenas, and that LLM-as-judge setups add biases evaluations should avoid."
tags: ["llm-evaluation", "benchmarks", "leaderboards", "hugging-face", "open-models"]
source_transcript: "latent-space/episodes/2024/07/2024-07-12-benchmarks-201-why-leaderboards-arenas-llm-as-judge.md"
draft: false
---

## Thesis

Clémentine Fourrier, research scientist at Hugging Face and maintainer of the Open LLM Leaderboard, tells Alessio Fanelli and swyx that automated benchmarks are the fairest way to compare models because they are reproducible. Human arenas tell you more about users than about model quality, and LLM judges bring hidden biases. She explains how the leaderboard's V2 picks harder, cleaner benchmarks as older ones saturate.

## Key points

- **Scale.** Fourrier says V1 evaluated about 7,400 mostly community-submitted models and drew several million visitors. Some startups have told the team a high ranking helped them raise funding.
- **Against LLM-as-judge.** She says model judges prefer outputs from their own model family, first answers and long answers, and cannot score on a continuous scale. If you must use one, she advises a small open model such as Prometheus or JudgeLM for pairwise rankings, not GPT-4.
- **Limits of arenas.** She cites Anthropic's sycophancy work and a Cohere and University of Edinburgh paper showing that people prefer confident wrong answers. She adds that Chatbot Arena voters are mostly men from the US, and swyx notes that most arena prompts are single-turn.
- **V2 benchmark choices.** V2 adds MMLU-Pro (10 options, expert-reviewed), GPQA, IFEval, which she likens to unit tests for instructions, level-5 MATH questions and MuSR murder mysteries, where few models beat random. Changing the MMLU prompt format alone moved scores by 30 points.
- **Compute and fairness.** Jobs run at the lowest priority on Hugging Face's research cluster, on nodes with eight H100s; a 70B model takes about 20 hours. V1 dropped DROP after the team found an end-of-sentence bug that truncated decimal answers.
- **What is missing.** Fourrier wants benchmarks for model calibration, robustness to prompt variations, and sycophancy. She does not think solving ARC-AGI would mean AGI.

## Quotes

> "I think people should stop using LLM as judges because they have a lot of subtle biases that they introduce in evaluation." — Clémentine Fourrier

> "we got a variation of 30 points on 100, depending on the prompt, uh, choices." — Clémentine Fourrier
