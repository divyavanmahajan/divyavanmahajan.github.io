---
title: >-
  One Year of MCP — with David Soria Parra and AAIF leads from OpenAI, Goose,
  Linux Foundation
description: >-
  MCP co-creator David Soria Parra reviews the protocol's first year and, with
  OpenAI, Block and Linux Foundation leads, explains why it moved to the neutral
  Agentic AI Foundation.
pubDate: '2025-12-27'
show: latent-space
url: >-
  https://lspace.beehiiv.com/podcast/s/latent_space_the_ai_engineer_podcast/one_year_of_mcp_with_david_soria_parra_and_aaif_leads_from_openai_goose_linux_foundation
durationMin: 99
hosts:
  - Alessio Fanelli
  - swyx
guests:
  - David Soria Parra
tags:
  - mcp
  - open-standards
  - agents
  - open-source-governance
  - linux-foundation
draft: false
---
## Thesis

David Soria Parra of Anthropic argues that MCP has become the de facto protocol connecting AI applications to tools and data, and that donating it to the Linux Foundation's new Agentic AI Foundation (AAIF) guarantees neutrality without changing Anthropic's commitment. A panel with Jim Zemlin (Linux Foundation), Nick Cooper (OpenAI) and Brad from Block adds that the foundation should curate well-adopted, composable projects rather than speculative ones.

## Key points

- **A year of spec work.** Soria Parra traces adoption from Cursor and VS Code to an April inflection when OpenAI, Microsoft and Google committed. The spec added remote servers and auth in March, separated the authorization server from the resource server in June for enterprise IdPs, and added long-running tasks in November.
- **Transport lessons.** Making the server-to-client stream optional meant no client opened it, so sampling and elicitation went unused; server-side state also hurts horizontal scaling at millions of requests. Engineers from Google, Microsoft, AWS, Anthropic and OpenAI met to fix this.
- **Code mode and skills are not rivals.** He calls code mode a token optimisation that still relies on MCP's auth and discovery, and says skills provide domain knowledge while MCP provides connectivity.
- **Internal use dominates.** Anthropic runs a custom MCP gateway on Kubernetes; he says he does not know 90 percent of its internal servers. The registry is meant to work like npm, with curated sub-registries for trust.
- **Regulated industries.** A London summit led to a financial services interest group headed by Bloomberg, covering attribution of third-party data; MCP Apps serves UI as HTML in iframes.
- **Why a foundation.** Zemlin says 50 companies joined on day one; Cooper stresses demonstrated utility and composability, citing Agents.md; Brad says Goose, an early MCP client, shows the protocol working concretely.

## Quotes

> "the foundation part is mostly just an umbrella to make sure the projects under it stay always neutral." — David Soria Parra

> "I've never seen that kind of inbound interest starting any project at the Linux Foundation in twenty-two years." — Jim Zemlin
