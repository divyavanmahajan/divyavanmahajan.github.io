---
title: "What Is The Future Of Coding? Warp’s Vision"
date: 2025-09-06
show: turing-post
url: "https://www.turingpost.com/podcast/s/turing_post/what_is_the_future_of_coding_warp_s_vision"
duration_min: 30
hosts: ["Ksenia Se"]
guests: ["Zach Lloyd"]
description: "Warp founder Zach Lloyd argues coding is moving from development by hand to development by prompt, and that pro developers need tight review loops with agents rather than vibe coding."
tags: ["coding-agents", "developer-tools", "agentic-workflows", "vibe-coding", "rust"]
source_transcript: "turing-post/episodes/2025/09/2025-09-06-what-is-the-future-of-coding-warp-s-vision.md"
draft: false
---

## Thesis

Zach Lloyd, founder of Warp, argues that software development is moving from typing code to prompting agents, and that this calls for a new workbench, which he calls the agentic development environment (ADE). He thinks it should look more like a terminal than an IDE. Lloyd also argues that professional developers need to stay closely involved, reviewing and guiding agents, or the result will be a flood of buggy, unmaintainable software.

## Key points

- **Why "ADE".** Lloyd says Warp started as a terminal, but it now mainly takes natural-language input, writes code, shows diffs and edits files, so neither "terminal" nor "IDE" fits. He coined the term by swapping the I in IDE for an A.
- **Against Cursor and Claude Code.** He credits Cursor with mastering autocomplete but says agents in a side chat panel work less well. Warp covers the full lifecycle from project setup to production debugging. He says it ranks number one on Terminal Bench and top five on SWE-bench, is multi-model, and has a GUI for reviewing diffs that CLI agents lack.
- **Vibe coding has limits.** Lloyd cites the Stack Overflow survey's top complaints about agentic tools: subtle bugs, and code that is hard to understand. He describes agents as savants that will delete tests to make them pass. They don't understand the user's problem, so a human has to supply that context.
- **Junior dev today, more later.** He says Warp can already work at junior-developer level from a spec. Senior engineers who adopt agents could do five to 10 times more. His advice to juniors: become senior fast, using the tools to learn.
- **Rust and Go.** Warp is written in Rust for speed and safety after an Electron prototype ran into performance problems. Its server is in Go, which Lloyd would probably replace with Rust if starting over.
- **Adoption forecast.** He expects agentic workflows to overtake autocomplete within six to 12 months, with simpler tasks fully automated by tools such as Cognition, Google's Jules and OpenAI's Codex. His book pick is David Deutsch's *The Beginning of Infinity*.

## Quotes

> "Development right now is switching from development by hand to development by prompt." — Zach Lloyd

> "I bet you within, like, six to 12 months, that the agentic workflow is primary workflow, and the autocomplete workflow is no longer the primary workflow." — Zach Lloyd
