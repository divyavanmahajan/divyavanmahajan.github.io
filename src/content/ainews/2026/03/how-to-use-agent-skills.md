---
title: 'How to Use Agent Skills '
description: >-
  This episode of the AI Daily Brief (recorded March 18, 2026) covers the
  concept of Agent Skills — a structured format for giving AI agents reusable,
  modular capabilities — with a focus on a post by Tariq from Anthropic's Claude
  Code team titled "L...
pubDate: 2026-03-18T00:00:00.000Z
type: episode
tags:
  - ai-daily-brief-podcast
draft: false
---
# How to Use Agent Skills: Lessons from the Claude Code Team

## Overview

This episode of the *AI Daily Brief* (recorded March 18, 2026) covers the concept of **Agent Skills** — a structured format for giving AI agents reusable, modular capabilities — with a focus on a post by Tariq from Anthropic's Claude Code team titled *"Lessons from Building Claude Code: How We Use Skills."* The host uses this post as a lens to explain what skills are, how they are organized taxonomically, and how different categories of users (from enterprise agent builders to mainstream consumers) can apply them. The episode also covers headlines including Claude Co-work's new Dispatch feature, OpenClaw's regulatory friction in China, Nvidia's China export restart, and Amazon AWS's AI revenue projections.

*Source video URL: not provided.*

---

## Prerequisites

- Basic familiarity with AI coding agents (e.g., Claude Code, Codex, GitHub Copilot)
- Understanding of context windows and why prompt length affects model performance
- General awareness of agentic AI workflows (multi-step, tool-using AI systems)
- Familiarity with markdown file formats
- Some exposure to software development concepts: CI/CD, code review, evals, benchmarking

---

## Main Points

### 1. The Problem Skills Were Designed to Solve

- As AI coding agents became more capable throughout 2025, system prompts expanded rapidly — more capabilities meant more instructions, examples, and edge cases crammed into a single context window.
- Overloaded context windows caused agents to become slower, more expensive, and less reliable.
- The core insight: **agents do not need all knowledge at all times**; they need to load the right knowledge at the right moment.
- On October 16, 2025, Anthropic officially announced Agent Skills, framing the challenge as: "Claude is powerful, but real work requires procedural knowledge and organizational context."

---

### 2. What a Skill Actually Is

- A skill is a **directory (folder)**, not just a single file, anchored by a `skill.md` file containing required metadata (name, short description).
- Skills operate on a **progressive disclosure** model with three layers of detail:
  1. **Short description** (~100 tokens): loaded passively so the agent knows the skill exists and can invoke it when relevant.
  2. **Full `skill.md` body**: loaded when the agent determines the skill is useful for the current task; recommended to remain small.
  3. **Additional bundled resources**: linked scripts, data files, additional markdown files, and assets relevant only in specific sub-scenarios.
- Analogy used: *"A well-organized manual that starts with a table of contents, then specific chapters, and finally a detailed appendix."*
- Common misconception: skills are just markdown files. The folder structure — including scripts and data — is the most powerful part.

```
my-skill/
├── skill.md          ← metadata + body (name, description, instructions)
├── helpers/
│   └── fetch_data.py ← scripts the agent can discover and run
├── templates/
│   └── report.md     ← reference assets
└── examples/
    └── sample_output.md
```

---

### 3. Ecosystem Adoption and the Skills Marketplace

- Shortly after Anthropic's launch, OpenAI added skill support to ChatGPT and GitHub Copilot; Cursor and other ecosystems adopted the standard.
- The launch of OpenClaw accelerated mass adoption, as many agents shared common skill needs (e.g., working with PDFs, transcribing audio, interacting with specific tools).
- A site called **Claw Hub** launched and quickly accumulated approximately 28,000 skills.
- Skills are portable across Claude Code, Codex, Cursor, and other tools — users are not locked into any one platform's prompting format.

---

### 4. Anthropic's Nine-Category Taxonomy of Skills

Anthropic observed that most skills in the wild fall into one of nine categories:

| Category | Description |
|---|---|
| Library & API Reference | Documentation and usage patterns for specific libraries or APIs |
| Product Verification | Testing and verifying that code or features work correctly |
| Data & Analysis | Connecting to data sources, fetching with credentials, common query workflows |
| Business Automation | Automating repetitive workflows into single commands |
| Scaffolding & Templates | Boilerplate and project structure generation |
| Code Quality & Review | Enforcing style, running adversarial review sub-agents |
| CI/CD & Deployment | Deployment pipelines and automation |
| Incident Runbooks | Step-by-step guides for handling production incidents |
| Infrastructure Ops | Managing cloud or on-prem infrastructure resources |

- **Verification skills** are highlighted as among the highest ROI: "It can be worth having an engineer spend a week just making your verification skills excellent." Techniques include having Claude record a video of its output or enforcing programmatic assertions at each step.
- **Code quality and review skills** are noted as increasingly important as code volume from agents outpaces human review capacity.

---

### 5. Two Structural Types of Skills

Anthropic's updated Skill Creator tool introduced a two-category framework:

- **Capability uplift skills**: Help Claude do something the base model cannot do or cannot do consistently (e.g., a specific document format). May become less necessary as base models improve.
- **Encoded preference skills**: Document workflows where Claude can already do each individual piece, but the skill sequences them according to a team's specific processes. More durable over time, but only as valuable as their fidelity to the actual workflow.

---

### 6. The Skill Creator Tool and Updates

- Anthropic updated their **Skill Creator** tool to address three problems practitioners encountered:
  1. **No way to measure skill performance** → Skill Creator now runs evals against multiple prompts and returns a score.
  2. **Skills break silently when models update** → A/B testing now compares skill performance against raw Claude.
  3. **Claude doesn't trigger the skill** because the description is too vague or too specific → Skill Creator automatically rewrites descriptions to improve triggering. Anthropic tested this on their own skills and saw improved triggering in 5 out of 6 cases.

---

### 7. Top Tips for Writing Better Skills (from Tariq's Post)

- **Don't state the obvious**: Focus on information that pushes Claude out of its default behavior. Example: a front-end design skill iteratively built to avoid Claude's default patterns (e.g., Inter font, purple gradients).
- **Build a gotchas section**: Described as the highest-signal content in any skill. Capture common failure points; update the section over time so the skill becomes a living document.
- **Think of the file system as context engineering**: Don't limit yourself to a single markdown file — use the full folder structure to organize layered context.
- **Avoid railroading Claude**: Provide necessary information but preserve Claude's flexibility to adapt to the situation rather than over-constraining its behavior.

---

### 8. How Skills Apply Across Different User Tiers

- **Advanced agent builders**: Skills function as a modular architecture for agent capabilities in complex multi-agent orchestration systems.
- **Individual power users**: Skills are "reusable prompts with superpowers." The key difference from a saved prompt: a skill can include actual code, templates, reference data, and examples. A skill becomes smarter over time as gotchas are added after each failure.
- **Mainstream/consumer users**: Tools like Notion have implemented simplified skill-like features (Notion Custom Skills). Users can turn any Notion page into a skill with a menu click — no knowledge of `skill.md` architecture required.
- The underlying mental model shift is consistent across all tiers: from **ad hoc prompting** → **reusable, named, reliable capabilities**.

---

## Key Concepts

- **Agent Skills**: An open folder-based format for packaging instructions, scripts, and resources so AI agents can dynamically load domain-specific knowledge when needed.
- **Progressive Disclosure**: A design principle in skills where agents receive information in layers — description first, full body second, bundled resources third — to avoid overloading the context window.
- **`skill.md`**: The required anchor file in every skill directory containing metadata (name, description) and the body of instructions.
- **Skill Creator**: Anthropic's tool for authoring, evaluating, and benchmarking skills, including automated description rewriting and A/B testing against base models.
- **Capability Uplift Skill**: A skill that enables Claude to do something outside its baseline capability.
- **Encoded Preference Skill**: A skill that sequences tasks Claude could already do individually, according to a specific team's workflow.
- **Gotchas Section**: A section within a skill documenting known failure modes and edge cases, updated iteratively as new errors are encountered.
- **Claw Hub**: A community marketplace hosting approximately 28,000 community-contributed skills.
- **Claude Co-work Dispatch**: A new feature allowing users to initiate Co-work sessions on their desktop and monitor/approve progress from a mobile device.
- **OpenClaw**: An open-source AI agent product referenced throughout the episode as driving mass adoption of agent skills and raising regulatory concerns in China.

---

## Summary

The central message of this episode is that **Agent Skills represent a structural shift in how AI agents are equipped with knowledge** — moving from bloated, monolithic system prompts toward modular, dynamically loaded, folder-based capability packages. Drawing on Tariq's post from Anthropic's Claude Code team, the host explains that skills solve a concrete performance problem (context window overload) through progressive disclosure, and that their value extends well beyond technical users: the same underlying design pattern — teach the AI to do something your way, name it, and invoke it reliably — is already manifesting in consumer tools like Notion. Anthropic's taxonomy of nine skill categories and their updated Skill Creator tool provide practical scaffolding for both novice skill authors and experienced agent builders, with verification skills and gotchas sections identified as particularly high-ROI investments. The episode's broader argument is that AI is transitioning from one-off conversational interactions to a persistent library of repeatable, reliable capabilities, and that skills — at whatever level of technical complexity a user engages with them — are the primary framework enabling that transition.
