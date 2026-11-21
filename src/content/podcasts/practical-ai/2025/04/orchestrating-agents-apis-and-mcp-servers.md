---
title: 'Orchestrating agents, APIs, and MCP servers'
description: >-
  Connecting LLMs to tools through MCP is now easy, Veller argues, but making
  those connections useful, and adapting how developers work alongside agents,
  remains the hard part.
pubDate: '2025-04-14'
show: practical-ai
episode: 309
url: 'https://share.transistor.fm/s/657d28be'
durationMin: 43
hosts:
  - Daniel Whitenack
guests:
  - Pavel Veller
tags:
  - model-context-protocol
  - agents
  - orchestration
  - coding-assistants
  - developer-productivity
draft: false
---
## Thesis

Pavel Veller, Chief Technologist at EPAM, tells Daniel Whitenack that MCP has become the shared connective layer between existing software and LLMs. Wiring up a tool is now straightforward; in his view, the hard work is in routing among many tools, making results useful, and the human side of working with agents, which he says nobody has figured out yet.

## Key points

- **DIAL.** EPAM (about 50,000 people in 50-something countries) runs largely on software it builds itself. Its open-source DIAL platform started as a load-balancing, model-agnostic proxy and became a ChatGPT-like front door that hosts apps returning interactive UI elements. It is now adding MCP and, Veller says, runs at 20-something clients.
- **MCP as connective tissue.** Veller compares MCP to what HTTP and browsers did for people: rather than writing every function yourself, you connect servers others have built, such as one IntelliJ exposes. EPAM's coding agent AIRun Codeme, which he says ranks fifth on SWE-bench Verified, now offers an MCP server that DIAL orchestrates.
- **Routing many tools.** With the same Claude Sonnet models scoring differently across agents, Veller sees orchestration as the "secret sauce". He would not give an LLM a thousand tools; he groups them into a tree and finds it increasingly pays to let the model plan the steps.
- **A failed timed demo.** Veller tried to film a measured productivity gain but scrapped the agent's work after 30 minutes because he had overprompted. Half of what he asked for turned out to be unnecessary.
- **The human bottleneck.** Agents produce edits in minutes, but Veller has to reverse-engineer how they got there. He expects days split into short, more taxing fragments.
- **Easy versus useful.** An MCP server for EPAM's RSQL-based api.epam.com would be easy to build, Veller says, but not useful for analytical questions. The "Talk to Your Data" prototype needed a semantic layer, and EPAM paused it because the curve was steep. He worries about rising entry barriers for junior engineers and recommends fundamentals and critical systems thinking.

## Quotes

> "You ask me about MCP to an API, easy to do. Make it useful for your actual use case, much harder to do." — Pavel Veller

> "When I look at what Agent produced for me, I have no idea how it arrived at where I am." — Pavel Veller
