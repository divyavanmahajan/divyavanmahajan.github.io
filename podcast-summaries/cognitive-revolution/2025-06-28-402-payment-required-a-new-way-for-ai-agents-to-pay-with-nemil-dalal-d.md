---
title: "402 Payment Required: a New Way for AI Agents to Pay, with Nemil Dalal, Dev Platform Lead @ Coinbase"
date: 2025-06-28
show: cognitive-revolution
url: "https://www.cognitiverevolution.ai/402-payment-required-a-new-way-for-ai-agents-to-pay-with-nemil-dalal-dev-platform-lead-coinbase/"
youtube: "https://www.youtube.com/watch?v=P03BXU0fnMo"
duration_min: 82
hosts: ["Nathan Labenz"]
guests: ["Nemil Dalal"]
description: "Coinbase's Nemil Dalal argues stablecoins on cheap blockchains finally make micropayments workable, and x402 revives the HTTP 402 status code so AI agents can pay for APIs and data."
tags: ["ai-agents", "payments", "stablecoins", "crypto", "agent-economy"]
source_transcript: "cognitive-revolution/episodes/2025/06/2025-06-28-402-payment-required-a-new-way-for-ai-agents-to-pay-with-nemil-dalal-d.md"
draft: false
---

## Thesis

Nemil Dalal, who leads Coinbase Developer Platform, argues that AI agents need money to act as proxies for humans, and that cards are a poor fit. Stablecoins on low-fee blockchains, combined with the x402 open standard built on the long-unused HTTP 402 "Payment Required" code, let any API charge an agent per request. Host Nathan Labenz presses on safety, agent identity and systemic risk.

## Key points

- **Stablecoin basics.** Dalal, who ran USDC at Coinbase as it grew from tens of millions to a billion, explains that issuers hold dollars or short-dated treasuries one-to-one against tokens. Users must trust the issuer, which publishes transparency reports. With about $250 billion in stablecoins earning around 4%, he says issuers already make over 10 billion a year, so low fees are not a subsidy.
- **Why fees fell.** On-chain transactions cost two to five dollars in 2017 and later spiked to one or two hundred; on Base today they cost one or two cents, thanks to Layer 2 and Layer 3 chains. Dalal says Base recently neared 1000 TPS.
- **How x402 works.** An agent requests a resource and gets a 402 with price and network; it signs a USDC transaction and resends the request, and the provider settles after doing the work. Coinbase ships Node.js middleware that is about one line of JavaScript, plus wallet and fiat conversion services. Dalal sees x402 as the payment layer MCP lacks.
- **Keeping agents safe.** Dalal recommends segregated funds, spending limits and a two-of-two multi-sig wallet so a human must co-sign large payments. He expects people to eventually put millions or billions into agents, and links Tyler Cowen's idea of capitalized agents to crypto "slashing".
- **Reputation and systemic risk.** Dalal sees on-chain reputation as a future credit score for agents, and circuit breakers at exchanges such as Uniswap as a defence against flash-crash dynamics. Labenz worries about agents colluding.
- **AI as an oracle.** Responding to Labenz's idea of AI-arbitrated smart contracts, Dalal describes weather-indexed crop insurance from his work with the Gates Foundation, where an AI could check rainfall data and release funds.

## Quotes

> "The secret of stablecoins is that money is often made on the yield itself." — Nemil Dalal

> "I think people are going to put millions, if not billions of dollars, into AI agents over time." — Nemil Dalal
