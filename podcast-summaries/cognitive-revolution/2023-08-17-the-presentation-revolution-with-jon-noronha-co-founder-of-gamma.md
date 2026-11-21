---
title: "The Presentation Revolution with Jon Noronha, Co-Founder of Gamma"
date: 2023-08-17
show: cognitive-revolution
url: "https://www.cognitiverevolution.ai/the-presentation-revolution-with-jon-noronha-co-founder-of-gamma/"
youtube: "https://www.youtube.com/watch?v=d7dde4DMurY"
hosts: ["Nathan Labenz"]
guests: ["Jon Noronha"]
description: "Gamma's Jon Noronha explains how a writing-first 'anti-PowerPoint' became an AI presentation generator, and why HTML, few-shot prompting and user feedback made it work."
tags: ["generative-ai", "presentations", "prompt-engineering", "ai-product-design", "startups"]
source_transcript: "cognitive-revolution/episodes/2023/08/2023-08-17-the-presentation-revolution-with-jon-noronha-co-founder-of-gamma.md"
draft: false
---

## Thesis

Jon Noronha argues that Gamma's pre-AI bet on a writing-based, web-like presentation format turned out to suit large language models, which are best at transforming rough notes into structured output. AI began as an onboarding fix and became the core of the product. Nathan Labenz, comparing notes from Waymark, adds that creative tools suit AI because users tolerate imperfect first drafts.

## Key points

- **From onboarding aid to finished product.** Gamma launched in August 2022 without AI under the motto "Write like a doc, present like a deck". Noronha says only about 2% of new users figured out the blank page, so AI drafts were added to show off the product. Many users treated those drafts as finished work, saying it did 90% of a 10-20 hour task.
- **HTML as the model's native format.** Noronha says plain text, JSON and YAML failed; JSON worked about 85% of the time, and grid-based layout failed entirely. Generating HTML with custom tags for Gamma's semantic blocks worked because models have seen so much of it.
- **Model choices.** Gamma uses OpenAI GPT models with few-shot prompts rather than fine-tuning. The move to GPT-3.5 made calls 10 times cheaper. Noronha expects to move towards fine-tuned or self-trained models now that Gamma has scale.
- **Editing is hard.** Per-card AI editing works "about half the time", partly because chat-tuned models push back, for example suggesting a guitar when the user asked for a panda. The before/after toggle, inspired by Midjourney, collects feedback data.
- **Testing and images.** Prompt evaluation is homegrown. Noronha, whose team came from Optimizely, compares it to shipping code without tests. Gamma is about to roll out AI image generation served on Baseten (written "Base10" in the transcript), but still relies on image libraries for quality.
- **Competing with giants.** Noronha, a former Microsoft employee, expects big companies to let startups set patterns and follow later. He sees website building, which users pulled Gamma into, as possibly the bigger opportunity.

## Quotes

> "We basically prompt it and say, you are the world's best web designer. You have a gift for writing clean, structured HTML." — Jon Noronha

> "it feels like the equivalent of running a huge software code base with no automated tests in place, and just going based on vibes" — Jon Noronha
