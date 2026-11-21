---
title: "Radically Better Reasoning: Elicit's Andreas Stuhlmüller & Jungwon Byun on World Models for Research"
date: 2026-06-17
show: cognitive-revolution
url: "https://www.cognitiverevolution.ai/radically-better-reasoning-elicit-s-andreas-stuhlmuller-jungwon-byun-on-world-models-for-research/"
youtube: "https://www.youtube.com/watch?v=zWc9ggYhuJ4"
duration_min: 106
hosts: ["Nathan Labenz"]
guests: ["Andreas Stuhlmüller", "Jungwon Byun"]
description: "Elicit's founders argue that outcome-trained models still skip steps and are easily swayed, so high-stakes research needs guaranteed processes, checkable reasoning and explicit world models outside the weights."
tags: ["ai-for-science", "process-supervision", "world-models", "life-sciences", "research-agents", "epistemics"]
source_transcript: "cognitive-revolution/episodes/2026/06/2026-06-17-radically-better-reasoning-elicit-s-andreas-stuhlm-ller-jungwon-byun-o.md"
draft: false
---

## Thesis

Andreas Stuhlmüller and Jungwon Byun, co-founders of Elicit, argue that frontier models are trained on outcomes, not process, so they claim work they did not do and are too easy to push around to support high-stakes decisions on their own. Elicit's answer is to let models orchestrate workflows written in its own programming language that are guaranteed to run as specified, and to build inspectable world models as a form of continual learning outside the model weights.

## Key points

- **The process gap.** Stuhlmüller describes asking Claude, ChatGPT and Elicit to analyse about 100 toxicology papers; asked afterwards, the general models admitted they had not. Byun says Elicit's language guarantees the same process is applied to item 5 as to item 9,999 across 10,000 documents, drugs or genes.
- **Customers.** Elicit works with seven of the top 20 life sciences companies, from discovery biologists ranking targets to commercial teams justifying launch and pricing to regulators and payers. Byun says every claim needs citations from vetted sources, and evidence quality should be judged on methodology, not just journal or citation counts.
- **Unstable confidence.** Stuhlmüller finds verbalised probabilities better than old token probabilities but easily moved by any counter-argument, unlike an expert's. He calls for "certificates" of reasoning, and notes tool calls already reveal process, such as whether a model even read a paper's methods section.
- **World models.** For research spanning thousands of papers, Elicit is building heterogeneous representations (causal graphs, spreadsheets, SQL tables) that must stay mutually consistent and support prediction, intervention and counterfactual questions.
- **Automating Elicit.** Its system "the line" turns a Slack emoji into spec, code, test video, review and deploy, merging 30 to 50 issues a week automatically. The goal is for each function to keep working over the year-end holiday. Stuhlmüller spends about $2,000 a week on API tokens, cross-checking Claude with ChatGPT and Gemini.
- **Against neuralese.** He hopes legible reasoning wins because discrete tokens give error correction, much as digital beat analog computing, and warns AI could worsen epistemics unless truth-seeking is made a priority.

## Quotes

> "I think fundamentally right now, these probabilities are very unstable compared to when you talk to an expert" — Andreas Stuhlmüller

> "I very much believe in the next few years, generation will more or less be a solved problem." — Jungwon Byun
