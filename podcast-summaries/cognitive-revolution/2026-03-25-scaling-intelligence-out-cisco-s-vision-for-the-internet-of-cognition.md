---
title: "Scaling Intelligence Out: Cisco's Vision for the Internet of Cognition, with Vijoy Pandey"
date: 2026-03-25
show: cognitive-revolution
url: "https://www.cognitiverevolution.ai/scaling-intelligence-out-cisco-s-vision-for-the-internet-of-cognition-with-vijoy-pandey/"
youtube: "https://www.youtube.com/watch?v=6tKfi0NnzTA"
duration_min: 96
hosts: ["Nathan Labenz"]
guests: ["Vijoy Pandey"]
description: "Cisco's Vijoy Pandey argues AI progress must scale out as well as up: networks of specialised agents that share intent, context and guardrails, built on open, decentralised plumbing."
tags: ["multi-agent-systems", "agent-protocols", "agent-identity", "enterprise-ai", "decentralization"]
source_transcript: "cognitive-revolution/episodes/2026/03/2026-03-25-scaling-intelligence-out-cisco-s-vision-for-the-internet-of-cognition.md"
draft: false
---

## Thesis

Vijoy Pandey, SVP and GM of Outshift by Cisco, argues that the industry has only pursued one axis towards superintelligence, scaling individual models up, and has barely touched the second: scaling intelligence out through teams of specialised agents from different vendors. He proposes an "Internet of Cognition" of protocols, shared memory and guardrail engines to make that possible. Host Nathan Labenz welcomes it as a distributed alternative to concentrating capability in a few frontier models.

## Key points

- **CAIPE in production.** Pandey describes Cisco's Community AI Platform Engineer, about 20 cooperating agents making 100+ tool calls across more than 10 site reliability workflows. He says it cut team load by 30%, fully handles 40% of tasks and brought response times from hours to near instant; Adobe, AWS and Nike take part in the open-source community.
- **Four pillars of plumbing.** The open-source AGNTCY project (Linux Foundation) covers discovery, identity and access, communication (MCP for tools, A2A between agents) and observability, including OpenTelemetry extensions built with Microsoft. The agent directory and an optional identity provider run on distributed hash tables so no single party owns them.
- **Task-based access control.** Pandey says identity is the biggest hurdle to agent autonomy. Instead of role-based access, agents start with minimal rights and get ephemeral elevation per tool, task or transaction (TBAC), which requires reading the meaning of their messages.
- **Two new network layers.** On top of the OSI model he adds layer 8 (syntactic: making agents from different frameworks interoperate) and layer 9 (semantic "cognition state" with headers for phases such as discovery, negotiation and execution). Transfer can be natural language, compressed state, or a full latent-space/KV-cache exchange for open-weight models.
- **Humans as the glue.** In a healthcare demo with scheduling, insurance, diagnostics and pharmacy agents, each optimises its own KPI, and a human still has to align intent. Pandey wants that coordination done by software, with "cognition engines" acting as accelerators or guardrails.
- **Emergence vs. safety.** Labenz worries about agents talking in latent space at high speed. Pandey favours enabling emergent behaviour, bounded by enterprise guardrails and game-theoretic modelling.

## Quotes

> "Identity is actually the biggest hurdle that we are facing today when it comes to deploying full autonomy" — Vijoy Pandey

> "A human cannot make an API call. A human doesn't have a KV cache that I can send across. I cannot ship my latent space to you. An agent can." — Vijoy Pandey
