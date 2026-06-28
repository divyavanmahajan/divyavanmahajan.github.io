---
title: Mcp Agents And What Ai Engineers Are Thinking About Right Now Feat Sw
description: >-
  This episode of the AI Daily Brief features a conversation between host
  Nathaniel Whittemore and Swyx (Shawn Wang), co-creator of the Latent Space
  podcast and newsletter, and organiser of the AI Engineer Summit and AI
  Engineer World's Fair. The di...
pubDate: 2025-04-17T00:00:00.000Z
type: episode
tags:
  - ai-daily-brief-podcast
draft: false
---
# Study Document: MCP, Agents, and What AI Engineers Are Thinking About Right Now

## Overview

This episode of the *AI Daily Brief* features a conversation between host Nathaniel Whittemore and **Swyx** (Shawn Wang), co-creator of the *Latent Space* podcast and newsletter, and organiser of the **AI Engineer Summit** and **AI Engineer World's Fair**. The discussion covers the current state of AI engineering discourse—specifically the rise of agent engineering, the Model Context Protocol (MCP), vibe coding, and how non-technical leaders should orient themselves to these developments. The talk is framed around the planning process for two major AI engineering conferences: the New York summit (early 2025) and the upcoming San Francisco World's Fair (June 2025).

Source: Transcript from *AI Daily Brief*, published 2025-04-17. No YouTube URL provided.

---

## Prerequisites

- Basic familiarity with large language models (LLMs) and how they are accessed via APIs
- General understanding of software development concepts (APIs, protocols, SDKs, GitHub)
- Awareness of major AI labs: Anthropic, OpenAI, Google DeepMind, Meta
- Familiarity with AI coding tools (Cursor, Copilot, Windsurf) is helpful but not required
- Understanding of what a software protocol is (e.g., REST, GraphQL) is useful for the MCP discussion

---

## Main Points

### 1. How AI Engineering Conferences Differ from Traditional Research Conferences

- Research conferences like NeurIPS, ICML, and ICLR require paper submissions six months in advance, making them structurally slow relative to the pace of AI development.
- Business-focused AI conferences tend toward panel discussions and fireside chats with little practical takeaway.
- The AI Engineer Summit prioritises hands-on practitioners, demands significant speaker preparation, and aims for talks that engineers can immediately apply to their work.
- The core value proposition is staying close to working engineers and reacting faster than the research conference cycle allows.

---

### 2. Why 2025 Is the Year of Agents—and Why the Timing Matters

- "Agent" was considered a negative signal for much of 2024 due to overpromising startups; the term was actively discouraged as a label.
- The shift came with OpenAI's o1 reasoning model, followed by products like Operator and Deep Research, and continued with Manus.
- At last year's World's Fair, only one of nine tracks covered agents; the 2025 New York summit went all-in on agents as its central theme.
- Key inflection factors identified by Swyx:
  - Progress on benchmarks like GAIA approaching human-level baselines
  - Multiple frontier model APIs now available (Grok 3, Gemini 2.5 Pro), enabling model chaining
  - Declining cost curves (Moore's Law equivalent for inference)
  - Shift in business model from cost-plus token pricing toward **outcome-based pricing**—paying for what an agent accomplishes rather than tokens consumed

---

### 3. Agents in Production: What Large Enterprises Have Figured Out

- The New York summit subtitle was "Agents at Work," emphasising real-world deployment over demos.
- Featured speakers from Jane Street, Bloomberg, BlackRock (talk not publicly released), and Ramp.
- The implicit question the track answered: what have large, well-resourced organisations actually learned about deploying agents that smaller teams haven't?
- Windsurf's success as a second-mover after Cursor was highlighted as evidence that good agent design and meaningful differentiation can still win market share even in a crowded category.

---

### 4. The Rise and Momentum of MCP (Model Context Protocol)

- MCP was launched by Anthropic in **November 2024**; initial interest was high (top of Hacker News) but follow-through was slow, consistent with historical patterns of big-company protocol launches not gaining traction.
- Contrast with Meta's Llama Stack: Anthropic deliberately released a **minimal, opinionated-but-open standard** that other frameworks could build on top of, rather than a full opinionated stack.
- Adoption accelerated through IDE integrations: Zed, Windsurf, and eventually Cursor and Copilot.
- At the New York summit, Anthropic ran a two-hour workshop with new alpha content and announced the **official MCP registry**—providing the follow-through signal the community needed.
- GitHub stars crossed 15,000 rapidly and have since surpassed the incumbent standard (OpenAPI at ~30,000 stars) months ahead of Swyx's July projection.
- OpenAI and Google both subsequently announced MCP support, effectively ending any potential "protocol war."

**Key framing:** *"Protocols are only as strong as the people who are already using them."* The bootstrap problem was solved quickly enough that network effects took over.

**Honest caveat:** MCP does not create more agents or change the fundamental trajectory of agentic AI. It improves the **quality and breadth of integrations**—solving the M×N combinatorial problem by adding a standard interface layer (reducing it to M+N). Known challenges inherited from analogous protocols (e.g., GraphQL): authorization, remote MCP connections, service discovery.

---

### 5. Defining Agent Engineering: The IMPACT Framework

Swyx argues that definitions of agents from OpenAI (model + instructions + tools + runtime) and Lilian Weng (LLMs + memory + planning + tool use) are both incomplete. His synthesised framework uses the acronym **IMPACT**:

| Letter | Element | Description |
|--------|---------|-------------|
| **I** | Intent | Goals, prompts, and evals that encode what the agent should do |
| **M** | Memory | Short- and long-term state management |
| **P** | Planning | Decomposition of tasks and sequencing |
| **A** | Authority | Trust delegation—the agent acts on behalf of a human; without trust, adoption fails |
| **C** | Control Flow | The runtime loop (if/else logic driven by the LLM) |
| **T** | Tool Use | External integrations; the one element all definitions agree on |

The "A" for Authority is highlighted as the most underappreciated element by engineers but the most critical for enterprise and consumer adoption.
Impact framework - Agent Engineering
---

### 6. Planning the AI Engineer World's Fair (June 2025, San Francisco)

Tracks announced or confirmed, driven by what performed best at the New York event:

- **Full MCP track** hosted by the Anthropic MCP team, inviting major contributors—effectively an embedded mini-conference
- **Local Llama track** for the open-models community (identified as long overdue for dedicated conference space)
- **Reasoning and RL track** (inspired by Will Brown's Morgan Stanley talk)
- **Security track** (acknowledged as undramatic but necessary, especially for enterprise)
- **Vibe coding track** (exploratory: live demo of good practice, a critical/skeptical talk, and a platform builder perspective)
- **AI architects / leadership day** focused on strategy definition and hiring—the two areas where leadership must stay closely aligned with engineering

---

### 7. Vibe Coding: Promise, Limits, and Misuse of the Term

- The term was coined by Andrej Karpathy and refers to an expert developer leveraging intuition to review AI-generated code at a high level without reading every line—then committing and moving on.
- It has been widely reinterpreted to mean non-experts generating code with no review, which creates compounding technical debt and situations users cannot debug.
- Tools like Bolt and Lovable demonstrate genuine productivity gains and are enabling designers and PMs to build prototypes without needing to queue work with engineering teams.
- Risk: users get into trouble and lack the expertise to recover; significant wasted spend is a likely outcome at scale.
- Swyx's framing: the broader value is **autonomy to create software**; the name "vibe coding" may be imprecise but is the current shared vocabulary.

---

### 8. Guidance for Enterprise Leaders

- The legitimate case for AI coding tools in large organisations is real; resistance often stems from comfort with the status quo rather than substantive technical objection.
- Genuine challenges: these tools are not yet optimised for large legacy codebases with many contributors and high staff turnover.
- Swyx's prescription for general leaders: focus on the two areas only leadership can own—**strategy definition** and **hiring**. Compliance, security, and legal can be dictated downward; strategy and talent require alignment with engineering.
- The AI engineer job description is still evolving (~90% software engineering, ~10% AI-specific skills currently), but the AI-specific disciplines (memory, planning, control flow, authority, tool use) will increasingly differentiate into a distinct role.

---

## Key Concepts

- **AI Engineer**: A software engineer who builds applications on top of AI models, as distinct from ML researchers who build the models themselves.
- **Agent / Agentic AI**: An AI application that autonomously takes multi-step actions using tools, memory, and planning to accomplish a goal, rather than responding to a single prompt.
- **MCP (Model Context Protocol)**: An open standard released by Anthropic enabling tools and data sources to connect to AI models through a common interface, solving the M×N integration problem.
- **IMPACT Framework**: Swyx's six-element definition of agent engineering: Intent, Memory, Planning, Authority, Control Flow, Tool Use.
- **Outcome-based pricing**: A commercial model in which AI services are priced on the value of tasks completed rather than tokens consumed.
- **M×N to M+N problem**: The combinatorial scaling problem in integrations—without a standard protocol, every tool must be individually integrated with every model; a shared interface reduces this to additive complexity.
- **GAIA Benchmark**: An agent evaluation benchmark developed by Meta used to measure progress toward human-level performance on agentic tasks.
- **Vibe coding**: Originally, an expert developer trusting high-level intuition to accept AI-generated code without line-by-line review; commonly misused to mean code generation without any technical oversight.
- **Reasoning models**: LLMs (e.g., OpenAI o1) that perform explicit chain-of-thought reasoning, improving performance on complex, multi-step tasks relevant to agent workflows.
- **Local Llama community**: The open-source community centred on running and fine-tuning open-weight models (particularly Meta's Llama family) locally.
- **OpenAPI**: The incumbent REST API description standard; used here as a benchmark for MCP adoption by GitHub star count.

---

## Summary

Swyx argues that 2025 represents a genuine inflection point for agent engineering—not because of a single breakthrough, but because of the convergence of near-human benchmark performance, multi-lab model availability, declining inference costs, and a shift toward outcome-based commercial models. The Model Context Protocol has emerged as the leading standard for tool-to-model integration, having solved its bootstrap problem faster than comparable protocols, with adoption accelerating through IDE integrations and OpenAI and Google's endorsement. Rather than creating new agents, MCP improves the quality and breadth of integrations—a boring but compounding accelerant. For practitioners, Swyx proposes the IMPACT framework as a more complete definition of what agent engineering actually requires, with Authority (trust) identified as the most neglected element. For enterprise leaders, the actionable guidance is to focus on the two things only they can own—strategy and hiring—while ensuring their organisations are actively experimenting with AI tools rather than waiting for readiness. The overall message is that the engineering community is past the definitional debates of 2024 and is now focused on production deployment, standards, and the emerging professional discipline of building reliable agentic systems.
