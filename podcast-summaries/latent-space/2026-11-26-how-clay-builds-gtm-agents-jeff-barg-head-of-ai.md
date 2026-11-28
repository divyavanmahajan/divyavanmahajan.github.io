---
title: "How Clay Builds GTM Agents — Jeff Barg, Head of AI"
date: 2026-11-26
show: latent-space
url: "https://lspace.beehiiv.com/podcast/s/latent_space_the_ai_engineer_podcast/how_clay_builds_gtm_agents_jeff_barg_head_of_ai"
duration_min: 72
hosts: ["Alessio Fanelli", "swyx"]
guests: ["Jeff Barg"]
description: "Clay rebuilt its go-to-market agent around a coding-agent harness and CLI, and wants outside agents like Claude Code to work as well on Clay as its own agent does."
tags: ["go-to-market", "agents", "coding-agents", "model-routing", "evals", "sales"]
source_transcript: "latent-space/episodes/2026/11/2026-11-26-how-clay-builds-gtm-agents-jeff-barg-head-of-ai.md"
draft: false
---

## Thesis

Jeff Barg, Clay's head of AI, argues that Clay should be agentic go-to-market infrastructure rather than a walled garden. Its first-party agent was rebuilt as a coding agent that drives the Clay CLI in a cloud sandbox, but the goal is the same results whether customers use it or an external harness. The aim, he says, is to bring the shift Claude Code brought to engineering to go-to-market engineers.

## Key points

- **From Avenue to head of AI.** Barg joined about two years ago when Clay acquired Avenue, his five-person YC startup, at a time Clay had about 50 people; it is now around 600. He first built the Signals product, then moved to AI when only one engineer was working on it.
- **Claygents, Sculptor and the rebuild.** Claygents (from November 2023) research the web and fill table cells; Sculptor builds the workflows around them. Barg says Sculptor started as a tool loop on Sonnet 3.5 and was too constrained, so it was rebuilt on a coding agent built on Pi plus a data context layer called Audiences that joins CRM and Gong data.
- **Usage is near 50/50.** Barg says use of Clay through external harnesses versus Clay's own agent is much closer to 50/50 than he expected, and Clay does not try to make its agent markedly better than Clay plus Claude Code.
- **Routing over model pickers.** Users "hate" the model selector, so Clay plans an auto mode that routes per task; frontier models matter for orchestration, while qualification evals have been saturated for about a year. Barg thinks post-training only pays off at roughly 10 to 100 million in inference spend.
- **Cheap classification at scale.** He estimates that scoring every company in Clay's 40-million-company dataset against an ICP with a decision model like Jev would cost around 1,500 dollars.
- **Courage and limits.** Clay put about 25% of engineering on a month-long ChatGPT apps launch that OpenAI postponed two days before launch, then revived three or four days later. Barg says models still repeat failing CLI commands and cannot reliably diagnose their own traces, so the team still hand-writes skills.

## Quotes

> "So, like, we explicitly don't want our agent to be markedly better than just using Clay and Claude Code." — Jeff Barg

> "I feel very strongly that, you know, institutional courage is, uh, probably the most important thing right now at companies." — Jeff Barg
