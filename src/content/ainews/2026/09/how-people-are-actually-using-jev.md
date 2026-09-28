---
title: How People Are Actually Using Jev
description: >-
  This episode of the AI Daily Brief (hosted by Nathaniel Whittemore) surveys
  how people are actually using Jev, a new "judgment model" from the company
  TypeSafe, roughly ten days after its launch. Jev is not a general-purpose LLM
  like GPT-6 or Clau...
pubDate: 2026-09-25T00:00:00.000Z
type: episode
tags:
  - ai-daily-brief-podcast
url: 'https://www.patreon.com/posts/170560357'
draft: false
---
## Overview

This episode of the **AI Daily Brief** (hosted by Nathaniel Whittemore) surveys how people are actually using **Jev**, a new "judgment model" from the company **TypeSafe**, roughly ten days after its launch. Jev is not a general-purpose LLM like GPT-6 or Claude Opus/Fable; it is a fast, cheap "System 1" model that makes small, structured judgments (classifications, ratings, yes/no calls) at massive scale. The episode matters because Jev represents a new AI primitive — judgment at volume for effectively no money — and the host argues it is relevant well beyond developers and game designers. The buzz has translated into business momentum: The Information reports TypeSafe is in talks to raise up to $1 billion at a $10 billion+ valuation, up from a $40 million seed at $200 million.

Source video: no URL was provided with this transcript (episode slug: `2026-09-25-how-people-are-actually-using-jev`; companion materials at aidailybrief.ai).

## Prerequisites

- Basic familiarity with LLMs and chatbots (e.g., GPT-6, Claude Opus/Fable) and how they are typically used for writing, coding, and reasoning.
- The System 1 / System 2 distinction from Daniel Kahneman's *Thinking Fast and Slow* — fast instinctive pattern matching versus slow deliberate reasoning.
- General understanding of classification in machine learning (labels, categories, confidence scores) — though Jev notably requires no pre-labeled data.
- Working knowledge of common business workflows the examples draw on: CRM lead routing, support ticket triage, email management, SEO/internal linking, ad testing, and AI agent evaluation ("evals").

## Main Points

### What Jev is: a System 1 judgment model

- Jev cannot write in the traditional chatbot sense; it makes fast, instinctive snap judgments — TypeSafe calls it a "System 1 model" after Kahneman.
- The test for a good Jev job: you repeatedly read something, make a small judgment, then take a predictable next step (e.g., a file lands in Downloads — is it an invoice, which project is it for, does someone need to see it?).
- It supports three question types:
  - **Choice** ("pick one"): up to 255 options; returns the best fit plus a probability for every other option (e.g., which team handles this ticket — billing, tech support, sales, other?).
  - **Score** (rating on a scale): 2–10 levels, each described in words; returns a position on the scale plus confidence (e.g., calm → very angry).
  - **Null** (Bernoulli / yes-no): returns a probability from 0 to 1 that a statement is true (e.g., is this customer explicitly asking for a refund?).

### Speed and cost are the point

- TypeSafe claims 20–200× faster and 40–400× cheaper than comparable LLM processes; a million input tokens costs 4.2 cents and output tokens are free. Calls take 70–500 milliseconds.
- Questions run in parallel: many questions about the same item cost more tokens but not more time. TypeSafe found 13 questions in a single call was 12.2× cheaper and 10× faster than one at a time, with identical answers.
- Matthew Berman's analysis of 724 live ads asked 12 questions per ad (hook archetype, format, offer, CTA intent, awareness, etc.); a single 12-question request completed in 173 milliseconds.
- A demo by HeyStefan on X illustrated the model: a pile of emojis each asked the same yes/no question ("does this match what you typed?" — e.g., "things you can wear in winter") with no labeling or tagging, sorting in real time.
- Explicit trade-offs: Jev won't write code, draft contracts, or make nuanced multi-factor decisions. It is for small judgments at volume — which bucket, how urgent, is it relevant, is it safe.

### Use case 1: Analyzing what you already have ("what's in this pile")

- Pattern: take an existing collection, ask the same questions of every item, count the answers — analysis previously unjustifiable by hand now takes seconds and costs cents.
- Berman's 724-ad breakdown took 40 seconds and 9 cents; two days later he had Jev evaluate 723 ads as 30 buyer personas (gym owner, dental office manager, toddler mom, AI-curious engineer), producing 21,690 stop-or-scroll decisions for 22 cents.
- The host cautions this is a hypothesis generator, not real buyer data — but predicts marketing will use it to pressure-test ad and landing-page angles before paying for real tests.
- Ian Nuttall ran eight questions (topic, hook, tone, etc.) across ~3,300 of their past X posts for about 13 cents, then compared against engagement metrics.
- Anyone with a big pile — a year of customer emails, CRM notes, meeting transcripts — can write a few simple questions and run them against everything.

### Use case 2: Searching by meaning ("which of these match what I mean")

- Describe what you want in plain words and let Jev check every candidate; it finds meaning even when the words don't match.
- Justine Moore (a16z) described scanning thousands of Zillow listings for unfilterable attributes like architectural style, renovation status, or freeway proximity.
- Burhan clipped a 90-minute video by natural-language themes ("their predictions for when AI will automate AI research") in under two seconds for under two cents.
- Borgia's SEO audit ran 8,790 yes/no calls to rebuild the internal link map across 586 pages in 45.1 seconds for 21 cents; Claude Opus 5 got through only 21 pages and spent $1.43. "Internal linking is the perfect Jev job... a classification problem [where] we've been paying frontier prices."
- Filtering by what you care about: Robin Bilgil built a real-time AI-slop detector for X posts using confidence thresholds; Elvis San had Jev scan 384 morning news stories for relevance to 15 brands in 24.9 seconds for 19 cents (Opus 5 managed 4 articles in the same time).

### Use case 3: Triaging what comes in ("what is this and where does it go")

- Typical questions: how important is this email, is this file an invoice, is this link malicious, should this lead go to sales/self-serve/nurture?
- Jonathan Unikowski's live-prioritized inbox rated 100 emails in 453 milliseconds for about a tenth of a cent, matching his own importance rating on every one.
- Marcel Pociot (CTO of Beyond Code) built a macOS app that watches the Downloads folder and applies rules ("is this an invoice? move and rename it") with no other LLM calls; DevEd used Jev for live chat moderation; Steven Tey of Dub fed it 10,000 previously caught malicious domains to flag bad links, solving a day-one problem "in two hours."
- Broader business framing: most workflows eventually hit "what should happen next?" — Box has experimented with incident triage (customer impact, severity, escalation routes); a CRM module can ask three questions of every new lead (priority, buying readiness, spam).
- The host predicts triage and routing is where Jev becomes "absolutely integral" once integrated into existing systems.

### Use case 4: Checking work against rules ("does this meet the bar")

- Turn "please review this" into specific questions and run them against every draft or output.
- Harrison Chase (LangChain) calls Jev "great for evals, especially online evals where you want to grade lots of traces" — grading an AI agent's work the same way every time. As everyone puts agents into production, evaluation becomes core infrastructure, not just a developer concern.
- The team at Every planted mistakes in 12 passages: Jev caught 6 of 7 in 0.35 seconds versus Claude Fable 5.1 catching all 7 in 8.83 seconds — at about 580× cheaper, meaning the check can be rerun many times and still beat a frontier model on cost and speed.
- Practical translation: convert a style guide or banned-phrase list into yes/no questions and run them on every paragraph of a document to catch AI-isms.
- Key insight: doing a check at that scale becomes "a difference in kind rather than a difference in scale" — checking every sentence is categorically different from one generic document-level review.

### Use case 5: Speeding up AI agents

- Micro-judgments route agents to the right model, context, skills, and tools: which model can handle this task, how much reasoning does this step need, which skill fits, is this old tool output still relevant?
- V. Chen used Jev to dynamically change GPT-6 reasoning effort inside Codex mid-task (more thinking when stuck, less for routine steps), reporting 50% lower costs and faster runs.
- Daniel San built "Jev Skill Suggestion" for Claude Code: Jev classifies which skill matches each request and injects only that skill into context — an 88% decrease in tokens and cost. Relevant to non-developers who have built large skills libraries.
- AJ Asver built a harness that learns a job as it runs, moving steps from LLM calls to code: compliance-alert cost fell from ~$2.95 per alert to 25 cents by alert 1,000. Expect judgment models to be built natively into tools and harnesses.

### Use case 6: Responding instantly ("what does this person want right now")

- Marcus Lowe's "smart copy-paste": copy a resume, paste into an application, and the fields fill themselves.
- Norman on X built a version that splits pasted text into pieces, identifies each field, matches them, checks against the original, and pastes only confident matches.
- The host notes how much knowledge work is moving details between formats (emails, PDFs, meeting notes → CRMs, intake forms, templates), making this category broadly relevant.

### Where to be careful, and how to pick good Jev tasks

- Caution areas: hiring, money, and security. In hiring, Jev returns a score with no attached reasoning; a better design combines Jev ranking with LLM review of borderline candidates. TypeSafe itself lists weaknesses: multi-step questions (accuracy drops per hop), counting/math/dates (extract facts, do math elsewhere), consistency, and reading intent.
- Four fit criteria: (1) you can write the answers down in advance (categories, binary, scale — not a sentence or calculation); (2) there's volume — a pile or stream; (3) stakes are low or errors are easy to catch; (4) the evidence fits as text in under 32,000 tokens.
- Question-writing tips: one judgment per question ("is this a good lead?" is many judgments in disguise — break it apart); describe every scale level in words; ask more questions than you think you need; and test against your own labels (e.g., hand-label 50 emails) before trusting it in production.

## Key Concepts

- **Jev** — a new "judgment model" from TypeSafe that makes fast, cheap, structured snap judgments rather than generating prose or code.
- **TypeSafe** — the company behind Jev, reportedly raising up to $1B at a $10B+ valuation.
- **System 1 model** — a model built for fast, instinctive pattern matching, after Kahneman's System 1/System 2 framework in *Thinking Fast and Slow*.
- **Choice** — Jev's pick-one question type: up to 255 options, returning the best fit plus probabilities for all options.
- **Score** — Jev's rating question type: a 2–10 level scale with each level described in words, returning a position plus confidence.
- **Null (Bernoulli)** — Jev's yes/no question type, returning a 0–1 probability that a statement is true.
- **Parallel questioning** — asking many questions about one item in a single call; adds token cost but not latency.
- **Evals / online evals** — automated grading of AI agent outputs or traces, an emerging Jev use case highlighted by LangChain.
- **Model routing** — using micro-judgments to send an agent's task to the right model, reasoning level, skill, or tool.
- **Hypothesis generator** — the host's framing for synthetic-persona analyses (e.g., 30 buyer archetypes): directional signal, not real data.

## Summary

The speaker's overall message is that Jev is not another LLM but a genuinely new primitive: cheap, near-instant judgment applied at scale. Because it only answers structured questions — pick one, rate on a scale, yes or no — it can be 20–200× faster and 40–400× cheaper than frontier LLMs, which turns previously unjustifiable analysis (auditing hundreds of ads, thousands of posts, every page of a website, every incoming email) into tasks costing cents and seconds. The six emerging use-case families — analyzing existing archives, searching by meaning, triaging inbound items, checking work against rules, speeding up AI agents, and instant response — show Jev complementing rather than replacing traditional LLMs. Its limits are real (no writing, no multi-step reasoning, no math, no unexplained high-stakes decisions), so the right pattern is to fit tasks to four criteria (pre-definable answers, volume, low stakes or catchable errors, evidence under 32K tokens), write single-judgment questions, and test before production. The host expects that because judgment-at-scale is a difference in kind, not degree, its full range of applications will keep unfolding well beyond these first ten days.
