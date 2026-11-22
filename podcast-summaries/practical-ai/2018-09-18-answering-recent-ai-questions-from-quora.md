---
title: "Answering recent AI questions from Quora"
date: 2018-09-18
show: practical-ai
episode: 13
url: "https://share.transistor.fm/s/8565dc57"
duration_min: 49
hosts: ["Daniel Whitenack"]
guests: ["Wes Jensen", "Peter Ma", "David Ojika", "Vinay Rao", "Osamah Mohammed Ali"]
description: "A panel of Intel AI innovators argues that newcomers need neither a GPU nor a maths PhD to start, and that the hard part of AI is now production and problem definition."
tags: ["machine-learning", "fpga", "edge-computing", "ml-production", "learning-ai"]
source_transcript: "practical-ai/episodes/2018/09/2018-09-18-answering-recent-ai-questions-from-quora.md"
draft: false
---

## Thesis

At O'Reilly AI, Daniel Whitenack puts popular Quora questions to a panel of Intel AI innovators: Vinay Rao (RocketML), Peter Ma (Clean Water AI), David Ojika (University of Florida), and Ali and Wes Jensen (Netrolux). The panel's shared view is that the field has moved from chasing model accuracy to putting models into production, and that beginners can start with pre-trained models, cheap hardware and a problem they care about.

## Key points

- **After 97% accuracy.** Ojika says the next phase is productionising models at the edge and on IoT devices, and points to MLPerf as a benchmarking standard. Rao argues that problems split into sub-problems where accuracy may be much lower, such as self-driving at night.
- **No GPU needed to start.** Ma learned without a GPU, using Intel's AI Academy and pre-trained models. Ali points to smartphone SDKs, Raspberry Pi-class boards and the Movidius stick for under $70. Rao says a forthcoming RocketML and Intel paper shows CPU training beating GPUs.
- **Programmers without maths.** Ali warns that ready-made tools let people start but that they will hit limits without maths. Ma compares the rush to earlier waves in mobile and blockchain. Ojika asks developers where in the stack they want to work.
- **How intelligent is AI?** Ma calls current AI mostly inference, closer to a sensor. Jensen argues vehicles are automated rather than autonomous. Rao cites Andrew Ng's idea that machines can do what takes humans about one second.
- **Classical methods still matter.** Rao and Ali say SVMs, trees and Bayesian methods remain useful; AutoML, which Ojika and Rao describe, automates hyperparameter tuning.
- **Tooling and teams.** Ojika describes Python wrappers around FPGA APIs and Intel's CVSDK/OpenVINO; Ali sees FPGAs and software-defined radio pushing AI to the edge. Rao and Jensen stress multidisciplinary teams and "translators" between engineers and business.

## Quotes

> "Everybody's underestimating the market size." — Vinay Rao

> "Because very soon AI is really going to be a box, essentially." — David Ojika
