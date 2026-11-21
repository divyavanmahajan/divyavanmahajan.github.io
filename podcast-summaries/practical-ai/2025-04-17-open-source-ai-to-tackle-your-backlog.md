---
title: "Open source AI to tackle your backlog"
date: 2025-04-17
show: practical-ai
episode: 310
url: "https://share.transistor.fm/s/c34dea01"
duration_min: 42
hosts: ["Chris Benson", "Daniel Whitenack"]
guests: ["Robert Brennan", "Graham Neubig"]
description: "All Hands AI argues a single open source coding agent, supervised like a junior employee, can handle production work for senior engineers if code review stays in place."
tags: ["coding-agents", "open-source", "software-development", "openhands", "agentic-workflows"]
source_transcript: "practical-ai/episodes/2025/04/2025-04-17-open-source-ai-to-tackle-your-backlog.md"
draft: false
---

## Thesis

Robert Brennan (CEO) and Graham Neubig (chief scientist) of All Hands AI argue that agentic coding tools now suit senior engineers on production code bases, not just prototypes. Their open source agent, OpenHands, loops through writing, running and checking code. Brennan says it needs the same code review discipline as a human colleague. Neubig argues that open source agent frameworks will keep pace with closed ones because academia wants to work on them.

## Key points

- **Mapping the market.** Brennan sorts tools along two axes: rapid prototyping (Lovable, Bolt, v0) versus production work, and tactical autocomplete (GitHub Copilot) versus agents that work alone for 5-15 minutes. He places OpenHands at the production, agentic end of both.
- **One agent, not many.** Neubig says an early multi-agent design with delegation was less effective and harder to maintain than a single agent that can write code, browse and execute. Task-specific prompts and tools are loaded through "micro agents".
- **Code rot without review.** Brennan describes a common failure: a novice reaches a decent MVP, then the code base degrades as the agent duplicates functions or grows them to thousands of lines. He compares adopting agents to learning to delegate as a new manager: "trust but verify".
- **The agent as top committer.** Neubig says OpenHands made 209 commits to its own repository over three months, against 142 for the next contributor. He lists reliable file editing, avoiding repeated loops and test writing as key model abilities, and credits Claude with being strong at these.
- **Own models and deployment.** The hosted product runs on Claude 3.7. Neubig cites cost and customisation as reasons for releasing their own v0.1 model; Brennan describes a model trained to spot when the agent goes off track. Enterprises can self-host on AWS with Bedrock, while collaboration and compliance features stay closed source.
- **Benchmarks.** Neubig says their evaluation harness covers 20 benchmarks beyond SWE-bench, including web navigation and fixing pull requests with failing tests and merge conflicts.

## Quotes

> "If you're not looking over its shoulder and critiquing its work, the code base will just grow into this monster, and you'll have to throw it all away" — Robert Brennan

> "We have an option where software development is drastically changed for us by other people, or there's the option where we do it ourselves together." — Graham Neubig
