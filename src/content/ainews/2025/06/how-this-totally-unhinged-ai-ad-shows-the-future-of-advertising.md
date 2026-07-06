---
title: 'How This Totally Unhinged AI Ad Shows the Future of Advertising '
description: >-
  This episode of the AI Daily Brief (published June 12, 2025) examines a
  landmark moment in AI-generated advertising: a fully AI-produced commercial
  for prediction market platform Kalshi, created using Google's Veo 3, that
  aired on major network TV...
pubDate: 2025-06-12T00:00:00.000Z
type: episode
tags:
  - ai-daily-brief-podcast
url: 'https://www.patreon.com/posts/131341804'
draft: false
---
# How This Totally Unhinged AI Ad Shows the Future of Advertising

## Overview

This episode of the *AI Daily Brief* (published June 12, 2025) examines a landmark moment in AI-generated advertising: a fully AI-produced commercial for prediction market platform Kalshi, created using Google's Veo 3, that aired on major network TV during the NBA Finals. The host — who has a background in advertising, including producing Super Bowl campaigns — uses this case study to explore how generative AI video is restructuring the economics, creative process, and distribution logic of advertising. The episode also covers related headlines: OpenAI's delayed open-weights model, Mistral's European expansion, Meta's aggressive AI talent recruitment, Glean's funding round, and the Disney/Universal copyright lawsuit against Midjourney.

**Source video:** *(URL not provided)*

---

## Prerequisites

- Basic familiarity with generative AI tools (text-to-video, text-to-audio, large language models)
- General understanding of the digital advertising ecosystem (media buying vs. creative production, campaign structures)
- Awareness of the ongoing AI copyright litigation landscape
- Familiarity with major AI labs and models: OpenAI, Google DeepMind, Mistral, Meta, Midjourney, Stability AI
- Understanding of open-source vs. closed-source AI model distinctions

---

## Main Points

### OpenAI Delays Its Open-Weights Reasoning Model

- Sam Altman announced via tweet that the model will arrive "later this summer," not in June as previously anticipated.
- The model was announced in April, positioned as a reasoning model in the vein of OpenAI's O-series, partly in response to DeepSeek's impact as an open-source reasoner.
- Altman acknowledged OpenAI had been "on the wrong side of history" on open source; the delay is attributed to unexpected but promising research developments.
- Competitors are active in the space: Mistral released its first reasoning model family; Alibaba's Qwen team released hybrid reasoning models with variable inference depth.

### Mistral Positions Itself as Europe's Sovereign AI Provider

- Mistral is on pace to reach $100 million in annualized revenue in 2025, driven by European demand for non-US AI infrastructure.
- The company announced a partnership with NVIDIA to build a data center 20 miles south of Paris, initially housing 18,000 Blackwell chips, with plans to scale to 100 megawatts.
- Mistral CEO Arthur Mensch cited J.D. Vance's February speech on US AI dominance as a "wake-up call" that materially increased European customer demand.
- NVIDIA CEO Jensen Huang stated more than 20 "AI factories" are planned across Europe in the next two years, with some exceeding 100,000 chips (termed "gigafactories").
- Analysts framed this as a strategic play for neutral AI infrastructure that sovereign states can trust independent of US-China geopolitical tensions.

### Meta's Superintelligence Talent Acquisition Drive

- Mark Zuckerberg is personally recruiting a ~50-person superintelligence team around Scale AI CEO Alexander Wang.
- Reported recruits include Jack Ray (principal researcher, Google DeepMind) and Johan Schallwitz (ML lead, Sesame AI).
- Compensation packages are reported at $10 million+ per year in liquid cash; some multi-year packages reportedly approach nine figures.
- The recruiting effort raises a structural question for the industry: whether new entrants can still reach state-of-the-art AI, or whether compute requirements and talent concentration are creating a fixed competitive ceiling.

### Enterprise AI: Glean's Growth and the Salesforce/Slack Conflict

- Glean closed a $150 million Series F at a $7.2 billion valuation (up from $4.6 billion in September 2024), having surpassed $100 million ARR.
- Glean's pitch — an all-in-one enterprise AI package covering models, agents, and search — has resonated particularly because of its exclusive enterprise focus.
- Salesforce changed its Slack API terms of service, effectively preventing third parties like Glean from indexing and storing Slack data, a significant blow given how much enterprise context lives in Slack.
- Salesforce framed the change as a data security measure; Glean acknowledged it would "hamper" users' ability to use their own data with third-party AI platforms.
- The episode characterizes this as part of a broader pattern of platform consolidation: major players using API and ToS control to fence off data from competitors.

### The Kalshi Ad: A Case Study in AI-Generated Advertising

- AI filmmaker PJ Ace was hired by prediction market platform Kalshi to produce a "GTA-style" NBA Finals commercial using Google's Veo 3; the ad aired on national network TV.
- **PJ Ace's production workflow:**
  1. Write a script (co-authored with Gemini/ChatGPT)
  2. Use Gemini to convert the script into a shot list of detailed Veo 3 prompts (5 at a time to preserve quality)
  3. Generate clips in Veo 3 (300–400 generations to yield ~15 usable clips)
  4. Edit in CapCut or equivalent
- Total production: one person, two to three days; estimated 95% cost reduction vs. traditional ad production.
- The key unlock enabling this was Veo 3's integrated audio generation — previously, audio and video had to be generated and synced separately, adding significant complexity.
- PJ noted that low cost does not eliminate the need for creative direction: "Brands still pay a premium for taste."

### Implications for the Advertising Industry

- **Cost reduction and asset proliferation:** Rather than simply pocketing savings, most advertisers are expected to use reduced production costs to create more assets — higher volume and variety of creative.
- **Audience personalization at scale:** AI enables campaign assets to be customized per audience segment far more granularly than before; this will become a core part of campaign planning.
- **New distribution infrastructure:** Smart TVs with on-device models could route personalized ad variants to specific viewers automatically, creating a new layer of personalization infrastructure beyond social media platforms.
- **Pace of adoption:** The Kalshi ad reached network TV in under a month from Veo 3's release, illustrating how rapidly new model capabilities translate into real commercial deployments.

### Disney/Universal Sue Midjourney: Copyright Implications for AI Video

- Disney and Universal filed suit against Midjourney, alleging its models were trained on copyrighted material and can reproduce protected characters (e.g., Darth Vader, Minions, Shrek).
- This case is distinguished from prior AI copyright suits by the availability of direct output evidence — generated images visibly depicting copyrighted characters — rather than relying solely on training data arguments.
- Emad Mostaque (founder, Stability AI) argued the case is legally thin on output grounds and that the more dangerous legal exposure lies in training data inputs; he also noted Midjourney apparently did not engage with Disney/Universal when contacted in December.
- The host's position: these cases will ultimately require Supreme Court resolution; lower-court decisions are largely immaterial in the interim.
- **Possible outcomes regardless of legal result:**
  - Settlement focused on blocking specific outputs (most likely near-term resolution)
  - Industry migration to models trained on licensed content
  - Chinese open-source models fill any gap created by US legal restrictions, making enforcement practically complex
  - Potential fully decentralized/crypto-based model deployment to circumvent corporate legal liability

---

## Key Concepts

- **Veo 3:** Google's text-to-video generation model featuring integrated audio generation, released in 2025; distinguished from predecessors by eliminating the need for separate audio production pipelines.
- **Open-weights model:** An AI model whose trained parameters are publicly released, allowing external users to run, fine-tune, or modify the model independently of the original developer.
- **Hybrid reasoning model:** A model architecture that can modulate the depth of its inference (i.e., "thinking" effort) based on the complexity of a given query, as exemplified by Alibaba's Qwen releases.
- **AI factory / Gigafactory (Jensen Huang's terminology):** Large-scale AI compute infrastructure facilities; gigafactories house 100,000+ chips and are suitable for large model training.
- **Sovereign AI infrastructure:** AI compute and model serving capacity owned or controlled within a nation or region, reducing dependence on foreign technology providers.
- **Media cost vs. creative cost:** In advertising, the spend on placing/distributing an ad (media) typically far exceeds the cost of producing the creative; AI primarily compresses the creative cost side.
- **Fair use (AI training context):** A legal doctrine under which AI companies have argued that training on copyrighted material constitutes transformative use; the strength of this argument is currently being contested in multiple lawsuits.
- **CapCut:** A widely used consumer/prosumer video editing application, used here as the post-production tool in the AI ad workflow.
- **Kalshi:** A US-regulated prediction market platform allowing users to trade on real-world event outcomes.

---

## Summary

The central argument of this episode is that AI-generated video has crossed a meaningful commercial threshold: a tool like Veo 3, which integrates audio and video generation in a single prompting interface, has enabled a single filmmaker to produce a national network television advertisement in two to three days at roughly 5% of traditional production costs. The Kalshi NBA Finals ad is presented not as a novelty but as a leading indicator of structural change in advertising — specifically, a shift toward higher creative volume, granular audience personalization, and new distribution infrastructure to route tailored content to individual viewers. This capability expansion is occurring amid significant legal uncertainty, primarily around copyright, but the host argues that the practical outcome is unlikely to hinge on US litigation alone: Chinese open-source models, licensed-content alternatives, and the sheer momentum of commercial adoption mean AI video production will continue regardless of how specific lawsuits resolve. The broader industry context — talent consolidation at Meta, platform data wars between Salesforce and Glean, and Mistral's rise as a sovereign European AI provider — reinforces a theme of rapid centralization and competitive entrenchment across the AI stack, with advertising as one of the clearest early commercial manifestations of what accelerating model capabilities unlock.
