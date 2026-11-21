---
title: >-
  ⚡️Jailbreaking AGI: Pliny the Liberator & John V on Red Teaming, BT6, and the
  Future of AI Security
description: >-
  Pliny and John V argue that model guardrails are security theatre, that real
  AI security means testing the full system stack, and that red-team data should
  be open source.
pubDate: '2025-12-16'
show: latent-space
url: >-
  https://lspace.beehiiv.com/podcast/s/latent_space_the_ai_engineer_podcast/jailbreaking_agi_pliny_the_liberator_john_v_on_red_teaming_bt6_and_the_future_of_ai_security
durationMin: 41
hosts:
  - Alessio Fanelli
  - swyx
guests: []
tags:
  - ai-security
  - red-teaming
  - jailbreaking
  - open-source
  - ai-safety
draft: false
---
## Thesis

Pliny the Liberator and John V, who lead the white-hat hacker collective BT6, argue that locking down what a model will say is a losing, largely theatrical fight: attackers have the advantage while the surface area keeps expanding, and open-weight models trail closed ones closely. In their view real safety and security work belongs at the system layer, in the tools, data and agents a model is wired into, and progress depends on openly shared research data.

## Key points

- **Guardrails versus safety.** Pliny says stacking classifiers and refusal training costs models capability and creativity, compares it to TSA-style security theatre, and says speed of exploring unknown unknowns is what matters.
- **The Anthropic challenge.** Pliny recounts Anthropic's constitutional classifiers challenge: a UI bug let him reach the end, progress was reset, and he declined to continue unless the community-sourced data was open sourced. Anthropic later added a $20,000-$30,000 bounty.
- **Agents as attack tools.** Discussing Anthropic's report on an AI-orchestrated attack, Pliny says he warned about the pattern about eleven months earlier: splitting a malicious goal into innocuous sub-tasks across sub-agents.
- **Community.** The BASI Discord has about 40,000 members; BT6 has 28 operators across two cohorts, selected for skill and integrity. They credit the Gandalf prompt-injection game as a training ground and ran an open-sourced Pliny track with Sander Schulhoff's HackAPrompt.
- **Incentives.** John V describes the collective as open source "up until we can't be"; Pliny rejects VC money as misaligned with alignment work. Alessio notes that fast-changing models make standalone "AI security products" hard to take seriously.
- **Full-stack red teaming.** John V says the attack surface grows with every email, browser or tool connection; their client work avoids model "lobotomization" and recommends system-layer fixes, such as preventing an agent from leaking a user's credit card data.

## Quotes

> "speed of exploration is the metric that matters to me, not is a singular lab able to lock down, you know, a, a certain benchmark for CBR or whatever." — Pliny the Liberator

> "So we're open source up until we can't be." — John V
