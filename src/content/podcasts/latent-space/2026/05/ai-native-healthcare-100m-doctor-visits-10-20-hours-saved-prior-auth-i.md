---
title: >-
  AI-Native Healthcare: 100M Doctor Visits, 10–20 Hours Saved, Prior Auth in
  Minutes — Janie Lee & Chai Asawa, Abridge
description: >-
  Abridge's Janie Lee and Chai Asawa argue the doctor-patient conversation is
  healthcare's key workflow, and that ambient AI with full context can move from
  note-taking to real-time decisions.
pubDate: '2026-05-14'
show: latent-space
url: >-
  https://lspace.beehiiv.com/podcast/s/latent_space_the_ai_engineer_podcast/ai-native_healthcare_100m_doctor_visits_10_20_hours_saved_prior_auth_in_minutes_janie_lee_chai_asawa_abridge
durationMin: 65
hosts:
  - Alessio Fanelli
  - swyx
guests:
  - Janie Lee
  - Chai Asawa
tags:
  - healthcare-ai
  - ambient-ai
  - clinical-decision-support
  - evals
  - context-engineering
draft: false
---
## Thesis

In a Latent Space and Unsupervised Learning crossover, Janie Lee and Chai Asawa of Abridge argue that almost everything in healthcare, from claims to treatment, derives from the conversation between patient and clinician. Abridge started with ambient documentation and is expanding into a "clinical intelligence layer" that uses patient records, payer rules and literature to act before, during and after a visit. Their view is that the high stakes of healthcare will force some of AI's hardest problems to be solved there first.

## Key points

- **From saving time to saving lives.** Lee says clinicians spend 10 to 20 hours a week on documentation, often after hours ("pajama time"). Abridge's next acts are helping health systems save and make money, then improving patient outcomes.
- **Proactive, not alerting.** Lee notes that over 90% of healthcare alerts are ignored. Her prior-authorization example: telling a doctor which two of an Aetna plan's six criteria for a knee MRI are still unmet before the patient leaves, so approval takes minutes rather than weeks.
- **Context is king.** Asawa, formerly at Glean, calls Abridge a healthcare-coded Glean, but says the downside risk is far higher. Real-time use forces trade-offs between quality, latency and cost, handled with cheap triage models and hand-offs to larger ones.
- **Proprietary data.** Abridge has close to 100 million medical conversations, which Asawa describes as traces of where "debugging happens in healthcare". It uses them to post-train cheaper transcription and note models, while frontier models handle general knowledge. He treats the EHR like a file system for coding agents.
- **Personalisation and evals.** Personalisation happens at the individual, specialty and health-system levels. Evals combine clinician reviews (an internal "look at the data" process), calibrated LLM judges, third-party evaluators and progressive rollouts, and clinician-scientists are embedded in teams. PHI is removed by de-identification models before data is used.
- **Writing still matters.** Lee pushes back on "PRDs are dead": prototypes miss implementation, compliance and strategy questions at large health systems. Asawa cites FDA clinical decision support guidance from January as a regulatory tailwind.

## Quotes

> "One thing we like to say is we want our product to feel like air conditioning." — Janie Lee

> "you have amazing models, but, like, context is king. Context is what actually puts them to work." — Chai Asawa
