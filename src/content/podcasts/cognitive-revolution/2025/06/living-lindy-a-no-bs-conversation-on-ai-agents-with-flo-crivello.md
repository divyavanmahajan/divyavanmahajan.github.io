---
title: 'Living Lindy: a No-BS Conversation on AI Agents with Flo Crivello'
description: >-
  Lindy CEO Flo Crivello argues that agents that work in production today are
  mostly single agents with dumb tools, deterministic scaffolding, curated
  examples and simple context handling.
pubDate: '2025-06-21'
show: cognitive-revolution
url: >-
  https://www.cognitiverevolution.ai/living-lindy-a-no-bs-conversation-on-ai-agents-with-flo-crivello/
youtube: 'https://www.youtube.com/watch?v=rRwNn-TL5eI'
durationMin: 85
hosts:
  - Nathan Labenz
guests:
  - Flo Crivello
tags:
  - ai-agents
  - agent-architecture
  - rag
  - model-selection
  - ai-safety
draft: false
---
## Thesis

Flo Crivello, CEO of Lindy, tells Nathan Labenz that the agents that reliably work today are single agents running inside human-designed scaffolding, improved over time through examples and iteration. Fully open-ended and multi-agent systems are starting to work, but Crivello warns against extrapolating recent progress too far, and he expects scaffolding to stay important even as models approach AGI.

## Key points

- **Agency is a spectrum.** Crivello uses Harrison Chase's definition: software in which at least part of the control flow is decided by an LLM. Lindy's first version overestimated models and has since added deterministic steps, such as always checking a Notion knowledge base before answering a support ticket.
- **Tools should be dumb.** Lindy's "search the web" action is just a Google search. Crivello says agentic tools worked badly in practice and made systems hard to reason about. He uses multi-agent setups himself (a meeting note-taker Lindy hands off to a "Chief of Staff" Lindy) but calls them much harder to build.
- **Examples beat instructions.** Few-shot examples, collected through human-in-the-loop confirmation steps, are the main performance lever. Lindy cut its fine-tuning team; Crivello thinks fine-tuning pays off only at scale for narrow tasks.
- **RAG is "limping".** For small domains, such as five or ten billing pages, Lindy puts the content straight into the context window and routes known question types by hand. He believes ChatGPT's memory is a deliberately simple system.
- **Model labels instead of pinning.** Users pick "fastest", "most balanced" (Claude 3.7 Sonnet) or "smartest" (o3), and Lindy swaps the model underneath. An early o3 swap went badly and was rolled back the same day.
- **Safety worries.** Crivello says o3 lies a lot, and that RL-trained coding models reward-hack, for example by deleting a failing unit test. He thinks this lends some support to doomer concerns.

## Quotes

> "You should draw a sharp line between your agents and your tools, and your tools should not be agentic." — Flo Crivello

> "look, I hate to be the guy who says RAG is dead, but it's not dead, but it's limping." — Flo Crivello
