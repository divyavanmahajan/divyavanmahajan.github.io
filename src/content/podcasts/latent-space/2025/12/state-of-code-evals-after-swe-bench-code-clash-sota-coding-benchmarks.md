---
title: >-
  [State of Code Evals] After SWE-bench, Code Clash & SOTA Coding Benchmarks
  recap — John Yang
description: >-
  SWE-bench creator John Yang argues coding evals should move beyond isolated
  unit-test tasks toward long-horizon, competitive development like CodeClash,
  while hosts push for interactivity.
pubDate: '2025-12-31'
show: latent-space
url: >-
  https://lspace.beehiiv.com/podcast/s/latent_space_the_ai_engineer_podcast/state_of_code_evals_after_swe-bench_code_clash_sota_coding_benchmarks_recap_john_yang
durationMin: 18
hosts:
  - Alessio Fanelli
  - swyx
guests:
  - John Yang
tags:
  - coding-benchmarks
  - swe-bench
  - evals
  - coding-agents
draft: false
---
## Thesis

John Yang, who created SWE-bench, argues that coding evaluation needs to move past independent tasks checked by unit tests. His new benchmark, CodeClash, measures long-horizon development where each model's earlier choices shape what comes next. One host pushes back that real users want quick back-and-forth with an agent rather than long autonomous runs. Yang partly agrees and favours human-AI collaboration.

## Key points

- **SWE-bench's spread.** Yang says the benchmark, released in October 2023, got little use until Cognition launched Devin. The team's own follow-ups, SWE-bench Multimodal and Multilingual (nine languages across about 40 repos), deliberately add more repos to move past the Django-heavy original. SWE-bench Pro was made by a separate group.
- **CodeClash.** Two or more models each maintain their own codebase through a tournament. They edit their code each round, then compete in an arena such as the Halite programming game. The next goal is arenas with economic value.
- **Related benchmarks.** Yang highlights SWE-efficiency (making code faster without changing behaviour), AlgoTune, SciCode, CriticalPoint, SecBench, SREBench and user-simulator benchmarks such as TauBench and VendingBench. He also mentions METR's use of SWE-bench Verified to estimate how long a task an agent can handle.
- **Impossible tasks.** In the debate over unsolvable TauBench tasks, a host suggests that benchmarks should include impossible tasks on purpose to catch cheating. Yang cites ImpossibleBench, where models mostly claimed success on altered SWE-bench Verified issues that could not be solved.
- **What's next.** Yang expects more SWE-bench variants and later versions of Terminal-Bench. He also wants better user simulators, since academics lack the interaction data Cognition and Cursor collect. A host says Cognition is working on codebase understanding and automatic context engineering.

## Quotes

> "I don't like unit tests as a form of verification" — John Yang

> "I definitely don't believe in this idea of just kind of getting rid of the human." — John Yang
