---
title: "How Linux is built with Greg Kroah-Hartman"
date: 2025-03-19
show: pragmatic-engineer
url: "https://newsletter.pragmaticengineer.com/p/how-linux-is-built-with-greg-kroah"
youtube: "https://www.youtube.com/watch?v=7WbREHtc5sU"
duration_min: 79
hosts: ["Gergely Orosz"]
guests: ["Greg Kroah-Hartman"]
description: "Greg Kroah-Hartman argues that Linux runs on trust between people, a strict nine-week release cycle and companies contributing for selfish reasons, not on project managers or grand plans."
tags: ["linux-kernel", "open-source", "release-management", "rust", "code-review"]
source_transcript: "pragmatic-engineer/episodes/2025/03/2025-03-19-how-linux-is-built-with-greg-kroah-hartman.md"
draft: false
---

## Thesis

Greg Kroah-Hartman, kernel maintainer and Linux Foundation fellow, tells Gergely Orosz that the kernel's process works because of human trust: maintainers accept code from people they expect to stay and fix it. Contributors arrive with finished, working code, so planning happens inside their companies, not in the kernel community. Orosz keeps noting that the conversation returns to people rather than tooling.

## Key points

- **Scale.** Kroah-Hartman puts the kernel at just under 40 million lines, of which the core is about 5%. A server runs about 1.5 million lines, a laptop 2 to 2.5 million and a phone about 4 million, because phone chips are far more complex.
- **How a patch flows.** He walks through a four-line USB serial device-ID patch: emailed to maintainer Johan, applied to his tree, pulled by Kroah-Hartman via a signed pull request, then sent to Linus Torvalds. It took about a week and a half to reach stable kernels. About 4,000 developers and 800 maintainers feed roughly 200 trees, merged daily in Linux Next.
- **Time-based releases.** A two-week merge window is followed by seven weeks of bug fixes only. Kroah-Hartman says a short cycle takes pressure off maintainers to accept unfinished features. He and Sasha Levin ship stable releases weekly and keep one long-term kernel per year for two to six years.
- **Selfish contribution.** He says about 80% of contributors are paid by employers, because adding features is cheaper than writing an operating system. Embedded power-management work later saved data centres money.
- **No project managers.** Kroah-Hartman says project management happens before patches arrive. The community wants working code, not proposals, and maintainership follows the person, not the employer.
- **Rust and LLMs.** The kernel has about 25,000 lines of Rust, mostly bindings plus a crash QR-code generator. He estimates Rust would prevent about half the bugs he has seen, but stresses it is no silver bullet. He sees little impact from LLMs on kernel code.

## Quotes

> "That's our only really rule of kernel development, don't break user space on purpose." — Greg Kroah-Hartman

> "So it turns out everybody contributes in a selfish way. We want to solve my selfish problem. But it turns out everybody has the same problems." — Greg Kroah-Hartman
