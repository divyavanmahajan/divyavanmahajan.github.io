---
title: Abundant Intelligence at the Midwest AI Summit
description: >-
  Three Midwest AI Summit talks argue that reliable AI comes from giving the LLM
  a narrow job, building with the people who will use it, and matching agent
  autonomy to real constraints.
pubDate: '2026-10-29'
show: practical-ai
episode: 378
url: 'https://share.transistor.fm/s/37a0c3e9'
youtube: 'https://www.youtube.com/watch?v=pLNuhMQMxd8'
durationMin: 54
hosts:
  - Daniel Whitenack
guests:
  - Kevin Solorio
  - Heidi Porter
  - Chris Shinkle
  - Andrew Dunlap
tags:
  - ai-workflows
  - guardrails
  - evals
  - ai-adoption
  - ai-assisted-development
draft: false
---
## Thesis

Daniel Whitenack, emcee of the second Midwest AI Summit, shares three talks with a common message: AI projects fail less because of the model than because of how it is placed in the work. Heidi Porter argues for choosing the right mechanism per task with real guardrails, Kevin Solorio for building agents with frontline workers rather than for them, and Chris Shinkle and Andrew Dunlap of SEP for picking a level of agent autonomy that fits a team's constraints.

## Key points

- **Do not ask the LLM to do everything.** Porter (Moyer Group AI) says pilots stall when the LLM is asked to hold data, decide and check its own work. She separates the mechanism (rules, classical ML, a decision model, or an LLM) from three safeguards: guardrails, evals and observability. A rule written in a prompt, she stresses, is not enforced.
- **Three working examples.** A peer-reviewed rubber hose line uses a YOLO-style vision model for defects, with the LLM only drafting explanations from retrieved evidence, rule checks on the draft, and 52 weeks of monitoring. Syngenta's Cropwise AI uses the LLM as interface, router and explainer while its own agronomy models make predictions. Stanford Health Care's Surgical Co-Management Navigator applies an institution-owned rubric; human triage had missed half of eligible patients, and physicians agreed with its "no" answers 97% of the time.
- **Build with, not for.** Solorio (Focused) describes an agent for field technicians who fix everything from meat grinders to ATMs. He shows them a deliberately wrong first version from a synthetic dataset because people correct wrong answers quickly, then grows a data flywheel of offline datasets, online evaluators and annotation queues. Participants become champions through the "IKEA effect".
- **Constraints decide the mode.** Dunlap lists six constraints: token budget, organisational readiness, goal definition, domain knowledge, verifiability and code oversight. A two-day agent-built prototype stalled in production on token budget, undocumented domain knowledge and verification at scale.
- **Not every team needs a dark factory.** SEP's building-components team stopped at a shared knowledge mode because buildings must not fall down; a mobile banking rewrite for credit union Forum, with no token limits, used orchestrated agents and saw a six-fold reduction in effort. Shinkle's five principles: shared infrastructure, deliberate iteration, verification before velocity, chasing bottlenecks, and removing toil.

## Quotes

> "an agent without evals is a proof of concept." — Kevin Solorio

> "When the way you work doesn't fit your situation, more AI is not gonna fix that." — Chris Shinkle
