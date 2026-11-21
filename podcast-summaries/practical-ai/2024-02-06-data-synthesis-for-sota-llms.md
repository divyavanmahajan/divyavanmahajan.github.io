---
title: "Data synthesis for SOTA LLMs"
date: 2024-02-06
show: practical-ai
episode: 255
url: "https://share.transistor.fm/s/01314cdb"
duration_min: 47
hosts: ["Chris Benson", "Daniel Whitenack"]
guests: ["Karan Malhotra"]
description: "Karan Malhotra explains how Nous Research, a volunteer collective turned company, used synthetic data distilled from larger models to make small open models competitive."
tags: ["synthetic-data", "distillation", "fine-tuning", "open-source-llms", "nous-research"]
source_transcript: "practical-ai/episodes/2024/02/2024-02-06-data-synthesis-for-sota-llms.md"
draft: false
---

## Thesis

Karan Malhotra, co-founder of Nous Research, tells Daniel Whitenack and Chris Benson that synthetic data distilled from stronger models is what lets small, locally run open models compete with much larger closed ones. Nous grew from a few enthusiasts on Discord into a company, and he argues it reflects a wider community push for open, offline AI that people run themselves.

## Key points

- **Origins of Hermes.** Malhotra says the first Hermes model came from following Stanford's Alpaca approach: instruction data generated only with GPT-4, trained on Llama. The two founders "didn't know what benchmarks were", and people accused them of training on benchmarks because it scored so well.
- **Why distillation works.** He describes the members as "GPU poor", working on laptops or a 3090/4090, so the goal was to make 7-billion-parameter models useful on edge devices. A large model acts like an experienced teacher who passes on only what matters.
- **Licensing.** Nous does not profit from models built on GPT-4 outputs, he says, but distilling from a permissively licensed model such as Mistral would allow commercial use. He calls it hypocritical that large companies train on copyrighted data while their terms forbid training on outputs, citing Bard claiming it was made by OpenAI.
- **Model families and structure.** Hermes is led by Technium and moved from the Alpaca format to ChatML; Capybara (Amplify Instruct) and Puffin come from LDJ. Work was split into data synthesis, training, agents and simulation, and the Discord has grown to about 5,000 people with tiered access.
- **Fine-tuning advice.** Malhotra stresses hyperparameters, training longer if not overfitting, and recommends the Axolotl trainer. He suggests inventing new instruction formats, model merging, and DPO, noting users preferred the Nous Hermes Mixtral DPO model over the SFT version.
- **What's next.** After a $5.2 million seed round, he says the focus remains locality and offline use, solving problems at small model sizes before scaling up.

## Quotes

> "If you're not overfitting, like just keep going." — Karan Malhotra

> "We think Axolotl is probably the best general purpose trainer for Loras, QLoras, Fintunes, etc." — Karan Malhotra
