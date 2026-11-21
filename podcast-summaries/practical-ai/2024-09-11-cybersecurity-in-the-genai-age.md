---
title: "Cybersecurity in the GenAI age"
date: 2024-09-11
show: practical-ai
episode: 286
url: "https://share.transistor.fm/s/47e8830c"
duration_min: 52
hosts: ["Chris Benson", "Daniel Whitenack"]
guests: ["Dinis Cruz"]
description: "Dinis Cruz argues that GenAI erases the line between code and data, so models should run isolated and read-only, fed only session-specific knowledge, and produce deterministic outputs."
tags: ["cybersecurity", "llm-security", "owasp", "deterministic-ai", "threat-modeling"]
source_transcript: "practical-ai/episodes/2024/09/2024-09-11-cybersecurity-in-the-genai-age.md"
draft: false
---

## Thesis

Dinis Cruz, founder of The Cyber Boardroom and a long-time OWASP contributor, argues that GenAI is the most useful and the most dangerous API an organisation can deploy, because natural language now acts as code. He wants "deterministic GenAI": isolated, read-only models that receive only the knowledge a request needs and return strongly typed outputs. Used this way, he believes AI can tip the balance towards defenders.

## Key points

- **Data is now code.** Cruz says security used to depend on separating code from data, and LLMs remove that separation. He calls this a step backwards that gets too little attention, and handles it by passing validated JSON in and requiring strongly typed JSON out.
- **Treat models as hostile.** Most AI deployments are "ridiculously insecure", he argues. Nobody can rule out hidden backdoors, so models should not learn, should run in isolation, and their outputs should be checked heavily, especially when they can reach internal APIs.
- **Security follows engineering.** From his time as a CISO, Cruz sees cybersecurity as a side effect of engineering and business practices, and he says most companies still cannot measure how prepared they are. He points to the CrowdStrike outage as an example of how far one failure can spread.
- **AI for defence.** He suggests a GenAI layer that checks each code commit for changes to the attack surface, and anomaly models that force attackers to follow the paths real users take. He calls the OWASP Top 10 for LLMs a good roadmap for teams deploying their own models, and argues most organisations should not build models of their own.
- **Use many models.** Cruz combines cheap local models (for example, running on a CPU with Ollama) with expensive frontier models. At The Cyber Boardroom he uses them to tailor security briefings for each executive, which he says used to be impossible at scale.
- **Long-term view.** He expects AI-generated fake news to force better provenance, quotes Kevin Kelly's comparison of AI with electricity, and predicts that systems relying on black boxes will "blow up".

## Quotes

> "Gen AI is an API, right? It's fundamentally an API that you send." — Dinis Cruz

> "every time you have a system that behaves like a black box, you have vulnerabilities" — Dinis Cruz
