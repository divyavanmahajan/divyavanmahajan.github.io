---
title: "Shortwave Rides the Tidal Wave: Inbox Agents, Hyper-Growth & Hiring AI Managers, with CEO Andrew Lee"
date: 2025-03-29
show: cognitive-revolution
url: "https://www.cognitiverevolution.ai/shortwave-rides-the-tidal-wave-inbox-agents-hyper-growth-hiring-ai-managers-with-ceo-andrew-lee/"
youtube: "https://www.youtube.com/watch?v=b51Nwea2KKg"
duration_min: 112
hosts: ["Nathan Labenz"]
guests: ["Andrew Lee"]
description: "Andrew Lee explains how Shortwave rebuilt its email assistant around one large model calling tools in a loop, and why speed is now the only moat for software companies."
tags: ["ai-agents", "email", "prompt-caching", "startups", "ai-native-teams"]
source_transcript: "cognitive-revolution/episodes/2025/03/2025-03-29-shortwave-rides-the-tidal-wave-inbox-agents-hyper-growth-hiring-ai-man.md"
draft: false
---

## Thesis

Shortwave CEO Andrew Lee tells Nathan Labenz that the company's rapid revenue growth came from turning a so-so email assistant into an agent that works like a virtual assistant. Lee says Shortwave now sees itself as "an AI with email features built in", and argues that because AI makes software faster to build, small and fast in-person teams will win.

## Key points

- **Whole stack rewritten.** Lee says every layer has changed in a year: Pinecone serverless, a larger BGE embedding model, and hybrid search that combines a metadata-constrained full-text query with semantic search. Because the agent can run several searches in a row, the backend could be simpler.
- **One big model in a loop.** Lee replaced the old single-call pipeline with Claude calling tools repeatedly. He says Anthropic's prompt caching cuts about 90% of the cost and that without it Shortwave could not afford to run. Smaller jobs use a fine-tuned GPT-4o mini for autocomplete and Llama 3.2 for quick replies.
- **Sceptical of multi-agent handoffs.** In Lee's experience, splitting work across specialised sub-agents makes systems brittle. He prefers one large model with all instructions in context, and predicts handoffs will not take off.
- **Light evals, real retention.** Lee keeps a Notion doc of more than 100 golden prompts and releases big changes as opt-in experiments. The unsubscribe tool had 99% retention before it went live for everyone.
- **Examples beat fine-tuning.** For writing in a user's voice, Lee argues that putting past emails into Claude as examples gets facts right and makes model swaps easy, while fine-tuning does neither.
- **Business and team.** Shortwave now makes a profit on each user, and nearly all growth is in its most expensive plan; Lee thinks a $200 a month tier could work. He plans to stay at about 15 people for the next year, works in person in San Francisco, and asks applicants for a 5-minute video.

## Quotes

> "We think of ourselves as we are an AI with email features built in." — Andrew Lee

> "But if you get it working, it can save you 90% of your cost. It's a hugely impactful thing." — Andrew Lee
