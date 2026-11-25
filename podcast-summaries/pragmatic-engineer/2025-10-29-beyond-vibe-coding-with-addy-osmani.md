---
title: "Beyond Vibe Coding with Addy Osmani"
date: 2025-10-29
show: pragmatic-engineer
url: "https://newsletter.pragmaticengineer.com/p/beyond-vibe-coding-with-addy-osmani"
youtube: "https://www.youtube.com/watch?v=dHIppEqwi0g"
duration_min: 68
hosts: ["Gergely Orosz"]
guests: ["Addy Osmani"]
description: "Addy Osmani argues that vibe coding suits prototypes, while production work needs AI-assisted engineering where the human plans, reviews and understands every change the model makes."
tags: ["ai-assisted-coding", "vibe-coding", "code-review", "coding-agents", "software-engineering-careers"]
source_transcript: "pragmatic-engineer/episodes/2025/10/2025-10-29-beyond-vibe-coding-with-addy-osmani.md"
draft: false
---

## Thesis

Addy Osmani, Head of Chrome Developer Experience at Google and author of Beyond Vibe Coding, tells Gergely Orosz that vibe coding and AI-assisted engineering are different things. Vibe coding is fine for prototypes and learning, but for production code the engineer must stay in control: write specs, test, read the model's reasoning, and understand what ships. Orosz concludes that once you stop understanding what the LLM does, it is in charge, not you.

## Key points

- **Spec-driven development and tests.** Osmani still vibe codes throwaway tools and prototypes to share ideas, but for real features he writes requirements first and uses tests to catch the moment output "goes off the rails". His team's Chrome DevTools MCP gives agents "eyes" on the rendered page and console errors.
- **The 70% problem.** Osmani says LLMs get roughly 70% of an app built quickly but struggle with the last 30%: "two steps back" regressions, hidden maintainability costs, and security issues such as leaked API keys and XSS. Experienced engineers finish that last stretch; juniors tend to keep re-prompting.
- **Review is the new bottleneck.** He cites a study showing human review becomes the constraint as AI raises code velocity, and warns that AI reviewing AI-written code is "a slippery slope". He treats an agent's approval as one signal, like a junior's LGTM or green CI.
- **Background and parallel agents.** He is most interested in asynchronous agents (Jules, Codex, GitHub's experiments) for tests, migrations and small changes like dark mode, but says finite attention limits how many agents one person can supervise. Orosz compares this to how senior tech leads already orchestrate juniors.
- **Keeping critical thinking.** Orosz admits he is becoming less critical when accepting suggestions. Osmani suggests deliberately coding without AI on some tasks, and using LLMs to explain an unfamiliar codebase before prompting features into existence.
- **Leading through change.** Osmani writes a weekly internal newsletter on AI developments for his team, and tells enterprise teams waiting for approved tools to learn through side projects in the meantime.

## Quotes

> "you should probably only be committing code to your repo that you can fully explain to somebody else." — Addy Osmani

> "AI definitely raises the floor, but it also raises the ceiling too." — Addy Osmani
