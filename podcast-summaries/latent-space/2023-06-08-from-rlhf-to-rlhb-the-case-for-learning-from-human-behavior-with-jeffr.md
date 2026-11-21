---
title: "From RLHF to RLHB: The Case for Learning from Human Behavior - with Jeffrey Wang and Joe Reeve of Amplitude"
date: 2023-06-08
show: latent-space
url: "https://lspace.beehiiv.com/podcast/s/latent_space_the_ai_engineer_podcast/from_rlhf_to_rlhb_the_case_for_learning_from_human_behavior_-_with_jeffrey_wang_and_joe_reeve_of_amplitude"
duration_min: 49
hosts: ["Alessio Fanelli", "swyx"]
guests: ["Jeffrey Wang", "Joe Reeve"]
description: "Amplitude's Jeffrey Wang and Joe Reeve argue that user behavior data, not thumbs-up buttons, is the right signal for improving LLM features, and could train a large behavioral model."
tags: ["product-analytics", "llm-applications", "user-behavior-data", "evaluation", "embeddings"]
source_transcript: "latent-space/episodes/2023/06/2023-06-08-from-rlhf-to-rlhb-the-case-for-learning-from-human-behavior-with-jeffr.md"
draft: false
---

## Thesis

Recorded live at an Amplitude hackathon, co-founder Jeffrey Wang and R&D lead Joe Reeve tell Alessio Fanelli and swyx that product analytics has always been an AI problem. They argue that what users actually do with generated output is a better feedback signal than thumbs-up buttons, and Wang thinks first-party behavior data could one day train a large behavioral model.

## Key points

- **Question to chart.** Reeve describes Amplitude's first LLM feature: type a question, get a chart. A single prompt hallucinated and lost context, so the team split it into about seven sub-queries (chart type, events, name and so on), running on GPT-3.5 Turbo. Traditional ML narrows the context passed in.
- **Behavior over thumbs.** Reeve says many teams are afraid to add thumbs-up buttons because they don't know how to use the feedback. Because chart editing was already instrumented, every parameter a user changes after generation becomes detailed feedback data. swyx compares this to Copilot measuring how long accepted code is retained.
- **Input and output spaces.** Reeve says LLMs are safest with a narrow input and broad output, or a broad input and narrow output. Chat is broad on both sides, which makes it risky for companies that don't sell chat.
- **Prototype big, ship small.** Wang explains that matching a user's intent to the right event was validated with OpenAI in about an hour, then moved to cheaper, faster embeddings. Vector search runs on Postgres with pgvector, which he says works because event taxonomies are only tens of millions of items.
- **Precision and privacy.** Wang argues natural language is a good way to start an analysis, but SQL and code remain more precise. On privacy, the guests say PII is stripped before training and Amplitude uses pseudonymized first-party data that it does not sell.
- **A behavioral model.** Wang sees ChatGPT as proof that large models trained on big datasets learn abstract concepts. A model trained on behavior data might improve churn prediction, explain causal differences between cohorts, or make sense of auto-captured events.

## Quotes

> "I think the future of AI applications and doing really cool things with it will be in the data." — Jeffrey Wang

> "So, uh, yeah, get machines helping humans, not the other way around." — Joe Reeve
