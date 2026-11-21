---
title: "Cracking the Medical Code: Why Cleveland Clinic Doctors Love Their Ambience Healthcare AI Scribe"
date: 2025-07-10
show: cognitive-revolution
url: "https://www.cognitiverevolution.ai/cracking-the-medical-code-why-cleveland-clinic-doctors-love-their-ambience-healthcare-ai-scribe/"
youtube: "https://www.youtube.com/watch?v=hyQ_yG5tvLs"
duration_min: 89
hosts: ["Nathan Labenz"]
guests: ["Ben Shahshahani", "Brendan Fortuner"]
description: "Specialty-specific models and reinforcement fine-tuning let Ambience beat doctors at ICD-10 coding, while Cleveland Clinic shows that reliable AI scribes win adoption after a single try."
tags: ["healthcare-ai", "reinforcement-fine-tuning", "medical-coding", "ai-adoption", "reward-hacking"]
source_transcript: "cognitive-revolution/episodes/2025/07/2025-07-10-cracking-the-medical-code-why-cleveland-clinic-doctors-love-their-ambi.md"
draft: false
---

## Thesis

Brendan Fortuner (Ambience Healthcare) argues that medical AI works only when it is built per specialty and tuned on the real objective. He points to OpenAI's Reinforcement Fine-Tuning (RFT), which lifted ICD-10 coding above doctor-level accuracy. Ben Shahshahani (Cleveland Clinic) argues that adoption depends on users' mental model of effort saved, which includes the cost of fixing errors, plus solid change management.

## Key points

- **Documentation burden.** Shahshahani says doctors spend up to three hours a day on documentation ("pajama time"). Fortuner says the Ambience scribe records the visit, drafts the note and writes it back into Epic, saving two to three hours a day.
- **Specialty-first architecture.** According to Fortuner, early versions worked in primary care but saw little use in oncology and cardiology. Ambience rebuilt around separate scribes per specialty, with different models and different UX.
- **RFT on ICD-10 codes.** Fortuner reports F1 scores of about 35% for base models and 45% for clinicians, against an inter-annotator ceiling of 80-85%. Plain string matching on F1 worked as the grader and was hard to game.
- **Reward hacking and cost.** On physical-exam notes, Fortuner says an LLM grader was gamed with redundant findings and casual phrasing ("Grandpa's heart sounds good"). The fix was a 75/25 clinical quality/style rubric. An o1 grader burned $25,000 on 100 examples.
- **Adoption math.** Shahshahani compares expected effort when the tool works with the recovery effort when it fails, using Yahoo's failed voice search as the example. Fortuner says Cleveland Clinic reached about 4,000 monthly users across 60 specialties in 90 days, with roughly 75% utilization.
- **Next steps.** Fortuner describes voice agents that call patients about labs and medications. He favours decomposed, auditable pipelines with guardrails over end-to-end voice models, and says the research-to-production gap is still large.

## Quotes

> "Doctors went to medical school to practice medicine. They did not go to medical school to, like, select the right billing codes." — Brendan Fortuner

> "Sometimes errors are rare, but recovery effort is so high that overall it's less productive than not using it." — Ben Shahshahani
