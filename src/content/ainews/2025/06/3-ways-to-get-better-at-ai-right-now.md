---
title: 3 Ways To Get Better at AI Right Now
description: >-
  This episode of the AI Daily Brief presents a practical, opinionated framework
  for rapidly improving AI proficiency. The speaker (host of the AI Daily Brief,
  also affiliated with a company called Super Intelligent) argues that existing
  AI educatio...
pubDate: 2025-06-22T00:00:00.000Z
type: episode
tags:
  - ai-daily-brief-podcast
url: 'https://www.patreon.com/posts/132001642'
draft: false
---
# 3 Ways to Get Better at AI Right Now

## Overview
This episode of the *AI Daily Brief* presents a practical, opinionated framework for rapidly improving AI proficiency. The speaker (host of the AI Daily Brief, also affiliated with a company called Super Intelligent) argues that existing AI education resources have failed to keep pace with the shift toward agentic AI, and that the best path forward is hands-on practice with three specific categories of tools. The talk is aimed at both newcomers to AI and more experienced users who want to deepen practical skills.

**Source video:** [No URL provided — search "2025-06-22 3 ways to get better at AI right now AI Daily Brief" on YouTube]

---

## Prerequisites
- Basic familiarity with large language models (LLMs) and chatbot interfaces (e.g., ChatGPT)
- General understanding of what "AI agents" and "automation workflows" mean at a conceptual level
- No coding background required; the talk is explicitly aimed at non-engineers
- Familiarity with SaaS products and startup/product development contexts is helpful for the business-oriented examples

---

## Main Points

### The Education Gap in Agentic AI
- Existing AI learning resources (Coursera, Udemy, etc.) have not caught up with the shift to agentic AI workflows
- There are no formal courses on "AI agent management" or becoming an "agent boss"
- The speaker's core belief: the best way to learn AI is through accumulated hands-on reps, not structured curricula
- "There are no AI experts. There are only people who have practiced more than you."

---

### Way 1 — Use OpenAI's O3 as a Strategic Colleague for One Week
- The model choice matters: O3 is specifically recommended for business and strategic thinking, while Claude or GPT-4.5 are preferred for writing and prose
- The key reframe is treating O3 as a **strategic colleague**, not an assistant or intern

**Specific activities recommended:**
- **Idea → structured memo:** Give O3 a raw, rambling idea (even via voice transcription) and ask it to return a structured overview memo with sections, tables, and next steps. The speaker demonstrated this with a "Podcast Growth Alliance" concept.
- **Scenario mapping:** Give O3 a strategic question and ask it to lay out multiple scenarios or a full product roadmap. Useful for exploring options before committing to a direction. Example: converting one-time audits into an ongoing SaaS product suite.
- **Deep Research:** Use O3's Deep Research mode as a single-purpose research agent. It searches dozens of sources, asks clarifying questions, and returns a cited report — work that might previously take a human researcher one to two weeks.

**Important caveats:**
- O3 will not volunteer critical feedback unless explicitly asked; prompt it to "steel man the opposing argument" if pressure-testing is needed
- O3 is poor at tasks requiring taste and judgment (e.g., naming projects or companies)
- **O3 Pro** (newer, more capable) appears to excel when given very large amounts of context for complex decisions, but the speaker has not yet personally validated this

---

### Way 2 — Vibe Code Something Using a No-Code AI Builder
- Recommended tools: Lovable, Bolt, Replit, SoftGen (any will provide the core experience)
- Vibe coding — generating functional software from natural language prompts — is a breakout AI use case that significantly expands what non-engineers can create
- The speaker considers vibe coding prompt skills more valuable right now than traditional prompt engineering

**Three recommended starter projects:**
1. **Prototype a feature idea** for a product you work on. Instead of writing up an idea, build a clickable prototype to show rather than tell. Forces clarification of the idea and makes it easier for teammates to understand. *Example: a one-click RFP generator connecting audit results to a vendor marketplace.*
2. **Prototype a side project idea.** Build the thing you have always said "someone should make." *Example: a social vibe-coding platform combining Lovable + Product Hunt + a token ecosystem.*
3. **Recreate a game you liked as a kid.** Game design forces engagement with more edge cases and complexity, giving a broader sense of the tool's capabilities. *Example: "Eldritch Trail," an H.P. Lovecraft-themed remake of Oregon Trail.*

- Advanced extension: learn to publish using tools like Supabase and GitHub

---

### Way 3 — Build Agentic Workflows with Automation Tools
- Recommended tools: N8N, Zapier, Lindy, Plum
- Building workflows manually, even as consumer-facing agents begin to abstract this complexity away, provides an "under the hood" understanding of how agents actually function
- This foundational knowledge will provide an advantage when using higher-level agent interfaces

**Common starter workflow types:**
- Research flow
- Sales outreach flow
- Content generation flow

**Anatomy of an example workflow (Lindy lead outreach template):**
1. Trigger: user provides a list of leads (names, emails, or Google Sheets link)
2. Agent interprets input type and routes accordingly
3. Loop: searches Perplexity for lead context → sends personalized email
4. Configurable settings: model choice (fastest / balanced / smartest), external tool connections

---

### Bonus 1 — Experiment with Generalist Consumer Agents
- Tools like Genspark and Manus are early generalist agents capable of handling diverse tasks
- Genspark example: reached $36M ARR in 45 days with 24 employees
- Speaker's personal experience with these tools has been "a little underwhelming," but notes that investing time to find their strengths likely yields real value
- Early familiarity will provide a head start as agent interfaces proliferate

---

### Bonus 2 — Learn About and Interact with MCP (Model Context Protocol)
- MCP is an API standard that allows agents to access specific data sources via "MCP servers"
- Once an MCP server is set up for a data source, any agent can plug into it without re-connecting the data manually each time
- Reduces redundant integration work in a world of many parallel agent developers
- Recommended resource: Riley Brown (@RileyBrown_AI on X/Twitter) has a pinned, extensive MCP tutorial
- Described as the most advanced of all suggestions; mastering it puts a user ahead of nearly all current AI practitioners

---

## Key Concepts

- **O3 / O3 Pro:** OpenAI reasoning models recommended for strategic and analytical tasks; O3 Pro excels with large context inputs for complex decisions
- **Deep Research:** A single-purpose agentic research tool built on O3 that autonomously searches the web and returns a cited report based on a user prompt
- **Strategic colleague framing:** Treating an LLM as a peer collaborator with substantive ideas rather than as a tool to be precisely prompted
- **Vibe coding:** Generating functional software applications from natural language descriptions using tools like Lovable, Bolt, or Replit, without traditional programming
- **Agentic workflows:** Automated multi-step processes in which an AI agent takes actions, loops through tasks, and interacts with external tools with minimal human intervention
- **N8N / Zapier / Lindy:** No-code or low-code platforms for building agentic automation workflows
- **MCP (Model Context Protocol):** An open API standard that allows AI agents to connect to data sources via pre-built servers, enabling reusable data integrations across multiple agents
- **Steel manning:** A prompting technique in which the user explicitly asks the model to construct the strongest possible argument against an idea, compensating for O3's default tendency to accept premises uncritically
- **Agent Readiness Audit:** A Super Intelligent product that assesses a company's readiness to adopt AI agents, covering organizational gaps, data readiness, and applicable use cases

---

## Summary

The speaker argues that formal AI education has not kept pace with the current agentic era, and that the most effective way to build real AI competency right now is deliberate, hands-on practice across three domains: using OpenAI's O3 as a genuine strategic thinking partner (not merely a text generator), building functional prototypes through vibe coding tools like Lovable, and constructing agentic automation workflows manually via platforms like N8N or Lindy. Each activity is chosen because it builds a distinct layer of practical understanding — strategic reasoning with AI, software creation through natural language, and agent orchestration — that together represent the core skills of the emerging AI-native practitioner. The speaker emphasizes that these activities are not only instructive but genuinely enjoyable, and that a week of focused effort in each area will place a practitioner meaningfully ahead of the vast majority of the population in extracting real value from AI.
