---
title: "Why Google failed to make GPT-3 + why Multimodal Agents are the path to AGI — with David Luan of Adept"
date: 2024-03-22
show: latent-space
url: "https://lspace.beehiiv.com/podcast/s/latent_space_the_ai_engineer_podcast/why_google_failed_to_make_gpt-3_why_multimodal_agents_are_the_path_to_agi_with_david_luan_of_adept"
duration_min: 42
hosts: ["Alessio Fanelli", "swyx"]
guests: ["David Luan"]
description: "David Luan argues OpenAI beat Google by concentrating compute on big bets, and that reliable multimodal agents trained on knowledge-work data and customer feedback are the path to AGI."
tags: ["ai-agents", "multimodal-models", "openai-history", "enterprise-ai", "adept"]
source_transcript: "latent-space/episodes/2024/03/2024-03-22-why-google-failed-to-make-gpt-3-why-multimodal-agents-are-the-path-to.md"
draft: false
---

## Thesis

Adept CEO David Luan, formerly VP of engineering at OpenAI and a Google Brain lead, argues that OpenAI built GPT-3 first because it concentrated resources on a few large bets while Google spread compute thinly. He defines AGI as a model that can do anything a human can do on a computer, and argues that agents built on fast multimodal models, held to enterprise-grade reliability and improved by customer feedback, are the way to get there.

## Key points

- **Why Google missed GPT-3.** Luan describes Google's "brain credit marketplace", where a large training job meant persuading 19 or 20 colleagues to give up their chips. Had Google given Noam Shazeer half its TPUs, he says, it would have beaten OpenAI.
- **Compute and focus.** He says AI progress in this era is "a story of compute", and that the GPT-2 paper's modelling section was a single paragraph describing a vanilla decoder-only transformer.
- **Agents as behavioural cloners.** LLMs have solved behavioural cloning of what humans already know, he argues; the next step combines that with lessons from RL, such as goals and rewards.
- **Reliability first.** Many agent demos work about 60% of the time, Luan says, but enterprises need several nines. One Adept workflow ends with a physical truck being dispatched. Adept is an enterprise company, does not sell APIs, and was sold out of onboarding capacity for Q1.
- **Knowledge-work training data.** He thinks multimodal models will replace LLMs as the default, and should be trained on charts, tables, invoices, PDFs and UIs rather than natural photos. Adept's Fuyu work targets fast screen understanding and dense OCR.
- **Interfaces and evals.** Luan compares today's agents, which drive the GUI plus APIs, to Windows 3.1 running on top of DOS. Adept builds its evals from tasks customers need but the model cannot yet do.

## Quotes

> "So if you wanna go do a giant job, you gotta go convince, like, nineteen or twenty of your colleagues not to do work." — David Luan

> "enterprises can't use anything that isn't in the nines of reliability." — David Luan
