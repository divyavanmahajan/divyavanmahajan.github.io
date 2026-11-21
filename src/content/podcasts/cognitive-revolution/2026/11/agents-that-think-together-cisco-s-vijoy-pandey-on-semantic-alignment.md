---
title: >-
  Agents That Think Together: Cisco's Vijoy Pandey on Semantic Alignment, Scope,
  Accord & Concord
description: >-
  Cisco's Vijoy Pandey argues that connected AI agents still fail silently
  through semantic misalignment, and that open protocols for shared intent and
  negotiation are needed so agents can reason collectively.
pubDate: '2026-11-11'
show: cognitive-revolution
url: >-
  https://www.cognitiverevolution.ai/agents-that-think-together-cisco-s-vijoy-pandey-on-semantic-alignment-scope-accord-concord/
youtube: 'https://www.youtube.com/watch?v=lAG4njluIbQ'
durationMin: 92
hosts:
  - Nathan Labenz
guests:
  - Vijoy Pandey
tags:
  - multi-agent-systems
  - ai-agents
  - interoperability
  - observability
  - enterprise-ai
draft: false
---
## Thesis

Vijoy Pandey, SVP and GM of Outshift by Cisco, argues that agents have moved from isolated, to islands within one harness, to connected across vendors. Being connected is not the same as thinking together, though. Semantic misalignment between agents quietly ruins outcomes, and Cisco's open-source Scope, Accord and Concord projects are meant to detect and fix it.

## Key points

- **Production use cases.** Pandey describes deployments with Swisscom, ServiceNow, SoftServe and Webex. For Swisscom data-centre migrations, five agents explore configuration options on top of a formal model of the network, a neurosymbolic setup aimed at 100% error-free configuration.
- **Value is in the handoffs.** Using a multi-million-dollar deal desk as his example, Pandey says agents from sales (Salesforce), legal (Harvey), engineering and marketing (Jasper) must optimise for the company's overall result rather than each agent's local goal.
- **Silent failures.** Pandey reports that 100% of public ChatDev sessions showed semantic failures. In a five-agent system, accuracy fell from 99% to 98%, 81% and 16% as misalignments rose from one to three. A travel-booking system was "66% up" but completed 0% of tasks.
- **Scope, Accord, Concord.** Scope builds cognitive observability on OpenTelemetry traces. Accord aligns agents on intent and terms before work starts, for example whether "100,000 users" means total or concurrent users. Concord handles negotiation during the work. A verification protocol has not been released yet.
- **Personal agents.** Labenz splits his setup into high-access, low-autonomy agents on his laptop and lower-access, more autonomous agents on a Mac mini. Pandey runs a single agent, Arnold Layne, whose identity and memory are kept separate from the harness and model. Even so, it cannot yet book a dinner with his wife's agent without help.
- **Latent communication and the "cow" worry.** Pandey sees latent-space communication between agents as inevitable but wants it rolled out with guardrails. Labenz raises Yuval Noah Harari's cow analogy. Pandey replies that people are already "cows" in systems like high-frequency trading, and that record keeping and monitoring are the answer.

## Quotes

> "So we have connected agents, but we realized that connectivity is not the same as cognition." — Vijoy Pandey

> "So your dashboards might be green, but your outcomes might be wrong, completely wrong." — Vijoy Pandey
