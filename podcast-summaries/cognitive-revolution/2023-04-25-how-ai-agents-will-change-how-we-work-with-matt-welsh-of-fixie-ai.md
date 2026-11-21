---
title: "How AI Agents Will Change How We Work with Matt Welsh of Fixie.ai"
date: 2023-04-25
show: cognitive-revolution
url: "https://www.cognitiverevolution.ai/how-ai-agents-will-change-how-we-work-with-matt-welsh-of-fixie-ai/"
youtube: "https://www.youtube.com/watch?v=MHmd8hmpUMA"
hosts: ["Nathan Labenz"]
guests: ["Matt Welsh"]
description: "Matt Welsh argues AI agents will automate the plumbing of knowledge work, provided enterprises can control data flows, add guardrails and give agents trusted access to personal data."
tags: ["ai-agents", "process-automation", "enterprise-ai", "ai-safety", "privacy"]
source_transcript: "cognitive-revolution/episodes/2023/04/2023-04-25-how-ai-agents-will-change-how-we-work-with-matt-welsh-of-fixie-ai.md"
draft: false
---

## Thesis

Matt Welsh, CEO and co-founder of Fixie.ai (which had just raised a $17 million seed round), argues that language models can already automate much of the routine routing of information that people do by hand. What they lack are the "appendages" into company systems. In his view, the main open problems are enterprise data control, safety mechanisms around models, and a trusted, transparent way to give agents access to personal data.

## Key points

- **A 2D map of AI apps.** Welsh places applications on two axes: in-line copilot versus fire-and-forget autonomy, and language synthesis (Jasper) versus process automation. Fixie aims at the autonomous, process-automation corner. He cites Google's LaMDA paper on tool use as the company's starting inspiration.
- **Email triage as a concrete case.** Welsh says about 70% of his email as CEO is sales outreach. His EA currently sorts and answers it, and he sees that categorising and replying as an obvious task to automate.
- **Enterprise data flow.** Welsh expects enterprises to build their own in-house agents rather than adopt third-party ones. Each query touches a language model, a vector database such as Pinecone, and stored history, and each needs a clear answer on where data lives. He sees good self-hostable open-source models (he names Red Pajama and Stability AI) as the biggest gap.
- **Guardrails and validator models.** Welsh points to human-in-the-loop use cases, such as drafted emails, as low-risk today. For deeper automation he highlights Shreya Rajpal's Guardrails project and proposes small, task-tuned models whose only job is to check other models' outputs.
- **Memory and sessions.** Fixie sessions are append-only conversation logs, mostly short-lived. Welsh argues that long-term memory must be segmented by user and by context (work vs personal) so that irrelevant history does not "poison" it.
- **Form factor and hopes.** Welsh expects an earpiece-plus-phone interface like the film Her, rather than glasses. His hope is that natural-language computing reaches everyone, not just programmers. His fear is that education and assessment will lose their footing.

## Quotes

> "probably 70% of the email that I get is people trying to sell me things that I don't need right now" — Matt Welsh

> "you need to be a member of an elite priesthood that knows how to write code and write programs" — Matt Welsh
