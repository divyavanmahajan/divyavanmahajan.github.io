---
title: "The Busy Person's Intro to Finetuning & Open Source AI - Wing Lian, Axolotl"
date: 2023-12-08
show: latent-space
url: "https://lspace.beehiiv.com/podcast/s/latent_space_the_ai_engineer_podcast/the_busy_person_s_intro_to_finetuning_open_source_ai_-_wing_lian_axolotl"
duration_min: 64
hosts: ["Alessio Fanelli", "swyx"]
guests: ["Wing Lian"]
description: "Fine-tuning open models should be as simple as flipping config switches, and Axolotl packages the community's datasets, efficiency tricks and hard-won validation rules to make it so."
tags: ["fine-tuning", "open-source-models", "lora", "llm-training", "benchmarks"]
source_transcript: "latent-space/episodes/2023/12/2023-12-08-the-busy-person-s-intro-to-finetuning-open-source-ai-wing-lian-axolotl.md"
draft: false
---

## Thesis

Wing Lian, maintainer of Axolotl and founder of the Open Access AI Collective, explains fine-tuning as turning a general text-completion base model into one that follows instructions or chats. He argues that fine-tuning should be as easy as turning on options in a YAML file, and that Axolotl's value lies in wrapping Hugging Face libraries with tested optimisations and validation rules drawn from the community. Guest co-host Alex adds that open models gained attention after the OpenAI leadership crisis, but warns listeners to treat leaderboards and licences with caution.

## Key points

- **Origin.** Lian started training models while recovering from a skiing injury in March 2023. He wanted YAML configs instead of command-line hyperparameters, and says Axolotl integrated QLoRA seven days after Tim Dettmers announced it.
- **Data curation.** For SlimOrca, Lian says GPT-4 was used to check OpenOrca answers against the original FLAN responses, cutting the set from about 800,000 to 500,000 rows with roughly the same performance on about 30% less data.
- **Cost.** He estimates a fine-tune of Mistral 7B on eight A6000s at about 40 hours, or roughly $500, assuming it works first time. LoRA trains on the order of 1% of parameters; QLoRA quantises weights to 4-bit, which he says costs some quality.
- **Speed-ups.** Sample packing with MultiPack plus FlashAttention can give up to a 20x gain, Lian says. With all optimisations on, he estimates reproducing Alpaca would take about 30 minutes on eight L40s, around $4-5.
- **Evaluation doubts.** Lian mostly agrees that benchmarks are "pretty bogus" because of test-set contamination. Axolotl supports Dharma mini-benchmarks during training, and the hosts note that "vibe checks" and LMSYS Elo rankings fill gaps.
- **Roadmap.** Lian had Mamba fine-tuning working the morning of recording. He plans a plugin system so companies can customise training without forking, and asks for more core contributors.

## Quotes

> "they are taking knowledge that the base model already knows about and presenting it in a way to the model that you're having the model answer" — Wing Lian

> "Like fine tuning should really just be that easy, right?" — Wing Lian
