---
title: "The AI Revolution in Education with Shawn Jansepar, Director of Engineering at Khan Academy"
date: 2023-08-15
show: cognitive-revolution
url: "https://www.cognitiverevolution.ai/the-ai-revolution-in-education-with-shawn-jansepar-director-of-engineering-at-khan-academy/"
youtube: "https://www.youtube.com/watch?v=ati_ACj1Dic"
hosts: ["Nathan Labenz"]
guests: ["Shawn Jansepar"]
description: "Khan Academy built its Socratic tutor Khanmigo on GPT-4 by moving fast, wrapping the model in moderation and hidden reasoning steps, and targeting under-resourced school districts first."
tags: ["education", "ai-tutors", "gpt-4", "prompt-engineering", "ai-safety"]
source_transcript: "cognitive-revolution/episodes/2023/08/2023-08-15-the-ai-revolution-in-education-with-shawn-jansepar-director-of-enginee.md"
draft: false
---

## Thesis

Shawn Jansepar, director of engineering at Khan Academy, argues that GPT-4 turned the personal AI tutor from a distant idea into a product problem, because it was the first model able to stay Socratic instead of handing out answers. He describes how Khan Academy shipped Khanmigo quickly, accepting tech debt and favoring reversible decisions, and predicts that within ten years every student will have an always-available tutor.

## Key points

- **From Slack bot to launch.** Jansepar got GPT-4 access around October via a Slack bot, then the team prototyped a Chrome extension, tested it with students at Khan Lab School, and launched Khanmigo alongside GPT-4 in March.
- **GPT-4 only for tutoring.** Khanmigo runs mostly on GPT-4; GPT-3.5 is acceptable for activities like story writing but not for tutoring. Before launch, Sal Khan and the content team contributed to OpenAI's reinforcement learning to make the model a better math tutor.
- **Hidden reasoning and guardrails.** When a message is about math, Khanmigo first asks the model to reason privately about the student's answer, then tutors based on those "private thoughts". Every message goes through OpenAI's moderation API, and an embeddings knowledge base answers questions about Khanmigo itself.
- **Data-informed, not data-driven.** Jansepar uses Amazon's one-way versus two-way door framework: reversible choices such as prompts move on intuition, while choices like moving the back end from Python to Go get careful analysis. In hindsight he would have used LangChain and better labeling tools than a custom Google spreadsheet.
- **Cost and caching.** A dedicated OpenAI instance rewards shared prompt prefixes, so the team moved user-specific variables to the end of prompts to raise cache hits. Usage is capped at 200,000 tokens a day to prevent abuse.
- **Distribution and evidence.** Khanmigo is sold per student per month to districts, prioritizing schools with many free and reduced lunch students, with corporate sponsors covering gaps. Efficacy will be measured with standardized tests such as NWEA's MAP Growth, and text-to-speech and classroom group activities are on the roadmap.

## Quotes

> "In 10 years from now, I don't think there'll be any kid who's learning without a personal tutor next to them, on demand, available all the time" — Shawn Jansepar

> "it made it better at tutoring you at math. That's the key thing that we trained it on." — Shawn Jansepar
