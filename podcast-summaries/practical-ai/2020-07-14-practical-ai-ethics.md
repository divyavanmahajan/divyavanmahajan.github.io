---
title: "Practical AI Ethics"
date: 2020-07-14
show: practical-ai
episode: 96
url: "https://share.transistor.fm/s/ecf7df49"
duration_min: 53
hosts: ["Chris Benson", "Daniel Whitenack"]
guests: []
description: "Published AI ethics principles are only the starting line; organisations must map them to policies, governance, compliance checks and developer tooling before they change real outcomes."
tags: ["ai-ethics", "responsible-ai", "ai-governance", "fairness", "privacy"]
source_transcript: "practical-ai/episodes/2020/07/2020-07-14-practical-ai-ethics.md"
draft: false
---

## Thesis

Chris Benson, who leads AI ethics at Lockheed Martin, argues that writing AI principles is the easy, visible part. The real work is pushing those principles down into policies, governance, compliance and the tools and workflows of practitioners who are not ethics experts. Daniel Whitenack adds the practitioner's view: ethical rigour such as traceability also pays off in better engineering.

## Key points

- **Why ethics for deep learning.** Benson notes that today's deep learning systems are non-deterministic and have no awareness of values, so ethics has to be designed in to avoid unexpected outcomes.
- **Designing principles.** Benson recommends a diverse, cross-functional group (product, legal, HR) working through use cases, and tying principles to existing documented values such as HR fairness policies so they feel authentic. Whitenack cites a Chinese Academy of Sciences paper that clustered principles from Google, Microsoft, IBM and others into topics like fairness, transparency, privacy, safety and accountability.
- **Same words, different meanings.** Fairness appears in both Google's and Microsoft's principles, but Benson says each organisation must define it for itself. He uses an intelligence satellite to show how privacy can rank very differently in a defence context than at a consumer tech firm.
- **Governance versus compliance.** Benson separates compliance (checking work against values, ideally automated, for example with Pachyderm data lineage) from governance (handling failures). He works with the US Department of Defense principles: responsible, equitable, traceable, reliable, governable.
- **Accuracy versus ethics.** Whitenack argues that real-world training data is skewed, so maximising test accuracy with sensitive features is not a sufficient goal. His example: a self-driving car trained in Sweden that meets a kangaroo in Australia. He also mentions a Nature paper that raises licensing for AI practitioners.
- **Resources.** Whitenack recommends DrivenData's deon ethics checklist for Python projects. Benson suggests comparing several published principle sets side by side, and Stuart Russell's book "Human Compatible".

## Quotes

> "once you've done your principles, you've basically just gotten to the starting line." — Chris Benson

> "the bottom line is that our real world is broken in many ways, right?" — Daniel Whitenack
