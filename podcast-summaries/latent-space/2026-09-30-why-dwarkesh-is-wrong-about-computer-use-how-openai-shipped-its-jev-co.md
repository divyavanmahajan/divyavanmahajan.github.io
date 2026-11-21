---
title: "Why Dwarkesh is Wrong about Computer Use + How OpenAI shipped its Jev competitor in 1 Week"
date: 2026-09-30
show: latent-space
url: "https://www.latent.space/p/devday-2026"
duration_min: 39
hosts: ["Alessio Fanelli", "swyx"]
guests: ["Ari", "Nikunj"]
description: "Recorded at OpenAI DevDay: OpenAI staff argue computer use has changed completely in a year, and explain how the Decisions API went from idea to launch in about a week."
tags: ["computer-use", "agents", "openai", "developer-platform", "inference"]
source_transcript: "latent-space/episodes/2026/09/2026-09-30-why-dwarkesh-is-wrong-about-computer-use-how-openai-shipped-its-jev-co.md"
draft: false
---

## Thesis

In a DevDay special, swyx and Alessio Fanelli talk to two OpenAI leads. Ari, who leads product and engineering for computer-use agents, disputes the claim by "one of the leading AI podcasts" that computer use has not advanced in two years. He says it is now faster than the average human at most tasks. Nikunj, product lead for the API, explains how the Decisions API, inspired by Jev, was built in about a week on existing model weights.

## Key points

- **DevDay launches.** Ari lists Dots (personal assistants that each get a Linux virtual computer in the cloud), GPT 6.1 Sol (a fifth of Astra's cost, a seventh for computer use), computer use in the Agents API, app shots, and native Mac computer use.
- **What changed.** Ari, who worked on Shortcuts at Apple and co-founded Skye before joining OpenAI, says models now debug and retry instead of stalling. Agents write JavaScript to perform several actions at once and mix screenshots, accessibility trees, the DOM and Playwright. Accessibility tech built for screen readers turns out to suit LLMs.
- **Remaining bottlenecks.** Ari says the next goal is superhuman speed. Benchmark time is now often spent waiting for sites such as doordash.com to load, or for customer-service replies. An agent ordering from his meal-prep service took 15 minutes, where he needed two hours.
- **Agents testing their own code.** Ari's favourite use case is an agent testing the software it just built, so the human is no longer QA. He advises developers to use OpenAI's harness, because the models are trained on it, and to ask for consent before payments.
- **Decisions API.** Nikunj says it runs on the same Luna weights with constrained structured output, an inference stack tuned for time to first token, and parallel batched questions. It was not on the roadmap four weeks earlier. swyx notes that around 100 Jev clones appeared, and argues that speed, accuracy and calibrated confidence matter more than the API shape.
- **Platform plumbing.** Nikunj describes async function calling, mid-turn steering over WebSockets, Ultrafast inference, 30-minute cache-hit guarantees (12 hours in preview), cache pre-warming and server-side compaction. An open question is how many higher-level primitives to build into the API.

## Quotes

> "now computer use is, like, faster at accomplishing tasks than, like, the average human probably in, in most cases." — Ari

> "We're like building this purely on top of the same Luna weights that we have." — Nikunj
