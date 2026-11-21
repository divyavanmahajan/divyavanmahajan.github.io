---
title: "Why AI Compute Comes in Rectangles — Erik Bernhardsson, Modal CEO"
date: 2026-10-22
show: latent-space
url: "https://www.latent.space/p/modal-d"
duration_min: 86
hosts: ["Alessio Fanelli", "swyx"]
guests: ["Erik Bernhardsson"]
description: "Modal's CEO explains why GPU capacity is sold in rigid three-year blocks, how Modal resells it flexibly, and why sandboxes grew into a third of its revenue."
tags: ["gpu-capacity", "ai-infrastructure", "sandboxes", "serverless", "neoclouds"]
source_transcript: "latent-space/episodes/2026/10/2026-10-22-why-ai-compute-comes-in-rectangles-erik-bernhardsson-modal-ceo.md"
draft: false
---

## Thesis

Erik Bernhardsson, co-founder and CEO of Modal, argues that GPU supply today is sold as rigid "rectangles", fixed blocks on three-year terms, while real workloads are bursty. Modal's business is to aggregate that capacity across thousands of customers and slice it out granularly. He buys capacity aggressively but will not try to corner the market, and worries more about GPU prices collapsing than rising.

## Key points

- **Origins.** Bernhardsson built Spotify's first music recommendation system over seven years and was CTO of Better.com for five. Modal self-funded until a seed round in early 2022; revenue went from about $100 a month in November 2022 to about $30,000 in January 2023, driven by Stable Diffusion workloads. He estimates Modal has grown at least 50x since its last Latent Space appearance.
- **Capacity has become finance.** Until late last year most capacity was spot or one-year reservations. Now Modal works with almost 25 clouds, signs three-plus-year deals with upfront payments, and has four people procuring capacity full-time plus about ten engineers managing bare metal. He cites the Hunt brothers' silver failure as a warning against cornering markets.
- **Two products.** Modal Functions, launched in 2021, is about two-thirds of revenue and mostly inference. Sandboxes, nearly shut down after a slow start, are now a third of revenue and growing about 30% a month, driven by vibe-coding companies like Lovable, Ramp's background agents and RL at neo labs.
- **Ephemeral sandboxes.** Bernhardsson says the median Modal sandbox runs about eight seconds. He expects agents to snapshot, fork and spin up sandboxes per command, for example running every CI test in its own sandbox.
- **Security after Hugging Face.** He says the agents in the Hugging Face incident exploited a customer app deployed on Modal, not Modal itself. Modal is now considering stricter defaults and uses agents internally to try to escape its sandboxes.
- **Agents as users.** Agents keep writing old Modal syntax from training data, so Modal deprecates features more cautiously and benchmarks whether agents recommend it.

## Quotes

> "almost all the things that make developer experience good also makes the agent experience good" — Erik Bernhardsson

> "almost all capacity is sold as three years, as a three-year rectangle starting three to six months in the future. That's not what demand looks like for most users." — Erik Bernhardsson
