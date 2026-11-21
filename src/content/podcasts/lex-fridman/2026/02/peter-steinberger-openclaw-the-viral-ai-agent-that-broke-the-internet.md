---
title: >-
  #491 – OpenClaw: The Viral AI Agent that Broke the Internet – Peter
  Steinberger
description: >-
  Peter Steinberger explains how OpenClaw, a self-modifying personal agent built
  for fun, went viral, and argues that personal agents will replace most apps
  and turn programmers into builders.
pubDate: '2026-02-12'
show: lex-fridman
episode: 491
url: 'https://lexfridman.com/peter-steinberger/'
youtube: 'https://www.youtube.com/watch?v=YFjfBk8HI5o'
durationMin: 206
hosts:
  - Lex Fridman
guests:
  - Peter Steinberger
tags:
  - ai-agents
  - open-source
  - agentic-engineering
  - ai-security
  - coding-agents
draft: false
---
## Thesis

Peter Steinberger, who built PSPDFKit over 13 years and then stepped away from programming, describes how a one-hour prototype became OpenClaw, an open-source personal agent with more than 175,000 GitHub stars. He says it beat better-funded rivals because it was built to be fun and weird, and because the agent knows its own source code and can modify itself. He argues that personal agents will become the operating system, absorbing most apps, and that programmers should see themselves as builders.

## Key points

- **The prototype.** Steinberger first hooked WhatsApp up to the Claude Code CLI in an hour. On a trip to Marrakesh he sent it a voice message it was never built to handle: the agent found the file was Opus audio, converted it with ffmpeg, found an OpenAI key and used curl to transcribe it.
- **Pace and the rename.** He made about 6,600 commits in January while running between four and 10 agents. After Anthropic asked him to change the name, crypto squatters grabbed his accounts within seconds of each rename. For the final switch to OpenClaw he planned in secret and paid 10K for an X business account to claim the handle.
- **Security.** Skills are now scanned through a partnership with VirusTotal. Steinberger warns against weak models such as Haiku or small local models because they are easy to prompt-inject, and recommends keeping the agent on a private network.
- **Agentic engineering.** He skips the boring code, commits straight to main with local CI, and after each feature asks the agent what to refactor. He prefers Codex because it reads a lot of code by default. He calls Opus the best general model and strong at role play, but says it leans more on trial and error.
- **CLIs over MCP.** CLIs can be composed: an agent can filter output with jq instead of filling its context with a large MCP response. He says personal agents could make 80% of apps obsolete, naming MyFitnessPal, Eight Sleep and Sonos.
- **What comes next.** The project costs him 10-20K a month. He is talking to Meta and OpenAI, on condition that OpenClaw stays open source, perhaps on a Chrome/Chromium model. He expects hand-coding to become like knitting.

## Quotes

> "I actually think vibe coding is a slur." — Peter Steinberger

> "I'd much rather read your prompt than what came out." — Peter Steinberger
