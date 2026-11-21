---
title: "Breaking Boundaries: AI CoScientist to Accelerate Science Research with Gabe Gomes, Professor at CMU"
date: 2024-01-12
show: cognitive-revolution
url: "https://www.cognitiverevolution.ai/breaking-boundaries-ai-coscientist-to-accelerate-science-research-with-gabe-gomes-professor-at-cmu/"
youtube: "https://www.youtube.com/watch?v=_GbZn7hJdfc"
duration_min: 111
hosts: ["Nathan Labenz"]
guests: ["Gabe Gomes"]
description: "Gabe Gomes argues that GPT-4 agents wired to cloud labs can turn natural-language requests into real chemistry experiments, removing manual grunt work so scientists can focus on the questions."
tags: ["ai-for-science", "agents", "chemistry", "lab-automation", "ai-safety"]
source_transcript: "cognitive-revolution/episodes/2024/01/2024-01-12-breaking-boundaries-ai-coscientist-to-accelerate-science-research-with.md"
draft: false
---

## Thesis

Carnegie Mellon professor Gabe Gomes argues that Coscientist, the GPT-4 agent his group described in Nature, shows that language models can plan, write code for and run physical experiments, starting from a plain-English request. He presents it as a way to strip out the manual work that slows chemistry, not as a replacement for expert chemists. Nathan Labenz, a former chemistry research assistant, welcomes the upside but presses on thresholds and the risks of automating science.

## Key points

- **Built in under a month.** Gomes read the GPT-4 white paper on 14 March 2023; with student Daniil Boiko he had a working prototype soon after, and the preprint is dated 11 April.
- **Cloud labs as the hands.** Gomes, who discloses he is AI scientific expert for Emerald Cloud Lab, describes cloud labs as warehouses of instruments run by robots and technicians through code. Early tests used open-source Opentrons liquid handlers.
- **Modular agent design.** A planner LLM directs modules for web search, code execution in Docker (to avoid arithmetic errors), documentation retrieval and hardware APIs. Gomes says splitting planning from execution works better than putting everything into one large context window.
- **Six demonstrated tasks.** Labenz lists them, from planning known syntheses to optimising a palladium-catalysed reaction. Gomes says the system is field-agnostic, hence "coscientist" rather than "cochemist", and handled an instrument released after GPT-4's training cutoff.
- **Optimisation results.** In a deliberately limited 20 iterations, Gomes says Coscientist matched or beat a Bayesian optimiser, while still making basic mistakes. He also calls for negative results to be published.
- **Release and safety.** Gomes withheld the riskiest parts of the system and says he lost sleep over misuse, but opposes holding back LLM development, comparing the issue to gain-of-function research and deferring to policy specialists.

## Quotes

> "So these are very powerful intelligent machines that sometimes make absolutely stupid mistakes." — Gabe Gomes

> "And we saw that we ought to be responsible but not alarmist about the possibilities here." — Gabe Gomes
