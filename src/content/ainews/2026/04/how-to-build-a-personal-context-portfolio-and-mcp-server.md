---
title: How to Build a Personal Context Portfolio and MCP Server
description: >-
  This talk, from the AI Daily Brief "Build Week" series, presents the concept
  of a Personal Context Portfolio (PCP)—a portable, machine-readable collection
  of Markdown files that serves as a comprehensive self-description for AI
  agents and tools. T...
pubDate: 2026-04-03T00:00:00.000Z
type: episode
tags:
  - ai-daily-brief-podcast
url: 'https://www.youtube.com/watch?v=TVJ8lt4UfLY'
draft: false
---
# How to Build a Personal Context Portfolio and MCP Server

## Overview
This talk, from the *AI Daily Brief* "Build Week" series, presents the concept of a **Personal Context Portfolio (PCP)**—a portable, machine-readable collection of Markdown files that serves as a comprehensive self-description for AI agents and tools. The central thesis is that as AI agents proliferate, individuals face a compounding "context repetition tax": having to re-explain their identity, roles, projects, and preferences every time they adopt a new agent or tool. The speaker proposes a structured solution to this problem and walks through how to build and host it as an MCP server.

The speaker is the host of the *AI Daily Brief* podcast/video channel. No additional affiliation is stated.

*Source video: `2026-04-03_How_to_Build_a_Personal_Context_Portfolio_and_MCP_Server` (URL not available)*

---

## Prerequisites
- Familiarity with large language models (LLMs) and AI chat tools (Claude, ChatGPT, Gemini, etc.)
- Basic understanding of what AI agents are and why context matters for them
- General awareness of the Model Context Protocol (MCP) is helpful but not required
- Comfort with Markdown file format
- Basic command-line and code editor exposure (Cursor or VS Code) for the MCP server steps
- A GitHub account (for the deployment steps)

---

## Main Points

### The Context Problem Is Real—for Enterprises and Individuals Alike
- Michael Chen (Applied Compute) documented that the gap between "we have data" and "we have data an AI system can learn from" is enormous, even for sophisticated organizations.
- Lagging organizations deploy AI without giving it organizational context (e.g., dropping Copilot on employees and hoping for results).
- Notion, Andrew Ng's Context Hub, and others are all attacking the enterprise context problem—but none focus on the **individual**.
- When Claude briefly offered a memory-import feature to attract ChatGPT users, the mechanism was simply a copyable prompt asking ChatGPT to list everything it knew—functional but primitive.

### The Context Repetition Tax Degrades Quality, Not Just Time
- Every time a new agent or tool is adopted, the user must re-explain role, projects, preferences, and constraints from scratch.
- As the number of agents a person uses grows (3, 5, 10+), this becomes untenable.
- Even when users are willing to provide context, the effort required means significant information is routinely omitted, degrading agent output quality.

### Design Principles for the Personal Context Portfolio
- **Markdown-first**: Every AI system can read Markdown; it is the universal interchange format for context.
- **Modular, not monolithic**: Separate files for separate dimensions allow agents to consume only what is relevant.
- **Living, not static**: The portfolio evolves as projects and priorities change; agents help maintain it.
- **Portable**: Because it is plain files, it works with any LLM or agentic system.

### The 10 Files of the Portfolio Template
The PCP is organized into 10 Markdown files:

| File | Purpose |
|---|---|
| `identity.md` | Name, role, organization, one-paragraph distillation |
| `rolesandresponsibilities.md` | What the job/activities actually involve day-to-day |
| `currentprojects.md` | Active workstreams with status, priority, collaborators, KPIs |
| `teamandrelationships.md` | Key people, their roles, and mutual dependencies |
| `toolsandsystems.md` | Tech stack, configurations, integrations |
| `communicationstyle.md` | Tone, formatting, sycophancy preferences, output style |
| `goalsandpriorities.md` | What the person is optimizing for across time horizons |
| `preferencesandconstraints.md` | Always-do/never-do rules across any domain |
| `domainknowledge.md` | Areas of expertise, industry terminology, assumed knowledge |
| `decisionlog.md` | Past decisions and reasoning—context for future decisions |

- `currentprojects.md` is expected to change most frequently.
- `decisionlog.md` is considered potentially the most underrated file, as past decision reasoning informs future agent recommendations.

### Building the Portfolio: AI-Guided Interview Process
- Rather than writing files by hand, the user is interviewed by an AI (Claude, ChatGPT, etc.) using provided interview protocols.
- Recommended workflow: create a project in the LLM tool → run interview → draft → react → revise → iterate.
- A GitHub repo is available with templates for all 10 files, including an interview protocol per file and an overall interview protocol.
- Three synthetic demonstration examples are provided (entrepreneur, executive, knowledge worker).
- A **Personal Context Portfolio app** (hosted at `play.aidailybrief.ai`) automates this with a persistent interview powered by Claude, updating multiple portfolio files simultaneously from a single answer.

### Turning the Portfolio into a Local MCP Server
- An MCP server is a program that responds to a specific protocol: a tool asks "what do you have?" and receives a resource list; it then requests a specific resource and receives its content.
- The personal context files become those resources.
- The speaker recommends using an AI build partner (Claude, ChatGPT) to walk through setup **step by step**—insisting the AI slow down when it tries to provide too much at once.
- Most time is spent on troubleshooting (e.g., port conflicts, file naming mismatches); screenshots of errors can be shared with the AI to resolve issues.
- Practical tip: when an AI says "change one line," request the **entire updated file** to avoid copy-paste errors.

### Deploying the MCP Server Remotely
- Steps: create a GitHub repo → copy portfolio files into the project → adjust a line or two in server code → push to GitHub → deploy via **Railway**.
- The remote deployment was actually faster than the local setup due to fewer errors encountered.
- The result: any agent or tool can query the MCP server to retrieve context about the user on demand.

---

## Key Concepts

- **Personal Context Portfolio (PCP)**: A structured, modular collection of Markdown files representing a person's identity, roles, projects, and preferences—intended as a portable operating manual for AI agents.
- **Context Repetition Tax**: The cumulative time and quality cost of re-explaining personal context to every new AI agent or tool.
- **Model Context Protocol (MCP)**: A protocol that allows AI tools to query an external program for resources; the program responds with a list of available resources and their contents on request.
- **MCP Server**: A program implementing the MCP protocol that hosts and serves resources (in this case, personal context files) to AI tools.
- **Markdown-first design**: A design philosophy prioritizing plain Markdown files because they are universally readable by all AI systems and LLMs.
- **Modular context**: Breaking context into separate files by domain so agents can selectively consume only what is relevant to a given task.
- **Living document**: A file or system designed to be continuously updated rather than written once, ideally maintained with agent assistance.
- **Context Hub**: An open CLI project by Andrew Ng that provides coding agents with up-to-date API documentation and allows agents to share feedback on that documentation.
- **Railway**: A cloud deployment platform used in this workflow to host the MCP server remotely.
- **Agent Skills**: A related primitive (referenced from a prior episode) consisting of Markdown-based knowledge folders that update an agent's context.

---

## Summary

The speaker argues that the agentic era has created a structural problem for individuals: as AI agents multiply, the cost of repeatedly re-explaining one's identity, work, and preferences to each new system becomes prohibitive in both time and output quality. The proposed solution is a **Personal Context Portfolio**—ten modular Markdown files covering identity, roles, projects, relationships, tools, communication style, goals, constraints, domain knowledge, and decision history—that together form a machine-readable operating manual for any AI that works with that person. The portfolio is built through an AI-guided interview process (supported by templates on GitHub and a dedicated interview app), kept current as a living document, and made universally portable because it is plain Markdown. For advanced users, the portfolio can be served through a local or remotely deployed MCP server—built step by step with an AI build partner—so that any compliant agent or tool can query it on demand. The overall vision is a future where individuals pay the context setup cost exactly once, maintain it incrementally, and eliminate context-based lock-in to any particular AI platform.
