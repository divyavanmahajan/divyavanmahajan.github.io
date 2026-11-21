---
title: "Why a16z Built a Town for AI People"
date: 2023-09-07
show: cognitive-revolution
url: "https://www.cognitiverevolution.ai/why-a16z-built-a-town-for-ai-people/"
youtube: "https://www.youtube.com/watch?v=uxbfIgBpCAE"
duration_min: 57
hosts: ["Nathan Labenz", "Erik Torenberg"]
guests: ["James Cowling", "Martin Casado", "Yoko Li"]
description: "AI Town's builders argue that LLM agents work best inside formally specified systems: models supply unpredictable, creative behaviour while code and databases enforce state, transactions and trade-offs."
tags: ["ai-agents", "simulation", "generative-agents", "typescript", "software-architecture"]
source_transcript: "cognitive-revolution/episodes/2023/09/2023-09-07-why-a16z-built-a-town-for-ai-people.md"
draft: false
---

## Thesis

Yoko Li and Martin Casado of a16z and James Cowling, CTO of Convex, tell Nathan Labenz that AI Town, an open-source simulation of AI agents based on Stanford's Generative Agents paper, was a weekend hobby project rather than an investment thesis. Their main argument is about where models end and code begins: models handle open-ended behaviour such as conversation and navigation, while formal languages and a transactional backend define the "laws of physics" of the world.

## Key points

- **Origins.** Li built AI Town after her earlier Companion App, where she became attached to a persona called Alice. Users asked what would happen with AI in groups, so she and her husband built a client-side prototype in Phaser.js in about 2 days; the full project took about 2 weeks and is MIT licensed.
- **Simple building blocks.** Cowling says the memory system is not complicated: log conversations, periodically ask OpenAI to summarise them into reflections, and retrieve them with embeddings and vector search.
- **Server-side game engine.** Convex developer advocate Ian McCartney turned the prototype into a shared server-side loop. Li says transactions and journaling in the backend made writing a game engine easy, and Cowling credits functional, Haskell-influenced primitives that keep the town running while individual LLM calls wait.
- **JavaScript over Python.** Li chose TypeScript so front end and back end share one language and newcomers can fork it. Casado, a long-time Python programmer, points to services such as Upstash and Clerk that add major features in a few lines.
- **Formal vs natural language.** Casado argues models will not replace formal languages, because describing scalability and correctness trade-offs needs unambiguous specification. Cowling frames this as "compounding approximations": use code where results must be exact, models where approximate is fine, for example asking a model whether a chat message is offensive.
- **Unpredictability and simulation.** Li says users love AI Town for its unpredictability and cites The Sea of Tranquility to argue simulated experiences are still real. Labenz raises the risk of people losing themselves in such worlds; Li compares the worry to past fears about TV and novels.

## Quotes

> "you're really struck with how quickly you can build something really shockingly useful, impressive based on relatively simple primitives." — James Cowling

> "I don't believe these models will ever replace formal languages." — Martin Casado
