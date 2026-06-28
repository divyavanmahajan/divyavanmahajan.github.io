---
title: 'AI New Year’s: The 10-Week AI Resolution'
description: >-
  This talk, published on December 31, 2025 as the final episode of the AI Daily
  Brief podcast and video series, presents a self-guided, project-based
  curriculum called the 10-Weekend AI Resolution. The speaker's central argument
  is that most people...
pubDate: 2025-12-31T00:00:00.000Z
type: episode
tags:
  - ai-daily-brief-podcast
draft: false
---
# 2025-12-31 AI New Year's: The 10-Weekend AI Resolution

## Overview

This talk, published on December 31, 2025 as the final episode of the *AI Daily Brief* podcast and video series, presents a self-guided, project-based curriculum called the **10-Weekend AI Resolution**. The speaker's central argument is that most people are leaving significant value on the table by using AI narrowly—defaulting to one model, ignoring agentic tools, and never stress-testing deep research or automation capabilities. The resolution provides a modular, practical path to genuine AI fluency across a wide range of tools and use cases. The speaker does not give their full name in the transcript but hosts the *AI Daily Brief* daily podcast.

**Source:** Not available (no URL provided)

---

## Prerequisites

- Basic familiarity with at least one large language model (e.g., ChatGPT, Gemini, Claude)
- A working account on one or more AI platforms (free tiers are sufficient for most projects)
- General comfort with web-based productivity tools (Google Drive, Notion, or similar)
- Optional but helpful: awareness of automation platforms (Lindy, N8N, Make) and vibe-coding platforms (Replit, Lovable, Google AI Studio)
- Willingness to work with real personal or professional data (bank statements, analytics exports, meeting notes, etc.)

---

## Main Points

### Setup and Philosophy

- The resolution is **10 discrete weekend projects**, not a sequential course—each is self-contained and completable in a few hours
- Projects are **forcing functions for output**, not theory; each ends with something tangible
- They are **modular** (any order, any subset) but **compounding** (later projects benefit from earlier ones)
- Each project includes a default (beginner/intermediate) version and an **advanced modifier**
- A scoring rubric is suggested: outcome quality, time saved vs. manual work, repeatability, and likelihood of reuse
- **Prep step (30 minutes before Weekend 1):** Set up a resolution folder with subfolders per weekend; choose one automation platform (Lindy, N8N, or Make) and one vibe-coding platform (Replit, Lovable, or Google AI Studio)

---

### Weekend 1 – Vibe Code a Resolution Tracker

- Build a **web app** to track progress through all 10 weekends using Replit, Lovable, or Google AI Studio
- Suggested features: list of all 10 weekends, completion checkboxes, notes fields, progress bar, optional scoring system
- Deploy it live so it is actually usable throughout the resolution
- **Advanced modifier:** Add user authentication, multi-user collaboration, or mobile optimization
- Purpose: Delivers an immediately useful tool *and* demonstrates how powerful no-code/vibe-coding tools have become

---

### Weekend 2 – Model Mapping: Build Your Personal AI Topography

- Most people use one model for everything; this project builds **personal intuition** about which models suit which tasks
- Run the same set of tasks (deep research, writing, business strategy, data analysis, visualization) through multiple models
- Compare on speed, quality of clarifying questions, and subjective "feel"
- **Deliverable:** A one-page rule-of-thumb reference document mapping preferred models to use cases
- **Advanced modifier:** Test specialized tools per use case; track output consistency across multiple runs; measure editing time per model; include cost comparisons

---

### Weekend 3 – Deep Research Sprint

- Studies show that despite wide availability, a **low percentage of people have actually stress-tested** deep research features
- Goal: close the gap between theoretical awareness and decision-grade trust in AI research outputs
- Pick a **real decision or research need** (competitor analysis, pricing, product research); use a deep research tool and iterate—push back, ask for disconfirming evidence, reject first outputs
- **Advanced modifier:** Run the same query through multiple tools and compare; use one model to fact-check another's output

---

### Weekend 4 – Data Analysis Project

- Data analysis with AI is not limited to data professionals—applicable to personal finance, software analytics, listening history, or public datasets (e.g., Kaggle)
- Workflow:
  1. Gather a real dataset
  2. Use an LLM to propose cleaning steps, 5–10 metrics, and 3 hypotheses
  3. Produce: clean dataset, summary table, three insights (patterns/anomalies/trends), three recommended actions
  4. Write a one-page insights memo
- **Advanced modifier:** Build a reusable prompt template for monthly re-analysis; connect to a live data source; compare LLM outputs on the same dataset

---

### Weekend 5 – Visual Reasoning (Infographics and Diagrams)

- Goal is **visual reasoning**, not just aesthetics—getting AI to think through the logic of visual communication
- Tools: NotebookLM Pro ("NanoBanana Pro" in transcript) or ChatGPT Images; alternatively Canva or Gamma
- Process:
  1. Pick a concept that genuinely benefits from visualization (process, comparison, framework, timeline)
  2. Ask the LLM to reason about *how* to visualize it and the trade-offs between approaches
  3. Generate two alternate designs (e.g., flowchart vs. 2×2 matrix)
  4. Apply Visual QA: readable in five seconds, right text density, one clear takeaway, no unnecessary artifacts
- **Deliverable:** A visual that explains an idea faster than words alone
- **Advanced modifier:** Design a reusable visual system or pattern library (2×2 matrices, process flows, comparison tables, timelines)

---

### Weekend 6 – Information Pipeline (NotebookLM + Gamma)

- NotebookLM and Gamma are **powerful but underutilized**; this project embeds them into a repeatable workflow
- **Deliverable:** A reusable pipeline that turns raw/messy information into polished outputs
- NotebookLM workflow: upload reports, meeting notes, articles, or transcripts → generate executive summary, key terms glossary, FAQ, audio/video podcast, and presentation outline
- Gamma workflow: take NotebookLM output and produce a presentation deck, website, or multiple formats simultaneously
- Speaker tested Gamma for this very episode—input exact text with a stylistic prompt (1950s retro-futuristic visuals) and generated a structured website output

---

### Weekend 7 – Automation: Content Distribution Machine

- **Deliverable:** A working automation handling a significant portion of content production or distribution
- Every automation needs five components:
  1. **Trigger** – what kicks it off (new Notion entry, Slack keyword, form submission, calendar event)
  2. **Transformation** – what the automation does (summarize, draft, categorize)
  3. **Routing** – where output goes (Slack, email, spreadsheet)
  4. **Human approval step** – review before final action
  5. **Logging** – record what happened with timestamps and status
- Example: When a content idea is added to Notion → auto-summarize → generate 3 tweet drafts + 1 LinkedIn draft → send to Slack for review
- Alternative: Weekly reading digest—save article links all week, automation summarizes each and emails a digest on Friday
- Tools: Lindy, N8N, Make, or native workflow builders in Slack or Notion
- **Advanced modifier:** Chain multiple automations; add conditional logic per content type; add error handling

---

### Weekend 8 – Automation: Productivity Workflow

- Companion to Weekend 7; together they form a **minimum viable automation stack**
- Weekend 7 = managing output; Weekend 8 = managing input and follow-through
- Same five-component structure (trigger, transformation, routing, approval, logging)
- **Option A – Email Inbox Follow-Up System:**
  - Trigger: tag/label an email or forward to a special address
  - Transformation: summarize, extract asks, draft reply, identify follow-up tasks
  - Routing: draft reply for review + follow-up task in task manager
  - Log: contact name, topic, next step, due date
- **Option B – Lead Response System:**
  - Trigger: form submission or inbound DM
  - Transformation: categorize lead, draft personalized response, assign pipeline stage
  - Routing: Slack notification or Notion/Airtable/spreadsheet entry
  - Log: contact info, source, stage, next action, reminder date
- **Alternative:** Meeting prep bot—before any external calendar event, auto-generate a one-paragraph briefing (who they are, last interaction, likely discussion topics) delivered via Slack or email
- Note: Many tools (Gmail, Superhuman, HubSpot) now offer native versions of these automations

---

### Weekend 9 – Build Your Personal AI Operating System

- Problem: most people re-explain their context in every new conversation, especially when switching between models
- **Deliverable:** A professional context document and a structured AI operating system in Notion, Drive, or similar
- **Context document contents:** role and responsibilities, key projects and status, communication style preferences, common tasks, domain-specific terminology, formatting preferences, and things to avoid
- **AI OS structure:**
  - AI Playbook: best prompts, reusable templates
  - Automation log and decision log
  - Capture inbox: voice memos, interesting prompts, things to try
  - 15-minute weekly review habit to maintain the system
- **Advanced modifier:** Create separate context profiles for work vs. personal; include actual writing samples or emails in the context file
- Speaker notes that LLM memory features are expected to expand significantly in 2026, which may reduce the manual overhead of this project

---

### Weekend 10 – Vibe Code an AI-Powered Application

- Elevates Weekend 1 from building *with* AI to building something that *uses* AI internally
- Google AI Studio is the recommended platform; capabilities include:
  - Photo editing via Gemini
  - Conversational voice apps (embedded voice agent)
  - Image animation via Veo
  - Context-aware chatbots
- **Project ideas:**
  - Chatbot trained on specific knowledge (company FAQs, personal knowledge base, body of research)
  - Voice agent for a specific interaction type (language practice partner, mock interview coach, difficult-stakeholder role player)
  - Mini-agent that ingests documents, extracts structured information, and generates outputs (images, video, formatted docs)
- **Advanced modifier:** Build something for real external users, gather feedback, and iterate—move from side project to genuine prototype

---

### Bonus/Substitute Weekend – Agent Evaluation Gauntlet

- Most people's mental model is still **chatbot-centric**; this project updates it through direct experience with agentic tools
- Suggested tools to test: Manus and Genspark, compared against baseline LLMs (ChatGPT, Gemini)
- Run **three standardized tasks** through each agent:
  1. Research and synthesis project
  2. Operations task (e.g., convert meeting notes/rough plan into a checklist with timeline and role assignments)
  3. Production task (generate from a single input: summary doc, email announcement, five social posts, one-page overview)
- Score each agent on: accuracy and hallucination rate, citation and traceability, ability to follow constraints, output usefulness without heavy editing, repeatability
- **Deliverable:** An agent scorecard documenting what each agent is good for, what you would trust unsupervised, what still requires too much oversight, and 2–3 specific tasks to delegate going forward
- Speaker's observation: complex pipelines (data analysis → visualization) are difficult inside ChatGPT or Gemini but relatively straightforward for Manus and Genspark

---

## Key Concepts

- **Vibe coding** – Using natural-language prompts to generate functional code or web applications without traditional programming, via platforms such as Replit, Lovable, or Google AI Studio
- **AI topography / model mapping** – The practice of systematically testing multiple LLMs on the same tasks to develop personal intuitions about which model performs best for which use case
- **Deep research** – A feature available across major LLMs that performs multi-step, web-grounded research synthesis; distinct from a standard single-turn query
- **Automation trigger** – The event or condition that initiates an automated workflow (e.g., a new email, a form submission, a calendar event)
- **Human approval step** – A deliberate pause in an automation that routes output to a human for review before a final action is taken
- **Context document / AI operating system** – A structured, persistent document containing professional background, communication preferences, and domain knowledge, used to prime AI conversations without re-explaining context each time
- **Context engineering** – The practice of deliberately constructing and maintaining the context provided to an AI model to improve output quality and consistency
- **Agentic tools / agents** – AI systems capable of executing multi-step tasks autonomously, such as Manus and Genspark, as distinguished from single-turn chatbot interactions
- **NotebookLM** – Google's AI-powered research and information synthesis tool that allows users to upload source documents and generate summaries, FAQs, glossaries, and multimedia outputs
- **Gamma** – An AI-powered tool for generating presentations, websites, and documents from text input in multiple formats simultaneously
- **Visual QA** – A self-review checklist applied to AI-generated visuals to ensure readability, appropriate text density, a single clear takeaway, and absence of unnecessary artifacts
- **Automation pipeline** – A chained sequence of automated steps (trigger → transformation → routing → approval → logging) that moves information through a workflow with minimal manual intervention
- **Agent scorecard** – A structured evaluation document summarizing an AI agent's performance across accuracy, traceability, instruction-following, output quality, and repeatability

---

## Summary

The speaker proposes a **10-weekend, project-first curriculum** designed to move practitioners from passive or narrow AI use toward genuine, broad-based fluency. Each weekend targets a distinct capability—vibe coding, model comparison, deep research, data analysis, visual reasoning, information processing, automation, productivity workflows, context engineering, and AI-powered application building—with a bonus weekend dedicated to evaluating agentic tools. The underlying argument is that the majority of people are significantly underutilizing AI not because the tools are inaccessible, but because they have never been pushed to explore beyond their default model or use case. By completing these projects, a practitioner will have built a personal tracker, two working automations, a deployed AI-powered application, a reusable analysis pipeline, a visual system, an information processing stack, and a personal AI operating system—amounting to a practical foundation that, in the speaker's assessment, places the practitioner ahead of the vast majority of current AI users as 2026 begins.
