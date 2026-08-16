---
title: 'How to Get the Most Out of Fable 5 and GPT-5.6 Sol '
description: >-
  This episode of the AI Daily Brief (recorded in advance, dated around
  mid-2026) covers practical strategies for getting the most out of a new
  generation of frontier AI models: Fable 5 (Anthropic's Claude model) and
  GPT-5.6 Sol (OpenAI). The host a...
pubDate: 2026-07-20T00:00:00.000Z
type: episode
tags:
  - ai-daily-brief-podcast
url: 'https://www.patreon.com/posts/164342277'
draft: false
---
# How to Get the Most Out of Fable 5 and GPT-5.6

## Overview

This episode of the **AI Daily Brief** (recorded in advance, dated around mid-2026) covers practical strategies for getting the most out of a new generation of frontier AI models: **Fable 5** (Anthropic's Claude model) and **GPT-5.6 Sol** (OpenAI). The host argues that each new generation of models requires not just updated prompting tips but entirely new interaction patterns, and that the biggest unlock comes from raising one's ambition about what these models can do. No external speaker affiliations are explicitly named beyond contributors cited throughout (Eric Provenchar of the Codex team, Ali Lehman, Christine Zhu of Intuit, Tariq from the Claude Code team, Daniel Meisler, and Matt Schumer).

*Source video URL: Not available (channel not specified)*

---

## Prerequisites

- Familiarity with large language model (LLM) prompting basics (system prompts, context windows, instruction writing)
- Basic understanding of agentic AI workflows (multi-step tasks, tool use)
- Awareness of OpenAI's ChatGPT ecosystem and Anthropic's Claude ecosystem
- Some exposure to concepts like AI coding assistants (Codex), autonomous agents, and scheduled/recurring AI tasks
- Understanding of token costs and compute efficiency considerations

---

## Main Points

### 1. New Models Require New Interaction Patterns

- Every significant jump in model capability invalidates some prior prompting strategies and introduces new ones that must be discovered through trial and error.
- GPT-5.6 Sol and Fable 5 represent a class of models that are notably more **tenacious and thorough** than their predecessors — they will assert more agency and take more initiative without explicit constraints.
- Tips and tricks for older models (e.g., GPT-5.5, Claude 3) can actively degrade performance on newer ones.

---

### 2. Setting Boundaries Is More Important Than Ever

- Codex team member **Eric Provenchar** notes that 5.6 Sol's increased tenacity means users must be more explicit about where a task ends and what actions to avoid.
- Example boundary instructions:
  - *"Keep the approved dates and budget figures unchanged."*
  - *"Use only the supplied sources."*
  - *"Prepare the message as a draft — don't send it."*
  - *"Flag missing information instead of guessing."*
- Boundaries serve two functions: preventing real-world errors (e.g., sending an unapproved message to a client) and controlling unnecessary token consumption.
- The more capable the model, the higher the stakes when boundaries are absent.

---

### 3. Iterate During, Not Just After, Model Runs

- Eric's official prompting guide encourages **mid-task steering**, especially as ChatGPT and Codex converge.
- Two distinct mechanisms are introduced:
  - **Steer**: Send a message during an active run to change direction, add detail, or share new information.
  - **Queue (Q)**: Save a message to be processed after the current run finishes.
- This reduces collaboration latency and becomes increasingly important as tasks grow longer and more complex.

---

### 4. Delete Redundant Instructions from Old Prompts

- **Ali Lehman** summarized key findings from OpenAI's official GPT-5.6 best practices documentation.
- OpenAI's rule: state each instruction **exactly once**.
  - Removing repeated instructions raised benchmark scores by **10–15%** and cut token usage by up to **66%**.
  - Verbose instruction lists written for older models now actively harm GPT-5.6 outputs.
- Separately: brevity instructions added for older models may now over-constrain GPT-5.6, which already defaults to shorter answers than its predecessor. Specify *what to keep* rather than using blanket "keep it brief" instructions.

---

### 5. Match Compute to the Task

- GPT-5.6 introduces multiple model tiers and effort levels:
  - **Model tiers**: Sol (hardest problems), Terra (everyday business work), Luna (cheap/fast tasks)
  - **Effort/thinking levels**: Six levels from none to max
- OpenAI's guidance: start at the effort level used on the previous model generation, then **test one level lower** — newer models typically need less compute for equivalent results.
- Reserve maximum effort settings for genuinely hard problems; reflexively maxing out settings is costly and often suboptimal.

---

### 6. Use Concrete, Behavioral Tone Instructions

- Abstract tone descriptors (e.g., *"friendly," "empathetic"*) are too vague for consistent results.
- Replace them with specific behavioral instructions:
  - *"Name the customer's problem in your first line."*
  - *"Give the fix as numbered steps."*
  - *"Skip the apology paragraph."*
- Concrete instructions produce consistent tone across outputs.

---

### 7. Raise Ambition — Move Beyond Busy Work

- **Christine Zhu** (AI UX PM, Intuit) argues the biggest productivity unlock comes from assigning AI **high-leverage, judgment-intensive work**, not just automating routine tasks.
- She frames work in three tiers (drawing on Stripe's Shreyash Doshi):
  1. **Optics work** (making progress visible): Automate ruthlessly. Example: scheduled tasks that pull context and write status updates into a shared Google Sheet twice a week.
  2. **Execution work** (getting things done): Use Claude as a **co-pilot**. Example: a weekly "context dump" that reads Slack, calendar, and repo activity, then provides efficiency analysis, prioritization recommendations, and task scaffolding.
  3. **Impact work** (high-leverage strategic thinking): Use Claude as a **sparring partner**. Example: testing strategy against business unit priorities, preparing narrative for high-stakes presentations.
- Key insight: Fable 5's calmer, more concise, conversational style makes it easier to maintain a productive train of thought on hard problems than earlier models.
- Prerequisite: **onboarding Claude with rich personal context** (goals, voice, current projects) before asking for impact-level work.

---

### 8. Treat Unknowns as the Core Variable in Agentic Work

- **Tariq** (Claude Code team) introduces a four-category framework for unknowns when working with Fable 5:
  - **Known knowns**: What is explicitly in the prompt.
  - **Known unknowns**: What the user knows they haven't figured out yet.
  - **Unknown knowns**: What is so obvious it was never written down, but would be recognized if seen.
  - **Unknown unknowns**: What hasn't been considered at all.
- Fable 5 is described as the first model where **output quality is bottlenecked by the user's ability to clarify unknowns**, not by model capability.
- Strategies for surfacing unknowns:
  - **Blind spot pass**: Ask Claude to teach you the unknowns you don't know you have (e.g., *"I don't know what color grading is — teach me my unknowns about it so I can prompt better."*)
  - **Brainstorm and prototype**: For tasks with many unknown knowns, ask Claude to produce multiple wildly different directions early so criteria can be verbalized before implementation begins.
  - Disclose where you are in your thought process and your experience level with the problem — treat Claude as a thought partner from the start.

---

### 9. Use Tactical Meta-Prompts When a New Model Drops

- **Daniel Meisler** recommends a set of reusable prompts to run whenever a significant new model is released, organized into two categories:

  **Harness optimization** — auditing and updating the context/information surrounding the model:
  - Example *self-model prompt*: Review all files describing the user's identity, goals, voice, and preferences; identify where the model is optimizing for a stale or aspirational version of the user; propose specific edits.

  **Big-picture life and work optimization** — large-scope prompts to realign priorities:
  - Example *Ikigai prompt*: Analyze all projects, writing, and online activity, cross-reference with trends in AI and society, and recommend what work best satisfies the Japanese concept of *ikigai* (fulfilling, lucrative, personally meaningful).

- These prompts serve both as context hygiene and as a way to benchmark how a new model engages with complex, open-ended reasoning.

---

### 10. Use Loops to Maintain Quality Standards

- **Matt Schumer** recommends defining a concrete, verifiable "bar for done" rather than using quality adjectives like *"high quality"*.
  - Example bar: *"A stranger cannot tell our render from a real photograph."*
  - If you can't define the bar, give that problem to Fable too.
- Once a bar is set, run Fable in a **loop**: it builds, checks itself against the bar, identifies the biggest gap, closes it, and repeats.
- The loop ends only when the user says so or when Fable genuinely cannot find anything left to fix.
- The Claude Devs team identifies four loop types:

| Loop Type | Trigger | Stop Condition | Best For |
|---|---|---|---|
| **Turn-based** | User prompt | Task complete / needs input | Short, discrete tasks |
| **Goal-based** | Manual prompt | Goal achieved or max turns reached | Tasks with verifiable exit criteria |
| **Time-based** | Scheduled interval | User cancels or work completes | Recurring tasks |
| **Proactive** | Event or schedule | Goal met; routine runs until disabled | Fully autonomous recurring workflows |

---

## Key Concepts

- **Tenacity**: The tendency of newer models (esp. GPT-5.6 Sol) to take more initiative and pursue tasks more thoroughly, requiring explicit boundaries to prevent unintended actions.
- **Boundaries**: Explicit constraints in a prompt that limit where a model applies its attention or what actions it takes.
- **Steer vs. Queue**: Two modes of mid-run interaction in Codex/ChatGPT — steering redirects an active run, queuing saves input for the next run.
- **Harness**: The surrounding infrastructure of context, files, and instructions (e.g., `agents.md`) that shapes how a model behaves for a specific user.
- **Unknown knowns**: Tacit knowledge a user holds but would not think to write down — a key source of misalignment in agentic tasks.
- **Context hygiene**: The practice of regularly auditing and updating the personal context provided to AI systems to ensure it accurately reflects current goals and identity.
- **Loop (agentic)**: A repeated cycle in which the model produces output, evaluates it against a defined criterion, and iterates until the criterion is met or a stopping condition is reached.
- **Goal-based loop**: A loop architecture where an evaluator model checks whether a success condition has been met before allowing the agent to stop.
- **Bar for done**: A concrete, verifiable completion standard defined before a loop begins, preventing the model from self-declaring success prematurely.
- **Ikigai**: A Japanese concept referring to the intersection of what you love, what you are good at, what the world needs, and what you can be paid for — used here as a framing for life/work prioritization prompts.
- **Optics / Execution / Impact work**: A three-tier framework (from Shreyash Doshi) categorizing work by leverage level, used to guide which AI interaction mode is most appropriate.
- **Blind spot pass**: A prompt technique in which the user asks the model to identify the unknowns the user doesn't know they have about a given topic.
- **Effort levels**: Configurable compute intensity settings in GPT-5.6, ranging from none to max, allowing users to trade off speed and cost against reasoning depth.

---

## Summary

The central message of this episode is that frontier model upgrades — specifically Fable 5 and GPT-5.6 — demand more than incremental prompt adjustments; they require users and organizations to fundamentally rethink their interaction patterns and raise their ambitions about what AI can do. Practically, this means setting tighter behavioral boundaries to manage increased model tenacity, eliminating redundant instructions that degrade newer models, matching compute effort to actual task difficulty, and replacing abstract quality guidance with concrete behavioral specifications. More significantly, the episode argues that the biggest productivity gains come not from automating low-stakes busywork but from assigning AI to high-leverage judgment tasks — strategic analysis, sparring on hard decisions, and surfacing unknown unknowns before implementation. Frameworks like the four-category unknowns map, three-tier work model, and loop-based execution patterns represent new interaction primitives suited to this generation of models. The overarching recommendation is to approach every new model release with maximum ambition, stress-testing its limits through the hardest possible tasks, and using that process to discover both where the new model falls short and what new categories of work it genuinely unlocks.
