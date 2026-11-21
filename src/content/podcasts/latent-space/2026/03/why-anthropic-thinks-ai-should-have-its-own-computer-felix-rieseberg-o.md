---
title: >-
  Why Anthropic Thinks AI Should Have Its Own Computer — Felix Rieseberg of
  Claude Cowork & Claude Code Desktop
description: >-
  Felix Rieseberg explains Claude Cowork as Claude Code in a local VM, arguing
  agents work best with their own computer next to the user's files and tools
  rather than in the cloud.
pubDate: '2026-03-17'
show: latent-space
url: >-
  https://lspace.beehiiv.com/podcast/s/latent_space_the_ai_engineer_podcast/why_anthropic_thinks_ai_should_have_its_own_computer_felix_rieseberg_of_claude_cowork_claude_code_desktop
durationMin: 87
hosts:
  - Alessio Fanelli
  - swyx
guests:
  - Felix Rieseberg
tags:
  - claude-cowork
  - computer-use
  - sandboxing
  - skills
  - knowledge-work
draft: false
---
## Thesis

Felix Rieseberg, engineering lead for Claude Cowork at Anthropic and creator of Electron, describes Cowork as Claude Code running in a lightweight virtual machine on the user's own computer, with guardrails for non-coding knowledge work. He argues that giving Claude its own computer, placed where the user already works, beats moving everything to the cloud. He also expects much product-specific scaffolding to fade as models improve. swyx demos his own heavy use of Cowork for Latent Space.

## Key points

- **Why a VM.** Inside a Linux VM Claude can install Python or Node.js freely, while strict network and file-system controls protect the host. This avoids constant approval prompts that non-technical users cannot judge, and it works on locked-down corporate laptops. On macOS it uses Apple's Virtualization framework, and on Windows the host compute system behind WSL2.
- **Local over cloud.** Rieseberg thinks Silicon Valley undervalues the local machine. Cloning a user's session to the cloud runs into problems such as banks locking accounts when they see the same login from two places.
- **Cheap execution changes product work.** He says the "ten days" to build Cowork reused many internal prototypes, and that at Anthropic teams now build several candidate versions and pick the best rather than write specs.
- **Skills came from a markdown file.** Skills began when a prototype needed data-warehouse access and the team wrote a markdown file explaining the endpoint instead of a custom tool. Skills are plain files, and plugins share one format across Claude Code and Cowork; separating portable from personal parts of a skill is still unsolved.
- **Evals and scaffolding.** Cowork is evaluated on knowledge work such as finance, legal and personal finance tasks, not coding benchmarks. Rieseberg leans towards giving the model broad, safe capabilities and waiting for the next model rather than building narrow corrections.
- **Jobs and Electron.** He says Anthropic is "deeply worried" about entry-level jobs and cites Waterloo-style internships as a possible model. On Electron, he argues apps bundle Chromium because operating-system web views are still unreliable in 2026.

## Quotes

> "it is quite powerful to give Claude its own computer. That is, like, generally a good idea." — Felix Rieseberg

> "I generally believe that Silicon Valley overall is undervaluing the local computer" — Felix Rieseberg
