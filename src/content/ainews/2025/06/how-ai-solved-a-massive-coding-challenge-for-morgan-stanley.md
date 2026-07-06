---
title: How AI Solved a Massive Coding Challenge for Morgan Stanley
description: >-
  This episode of the AI Daily Brief (published June 5, 2025) presents a case
  study in how Morgan Stanley used AI to tackle one of enterprise software's
  most persistent and intractable problems: migrating legacy COBOL codebases to
  modern programming...
pubDate: 2025-06-05T00:00:00.000Z
type: episode
tags:
  - ai-daily-brief-podcast
url: 'https://www.patreon.com/posts/130741355'
draft: false
---
# How AI Solved a Massive Coding Challenge for Morgan Stanley

## Overview

This episode of the *AI Daily Brief* (published June 5, 2025) presents a case study in how Morgan Stanley used AI to tackle one of enterprise software's most persistent and intractable problems: migrating legacy COBOL codebases to modern programming languages. The episode is hosted by Nathaniel Whittemore (implied by context as the host of the AI Daily Brief). The talk also covers headlines about ChatGPT for business updates and related AI coding developments. The central thesis is that AI coding tools are beginning to solve problems that were previously considered essentially unsolvable, moving beyond productivity enhancement into the realm of enabling entirely new possibilities.

**Source video:** *(URL not provided; episode title: "2025-06-05-how-ai-solved-a-massive-coding-challenge-for-morgan-stanley," AI Daily Brief)*

---

## Prerequisites

- Basic familiarity with software development concepts (codebases, refactoring, legacy systems)
- General awareness of AI coding assistants (e.g., GitHub Copilot, Cursor, Claude Code)
- Understanding of what a large language model (LLM) fine-tune is
- Familiarity with enterprise IT infrastructure concepts (mainframes, banking systems)
- Some awareness of COBOL as a historical programming language is helpful but not required — the episode explains it

---

## Main Points

### ChatGPT for Business: New Features and Strategic Direction

- OpenAI announced 3 million paying business users and launched a feature called **Connectors**, enabling ChatGPT to plug into Google Drive, Dropbox, Box, SharePoint, OneDrive, and others to retrieve answers from stored documents and spreadsheets.
- This positions OpenAI directly against enterprise search companies like **Glean**, making it a more significant competitive move than it might initially appear.
- Additional features include a **record mode** for meeting notes and **MCP (Model Context Protocol)** integration for the enterprise, allowing workspace admins to build custom deep research connectors to proprietary systems.
- OpenAI is also rolling out **basic memory features to free users**, aligning with Sam Altman's stated vision of ChatGPT as a personalized "AI super assistant" and life coach that deeply understands the individual user.

### The State of AI Coding in the Enterprise

- AI coding tools have had significant consumer-facing adoption ("vibe coding") but limited traction in enterprise settings due to:
  - Context window limitations when handling large legacy codebases
  - Design patterns not optimized for multi-contributor enterprise projects
  - The complexity and density of legacy code
- Despite this, Microsoft and Google CEOs have each claimed approximately **30% of their code is now AI-generated**, and Amazon developers are reportedly pressuring management for internal access to Cursor.
- The broader narrative is shifting from AI coding as a *productivity enhancer* to AI coding as an *enabler of previously impossible tasks*.

### Claude Opus 4 and the "White Whale Bug" Case Study

- A 30-year veteran C++ developer and ex-FAANG staff engineer documented on Reddit that **Claude Opus 4** solved a bug that had resisted roughly **200 hours of effort over several years**.
- The bug originated in a refactoring effort spanning ~60,000 lines of code; it was not a simple logic error but a deeper architectural incompatibility where an old edge case had previously worked only by coincidence of the old architecture.
- The developer used Claude Code with Opus 4, provided both old and new codebases, and resolved the issue in approximately **30 prompts over a couple of hours**.
- Prior attempts with GPT-4.1, Gemini 2.5, and Claude 3.7 made no progress whatsoever — illustrating that model capability jumps can be qualitative, not just incremental.

### Morgan Stanley's COBOL Migration Project

- **COBOL** (Common Business-Oriented Language), developed in 1959, was the dominant programming language for high-value computerized systems (banking, air traffic control, nuclear facilities) until the mid-1980s. It became obsolete in the 1990s but many critical systems were never replaced due to complexity and risk.
- A persistent industry fear has been that as COBOL developers retire, these systems would become impossible to maintain, constituting a "ticking time bomb" — especially in banking infrastructure.
- Morgan Stanley undertook a large-scale project to rewrite all of its COBOL systems into modern languages, using an **in-house fine-tuned version of OpenAI's models**.
- The system translates legacy COBOL code into **plain English specifications** that developers can use to guide rewrites. It can also isolate sections of code for regulatory inquiries and, in some cases, translate smaller sections fully into modern code.
- Since the tool's introduction in January 2025:
  - It has reviewed **9 million lines of code**
  - It has saved developers **280,000 hours**
- The tool was built in-house because Morgan Stanley's **global head of technology, Mike Peazy (PZ)**, found that off-the-shelf tools lacked necessary capabilities — particularly the ability to train on proprietary codebases including languages never in widespread use.
- IBM had been working on a competing tool to migrate COBOL to Java, promising to reduce migration timelines from "several years" to "one or two years," but that tool had not yet materialized — prompting Morgan Stanley to build its own.

### Humans Remain in the Loop — and Headcount Is Not Shrinking

- The AI tool is **not fully autonomous**: while technically capable of rewriting code, it does not inherently produce efficient modern code or take full advantage of modern language features.
- The current workflow uses AI primarily as a **parser and specification generator** — automating the translation of legacy code into readable specs — rather than as a full code rewriter. Human developers then use those specs to write modern, efficient code.
- PZ stated he does **not expect smaller headcounts** in his software engineering department as a result of AI. Instead, he anticipates **more code being produced** overall.
- Morgan Stanley currently has hundreds of AI use cases in production; modernizing the codebase allows those AI automations to run on modern code rather than decades-old programs.

---

## Key Concepts

- **COBOL (Common Business-Oriented Language):** A programming language developed in 1959, historically used in critical financial, government, and infrastructure systems; largely obsolete since the 1990s but still embedded in many legacy systems.
- **Legacy codebase migration:** The process of translating old, often poorly-documented code written in outdated languages into modern equivalents — historically a slow, expensive, and expertise-dependent task.
- **Vibe coding:** A loose term for AI-assisted coding, encompassing both professional developers using AI tools to augment their work and non-technical users building applications using natural language prompts.
- **Fine-tuning:** A process of further training a pre-trained AI model on a specific, often proprietary dataset to improve its performance on domain-specific tasks.
- **MCP (Model Context Protocol):** An open protocol that allows AI systems to connect to proprietary systems and third-party applications to search, reason, and act on organizational knowledge.
- **Connectors (ChatGPT feature):** A new ChatGPT for Business capability allowing the model to retrieve and reason over documents stored in enterprise platforms such as Google Drive, SharePoint, and Dropbox.
- **Claude Code:** Anthropic's agentic coding tool, powered by Claude models, capable of accessing and reasoning over large codebases.
- **Enterprise search:** A category of software tools designed to help employees find and retrieve information from within their organization's internal systems and documents; a market OpenAI is now entering via Connectors.
- **Notebook LM:** A Google AI research tool; newly updated to allow public link-sharing of notebooks with interactive AI question-answering capabilities.

---

## Summary

The central message of this episode is that AI coding tools are crossing a threshold from being merely useful productivity enhancers to being capable of solving problems that were previously considered effectively unsolvable. The Morgan Stanley case study is the anchor: using a fine-tuned OpenAI model, the firm has built an internal tool that translates decades-old COBOL code into plain English specifications, saving 280,000 developer hours since January 2025 and enabling a codebase modernization effort that the industry had been avoiding for decades out of sheer complexity. This is framed alongside the anecdote of Claude Opus 4 resolving a bug that had resisted 200 hours of expert effort, reinforcing the idea that the latest generation of models represents a qualitative leap in capability. The host argues that while AI coding has not yet fully penetrated the enterprise, stories like Morgan Stanley's signal that it is only a matter of time — and that the most significant impact of AI coding may not be job displacement, but rather the unlocking of entirely new categories of work that were previously impossible.
