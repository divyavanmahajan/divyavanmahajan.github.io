---
title: 'Private, open source chat UIs'
description: >-
  LibreChat creator Danny Avila argues that a self-hosted, open source chat
  interface lets companies own their data and switch freely between closed and
  local models.
pubDate: '2024-04-30'
show: practical-ai
episode: 267
url: 'https://share.transistor.fm/s/a422b8c2'
durationMin: 38
hosts:
  - Chris Benson
  - Daniel Whitenack
guests:
  - Danny Avila
tags:
  - chat-interfaces
  - open-source
  - data-privacy
  - rag
  - local-llms
draft: false
---
## Thesis

Recorded as a live webinar, this conversation with Danny Avila, creator of LibreChat, makes the case for private, open source chat UIs. Avila argues that owning your conversation data matters because it is valuable to AI companies and to your own future evaluation and fine-tuning, and that a model-agnostic interface frees organisations from any single provider. Daniel Whitenack shows how Prediction Guard rebranded and extended LibreChat for security-conscious customers.

## Key points

- **Origin in a privacy leak.** Avila says the project was inspired by a ChatGPT bug in which one user saw another's messages; it began as a learning exercise and drew six GitHub stars on its first day. It now lists 117 contributors.
- **The enterprise pitch.** Asked by Chris Benson how he would convince a Fortune 500 chief digital and AI officer, Avila cites three things: fully open source, configurable for intranets or fully sealed local deployments, and a default Docker Compose setup that warns about insecure defaults.
- **Switching models mid-thread.** In the demo Avila moves one conversation from a local Ollama model to Llama 3 70B on Groq and to Cohere, with the database preserving conversation state. Message search, missing from ChatGPT, is a feature he says wins many users over.
- **Local RAG and agents.** File uploads use a local vector database. Avila finds OpenAI's assistants RAG to be naive and a black box, and says a good prompt gets comparable results across most LLMs.
- **Prediction Guard's fork.** Whitenack shows LibreChat running Neural Chat 7B on Intel Gaudi 2 hardware, with toxicity and factuality scores and Google login limited to his organisation. He adds that commercial translation systems usually beat LLMs, which match Google Translate for Hindi only 5% to 10% of the time.
- **Adoption and direction.** Avila heard that Mistral used LibreChat to prototype its chat interface, and expects the future to be open models running on consumer hardware without SaaS subscriptions.

## Quotes

> "data is like the new commodity. It's so valuable even to these big AI companies." — Danny Avila

> "with OpenAI solution, it's really a black box. You can't even see the prompt that's being generated." — Danny Avila
