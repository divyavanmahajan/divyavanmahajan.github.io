---
title: "⚡ [AIE CODE Preview] Inside Google Labs: Building The Gemini Coding Agent — Jed Borovik, Jules"
date: 2025-11-10
show: latent-space
url: "https://lspace.beehiiv.com/podcast/s/latent_space_the_ai_engineer_podcast/aie_code_preview_inside_google_labs_building_the_gemini_coding_agent_jed_borovik_jules"
duration_min: 44
hosts: ["Alessio Fanelli", "swyx"]
guests: ["Jed Borovik"]
description: "Jed Borovik explains how Google Labs builds Jules for long-running, autonomous coding agents, and why simpler scaffolds, agentic search and elastic demand for software shape that bet."
tags: ["coding-agents", "jules", "gemini", "agent-scaffolding", "software-engineering"]
source_transcript: "latent-space/episodes/2025/11/2025-11-10-aie-code-preview-inside-google-labs-building-the-gemini-coding-agent-j.md"
draft: false
---

## Thesis

Jed Borovik, who leads Jules at Google Labs, says the team builds for where coding agents are heading: powerful, autonomous agents that run for hours or days in their own environment. He argues that better models make agent scaffolding simpler, and that AI coding will increase demand for software engineers rather than replace them. swyx, previewing the AI Engineer Code summit in New York, adds his view on what should follow "vibe coding".

## Key points

- **Stable Diffusion moment.** Borovik spent nine years at Google, much of it on Search news and freshness. He saw artists either reject Stable Diffusion or use it as a tool, and chose to treat coding agents as the tool.
- **Autonomous and ambient.** Jules has its own VM, an API, a recently launched CLI and integration with the Gemini CLI and GitHub's Agent HQ. One user triggers Jules from site events and auto-merges its pull requests with a GitHub Action.
- **Less scaffolding.** Early Gemini models needed complex sub-agent systems, which Borovik calls a "crutch". Agentic search is replacing embedding-based RAG; swyx would keep semantic search as one tool alongside grep.
- **Long sessions.** Jules stores session data for thirty days, and users hit the limit, which the team had not expected. Context goes up to two million tokens, but compaction is still an active research area.
- **Specify and verify.** Borovik frames the problem as specifying what you want and verifying what you got, with images as input today. swyx thinks spec-driven development risks becoming waterfall and favours interactive planning, the approach Cognition has backed.
- **Jobs.** Borovik cites Jevons paradox: farming fell to under one percent of Americans, but demand for software, like electricity, is elastic. swyx says the New York summit accepted about 1 in 23 applicants and calls the hallway track the most important one.

## Quotes

> "I think one of the things we've seen is scaffolds get simpler and simpler over time as the models get better." — Jed Borovik

> "I don't really buy this, like, you know, that we're not gonna hire more software engineers story." — Jed Borovik
