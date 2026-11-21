---
title: "AI-powered Search for the Enterprise — with Deedy Das of Glean"
date: 2023-04-22
show: latent-space
url: "https://lspace.beehiiv.com/podcast/s/latent_space_the_ai_engineer_podcast/ai-powered_search_for_the_enterprise_with_deedy_das_of_glean"
duration_min: 64
hosts: ["Alessio Fanelli", "swyx"]
guests: ["Deedy Das"]
description: "Deedy Das argues that good search comes from rigorous ranking work rather than buzzword AI, and warns that chat interfaces threaten the ad model that funds the web."
tags: ["enterprise-search", "llms", "search-ranking", "ads-business-model", "startups"]
source_transcript: "latent-space/episodes/2023/04/2023-04-22-ai-powered-search-for-the-enterprise-with-deedy-das-of-glean.md"
draft: false
---

## Thesis

Deedy Das, a founding-team member of Glean and formerly of Google Search, argues that search quality comes from patient, disciplined ranking work, not from dropping in LLMs and embeddings. He thinks chat will win some query types but not all. He also warns that chat interfaces undermine the advertising model that pays for the free web, and that many LLM startups pick a technology first and look for a problem afterwards.

## Key points

- **Origin of Glean.** Das says Glean recreates Moma, Google's internal search tool, for other companies. He says it became feasible because of distributed Elastic, rich SaaS APIs that expose permissions, and companies now using 10 to 100 apps.
- **Search alone doesn't retain users.** Das argues a workplace tool must be an employee portal, with go links, a feed and a new Mentions view of tags across Slack, Jira, email and GitHub. He says productivity tools are hard to sell to IT buyers because they don't clearly raise revenue or cut cost, unlike customer-support tools.
- **Hybrid ranking.** Das says Google ran on classical information retrieval with stacked ranking components until about 2017-2018. Glean combines core IR signals, synonyms, acronym expansion and vector search, with a personalization layer on top.
- **Chat vs Google.** Das, a paying ChatGPT Plus user, says Google still wins on fresh and list-style queries, while ChatGPT wins on long-tail and coding questions. He notes Bing earns $11 billion in ad revenue, which he doubts subscriptions could replace.
- **Cheap specialised models.** Das highlights using GPT-4 to generate synthetic data, then distilling it into small, fast models, for example for entity tagging. He estimates final training runs at about $4 million for LLaMA and $27 million for PaLM, with the full development cost perhaps 10x higher.
- **Exam data exposé.** In 2013 Das scraped Indian board-exam results and found missing marks (nobody scored 91, for example) and blanket score adjustments. He says the exams affect about 1.1 million students a year.

## Quotes

> "search in itself is not a compelling enough use case to keep people drawn to your product" — Deedy Das

> "it's not about how advanced or how complex the technology is, it's about the rigor and, um, intellectual honesty that you put into tuning the ranking algorithm" — Deedy Das
