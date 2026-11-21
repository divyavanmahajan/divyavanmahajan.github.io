---
title: "NLP to help pregnant mothers in Kenya"
date: 2021-08-17
show: practical-ai
episode: 145
url: "https://share.transistor.fm/s/9b15e695"
duration_min: 44
hosts: ["Daniel Whitenack"]
guests: ["Jay Patel", "Sathy Rajasekharan"]
description: "Jacaranda Health uses intent classification on free SMS questions from pregnant mothers to surface danger signs fast, and finds the integration glue matters more than the model."
tags: ["nlp", "global-health", "intent-classification", "sms", "human-in-the-loop", "data-labeling"]
source_transcript: "practical-ai/episodes/2021/08/2021-08-17-nlp-to-help-pregnant-mothers-in-kenya.md"
draft: false
---

## Thesis

Jay Patel and Sathy Rajasekharan of Jacaranda Health, a Kenyan nonprofit, describe how a free two-way SMS service for pregnant mothers produced so many questions that they needed NLP to triage them. Their argument is that an off-the-shelf model was only a small part of the work: labelling, workflow integration, help desk buy-in and feedback loops are where the effort and the value sit.

## Key points

- **Accidental demand.** Rajasekharan says two-way messaging was opened by accident when the service launched with 200 mothers; it now enrols close to 100,000 per month, and more than half of users have feature phones, per Patel. A first-in, first-out queue would bury the one or two serious messages, such as bleeding, in every 30.
- **Model choice and labelling.** Patel tested Dialogflow and the Google, Amazon and Microsoft NLP services, picked Google, and trained on about 13,000 hand-labelled questions run through a translator, settling on 33 intents. A second round used an outsourced team to label 100,000 questions with stricter training to reduce subjectivity.
- **Glue over models.** Patel explains the pipeline: RapidPro handles SMS traffic, a ticketing tool serves the help desk, and the translator plus classifier sit in between via APIs. Rajasekharan says this glue is the real innovation.
- **Mixed languages.** Patel reports 60-70% of messages are in Swahili mixed with English and Sheng slang; translations come out garbled, yet accuracy is about 87% overall and low-to-mid 90s for danger signs.
- **Automation with humans in the loop.** About 30% of questions may be danger signs and 3-5% are confirmed. Patel says replacing a menu reply (3% response rate) with a targeted answer plus a follow-up check raised responses to about 45%; agents now correct wrong intents in the ticketing tool to feed retraining.
- **Privacy and next steps.** Patel collects minimal data (no names or ages); Rajasekharan says consent and explaining model use to government partners remain open problems, and the team is exploring predictive risk models, voice and a personal health record.

## Quotes

> "it should have been obvious in retrospect that moms and probably everyone else hates interacting with menus." — Jay Patel

> "the glue that holds all this together is really where all the hard work and iteration and innovation came in." — Sathy Rajasekharan
