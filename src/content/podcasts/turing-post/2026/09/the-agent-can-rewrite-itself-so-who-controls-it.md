---
title: The Agent Can Rewrite Itself. So Who Controls It?
description: >-
  Using Meta's Muse as the example, Ksenia Se argues that agents can be free to
  change what they can do as long as authority over what they may do stays
  outside their reach.
pubDate: '2026-09-13'
show: turing-post
url: >-
  https://www.turingpost.com/podcast/s/turing_post/the_agent_can_rewrite_itself_so_who_controls_it
durationMin: 17
hosts:
  - Ksenia Se
guests: []
tags:
  - agent-security
  - ai-agents
  - least-privilege
  - prompt-injection
  - privacy
draft: false
---
## Thesis

Ksenia Se uses Meta's new personal agent, Muse, to answer the question raised by DeepSeek Harness: if agents can rewrite their own tools, what must they never be able to change? Her answer is that capability can be fluid but authority cannot. Muse may build tools and improvise routes, but permission checks, credentials and taint tracking sit outside the environment it can modify.

## Key points

- **Rogue without the metaphor.** Citing Melanie Mitchell, Se says an agent is still software. What has changed is how much of the route we leave unspecified, so capable systems will find paths their designers did not anticipate.
- **Sentinel outside the workshop.** Each user gets a dedicated cloud VM; Muse lives in a Linux container inside it, where its apparent root maps to an unprivileged host user. Every network request goes through Sentinel, a separate permission system Muse cannot rewrite, so writing a new tool does not grant that tool permission.
- **Surrogate tokens.** Muse only sees placeholders; real credentials are inserted at the network boundary. That stops it leaking keys, though it could still misuse a legitimate connection.
- **Tainted egress.** Processes start clean and are marked tainted by the operating system, using eBPF and security-module hooks, once they read user data. The question becomes whether a program may go online after reading your calendar. The email connector also filters password-reset links, one-time codes and login links, because read access can unlock other systems.
- **Old principles, open problems.** Se links this to Saltzer and Schroeder's 1975 principles of least privilege and complete mediation. Sentinel's classifiers can be wrong, taint tracking is coarse, and permission fatigue is unsolved.
- **Secure from whom?** Meta can currently access data inside the VM under stated conditions. It plans a Muse Confidential Virtual Machine encrypted with a user-controlled key.

## Quotes

> "Authority depends on where information has been, not only which tool is currently being called." — Ksenia Se

> "whenever someone tells you an agent is secure, ask them just this one question: secure from whom?" — Ksenia Se
