---
title: "What’s Beyond GitHub Copilot? With Copilot's Chief Architect and founder of Minion.AI Alex Graveley"
date: 2023-03-30
show: no-priors
episode: 10
url: "https://www.youtube.com/watch?v=wdfuOA2PxJg"
youtube: "https://www.youtube.com/watch?v=wdfuOA2PxJg"
duration_min: 36
hosts: ["Sarah Guo", "Elad Gil"]
guests: ["Alex Graveley"]
description: "Alex Graveley explains how GitHub Copilot went from a weak code model to a product people kept using, with latency as the deciding factor, and why his next company, Minion AI, builds agents that take actions."
tags: ["github-copilot", "ai-agents", "developer-tools", "latency", "product-development"]
source_transcript: "no-priors/episodes/2023/03/2023-03-30-what-s-beyond-github-copilot-with-copilot-s-chief-architect-and-founde.md"
draft: false
---

## Thesis

Alex Graveley, Copilot's chief architect, describes Copilot as a skunkworks project that worked because the team kept iterating on a model that barely worked at first, found the right interface (inline gray-text completion) and then cut latency as far as they could. He argues that the next step is AI that takes actions for people, which is what his startup Minion AI is building.

## Key points

- **A weak start.** Graveley says OpenAI's first code model was a training artifact that only handled Python and passed fewer than 10% of real-world repository tests. Using more of GitHub's code, better prompts and diffs pushed that past 60%.
- **The interface mattered.** The team tried pop-up lists, buttons over empty functions and side panels before Graveley hacked Gmail-style gray-text autocomplete into VS Code. He says it took less than a year from start to public launch.
- **Speed above all.** Low completion rates in India turned out to be network latency, because OpenAI had one data center, in Texas. Graveley says each 10 milliseconds cost about 1% of completions, so Microsoft brought up GPUs in Europe early. Gil adds that speed has mattered on every product he worked on at Google.
- **Retention and cost.** Graveley reports weekly-cohort retention above 50% months after launch. Early inference estimates of $30 per user per month fell to $10 and then lower, which let him argue for low pricing instead of an enterprise-only product.
- **Agents and Minion.** Graveley wants AI that books flights, organises schedules and does taxes, breaking complex tasks into steps the way humans do. He says the gap that defeated his earlier work at Magic (connecting AI to real-time data) now looks solvable.
- **Risks and hiring.** He worries less about AI killing us than about bad actors using it for scams, and points to account filtering and Cloudflare-style fingerprinting as defences. On hiring, he finds that very senior and very junior people grasp the technology fastest.

## Quotes

> "There's something crazy thing like every 10 milliseconds is 1% fewer completions that people would do" — Alex Graveley

> "I'm more worried about bad people using new technology to hurt us." — Alex Graveley
