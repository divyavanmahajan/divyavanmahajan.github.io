---
title: "AI trends: a Latent Space crossover"
date: 2023-06-14
show: practical-ai
episode: 227
url: "https://share.transistor.fm/s/8bb2b368"
duration_min: 60
hosts: ["Daniel Whitenack"]
guests: ["Shawn Wang", "Alessio Fanelli"]
description: "Daniel Whitenack and the Latent Space hosts review their most popular episodes and argue that practical LLM work is shifting from MLOps to prompting, evaluation and AI engineering."
tags: ["llmops", "prompt-engineering", "llm-evaluation", "open-source-models", "low-resource-languages"]
source_transcript: "practical-ai/episodes/2023/06/2023-06-14-ai-trends-a-latent-space-crossover.md"
draft: false
---

## Thesis

In this crossover, Latent Space hosts Shawn Wang (swyx) and Alessio Fanelli interview Daniel Whitenack about the trends behind both shows' favourite episodes. Whitenack argues that data scientists are moving from classic MLOps to a new kind of operations around pre-trained models, built on model selection, prompting, chaining, output control and selective fine-tuning. Wang frames this as the rise of the "AI engineer", a software engineer who specialises in working with AI APIs.

## Key points

- **Prediction Guard.** Whitenack describes his startup as a way to run state-of-the-art models in a compliant way, with layers that structure and validate output, so enterprises can build reliable systems instead of getting "text vomit".
- **Lifecycle beats single models.** Whitenack says the Metaflow episode with Ville Tuulos gets about 30% more listens than any other, which he reads as strong demand for content on versioning, orchestration and deployment. Wang sees MLOps turning into "LLM ops".
- **Evaluation is unsettled.** Fanelli points to the Replit episode with Reza Shabani and to Jonathan Frankle (MosaicML), who noted that benchmarks are mostly multiple choice while production work is open-ended generation. Whitenack mentions model-based evaluators such as Unbabel's Comet.
- **Low-resource languages.** Whitenack worries about stacking models on model-generated data (Wang's "mode collapse" concern), but expects more multilingual foundation data and grassroots groups like Masakhane to help. He says data his SIL team built with Masakhane and Coqui later ended up in Meta's models.
- **Enterprise reality.** In his workshops, Whitenack finds that most enterprises have not yet integrated LLMs across their stack. He urges them to work through a hierarchy from prompting to data augmentation, fine-tuning and finally training their own models.
- **AI UX.** Wang argues that the last-mile interface matters a great deal, citing the view that ChatGPT was mostly a UX innovation and that GitHub spent six months tuning Copilot's UX. Whitenack gives Gmail's inline autocomplete as an example.

## Quotes

> "I think prompt engineering as like a term is probably too hype. I think engineering and ops around large language models, though, is a real thing." — Daniel Whitenack

> "We are probably using 10% of what is capable in the model. And it takes some ingeniousness to unlock that." — Shawn Wang
