---
title: "How To Hire AI Engineers — with James Brady & Adam Wiggins of Elicit"
date: 2024-06-21
show: latent-space
url: "https://lspace.beehiiv.com/podcast/s/latent_space_the_ai_engineer_podcast/how_to_hire_ai_engineers_with_james_brady_adam_wiggins_of_elicit"
duration_min: 64
hosts: ["Alessio Fanelli", "swyx"]
guests: ["James Brady", "Adam Wiggins"]
description: "Elicit's James Brady and Adam Wiggins argue that good AI engineers combine solid software engineering, curiosity about language models and a fault-first mindset for unreliable models."
tags: ["ai-engineering", "hiring", "reliability", "software-engineering", "llm-applications"]
source_transcript: "latent-space/episodes/2024/06/2024-06-21-how-to-hire-ai-engineers-with-james-brady-adam-wiggins-of-elicit.md"
draft: false
---

## Thesis

James Brady, head of engineering at Elicit, and Adam Wiggins, Heroku co-founder and Elicit's "internal journalist", talk with swyx about how Elicit hires AI engineers. Brady argues the role is mostly conventional software engineering plus curiosity about ML and a fault-first mindset, because language models are slow, variable and unpredictable at the core of the application. Wiggins adds that this combines distributed-systems thinking with a product mindset in one person.

## Key points

- **Three qualities.** Brady lists conventional engineering skill, enthusiasm for language models and the ability to build resilient systems. He reports seeing tenfold swings in P90 latency within an hour, plus malformed JSON.
- **Familiar tools, applied carefully.** Elicit relies on retries, fallbacks, timeouts, parallelisation, types shared from Python to TypeScript via OpenAPI, and checked exceptions. Wiggins notes retries cost money, and Brady says Elicit replaced a degraded search fallback with an error message.
- **Model switching, not gateways.** Elicit has several dozen backend paths and changes models and prompts often, so fallback prompts stay current. Brady sees central AI gateways like those at Salesforce or Walmart fitting large or regulated firms, not Elicit.
- **Interviewing the unhappy path.** A coding exercise of adding features and fixing bugs and a system-design session both force candidates to handle failures. There is no ML-specific interview; curiosity is judged in conversation. Brady wants interviews to simulate working together rather than LeetCode-style puzzles.
- **ML-first means letting go.** Brady recalls wanting strict structure for citations while CEO Andreas suggested a few examples and a regex. He expects careful prompt engineering to matter less than framing the problem well.
- **Sourcing.** Brady looks for side projects, finds senior engineers on LinkedIn and has hired through 80,000 Hours and EA Global. Wiggins pairs visible work such as blog posts and open source with genuine outbound networking; swyx recommends hackathon winner lists.

## Quotes

> "We do often, normally in fact, see a 10X variation in the P90 latency over the course of half an hour, an hour when we're, when we're prompting these models" — James Brady

> "I don't think that prompt engineering is gonna be a kind of durable differential skill that people will, will hold." — James Brady
