---
title: Zero Trust for AI Agents
description: >-
  Autonomous agents are becoming unavoidable, partly to defend against
  AI-accelerated attacks, so enterprises need zero trust controls built for
  agents, and most are far from ready.
pubDate: '2026-06-11'
show: practical-ai
episode: 360
url: 'https://share.transistor.fm/s/5c1a087d'
youtube: 'https://www.youtube.com/watch?v=RQ4UWmV9dGU'
durationMin: 47
hosts:
  - Chris Benson
  - Daniel Whitenack
guests: []
tags:
  - ai-security
  - zero-trust
  - agents
  - prompt-injection
  - enterprise-ai
draft: false
---
## Thesis

Daniel Whitenack and Chris Benson walk through Anthropic's "Zero Trust for AI Agents" framework, released in May 2026. Whitenack argues that organisations will have to adopt autonomous agents, if only because attackers already use agentic tools, and that those agents then become a threat inside the perimeter. His view is that 90% or more of enterprises with AI deployments are not operating to this model.

## Key points

- **Why agents are different.** Agents use distributed tools, act without human initiation, keep context across sessions and talk to each other. The framework uses "blast radius" and OWASP's "least agency", an extension of least privilege.
- **Threat list.** Prompt injection (especially indirect, via files or email), tool and resource misuse through MCP, identity and privilege abuse, supply-chain risk, and memory, context and RAG poisoning. Whitenack once hid contrary instructions in white text in a PDF interview exercise to see if candidates using Claude Code would notice.
- **Three tiers.** Each control has foundation, enterprise and advanced levels. For agent identity: unique cryptographic IDs per instance, then certificate-based authentication, then hardware-backed identity with attestation in HSMs or TPMs. Access control starts with role-based access control and deny by default.
- **Observability vs behavioural monitoring.** Whitenack wants traces linking user, API key, agent, prompt, tool call and policy decision. Monitoring then judges whether actions are allowed. He calls input/output checks "table stakes", like taking your temperature.
- **Recovery is hard.** Benson, who works in defence, says rolling back an agent in a critical function is difficult because that function still has to run. Agentic systems demand a shift away from static, checklist-style zero trust.
- **Speed.** As exploit timelines shrink to minutes or seconds, Whitenack doubts humans can stay in every containment decision. The ebook also suggests "AI vendoring": regenerating fragile open-source dependencies in-house.

## Quotes

> "You can't just, like, rely on waking up the CISO in the middle of the night to approve, you know, shutting this thing down." — Daniel Whitenack

> "You you you give it just what it needs and absolutely no more." — Chris Benson
