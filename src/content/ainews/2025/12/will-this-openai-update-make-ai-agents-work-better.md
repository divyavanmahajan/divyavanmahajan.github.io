---
title: Will This OpenAI Update Make AI Agents Work Better?
description: >-
  This episode of the AI Daily Brief (dated December 15, 2025) covers two main
  topics: a headlines segment on recent AI policy and model news, and a deeper
  technical discussion on OpenAI's quiet adoption of Anthropic's Skills
  mechanism and what it m...
pubDate: 2025-12-15T00:00:00.000Z
type: episode
tags:
  - ai-daily-brief-podcast
url: 'https://www.patreon.com/posts/145937361'
draft: false
---
# Study Document: Will This OpenAI Update Make AI Agents Work Better?

## Overview

This episode of the **AI Daily Brief** (dated December 15, 2025) covers two main topics: a headlines segment on recent AI policy and model news, and a deeper technical discussion on OpenAI's quiet adoption of Anthropic's **Skills mechanism** and what it means for the future of AI agents. The host argues that the cross-industry adoption of shared standards—rather than proprietary competition around infrastructure—is a key accelerant for agent maturity heading into 2026. The speaker's name and channel affiliation are not explicitly stated in the transcript beyond "AI Daily Brief."

**Source video:** URL not provided.

---

## Prerequisites

- Basic familiarity with **large language models (LLMs)** and how they are prompted
- Understanding of what **AI agents** are: autonomous systems that use LLMs to complete multi-step tasks
- Awareness of **Anthropic's Claude**, **OpenAI's ChatGPT/Codex**, and **Google Gemini** as competing foundation model products
- Familiarity with **Markdown** as a plain-text formatting standard
- General knowledge of **Model Context Protocol (MCP)**: Anthropic's open standard for connecting LLMs to external tools and data sources, later adopted broadly
- Basic understanding of **CLI (command-line interface)** tools and file system navigation
- Some context on the 2025 AI agent landscape and why enterprise agent adoption has been slower than anticipated

---

## Main Points

### 1. White House Executive Order on AI Preemption

- President Trump signed an executive order attempting to block states from passing their own AI regulations, framing it as necessary to create a single federal rulebook and help the U.S. win the "AI race."
- The order established a DOJ task force to litigate against states with existing AI laws, and directed the Commerce Department to withhold federal broadband funding from states with "onerous AI laws."
- The administration cited three justifications: a fragmented 50-state compliance burden for startups; claims that some state laws embed ideological bias into models; and arguments that some state laws impermissibly regulate interstate commerce.
- Democratic opponents, including California's Scott Wiener and Senator Brian Schatz, immediately pushed back, with Schatz sponsoring a bill to overturn the order, arguing states must be allowed to act in the public interest while Congress works on federal legislation.
- The order also exposed a **"simmering rift"** within the Republican Party, with populist factions warning that AI-driven job automation fears could be a losing issue in midterm elections.
- White House AI advisor David Sacks outlined four carve-outs ("the four C's"): child safety laws, local infrastructure/data center siting, copyright (already federal), and censorship concerns.

### 2. NVIDIA Chip Export Approval and China's Response

- The Trump administration approved NVIDIA's previous-generation **H200 chips** for export to China—the first time unmodified Western chips had been approved in over three years.
- China signaled it would not adopt the chips, apparently prioritizing **semiconductor independence** and domestic chip industry development over short-term performance gains.
- David Sacks acknowledged the strategy—using market access to undercut Huawei—may have been anticipated and neutralized by Beijing.
- Beijing is reportedly preparing a **$70 billion package** to incentivize domestic chipmaking, dwarfing the U.S. CHIPS Act's $39 billion and the EU's $46 billion semiconductor initiative.
- NVIDIA criticized three years of export controls as having "fueled America's foreign competitors and cost U.S. taxpayers billions."

### 3. GPT-5.2 Benchmarking Results

- Independent benchmarking by Artificial Analysis shows **GPT-5.2** tied for first place with **Gemini 3 Pro** on the overall AI Intelligence Index and the coding index, with **Claude 4.5 Opus** slightly behind.
- On the **agentic index**, GPT-5.2 placed second behind Opus 4.5, slightly ahead of Gemini 3 Pro.
- On **GDPVal**—a benchmark measuring agentic capabilities through end-to-end real-world white-collar task completion—GPT-5.2 topped the leaderboard ahead of Opus 4.5 by a meaningful margin.
- The host interprets these results as confirming GPT-5.2 is a meaningful improvement over prior versions but is not decisively ahead of competitors; the premier models of all major labs are now in very close competition.
- The ongoing "Code Red" state at OpenAI is expected to continue into the new year, with the next major release anticipated in January.

### 4. What Anthropic's Skills Mechanism Is

- Introduced by Anthropic in October 2025, **Skills** are organized folders containing a `skill.md` markdown file (plus optional additional files and scripts) that agents can discover and load dynamically to perform specialized tasks.
- The core design goal: allow **general-purpose agents** to become **specialized agents on demand**, without developers having to build a separate custom agent for every use case.

  ```
  skill-folder/
  ├── skill.md          ← name, description, instructions (Layer 1 + Layer 2)
  ├── reference.md      ← advanced detail (Layer 3)
  ├── forms.md          ← task-specific instructions (Layer 3)
  └── extract.py        ← deterministic script (Layer 3)
  ```

- **Progressive disclosure**: An agent loads only the name and description metadata of all installed skills at startup (Layer 1), reads the full `skill.md` body only when a relevant task arises (Layer 2), and navigates to bundled additional files only if needed (Layer 3+). This avoids wasting tokens on irrelevant context.
- Skills can contain **procedural instructions**, **background context**, or **pre-written code** (e.g., a Python script to reliably extract PDF form fields rather than having the model regenerate code each time).

### 5. Key Advantages of the Skills Architecture

- **Accessibility**: Skills are plain Markdown files—anyone who can write instructions for a human can author a skill, no engineering required.
- **Efficiency**: Progressive disclosure minimizes unnecessary token consumption compared to loading full MCP tool descriptions upfront.
- **Composability**: Multiple skills can stack and work together; agents are not restricted to single-purpose configurations.
- **Reliability**: Pre-included deterministic scripts reduce variability compared to code regenerated on each run.
- **Portability**: Institutional knowledge is captured in a persistent, transferable format accessible to new users or agents immediately.

### 6. Skills vs. MCP: Why Skills May Be More Impactful

- **MCP** requires developers to *build* something (a server/integration) for Claude to use a tool; Skills require only writing a Markdown file.
- AI engineering thought leader **Simon Willison** argued in October that Skills are "awesome, maybe a bigger deal than MCP," primarily due to their simplicity and low token overhead. GitHub's MCP alone consumes tens of thousands of tokens; Skills load only what is needed.
- Willison noted that Skills are inherently **model-agnostic**: any LLM capable of reading a file system can use a skills folder without built-in knowledge of the system. He predicted a "Cambrian explosion" of skills exceeding the MCP rush.
- **Swyx (Sean Wang)** confirmed early indications supported this view, noting the AI Engineer talk *"Why We Should Stop Building Agents and Start Building Skills"* was the fastest talk on the AI Engineer channel to reach 100,000 views.

### 7. OpenAI's Adoption of Skills

- In late November/early December 2025, observers (including Simon Willison) noticed Skills quietly appearing in both **ChatGPT** and **OpenAI's Codex CLI**.
- OpenAI engineer **Thibaut** confirmed experimental Skills support, describing it as "an extension of `agents.md` with progressive disclosure"—`agents.md` being OpenAI's own prior Markdown standard for providing coding agents with project-specific instructions.
- The host frames this adoption as consistent with a broader 2025 pattern: even fiercely competitive labs (OpenAI, Google, Microsoft) are willing to adopt each other's standards (e.g., MCP, Skills) rather than competing over infrastructure standards, prioritizing development speed over standard ownership.
- Commentary from AI community member Kishan: "OpenAI seems comfortable to let Anthropic create standards like MCP and Skills, then adopt them later. Skills are wonderfully simple, and I wish all CLI agents adopt the pattern."

---

## Key Concepts

- **AI Skills (Anthropic/OpenAI)**: Organized folders of Markdown instructions, optional scripts, and resources that agents can discover and load dynamically to perform specialized tasks without requiring a custom-built agent per use case.
- **Progressive Disclosure**: An architectural pattern in the Skills system whereby an agent loads only minimal metadata (name/description) at startup and retrieves deeper layers of context only when task relevance is established, conserving token budget.
- **Model Context Protocol (MCP)**: An open standard, originating with Anthropic and now broadly adopted, that provides a uniform way for LLMs and AI applications to connect to external tools and data sources.
- **`skill.md`**: The required Markdown file at the root of every skill folder, containing the skill's name, description, and instructions.
- **`agents.md`**: OpenAI's prior lightweight Markdown standard for supplying AI coding agents with project-specific context; Skills extend this concept.
- **GDPVal**: A benchmark developed by OpenAI that measures agentic capabilities by assigning models real-world white-collar tasks with established economic value, evaluating end-to-end task completion.
- **Codex CLI**: OpenAI's command-line interface coding agent tool, now incorporating Skills support.
- **Progressive Disclosure (MCP contrast)**: Unlike MCP, which can consume large amounts of context upfront, Skills load information in layers, improving token efficiency.
- **Composability**: The property of Skills by which multiple skill folders can be combined and used simultaneously by a single general-purpose agent.
- **Monolithic Agents**: The prior architectural paradigm—separate, hard-coded, single-purpose agents per domain—contrasted unfavorably with the general-agent-plus-skills model.
- **H200 Chips**: NVIDIA's previous-generation high-performance AI accelerator chips, recently approved for export to China.
- **CHIPS Act**: U.S. legislation allocating $39 billion in subsidies to domestic semiconductor manufacturing.

---

## Summary

The central argument of this episode is that OpenAI's quiet adoption of Anthropic's Skills mechanism—a file-system-based architecture allowing general-purpose agents to dynamically load specialized instructions on demand—represents a significant and underappreciated development for the future of AI agents. The host contends that 2025's agent story was less about enterprise proliferation and more about foundational infrastructure work, of which the cross-industry convergence on shared standards like MCP and now Skills is the most important thread. Skills improve on MCP in terms of simplicity and token efficiency: any developer who can write plain Markdown can author a skill, any LLM that can read a file system can use one, and progressive disclosure ensures agents only consume context they actually need. The host views OpenAI's willingness to adopt Anthropic's design—just as it and others adopted MCP—as evidence that the major foundation labs have concluded it is more valuable to move fast on shared infrastructure than to compete over proprietary standards. Combined with advances in model capability (GPT-5.2, Opus 4.5, Gemini 3 Pro reaching near-parity) and the policy turbulence around AI regulation, the episode positions the field as entering 2026 with stronger shared foundations for agent development, even if the original vision of widespread enterprise agent proliferation has yet to fully materialize.
