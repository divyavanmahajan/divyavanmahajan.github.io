---
title: The Creators of Model Context Protocol
description: >-
  MCP's co-creators explain how an LSP-style protocol for extending AI
  applications, with distinct tools, resources and prompts, grew from a
  two-person side project into a multi-company open standard.
pubDate: '2025-04-03'
show: latent-space
url: >-
  https://lspace.beehiiv.com/podcast/s/latent_space_the_ai_engineer_podcast/the_creators_of_model_context_protocol
durationMin: 80
hosts:
  - Alessio Fanelli
  - swyx
guests:
  - Justin Spahr-Summers
  - David Soria Parra
tags:
  - model-context-protocol
  - ai-agents
  - protocol-design
  - developer-tools
  - open-source
draft: false
---
## Thesis

Justin Spahr-Summers and David Soria Parra of Anthropic describe the Model Context Protocol as a way to extend AI applications, not models, with an ecosystem of integrations. They argue that solving the "M times N" integration problem, as the Language Server Protocol did for editors, required richer primitives than tool calling. They also argue that protocol design must stay conservative, because adding features is easy and removing them is hard.

## Key points

- **Origin.** Soria Parra says the idea came in July 2024, a few months after he joined Anthropic, from frustration at copying code between Claude Desktop and his IDE. The first IDE implementation shipped in the open in Zed, and an internal hackathon produced a server that controlled a 3D printer.
- **Three primitives.** Tools are invoked by the model, resources are URI-identified data that the application or user brings into context, and prompts are user-initiated templates. Tools make up about 95% of integrations, but Soria Parra notes that the first Zed integration used prompts, and he would like clients to build RAG indexes over resources.
- **Trust the model.** Tool results are text or images, not schema-bound JSON, so servers can pass raw API data through and let the LLM sort it out. They see OpenAPI as too granular for LLMs but complementary, and community bridges already convert between the two.
- **Building servers.** Soria Parra says a useful server takes about half an hour; Spahr-Summers says it is often 100-200 lines and suggests pasting the SDK into an LLM's context. Through sampling, a server can ask the client's model for completions, and a server can also act as a client, so servers can be chained into graphs.
- **Transport and auth.** The original SSE transport needed long-lived connections that are hard to run at scale; the new streamable HTTP transport starts as plain HTTP and adds streaming and resumable sessions. The draft spec uses OAuth 2.1.
- **Governance.** The guests are wary of a standards body slowing the project down. They say non-Anthropic contributors already hold commit rights: Pydantic on the Python SDK, Microsoft on C#, JetBrains on Kotlin and Spring AI on Java.

## Quotes

> "it's, it's AI applications and not models themselves that, that this is focused on. That's a common misconception" — David Soria Parra

> "I want more sampling clients. That's all I want." — David Soria Parra
