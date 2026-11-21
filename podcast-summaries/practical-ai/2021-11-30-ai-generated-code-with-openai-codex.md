---
title: "AI-generated code with OpenAI Codex"
date: 2021-11-30
show: practical-ai
episode: 159
url: "https://share.transistor.fm/s/7c0d66df"
duration_min: 47
hosts: ["Chris Benson", "Daniel Whitenack"]
guests: ["Natalie Pistunovich"]
description: "Codex, the model behind GitHub Copilot, acts like a fast pair programmer for code, tests and documentation, but still cannot produce valid configuration, keys or infrastructure values."
tags: ["openai-codex", "github-copilot", "ai-assisted-coding", "golang", "mlops"]
source_transcript: "practical-ai/episodes/2021/11/2021-11-30-ai-generated-code-with-openai-codex.md"
draft: false
---

## Thesis

Natalie Pistunovich, an OpenAI ambassador and developer advocate at Aerospike, argues that Codex turns coding into a conversation with a machine pair programmer: it writes library calls, tests, refactors and explanations in seconds. She sees AI becoming a third layer of the stack next to front end and back end, and argues that Go suits the infrastructure that serves models. Configuration and infrastructure work, she says, will stay manual for a while.

## Key points

- **What Codex is.** Pistunovich explains that Codex powers GitHub Copilot (a VS Code plugin), is trained to translate natural language into code across 10 to 15 languages, performs best in Python and also handles Go and shell scripts.
- **Workflow change.** She describes asking Copilot to use an Aerospike Go client and getting working code in about three seconds, plus unit tests, alternative implementations, refactoring and "explain this code" for unfamiliar or old code. Whitenack shows simple Python and data frame examples.
- **Limits.** Asked to generate an SSH key, Codex produces one with the right length and characters that is not valid, so Pistunovich expects configuration and monitoring to remain human work.
- **Training data questions.** Whitenack asks about the quality and licensing of open source training code; Pistunovich says it was trained on public, licensed code and that no figure exists for the ratio of good to bad code. Benson argues open source tends to be better than closed source.
- **Go for ML infrastructure.** Pistunovich and Whitenack advocate experimenting in Python and serving models with Go APIs and pipelines, citing Docker, Kubernetes and Prometheus and the 2015 Google paper on technical debt in ML systems. Pistunovich adds that Go's single style makes generated code indistinguishable from human code.
- **Getting started.** For Python users, Pistunovich suggests asking Codex to rewrite Python into Go, then working through the Tour of Go; both guests mention GopherCon talks in December 2021.

## Quotes

> "So you know that uncanny valley of robots? You're not going to see the uncanny valley of code." — Natalie Pistunovich

> "it can generate a value in the right range. But does that value make sense? That's still to come." — Natalie Pistunovich
