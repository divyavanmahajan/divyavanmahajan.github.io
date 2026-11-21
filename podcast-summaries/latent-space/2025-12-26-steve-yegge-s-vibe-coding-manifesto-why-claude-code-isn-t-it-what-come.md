---
title: "Steve Yegge's Vibe Coding Manifesto: Why Claude Code Isn't It & What Comes After the IDE"
date: 2025-12-26
show: latent-space
url: "https://lspace.beehiiv.com/podcast/s/latent_space_the_ai_engineer_podcast/steve_yegge_s_vibe_coding_manifesto_why_claude_code_isn_t_it_what_comes_after_the_ide"
duration_min: 37
hosts: ["Alessio Fanelli", "swyx"]
description: "Steve Yegge argues that coding in an IDE is ending, that today's coding agents are too hard for most engineers, and that agent orchestrators will turn software into factory farming."
tags: ["vibe-coding", "coding-agents", "agent-orchestration", "developer-productivity", "ide"]
source_transcript: "latent-space/episodes/2025/12/2025-12-26-steve-yegge-s-vibe-coding-manifesto-why-claude-code-isn-t-it-what-come.md"
draft: false
---

## Thesis

Steve Yegge, recorded live at the AI Engineer Summit, argues that engineers still writing code in an IDE are falling behind, and that agentic coding is a hard skill that takes on the order of a year of practice to trust. He thinks Claude Code and similar tools are too hard for most developers, and that the next step is an orchestration dashboard that runs many agents at once: the "John Deere era" of factory-farmed code.

## Key points

- **Senior engineers resist most.** Yegge says engineers with 12-15 years of experience push back hardest, while juniors and non-engineers have already adopted vibe coding. He cites an anecdote from OpenAI's dev-prod director, Andrew Glover: a roughly 10x performance gap between engineers who use agents and those who don't.
- **Trust takes 2,000 hours.** Yegge cites a study, pulled up by co-author Gene Kim, that users need about a year (2,000 hours) with AI before they can predict what it will do. He warns against treating an agent as a teammate: one changed his production password.
- **Claude Code ain't it.** Yegge estimates 80-90% of programmers do not use Claude Code or anything like it, because reading long streams of output and diffs is too hard for them. He is building VC (Vibe Coder), an orchestrator with an activity feed, and points to Beads and Jeffrey Emanuel's MCP Agent Mail, where agents message each other and reserve files.
- **Merging is the wall.** When every developer is 10x as productive, parallel 30,000-line changes collide. Yegge names Graphite as best placed to solve this and mentions one company whose fix is one engineer per repo.
- **Rewrite instead of fix.** Yegge says Joel Spolsky's rule of never rewriting code no longer holds for a growing class of code, because LLMs do better starting from scratch.
- **Models and open source.** He expects open-source models, about seven months behind the frontier, to reach Gemini 3 level by next summer, and repeats a claim that models will be 16 times smarter in three years.

## Quotes

> "So the orchestrators are gonna be about not keeping the agent on the rails but keeping all of your agents on the rails and communicating with each other." — Steve Yegge

> "We will still get to factory farming code with today's models' capabilities" — Steve Yegge
