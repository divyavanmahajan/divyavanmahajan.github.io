---
title: "[AI Breakdown] Summer AI Technical Roundup: a Latent Space x AI Breakdown crossover pod!"
date: 2023-08-04
show: latent-space
url: "https://lspace.beehiiv.com/podcast/s/latent_space_the_ai_engineer_podcast/ai_breakdown_summer_ai_technical_roundup_a_latent_space_x_ai_breakdown_crossover_pod"
duration_min: 59
hosts: ["Alessio Fanelli", "swyx"]
guests: ["NLW"]
description: "Reviewing July 2023, swyx and Alessio Fanelli argue that Code Interpreter and Llama 2 mattered more than raw model upgrades, as value shifts to tools, inference time and data."
tags: ["code-interpreter", "llama-2", "open-source-ai", "ai-companions", "llm-evaluation"]
source_transcript: "latent-space/episodes/2023/08/2023-08-04-ai-breakdown-summer-ai-technical-roundup-a-latent-space-x-ai-breakdown.md"
draft: false
---

## Thesis

In this feed swap with NLW's AI Breakdown, swyx and Alessio Fanelli look back at July 2023. Their main argument is that the important progress came from capability around models rather than bigger models: Code Interpreter gave ChatGPT tools and more inference time, and Llama 2 put a GPT-3.5-class model in companies' hands. Both say competition is moving to data, evals and product.

## Key points

- **Code Interpreter as "GPT-4.5".** swyx notes that it ships as a separate model and does better even on non-code tasks. He thinks the main innovation is letting the model spend more inference time on harder problems. He suggests OpenAI avoided the 4.5 label for regulatory reasons.
- **Did GPT-4 get worse?** Alessio says open-ended outputs are hard to evaluate, and points to Copilot's code-retention metrics as a rare good eval. swyx describes a cultural mismatch: OpenAI updates models like a research lab, but customers need product-level stability.
- **Llama 2.** swyx calls it the first commercially usable GPT-3.5 equivalent. Alessio's post arguing that it is not technically open source but still a net positive drew 228 Hacker News comments. He values it as about $3 million of donated compute. swyx says the models are now more open than the data, which suggests compute is becoming a commodity.
- **Claude 2.** swyx says the 100K context window gives Anthropic a foothold. He reports that Sourcegraph builds on it and that Claude wins about 30% of his side-by-side comparisons. He also cites the "lost in the middle" findings on long-context retrieval.
- **Companions and agents.** swyx calls AI girlfriend apps a large, little-discussed market with millions of users. He says agents remain hard to scope, and that eval and observability startups such as LangSmith are multiplying.
- **August outlook.** Alessio expects more companies to talk publicly about running open models in production. swyx expects the AI engineer role to become a formal profession. NLW predicts a quieter August.

## Quotes

> "every second or millisecond- Extra spent on inference is worth like 10,000 of that in training" — swyx

> "it is the first instance where the models are more open than the data" — swyx
