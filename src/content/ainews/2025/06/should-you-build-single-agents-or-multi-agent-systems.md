---
title: Should You Build Single Agents or Multi Agent Systems?
description: >-
  This episode of the AI Daily Brief (published June 18, 2025) examines a
  current architectural debate in AI engineering: whether to build single-agent
  or multi-agent systems for complex tasks. The episode synthesizes two
  contrasting published persp...
pubDate: 2025-06-18T00:00:00.000Z
type: episode
tags:
  - ai-daily-brief-podcast
url: 'https://www.youtube.com/watch?v=ntvkDnk_5jA'
draft: false
---
# Should You Build Single Agents or Multi-Agent Systems?

## Overview

This episode of the **AI Daily Brief** (published June 18, 2025) examines a current architectural debate in AI engineering: whether to build single-agent or multi-agent systems for complex tasks. The episode synthesizes two contrasting published perspectives — one from **Anthropic** ("How We Built Our Multi-Agent Research System") and one from **Cognition** (makers of the Devin AI coding tool, authored by Walden Yan, titled "Simply Don't Build Multi-Agents") — to help practitioners think through which approach suits their use case.

The episode also covers two headline stories: escalating tensions between OpenAI and Microsoft over OpenAI's corporate restructuring, and the fallout from Meta's acquisition of a 49% stake in Scale AI.

Source video URL: *(not provided)*

---

## Prerequisites

- Basic familiarity with **large language models (LLMs)** and how they process prompts and context
- Understanding of what an **AI agent** is — an LLM-powered system that autonomously takes actions over multiple steps to complete a task
- Awareness of concepts like **context windows**, **token usage**, and **API-based model access**
- Familiarity with the general landscape of AI companies (Anthropic, OpenAI, Microsoft, Meta, etc.)
- Some exposure to software engineering concepts such as parallel processing and pipeline architectures

---

## Main Points

### Headline 1: OpenAI vs. Microsoft Tensions Over Corporate Restructuring

- OpenAI is converting from a nonprofit to a public benefit corporation; Microsoft is reportedly the only investor opposing the conversion due to concerns about its lucrative revenue- and profit-sharing agreement (20% of revenues, 49% of profits, capped at ~$120 billion).
- OpenAI executives have reportedly discussed seeking a federal antitrust review of the Microsoft investment contract, and a PR campaign targeting Microsoft — though both companies issued a joint statement calling the partnership "productive."
- Key sticking points include: how many shares Microsoft receives post-conversion, OpenAI's desire to exit its exclusive cloud-hosting agreement with Microsoft (which currently bars Amazon and Google from selling OpenAI models via API), and whether Microsoft gains access to Windsurf's technology via the pending acquisition.
- OpenAI has offered Microsoft a 33% stake in the restructured entity — a significant reduction from the current 49% profit share — and faces a year-end deadline to complete restructuring or risk losing $20 billion in committed funding.

### Headline 2: Google and Others Cut Ties with Scale AI Following Meta Deal

- Reuters reported that Google — Scale AI's largest customer, accounting for ~$150 million of Scale's $870 million in 2024 revenue — is ending its relationship with Scale following Meta's acquisition of a 49% stake.
- Microsoft and xAI were also reportedly planning to end contracts with Scale, raising questions about what Meta actually acquired for ~$14.3 billion.
- The deal structure suggests Meta's primary goal was securing Scale CEO **Alexander Wang** to lead Meta's superintelligence efforts; Wang personally stands to receive over $1 billion vesting over five years contingent on his continued employment.
- Meta negotiated protective terms: if Scale is sold within 2.5 years, Meta is fully repaid before other investors. The deal is described as highly binary — either a stroke of genius or a massive overpayment.

### Main Topic: The Case For Multi-Agent Systems (Anthropic)

- Anthropic's multi-agent research system uses a **central lead (orchestrator) agent** that breaks down a user query into discrete subtasks, then dispatches multiple **sub-agents** to execute those subtasks in parallel using search tools, before collating results into a final report.
- Key benefits identified:
  - **Parallelization**: dozens of sub-agents work simultaneously, dramatically increasing speed.
  - **Fault tolerance**: if one sub-agent fails, the orchestrator spawns a new one with adjusted instructions, rather than the whole workflow breaking.
  - **Context window management**: each sub-agent operates within its own context window, returning a compressed result to the lead agent, circumventing the limits of a single context window.
  - **Cost-effective model mixing**: a Claude 4 Opus orchestrator with Claude 4 Sonnet sub-agents outperformed a single Claude 4 Opus agent by **90.2%** on internal evaluations.
- Anthropic's core explanation for why multi-agent systems work: **"Multi-agent systems work mainly because they help spend enough tokens to solve the problem. Token usage by itself explains 80% of the improvement."**
- Significant downside: cost. Agents use ~4× more tokens than chat interactions; multi-agent systems use ~**15× more tokens** than chats. The value of the task must justify the cost.
- Anthropic explicitly notes that multi-agent systems are **not universally applicable**: tasks with heavy interdependencies between sub-agents (e.g., most coding tasks) are a poor fit.

### Main Topic: The Case Against Multi-Agent Systems (Cognition / Walden Yan)

- Cognition argues that parallel multi-agent architectures are **fragile in practice** because sub-agents lack the shared context needed to produce consistent, coherent outputs.
- Illustrative example: a Flappy Bird clone task split between two sub-agents — one builds the background (misinterprets the style as Super Mario Bros.), the other builds the bird (wrong visual style and movement). The orchestrator then must reconcile two incompatible outputs.
- Simply passing the original task as context to sub-agents is insufficient: in real multi-turn production systems, there are tool calls, intermediate decisions, and accumulated context that sub-agents cannot see and that materially affect correct interpretation.
- Two core principles derived from their analysis:
  1. **Share context and share full agent traces**, not just individual messages.
  2. **Actions carry implicit decisions; conflicting decisions produce bad results.**
- Their preferred alternative is a **linear handoff (sequential) design**: a single agent breaks down the task and then executes each subtask in sequence, carrying the full accumulated context forward at each step.
- For tasks too large for a single context window, they propose a **context compression** side process — a separate LLM that distills the key decisions and context from prior steps into a condensed form passed to the next step in the chain.
- Cognition acknowledges this is a snapshot in time and expresses optimism about multi-agent collaboration as model capabilities improve.

### Synthesis: Which Approach Should You Use?

- The two arguments are **not directly contradictory** — they address different use cases:
  - Anthropic's multi-agent approach suits tasks where subtasks are **truly independent and parallelizable** (e.g., web research where each sub-agent looks up a different company).
  - Cognition's single-agent sequential approach suits tasks where subtasks are **interdependent and require shared context** (e.g., coding, where visual style and logic must remain consistent across components).
- The determining question: **Are the subtasks dependent on one another, or can they be executed independently?**
- Both Anthropic and Cognition agree that multi-agent systems are **not yet mature** for tasks requiring real-time coordination and context sharing between agents — this is a constraint of current capability, not a permanent limitation.

---

## Key Concepts

- **Multi-agent system**: An architecture in which a lead (orchestrator) agent delegates subtasks to multiple specialized sub-agents that operate in parallel, then aggregates their outputs.
- **Single-agent (sequential/linear handoff) design**: An architecture where one agent breaks down a task and executes subtasks sequentially, carrying full context forward at each step.
- **Orchestrator agent**: The central agent in a multi-agent system responsible for decomposing tasks, dispatching sub-agents, and collating results.
- **Sub-agent**: A specialized agent tasked with completing a discrete, bounded portion of a larger workflow.
- **Context window**: The maximum amount of text (tokens) an LLM can process in a single interaction; a fundamental constraint in agent design.
- **Context engineering**: The practice of dynamically constructing, managing, and compressing the context provided to an LLM agent in a running system — described as the primary job of engineers building agents in 2025.
- **Parallelization**: Running multiple independent subtasks simultaneously across separate agents to improve speed and throughput.
- **Context compression**: A technique where a secondary LLM summarizes the key decisions and history of a long agent session into a smaller context passed to the next step, enabling long tasks to proceed without exceeding context limits.
- **Token usage**: The measure of how many tokens an LLM consumes in processing; directly correlated with cost and, per Anthropic, the primary driver of multi-agent performance gains.
- **Fault tolerance**: The ability of a system to recover from individual component failures without the entire workflow breaking down.
- **Devin**: An AI-powered coding agent developed by Cognition.
- **Scale AI**: A data labeling and AI infrastructure company in which Meta acquired a ~49% stake for ~$14.3 billion in mid-2025.

---

## Summary

The central message of the main episode is that the choice between single-agent and multi-agent architectures is **use-case dependent, not ideological**. Anthropic's research shows that multi-agent systems excel when tasks can be decomposed into truly independent, parallelizable subtasks — as in web research — delivering dramatic speed and performance improvements largely because they allow more tokens to be spent on a problem. Cognition, drawing from their experience building a coding agent, argues that parallelism introduces fragility when sub-agents lack shared context, and advocates instead for a sequential, single-agent architecture in which full context travels linearly through the workflow. Both camps agree on the fundamental importance of context management, and both acknowledge that multi-agent coordination across interdependent tasks remains an unsolved problem at current capability levels — one that ongoing research is actively working to address.
