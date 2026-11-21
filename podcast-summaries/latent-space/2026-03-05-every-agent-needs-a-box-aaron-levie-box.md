---
title: "Every Agent Needs a Box — Aaron Levie, Box"
date: 2026-03-05
show: latent-space
url: "https://lspace.beehiiv.com/podcast/s/latent_space_the_ai_engineer_podcast/every_agent_needs_a_box_aaron_levie_box"
duration_min: 77
hosts: ["Alessio Fanelli", "swyx"]
guests: ["Aaron Levie"]
description: "Box CEO Aaron Levie argues enterprise knowledge work lacks the conditions that made AI coding take off, so companies must reorganise data, permissions and workflows around agents."
tags: ["enterprise-ai", "knowledge-work", "agent-identity", "context-engineering", "agent-evals"]
source_transcript: "latent-space/episodes/2026/03/2026-03-05-every-agent-needs-a-box-aaron-levie-box.md"
draft: false
---

## Thesis

Aaron Levie, CEO of Box, argues that agents will make dormant enterprise content valuable again, and that there will be an order of magnitude more agents than people. Knowledge work, however, lacks almost every property that let AI coding reach escape velocity. He expects a multi-year effort in which companies adapt their workflows, documentation and access controls to agents, just as developers adapted to coding agents. Swyx and guest host Chroma's CEO push back on how much reorganisation customers will accept.

## Key points

- **Why coding went first.** Levie lists the differences. Engineers can see most of the codebase, the work is pure text, models are trained heavily on code, AI labs use their own coding tools daily, and developers are technical and share practices online. A banker, by contrast, sees a sliver of the relevant data, much of it in calls and meetings, behind permission walls.
- **Agent identity is hard mode.** Today's "easy mode" is an agent acting as you in Claude Code or Cursor. Autonomous agents need a new model: they have no privacy, their creator likely carries the liability, and collaborators' data must stay separate. Levie expects "spectacularly crazy" prompt-injection incidents, and Box will take a view on identity because file access is the core use case.
- **Context engineering at scale.** With perhaps 60,000 reliable tokens of context against 10 million documents, search and judgment matter most. His internal test asks an agent for ten office addresses that exist in no single document. Weaker models stop at six, while Opus 4.5 and 4.6 show better judgment about when to keep searching.
- **Slop costs more outside code.** A contract regenerated 20 times with 3% variation creates legal risk, and a model changing fonts in one slide is instantly visible. Lawyers can be disbarred; engineers cannot.
- **Evals everywhere.** Box runs a private, held-out eval across about ten industries and saw roughly a 15-point jump between Sonnet 4.5 and 4.6. Levie expects every enterprise to evaluate tasks such as RFP generation and invoice processing.
- **Founder mode and media.** He stays hands-on with the "existential" agent work while relying on process for most of the company, and argues every company must now act as a media company and DevRel is the hottest job.

## Quotes

> "The agent didn't really adapt to how we work. We basically adapted to how the agent works." — Aaron Levie

> "everybody's just realizing that every agent needs a box." — Aaron Levie
