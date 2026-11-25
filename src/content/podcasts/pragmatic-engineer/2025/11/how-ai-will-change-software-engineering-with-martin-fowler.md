---
title: How AI will change software engineering – with Martin Fowler
description: >-
  Martin Fowler argues that AI's biggest change is the move from deterministic
  to non-deterministic tools, so testing, refactoring, thin slices and human
  review matter more, not less.
pubDate: '2025-11-19'
show: pragmatic-engineer
url: 'https://newsletter.pragmaticengineer.com/p/martin-fowler'
youtube: 'https://www.youtube.com/watch?v=CQmI4XKTa0U'
durationMin: 109
hosts:
  - Gergely Orosz
guests:
  - Martin Fowler
tags:
  - ai-assisted-coding
  - vibe-coding
  - refactoring
  - legacy-modernization
  - software-architecture
draft: false
---
## Thesis

Martin Fowler, Chief Scientist at Thoughtworks, tells Gergely Orosz that LLMs are the biggest shift of his career, comparable to the move from assembly to high-level languages. He argues the key change is not a higher level of abstraction but the move from determinism to non-determinism. Engineers therefore need to think in tolerances, verify everything, and keep the learning loop that vibe coding removes.

## Key points

- **Tolerances.** Fowler compares this to his wife's work as a structural engineer, where you design beyond what the math requires. He expects "noticeable crashes", especially in security, from teams that skate too close to the edge.
- **Where it works.** He names fast prototypes and throwaway explorations, plus understanding legacy code: build a graph database from semantic analysis and query it in a RAG-like way. The Thoughtworks Technology Radar puts legacy understanding with GenAI in its Adopt ring.
- **Vibe coding.** Fowler says it is fine for disposable work but not for anything long-lived. He describes an LLM-generated SVG so convoluted it could not be tweaked, only thrown away. He also cites James Lewis, who spent 1.5 hours and 10% of his monthly Cursor tokens renaming a class.
- **Working practices.** He recommends very thin slices, treating each one as a PR from an untrustworthy collaborator, and rigorous tests, citing Simon Willison and Birgitta Böckeler. On spec-driven development, he warns against writing the whole spec up front as in waterfall. He points to Unmesh Joshi's work on co-building a precise language with the LLM.
- **Refactoring returns.** Fowler expects refactoring to matter more as AI produces lots of working but questionable code. He favors combining LLMs with deterministic tools, as Adam Tornhill does.
- **Industry outlook.** He says the end of zero interest rates, not AI, caused the downturn: Thoughtworks grew about 20% a year until 2021. He calls AI "clearly bubbly" but valuable, and advises juniors to find a good mentor.

## Quotes

> "You've got to treat every slice as a PR from a rather dodgy collaborator who's very productive in the lines of code sense of productivity." — Martin Fowler

> "If you're not looking at the output, you're not learning." — Martin Fowler
