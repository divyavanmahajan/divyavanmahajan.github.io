---
title: "OpenAI’s Michael Bolin on Codex, Harness Engineering, and the Real Future of Coding Agents"
date: 2026-03-17
show: turing-post
url: "https://www.turingpost.com/podcast/s/turing_post/openai_s_michael_bolin_on_codex_harness_engineering_and_the_real_future_of_coding_agents"
duration_min: 22
hosts: ["Ksenia Se"]
guests: ["Michael Bolin"]
description: "Codex lead Michael Bolin says the model dominates, but a small, reliable harness with strong sandboxing is what lets a coding agent run safely and at scale."
tags: ["coding-agents", "harness-engineering", "codex", "sandboxing", "developer-tools", "agents-md"]
source_transcript: "turing-post/episodes/2026/03/2026-03-17-openai-s-michael-bolin-on-codex-harness-engineering-and-the-real-futur.md"
draft: false
---

## Thesis

Michael Bolin, lead for open-source Codex at OpenAI, tells Ksenia Se that the model will dominate the coding-agent experience. The harness, or agent loop, still matters: it has to expose the model's intelligence safely on a user's machine. His team's approach is to keep the harness small, offer a few powerful tools, and rely on sandboxing rather than constant human check-ins.

## Key points

- **What a harness is.** Bolin describes the agent loop as the part that samples the model with context and available tools, executes the resulting tool calls and returns the output.
- **Security is not safety.** Codex sandboxes commands with Seatbelt on macOS, Bubblewrap, seccomp and Landlock on Linux, and a custom-built sandbox on Windows. Bolin calls this security; in his framing, safety means the model deciding which tool calls are appropriate, so a fork running another model loses that layer.
- **Growth and the app.** Usage is up roughly 5x since the start of the year. Bolin says growth took off after the GPT-5 CLI refresh in August, VS Code then overtook the CLI, and the Codex app is a "mission control" for running many conversations in parallel. He keeps about five clones of the Codex repo going at once.
- **Repos for agents.** Agent-first work makes long-neglected practices such as documentation, tests and well-named files clearly worth doing. Codex's own agents.md is modest by design, because the team is "AGI-pilled" and lets the agent read the code and decide.
- **Small harness, few tools.** Codex has no dedicated file-reading tool; it gets a terminal and uses cat or sed. Rather than adding context-management tricks, the team nudges the model to write huge outputs to a file and grep them.
- **What comes next.** For the coding tasks his team focuses on, Bolin sees sandboxing as largely replacing the human in the loop, with corrections moving into training. Open fronts include harness reliability, multi-agent setups and memory.

## Quotes

> "this is like a new inner loop that I think we're all kind of figuring out how to optimize" — Michael Bolin

> "sandboxing is really the main thing, like is, is the replacement for human in, in the loop for a lot of the stuff." — Michael Bolin
