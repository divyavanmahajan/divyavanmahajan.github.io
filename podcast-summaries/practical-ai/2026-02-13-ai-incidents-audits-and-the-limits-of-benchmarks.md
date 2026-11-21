---
title: "AI incidents, audits, and the limits of benchmarks"
date: 2026-02-13
show: practical-ai
episode: 346
url: "https://share.transistor.fm/s/1b8e65f4"
duration_min: 43
hosts: ["Daniel Whitenack", "Chris Benson"]
guests: ["Sean McGregor"]
description: "Sean McGregor argues that AI safety needs incident reporting, third-party audits and checked benchmarks, because general-purpose models break the context-specific way safety has always been assessed."
tags: ["ai-safety", "ai-incidents", "ai-auditing", "benchmarks", "red-teaming"]
source_transcript: "practical-ai/episodes/2026/02/2026-02-13-ai-incidents-audits-and-the-limits-of-benchmarks.md"
draft: false
---

## Thesis

Sean McGregor, founder of the AI Incident Database and co-founder of the AI Verification and Evaluation Research Institute, tells Daniel Whitenack and Chris Benson that general-purpose AI has broken the safety frame. Safety practice assumes a specific context, but frontier models run in every context. He argues for recording incidents, third-party audits and benchmarks that are themselves evaluated before anyone relies on them.

## Key points

- **Incidents as regression tests.** McGregor compares the database to aviation crash records: once harm has happened, you make sure it does not happen again. It holds more than 5,000 human-annotated reports across more than a thousand incident records, and he says many incidents show a stock price impact.
- **From voluntary to mandatory reporting.** Most entries come from journalism. McGregor says voluntary reports can prove that harms exist but not how often they happen, and points to the EU code of practice requirement to report severe incidents, which has not yet been implemented.
- **Why third-party audits.** Using financial audits as an analogy, he says an auditor checks the bank balance rather than trusting the balance sheet. Vendors rarely test a model in a buyer's exact setting, so organisations still need pilots.
- **Benchmarks were built for research.** His BenchRisk work checked benchmarks against a list of failure modes and found mixed results. BBQ, for example, is a useful bias benchmark but cannot show that a model is unbiased in a particular deployment.
- **Statistics at DEF CON.** In the Generative Red Team 2 challenge at DEF CON's AI Village, hackers tried to show that the Allen Institute for AI's 7-billion-parameter open model and its guard model broke their documentation. Judges asked for evidence of systematic failure rather than one lucky prompt. The most exploited weakness was the loosely configured handoff between the guard model and the model behind it.
- **Flaw reporting next.** McGregor wants tools and companies that handle AI flaw reports the way bug bounty programmes handle security bugs.

## Quotes

> "You're building a bridge that needs to bear the weight of all of humanity falling over it." — Sean McGregor

> "the interface between them is very often under tested." — Sean McGregor
