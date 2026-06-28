---
title: 'AI, Agents and Software 3.0 '
description: >-
  This episode of the AI Daily Brief (published 2025-06-29) discusses and
  contextualises a keynote speech delivered by Andrej Karpathy (former OpenAI
  co-founder and former Tesla AI director) at the Y Combinator Startup School.
  The host walks through...
pubDate: 2025-06-29T00:00:00.000Z
type: episode
tags:
  - ai-daily-brief-podcast
draft: false
---
# Software 3.0: AI Agents and the Redesign of Software

## Overview

This episode of the *AI Daily Brief* (published 2025-06-29) discusses and contextualises a keynote speech delivered by **Andrej Karpathy** (former OpenAI co-founder and former Tesla AI director) at the **Y Combinator Startup School**. The host walks through Karpathy's central thesis: that large language models (LLMs) represent a fundamentally new paradigm of software — "Software 3.0" — and that the entire software infrastructure of the world must now be re-architected to accommodate LLM-native and agent-native operation. The talk matters because it frames not just a technical shift but a civilisational one, with implications for how software is built, consumed, and designed.

*Source video (Karpathy's YC Startup School keynote):* The host notes the keynote was published to YouTube and encourages viewers to watch it directly. A reconstructed slide deck was assembled by the Latent Space team from social media clips.

---

## Prerequisites

- Basic familiarity with software development concepts (code, APIs, GUIs)
- General understanding of machine learning and neural networks
- Awareness of large language models (e.g., GPT-4, Claude, Gemini) and their capabilities
- Familiarity with tools such as Cursor, ChatGPT, and GitHub Copilot is helpful
- Some awareness of the AI engineering landscape (prompt engineering, agents, RAG)

---

## Main Points

### The Three Eras of Software

- **Software 1.0**: Humans write explicit computer code (e.g., C++, Python) to instruct machines. Dominant paradigm for roughly 70 years.
- **Software 2.0**: Code is replaced by neural network weights learned from data. The neural network *is* the software. Karpathy documented this shift at Tesla, where neural networks gradually replaced hand-written C++ in the Autopilot codebase.
- **Software 3.0**: LLMs are programmable via natural language (English prompts). Karpathy's oft-quoted line from January 2023: *"The hottest new programming language is English."*
- The striking observation is that two major paradigm shifts have occurred in a very short period, after roughly 70 years of relative stability.

### LLMs as a New Type of Computing Infrastructure

- Karpathy explored several analogies for what LLMs *are* as infrastructure:
  - **Electricity**: LLMs feel like utilities — tokens are metered, infrastructure is centralised, and outages resemble brownouts.
  - **Chip fabs**: Require massive capital expenditure, contain deeply guarded trade secrets, and naturally trend toward a small number of dominant players.
  - **Operating systems** (his preferred analogy): LLMs are complex ecosystems with differentiated functionality, tool use, and performance. Just as different OS choices yield different outcomes, running Cursor on OpenAI vs. Anthropic vs. Google models produces different results.
- He noted we are currently in the "1970s era" of the LLM computer — large, centralised, serving limited compute — and anticipates a "PC revolution" equivalent, where users eventually run models on their own hardware.
- Current LLM interfaces are analogous to using an OS through a terminal. A true GUI for LLMs has not yet been invented: *"Shouldn't ChatGPT have a graphical user interface different to the text bubbles?"*

### Unprecedented Adoption Pattern

- In both Software 1.0 and 2.0, early adopters were governments and large corporations (the only entities that could afford mainframes or large-scale ML infrastructure).
- Software 3.0 inverted this: **everyday consumers were the first adopters**. ChatGPT was deployed to billions of people essentially overnight.
- Karpathy found this historically remarkable: *"It's really fascinating to me that we have a new magical computer, and it's helping me boil an egg rather than helping the government with military ballistics."*
- Corporations and governments are, unusually, *lagging behind* individual consumers in adoption.

### Limitations of LLMs as Software

- **Hallucination**: LLMs can produce confident but incorrect outputs.
- **Jagged intelligence**: Superhuman in some domains, yet can fail trivial tasks (e.g., counting letters in "strawberry").
- **No persistent learning**: Unlike a human employee who accumulates institutional knowledge, an LLM loses everything when the context window closes. This is a fundamental break from the analogy of human cognition.
- Karpathy's framing: *"You have to simultaneously think through this superhuman thing that has a bunch of cognitive deficits and issues."*

### Partial Autonomy Apps and the Autonomy Slider

- Karpathy identified a key category of emerging software: **partial autonomy apps** (framed as "Copilot or Cursor for X").
- These apps act as an orchestration layer over LLMs, with a human overseeing the process rather than interacting with the LLM directly.
- Central concept: the **autonomy slider** — a spectrum from full human control (augmentation) to full AI autonomy (agents). Most near-term software will sit somewhere in the middle.
- Analogy used: Iron Man's suit — on one end, Tony Stark wears the suit (augmentation); on the other, the suit operates autonomously (full agent).
- Key design principle: **make the feedback loop between LLM generation and human verification as tight as possible**.
- Vibe coding illustrates the current state: excellent for quickly building novel tools, but the non-AI surrounding infrastructure (authentication, payments, domain registration) still requires significant human effort.

### Re-Architecting Software for Agents

- Traditional software interfaces (buttons, clicks, GUIs) are designed for humans and are inaccessible to LLMs.
- A new consumer category is emerging: **agents** — entities that are computer-like but human-like, requiring their own interaction paradigms.
- Practical examples of agent-friendly design:
  - **Vercel and Stripe** expose documentation via Markdown so LLMs can consume it directly.
  - Vercel has replaced the word "click" in its docs with agent-accessible API commands.
  - **Anthropic's MCP (Model Context Protocol)** is built on a similar concept of making interfaces LLM-accessible.
- Karpathy's principle: *"Anytime your docs say click, this is bad — an LLM won't be able to natively take this action right now."*
- The full re-architecture of software for agents is viewed as **at least a decade-long build-out** that has only just begun.

### The Evolving Role of the AI Engineer

- The *Rise of the AI Engineer* (Swyx/Latent Space) established that AI engineering is no longer just ML research — it is a product and application discipline.
- **Context engineering** (Harrison Chase / LangChain): *"Building dynamic systems to provide the right information and tools in the right format such that the LLM can plausibly accomplish the task."* This has become increasingly important as agents handle more complex, longer-context workflows.
- Karpathy's earlier prediction — that AI engineers would vastly outnumber ML engineers — is increasingly validated.

---

## Key Concepts

- **Software 1.0**: Traditional paradigm where humans write explicit code to instruct computers.
- **Software 2.0**: Paradigm where neural network weights learned from data replace hand-written code.
- **Software 3.0**: Paradigm where LLMs are programmed via natural language prompts to achieve outcomes.
- **Large Language Model (LLM)**: A neural network trained on large text corpora, capable of generating and reasoning over natural language; treated here as a new programmable computing substrate.
- **Autonomy slider**: A conceptual (and sometimes literal UI) spectrum determining how much independent action an LLM agent is permitted to take versus how much human oversight is required.
- **Partial autonomy app**: A software product that orchestrates LLM actions while keeping a human in the loop; exemplified by Cursor.
- **Jagged intelligence**: The uneven capability profile of LLMs — superhuman in some tasks, surprisingly poor in others.
- **Context engineering**: The practice of designing dynamic systems that supply LLMs with the right information, tools, and formatting to successfully complete tasks.
- **MCP (Model Context Protocol)**: Anthropic's protocol for making software interfaces and documentation accessible to LLM agents.
- **Vibe coding**: Colloquial term for using LLMs to rapidly prototype or build software with minimal traditional hand-coding.
- **AI Engineer**: A software engineering sub-discipline focused on building applications and products on top of foundation models, distinct from ML research roles.

---

## Summary

Andrej Karpathy's YC Startup School keynote, as analysed in this episode, argues that we are living through the third major paradigm shift in the history of software — from human-written code (1.0), to neural network weights (2.0), to LLMs programmable via natural language (3.0). What makes this moment historically unique is that, unlike prior computing revolutions, everyday consumers adopted this new form of computing before institutions did. LLMs are best understood not as a tool or a feature, but as a new kind of operating system — a complex ecosystem requiring its own interfaces, infrastructure, and interaction paradigms. The near-term practical implication is the rise of partial autonomy applications that place humans and LLMs in tight collaborative loops, governed by an "autonomy slider." The longer-term implication is that the entire existing software infrastructure — documentation, APIs, UI conventions, authentication flows — must be re-architected to be accessible to agents rather than only to human users. Karpathy frames this as at least a decade of foundational engineering work that is only now beginning, representing one of the largest opportunities in the history of software.
