---
title: "Your Agent's Self-Improving Swiss Army Knife: Composio CTO Karan Vaidya on Building Smart Tools"
date: 2026-03-22
show: cognitive-revolution
url: "https://www.cognitiverevolution.ai/your-agent-s-self-improving-swiss-army-knife-composio-cto-karan-vaidya-on-building-smart-tools/"
youtube: "https://www.youtube.com/watch?v=E993Y8AB0cQ"
duration_min: 99
hosts: ["Nathan Labenz"]
guests: ["Karan Vaidya"]
description: "Composio's Karan Vaidya argues agents need a managed tool layer with just-in-time discovery, auth, sandboxes and continual learning, and that well-built skills reduce lock-in to any one model provider."
tags: ["agent-tools", "mcp", "skills", "continual-learning", "model-lock-in"]
source_transcript: "cognitive-revolution/episodes/2026/03/2026-03-22-your-agent-s-self-improving-swiss-army-knife-composio-cto-karan-vaidya.md"
draft: false
---

## Thesis

Karan Vaidya, CTO of Composio, argues that connecting agents to 1,000+ apps is not about handing them thousands of tools but about a "tool execution layer": just-in-time discovery, managed auth, code sandboxes and tools that improve themselves from usage. He also argues that detailed skills make frontier models largely interchangeable. Host Nathan Labenz, in a sponsored episode he says he tested first, finds the commoditisation argument shifts his view.

## Key points

- **Less is more in context.** Composio exposes 50,000+ tools but loads only a few meta-tools, then discovers the right ones on demand. A sandbox ("Workbench") lets agents process 10,000 or even a million emails by writing code instead of calling functions one by one.
- **Self-improving tools.** Integrations are built by an internal agent pipeline. When an agent fails to use a tool, a new version is generated in real time and swapped into context; winding "zigzag" traces are turned into reusable skills, and repeated failures become do's and don'ts. Vaidya says agents have found many cases where API docs are wrong, for example in Google Calendar.
- **Skills as an anti-lock-in layer.** Vaidya writes skills with Opus and runs them on Sonnet (not Haiku); with GPT models he finds 90-95% work unchanged, with differences such as Anthropic models being better at polling. Labenz had expected models to diverge and create stickiness.
- **Security model.** Least-privilege action-level scopes, pre/post tool hooks for human-in-the-loop guardrails, SOC 2, and self-hosting in a customer VPC, as done for AWS. Customers named include AWS, Zoom, Glean and Airtable.
- **Build vs. buy.** Labenz asks whether firms will replace Intercom's Fin with their own skills over Composio's 133 Intercom tools. Vaidya says Fin is a strong product but expects a gradual drift towards building as models improve.
- **AI-first operations.** A three-person team runs the integration pipeline, which Vaidya says cost about $100K in tokens last month; token spend exceeds human cost. Engineers use an open-source orchestrator to manage 20-30 Claude Code or Codex agents, and his own OpenClaw agent sourced engineering candidates and booked 30-40 calls.

## Quotes

> "if you provide thousand tools to the agent, it will probably use the wrong blade and suicide via context overload." — Karan Vaidya

> "our kind of like token cost is definitely much higher than our human cost right now" — Karan Vaidya
