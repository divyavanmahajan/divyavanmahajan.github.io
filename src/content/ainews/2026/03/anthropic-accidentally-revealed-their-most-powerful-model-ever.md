---
title: Anthropic Accidentally Revealed Their Most Powerful Model Ever
description: >-
  This episode of the AI Daily Brief (dated March 27, 2026) covers several major
  AI industry developments, with the central thesis being that the AI industry
  may be entering an "era of vertical AI models" — where domain-specific,
  post-trained models...
pubDate: 2026-03-27T00:00:00.000Z
type: episode
tags:
  - ai-daily-brief-podcast
draft: false
---
## Overview

This episode of the *AI Daily Brief* (dated March 27, 2026) covers several major AI industry developments, with the central thesis being that the AI industry may be entering an "era of vertical AI models" — where domain-specific, post-trained models built on open-weight bases can outperform general-purpose frontier models for specific tasks. The host also covers a leaked Anthropic model announcement, Google's voice model update, Shopify's AI tools app, OpenAI's Codex plugin launch, and broader industry business trends.

*Source video URL: Not available (URL not provided)*

---

## Prerequisites

- Basic understanding of large language models (LLMs) and how they are trained
- Familiarity with concepts of pre-training vs. fine-tuning/post-training
- General awareness of major AI labs: Anthropic, OpenAI, Google DeepMind
- Understanding of open-weight vs. closed/proprietary AI models
- Familiarity with AI coding assistants (e.g., Cursor, Claude Code, Codex)
- Basic knowledge of SaaS business models and API pricing structures
- Optional: familiarity with Rich Sutton's "The Bitter Lesson" (2019)

---

## Main Points

### 1. Anthropic Leaks Existence of Claude Mythos

- A draft blog post was left in an unsecured, publicly searchable database, revealing a new Anthropic model called **Claude Mythos** (also referred to internally as "Capybara").
- Anthropic confirmed the model exists, calling it a "step change" and "the most capable we've built to date," outperforming prior best model Claude Opus 4.6 on coding, academic reasoning, and cybersecurity benchmarks.
- Mythos represents a **new tier above Opus**, chosen to "evoke the deep connective tissue that links together knowledge and ideas."
- The model is described as compute-intensive and expensive; Anthropic is taking a slower release approach, starting with a small set of early access customers focused on cybersecurity applications.
- The blog post was unfinished; nearly 3,000 unpublished Anthropic assets were found in the same cache. The announcement was not a release notice but an advance warning.

---

### 2. Google Releases Gemini 3.1 Flash Live Voice Model

- Google released **Gemini 3.1 Flash Live**, a small voice model designed for real-time, continuous dialogue rather than turn-based interaction.
- The model improves interruption handling and conversational naturalness, addressing longstanding limitations of prior voice AI.
- Shows benchmark improvements on multi-step function calling — converting voice commands into complex agentic actions.
- Early deployments include **Home Depot**, with improved handling of alphanumeric product codes in noisy environments.
- Potential implication: if Apple adopts Gemini to power Siri, consumer voice assistant quality could improve significantly.

---

### 3. Shopify Launches Tinker — AI Tools App for Merchants

- Shopify released **Tinker**, a free mobile app with 100+ AI tools for e-commerce, covering logo generation, product photography, advertising videos, and brand experimentation.
- The design philosophy centers on reducing friction: tools are arranged by outcome, natural language input drives generation, and the app auto-converts user descriptions into optimized prompts on the backend.
- The host argues Shopify has an outsized role in the **positive normalization of AI** for small business owners, particularly as employment patterns shift and entrepreneurship increases.
- Quote from Shopify's director of product: *"If you want more artists, lower the cost of paint."*

---

### 4. OpenAI Codex Gets Plugin Integration; Takes Shot at Anthropic

- OpenAI updated **Codex** with plugin support, enabling it to handle pre-coding workflows: planning, research, and coordination, as well as post-coding pipelines.
- OpenAI's Codex team publicly called out Anthropic after Claude's team announced throttling of 5-hour session limits during peak hours for Pro/Max subscribers on weekdays, resetting Codex usage limits as a competitive jab.
- The episode frames this as OpenAI seizing a PR moment in a heating competitive landscape.

---

### 5. OpenAI Shelves Adult Mode Plans

- OpenAI indefinitely paused plans for an "adult mode" in ChatGPT, citing resource reallocation toward coding and enterprise.
- The independent advisory council was **unanimously against** the feature; the age detection system had a **12% failure rate**, and experts warned of risks of unhealthy emotional dependence.
- Some staff departed over the issue.
- The host's take: while personally libertarian on adult content, the business case for OpenAI specifically was poor given the reputational and safety costs versus the limited upside, especially given competitive alternatives.
- OpenAI also killed Instant Checkout and deprioritized Sora; the host frames these as **disciplined pivots**, not signs of flailing — avoiding sunk cost fallacy.

---

### 6. Anthropic and OpenAI IPO Race

- Reports suggest Anthropic is considering going public as early as **Q4 2026 (October)**.
- Sam Altman reportedly prefers OpenAI to IPO first, setting up a competitive race.
- The host reconsiders a prior prediction that neither company would IPO in 2026.

---

### 7. The Era of Vertical AI Models — Main Episode

This is the core analytical section of the episode.

**Background: The Bitter Lesson**
- Rich Sutton's 2019 essay argues that throughout AI history, **brute-force methods using computation and data** consistently outperform systems encoding human knowledge — in chess, Go, vision, speech, and language.
- This explains why Bloomberg GPT (a 50B parameter finance-specific model) was outperformed by general large-scale models — scale beat specialization.

**The New Question: Can Post-Training Change This?**
- The question for 2026 is whether **last-mile usage data** (real user interaction data at the application edge) can give vertically-focused companies a meaningful model advantage through post-training.
- Unlike encoding human expert knowledge (which the Bitter Lesson defeats), this data comes from **millions of real-world interactions** — arguably a form of experiential learning Sutton himself anticipated.
- Sutton, on the Dwarkesh podcast, predicted that systems learning **from experience** rather than human knowledge would be the next phase of the Bitter Lesson.

**Cursor's Composer 2**
- Cursor released **Composer 2**, which matched GPT-5.4 and beat Claude Opus 4.6 on coding benchmarks at lower cost.
- Controversy: the model was revealed to be based on open-weight **Kimi K2.5** with reinforcement learning applied — not trained from scratch.
- Cursor confirmed this; ~75% of compute came from post-training, not the base model.
- Conclusion: reinforcement learning on quality domain-specific data can vault an adequate base model into top-tier performance for a specific domain.

**Intercom's Apex Model**
- Intercom announced **Apex**, a proprietary model for their Fin customer service AI, trained on billions of customer service interaction data points.
- Claims: higher resolution rate (+2.8%), 65% fewer hallucinations, faster, and cheaper than any frontier model for customer service tasks.
- Chief Product Officer Paul Adams framed this as proof that **vertical models can and will outperform general models** in their domains.
- Key insight: durable competitive differentiation will move **down the stack** — from app layer to model layer — as app-layer features become easier to replicate.

**Decagon's Networked Specialist Model Architecture**
- Decagon (another AI customer service company) reported that **over 80% of model traffic** now runs on in-house trained models.
- Architecture: a **network of specialized models** each handling a distinct part of the interaction (detection, orchestration, response generation, evaluation), optimized independently.

**Industry Implications**
- Clem Delangue (Hugging Face): predicts the majority of AI workflows will shift to **in-house open-source models** rather than API-based access.
- The "API tax" is compared to cloud markup from a decade ago — as fine-tuned open models become viable, cost-switching pressure grows.
- Implications for frontier labs: they face **classic disruption** — their models may be "over-serving" specific use cases (more generally intelligent than customer service requires), while open-weight models with good post-training are sufficient and cheaper.
- Suggested lab response: acquire companies with domain-specific evals, build cheaper specialized models, pursue data partnerships or M&A.
- The host does **not** predict mass fragmentation — post-training expertise is rare — but expects significantly more experimentation by data-rich companies.

---

## Key Concepts

- **Claude Mythos**: Anthropic's unreleased, highest-tier AI model, above the Opus line, accidentally revealed via a leaked draft blog post; described as their most capable model to date.
- **Vertical AI model**: A model trained or post-trained for a specific domain or use case, as opposed to a general-purpose frontier model.
- **Post-training**: The process of further training a base model (including fine-tuning and reinforcement learning) on domain-specific data after initial pre-training; distinct from training from scratch.
- **Pre-training**: Large-scale initial model training on broad data corpora; the computationally intensive phase that produces base models.
- **The Bitter Lesson**: Rich Sutton's 2019 principle that general methods leveraging computation consistently outperform approaches encoding human knowledge, across all major AI domains.
- **Open-weight models**: AI models whose weights are publicly released, allowing others to fine-tune or build upon them (e.g., Kimi K2.5).
- **Last-mile usage data**: Real interaction data generated at the actual point of user experience, considered potentially valuable for domain-specific post-training.
- **Apex**: Intercom's proprietary domain-specific model for customer service, claimed to outperform frontier models on resolution rate, hallucination rate, speed, and cost.
- **Composer 2**: Cursor's coding-focused model, post-trained from Kimi K2.5 using reinforcement learning; competitive with top frontier models on coding benchmarks.
- **Agent lab thesis**: The thesis (articulated by Latent Space/Swix) that post-training on open-weight models can close or exceed the gap with closed frontier models for specific domains.
- **Gemini 3.1 Flash Live**: Google's real-time voice model enabling continuous, natural dialogue rather than turn-based interaction.
- **Tinker**: Shopify's free mobile app providing 100+ AI tools for e-commerce merchants, designed to lower the barrier to AI-powered content creation.
- **Codex (OpenAI)**: OpenAI's AI coding tool, updated with plugin support for broader workflow coverage.
- **Speciation (of AI models)**: Andrej Karpathy's term for the expected diversification of AI into many domain-specific intelligences, analogous to biological diversity in the animal kingdom.

---

## Summary

The episode argues that the AI industry is at an inflection point where **domain-specific vertical models**, built through post-training on real-world interaction data rather than from scratch, can now outperform general-purpose frontier models within their target domains — as demonstrated by Cursor's Composer 2 (coding) and Intercom's Apex (customer service). This dynamic is framed not as a contradiction of Sutton's Bitter Lesson, but as its next phase: the winning data is not encoded human expertise but experiential data from millions of real interactions, exactly what Sutton himself anticipated. Simultaneously, the episode covers Anthropic's accidental leak of Claude Mythos — their most powerful model ever, above the Opus tier — highlighting that frontier labs continue to push capability ceilings even as the competitive landscape below them evolves rapidly. The broader message is one of accelerating change on multiple fronts: model architectures, business models, distribution strategies, and the race toward potential IPOs — with the host concluding that companies sitting on large proprietary interaction datasets and post-training talent are increasingly well-positioned to challenge frontier lab dominance in specific verticals.
