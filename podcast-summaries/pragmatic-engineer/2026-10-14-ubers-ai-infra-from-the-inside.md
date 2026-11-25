---
title: "Uber’s AI infra, from the inside"
date: 2026-10-14
show: pragmatic-engineer
url: "https://newsletter.pragmaticengineer.com/p/ubers-ai-infra-from-the-inside"
youtube: "https://www.youtube.com/watch?v=MDUYSMJmi8A"
duration_min: 93
hosts: ["Gergely Orosz"]
guests: ["Uday Kiran Medisetty"]
description: "Uday Kiran Medisetty argues that Uber's agentic AI tooling works because it sits on a decade of developer platform investment: DevPods, API registries, tracing and test environments that agents now reuse."
tags: ["developer-productivity", "coding-agents", "platform-engineering", "code-review", "ai-infrastructure"]
source_transcript: "pragmatic-engineer/episodes/2026/10/2026-10-14-ubers-ai-infra-from-the-inside.md"
draft: false
---

## Thesis

Uber Distinguished Engineer Uday Kiran Medisetty walks Gergely Orosz through the internal tools Uber engineers use with AI agents. His argument is that Uber kept its building blocks model- and harness-agnostic and could move fast because pre-AI systems such as DevPods, Thrift/Protobuf registries, Jaeger tracing and Slate were already in place. Orosz concludes that companies with strong pre-AI developer platform teams appear to gain the most.

## Key points

- **Gateways as single entry points.** Medisetty describes a Model Gateway built on Michelangelo from late 2023 that every model request passes through, adding AI Guard security checks, per-user spend tiers, audit logs and session traces. An MCP Gateway auto-generates MCP tools, and later CLIs, from existing service IDL specs.
- **Harness portability and skills.** AIFX wraps Claude Code, Codex and OpenCode so settings, skills and plugins follow engineers between harnesses. He cites roughly 30,000 skill executions per day from a skills monorepo, and a CostCheck plugin that gives personalised cost tips.
- **Context graph and Cortana.** A graph with 100+ node types and 130+ edge types links people, PRs, design docs, incidents and assets, grounding the Cortana assistant so it needs fewer turns.
- **Background agents.** Minion, running on a "mega" DevPod with all repositories, produces around 15% of production PRs, according to Medisetty, and can be triggered from Slack threads.
- **Verification and review.** Agents deploy branches to Slate environments, replay captured production traffic with Capri, and run simple CI checks locally behind one AIFX validate command after CI jobs more than doubled and forced an internal "code red". Every PR still gets human review in Code Inbox, with risk scores and blast radius as signals.
- **Measuring features, not diffs.** Uber tags PRs as feature, bugfix, maintenance, testing or docs; Medisetty says the feature share is rising and maintenance falling. He names context engineering, multitasking and verification as the skills that now matter most.

## Quotes

> "you could use all the things that we built making the life easier for engineers and it makes it easy for our agents as well." — Uday Kiran Medisetty

> "the cost of an incident for uber is like really high so even with all of this tooling we like right now we still require an engineer to review" — Uday Kiran Medisetty
