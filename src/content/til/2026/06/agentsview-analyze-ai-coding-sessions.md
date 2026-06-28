---
title: "AgentsView: See Where Your AI Agents Actually Spend Your Money"
description: "A local-first desktop and web app for browsing, searching, and analyzing past AI coding sessions — so you finally know where agents' time and tokens really go."
pubDate: 2026-06-28
tags: ["ai-agents", "productivity", "developer-tools", "claude-code"]
draft: false
---

Today I discovered **AgentsView** ([agentsview.io](https://www.agentsview.io)), a local-first desktop and web app that lets you browse, search, and analyze your past AI coding sessions. It answers the question I always wanted answered: *where are my agents actually spending time and money?*

## The Problem

Once you start running AI coding agents seriously — across multiple projects, models, and tools — you lose visibility fast. You know roughly what you're paying, but not *why*. Which projects burn the most tokens? Which tools get called the most? Which sessions spiral out of control? Without answers, it's hard to optimize or even budget reliably.

## The Solution

AgentsView reads your local session data (no cloud upload required — local-first by design) and gives you a structured view across:

- **Projects** — see token spend and session counts per repo
- **Models** — compare cost and usage across Claude, GPT, Gemini, etc.
- **Tools** — understand which tools (file reads, searches, bash calls) dominate sessions
- **Sessions** — browse and search individual past conversations

It turns raw `.jsonl` logs into something actually navigable and useful for retrospection.

## Why This Matters

As AI-assisted development matures, observability over your agents becomes as important as observability over your production systems. Without it, you're flying blind on cost, efficiency, and where to invest in better tooling or prompting.

AgentsView fills that gap — and because it's local-first, your session data stays on your machine. A rare combination of useful and private.
