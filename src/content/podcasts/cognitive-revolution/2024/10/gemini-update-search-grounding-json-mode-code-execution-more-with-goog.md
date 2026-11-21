---
title: >-
  Gemini Update: Search Grounding, JSON Mode, Code Execution, & More – with
  Google's Product Managers
description: >-
  Google's Gemini API product managers argue that low friction, a generous free
  tier, Flash's price-performance and Google-only features like search grounding
  will close Gemini's developer mindshare gap.
pubDate: '2024-10-31'
show: cognitive-revolution
url: >-
  https://www.cognitiverevolution.ai/gemini-update-search-grounding-json-mode-code-execution-more-with-googles-product-managers/
youtube: 'https://www.youtube.com/watch?v=R7M785Xgogs'
hosts:
  - Nathan Labenz
guests:
  - Shrestha Basu Mallick
  - Logan Kilpatrick
tags:
  - gemini
  - search-grounding
  - developer-platforms
  - inference-costs
  - multimodal
draft: false
---
## Thesis

Nathan Labenz asks why Gemini, despite top leaderboard placings and 14x API usage growth in six months, is still most developers' third choice after OpenAI and Anthropic. Logan Kilpatrick and Shrestha Basu Mallick answer that Gemini is less than a year old and is earning mindshare through shipping speed, low friction and features that draw on Google's infrastructure, with the new search grounding as the latest example.

## Key points

- **AI Studio versus Vertex.** Labenz warns that newcomers get lost in Vertex and should start in AI Studio; he integrated Gemini into his app in about 90 minutes. Kilpatrick describes AI Studio as a few clicks to an API key.
- **Multimodal and long-context use cases.** Kilpatrick points to tldraw; Basu Mallick cites New Computer's Dot (Flash compressing daily conversations into memory), Envision for low-vision users, and Locofy, which uses the long context window for Figma designs with hundreds of layers.
- **Cost is overestimated.** Kilpatrick says the free tier allows 1,500 Flash requests a day, potentially 1.5 billion tokens, and that developers anchor on two-year-old prices. Basu Mallick notes hidden costs in tool use and code execution.
- **Search grounding.** Basu Mallick explains a toggle plus a dynamic retrieval parameter that controls how often search is invoked, with inline source links and search suggestions. Kilpatrick frames citations as the path to deeper trust in AI output.
- **Roadmap in three buckets.** Basu Mallick lists learning from competitors, Google-unique features (grounding, YouTube links) and basic API quality such as error codes and rate limits. Multimodal fine-tuning is on the roadmap.
- **Design choices.** Gemini's structured outputs make fields optional by default, unlike OpenAI's; Kilpatrick says this matches how JSON schemas normally work, accepting some friction for developers coming from other providers.

## Quotes

> "Flash is literally in its own quadrant. There is no one else that is in that quadrant" — Logan Kilpatrick

> "costs have gone down 99.9% in the last 2 years" — Logan Kilpatrick
