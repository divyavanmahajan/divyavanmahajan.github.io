---
title: Model Context Protocol Deep Dive
description: >-
  MCP standardises how AI agents reach external tools, data and prompts, much as
  HTTP did for the web, though open models still need prompting help to use it.
pubDate: '2025-05-08'
show: practical-ai
episode: 312
url: 'https://share.transistor.fm/s/d7a0d796'
durationMin: 42
hosts:
  - Chris Benson
  - Daniel Whitenack
guests: []
tags:
  - model-context-protocol
  - agents
  - tool-calling
  - interoperability
  - fastapi
draft: false
---
## Thesis

Daniel Whitenack and Chris Benson argue that the Model Context Protocol (MCP), announced by Anthropic on 25 November 2024, replaces the custom glue code of tool calling with a shared standard, much as HTTP did for the web. Benson sees it as a sign the AI field is maturing into "AI-specific middleware". Whitenack adds that open models can use MCP today, but less efficiently until MCP examples make it into their training data.

## Key points

- **Why a protocol.** Whitenack explains that every team wired LLMs to APIs (his example is kayak.com) with its own prompts and code, so sharing tools between agents meant rewriting one side. MCP gives everyone a common interface.
- **Hosts, clients, servers.** Drawing on Phil Schmid's overview, Whitenack describes the host (for example a code editor), the MCP client library inside it, and servers that expose tools, resources and prompts. Benson's shorthand: tools are model-controlled, resources application-controlled, prompts user-controlled. Connections run over standard I/O or server-sent events, with a discovery step that lists what a server offers.
- **Existing servers and SDKs.** Servers already exist for Blender, Ableton Live, GitHub, Unity, browser control and Zapier. Benson points to the official Rust SDK as useful for edge deployments.
- **FastAPI-MCP in practice.** Whitenack turned PredictionGuard's FastAPI text-to-SQL service, which has six or seven endpoints, into a discoverable MCP server by adding about three lines of code. He tested it with the MCP Inspector.
- **Security.** Whitenack separates connection-level authentication from tools that are vulnerable or have too much agency. He tells listeners to vet third-party servers the way they would any web server: what data it touches, how it logs, whether it is multitenant.
- **Non-Anthropic models.** Whitenack's answer is "yes and no": models such as Llama 3.1 or Qwen 2.5 can produce MCP calls if the prompt is loaded with examples. He expects MCP to follow the same path as instruction following and tool calling into training datasets. Benson also recommends Hugging Face's Candle Rust framework for edge inference.

## Quotes

> "Now we're going to have the exact same progression with MCP. People can do MCP right now with open models if they perform in a certain way." — Daniel Whitenack

> "I mean, it's kind of a new form of middleware in that sense." — Chris Benson
