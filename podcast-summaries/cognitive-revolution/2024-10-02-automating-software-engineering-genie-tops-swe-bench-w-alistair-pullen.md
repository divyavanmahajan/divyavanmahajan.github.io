---
title: "Automating Software Engineering: Genie Tops SWE-Bench, w/ Alistair Pullen, from Latent.Space podcast"
date: 2024-10-02
show: cognitive-revolution
url: "https://www.cognitiverevolution.ai/automating-software-engineering-genie-tops-swe-bench-w-alistair-pullen-from-latent-space-podcast/"
youtube: "https://www.youtube.com/watch?v=mij1OIVmVw0"
duration_min: 70
hosts: ["Nathan Labenz"]
guests: ["Alessio", "Swyx", "Alistair Pullen"]
description: "Cosine's Alistair Pullen explains how fine-tuning on data that reconstructs how human engineers work, not just final code, got Genie to state-of-the-art SWE-bench scores."
tags: ["coding-agents", "swe-bench", "fine-tuning", "synthetic-data", "code-retrieval"]
source_transcript: "cognitive-revolution/episodes/2024/10/2024-10-02-automating-software-engineering-genie-tops-swe-bench-w-alistair-pullen.md"
draft: false
---

## Thesis

In this Latent Space crossover, hosted by Swyx and Alessio and re-shared by Nathan Labenz, Cosine co-founder Alistair Pullen argues that writing code and doing software engineering are different skills. Pull requests are a lossy record of the work behind them, so Cosine built a pipeline that forensically reconstructs how engineers retrieve, plan, code and test, then fine-tuned OpenAI models heavily on that data. Labenz presents it as an ambitious example of his own automation playbook: decompose the task, curate gold examples, add synthetic reasoning, fine-tune.

## Key points

- **Origin.** Pullen and co-founder Sam, both mobile developers, started with a flimsy GPT-3 app builder on 4,000-token contexts; YC disliked the idea, and they pivoted to a code-base retrieval tool before the 128k-context GPT-4 Turbo fine-tuning access made Genie feasible.
- **Retrieval.** Plain embedding search on code works poorly, Pullen says; generating a hypothetical code snippet before embedding helped, and teaching the model to use the language server (go-to-definition) lifted retrieval from about 54% into the sixties, with about 66% of needed lines found overall.
- **Data and fine-tuning.** Raw open-source data was dominated by README edits and argumentative review comments and needed heavy cleaning. Cosine trains on billions of tokens with larger LoRA adapters than public ones; the language mix is led by JavaScript and Python at 21% each across 15 languages.
- **Self-improvement loop.** Cosine injects synthetic runtime errors via the AST and lets earlier models attempt tasks, then trains on the diff back to the correct state so Genie learns to iterate.
- **Benchmarks.** Genie scored 30% on full SWE-bench but is off the leaderboard because new trajectory requirements would expose its training data; on SWE-bench Verified it solved 219 of 500 (43.8%). Pullen also found performance degrades roughly linearly across the context window.
- **Product.** Genie runs tests through customers' GitHub CI, can ask clarifying questions, and can be fine-tuned per repository. Pullen credits Cursor for getting UX right.

## Quotes

> "The certainty of code writing is so much more certain than every other aspect of Genie's loop." — Alistair Pullen

> "the model should do the coding and you should be in charge of guiding the model." — Alistair Pullen
