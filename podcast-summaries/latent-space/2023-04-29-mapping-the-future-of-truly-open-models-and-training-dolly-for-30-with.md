---
title: "Mapping the future of *truly* Open Models and Training Dolly for $30 — with Mike Conover of Databricks"
date: 2023-04-29
show: latent-space
url: "https://lspace.beehiiv.com/podcast/s/latent_space_the_ai_engineer_podcast/mapping_the_future_of_truly_open_models_and_training_dolly_for_30_with_mike_conover_of_databricks"
duration_min: 76
hosts: ["Alessio Fanelli", "swyx"]
guests: ["Mike Conover"]
description: "Mike Conover argues that cheap instruction tuning on open, commercially licensed data like Dolly's matters more than owning a foundation model, and that evaluation tooling is the next gap."
tags: ["open-source-models", "instruction-tuning", "databricks", "training-data", "llm-evaluation"]
source_transcript: "latent-space/episodes/2023/04/2023-04-29-mapping-the-future-of-truly-open-models-and-training-dolly-for-30-with.md"
draft: false
---

## Thesis

Databricks engineer Mike Conover argues that a small amount of instruction data can shift an existing open model into very different behaviour, so the real value lies in open, commercially usable datasets rather than in each company training its own foundation model. He sees base models as "stem cells" that fine-tuning specialises, and says the missing piece is tooling to evaluate model behaviour beyond benchmark scores.

## Key points

- **Dolly 1.0 to 2.0 in 19 days.** Conover says Dolly 1.0 (March 24) used the 6-billion-parameter GPT-J because Llama weights were hard to get and he wanted anyone to be able to build it. Dolly 2.0 moved to EleutherAI's 12B Pythia model and replaced ChatGPT-generated Alpaca data with a dataset written by thousands of Databricks employees, using InstructGPT task families, Google Forms and a leaderboard.
- **The $30 training run.** The original Dolly was fine-tuned on 50,000 Alpaca records on a single eight-GPU A100 node in under an hour, which Conover prices at about $30 off-the-rack. He compares the effect to a phase transition.
- **Data shapes behaviour.** Short completions, as in FLAN, produce terse models; long human-written answers (such as how to build a campfire) are needed for narrative responses. Summarisation was the hardest task to collect data for.
- **Benchmarks miss the point.** GPT-J and Dolly scored almost the same on benchmarks while behaving very differently. Conover wants tooling that combines quantitative benchmarks, qualitative sample review and human feedback, and says he would like Databricks to build it.
- **Open data and licensing.** He expects open datasets such as Open Assistant and Dolly to define the next six to nine months, notes the dataset was translated into Spanish and Japanese within 24 hours, and predicts an open Llama clone, helped by Red Pajama's 1.2-trillion-token reproduction, within five months. Clear commercial licensing, he says, explains much of the demand.
- **Old tricks still pay.** Conover thinks classic NLP and supervised learning, such as ticket triage, will remain valuable over the next 18 to 36 months alongside generative models.

## Quotes

> "I think we're five months at most away from a open Llama clone that is as high quality as, as what Meta has produced." — Mike Conover

> "if you have 30 bucks, you can stand this thing up and, um, on a single machine execute this training run" — Mike Conover
