---
title: 'Building a Voice Agent: A Case Study'
description: >-
  This talk is a case study discussion between Nathaniel Whittemore (host, AI
  Daily Brief / Super Intelligent), Eddie, and Chris (CEO/co-founder of
  Fractional) about the practical experience of designing, building, and
  deploying a production voice a...
pubDate: 2025-04-19T00:00:00.000Z
type: episode
tags:
  - ai-daily-brief-podcast
draft: false
---
# Building a Voice Agent: A Case Study

## Overview

This talk is a case study discussion between Nathaniel Whittemore (host, AI Daily Brief / Super Intelligent), Eddie, and Chris (CEO/co-founder of Fractional) about the practical experience of designing, building, and deploying a production voice agent. The specific application is an AI-powered interview agent used in Super Intelligent's "Agent Readiness Audits" — a consulting service that interviews employees across an organization to benchmark AI adoption and identify opportunities for agent deployment. The discussion covers the build-vs-buy decision, technical architecture choices, evaluation challenges, and broader use cases for voice agents.

**Source video:** URL not provided (AI Daily Brief, published 2025-04-19)

---

## Prerequisites

- Basic familiarity with large language models (LLMs) and prompt engineering
- Understanding of what AI agents are and how they differ from standard AI-assisted tools
- Awareness of real-time voice/speech APIs (e.g., OpenAI Realtime API, Whisper)
- General knowledge of software evaluation (evals) and testing methodologies
- Familiarity with enterprise AI adoption concepts and consulting workflows

---

## Main Points

### The Buy vs. Build Question for Agents

- For general-purpose productivity tools (e.g., deep research), off-the-shelf products can work well.
- For bespoke, workflow-specific use cases, some degree of custom building is almost always required — everything exists on a spectrum from pure build to lightly customized off-the-shelf.
- Voice agent platforms like Bland AI offer useful tooling, but enterprise-grade deployments with strict quality requirements typically require custom engineering on top of foundational primitives.
- The market reality: companies attempting to deploy agents in production often learn from live failures rather than lab testing, because pre-deployment confidence is difficult to establish.

---

### Why Voice Agents Are Gaining Traction

- Speech-to-information is significantly faster and easier for most people than structured text entry; open-ended verbal responses capture richer, more natural data.
- Voice agents operate 24/7 and on-demand, removing scheduling friction that is inherent to human interviewer workflows — described as a "10x improvement in convenience."
- The underlying model quality has improved to the point where consumer interactions with voice agents are frequently described as pleasant and impressive.
- Voice agents enable parallelism impossible with human teams: hundreds or thousands of interviews can be conducted simultaneously.
- Consultants, rather than viewing the technology as purely disruptive, largely welcome automating data collection so budget and expertise can be directed toward higher-order analysis.

---

### Core Technical Architecture of the Interview Agent

- The system is built on the **OpenAI Realtime API**, which provides low-latency voice interaction with realistic-sounding voices and on-the-fly reasoning capability.
- A monolithic prompt alone proved insufficient: the agent would go "off the rails," ask questions out of order, and was difficult to tune.
- The team added **multiple sub-agents running in parallel**:
  - **Question-routing sub-agent**: Runs out-of-band in the background, assesses the conversation state, and decides which question to move to next. The core agent is then told only the single current question and its goals.
  - **Drift/Rabbit-hole detector sub-agent**: Monitors the conversation for excessive follow-up loops (the LLM's tendency to say "wow, tell me more!") and issues a forced tool call to redirect to the next question when necessary.
- Transcript display added architectural complexity: OpenAI returns audio and a Whisper-generated transcript from separate models, which can disagree. Background noise (e.g., a sneeze) caused the transcription model to output unrelated or foreign-language text, even while the core model responded correctly.
- A UI showing question progress (checkmarks, upcoming questions, skip controls) required the system to have explicit real-time awareness of conversational state — adding further engineering overhead.

```
High-level architecture (described):

[User Voice Input]
      |
[OpenAI Realtime API - Core Interview Agent]
      |                    |
[Whisper Transcript]   [Question Router Sub-Agent]
                            |
                       [Drift Detector Sub-Agent]
                            |
                   [Tool Call: Advance Question]
```

---

### Evaluation (Evals) Is the Hardest Problem

- Defining "what makes a good interview" is inherently subjective: information completeness, duration, user experience, avoidance of repetition, and responsiveness to personality all matter.
- There is no clean ground truth — unlike classification tasks, conversational quality is fuzzy and context-dependent.
- The team built a **synthetic conversation testing system**:
  - Written personas representing realistic interviewee types (e.g., "a person in marketing who uses these specific tools") were created.
  - A separate LLM plays the role of the synthetic user and conducts text-domain interviews with the agent.
  - Multiple metrics are collected on the resulting conversation, with the explicit acknowledgment that all metrics are imperfect.
- Real-world behavior consistently surprised lab testing: a CEO swore at the agent and dropped out mid-interview (then returned); a user switched to German mid-conversation (the agent handled it correctly); synthetic test users never modeled adversarial or frustrated behavior.
- The team adopted an 80/20 philosophy: build good-enough evals early, then learn from production.

---

### Degrees of Freedom and the Nature of Agency

- The large number of tunable parameters (core prompt, model selection, question wording, goal wording, sub-agent thresholds) gives fine-grained control but also creates unpredictability.
- The project illustrates a clear definition of "agent" as distinct from AI-assisted tools: the system does the work autonomously with no human able to intervene in real time. The interviewer is not present; the agent conducts the full interaction independently.
- Agency is described as a spectrum with three contributing attributes:
  1. **Open-endedness** of the task
  2. **Complexity** of the goals
  3. **Who takes the final action** (human in the loop vs. fully autonomous)
- This voice agent scores high on all three dimensions, making it a strongly agentic system.

---

### Broader Use Cases for Voice Agents

- **Inbound call center replacement**: Start with the ~50% of call volume consisting of simple, repetitive tasks; build in escalation paths for complex cases.
- **Outbound B2B calls**: e.g., calling insurance companies to gather information.
- **Healthcare market research**: Interviewing physicians for market research, with open questions about regulatory constraints.
- **Field inspection / technician support**: Railway safety inspectors taking notes hands-free; on-site technicians querying instruction manuals via voice instead of reading physical documents.
- **Ethical note**: Best practice is always to disclose to the user that they are speaking with an AI agent; concealing this is considered a significant risk to user trust.

---

## Key Concepts

- **Voice Agent**: An AI system capable of conducting real-time spoken conversations autonomously, making decisions about what to say and ask without human intervention.
- **OpenAI Realtime API**: An API providing low-latency, streaming voice interaction powered by a multimodal LLM, used here as the core engine of the interview agent.
- **Whisper**: OpenAI's speech-to-text model, used in parallel with the Realtime API to generate transcripts; runs as a separate model and can produce outputs inconsistent with the core model's interpretation.
- **Sub-agent / Out-of-band agent**: A secondary LLM process running in parallel to the main agent, responsible for a specific monitoring or decision task (e.g., question routing, drift detection).
- **Drift Detector**: A sub-agent that monitors for conversational derailment (excessive follow-ups, topic tangents) and triggers a corrective action to return the conversation to its goals.
- **Synthetic Conversation Testing**: An evaluation methodology in which LLM-generated personas play the role of end users, enabling automated pre-deployment testing of conversational agents.
- **Evals (Evaluations)**: Automated frameworks for measuring agent performance against defined quality metrics; particularly challenging for open-ended, conversational AI systems.
- **Agent Readiness Audit**: Super Intelligent's consulting product that benchmarks an organization's AI and agent adoption and maps deployment opportunities, with the voice agent as its data collection mechanism.
- **Buy vs. Build Spectrum**: A framework for deciding how much custom engineering is required for a given AI use case, ranging from pure off-the-shelf adoption to fully bespoke development.
- **Bland AI**: A third-party platform for designing and deploying voice agents, cited as an example of useful but limited off-the-shelf tooling.

---

## Summary

The core message of this talk is that while voice agent technology has matured to the point where genuinely useful, production-grade applications are now achievable, building a reliable voice agent for a real enterprise use case requires substantial custom engineering far beyond what any off-the-shelf tool currently provides. The team's experience building an AI-powered interview agent — used to conduct hundreds of simultaneous employee interviews for consulting engagements — illustrates that the central engineering challenges are not in the underlying model capabilities, but in controlling agent behavior through multi-agent orchestration, handling the unpredictability of real human interactions, and constructing meaningful evaluation frameworks for inherently subjective, open-ended conversations. The speakers argue that voice is a uniquely powerful modality for data collection precisely because it is faster, more natural, and more scalable than human-led alternatives, and that these properties make it well-suited for a growing range of enterprise applications — from call center automation to field technician support — provided that transparency (always disclosing AI involvement), careful architecture, and iterative real-world learning are treated as non-negotiable design principles.
