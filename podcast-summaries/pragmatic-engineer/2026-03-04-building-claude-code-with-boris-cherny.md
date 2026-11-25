---
title: "Building Claude Code with Boris Cherny"
date: 2026-03-04
show: pragmatic-engineer
url: "https://newsletter.pragmaticengineer.com/p/building-claude-code-with-boris-cherny"
youtube: "https://www.youtube.com/watch?v=julbw1JuAz0"
duration_min: 97
hosts: ["Gergely Orosz"]
guests: ["Boris Cherny"]
description: "Boris Cherny argues that once models write nearly all code, engineering shifts to planning, parallel agents, layered verification and rapid prototyping, and rewards generalists over specialists."
tags: ["claude-code", "ai-coding", "coding-agents", "code-review", "engineering-culture"]
source_transcript: "pragmatic-engineer/episodes/2026/03/2026-03-04-building-claude-code-with-boris-cherny.md"
draft: false
---

## Thesis

Boris Cherny, creator of Claude Code at Anthropic, tells Gergely Orosz that he no longer writes code by hand: since Opus 4.5, Claude Code writes all of his code and, he says, about 80% of Anthropic's on average. His argument is that the engineer's job moves to planning, running many agents in parallel, building verification around them and prototyping instead of writing specs, and he compares the moment to the printing press, which turned scribes into a much larger class of writers.

## Key points

- **Parallel workflow.** Cherny runs five terminal tabs with separate checkouts, starts each Claude in plan mode, iterates on the plan and then lets it implement, shipping 20-30 pull requests a day. He also uses the desktop app's worktree support and starts agents from the iOS app.
- **Layered review.** Every pull request at Anthropic gets a first review from Claude via the agent SDK in CI, which Cherny says catches about 80% of bugs, and a human always does a second pass. He adds type checkers, linters and best-of-N passes with deduplicating agents.
- **Simple architecture.** Claude Code is a core query loop, a few tools and a TUI, plus substantial safety work. Cherny says a local vector database for RAG was dropped because indexes drifted and raised permission questions; model-driven glob and grep worked better.
- **Safety as Swiss cheese.** For prompt injection he describes three layers: model alignment (Opus 4.6), runtime classifiers, and summarising fetched web pages through a subagent. Permission prompts date from the first internal release in September 2024.
- **Prototypes over PRDs.** Cherny says the team rarely writes specs; agent teams went through hundreds of prototype versions, and Cowork was built in about 10 days, with much of the complexity in a shipped virtual machine and safety guardrails for non-technical users.
- **Skills that matter.** He expects less value in strong opinions on code style and languages, and more in being methodical, hypothesis-driven, curious across disciplines and good at context switching, calling this "the year of the generalist."

## Quotes

> "once there is a good plan it just it will one-shot the implementation almost every time" — Boris Cherny

> "It turned out that agentic search just outperformed everything. And when I say agentic search, it's a fancy word for glob and grep. That's all it is." — Boris Cherny
