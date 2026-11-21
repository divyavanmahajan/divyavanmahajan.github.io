---
title: "[One Million AI Engineer Special] How Stanford Teaches AI-Native Engineering — Mihail Eric, Monaco"
date: 2026-11-08
show: latent-space
url: "https://lspace.beehiiv.com/podcast/s/latent_space_the_ai_engineer_podcast/one_million_ai_engineer_special_how_stanford_teaches_ai-native_engineering_mihail_eric_monaco"
duration_min: 121
hosts: ["Alessio Fanelli", "swyx"]
guests: ["Mihail Eric"]
description: "Mihail Eric's Stanford course has new graduates learn coding agents from the harness up and contribute to real open-source repos, because the entry-level bar is now close to senior."
tags: ["coding-agents", "ai-engineering", "education", "code-review", "software-factory"]
source_transcript: "latent-space/episodes/2026/11/2026-11-08-one-million-ai-engineer-special-how-stanford-teaches-ai-native-enginee.md"
draft: false
---

## Thesis

Mihail Eric, adjunct professor at Stanford and head of AI at Monaco, argues that well-trained AI-native engineers are very valuable to companies, but graduates now need to perform near senior level. His course, CS146S "The Modern Software Developer", now in its second run, teaches a practitioner's view of coding agents, from harness internals to the software factory. He says much of it is unsettled and expects to keep rewriting it.

## Key points

- **Ten-week arc.** Eric describes weeks on harness internals, context engineering, skills, agent configuration, agent-ready codebases, agentic code review, security, background agents, AI-native teams and the software factory. Students first build a coding agent in about 200 lines, then use MITMProxy to inspect Claude Code's real prompts.
- **Open-source partners.** Last year's nine assignments could mostly be one-shotted, so students now contribute to AI-focused repos whose maintainers review their code. Warp will run a version of its project as a factory that students help build. Eric says none of the students he surveyed still type code by hand.
- **Context and review.** Eric teaches a research-proposal-plan workflow similar to Dex's RPI for large codebases. He calls code review the new bottleneck and asks which changes can safely be auto-approved.
- **Monaco in practice.** Monaco, a Series B AI-native sales platform for startups, built Monocoder on Coder and a Slack bot called Hal, but chose Devin for code review after engineers asked for it. Eric's build-versus-buy rule comes from this experience.
- **Host views.** swyx argues that code touching data storage, billing and auth deserves the most security care. He says he will not hire anyone who hasn't gone through "psychosis" with agents and come out the other side. His advice to students: build benchmarks and evals; a co-host adds that SWE-bench began as an undergraduate project.

## Quotes

> "I really believe that every company needs you, but the floor is much higher, right?" — Mihail Eric

> "you buy to learn and you build to keep" — Mihail Eric
