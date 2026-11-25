---
title: 'The history of servers, the cloud, and what’s next – with Oxide'
description: >-
  Bryan Cantrill traces servers from Sun's dotcom era through AWS and Kubernetes
  to Oxide's rack-scale computer, arguing that constraints drive innovation and
  that LLMs are a useful tool, not a replacement for engineers.
pubDate: '2025-12-17'
show: pragmatic-engineer
url: 'https://newsletter.pragmaticengineer.com/p/the-history-of-servers-the-cloud'
youtube: 'https://www.youtube.com/watch?v=Kn_P9nG0zsA'
durationMin: 99
hosts:
  - Gergely Orosz
guests:
  - Bryan Cantrill
tags:
  - cloud-computing
  - server-hardware
  - on-prem
  - distributed-systems
  - ai-coding
  - engineering-culture
draft: false
---
## Thesis

Oxide co-founder and CTO Bryan Cantrill tells Gergely Orosz that infrastructure history moves in cycles of froth and scarcity, and that the lean years tend to produce the better engineering. He argues that elastic, API-driven infrastructure is the future of all computing, but that companies should be able to buy and own it rather than only rent it, which is why Oxide designed its rack from a clean sheet. On AI, he sees LLMs as a valuable tool that falls well short of replacing engineering judgement and teams.

## Key points

- **The bust beat the boom.** Cantrill says Sun did more interesting technical work after the dotcom crash, when it lost 98% of its value, than during the boom: ZFS, DTrace and the Service Management Facility all came out of 2001-2005, and Solaris was open sourced in 2005.
- **AWS pricing and Kubernetes.** From running Joyent, a public cloud competitor, Cantrill says cloud margins were good and that S3 was effectively funding Amazon's war on retail. He thinks Kubernetes took off from 2015 because customers wanted cloud neutrality and a way out of AWS lock-in.
- **Rent versus own.** Hyperscalers built their own servers rather than buying Dell or Supermicro. Oxide's rack uses a DC bus bar, 32 compute sleds, blind-mated networking and its own Intel Tofino-based switch.
- **Hardware hiring and pay.** Oxide struggled to find electrical engineers willing to work without reference designs, and found them in fields like CT systems at GE Medical. A 2021 blog post on its uniform, transparent salary sharply increased applications.
- **Software and updates.** The stack is open source, from the Hubris OS on the service processor to the Omicron control plane. Cantrill calls live updates of a distributed system across an air gap one of the hardest problems, led by Dave Pacheco.
- **AI at Oxide.** Staff use Claude Code, test generation and document comprehension, but Cantrill says LLMs gave almost no help in hardware bring-up, such as a weeks-long CPU reset bug traced to voltage-regulator firmware.

## Quotes

> "innovation requires some level of desperation that good economic times are – it's kind of hard to summon that desperation sometimes." — Bryan Cantrill

> "So building a board is not an IQ test. It's more, I mean, you need to be intelligent to do it, but intelligence is not enough." — Bryan Cantrill
