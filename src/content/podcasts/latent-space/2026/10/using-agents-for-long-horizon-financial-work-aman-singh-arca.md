---
title: 'Using Agents for Long-Horizon Financial Work — Aman Singh, Arca'
description: >-
  Arca runs a wealth management firm on its own model-agnostic agent harness,
  keeping humans in the loop for money movement and treating auditability and
  staff feedback as core infrastructure.
pubDate: '2026-10-31'
show: latent-space
url: 'https://latent.space/p/arca'
durationMin: 26
hosts:
  - Alessio Fanelli
  - swyx
guests:
  - Aman Singh
tags:
  - agents
  - financial-services
  - agent-harness
  - guardrails
  - evals
draft: false
---
## Thesis

Aman Singh, who leads the AI platform team at Arca, tells Latent Space editor Richard MacManus (recorded at AI Engineer New York) that Arca is not a SaaS vendor but an AI-native wealth management firm. Because it is the firm, it can standardise how work happens and let agents run the back office over processes that last days, while human advisors keep the client relationship and approve anything that moves money.

## Key points

- **The firm, not the tool.** Arca recently raised $64 million. Singh says AI is meant to replace the work around the advisor, not the advisor; clients never talk to the AI directly. He contrasts this with a services firm that bolts on AI tools and still has to prompt them.
- **Own the harness.** Claude is Arca's primary model, after earlier stints on Gemini and OpenAI, but Arca uses an internal, model-agnostic harness with model tiers by task complexity. Internal benchmarks drive choices; Singh says one model praised by external benchmarks proved too slow and costly. He is wary of depending on Anthropic's managed agents because that hands memory and operational knowledge to a provider.
- **Long-horizon memory.** A tax-bill example spans ten days. New signals (an email, a phone call) wake agents that read per-client memory: who owns what, what happens next. A nightly "dreaming" reflection process updates that memory.
- **Deterministic guardrails at the edges.** Agents analyse and propose, but cannot move money, liquidate assets or message clients without a human. Every database write gets a fast LLM check; inbound content is screened for prompt injection; outbound data passes PII checks and a consensus of small models. Generated plans are checked for raw account numbers and for promised returns.
- **Auditability by default.** Every agent and human action produces a change log, which serves compliance and also feeds the agent loop. Decision models nudge agents to use verified facts, since models will happily use 2025 tax brackets.
- **Feedback becomes evals.** Staff must explain edits or cancellations; a nightly meta-agent reviews traces and suggests harness changes. A human engineer still approves prompt changes because, Singh says, agents turn every small fix into the whole prompt.

## Quotes

> "the role of AI at Arca is not to replace the advisor. It is to replace all of the work around the advisor." — Aman Singh

> "The industry cares about outcomes, but, um, compliance cares about auditability." — Aman Singh
