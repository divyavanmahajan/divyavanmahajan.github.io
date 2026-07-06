---
title: 5 Prompting Tricks to Make Your AI Less Average
description: >-
  This episode of the AI Daily Brief (hosted by NLW) addresses what the host
  calls "AI's tyranny of the average" — the structural tendency of large
  language models to produce output that converges on conventional, mediocre
  results because they are t...
pubDate: 2025-10-19T00:00:00.000Z
type: episode
tags:
  - ai-daily-brief-podcast
url: 'https://www.patreon.com/posts/141566151'
draft: false
---
# 5 Prompting Tricks to Make Your AI Less Average

## Overview

This episode of the *AI Daily Brief* (hosted by NLW) addresses what the host calls "AI's tyranny of the average" — the structural tendency of large language models to produce output that converges on conventional, mediocre results because they are trained on the aggregate of human output. The episode is framed around a short essay by tech writer Alex Kantrowitz ("AI's Sameness Problem," published at bigtechnology.com) and then presents five concrete prompting strategies to counteract this tendency.

**Source video:** URL not provided in video details.

---

## Prerequisites

- Basic familiarity with large language models (LLMs) such as ChatGPT, Claude, Gemini, or Grok
- Some hands-on experience prompting AI systems for writing, strategy, or content creation
- Understanding that LLMs are trained on large corpora of human-generated text and media, and that this shapes the statistical distribution of their outputs
- Awareness of common AI output formats (essays, pitch decks, strategic memos, etc.)

---

## Main Points

### The Core Problem: AI's Tyranny of the Average

- LLMs are trained across the full corpus of human output, which optimises them toward the statistical mean — producing what is common, expected, and conventional.
- This gives AI a "high floor" (reliably passable output), but a low ceiling (rarely exceptional or distinctive output).
- Alex Kantrowitz's essay notes that AI-generated images, video (e.g., Sora), and text all exhibit a uniformity that makes them feel interchangeable — a "sameness problem."
- Examples cited: all Sora videos eventually feeling alike; the Studio Ghibli trend that peaked and faded; business email inboxes flooded with identically structured AI-written PR pitches.
- The em dash has become a widely recognised marker of AI writing; similarly, certain words (e.g., "telemetry," "leverage," "synergy") appear disproportionately in AI output compared to natural human communication.

---

### Technique 1: Negative Style Guide

- Explicitly tell the model what **not** to do — banned words, banned phrases, banned structural patterns.
- Example banned words: *revolutionary, innovative, leverage, synergy, disruption, telemetry*.
- Example structural ban: no titles with colons or dashes; favour single, clear declarative statements.
- This can be bundled into a reusable prompt block and included at the start of any session.
- Effect: removes the most identifiable "landmines" of averageness before output is even generated.

```
Prompt pattern:
"Follow this negative style guide:
- Banned words: [list]
- Do not use colons in titles
- Do not use bullet points when prose would serve better
[etc.]"
```

---

### Technique 2: Forced Divergence and Choice

- LLMs have a near-pathological tendency to equivocate — presenting multiple options rather than committing to one — in order to avoid disagreeing with the user.
- This produces weak, hedge-everything output that lacks the clarity of genuine argument or recommendation.
- Fix: explicitly instruct the model to **pick one option and argue for it forcefully**.
- A two-step variant for strategic discussions:
  1. Ask the model to **steel man** each of the competing options (make the strongest possible case for each).
  2. Then ask it to **commit to one** and explain why.
- Applies equally to writing: strong writing has a clear thesis; AI's tendency to wander and equivocate weakens its written output the same way it weakens its strategic recommendations.

```
Prompt pattern:
"Steel man each of the following three options. Then pick one and argue vociferously for why it is the best choice."
```

---

### Technique 3: Cliché Burndown

- Ask the model to **identify its own patterns** before or after generating output, then explicitly replace them.
- Process:
  1. Generate a first-pass output.
  2. Ask: *"What are the 10 most common clichés — analogies, turns of phrase, structural moves — in this type of writing?"*
  3. Ask: *"How would you communicate the same ideas without those clichés?"*
  4. Embed that reasoning into a revised output.
- Minimum viable version: after any first-pass output, ask *"What are the most common clichés this fell prey to, and how would you fix them?"* — even this single step produces noticeably better results.
- Key insight: making the model **articulate the template it is using** causes it to more consciously avoid that template.

---

### Technique 4: Self-Critique and Iterative Refinement

- Most users accept the first output. The more effective approach treats first-pass output as a draft, not a final product.
- A full self-critique prompt can be structured as a single multi-step instruction:

```
Prompt pattern:
"1. Draft a first version of [artifact].
2. Red-team it: list the top 5 ways it is generic or weak.
3. Write a V2 that fixes each issue.
4. Explain what you changed and why."
```

- Can be made more targeted by specifying a **context lens** for the critique: e.g., *"List the top 5 ways this feels too generic for an undergraduate audience"* rather than asking generically.
- **Cross-model critique**: Using different models to critique each other's work adds further dimensionality. The host describes a workflow where a long GPT-5 Thinking session was shared (via ChatGPT's share-link feature) with an O3 session, which was then asked to identify what the prior conversation had missed. Even within a single platform, different models have distinct reasoning styles (O3 is more clinical and concise; GPT-5 Thinking is more fluid and discursive), and leveraging this contrast produces richer output.

---

### Technique 5: Provide Examples and Explain Why the Consensus Is Wrong

- When a better-than-average example exists, share it with the model — but **also explain why it is better and what conventional wisdom it correctly violates**.
- Without the explanation, the model may over-generalise: e.g., if shown a pitch deck with revenue figures on slide 1, it may conclude "always lead with numbers" rather than understanding the underlying principle.
- The actual principle (using a pitch deck as the example): *"Whatever is most distinctive about what you're presenting should appear as early as possible, to capture attention before it is lost."* This is a generalisable rule; the specific instantiation varies by context.
- LLMs "grok" well-articulated reasoning about why conventional wisdom is limited — but they cannot infer that reasoning from an example alone.
- The host's own pitch deck example: Super Intelligent's 41% month-over-month revenue growth goes on slide 1, not slide 6, because that is the most distinctive fact — regardless of what the standard 10-slide template prescribes.

```
Prompt pattern:
"Here is an example I consider better than average: [example].
The conventional approach is [X]. Here is why I think [X] is wrong or limited: [explanation].
Use this reasoning — not just the example — to guide your output."
```

---

## Key Concepts

- **Tyranny of the average**: The tendency of LLMs to produce statistically median output because they are trained on the aggregate of human-generated content.
- **AI sameness problem**: Term used by Alex Kantrowitz to describe the pervasive uniformity of AI-generated content across text, image, and video modalities.
- **Negative style guide**: A prompt component that explicitly lists banned words, phrases, or structural patterns the model should avoid.
- **Forced divergence**: A prompting technique that requires the model to commit to a single choice or argument rather than presenting multiple hedged options.
- **Steel manning**: Constructing the strongest possible argument for a given position, used here as a precursor to making a final committed recommendation.
- **Cliché burndown**: A technique in which the model is asked to identify the clichés and templates present in its own output, then revise to eliminate them.
- **Self-critique loop**: A structured multi-step prompt in which the model drafts, critiques, and revises its own output within a single interaction.
- **Cross-model critique**: Using two different AI models — with distinct reasoning styles — to critique each other's outputs in order to surface blind spots.
- **Context lens**: A specified audience or framing used to sharpen the focus of a self-critique (e.g., "too generic for a CFO audience").

---

## Summary

The central argument is that LLMs are structurally biased toward average, conventional output because they are trained on the statistical aggregate of human-generated content — and that while this produces reliably adequate results, it is insufficient for high-stakes, production-quality use cases where distinctiveness matters. Rather than accepting this as an immutable limitation (as Kantrowitz's essay implies), the host argues that deliberate prompting strategies can reliably overcome the sameness problem. The five techniques — negative style guides, forced divergence and choice, cliché burndown, self-critique with cross-model review, and example-plus-explanation — share a common logic: they require the model to make its own defaults explicit and then actively work against them. Together, these strategies shift AI from passively reproducing the mean of human output to actively producing something above it, and the host argues that as AI-generated content becomes ubiquitous, the ability to use these techniques well represents significant practical leverage.
