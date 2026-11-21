---
title: 'AIUC-1: Building trust in AI agents'
description: >-
  The old flywheel of standards, audits and insurance can unlock enterprise
  adoption of AI agents, provided red teaming tests that controls hold under
  pressure and buyers accept imperfect results.
pubDate: '2026-06-25'
show: practical-ai
episode: 361
url: 'https://share.transistor.fm/s/e039d1ca'
youtube: 'https://www.youtube.com/watch?v=qWey0xdKsC4'
durationMin: 45
hosts:
  - Daniel Whitenack
guests:
  - Emil Lassen
tags:
  - ai-agents
  - ai-security
  - standards
  - red-teaming
  - certification
  - insurance
draft: false
---
## Thesis

Emil Lassen, standards lead at the Artificial Intelligence Underwriting Company (AIUC), argues that agentic AI needs the same trust layer that made electricity and cars acceptable: standards, third-party audits and insurance. AIUC-1 targets the agent layer that ISO 42001 and SOC 2 leave uncovered, and uses repeated red teaming so certification improves security rather than just ticking boxes.

## Key points

- **The flywheel.** Lassen traces the model to Benjamin Franklin's Philadelphia: building codes (standards), fire inspections (audits) and the first mutual insurer. He says car safety standards came from industry, not government, because safer cars sold better.
- **Why vendors certify.** Startups face enterprise questionnaires of around 100 questions that buyers rewrite almost monthly. Lassen says a shared third-party standard speeds deals and gives proof a vendor cannot give itself; clients include ElevenLabs, Fin and UiPath.
- **Three layers.** Organisational (ISO 27001, ISO 42001), infrastructure (SOC 2, pentesting) and agentic. AIUC-1 is prescriptive on scope, tool and data access, hallucinations and change management (swapping the LLM changes behaviour). Six of its 40 mandatory requirements concern red teaming. A consortium of about 250 security leaders updates it quarterly; last quarter's focus was MCP risk.
- **The process.** A gap assessment, then two parallel tracks: an accredited auditor such as Schellman or Coalfire checks policies and technical controls, while AIUC red-teams a representatively configured agent with roughly 1,000 to 5,000 scenarios, escalating from lying to invoking authority to feigned distress. Findings get one to four weeks to fix before a second round; the 60-100 page report is renewed by quarterly retesting.
- **What passing means.** No P0 or P1 findings are allowed; lower-severity results go in the report. Lassen insists no agent will ever score 100%, and that a realistic report is worth more than a spotless one.
- **The doctor analogy.** Whitenack compares a content filter to taking your temperature versus being in a health system. Lassen agrees: quarterly red teaming is the full check-up, runtime monitoring the constant vitals.

## Quotes

> "being a CISO at a company adopting and deploying AI right now feels a little bit like you're in a hailstorm and it's only a matter of time before you're hit" — Emil Lassen

> "no company has ever and will ever pass AAC1 with a 100 pass rate. It doesn't exist here." — Emil Lassen
