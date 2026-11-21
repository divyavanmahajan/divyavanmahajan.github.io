---
title: "The ARC Prize: Efficiency, Intuition, and AGI, with Mike Knoop, co-founder of Zapier"
date: 2024-07-13
show: cognitive-revolution
url: "https://www.cognitiverevolution.ai/the-arc-prize-efficiency-intuition-and-agi-with-mike-knoop-co-founder-of-zapier/"
youtube: "https://www.youtube.com/watch?v=XECXoS-D6kQ"
duration_min: 116
hosts: ["Nathan Labenz"]
guests: ["Mike Knoop"]
description: "Mike Knoop argues the ARC benchmark measures what LLMs lack, efficient skill acquisition on novel tasks, and funds a $1M prize to push research beyond scaling language models."
tags: ["arc-agi", "benchmarks", "program-synthesis", "agi", "ai-research"]
source_transcript: "cognitive-revolution/episodes/2024/07/2024-07-13-the-arc-prize-efficiency-intuition-and-agi-with-mike-knoop-co-founder.md"
draft: false
---

## Thesis

Zapier co-founder Mike Knoop tells Nathan Labenz that AGI should be defined, as Francois Chollet did in 2019, as a system that efficiently acquires new skills, and that ARC is the benchmark that tests this. Because ARC progress has stalled while other benchmarks saturate, he co-founded the ARC Prize to pull researchers toward new ideas. Labenz is more optimistic that scaled language models will get there.

## Key points

- **The contest.** The prize totals $1 million, with a $500,000 grand prize for 85% on 100 hand-verified private puzzles, run on Kaggle with a P100 for 12 hours, no internet, and an open-source requirement. Labenz estimates the budget at roughly a cent of compute per puzzle.
- **Why efficiency matters.** Knoop argues that without an efficiency limit, general intelligence would reduce to brute-force search. After the 2020 contest, ensembling brute-force solutions could solve 40-50% of puzzles; the private state of the art is still 39%.
- **Current approaches.** Jack Cole's 39% uses test-time fine-tuning on a small, roughly 220-million-parameter model. Ryan Greenblatt reaches 42% on the public leaderboard by having GPT-4o sample thousands of Python programs. Knoop suspects LLMs benefit from human-written ARC code online.
- **Research monoculture.** Knoop counts about $20 billion invested in language-model startups in 2023 against a few hundred million for new architectures. He also criticises frontier labs for no longer publishing technical details.
- **Solving puzzles.** Labenz splits solving into perception, guessing the rule, writing the program and debugging, and sees rule-guessing as the core. Knoop expects a winning system to use deep learning to guide program synthesis. His own side project is a non-backpropagation architecture search.
- **Reliability.** Knoop argues the first use of an ARC solution would be the reliability problems he sees in Zapier's AI bots. He cites an AI step that posted user content into a Slack channel shared with a partner.

## Quotes

> "If efficiency was not part of the definition, this would mean that general intelligence was merely a brute force search." — Mike Knoop

> "In 2023, there was $20,000,000,000 of investment that went into language model startups." — Mike Knoop
