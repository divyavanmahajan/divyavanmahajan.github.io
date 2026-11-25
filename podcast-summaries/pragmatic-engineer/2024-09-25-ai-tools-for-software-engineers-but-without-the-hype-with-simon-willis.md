---
title: "AI tools for software engineers, but without the hype – with Simon Willison (co-creator of Django)"
date: 2024-09-25
show: pragmatic-engineer
url: "https://newsletter.pragmaticengineer.com/p/ai-tools-for-software-engineers-simon-willison"
youtube: "https://www.youtube.com/watch?v=uRuLgar5XZw"
duration_min: 73
hosts: ["Gergely Orosz"]
guests: ["Simon Willison"]
description: "Simon Willison argues that LLMs are hard-to-learn power-user tools that greatly reward experienced engineers who put in the time to build intuition about what they can and cannot do."
tags: ["llms", "ai-coding-tools", "developer-productivity", "rag", "local-models"]
source_transcript: "pragmatic-engineer/episodes/2024/09/2024-09-25-ai-tools-for-software-engineers-but-without-the-hype-with-simon-willis.md"
draft: false
---

## Thesis

Simon Willison, co-creator of Django and creator of Datasette, has used LLMs for close to three years. He argues they are power-user tools with no manual: you need a detailed mental model of their strengths and weaknesses before they pay off. Combined with real programming experience, he says they make engineers much more productive and more ambitious, while the human stays responsible for design decisions and for understanding every line that gets committed.

## Key points

- **Existential moment.** Willison describes ChatGPT's Code Interpreter answering a question about an uploaded SQLite database flawlessly, which felt like it solved the problem Datasette exists for. He responded by adding LLM features to his own software.
- **Fine-tuning vs RAG.** He calls fine-tuning mostly a waste of time for adding knowledge, but useful for tasks such as SQL generation. RAG is simple to demo but hard to make production-ready, and evals for non-deterministic models remain unsolved.
- **His stack.** Claude 3.5 Sonnet is his default. He uses GPT-4o for Code Interpreter and voice mode on dog walks, GitHub Copilot mainly for autocomplete, Claude Artifacts for UI prototypes, and his open-source LLM command-line tool.
- **Productivity.** He estimates he is two to three times faster at typing code, which is about 10% of his job. The bigger gain is ambition: he shipped Go to production without being a Go programmer.
- **Ethics and resistance.** He respects people who refuse models trained on unlicensed data, comparing it to veganism, but worries it could leave them at a professional disadvantage. He doubts AGI claims and would welcome a plateau.
- **Advice.** Do side projects or hack days, try the free top models, and run local models, which hallucinate wildly and so teach how LLMs really behave.

## Quotes

> "I would estimate I am two to three times more productive, faster at turning thoughts into working code, than I was before. But that's only 10% of my job." — Simon Willison

> "I don't think you should ever commit a line of code that the language model wrote if you don't understand it yourself." — Simon Willison
