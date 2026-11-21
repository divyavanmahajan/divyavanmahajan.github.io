---
title: "Latent.Space 2024 Year in Review"
date: 2024-12-31
show: latent-space
url: "https://lspace.beehiiv.com/podcast/s/latent_space_the_ai_engineer_podcast/latent_space_2024_year_in_review"
duration_min: 112
hosts: ["Alessio Fanelli", "swyx"]
guests: []
description: "For their 100th episode, swyx and Alessio Fanelli look back on 2024: pre-training scaling slowed, inference-time compute took over, the cost of intelligence fell sharply and OpenAI's market share shrank."
tags: ["ai-industry", "inference-compute", "llm-pricing", "ai-agents", "benchmarks", "year-in-review"]
source_transcript: "latent-space/episodes/2024/12/2024-12-31-latent-space-2024-year-in-review.md"
draft: false
---

## Thesis

swyx and Alessio Fanelli argue that 2024 ended the "just scale pre-training" era. Ilya Sutskever, Noam Brown and the winning side of the Latent Space Live debate all said pre-training has hit some kind of wall. Inference-time compute is the new direction. Model costs fell faster than anyone expected and the frontier race tightened, but the hosts see no AI winter. They say agents now have to deliver in 2025.

## Key points

- **The market spread out.** Using Ramp and OpenRouter figures, the hosts say OpenAI fell from about 95% of production traffic to somewhere between 50% and 75%. Claude 3 and 3.5 Sonnet took share, and Gemini Flash's generous free tier made it about half of OpenRouter requests. They now see a tier-zero frontier of three labs: Gemini, Anthropic and OpenAI.
- **The business model is changing.** swyx says inference-time compute turns pre-training's fixed costs into variable costs that labs can pass on to customers with a margin. He thinks this hurts open source, because a donor can pay for training compute but not for inference compute. He sees the gap with closed models widening since o1.
- **The cost of intelligence fell sharply.** swyx's price-versus-Elo charts show that GPT-4-level quality, about $40 per million tokens at the start of the year, now costs a few cents with Amazon Nova. That is almost three orders of magnitude in a year, against his earlier rule of thumb of 10x per year.
- **A GPU "smiling curve".** The very GPU-rich labs keep building huge clusters. Apps like Suno (running on Modal) and Bolt reached about $20 million in ARR without owning GPUs. The middle, such as Inflection and Character, struggled.
- **Benchmarks and capabilities.** The benchmarks that matter changed from MMLU and GSM8K to SWE-bench Verified, LiveBench, MMLU Pro, AIME and FrontierMath. SWE-bench rose from about 13% to about 50%. The hosts call long context, RAG and transcription mature, and tool use and vision emerging.
- **Memory and agents.** Alessio thinks today's memory products only summarise what users say explicitly. swyx calls memory immature but necessary.

## Quotes

> "even though people understand that intelligence has become cheaper, I don't think people are appreciating how much more accelerated this year has been." — swyx

> "I think 2025 will be the first year where the AI sets the skill floor of a role, you know?"
