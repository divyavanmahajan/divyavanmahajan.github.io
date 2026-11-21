---
title: "Supervise the Process of AI Research — with Jungwon Byun and Andreas Stuhlmüller of Elicit"
date: 2024-04-11
show: latent-space
url: "https://lspace.beehiiv.com/podcast/s/latent_space_the_ai_engineer_podcast/supervise_the_process_of_ai_research_with_jungwon_byun_and_andreas_stuhlmuller_of_elicit"
duration_min: 56
hosts: ["Alessio Fanelli", "swyx"]
guests: ["Jungwon Byun", "Andreas Stuhlmüller"]
description: "Elicit's founders argue that AI research tools should decompose expert workflows into small, checkable steps and supervise that process, not just train models on outcomes."
tags: ["research-assistants", "task-decomposition", "evaluation", "literature-review", "ai-product"]
source_transcript: "latent-space/episodes/2024/04/2024-04-11-supervise-the-process-of-ai-research-with-jungwon-byun-and-andreas-stu.md"
draft: false
---

## Thesis

Jungwon Byun and Andreas Stuhlmüller, co-founders of Elicit, argue that trustworthy AI for research comes from breaking an expert's process into granular steps, training models to do each step robustly, and making every step easy for humans to evaluate. Because the product is built around the workflow rather than one model, they say new models such as GPT-4 improve Elicit without changing its shape.

## Key points

- **From Ought to Elicit.** Stuhlmüller started Ought as a nonprofit research lab after an MIT PhD and a Stanford postdoc; it ran experiments in 2018-2019 where people with less text had to judge the work of people who could read much more. The company later became a public benefit corporation with 12 staff.
- **Users asked for literature review.** The first product was a geopolitical forecasting assistant. After GPT-3, sign-up forms kept saying "literature review", so the team moved to automating systematic reviews, which Byun says typically take five people over a year and start from about 10,000 papers.
- **Cheaper, faithful summaries.** Byun says intern Charlie implemented Anthropic's constitutional AI paper in about four days to fine-tune an open source abstract summarizer, and later cut costs to a tenth. Stuhlmüller says closed models take most of the compute budget, open models a similar share of queries.
- **Notebooks over chat.** Byun calls notebooks, modelled on Jupyter-style computational notebooks, Elicit's fourth attempt at a composable interface. Stuhlmüller says notebooks let users define a process on a few papers and then rerun it over ten thousand.
- **Spend more, get better answers.** Stuhlmüller argues the AI field undervalues ways to turn willingness to pay into accuracy; a systematic review might justify around $100,000 of human-equivalent spend. Credits-based pricing and a high accuracy mode reflect that.
- **Evaluation as the user's job.** Byun expects people to shift from doing work to checking it, so Elicit cites source passages and flags model uncertainty, sometimes using a second model such as GPT 3.5 to grade answers.

## Quotes

> "you don't have great ways of converting willingness to spend into better answers" — Andreas Stuhlmüller

> "I wanna do more than generate ads with this." — Jungwon Byun
