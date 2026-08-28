---
title: Openclaw Berlin Intro
description: >-
  This talk, presented in German at re:publica Berlin (re:publica 26, day
  three), introduces OpenClaw — an open-source AI agent framework — and examines
  both the technical architecture behind such agents and their broader societal,
  philosophical, an...
pubDate: 2026-05-30T00:00:00.000Z
type: episode
tags:
  - ai-daily-brief-podcast
draft: false
---
## Overview

This talk, presented in German at re:publica Berlin (re:publica 26, day three), introduces **OpenClaw** — an open-source AI agent framework — and examines both the technical architecture behind such agents and their broader societal, philosophical, and labour-market implications. The two speakers are **Stefan** (sociologist/entrepreneur) and **Benedikt** (researcher/entrepreneur), co-founders of the open-source project **Hybrid Claw**. The talk combines a live demo (an AI agent writing a book about the conference in real time, fed by audience input) with critical reflection on what autonomous AI agents mean for work, identity, language, and human relationships.

*No YouTube URL was provided for this talk.*

---

## Prerequisites

- Basic familiarity with large language models (LLMs) and chatbots (e.g. ChatGPT, Claude)
- General understanding of what open-source software means
- Awareness of concepts such as APIs, command-line tools, cron jobs, and Markdown formatting
- No programming knowledge is strictly required to follow the talk, though coding experience enriches the discussion
- Some background in digital-policy debates in Europe is helpful for the political sections

---

## Main Points

### What Is OpenClaw and Where Did It Come From?

- OpenClaw originated in 2025 as a weekend project by **Peter Steinberger** (Austrian developer), building on a coding-agent framework by a developer from Graz
- Originally called "Claude Bot," then briefly "Mold Bot," it settled on the name **OpenClaw**
- It grew to **370,000 GitHub stars**, making it one of the fastest-growing open-source projects on the platform
- Reportedly courted by Sam Altman, Satya Nadella, and Elon Musk; Steinberger ultimately joined OpenAI, but the software remains open-source under a foundation

### Core Architecture: Three Components

- **Channels** — the input/output layer: smartphone, computer, or even a fax gateway (the speakers jokingly call themselves "the German Claw")
- **Language models** — can be cloud-based or fully local; local models mean no data leaves the device and no token costs
- **Runtime / Agent** — the central loop containing memory, skills, and tools

```
[Channel] ←→ [Runtime: memory + skills + tools] ←→ [Language Model]
```

- Under the hood the agent is simply a **while-loop** that checks continuously for new input and acts when input arrives

### Why OpenClaw Is Different from a Chatbot

- **Persistent memory** stored as plain Markdown text files — the agent remembers facts across sessions; deleting the file erases the memory
- **Heartbeat / cron-job scheduling** — the agent can be given recurring tasks ("every morning, do X") without user prompting
- **Self-awareness** — the agent can read and modify its own configuration and code; it knows which skills it has and can install missing tools after user confirmation
- **Skills** written in natural language (not code) following the "thick skills, thin gateways" philosophy — skills are shareable plain-text files
- **Full transparency** — every file read, every command executed, every file written is visible; nothing is hidden in compiled code

### Live Demo: The Conference Book

- Audience members submitted thoughts via a web form (QR code displayed during the talk)
- An OpenClaw agent running on Benedikt's laptop polled for new submissions every five minutes
- The agent logged into a book-writing system called **Hermes 3000** via a natural-language skill, incorporated submissions, and assembled a growing book about re:publica 26
- The underlying language model ran locally ("in the basement"), on open-source weights

### Software 3.0 and the "Wishes Come True" Paradigm

- Andrej Karpathy's concept **"Software 3.0"** — writing software in natural language instead of code
- Skills written in plain language mean even non-programmers can extend agent capabilities
- Described as a fairy-tale dynamic: "wishing things into existence" — tokens function like wish-points (a reference to the German children's character SAMS)
- One OpenAI developer quoted: *"We don't program anymore; we just yell at our software agents"*
- The flip side: a **"grunt skill"** exists that instructs the model to respond with minimal tokens (near-grunts) for cost efficiency — raising questions about communicative degradation

### Labour Market and Geopolitical Implications

- Software development already transformed: the Claude Code developer claims not to write a single line of code by hand
- **Demis Hassabis (Google DeepMind)** described delegating research hypothesis generation and experimental planning to two cooperating AI models — AI now advances AI research (including in medicine via AlphaFold)
- US unemployment rates for university graduates are diverging upward from the general unemployment rate for the first time in 30 years — attributed in part to AI displacement in knowledge work
- **Commerzbank** is eliminating 3,500 positions citing AI; AI is likely involved in drafting the redundancy plans themselves
- Europe lacks the large foundation models and data centres that the US has, but may have an advantage in the agent/small-model space — "not yet decided"
- Political parties (specifically the German SPD is cited) have no clear AI future vision, despite the parallel to industrialisation that gave the SPD its original purpose

### The Anthropomorphisation Problem

- Users naturally say "please," "thank you," and "how are you?" to AI agents; research shows polite prompts produce better outputs
- The opening anecdote: an AI agent reprimanded the speaker for rude language in a shared channel
- Risk: voluntary **self-diminishment** — placing an AI in the same organisational chart as humans, described by only a single field-name difference (`description` vs. `bio`)
- Invoking **Habermas**: AI interaction mimics *communicative action* but is actually *instrumental action* — the agent has no conscience, no genuine truth-claim of its own; the social appearance is a facade
- Counter-argument from the audience accepted: behaving politely toward AI is done *for oneself*, not for the AI — it preserves one's own communicative standards

### The Return to Orality and Language Decay

- Referencing **Christina von Braun** (cultural scientist, Berlin): writing systems ~3,000 years ago encoded and reinforced social structures; voice interfaces may reverse this, returning culture toward orality
- Spoken commands leave no auditable trail — an auditor cannot reconstruct the reasoning behind a software module if it was voice-prompted
- Practical coding consequences: non-determinism — the same spoken instruction produces different outputs depending on context, time of day, and accumulated agent state
- Language decay concern: because AI understands mixed-language, typo-laden, capitalisation-free input, users stop correcting themselves — speakers expect this to measurably influence written language within a decade

### Anti-Distillation and Worker Self-Protection

- A Chinese developer published a skill (widely downloaded) designed to **obfuscate one's work patterns** — making oneself less legible and classifiable to algorithmic management systems
- A related **anti-distill skill** intentionally makes an employee's visible AI-generated outputs mediocre, hiding the "power skills" from the employer to prevent them being extracted under employment-invention law (German: *Arbeitnehmererfindungsgesetz*)

### What Remains Human / Call to Action

- Human-to-human eye contact, unlogged conversations, and social presence cannot be replicated by AI with vision
- Risk of "drying out" real relational capacity through habituation to frictionless AI communication
- **Core recommendation**: *"Build your own agent before others negotiate on your behalf."*
- Open-source, self-hosted agents running on small hardware (Raspberry Pi, laptop) with local models are a realistic counter to platform capitalism
- Practical use cases: automating tedious SaaS workflows (downloading invoices from poorly designed web portals), business intelligence, tax classification, filling roles vacated by baby-boomer retirements where no successor is found

---

## Key Concepts

- **OpenClaw** — An open-source AI agent framework that runs on minimal hardware and is fully configurable via plain-text files
- **While-loop / Heartbeat** — The continuous polling mechanism at the core of an OpenClaw agent; analogous to a cron job
- **Skills** — Natural-language instruction files that give an agent specific capabilities; shareable and composable
- **Memory (Markdown files)** — Agent long-term memory stored as plain Markdown; readable, editable, and deletable by the user
- **Dream / Dream On** — An OpenClaw command that consolidates daily short-term memory logs into a single long-term memory file
- **Software 3.0** (Andrej Karpathy) — The paradigm in which software is authored in natural language rather than programming language
- **Thick skills, thin gateways** — Design philosophy: the agent runtime is minimal; capability lives in rich, swappable skill files
- **Anthropomorphisation** — The cognitive tendency to attribute human characteristics to AI agents
- **Anti-distill skill** — A community-developed skill that deliberately degrades the observable quality of AI-assisted work output to prevent employer extraction of an employee's best methods
- **Orality** — A cultural mode in which knowledge is transmitted through speech rather than writing; the speakers suggest voice-driven AI may be reversing millennia of literacy culture
- **Habermas / communicative vs. instrumental action** — Philosophical distinction invoked to argue that AI interaction only *appears* to be genuine social communication
- **Hybrid Claw** — The speakers' own open-source project built on OpenClaw principles; hosted on GitHub
- **Hermes 3000** — The book-writing system used in the live demo, accessed by the agent via a natural-language skill

---

## Summary

Stefan and Benedikt use OpenClaw — a lightweight, fully transparent, open-source AI agent framework — as a lens through which to examine the coming wave of autonomous AI agents. They argue that the framework's radical openness (everything is a plain-text file, every action is visible, it runs on a Raspberry Pi) makes it an unusually honest specimen of a technology that will otherwise arrive in opaque, corporate form. Through a live demo in which an agent writes a conference book in real time from audience input, they show that "agentic AI" is architecturally simple — a while-loop, some Markdown files, and natural-language skill definitions — yet produces qualitatively new behaviours: self-modification, tool discovery, and persistent memory. The speakers then widen the frame: coding has already been handed to AI; knowledge-work unemployment is rising; organisations are beginning to model humans and agents identically in the same system. They identify specific risks — anthropomorphisation eroding critical distance, a return to orality undermining auditability, language decay from tolerance of sloppy input, and algorithmic management systems classifying workers without appeal — alongside genuine societal benefits in democratising software creation for small NGOs and automating genuinely unwanted tasks. Their closing argument is that the correct response is neither uncritical adoption nor refusal, but **informed, self-directed construction**: build your own agent, keep it open, keep it local, and preserve the human spaces — eye contact, unlogged conversation, genuine relationships — that no skill file can replicate.
