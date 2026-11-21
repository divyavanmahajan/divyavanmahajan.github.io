---
title: "The Inventors of Deep Research"
date: 2025-02-18
show: latent-space
url: "https://lspace.beehiiv.com/podcast/s/latent_space_the_ai_engineer_podcast/the_inventors_of_deep_research"
duration_min: 62
hosts: ["Alessio Fanelli", "swyx"]
guests: ["Arush Selvan", "Mukund Sridhar"]
description: "Google's Gemini Deep Research leads explain how an editable research plan, iterative browsing and a post-trained model produce a report in minutes, and why users accept the wait."
tags: ["deep-research", "agents", "gemini", "evals", "long-context"]
source_transcript: "latent-space/episodes/2025/02/2025-02-18-the-inventors-of-deep-research.md"
draft: false
---

## Thesis

Arush Selvan (lead PM) and Mukund Sridhar (tech lead) of Gemini Deep Research argue that a research agent should be transparent about its plan, show the sources it reads, and spend minutes of compute exploring and verifying. They found, against Google's usual focus on latency, that users value the extra work when the output is worth it.

## Key points

- **Editable plan.** Deep Research first proposes a research plan the user can edit, which swyx likens to an editable chain of thought. Selvan admits most users just hit start, but says the plan still explains the report.
- **Iterative browsing.** Sridhar says the model runs parallel searches, reads pages more deeply, and reasons on earlier results before deciding the next step, then drafts and self-critiques the report. It runs on a post-trained version of Gemini 1.5 Pro.
- **Context versus RAG.** All browsed material stays in the 1-2 million token context for follow-ups; older tasks move to retrieval. Sridhar avoids RAG when a query has many attributes that a dot product handles poorly.
- **Evals.** The team tracks automatic behaviour metrics such as plan length and number of steps on a dev set, plus human evals for completeness and groundedness, built around an ontology of research behaviours from broad and shallow to narrow and deep.
- **Latency.** Selvan says they built a 15-minute hardcore mode but shipped a five-minute version, and expected users to drop off. swyx warns that slow agents get a pass only during a honeymoon phase.
- **Infrastructure and benchmarks.** An internal asynchronous platform keeps state and retries failures so users can close the tab and get a phone notification. Both guests say benchmarks like Humanity's Last Exam do not reflect the product.

## Quotes

> "In contrast to, like, all Google orthodoxy, we're actually gonna slow everything right down, and we're gonna hope that, like, users still stay." — Arush Selvan

> "Like, if I do great on HLE, that doesn't really mean I'm a great deep researcher." — Mukund Sridhar
