---
title: Simon Willison on AI Coding Agents and Weird Software
description: >-
  Simon Willison argues that coding agents have made software so cheap to build
  that developers should aim higher and build weirder, more personal things,
  while still understanding how the stack works.
pubDate: '2026-11-19'
show: turing-post
url: >-
  https://www.turingpost.com/p/simon-willison-on-ai-agents-the-future-of-software-and-why-we-should-build-weirder-things
youtube: 'https://www.youtube.com/watch?v=9C8JZTmpbE4'
hosts:
  - Ksenia Se
guests:
  - Simon Willison
tags:
  - coding-agents
  - evals
  - prompt-injection
  - data-journalism
  - local-models
  - game-development
draft: false
---
## Thesis

Simon Willison, co-creator of Django and creator of Datasette, argues that coding agents became reliable around November of last year and now let him build in an hour what used to take a week. He thinks that should raise ambitions rather than shrink demand for software, and that people building with AI should "go weird": make personal, niche software that would never have existed otherwise.

## Key points

- **Benchmarks after the pelican.** Willison says his pelican-on-a-bicycle test no longer measures what matters: tool calling and long context. He is trying 3D tasks, such as having Yonkers turn into a giant mech and stomp over Manhattan, and recommends personal benchmarks built for your own tasks, which models can now help design.
- **Harder work, not less.** Agents handle the easy tasks, so every decision left to him is a hard, high-level one. His one trick: every project has to be written up, and he is about five write-ups behind.
- **The lethal trifecta, revisited.** Private data, untrusted instructions and a way to exfiltrate data should add up to disaster. Willison admits frontier models have become much less gullible and he now lets them into his email, but he wants proof: 200,000 failed attacks do not rule out attempt 200,001.
- **Agents that made a game fun.** He asked Opus 5.5 to make one of his games fun. It worked for 12 hours in Claude Code, ran a thousand simulated matches, and succeeded.
- **Journalism and local models.** His goal is for Datasette to play a small part in Pulitzer-winning reporting at a newspaper that cannot afford developers. Local models such as Qwen 3.8 27B, a 17 GB file that runs on his Mac, matter because some journalists cannot risk putting sensitive sources in a data center.
- **Understanding still matters.** Citing Brad Fitzpatrick's chapter in *Coders at Work*, Willison argues that deep knowledge of your stack still helps you use agents well.

## Quotes

> "I thought fun was the last remaining uniquely human trait. Like no machine can make something fun. That's for us. Turns out they can" — Simon Willison

> "you don't have to memorize the trivia, but you do still need to understand it." — Simon Willison
