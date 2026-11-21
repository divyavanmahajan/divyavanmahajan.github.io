---
title: "#168 – Silvio Micali: Cryptocurrency, Blockchain, Algorand, Bitcoin, and Ethereum"
date: 2021-03-15
show: lex-fridman
episode: 168
url: "https://lexfridman.com/silvio-micali/"
youtube: "https://www.youtube.com/watch?v=zNdhgOk4-fE"
duration_min: 121
hosts: ["Lex Fridman"]
guests: ["Silvio Micali"]
description: "Turing Award winner Silvio Micali argues that a blockchain can be scalable, secure and decentralized at once if random cryptographic lotteries, not miners or delegates, choose who adds each block."
tags: ["blockchain", "cryptocurrency", "cryptography", "decentralization", "mechanism-design"]
source_transcript: "lex-fridman/episodes/2021/03/2021-03-15-silvio-micali-cryptocurrency-blockchain-algorand-bitcoin-and-ethereum.md"
draft: false
---

## Thesis

Silvio Micali, MIT cryptographer, Turing Award winner and founder of Algorand (2017), tells Lex Fridman that a blockchain is a shared ledger that creates common knowledge, and that the hard problem is deciding who writes the next page. He argues Algorand's random, self-selected committees break the claimed trilemma between scalability, security and decentralization. The second half covers one-way functions, pseudorandomness, zero-knowledge proofs and mechanism design.

## Key points

- **Money as shared belief.** Micali calls money a social construct: even sheep or gold only hold value because people believe others will accept them. Scarcity helps acceptance but is not strictly necessary.
- **Critique of proof of work and delegated stake.** He says Bitcoin's one block every 10 minutes is too slow, and mining costs have left two or three pools able to control the chain. Delegated proof of stake with 21 block producers is, in his view, still centralized.
- **Algorand's lottery.** Each of about 10 billion tokens runs a private cryptographic lottery taking roughly a microsecond; about 1,000 winners vote on the next block. An attacker cannot know whom to corrupt until winners have already spoken, so security rests on the majority of the whole economy being honest.
- **Bitcoin, Ethereum and NFTs.** Micali credits Bitcoin with spotting the need for a cryptocurrency and serving as a store of value, and Ethereum with seeing smart contracts as the next step, citing six percent of world GDP lost to financial friction. He thinks both lack scalability, and expects several interoperable chains rather than a single winner.
- **Governance and leadership.** He argues fixed "code is law" systems will fail; Algorand upgrades need about 90 percent of stake to agree. His model leader is George Washington, who stepped away.
- **Cryptographic foundations.** Micali names the one-way function as the most elegant idea in cryptography, underpinning pseudorandom generators and digital signatures. He also explains interactive and zero-knowledge proofs, which separate verifying a claim from knowing why it is true.

## Quotes

> "leadership ought to be really lead ignite and disappear and if you don't disappear the system is going to die with you" — Silvio Micali

> "so i really felt that limitations are our strength" — Silvio Micali
