---
title: "Emergency Pod: OpenAI's new Functions API, 75% Price Drop, 4x Context Length (w/ Alex Volkov, Simon Willison, Riley Goodside, Joshua Lochner, Stefania Druga, Eric Elliott, Mayo Oshin et al)"
date: 2023-06-14
show: latent-space
url: "https://lspace.beehiiv.com/podcast/s/latent_space_the_ai_engineer_podcast/emergency_pod_openai_s_new_functions_api_75_price_drop_4x_context_length_w_alex_volkov_simon_willison_riley_goodside_joshua_lochner_stefania_druga_eric_elliott_mayo_oshin_et_al"
duration_min: 88
hosts: ["Alessio Fanelli", "swyx"]
guests: ["Alex Volkov", "Simon Willison", "Riley Goodside", "Joshua Lochner", "Stefania Druga", "Eric Elliott", "Mayo Oshin"]
description: "A developer panel reads OpenAI's June 2023 update as a shift from prompt engineering to fine-tuned function calling, with cheaper embeddings and longer context but prompt injection still unsolved."
tags: ["function-calling", "openai", "prompt-injection", "embeddings", "agents", "long-context"]
source_transcript: "latent-space/episodes/2023/06/2023-06-14-emergency-pod-openai-s-new-functions-api-75-price-drop-4x-context-leng.md"
draft: false
---

## Thesis

In a Twitter Space hosted by Alex Volkov, swyx and a panel of developers react to OpenAI's June 2023 update: a functions API, 75% cheaper embeddings, 25% cheaper GPT-3.5 and a 16K context window. Most of the panel see function calling as an existing prompt-engineering pattern that OpenAI has now fine-tuned into the model, which lowers friction. Simon Willison warns that it also makes prompt injection more dangerous.

## Key points

- **Price and context.** Volkov notes the embedding cut follows an earlier 90% drop, and cites estimates that embedding the whole internet fell from about $50 million to $12.5 million. swyx suggests that embeddings are also a form of lock-in, which gives OpenAI a reason to make them cheap.
- **Functions as productised plugins.** swyx calls the new function role the ChatGPT plugins API opened to all developers. Riley Goodside points out that it relies on fine-tuning rather than grammar constraints, so OpenAI still warns that output may be malformed or hallucinated.
- **Few, powerful functions.** Willison suggests exposing two or three functions with rich inputs, such as one that accepts SQLite queries, instead of many narrow ones.
- **LLM core vs code core.** swyx contrasts an "LLM core, code shell" design with an "LLM shell, code core" design, citing NVIDIA's Voyager as a model for building a library of verified code. Mayo Oshin argues that LangChain and prompting already did much of this.
- **Security.** Willison says filters that catch 99% of injections are useless against adversaries. He wants destructive actions to be reversible or to require human approval.
- **Wish lists.** Stefania Druga asks for knowledge-graph retrieval and says chat should not be the interface for everything. Joshua Lochner (Xenova) wants an open-source model from OpenAI. Goodside argues that falling prices and larger context may matter more than functions.

## Quotes

> "whoever provides the most input as part of your prompt, they have full control over what comes out of the prompt at the other end." — Simon Willison

> "we might be moving from a code, you know, LLM core, code shell world into a LLM shell, code core world, and I feel like that is a very big shift." — swyx
