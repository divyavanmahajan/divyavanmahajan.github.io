---
title: "How Palantir’s AI Bet is Revolutionizing Defense and Beyond, with CTO Shyam Sankar"
date: 2023-07-27
show: no-priors
episode: 25
url: "https://www.youtube.com/watch?v=uGSCeWP4zRg"
youtube: "https://www.youtube.com/watch?v=uGSCeWP4zRg"
duration_min: 40
hosts: ["Sarah Guo", "Elad Gil"]
guests: ["Shyam Sankar"]
description: "Shyam Sankar argues that LLMs become useful in the enterprise when grounded in an ontology, given tools, and built to change application state rather than chat."
tags: ["enterprise-ai", "palantir", "ontology", "defense", "ai-agents", "copilots"]
source_transcript: "no-priors/episodes/2023/07/2023-07-27-how-palantir-s-ai-bet-is-revolutionizing-defense-and-beyond-with-cto-s.md"
draft: false
---

## Thesis

Palantir CTO Shyam Sankar argues that LLMs are a "stochastic genie": powerful, but unreliable without tooling around them. In his view, Palantir's two decades of work on data integration and dynamic ontologies is what grounds these models in a business's reality. He thinks the value will accrue to whoever owns the application layer inside the enterprise.

## Key points

- **Forward deployed engineering.** Sankar joined as the 13th employee and first business hire, and built the forward deployed engineering team: computer scientists who combine product management, customer success and engineering. He credits Alex Karp's French-restaurant analogy as the origin of the idea.
- **Platform stack.** He describes Gotham (intelligence and defence), Foundry (data integration plus an ontology of an enterprise's "nouns" and "verbs") and Apollo (autonomous deployment of 550 microservices into air-gapped environments). AIP brings LLMs to private networks on top of these.
- **Tooling for a stochastic genie.** Sankar wants evals, production traces and use cases where a wrong answer is harmless. He suggests asking a configuration of "mad geniuses" rather than one model, and says Palantir's internal chat tool runs several models side by side, partly because GPT-4 is not available in classified environments.
- **Beyond chat.** He describes a Hawaii project that turns a Department of Defense operational plan into a course of action for evacuating civilians, delivered as maps and resource matrices rather than text. He also mentions a copilot for a car maker's warranty claims, and a feature scoped at two months for two people that an engineer built in a couple of hours.
- **Agents as state transitions.** Sankar is sceptical of agents that make their own plans. He prefers giving an agent authority over one state transition and expanding gradually, comparing this to Tesla's approach rather than Cruise's.
- **Healthcare.** He says healthcare is roughly a third of Palantir's business, including the NHS. He sees LLMs turning alert inboxes into staged, Git-branch-like recommendations that humans approve or reject.

## Quotes

> "the best use cases are going to be ones where when the llm gets it right there's massive upside and when it doesn't it's a no op" — Shyam Sankar

> "chat is a massively limiting interface you know at the limit prompts are for developers" — Shyam Sankar
