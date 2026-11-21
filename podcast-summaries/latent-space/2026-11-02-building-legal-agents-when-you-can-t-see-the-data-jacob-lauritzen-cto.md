---
title: "Building Legal Agents When You Can't See the Data - Jacob Lauritzen, CTO of Legora"
date: 2026-11-02
show: latent-space
url: "https://lspace.beehiiv.com/podcast/s/latent_space_the_ai_engineer_podcast/building_legal_agents_when_you_can_t_see_the_data_-_jacob_lauritzen_cto_of_legora"
duration_min: 67
hosts: ["Alessio Fanelli", "swyx"]
guests: ["Jacob Lauritzen"]
description: "Legora builds legal agents without seeing any client data, relying on lawyer-built evals, a few flexible primitives and legal engineers to customise the product for law firms."
tags: ["legal-tech", "agents", "evals", "data-privacy", "forward-deployed-engineering"]
source_transcript: "latent-space/episodes/2026/11/2026-11-02-building-legal-agents-when-you-can-t-see-the-data-jacob-lauritzen-cto.md"
draft: false
---

## Thesis

Jacob Lauritzen, CTO of Legora, argues that a legal AI company can build a strong agent without ever seeing its users' work, because the data belongs to law firms' clients. Instead it approximates real tasks with evals built by lawyers, builds a small set of reusable primitives, and relies on "legal engineers" to fit the product to each firm. He expects lawyers to spend more time on judgement and client work, and less on reviewing documents.

## Key points

- **From chatbot to agent.** Legora began as ChatGPT with Swedish laws and a search tool, built by a small team in Stockholm. It switched from an assistant to an agent about a year ago, and now drafts, edits Word files and organises files. Lauritzen says roughly 60% of legal work is handled well today; the rest still needs more intelligence.
- **Evals without traces.** A mixed team of three engineers and three lawyers builds RL-style "worlds", such as a 10,000-file data room for due diligence, and tracks models in a heat map by practice area. He notes releases often regress some tasks, though one release lifted citation accuracy from 70% to 99% with no work on Legora's side.
- **Primitives over features.** Tabular Review runs the same question across thousands of documents, up to a million cells, and tests the first 10 rows before fanning out. Lists, Projects and the agent combine so that "agents can create lists, and lists can create agents".
- **Legal engineers and FDEs.** A pool of about 100 former Big Law lawyers, often with CS degrees, configure the product and help with evals. Forward deployed engineers write production code for integrations, without touching client data.
- **Models and infrastructure.** Legora runs on Azure because early law-firm customers did not trust AWS or Google. It is starting to post-train open-weight models for bounded tasks like legal research retrieval, and Lauritzen finds Fable and Opus too verbose for drafting, while Astra is more concise.
- **Team size.** He once aimed to stay at 20 engineers but now has 100 and says that feels too small given competition.

## Quotes

> "we can't look at any traces, basically. We can't look at any data 'cause it's all super confidential." — Jacob Lauritzen

> "if you're doing a, you know, $400 million M&A transaction, you're gonna want Legora." — Jacob Lauritzen
