---
title: 'Open Operator, Serverless Browsers and the Future of Computer-Using Agents'
description: >-
  Browserbase founder Paul Klein argues that headless browsers are a core
  infrastructure primitive for AI agents, and that agent authentication, not
  CAPTCHAs, is the real barrier.
pubDate: '2025-02-28'
show: latent-space
url: >-
  https://lspace.beehiiv.com/podcast/s/latent_space_the_ai_engineer_podcast/open_operator_serverless_browsers_and_the_future_of_computer-using_agents
durationMin: 62
hosts:
  - Alessio Fanelli
  - swyx
guests:
  - Paul Klein
tags:
  - browser-automation
  - agents
  - infrastructure
  - computer-use
  - authentication
draft: false
---
## Thesis

Paul Klein, solo founder and CEO of Browserbase, argues that running browsers in the cloud is a hard, stateful infrastructure problem that deserves its own dedicated provider, and that the future of software is software that operates other software on the user's behalf. He sees CAPTCHA solving as a short-term problem and expects OAuth-like agent authentication to decide which bots are welcome.

## Key points

- **Why browsers are hard to host.** Klein walks through the path from Lambda (Chrome is over 250 MB and slow on one vCPU) to EC2 to Kubernetes. Browserbase left ECS and Fargate for Firecracker VMs because an infrastructure company needs control of its critical path.
- **Proxies and CAPTCHAs.** Browserbase does not own proxies; it routes across audited providers and integrates CAPTCHA solvers, limiting some solving to certain plans to avoid abuse.
- **Agent auth.** Klein expects a login-as-agent flow with scoped approval, for example letting an agent book on Airbnb but not message anyone. swyx suggests pairing every human token with a separate agent token.
- **Stagehand and Open Operator.** Stagehand is an MIT-licensed superset of Playwright with three natural-language APIs: act, extract and observe. Open Operator is a reference agent loop built on Stagehand and the live-view iframe, not a product.
- **Use cases.** Most usage is browser automation, not scraping; Klein recommends a waterfall of curl, then a scraping API, then Browserbase. He cites Beni, which files food-stamp rebate receipts with hard-coded scripts.
- **Browser versus full OS.** He claims browsers deliver about 90% of the needed functionality at 10% of the cost of running a full operating system, while legacy Windows software still needs services like Pig.dev.

## Quotes

> "I actually think that auth is the biggest thing that will prevent agents from accessing stuff, not CAPTCHAs." — Paul Klein

> "And do we really need to run an entire operating system just to control a browser? I don't think that's necessary." — Paul Klein
