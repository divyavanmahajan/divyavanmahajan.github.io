---
title: "Google’s Med-PaLM and Med-PaLM2 with Vivek Natarajan"
date: 2023-05-21
show: cognitive-revolution
url: "https://www.cognitiverevolution.ai/googles-med-palm-and-med-palm2-with-vivek-natarajan/"
youtube: "https://www.youtube.com/watch?v=nPBd7i5tnEE"
hosts: ["Nathan Labenz"]
guests: ["Vivek Natarajan"]
description: "Vivek Natarajan argues that medical exam benchmarks understate the gaps in general LLMs, and that domain specialisation plus multi-axis expert evaluation is what makes models like Med-PaLM 2 useful."
tags: ["healthcare-ai", "llm-evaluation", "fine-tuning", "benchmarks", "google"]
source_transcript: "cognitive-revolution/episodes/2023/05/2023-05-21-google-s-med-palm-and-med-palm2-with-vivek-natarajan.md"
draft: false
---

## Thesis

Google researcher Vivek Natarajan, a lead author on the Med-PaLM papers, argues that high scores on USMLE-style questions are a weak proxy for real-world medical usefulness. Specialising a general model for medicine, and evaluating it with physicians and lay users across axes such as factuality, harm and reasoning, exposes gaps that benchmarks hide. Nathan Labenz traces how quickly the field moved, from 33.3% on these questions in December 2020 to Med-PaLM 2's 86.5%.

## Key points

- **Benchmarks are not utility.** Natarajan says Flan-PaLM reached state of the art on USMLE-style questions, yet physician and lay evaluations found gaps in factuality, bias, reasoning, recall and helpfulness. The dataset is representative questions, not the real exam.
- **Soft prompts, little data.** For Med-PaLM the team assumed medical knowledge was already in the weights and used instruction prompt tuning: a frozen Flan-PaLM plus a learned prefix of about 1 million parameters, trained on examples in the "low triple digits", to teach clinical style such as hedging uncertainty.
- **Med-PaLM 2 switched methods.** With the more compute-efficient PaLM 2 base, the team moved to full end-to-end fine-tuning on mostly public datasets plus a few hundred expert demonstrations. Natarajan reports roughly a 9x improvement on measures of correct versus incorrect medical reasoning after fine-tuning, and contamination checks finding under 10% overlap for most datasets.
- **Preferred to physicians, with caveats.** Labenz highlights that raters preferred Med-PaLM 2 to physician answers on 8 of 9 dimensions. Natarajan cautions that physicians write tersely under time pressure and that the models are not ready for autonomous use, though they could already augment clinicians.
- **Access and commercialisation.** Natarajan, who grew up in parts of rural India with poor access to doctors, describes the goal of a world-class pocket general practitioner. Google offers Med-PaLM to trusted testers on Google Cloud; he expects documentation workflows to move fastest and is unsure about direct-to-consumer use.
- **Multimodal next.** He expects multimodal medical models, but says vision models still lag language models for reading scans.

## Quotes

> "And I think one of the most interesting trends that maybe people don't appreciate enough is biology and medicine is kind of the largest data generating flywheel on Earth today." — Vivek Natarajan

> "these models are simultaneously smarter than us and dumber than us. And I think that just is because this is a different kind of intelligence." — Vivek Natarajan
