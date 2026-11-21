---
title: "GenAI hot takes and bad use cases"
date: 2025-02-24
show: practical-ai
episode: 304
url: "https://share.transistor.fm/s/8dbe8848"
duration_min: 31
hosts: ["Chris Benson", "Daniel Whitenack"]
guests: []
description: "Generative AI is the wrong tool for fully autonomous agents, time-series forecasting, prompt-only app development, low-latency inspection and most of the world's languages, the hosts argue."
tags: ["generative-ai", "use-cases", "agents", "forecasting", "low-resource-languages"]
source_transcript: "practical-ai/episodes/2025/02/2025-02-24-genai-hot-takes-and-bad-use-cases.md"
draft: false
---

## Thesis

Daniel Whitenack and Chris Benson push back on the habit of using generative AI for everything. Whitenack lists five cases where it currently disappoints, and Benson adds his own. Their shared conclusion is that GenAI works best as an assistant with a human in the loop and guardrails, not as an unsupervised decision-maker in high-stakes settings.

## Key points

- **Fully autonomous agents.** Whitenack argues that agents with no human in the loop, such as one that runs an entire sales process from LinkedIn prospecting to closing the deal, are fragile and error-prone. Tools that help a salesperson prospect or build dossiers work far better.
- **Time-series forecasting.** Pasting data into ChatGPT or DeepSeek to get a forecast will end badly, says Whitenack, because LLMs are weak with numbers. A model can write code that calls Prophet or statsmodels, but the forecasting is then not GenAI. Benson adds high-stakes financial trading to the list.
- **Building a whole application from a prompt.** Both hosts say tools like Devin, Cursor, Windsurf and All Hands speed up development when treated as pair programmers. Benson has only ever produced toy programs without interaction, despite what some CEOs claim.
- **High-throughput, low-latency work.** Whitenack points to quality checks on a manufacturing line: a purpose-trained computer vision model can run on CPU with higher accuracy than a general vision model that needs a GPU. Benson extends this to real-time systems with critical outcomes, such as autonomous swarms, where GenAI fits only in the human interface.
- **Linguistic and cultural diversity.** Whitenack notes that models work in perhaps the top five to ten languages out of about 7,000, and that much surrounding tooling cannot even handle right-to-left scripts such as Arabic.
- **High-stakes advice.** Benson closes by naming legal advice and medical diagnosis as areas where AI helps but should not act alone.

## Quotes

> "there's 7,000 spoken languages in the world, which means they basically don't work for any of the languages of the world, except for a couple." — Daniel Whitenack

> "you don't want to put a general a general generative AI model in charge of doing things for which there are no guardrails." — Chris Benson
