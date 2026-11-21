---
title: "Threat modeling LLM apps"
date: 2024-08-22
show: practical-ai
episode: 283
url: "https://share.transistor.fm/s/6947239f"
duration_min: 55
hosts: ["Daniel Whitenack"]
guests: ["Donato Capitella"]
description: "Donato Capitella argues that LLM security is a property of the use case, not the model, and that output validation, input checks and monitoring matter more than alignment."
tags: ["llm-security", "prompt-injection", "threat-modeling", "guardrails", "ai-agents"]
source_transcript: "practical-ai/episodes/2024/08/2024-08-22-threat-modeling-llm-apps.md"
draft: false
---

## Thesis

Donato Capitella, principal security consultant at WithSecure, argues that asking whether an LLM is "secure" is meaningless; what matters is the threat model of the application built around it. Because prompt injection is an unsolved problem, he treats all LLM output as untrusted and wraps applications in controls at the output, the input and the monitoring layer. Daniel Whitenack adds the guardrail perspective from his work at Prediction Guard.

## Key points

- **Threat model the use case.** Capitella asks what data the LLM can see (the "crown jewels"), what input an attacker controls, and who the victim is. An attacker can only extract what you fed the model.
- **Start with the output.** His LLM application security canvas, unlike the OWASP LLM top 10 list of risks, is a set of controls. He puts output validation first: links, Markdown, HTML and JavaScript can leak user data when rendered. His team showed Google Gemini could be poisoned into offering a fake "Gemini 2.5" upgrade link.
- **Input checks need not use an LLM.** Topical guardrails, length limits, language detection, and old-fashioned checks on email domains or URL reputation. Capitella warns that an LLM-as-judge is itself open to prompt injection; Whitenack favours small NLP classifiers that run fast on CPUs.
- **Agents raise the stakes.** Testing autonomous browser agents, Capitella found that a malicious page could redirect the agent, for example into the user's mailbox. He recommends human approval or downstream checks for tool calls.
- **Monitoring beats filters alone.** Input and output filters may stop 80% of attacks, so applications should send high-fidelity alerts to the SIEM and lock accounts that repeatedly trip controls. For self-hosted models, he says attackers care more about the stored conversation history than the weights.
- **Alignment looks intractable.** With roughly 50,000 tokens and 100,000-token contexts, Capitella argues RLHF covers a tiny part of the space, and expects attention to shift from jailbreaks to application exploits.

## Quotes

> "It would be like asking whether a knife can be used to harm people." — Donato Capitella

> "the first thing we state, we don't trust anything the LLM produces." — Donato Capitella
