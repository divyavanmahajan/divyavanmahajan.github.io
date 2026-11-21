---
title: Can We Control AI That Controls Itself? Anneka Gupta from Rubrik on…
description: >-
  Anneka Gupta argues that nondeterministic AI agents call for three layers of
  resilience: visibility into every action, evolving guardrails, and the ability
  to undo mistakes quickly.
pubDate: '2025-12-04'
show: turing-post
url: >-
  https://www.turingpost.com/podcast/s/turing_post/can_we_control_ai_that_controls_itself_anneka_gupta_from_rubrik_on
durationMin: 27
hosts:
  - Ksenia Se
guests:
  - Anneka Gupta
tags:
  - ai-agents
  - ai-security
  - governance
  - enterprise-ai
  - observability
draft: false
---
## Thesis

Anneka Gupta, Chief Product Officer at Rubrik, argues that AI agents take the old problem of humans causing outages and put it "on steroids": there are more of them, they act faster, and they behave nondeterministically. Her answer, discussed with Ksenia Se under the theme of designing for uncertainty, is visibility, governance and reversibility, together with a culture of constant experimentation.

## Key points

- **Three pillars.** First see which agents are running, what they can access and what they do; then govern their actions and outcomes with guardrails; then plan for the inevitable mistake and be able to reverse it, for example a dropped database table.
- **A deployment checklist.** Gupta's steps: define the use case and ROI, choose the tech stack, build observability, keep updating rules on sanctioned and unsanctioned behaviour, and have a recovery playbook.
- **Log everything, then stitch it together.** A full picture needs every model call (prompt and response) and every action on MCP servers connected to email, Slack or a CRM, assembled into an "agent action timeline". She notes that security has historically failed by leaving people to correlate too many signals.
- **A mental shift.** Engineers used to deterministic code have to work from outcomes and evals and experiment quickly. Gupta tells her team to try AI first, because intuition comes only from daily hands-on use.
- **Why pilots stall.** She cites estimates that 70% to 90% of enterprise AI projects never leave prototyping, because of weak efficacy and worries about data exposure. Rubrik Agent Cloud targets agent visibility, blocking unwanted actions and reversing changes.
- **AGI as accelerant.** Gupta sees AGI as a matter of when, not if, and expects it to speed up the cat-and-mouse game between attackers and defenders. She credits Asimov's I, Robot with shaping her, and would pick teleportation as her one sci-fi technology.

## Quotes

> "It's kind of taking the human problem and putting it on steroids." — Anneka Gupta

> "A lot of what you can do very practically is log every single thing that your AI agent is doing." — Anneka Gupta
