---
title: 'When Will AI Make Scientific Discoveries?  '
description: >-
  This episode of the AI Daily Brief (dated 2025-10-02) examines when and how AI
  systems might begin making genuine scientific discoveries. Host Nathaniel
  Whittemore uses the launch of OpenAI's Sora 2 video tool as a springboard to
  explore a broader...
pubDate: 2025-10-02T00:00:00.000Z
type: episode
tags:
  - ai-daily-brief-podcast
draft: false
---
## Overview

This episode of the *AI Daily Brief* (dated 2025-10-02) examines when and how AI systems might begin making genuine scientific discoveries. Host Nathaniel Whittemore uses the launch of OpenAI's Sora 2 video tool as a springboard to explore a broader debate: whether frontier AI labs are prioritising consumer products over transformative scientific research. The episode profiles two new companies—Periodic Labs and Thinking Machines Lab—as concrete examples of researchers redirecting their efforts toward AI-driven science. The talk also covers several headline news items as a preamble.

**Source video URL:** Not available (transcript only)

---

## Prerequisites

- Basic familiarity with large language models (LLMs) and frontier AI labs (OpenAI, Meta, Google DeepMind)
- Understanding of reinforcement learning (RL) as a model training paradigm
- Awareness of the general narrative around AGI (Artificial General Intelligence) and its societal implications
- Familiarity with fine-tuning and post-training concepts for language models
- General awareness of the AI product landscape (ChatGPT, Meta AI, Alexa, etc.)

---

## Main Points

### Headline: NIST Report Critiques DeepSeek on Performance and Security

- The National Institute of Standards and Technology (NIST) released an evaluation comparing US AI models against DeepSeek (Chinese).
- US models outperformed DeepSeek across nearly every benchmark; one US reference model was 35% cheaper to run on 13 benchmarks.
- DeepSeek models were 12× more likely to comply with malicious agentic instructions (e.g., sending phishing emails, running malware).
- After jailbreaking, DeepSeek complied with 94% of malicious requests vs. 8% for US reference models.
- DeepSeek echoed four times as many inaccurate CCP narratives; downloads of DeepSeek models have risen 1,000% since January 2025.

### Headline: Apple Pivots from Vision Pro to AI Smart Glasses

- Apple has internally cancelled plans for a cheaper Vision Pro iteration (targeted for 2027) and is redirecting staff to smart glasses development.
- Two products are planned: a budget version (N50) competing with Meta Ray-Bans, and a higher-spec display version competing with the new Meta Ray-Ban display.
- The N50 is expected to launch in 2027; the display version in 2028.
- Apple's core interface will be voice controls and integrated AI, with cameras, speakers, and health-tracking sensors.
- Apple executives privately acknowledged the Vision Pro was "over-engineered" for a consumer device at $3,500.

### Headline: Amazon Upgrades Echo Devices with On-Device AI Inference

- Amazon refreshed the entire Echo product line with custom silicon featuring an AI accelerator for local (on-device) inference.
- New sensor platform includes cameras, audio, ultrasound, Wi-Fi radar, and accelerometers to enable ambient AI awareness.
- New features include Ring camera facial recognition (distinguishing family from strangers) and a neighbourhood-wide "Search Party" feature for lost pets.
- Product chief Panos Panay (hired from Microsoft in 2023) frames the strategy as "great products made even better through ambient AI."

### Headline: Meta Will Target Ads Based on AI Chat Interactions

- Meta announced it will use users' AI assistant interactions to personalise content and advertising across its apps, effective December 2025.
- Example: a user asking about hiking trails may be served hiking gear ads.
- Users cannot opt out; sensitive topics (politics, religion, health, sexual orientation, racial origin) are automatically excluded.
- The policy will not apply initially in the UK, Europe, and South Korea due to stricter privacy regulations.
- The host notes this outcome was broadly expected and is "not surprising"—only the timeline was delayed.

### The Sora 2 Backlash and the "Flying Cars" Problem

- The launch of OpenAI's Sora 2 video generation app triggered criticism that OpenAI was building consumer social media tools rather than pursuing AGI or scientific discovery.
- A representative critique: "Sam Altman said we need $7 trillion to cure cancer; today he launched AI slot videos marketed as personalized ads."
- Sam Altman responded that consumer products generate revenue needed to fund science-oriented AGI research, and that trajectory is "nuanced."
- The criticism echoes the Founders Fund manifesto: "We wanted flying cars, instead we got 140 characters."
- The host suggests OpenAI has a communication problem: if consumer revenue genuinely funds scientific AI, that connection needs to be made explicit.

### Periodic Labs: Building an AI Scientist

- Periodic Labs was founded by researchers (including former Meta employee Rishabh Agarwal, who turned down Zuckerberg's superintelligence lab offer) who wanted to focus on AI-accelerated science rather than consumer products.
- The company's stated goal: "The main objective of AI is not to automate white-collar work. The main objective is to accelerate science."
- Their model connects human researchers → AI agent experiment designers → robotic/autonomous laboratories → nature as the reward signal (did the experiment work?).
- They are starting with physical sciences (physics, chemistry) because these offer verifiable, data-rich environments suitable for reinforcement learning.
- An early collaboration involves working with a semiconductor manufacturer on chip heat dissipation.
- Periodic Labs raised over **$300 million in seed funding** from Andreessen Horowitz, Accel, NVIDIA, Jeff Bezos, and others.
- Investor Bain Capital Ventures drew an analogy: as the telescope enabled Galileo's discoveries, AI systems are a new instrument enabling previously impossible scientific observations.

### Thinking Machines Lab: Democratising Frontier AI Research

- Thinking Machines Lab, founded by former OpenAI CTO Mira Murati, released its first product: **Tinker**, an API for training and fine-tuning custom AI models.
- Tinker provides GPU clusters and a software stack, leaving researchers to focus on training data and model design—reducing infrastructure complexity by roughly 90%.
- The goal is to let smaller labs, universities, and individual researchers run experiments in days rather than weeks or months.
- André Karpathy described it as "a more clever place to slice up the complexity of post-training," preserving algorithmic creative control while delegating heavy infrastructure.
- Enterprise use case: teams can fine-tune models on proprietary data without needing a large central AI engineering team.
- A commentator framed both Periodic and Thinking Machines as pursuing a shared vision: "the whole world as an AI RL-powered lab," with real-world feedback (factory outcomes, user interactions, physical experiments) as training signal inaccessible to large labs from internet data alone.

### AI-Driven Scientific Discovery Is Already Happening

- Multiple MIT professors reportedly told students that GPT-5 made novel research discoveries in a single week—one in biology, one in mathematics.
- OpenAI CPO Kevin Weil, enthused by scientists working alongside GPT-5, is incubating a new internal division called **OpenAI for Science**.
- Sam Altman reposted the MIT anecdote, commenting: "does feel like this is really starting to happen in tiny ways."
- Researcher "Prin" noted that GPT-5 Pro can make small novel scientific discoveries despite thinking for under 40 minutes and being less advanced than unreleased multi-agentic models capable of working autonomously for hours.
- The host connects these data points to the anticipated public release of a model that reportedly won gold at the IMO, IOI, and ICPC competitions.

---

## Key Concepts

- **Efficiency AI vs. Opportunity AI:** A framework distinguishing AI that makes existing processes faster/cheaper (efficiency) from AI that enables entirely new capabilities or discoveries (opportunity).
- **AI Scientist:** A system that formulates hypotheses, designs experiments, and interprets results autonomously—the goal of Periodic Labs.
- **Nature as Reinforcement Learning Environment:** The idea that physical experiments provide ground-truth reward signals (did the hypothesis hold?) that can train AI models, analogous to how game outcomes train game-playing agents.
- **Tinker (Thinking Machines Lab):** An API and managed infrastructure service for LLM post-training and fine-tuning, designed to democratise frontier model research.
- **Post-training R&D:** The phase of model development after initial pre-training, including fine-tuning, instruction tuning, and RLHF, which Tinker specifically targets.
- **Ambient AI:** AI integrated into physical environments and devices that perceives its surroundings and interacts naturally, without requiring explicit user invocation.
- **AGI (Artificial General Intelligence):** AI with general problem-solving capabilities at or beyond human level across a wide range of domains; the stated long-term goal of several frontier labs.
- **Jailbreaking:** Techniques used to bypass safety constraints in AI models, causing them to comply with otherwise-refused harmful requests.
- **OpenAI for Science:** An internal OpenAI initiative incubated by CPO Kevin Weil to direct AI capabilities toward scientific research and discovery.
- **The Whole World as an RL Lab:** An emerging paradigm in which diverse real-world feedback signals (user behaviour, physical experiments, operational outcomes) serve as training data for more capable AI—data unavailable to large labs from internet scraping alone.

---

## Summary

The episode argues that while headline-grabbing consumer AI products (video generators, smart glasses, ad-targeting chatbots) dominate public attention and generate justifiable criticism that frontier labs have lost sight of their grander ambitions, a parallel and less-publicised movement of researchers is actively building AI systems aimed at genuine scientific discovery. Two companies—Periodic Labs, which is constructing autonomous robotic laboratories guided by AI experiment designers operating in physics and chemistry, and Thinking Machines Lab, which is democratising frontier model training through its Tinker product—represent researchers who have deliberately walked away from consumer-product work in pursuit of higher-stakes scientific goals. The host further points to early but credible evidence that current frontier models such as GPT-5 are already making small novel discoveries in mathematics and biology, and that OpenAI itself is responding by launching an internal science division. The central message is that the transition from AI as productivity tool to AI as genuine scientific instrument is not a distant aspiration—it is beginning now, even if it is not yet the dominant story in AI coverage.
