---
title: 'Towards AI That Can Actually Interact '
description: >-
  This episode of the AI Daily Brief (hosted by Nathaniel Whittemore, though he
  does not name himself in this episode) covers a new class of AI model called
  interaction models, introduced by Thinking Machines Lab (TML) — a startup
  founded by former ...
pubDate: 2026-05-12T00:00:00.000Z
type: episode
tags:
  - ai-daily-brief-podcast
url: 'https://www.youtube.com/watch?v=-UTIXsziBJI'
draft: false
---
# Towards AI That Can Actually Interact: Interaction Models from Thinking Machines Lab

## Overview

This episode of the *AI Daily Brief* (hosted by Nathaniel Whittemore, though he does not name himself in this episode) covers a new class of AI model called **interaction models**, introduced by **Thinking Machines Lab (TML)** — a startup founded by former OpenAI CTO **Mira Murati**. The core argument is that current AI systems are architecturally constrained by turn-based interaction, which creates a fundamental bottleneck in human-AI collaboration, and that TML's new approach represents a potential paradigm shift in how humans and AI systems work together.

**Source video:** No URL provided. The episode aired on the *AI Daily Brief* podcast/channel on or around May 12, 2026.

---

## Prerequisites

- Familiarity with how current large language models (LLMs) and voice AI systems work, particularly the concept of turn-based dialogue
- Basic understanding of the AI lab landscape (OpenAI, Anthropic, Google DeepMind, etc.)
- Awareness of multimodal AI capabilities (text, audio, video)
- General knowledge of AI agent frameworks and real-time audio APIs
- Optional: familiarity with the history of human-computer interaction, including CLI vs. GUI paradigms

---

## Main Points

### 1. Headlines: OpenAI Launches DeployCo, a Forward-Deployed AI Consulting Firm

- OpenAI has officially launched the **OpenAI Deployment Company (DeployCo)**, structured as a joint venture with 19 partners across consulting, private equity, and finance.
- Initial investment: **$4 billion** at a **$10 billion pre-money valuation**; lead investor is TPG, with Advent International, Bain Capital, and Brookfield as co-lead partners.
- DeployCo is built around the acquisition of engineering firm **Tomorrow**, providing ~150 staff experienced in AI deployment from day one.
- Motivation from partners is partly to **skip the queue** for AI transformation support in their portfolio companies.
- Key thesis: no matter how powerful models become, they will collide with **institutional inertia**; meaningful support structures are required for enterprises to close the capability overhang.
- A parallel effort from Anthropic (as yet unnamed) is also underway; Goldman Sachs has backed both.

### 2. Headlines: Anthropic and OpenAI Crack Down on Unauthorized Secondary Market Stock Trading

- Anthropic updated its documentation to explicitly void transfers of shares to **SPVs (Special Purpose Vehicles)** and called out specific firms by name offering unauthorized Anthropic stock access.
- OpenAI issued a similar statement reaffirming that unauthorized transfers are legally void.
- The announcement triggered a ~50% crash in Anthropic's price on gray secondary markets.
- Many retail investors are unknowingly holding **layered financial abstractions** — tokenized receipts for possible future exposure to SPVs that may or may not hold actual equity.
- Broader concern: if major private companies systematically invalidate SPV structures, a **reckoning in private markets** may follow, especially around high-profile eventual IPOs like SpaceX.

### 3. Headlines: White House Walks Back FDA-Style AI Regulation

- National Economic Council Chairman Kevin Hassett had floated an FDA-like approval process for AI models, triggering significant industry backlash.
- Former AI czar David Sacks and Hassett himself both walked back the proposal; Hassett stated: *"Nobody has an idea that we should do something like bring in a giant new bureaucracy to approve AIs."*
- Current approach is described as direct collaboration between administration officials and AI labs to prevent extreme harm pre-release.

### 4. Headlines: Trump Tech Envoy to China — Jensen Huang Notably Absent

- Trump is assembling a tech delegation for China trade talks including Elon Musk, Tim Cook, and Meta's Dina Powell McCormick, plus semiconductor and finance executives.
- Jensen Huang is absent despite expressing willingness to join; this may signal that **NVIDIA's AI chips are off the table** in trade negotiations.
- Zero export licenses for H200 GPUs to China have been approved by the Commerce Department despite earlier indications they would be.

### 5. Main Story: Thinking Machines Lab and the Concept of Interaction Models

#### Background on Thinking Machines Lab
- Founded by **Mira Murati** (former OpenAI CTO) with a superteam of researchers poached from major labs.
- Raised low billions in funding — significant but modest compared to frontier labs.
- First product, **Tinker** (October prior year), was an RL-as-a-service platform for fine-tuning open-source models; received limited attention.
- Notable co-founder departures (Barrett Zoff, Luke Metz) returned to OpenAI in January.

#### The Problem: The Collaboration Bottleneck
- Current AI systems operate in a **single-threaded, turn-based** fashion: the model waits while the user speaks/types, then generates a response while perception freezes.
- This creates a **narrow channel** for human-AI collaboration — users must batch their thoughts, cannot point at things, and must phrase requests like emails.
- TML's blog post frames this as: *"The interface doesn't leave room for us, so we adapt to the models."*
- Analogy used throughout: current AI interaction is like trying to resolve a disagreement **over email rather than in person**.

#### The Proposed Solution: Interaction Models
- **Interaction models** are trained from scratch around **continuous, time-aware exchange** rather than discrete turns.
- Instead of flattening inputs and outputs into one ordered token sequence, the model processes **parallel input and output streams split into 200-millisecond microturns**.
- The model is in **constant two-way exchange** — perceiving and responding simultaneously.
- Architecture is a **two-part system**:
  1. A **real-time interaction model** that stays present with the user (listening, speaking, reacting)
  2. A **background model** that handles longer reasoning, browsing, tool use, and agentic work
- The interaction model keeps talking/listening while the background model works, then weaves results into conversation when appropriate.

#### Demonstrated Capabilities
- **Simultaneous translation**: begins translating speech from one language to another while the speaker is still talking (similar to live human interpreters).
- **Dialogue management**: tracks whether the speaker is thinking, yielding, self-correcting, or inviting a response — no hardcoded system, adapts to context.
- **Visual proactivity / interjection**: e.g., noticing when a researcher starts slouching and reminding her to correct posture without being asked.
- **Real-time professional softening**: researcher speaks candidly; the model reformulates the statement into a more socially appropriate version simultaneously.
- **Background search during live conversation**: model searches the web while conversing, incorporating results naturally — demonstrated with a conversation about *The Devil Wears Prada 2*, a film not in its training data.

#### New Benchmarks Introduced
- **TimeSpeak**: tests whether the model can initiate speech at user-specified times with correct content (e.g., breathing reminders every four seconds).
- **QSpeak**: tests whether the model speaks at the appropriate moment with semantically correct responses (e.g., code-switching correction).
- The necessity of inventing new benchmarks signals that the capability set is genuinely novel.

### 6. Framing: The GUI Moment for AI

- TML co-founder **John Schulman** argues that interactivity and collaboration capabilities are under-emphasized relative to intelligence and autonomy because they're harder to evaluate.
- TML researcher **Claire Birch** draws an explicit parallel to the transition from **CLI to GUI**: the GUI democratized computing by removing the requirement for users to "think like the computer."
- Her argument: current chat interfaces are still **surprisingly CLI-like** — they reward verbal fluency, careful prompting, and procedural skill, not natural human communication.
- The GUI moment for AI will be: *"when the user no longer has to think like the computer, or like the AI, or like the prompt engineer, in order to access the machine's capabilities."*
- Interaction models are positioned as a step toward that moment.

### 7. Community Reaction and Broader Implications

- TML's messaging was notably cohesive — all team members communicated a consistent narrative about **increasing human-AI bandwidth** and keeping humans as "main characters."
- Professor Ethan Mollick noted demos leaned toward fun/novelty use cases and called for more demonstrations of high-value applications (meetings, education, training).
- Developer Nick Dobos framed it as a **tech demo for a developer/VC audience**, not a consumer product demo.
- Community consensus: this likely will not stay unique for long — frontier labs iterate quickly on each other's abstractions.
- OpenAI's **GPT Real-Time 2** model was already being demonstrated doing similar background-agent work (e.g., updating a Kanban board during a stand-up meeting).
- Speculative future: *"Software engineering is 100% meetings and your AI note-taker orchestrates all your coding agents in the background."*

---

## Key Concepts

- **Interaction Model**: A new class of AI model trained from scratch to handle continuous real-time interaction natively, rather than as a layer added onto a turn-based system.
- **Turn-based Model**: The dominant current architecture in which a model waits for user input to finish, generates a response, then waits again — creating discrete, sequential dialogue turns.
- **Microturn (200ms)**: The unit of time-aligned processing in TML's interaction model, allowing parallel input and output streams rather than sequential ones.
- **Collaboration Bottleneck**: TML's term for the structural limitation imposed by turn-based interfaces that prevents users from naturally interrupting, pointing, correcting, or interacting fluidly with AI.
- **Visual Proactivity**: The ability of a model to initiate speech or action based on changes in the visual environment without waiting for an audio prompt.
- **Background Model**: The second component of TML's two-part system, handling long-form reasoning, tool use, browsing, and agentic tasks while the interaction model maintains the live user-facing conversation.
- **TimeSpeak**: TML's benchmark measuring whether a model can initiate speech at user-specified times with correct content.
- **QSpeak**: TML's benchmark measuring whether a model speaks at the contextually appropriate moment with semantically correct responses.
- **Unlock Index / Unlock Score**: A proposed alternative to traditional benchmarks that measures how many and what types of new use cases a model enables, rather than performance on existing tasks.
- **DeployCo (OpenAI Deployment Company)**: OpenAI's newly launched forward-deployed engineering joint venture to help enterprises implement AI at scale.
- **SPV (Special Purpose Vehicle)**: A legal holding entity used in finance; in the AI context, unauthorized SPVs have been used to offer exposure to private company stock outside official transfer approval processes.
- **Capability Overhang**: The gap between what AI models can theoretically do and what enterprises are actually extracting from them due to implementation and adoption challenges.
- **GUI Moment**: Claire Birch's metaphor for a future inflection point where AI interaction becomes as naturally accessible as a graphical interface was relative to the command line.

---

## Summary

The central argument of this episode is that Thinking Machines Lab has identified a genuine architectural limitation in current AI systems — their turn-based, single-threaded nature — and has built a new class of model, the **interaction model**, designed from the ground up to engage in continuous, time-aware, multimodal interaction. By processing parallel input and output streams in 200-millisecond microturns and pairing a real-time user-facing model with a background reasoning and agentic model, TML's system can do things no existing commercial real-time API can: visually proactive interjection, simultaneous translation, real-time contextual correction, and background search woven naturally into live conversation. The broader philosophical framing — articulated through the CLI-to-GUI analogy — is that current chat interfaces still require users to adapt to the machine, and that the next paradigm shift will occur when AI interaction becomes as natural and fluid as human-to-human communication. While the host and community acknowledge this capability gap may not remain unique to TML for long given how rapidly frontier labs iterate, the announcement is treated as a meaningful signal that **persistent, real-time, multimodal interaction** represents an emerging and important category of AI capability with significant implications for enterprise, education, and everyday use.
