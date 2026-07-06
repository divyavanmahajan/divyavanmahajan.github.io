---
title: Does AI Secretly Slow Developers Down?
description: >-
  This episode of the AI Daily Brief examines a widely circulated study from
  METR (a non-profit AI research firm) that found AI coding tools made
  developers 19% slower, despite those developers expecting a 20–24% speedup.
  The host provides a detaile...
pubDate: 2025-07-16T00:00:00.000Z
type: episode
tags:
  - ai-daily-brief-podcast
url: 'https://www.patreon.com/posts/134225018'
draft: false
---
# Does AI Secretly Slow Developers Down?

## Overview

This episode of the *AI Daily Brief* examines a widely circulated study from METR (a non-profit AI research firm) that found AI coding tools made developers **19% slower**, despite those developers expecting a 20–24% speedup. The host provides a detailed critique of the study's methodology, contextualises its findings, and argues that the results are being misinterpreted by mainstream media. No individual speaker name is provided beyond the show's host voice.

**Source video:** Not available (internal reference: `2025-07-16-does-ai-secretly-slow-developers-down`)

---

## Prerequisites

- Basic familiarity with AI-assisted coding tools (e.g., Cursor, GitHub Copilot, Claude Code)
- Understanding of what agentic IDEs are and how they differ from simply querying a chatbot like ChatGPT
- General awareness of productivity research methodology (controlled trials, sample sizes, confounding variables)
- Familiarity with large language models (LLMs) referenced: Claude 3.5/3.7 Sonnet, Claude Opus 4, GPT-o3, Gemini 2.5 Pro

---

## Main Points

### The METR Study: What It Found

- 16 experienced open-source developers were tested on 246 real tasks in their own repositories, each task randomly assigned to allow or disallow AI usage.
- Developers predicted AI would reduce completion time by ~24%; after completion, they believed it had helped by ~20%.
- Actual measured result: AI-assisted developers were **19% slower**.
- The slowdown was concentrated in moderately complex tasks lasting **1–6 hours**; tasks under 1 hour and over 7–8 hours showed little difference.
- Screen recording analysis showed that time spent on active coding, reading/research, testing/debugging, and Git/environment all *decreased* with AI, while **idle/overhead time increased** due to prompting, waiting for outputs, and reviewing generated code.

### The Five Causes Identified by Researchers

- **Over-optimism** about AI usefulness among participants.
- **High developer familiarity** with the codebase, reducing the marginal value of AI suggestions.
- **Large, mature repositories** that exceeded AI context window limits.
- **Low AI reliability**: developers only accepted 44% of AI-generated code and spent 9% of their time cleaning up outputs.
- **Context recognition failures**: AI did not properly interpret the repository structure.

### The Researchers' Own Caveats

- The paper explicitly states: *"The slowdown we observe does not imply that current AI tools do not often improve developers' productivity."*
- The authors acknowledge that high developer familiarity with repositories and large/mature repository size both contributed to the slowdown—factors that do not generalise to all software development settings.

### Critique 1 — The Models Were Already Outdated

- The study was conducted in early 2025 using models such as Claude 3.5 and 3.7 Sonnet.
- Study participants noted that newer models (Claude Opus 4, Gemini 2.5 Pro, o3) are substantially more capable and require less guidance.
- One participant (Ruben Bloom, Less Wrong) stated it is "much harder to believe" he would be slowed down using the models available at the time of the critique.
- The study predates widely adopted tools such as Claude Code and the most capable reasoning models.

### Critique 2 — Participant AI Experience Was Effectively Minimal

- 93% of participants had prior ChatGPT experience, but only 44% had used Cursor at all.
- **Only one of the 16 developers had more than one week of Cursor experience.**
- The study broke "less than one week" into sub-categories (under 1 hour, 1–10 hours, 10–30 hours, 30–50 hours) to create the appearance of a meaningful range.
- That single developer with >50 hours of Cursor experience was **20% faster**, not slower—a result buried in an appendix.
- Emmett Shear (Twitch co-founder, former interim OpenAI CEO) argued this means the study effectively tested developers learning a new tool for the first time and mislabelled it as testing "moderate AI experience."
- The researchers responded that 7 of 16 had hundreds of hours of LLM use and defended the "moderate" label; the host and Shear disagree, arguing that general LLM use does not transfer to agentic IDE proficiency.

### Critique 3 — Mismatched Use Case

- AI coding tools are known to provide the least benefit to expert developers working in large, familiar codebases—precisely the scenario tested.
- AI podcaster Nathan LeBenz noted this is a "known" limitation, not a new finding.
- The host argues this makes it very difficult to draw broad conclusions about software developer productivity from these 16 participants.

### The Distraction / New Workflow Problem

- One study participant (Quentin Anthony) observed that idle time during LLM generation is easily consumed by social media, creating a compounding productivity loss.
- A second participant (Ruben Bloom) confirmed the same pattern and noted that Cursor's "bell notification" feature helped reclaim time lost to distraction.
- The host frames this as evidence that **AI-assisted coding is a fundamentally different workflow**, not simply the same workflow executed faster.
- New work categories emerge (e.g., reviewing generated code, debugging AI output) while traditional categories shrink (writing code, reading documentation).

### Media Amplification and Broader Implications

- Headlines across CNBC, TechJuice, and other outlets framed the study as evidence that AI tools "don't work" or are slowing veteran developers.
- The host argues this framing is misleading given all the methodological caveats and the specificity of the test population.
- The concern is that market-moving narratives are being built on a study with narrow applicability.

### What Organisations Should Take Away

- **Wrong takeaway**: AI was overhyped; ignore the tools.
- **Right takeaway**: Productivity gains are real but not automatic. They require a learning curve, workflow reorganisation, and meaningful hours of practice.
- METR is reportedly considering expanding the study; the host encourages follow-up research with more experienced agentic IDE users working across varied codebase types.

---

## Key Concepts

- **METR**: Non-profit AI research organisation that conducted the study; also known for developing the methodology showing AI agent capabilities double approximately every seven months.
- **Agentic IDE**: An integrated development environment (e.g., Cursor) that uses AI agents to autonomously assist with coding tasks, distinct from simply querying a chatbot.
- **Context window limit**: The maximum amount of text/code an LLM can process in a single interaction; large repositories can exceed this, degrading AI performance.
- **AquaHire**: An acquisition structure in which a company acquires primarily the talent (founders and key engineers) rather than the full corporate entity.
- **Windsurf**: An AI coding IDE company whose leadership was acquired by Google in an aquahire; the remaining company and staff were subsequently acquired by Cognition.
- **Cognition / Devin**: AI startup that created Devin, described as a leading autonomous software agent; acquired the remaining Windsurf entity.
- **Cursor**: A popular agentic IDE built on top of LLMs, used as the primary AI coding tool referenced in the study.
- **Learning curve (tool proficiency)**: The period of reduced productivity experienced while a user develops skill with a new, complex tool before gains are realised.

---

## Summary

The central argument of this episode is that a METR study showing AI coding tools made developers 19% slower is being significantly over-interpreted. The host contends that the study tested a narrow and atypical population—experienced software developers with minimal hands-on experience using agentic IDEs specifically—working in large, familiar codebases that are a known weak point for AI assistance, using models that have since been superseded. The one participant with substantial Cursor experience was faster, not slower, a result the study authors acknowledged but downplayed. Beyond the methodological critique, the host argues that AI-assisted development is a genuinely different kind of work requiring new skills, habits, and workflow structures, and that productivity gains are real but non-trivial to unlock. The appropriate organisational response is not to dismiss AI coding tools but to invest seriously in helping developers climb the learning curve—just as competence with any powerful professional software requires sustained practice before benefits are realised.
