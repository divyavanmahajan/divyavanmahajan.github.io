---
title: All of AI's New Models and Tools
description: >-
  This episode of the AI Daily Brief (dated April 9, 2026) surveys the week's
  major AI model releases and product announcements, with a brief headlines
  segment covering industry news. The host (unnamed in the transcript) covers
  Meta's Muse Spark, Z....
pubDate: 2026-04-09T00:00:00.000Z
type: episode
tags:
  - ai-daily-brief-podcast
draft: false
---
# Study Document: All of AI's New Models and Tools
## Overview
This episode of the *AI Daily Brief* (dated April 9, 2026) surveys the week's major AI model releases and product announcements, with a brief headlines segment covering industry news. The host (unnamed in the transcript) covers Meta's Muse Spark, Z.AI's GLM 5.1, Anthropic's Claude Managed Agents, and Google's Notebooks in Gemini, while also addressing headlines about OpenAI's rumored "Spud" model, Perplexity's growth, GitHub's infrastructure strain, and Anthropic's ongoing Pentagon legal battle.

**Source video:** Not available (URL not provided).

---

## Prerequisites
- Familiarity with major frontier AI labs: OpenAI, Anthropic, Google DeepMind, Meta AI, and leading Chinese labs
- Basic understanding of AI benchmarks (SWE-Bench Pro, Humanity's Last Exam, ARC-AGI)
- Awareness of agentic AI concepts: agents, tool use, multi-step reasoning, sandboxed execution
- General knowledge of the AI product landscape: ChatGPT, Claude, Gemini, GitHub Copilot, Perplexity
- Basic understanding of open-source vs. closed model licensing
- Familiarity with software infrastructure concepts: APIs, sandboxed environments, YAML configuration

---

## Main Points

### Headlines: OpenAI's "Spud" Model — Rumor and Retraction
- Axios initially reported OpenAI planned a staggered rollout of its new model ("Spud") due to cybersecurity risks, drawing comparisons to Anthropic's handling of Claude Mythos
- The story was quickly disputed: Dan Shipper reported that OpenAI confirmed the story conflated two separate things — a cyber product being tested with trusted testers is *not* the same as Spud
- Axios updated its story; the host notes this was caught in time to correct, describing it as "playing with live ammunition"
- Community reaction ranged from mockery to cynicism, with one commenter coining: *"The new status symbol is making a model so powerful you can't release it"*

### Headlines: Perplexity's Revenue Surge
- Perplexity's revenue effectively doubled in a single quarter, attributed to usage-based pricing and the February launch of *Perplexity Computer* (an AI agent product)
- The Financial Times reported 100 million monthly active users, tens of thousands of enterprise clients, and $450 million in ARR
- The finance sector in particular appears to be a strong adopter of Perplexity Computer
- Skeptics remain, noting that competition from OpenAI's "GPT Super App" and other agentic tools could undercut the gains

### Headlines: GitHub Infrastructure Under Agentic Coding Pressure
- GitHub recorded 1 billion code commits in all of 2025; as of early 2026, it is seeing 275 million commits *per week*, tracking toward ~14 billion by year-end
- Claude Code commits to public repositories grew 25× in six months, reaching 2.5 million in a single week
- GitHub COO Kyle Daigle attributed the surge to both AI agents and human developers, but acknowledged the platform was not designed with agentic workloads in mind
- Developers are hitting API quota limits; GitHub is scaling CPUs and core services in response

### Headlines: Anthropic vs. the Pentagon — Legal Update
- A D.C. federal appeals court denied Anthropic's application to suspend its "supply chain risk" designation by the Pentagon pending full hearing
- Two separate lawsuits are in play: a California injunction protects Anthropic's non-Pentagon government contracts; the D.C. ruling pertains exclusively to the Pentagon
- Oral arguments are scheduled for mid-May; the court acknowledged Anthropic will "suffer some irreparable harm"
- Legal analyst Charlie Bullock predicted Anthropic is more likely to succeed at the Supreme Court level, framing the case not as a partisan issue but as one about adherence to law
- Anthropic's models have already been restored to USAI.gov (the GSA platform)

### Meta Muse Spark — First Model from Meta Superintelligence Labs
- Muse Spark is Meta's first model release in over a year and the debut product of Meta Superintelligence Labs, formed ~one year ago under Alexander Wang (formerly of Scale AI, acquired for $14B+)
- The model is natively multimodal and supports tool use, visual chain-of-thought, and multi-agent orchestration — features described as "table stakes" for the current generation
- **Benchmark highlights:**
  - SWE-Bench Pro: 52.4 (near but trailing GPT-5.4 and Gemini 3.1 Pro)
  - Humanity's Last Exam: 42.8 (slightly above Opus 4.6; behind Gemini and GPT-5.4); with tools: 50.4 (still trailing all major rivals)
  - Charvik's Reasoning (visual comprehension): 86.4 — claimed state-of-the-art, beating Gemini 3.1 Pro by 6 points
- Meta's emphasis is on *personal superintelligence* use cases: health, social content, shopping, games — deliberately contrasting with the enterprise/coding focus of competitors
- Three operating modes: Instant (no reasoning), Thinking (reasoning enabled), Contemplating (deep research multi-step) — Contemplating not available at launch
- Trained with input from 1,000 physicians for health assistant capabilities
- Community reception: mixed. Ethan Mollick found it "fine but not frontier-level." Françcois Chollet (ARC Prize) called it "over-optimized for benchmarks." Others, including a former Meta AI employee, said it exceeded expectations given the lab's short timeline
- Open-source release planned for future versions; private API preview open to select partners

### Z.AI GLM 5.1 — First Open-Source Model Competitive with Western Frontier Leaders
- GLM 5.1 is a 754-billion-parameter open-source model (commercially licensed) from Chinese lab Z.AI
- **Benchmark highlights (Z.AI reported):**
  - SWE-Bench Pro: 58.4 — surpassing GPT-5.4 (57.7) and Opus 4.6 (57.3)
  - Mixed benchmark (Terminal Bench 2.0 + NL2 Repo): slightly behind two US leaders but ahead of Gemini 3.1 Pro
- Key emphasis: *long-horizon autonomous task execution* — the model reportedly performed 1,700 autonomous steps (vs. ~20 steps achievable at end of 2025)
- Example: 8 hours of autonomous Linux desktop building using a self-review loop; 600+ iterations using 6,000+ tool calls in a vector DB test, achieving 6× performance of a standard 50-turn session
- Trained entirely on Huawei chips, continuing to demonstrate Chinese hardware stack capability
- Significance: first time developers can build on a fully open-source current-generation frontier model; arrives only ~2 months after leading US models, illustrating a narrow and narrowing gap

### Anthropic Claude Managed Agents — Production Infrastructure for Agentic AI
- Claude Managed Agents pairs an "agent harness" (system prompt, tools, memory, permissions) with production cloud infrastructure, enabling developers to go from prototype to deployment rapidly
- **Core features:**
  - Built-in sandboxed execution environment for secure software projects
  - Agents can run autonomously for hours in the cloud
  - Monitor other Claude agents; toggle tool permissions
  - Configuration described in YAML, auto-generated from plain English descriptions
  - Per-session-hour pricing (Anthropic runs the infrastructure)
- Designed to close the "notable gap between what Claude models can do and what businesses actually use them for" (Angela Jiang, Anthropic Head of Product for Cloud Platform)
- Integration demonstrated with Notion: a customized agent ran client onboarding tasks natively within Notion via a virtual session, without manual permission setup
- Third-party companies (e.g., Notion) can build and offer their own agents externally on top of this platform
- **Current limitation:** persistent memory across sessions is not yet available, making current use cases more suited to transactional/discrete tasks
- Common usage patterns identified: event-triggered automation, scheduled tasks (e.g., daily briefs), fire-and-forget tasks via Slack/Teams, and long-horizon research tasks

### Google Notebooks in Gemini — Consolidating the Product Surface
- Google introduced *Notebooks* in Gemini, replacing the unintuitive "Gems" feature with a more direct project-management capability
- Notebooks allow users to organize resources, documents, and context for specific tasks, and define custom instruction sets per project
- Described by Google's Josh Woodward as "the magic of NotebookLM directly integrated into the Gemini app" — effectively a personal knowledge base shared across Google products
- Strategic significance: addresses a persistent critique that Google's AI features are fragmented across too many surfaces; Notebooks enables feature portability so that "any door you walk in gets you to the same room"
- Host's assessment: for many day-to-day Gemini users, this quality-of-life improvement may be more impactful than a new model release

---

## Key Concepts

- **Agent Harness:** Software infrastructure wrapping an AI model that enables agentic behavior — includes tools, memory systems, system prompts, and permission policies
- **Managed Agents (Claude):** Anthropic's hosted platform providing pre-built agent harnesses and production infrastructure, enabling deployment without custom backend engineering
- **Sandboxed Environment:** An isolated execution environment in which an agent can spin up and run software projects securely without affecting external systems
- **Long-Horizon Task Execution:** The capability of an AI agent to autonomously complete tasks requiring hundreds or thousands of sequential steps over extended time periods (hours)
- **Mixture of Experts (MoE):** A model architecture that routes inputs through specialized sub-networks; noted as unknown for Muse Spark
- **Natively Multimodal:** A model trained from the ground up to process and reason across multiple input types (text, images, etc.) rather than having modalities bolted on
- **SWE-Bench Pro:** A coding benchmark measuring a model's ability to resolve real-world software engineering tasks
- **Humanity's Last Exam:** A benchmark of extremely difficult, expert-level questions used to measure frontier model capability
- **Charvik's Reasoning:** A benchmark measuring visual comprehension and reasoning ability
- **Supply Chain Risk Designation:** A U.S. government classification that restricts use of a company's technology in sensitive government procurement contexts
- **Vibe Coding:** Informal term for AI-assisted coding, particularly by non-professional developers, enabled by accessible code generation tools
- **Personal Superintelligence:** Meta's framing for AI assistants focused on individual life domains (health, social, shopping) rather than enterprise/work use cases
- **NotebookLM:** Google's existing research-focused notebook product, whose resource-management capabilities are now being integrated into the main Gemini app

---

## Summary

This episode of the *AI Daily Brief* captures a week of dense AI activity defined less by unreleased powerful models (Anthropic's Mythos, OpenAI's rumored Spud) and more by a wave of concrete, accessible releases and tools. Meta re-entered the frontier model race with Muse Spark, a multimodal model with competitive visual reasoning benchmarks but lagging behind leading US models on coding and general reasoning — a cautious but meaningful comeback for a lab less than a year old. Z.AI's GLM 5.1 demonstrated that the Chinese AI ecosystem remains tightly competitive with Western leaders, delivering the first open-source model at frontier coding performance and with exceptional long-horizon agentic capabilities, all trained on domestic hardware. Anthropic's Claude Managed Agents represents a significant infrastructure play, lowering the barrier to production-grade agentic deployment and potentially reshaping how businesses integrate AI into workflows. Google's Notebooks feature, while modest in ambition, addresses a real usability gap in Gemini's fragmented product surface. Surrounding all of this, the broader data signals — GitHub's exponential commit growth, Perplexity's revenue doubling, and the still-unresolved legal contest over Anthropic's Pentagon designation — paint a picture of an industry accelerating faster than infrastructure, legal frameworks, and even the companies building it can comfortably manage.
