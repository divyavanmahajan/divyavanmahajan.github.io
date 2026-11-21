---
title: "2024 in Agents [LS Live! @ NeurIPS 2024]"
date: 2024-12-25
show: latent-space
url: "https://lspace.beehiiv.com/podcast/s/latent_space_the_ai_engineer_podcast/2024_in_agents_ls_live_neurips_2024"
duration_min: 49
hosts: ["Alessio Fanelli", "swyx"]
guests: ["Graham Neubig"]
description: "Graham Neubig argues that strong coding agents need few tools, light planning and good models, and predicts agent-focused LLMs and saturated benchmarks in 2025."
tags: ["agents", "coding-agents", "openhands", "benchmarks", "open-source"]
source_transcript: "latent-space/episodes/2024/12/2024-12-25-2024-in-agents-ls-live-neurips-2024.md"
draft: false
---

## Thesis

Graham Neubig (CMU professor, chief scientist at All Hands AI and maintainer of OpenHands) argues that a capable agent mostly needs what a human developer has: a terminal, a file editor, a browser and the ability to write code. He walks through eight recurring design problems, from the agent-computer interface to evaluation, and argues that a single well-instructed agent on a strong model beats elaborate multi-agent structures for now.

## Key points

- **Code as the action space.** Neubig says OpenHands exposes tools as Python APIs so the agent writes one program instead of making some 20 to 30 separate tool calls, and limits it to roughly five or six tools: bash, Jupyter, two file-editing tools and web browsing.
- **Model choice matters.** In his team's evaluation Claude clearly outperformed GPT-4o, o1-mini, Llama 3.1 405B and DeepSeek 2.5, mainly because it recovers from errors instead of looping.
- **Single agent, light planning.** He prefers one prompt with ordered instructions over explicit multi-agent pipelines, which get stuck when a task deviates from the plan. Simple trigger-based "micro-agents" add instructions, for example to use the GitHub API rather than browse GitHub.
- **Learning from past work.** His group's Agent Workflow Memory paper feeds successful workflows back into the prompt and reports a 22.5% gain on WebArena after 40 examples.
- **Real-world success rates.** Neubig estimates agents solve 30-40% of his own issues unaided and 80-90% with feedback, below SWE-bench verified scores he attributes partly to training-data leakage. He says agents are poor at knowing when to ask for help.
- **Predictions.** He expects every large LLM trainer to focus on agent ability by mid-2025, falling prices, saturating benchmarks such as WebArena and SWE-bench, and websites needing APIs for agents. He is sceptical that Anthropic's MCP adds much over existing APIs.

## Quotes

> "I use coding agents maybe five to ten times a day to help me solve my own problems." — Graham Neubig

> "The reason why is agents are building agents, and better agents will build better agents faster." — Graham Neubig
