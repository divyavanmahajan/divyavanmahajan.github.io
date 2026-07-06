---
title: 11 GPT-5 Prompting Techniques
description: >-
  This episode of the AI Daily Brief podcast/video covers 11 practical prompting
  techniques for getting better results from GPT-5, OpenAI's newest model. The
  central thesis is that GPT-5 represents a partial regression toward deliberate
  prompt engin...
pubDate: 2025-08-13T00:00:00.000Z
type: episode
tags:
  - ai-daily-brief-podcast
url: 'https://www.patreon.com/posts/136434845'
draft: false
---
## Overview

This episode of the *AI Daily Brief* podcast/video covers 11 practical prompting techniques for getting better results from GPT-5, OpenAI's newest model. The central thesis is that GPT-5 represents a partial regression toward deliberate prompt engineering: the model is exceptionally steerable and instruction-following, but that strength means poorly structured prompts produce worse results than they would on older models. The speaker synthesises advice from OpenAI's official prompting guide, early-access users, and applied AI practitioners. No single speaker name is given beyond the host of the AI Daily Brief.

**Source video:** No URL was provided for this recording.

---

## Prerequisites

- Basic familiarity with large language model (LLM) chat interfaces (e.g., ChatGPT)
- Understanding of what a "prompt" is and the concept of prompt engineering
- Awareness of OpenAI's model lineup (GPT-4o, o3, GPT-5) and the difference between standard and reasoning/thinking modes
- Familiarity with JSON and Markdown as data/text formatting conventions (helpful but not required)
- Some exposure to agentic AI workflows and API concepts is useful for the final section

---

## Main Points

### Context: GPT-5 Requires More Deliberate Prompting

- GPT-5 launched to a divisive reception; many users struggled to replicate workflows built on earlier models
- OpenAI released an official prompting guide alongside the model, signalling that intentional prompting matters more than before
- The model's core strength — extreme steerability and precise instruction-following — is also its main sensitivity: vague or conflicting prompts cause meaningfully worse outputs than on previous models
- Practitioners describe GPT-5 as more susceptible to instruction style than any prior frontier model

### Technique 1 — Tell the Model to Think Harder

- Appending phrases like *"think harder"* or *"think deeper"* to a prompt triggers higher-quality reasoning
- OpenAI's UI now offers explicit thinking-level selectors (Auto, Fast, Thinking Mini, Thinking, Pro), but manual prompting still adds value
- Example "UltraThink" prompt (Alex Duffy / Every): *"First, think deeply for five minutes. Ultra think at a minimum. If after five minutes you still don't have the optimal response, keep thinking until you do."*
- Extended versions (Matt Schumer / HyperWrite) instruct the model to outline subtasks, challenge its own assumptions, and triple-verify conclusions before answering

### Technique 2 — Use Explicit Planning Phases

- Ask GPT-5 to decompose a request before executing it, similar to legacy chain-of-thought prompting
- Example planning instruction (Pietro Schirano / Magic Path, who had several weeks of early access):
  1. Decompose the request into core components
  2. Identify ambiguities needing clarification
  3. Create a structured approach per component
  4. Validate understanding before proceeding
- A mental to-do list structure (primary objective → subtasks → validation step → final review) achieves the same effect

### Technique 3 — Be Extremely Explicit About Desired Output

- GPT-5 does not infer intent or "read between the lines" the way earlier reasoning models (e.g., o3) did
- Explicitly state tone, style, verbosity, and format in every prompt
- OpenAI confirms: *"GPT-5 follows prompt instructions with surgical precision"* — but poorly constructed prompts are correspondingly more damaging
- Vague instructions that earlier models could compensate for now produce noticeably degraded results

### Technique 4 — Tighten Prompt Structure

- Well-structured prompts are the single most broadly impactful change a user can make
- **JSON prompting** (a recent trend on social media) is popular but misunderstood: the JSON format itself confers no advantage; the benefit comes from the fine-grained detail and structure it forces the writer to provide
  - OpenAI applied AI researcher Nolan McCallum: Markdown or XML is actually more token-efficient than JSON for prompts
- Pietro Schirano's "spec format" approach captures the same benefit without JSON syntax:
  - What is to be accomplished
  - Conditions/triggers for the behaviour
  - Output format and style
  - Step-by-step sequence
  - What to avoid / prohibited actions
  - How to handle unclear inputs

### Technique 5 — Ask the Model to Summarise Its Thought Process

- Instructing GPT-5 to provide a brief explanation (e.g., a bullet-point list) of its reasoning *before* or at the start of its answer improves performance on complex tasks
- OpenAI explicitly recommends this in their prompting guide as a performance-improving technique
- This is a simple, single-sentence addition to any complex prompt

### Technique 6 — Avoid Conflicting Instructions

- Because GPT-5 reasons through contradictions rather than arbitrarily picking one instruction, unresolved conflicts consume reasoning tokens and degrade output quality
- OpenAI's example: a healthcare assistant prompt that simultaneously requires *never scheduling without patient consent* and *auto-assigning same-day slots without contacting the patient*
- Resolution strategy: add explicit exception clauses (e.g., *"In the emergency case, bypass the profile lookup and proceed directly to 911 guidance"*) so the model knows when it is permitted to override a standing rule

### Technique 7 — Leverage GPT-5's Iterative and Self-Rating Capabilities

- GPT-5 is notably strong at building complete applications in a single generation ("0-to-1 app generation")
- OpenAI's recommended pattern: prompt the model to (a) construct its own evaluation rubric (5–7 categories), (b) use that rubric internally to iterate, and (c) restart if the output does not hit top marks across all categories — without showing the rubric to the user
- A related general technique: ask the model to rate its own output on a scale of 1–10, then correct its calibration by providing your own rating; this adds granularity to vague adjectives like "detailed" by aligning the model's expectations with the user's

### Technique 8 — Metaprompting (Using GPT-5 to Improve Your Prompts)

- GPT-5 can effectively critique and improve its own prompts when given the right context
- Shyamal (OpenAI) template: provide the existing prompt, describe what users have complained about, and ask for minimal edits that address those complaints while preserving the existing structure
- Matt Schumer's "prompt generator" variant: instruct GPT-5 to act as a prompt-writing assistant with explicit guidelines (be goal-oriented, keep setup concise, specify output contract precisely)
- OpenAI has also shipped a **prompt optimizer tool** in the developer platform that automates this process and explains the reasoning behind each suggested change

### Agentic Toggles

- **Reasoning effort parameter** (API): defaults to `medium`; can be set to `low` or `high` to control how much thinking the model applies before responding
- **Verbosity parameter** (API): controls the length of the final answer independently of thinking length; even for non-API users, explicitly stating desired verbosity in the prompt is recommended
- **Parallel processing**: GPT-5 can handle multiple independent tasks simultaneously when explicitly instructed; example instruction: *"You can process multiple independent tasks in parallel when there's no conflict… Avoid parallel processing only when tasks depend on each other's outputs"*

---

## Key Concepts

- **Steerability**: The degree to which a model precisely follows the instructions given in a prompt; GPT-5 is described as the most steerable frontier model to date
- **Prompt engineering**: The practice of deliberately crafting prompt text to elicit desired behaviour from a language model
- **Chain-of-thought prompting**: A technique that instructs a model to reason step-by-step before producing a final answer; planning phases are a modern variant
- **JSON prompting**: A popular (but partially misunderstood) prompting style that formats instructions as JSON objects; its real benefit is the structured detail it forces, not the JSON syntax itself
- **Spec format**: Pietro Schirano's structured prompt template covering goal, trigger conditions, output format, step sequence, prohibitions, and ambiguity handling
- **Metaprompting**: Using the model itself to critique, optimise, or generate prompts for subsequent use
- **Reasoning effort parameter**: An API-level control in GPT-5 (`low` / `medium` / `high`) that governs how much internal reasoning the model applies
- **Verbosity parameter**: An API-level control that governs the length of GPT-5's final response, independent of its thinking length
- **0-to-1 app generation**: GPT-5's observed ability to produce a complete, functional application from a single prompt
- **Self-rating / evaluation rubric**: A technique where the model generates or is given a scoring framework and iterates against it to improve output quality
- **UltraThink prompt**: An informal prompt pattern that explicitly instructs GPT-5 to spend extended time reasoning before answering

---

## Summary

The central message of this episode is that GPT-5's exceptional instruction-following ability is a double-edged sword: it rewards well-structured, explicit, and internally consistent prompts with markedly better results, but it is more sensitive to vague, lazy, or contradictory prompts than its predecessors. The practical implication is a return to deliberate prompt engineering. The eight foundational techniques covered — telling the model to think harder, using planning phases, being explicit about desired output, tightening prompt structure, requesting a thought-process summary, eliminating conflicting instructions, exploiting iterative self-evaluation, and using metaprompting — all share a common thread: give the model more precise, structured information about what "good" looks like, and it will use its steerability to get there. Three additional agentic API levers (reasoning effort, verbosity, and parallel processing instructions) offer further fine-grained control. The speaker frames this as an unexpected but potentially worthwhile trade-off: a higher bar to entry in exchange for a more powerful and controllable model.
