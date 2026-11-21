---
title: "[AIE Summit Preview #1] Swyx on Software 3.0 and the Rise of the AI Engineer"
date: 2023-10-07
show: latent-space
url: "https://lspace.beehiiv.com/podcast/s/latent_space_the_ai_engineer_podcast/aie_summit_preview_1_swyx_on_software_3_0_and_the_rise_of_the_ai_engineer"
duration_min: 39
hosts: ["Alessio Fanelli", "swyx"]
description: "Swyx argues that off-the-shelf foundation models (Software 3.0) let software engineers ship AI products without ML teams, creating a new AI engineer role driven by economics."
tags: ["software-3-0", "ai-engineering", "foundation-models", "rag", "ai-ux"]
source_transcript: "latent-space/episodes/2023/10/2023-10-07-aie-summit-preview-1-swyx-on-software-3-0-and-the-rise-of-the-ai-engin.md"
draft: false
---

## Thesis

In this crosspost from PodRocket, Tejas Kumar interviews swyx about his Software 3.0 keynote. Swyx argues that foundation models remove the need to collect data and train models before shipping, so AI work shifts "right" across the API boundary to software engineers. He predicts a specialist AI engineer role that will outnumber ML engineers, a claim he grounds in labor supply rather than technology.

## Key points

- **Software 1.0 to 3.0.** Building on Andrej Karpathy's Software 2.0 essay, swyx defines 1.0 as hand-written code, 2.0 as models trained on your own data, and 3.0 as off-the-shelf models; value has moved from code (Llama 2 is a few hundred lines) to data and weights.
- **Three levels of production.** Calling the OpenAI API is easiest but brings context limits, privacy and key-scraping risks; running llama.cpp or whisper.cpp locally is harder; serving your own models requires GPU expertise, since most operators reach only 40 to 50% model flop utilization.
- **The AI engineer.** Swyx draws a line at the API layer between ML engineers and software engineers, says the job is maybe 90% software engineering, and notes Karpathy agreed there will be more AI engineers than ML engineers.
- **The Software 3.0 stack.** A "system of reasoning" layer (OpenAI at a $40 billion valuation, Anthropic $10 to $15 billion, Hugging Face $4 billion), a RAG stack (Pinecone at $750 million; vector DBs raised $235 million this year; LangChain raised 35 million, LlamaIndex nine million), and AI UX, which he calls open water, citing GitHub Copilot and Vercel's v0.dev.
- **Skepticism.** Swyx coins "AI blame" for Chegg, whose stock fell 50% after it blamed ChatGPT despite a longer decline, and contrasts it with the Stochastic Parrots critique.

## Quotes

> "the time to MVP of an AI product has significantly by reduced by orders of magnitude in the Software 3.0 paradigm." — swyx

> "This is a prediction based on economics, on pure demand and supply of relative numbers of people with skill sets available." — swyx
