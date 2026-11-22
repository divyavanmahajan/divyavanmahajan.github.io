---
title: "Are AI benchmarks doomed?"
date: 2026-05-01
show: epoch-ai
episode: 7
url: "https://epoch.ai/epoch-after-hours/are-ai-benchmarks-doomed"
youtube: "https://www.youtube.com/watch?v=8ftFeuO1jbc"
duration_min: 65
hosts: ["Anson Ho"]
guests: ["Greg Burnham", "Tom Adamczewski"]
description: "Epoch's benchmarking team argues that fast saturation and the benchmark-reality gap do not doom AI benchmarks; scalable tasks, AI-assisted development and human grading point the way forward."
tags: ["ai-benchmarks", "ai-evaluation", "software-engineering", "ai-progress", "mirrorcode"]
source_transcript: "epoch-ai/episodes/2026/05/2026-05-01-are-ai-benchmarks-doomed.md"
draft: false
---

## Thesis

Anson Ho puts the pessimist case to Epoch's Greg Burnham and Tom Adamczewski: benchmarks saturate within months, cost millions, and fail to predict real-world impact. Both push back. Burnham argues more capable models mean benchmarks have more to tell us, while Adamczewski is more cautious about the benchmark-reality gap but expects demand for benchmarks to keep pace with their rising cost.

## Key points

- **Saturation is not failure.** Burnham notes earlier capability spikes (around GPT-4 and reasoning models) also saturated benchmarks, and points to GPQA, built in late 2023, lasting about two years. Even a benchmark saturated on release reduces uncertainty, he argues, and he recommends smaller, "agile" benchmarks.
- **MirrorCode scales difficulty.** Adamczewski describes MirrorCode, built with METR, where an AI re-implements command-line programs from documentation and a black-box binary. Models reimplemented CommonMark (about 16,000 lines of C), but the roughly 100,000-line tasks such as Apple's Pkl remain unsolved even with up to a billion tokens.
- **AI speeds up benchmark building.** Adamczewski guesses about a 2x speed-up from LLMs in his work. Burnham says FrontierMath: Open Problems is limited mainly by mathematicians coming up with suitable problems, where AI taste is still weak.
- **The benchmark-reality gap.** Adamczewski cites GDPVal as a benchmark meant to signal automation that has not matched productivity data. Burnham counters that its tasks are self-contained, so saturation indicates transformed workflows, not automated jobs.
- **AGI benchmarks.** Adamczewski finds the AGI label unhelpful; Burnham thinks out-of-distribution generalization tests, such as new Steam games or chess puzzles, are worth pursuing.
- **Human grading returns.** Burnham praises the IMO's judging of Google's gold-medal claim and Remote Labor Index's human graders; both suggest fiction contests and academic peer review as future benchmarks.

## Quotes

> "I’d almost say we’re living through a golden age of benchmarking" — Greg Burnham

> "Well, think about how unhappy you’d be if you had nothing at all." — Tom Adamczewski
