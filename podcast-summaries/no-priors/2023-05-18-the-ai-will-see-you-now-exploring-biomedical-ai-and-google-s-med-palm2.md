---
title: "The AI Will See You Now: Exploring Biomedical AI and Google’s Med-PaLM2 With Karan Singhal"
date: 2023-05-18
show: no-priors
episode: 17
url: "https://www.youtube.com/watch?v=MlyxAjuLObc"
youtube: "https://www.youtube.com/watch?v=MlyxAjuLObc"
duration_min: 43
hosts: ["Sarah Guo", "Elad Gil"]
guests: ["Karan Singhal"]
description: "Karan Singhal argues that medical AI like Med-PaLM 2 needs evaluation-first, safety-focused development, and that medicine is a good testbed for alignment problems such as scalable oversight."
tags: ["healthcare-ai", "llm-evaluation", "fine-tuning", "ai-safety", "privacy"]
source_transcript: "no-priors/episodes/2023/05/2023-05-18-the-ai-will-see-you-now-exploring-biomedical-ai-and-google-s-med-palm2.md"
draft: false
---

## Thesis

Karan Singhal, a Google Research engineer who helped lead Med-PaLM, argues that large language models can raise the standard of care, but only with careful, human-led evaluation in real clinical workflows. He sees medicine as a high-stakes setting where alignment problems, such as overseeing models that approach expert level, show up early. Elad Gil and Sarah Guo push for weighing benefits as well as risks, given how weak the status quo often is.

## Key points

- **From PaLM to Med-PaLM 2.** Singhal explains that Med-PaLM took Google's general PaLM model (and the instruction-tuned Flan-PaLM) and aligned it to medicine with instruction prompt tuning, a data-efficient method built on a small set of doctor demonstrations. PaLM 2 added a mixture of training objectives, compute-optimal scaling and more multilingual and code data.
- **Choosing a tuning method.** Singhal's rule of thumb: prompt with three to five examples, prompt-tune or fine-tune with 10 to 50, and fine-tune with more than a hundred if performance matters most. Full pre-training only makes sense with abundant, relevant data and budget.
- **Evaluation gap.** He says earlier models such as Galactica and BioGPT lacked systematic benchmarks and detailed human evaluation, so Med-PaLM was evaluation-forward, with ratings from both physicians and lay people.
- **Where it lands first.** Singhal expects general models to handle documentation and billing (for example through Epic partnerships), while specialised models fit higher-stakes physician-assistant work like helping radiologists write reports. Gil notes that healthcare is about 20% of GDP and asks why so many startups focus on drug discovery; Singhal says that path has a safer, established playbook.
- **Privacy.** Singhal notes that Med-PaLM was trained without patient health information. He doubts federated learning will drive the biggest advances soon and points to redaction and trusted execution environments instead. Gil argues HIPAA, now almost 30 years old, sometimes works against patients.
- **Scalable oversight.** As models near physician-level answers, Singhal says it gets hard to tell models and doctors apart. He lists self-critique, debate and AI-assisted supervision as approaches, and says the problem is unsolved.

## Quotes

> "At the same time, I think it's useful to recognize that people are searching for health information online and indecision is a decision as well." — Karan Singhal

> "Think about just the improvement from Med-PaLM 1, GPT-4, Med-PaLM 2 in three months. It's absolutely crazy." — Karan Singhal
