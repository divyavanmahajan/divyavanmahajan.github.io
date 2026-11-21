---
title: >-
  AI Superpowers for Frontend Developers, with Vercel Founder/CEO Guillermo
  Rauch
description: >-
  Guillermo Rauch argues foundation models are 'Cloud 2.0' backends and that
  most AI value will come from frontend integration, streaming infrastructure
  and AI-generated UI code.
pubDate: '2023-08-31'
show: no-priors
episode: 30
url: 'https://www.youtube.com/watch?v=gxTYx1nVGG8'
youtube: 'https://www.youtube.com/watch?v=gxTYx1nVGG8'
durationMin: 38
hosts:
  - Sarah Guo
  - Elad Gil
guests:
  - Guillermo Rauch
tags:
  - frontend
  - developer-tools
  - web-infrastructure
  - ai-sdk
  - bot-detection
draft: false
---
## Thesis

Vercel CEO Guillermo Rauch tells Sarah Guo and Elad Gil that foundation models are a new "Cloud 2.0" backend layer, and that much of the value will come from the last mile of integration into useful products. Vercel's bet is to make AI as easy for frontend engineers as deploying a website. Rauch also expects AI to reshape crawling, security, web architecture and how UI code gets written.

## Key points

- **AI SDK and streaming.** Rauch describes the Vercel AI SDK, which connects to OpenAI, Hugging Face and Replicate, and Edge Functions that stream responses. Typical backends answer in about 100 milliseconds, while a model can take 15-20 seconds to finish a response.
- **Build new products, not add-ons.** He argues you don't need to train or fine-tune a model to build something useful, and cites Jenni.ai growing from $1M to $1.5M ARR in two months with a tool for writing research papers.
- **Observability and second-generation frameworks.** Rauch says AI apps need Datadog-style instrumentation from version 0.1, and expects current opinionated frameworks to be replaced once teams run AI in production at scale.
- **Bots and token theft.** OpenAI is the most common backend called from Vercel functions, and Rauch says many apps exposed their tokens to people running proxies for free GPT-4. Vercel is building rate limiting, bot detection and caching. He also expects SEO to shift toward retrieval engines like Perplexity.
- **Dynamic over static.** He sees a move away from Jamstack-style static generation toward dynamic rendering and more personalisation. Using Chrome UX Report data, he notes that ChatGPT and Character.ai are already in the top 1,000 sites.
- **Return to copy and paste.** Asked about a claim that 40% of code in Copilot repos is AI-generated, Rauch says AI makes vendoring code easy enough to replace many dependencies. He points to shadcn/ui and to Vercel's Turborepo for monorepos, and expects AI to favour terser syntaxes that use fewer tokens.

## Quotes

> "I'm not for random acts of AI like just like you know checking a box but creating really useful products" — Guillermo Rauch

> "copy and paste is always better than a bad abstraction" — Guillermo Rauch
