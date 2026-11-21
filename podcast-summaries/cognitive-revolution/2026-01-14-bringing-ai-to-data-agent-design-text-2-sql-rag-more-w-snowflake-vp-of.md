---
title: "Bringing AI to Data: Agent Design, Text-2-SQL, RAG, & more, w- Snowflake VP of AI Baris Gultekin"
date: 2026-01-14
show: cognitive-revolution
url: "https://www.cognitiverevolution.ai/bringing-ai-to-data-agent-design-text-2-sql-rag-more-w-snowflake-vp-of-ai-baris-gultekin/"
youtube: "https://www.youtube.com/watch?v=txYahwrTEZA"
hosts: ["Nathan Labenz"]
guests: ["Baris Gultekin"]
description: "Snowflake's Baris Gultekin argues enterprises get trustworthy AI by running models next to governed data, and that reasoning models have made text-to-SQL reliable enough for business users."
tags: ["enterprise-ai", "text-to-sql", "rag", "data-governance", "ai-agents"]
source_transcript: "cognitive-revolution/episodes/2026/01/2026-01-14-bringing-ai-to-data-agent-design-text-2-sql-rag-more-w-snowflake-vp-of.md"
draft: false
---

## Thesis

Baris Gultekin, VP of AI at Snowflake, argues that enterprises want to bring AI to their data rather than send data out to model providers, so existing security and access controls carry over to agents. He says reasoning models have made text-to-SQL and retrieval good enough to deploy to non-analysts, and that a company's data, not its choice of model, is what differentiates its AI.

## Key points

- **Unstructured data unlocked.** Gultekin says 80 to 90% of enterprise data is unstructured. AI now extracts structure from documents such as contracts and combines them with structured tables, for example equity research PDFs alongside stock data.
- **Text-to-SQL works now.** Revenue questions leave little room for error and real schemas span thousands of tables, but in the past six months to a year reasoning models plus semantic models built from metadata, BI dashboards and past queries have made it reliable. Snowflake Intelligence, its agent platform for business users, is Snowflake's fastest-growing product; Snowflake also launched the Open Semantic Interchange with partners such as Tableau.
- **Models to the data.** Frontier models run inside the Snowflake security boundary as stateless sub-processors via cloud-provider and lab agreements. Agents inherit user permissions, so the same sales or HR agent returns different answers to different people.
- **Right-sizing models.** For hundreds of millions of documents Snowflake uses its own much smaller extraction model for cost and throughput; custom models make sense only for high-volume, unfamiliar or cost-sensitive tasks. Customers rarely switch models once prompts are tuned.
- **Agents and value.** Business users need structured, optimised agents (5,000 Snowflake sellers use an internal sales assistant), while engineers get coding agents. Gultekin expects value to accrue to infrastructure, models and horizontal applications while the "middle" of custom business-logic software erodes.
- **Product management changes.** He says coding agents let teams ship a skill in a day and validate before building a full UI. He doubts drop-in AI knowledge workers arrive by Q2 2026, Labenz's reported prediction, except for tightly scoped tasks.

## Quotes

> "the middle will erode and the sides will continue expanding." — Baris Gultekin

> "ultimately, anything that you do is as good as the data that you provide to it." — Baris Gultekin
