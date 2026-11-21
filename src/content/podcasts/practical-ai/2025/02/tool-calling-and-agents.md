---
title: Tool calling and agents
description: >-
  An LLM only generates text; tool calling is ordinary code that feeds that text
  into functions, and an agent is an LLM orchestrating several tools towards a
  goal.
pubDate: '2025-02-14'
show: practical-ai
episode: 303
url: 'https://share.transistor.fm/s/937fd39e'
durationMin: 45
hosts:
  - Chris Benson
  - Daniel Whitenack
guests: []
tags:
  - tool-calling
  - agents
  - llm
  - smolagents
  - enterprise-ai
draft: false
---
## Thesis

Daniel Whitenack argues that most confusion about agents comes from imagining that the LLM itself "talks to" outside systems. The model only produces text. Plain software takes that text and passes it into functions and APIs. He separates single tool calls from agents, where the LLM plans and sequences several tools until it reaches an objective.

## Key points

- **The open-source catch-up.** Whitenack notes that Hugging Face reproduced OpenAI's Deep Research with open code within about 24 hours. He concludes that it is hard to build a moat at the general application level, though domain knowledge or proprietary data can still provide one. Benson asks what that means for OpenAI, which Elon Musk had just bid $97 billion to buy.
- **Bundling as a business model.** Whitenack argues that Microsoft's Copilot benefits from enterprise bundling, much as Teams does against Slack. Sensitive tiers of data in pharma, healthcare and finance still leave room for vertical and infrastructure players.
- **How tool calling works.** In Whitenack's HubSpot example, a developer writes an ordinary function that creates a deal through HubSpot's REST API. The LLM generates the arguments, and the developer's code passes them in. Models fine-tuned on function-calling data, such as Nous Research's Hermes on Llama 3.1 70B, are better at this, and servers like vLLM handle the prompt formats.
- **What makes it an agent.** For Whitenack, an agent orchestrates several tools. To book a car for a trip, it checks Gmail for the flight, queries Kayak, compares options and then books, re-evaluating after each step.
- **Prediction Guard use cases.** Whitenack describes using the smolagents web agent, which drives a browser through Helium, to pull knowledge out of legacy web apps that have poor UIs and no API. He also describes agentic text-to-SQL that retries queries until it reaches an answer.
- **Jobs and resources.** Whitenack expects some jobs to shift but sees much of this as expanding human agency. He recommends the Hugging Face agents course and Deloitte's Q4 State of GenAI in the Enterprise report.

## Quotes

> "There can be no connection directly between the LLM, which generates text, and this other system out there that's a CRM that does certain things." — Daniel Whitenack

> "Separates out the agentic side of things is where you have some sort of orchestration performed by the LLM." — Daniel Whitenack
