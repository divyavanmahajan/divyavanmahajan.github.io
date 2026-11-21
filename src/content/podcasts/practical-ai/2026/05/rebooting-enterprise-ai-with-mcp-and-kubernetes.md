---
title: Rebooting Enterprise AI with MCP and Kubernetes
description: >-
  Stacklok CEO Craig McLuckie argues enterprises need an MCP platform (runtime,
  registry, gateway, control plane) plus an LLM gateway to connect agents to
  real systems safely.
pubDate: '2026-05-28'
show: practical-ai
episode: 358
url: 'https://share.transistor.fm/s/d76e02d5'
youtube: 'https://www.youtube.com/watch?v=HiDUtypPVrA'
durationMin: 48
hosts:
  - Chris Benson
  - Daniel Whitenack
guests:
  - Craig McLuckie
tags:
  - mcp
  - kubernetes
  - enterprise-ai
  - agent-identity
  - ai-infrastructure
draft: false
---
## Thesis

Craig McLuckie, Kubernetes co-founder and now CEO of Stacklok, sees MCP the way he once saw Docker: a developer convenience that also points to an enterprise platform. He argues organisations should start with a vertically integrated tool such as Claude, then add an MCP gateway and an LLM gateway as "bookends", run by a platform team, so agents can reach real systems with identity, policy and observability.

## Key points

- **MCP as a membrane.** McLuckie describes MCP as a selectively permeable layer around existing systems: it names the nouns and verbs (a candidate, "schedule interview") an LLM can discover and invoke, while letting the organisation apply controls.
- **Four platform pieces.** A secure runtime (rather than `npx` pulling unvetted packages), a registry of vetted servers, a gateway exposing one endpoint to Claude, Codex and others, and a control plane for mapping hundreds of servers to user groups.
- **Identity is the hard part.** Today's option is OIDC tokens; McLuckie recommends token exchange that scopes claims down, for example mapping an Okta token to a read-only AWS credential. Longer term he expects agents to carry their own identity plus on-behalf-of claims, and points to SPIFFE, written by his CTO Joe. Agent-only policies can be written in Cedar or Rego.
- **Why a proxy.** Beyond tracing and policy, a "find tool / call tool" pattern can cut input tokens by 80-90% when 150 tool descriptions would otherwise sit in context, and helps smaller models reach a 95-97% tool-calling threshold.
- **ToolHive.** Stacklok's Apache 2 project runs MCP servers in containers (limiting network and file access, e.g. turning a fetch server into a documentation-only fetcher), adds a registry and virtual MCP servers with composite tools. He reports 50% month-over-month growth in Kubernetes use.
- **Agentic concurrency.** McLuckie says developers running 5-15 agents at once drove a 60% jump in his team's weekly throughput, and expects knowledge workers to follow if platform teams serve them.

## Quotes

> "Anthropic, OpenAI, Google are describing the Emerald City. You know, they're telling us about this beautiful place in the future. Someone needs to build the yellow brick road." — Craig McLuckie

> "the thing that's driving the most dramatic productivity from our developers is what I think of as agentic concurrency." — Craig McLuckie
