---
title: "[LIVE] Anthropic Distillation & How Models Cheat (SWE-Bench Dead) | Nathan Lambert & Sebastian Raschka"
date: 2026-02-26
show: latent-space
url: "https://lspace.beehiiv.com/podcast/s/latent_space_the_ai_engineer_podcast/live_anthropic_distillation_how_models_cheat_swe-bench_dead_nathan_lambert_sebastian_raschka"
duration_min: 52
hosts: ["Alessio Fanelli", "swyx"]
guests: ["Nathan Lambert", "Sebastian Raschka"]
description: "Nathan Lambert, Sebastian Raschka and swyx argue Anthropic's distillation accusations are hard to separate from normal API use, and that contamination has made SWE-bench Verified unreliable."
tags: ["distillation", "benchmarks", "swe-bench", "open-models", "llm-evaluation"]
source_transcript: "latent-space/episodes/2026/02/2026-02-26-live-anthropic-distillation-how-models-cheat-swe-bench-dead-nathan-lam.md"
draft: false
---

## Thesis

In a SAIL livestream, Nathan Lambert, Sebastian Raschka and swyx discuss two stories of the week. Lambert argues Chinese labs facing a GPU shortage obviously should distil from US APIs, and that Anthropic's blog post on "distillation attacks" is partly a political message. swyx walks through OpenAI's audit of SWE-bench Verified to show how hard it is to build a clean benchmark once data leaks into training corpora.

## Key points

- **What distillation means.** Raschka explains that training on a larger model's logits has given way to training on its generated text. Labs routinely do this for their own small models, as in DeepSeek R1's smaller variants. He notes evaluation runs look almost identical to distillation, so detection rests on volume and patterns, which raises privacy questions.
- **Reading Anthropic's numbers.** swyx notes Anthropic had earlier blocked OpenAI and xAI, and that Minimax redirected nearly half its traffic when Opus 4.6 launched. Lambert thinks naming DeepSeek, with far fewer exchanges, was about name recognition.
- **Teachers are not equal.** Lambert says the strongest model is often not the best teacher; Qwen dense models teach open models like Olmo well, and GPT-OSS is a good teacher. He suggests labs may keep some models product-only, while swyx notes Codex variants already get two- to four-week exclusives.
- **SWE-bench Verified is dead.** swyx explains that OpenAI's 500-task subset, vetted by three people per task, still contained unsolvable tasks. A re-audit found 59% of the problems models kept failing were broken. GPT-5's reasoning showed knowledge of future Django versions, and some models could recite tasks from just a task ID.
- **What comes next.** The group points to Scale AI's SWE-bench Pro with private splits, though Raschka expects it may show flaws later too. Lambert predicts frontier evals will cost tens to hundreds of millions of dollars. Raschka sees computer-use tasks as the next, harder area to measure.

## Quotes

> "the strongest model is not necessarily the best teacher" — Nathan Lambert

> "if this happens to SWE-bench verified, like, which I think is the most scrutinized benchmark in the world" — swyx
