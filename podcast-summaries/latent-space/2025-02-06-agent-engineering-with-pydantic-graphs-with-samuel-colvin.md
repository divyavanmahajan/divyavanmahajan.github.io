---
title: "Agent Engineering with Pydantic + Graphs — with Samuel Colvin"
date: 2025-02-06
show: latent-space
url: "https://lspace.beehiiv.com/podcast/s/latent_space_the_ai_engineer_podcast/agent_engineering_with_pydantic_graphs_with_samuel_colvin"
duration_min: 64
hosts: ["Alessio Fanelli", "swyx"]
guests: ["Samuel Colvin"]
description: "Samuel Colvin argues agent frameworks need the engineering discipline of mainstream Python, and explains Pydantic AI's type-safe graphs and Logfire's general-purpose observability with first-class AI support."
tags: ["agents", "agent-frameworks", "python", "observability", "opentelemetry"]
source_transcript: "latent-space/episodes/2025/02/2025-02-06-agent-engineering-with-pydantic-graphs-with-samuel-colvin.md"
draft: false
---

## Thesis

Samuel Colvin, creator of Pydantic and Logfire, argues that most agent frameworks fall short of normal Python engineering standards, and that Pydantic AI aims to be the production-ready option: type-checked, tested and built on type-safe graphs. He also argues that AI observability will become a feature of general-purpose observability rather than a separate category.

## Key points

- **Pydantic's reach.** Colvin cites almost 300 million downloads in December, and says one large model lab cut time to first token by 20% just by upgrading from Pydantic V1 to V2, the Rust rewrite. A future V3 could bring another 3-5x speed-up.
- **Production-grade agent framework.** Pydantic AI uses heavy generics for type checking, runs every documentation example as a test, and runs a handful of tests against live models on each commit to main. That is how they found Google's Generative Language API failing far more often than Vertex.
- **Type-safe graphs.** Colvin says he resisted graphs at first. Nodes are now data classes whose return types define the edges, so the graph can be checked statically and rendered as a Mermaid diagram. The agent itself was rebuilt on the graph library, and resuming from any node supports long-running workflows. He says OpenAI told him Pydantic AI looks like what Swarms would be if it were production-ready.
- **Models versus scaffolding.** Colvin argues frameworks and graphs make up for models not yet being smart enough, comparing them to scripts given to less-trusted call-centre staff. He rejects a separate gateway layer like LiteLLM and points to the OpenAI SDK as the de facto standard API.
- **Observability.** Logfire went from ClickHouse to Timescale to DataFusion, chosen because it is open source and written in Rust. Colvin expects GenAI traces to hold far more sensitive data than traditional telemetry, which will push demand for self-hosting, and he backs the OpenTelemetry GenAI semantic conventions.

## Quotes

> "I think looking in general at the ecosystem of agent frameworks, the engineering quality is far below that of the rest of the Python ecosystem." — Samuel Colvin

> "Agents, agent frameworks, graphs, all of this stuff is basically making up for the fact that right now the models are not that clever." — Samuel Colvin
