---
title: "AI Fundamentals: Benchmarks 101"
date: 2023-04-07
show: latent-space
url: "https://lspace.beehiiv.com/podcast/s/latent_space_the_ai_engineer_podcast/ai_fundamentals_benchmarks_101"
duration_min: 51
hosts: ["Alessio Fanelli", "swyx"]
guests: []
description: "Benchmarks shape how language models are built and judged, but each one saturates within a few years and suffers from contamination, bias and reproducibility problems."
tags: ["benchmarks", "llm-evaluation", "mmlu", "data-contamination", "gpt-4"]
source_transcript: "latent-space/episodes/2023/04/2023-04-07-ai-fundamentals-benchmarks-101.md"
draft: false
---

## Thesis

In their first guest-free "AI Fundamentals" episode, swyx and Alessio Fanelli trace AI benchmarks from WordNet in 1985 to Big-Bench in 2022. Their argument is that benchmarks are as influential as data and compute in shaping models, yet each new benchmark is beaten within a few years, and headline scores hide contamination, bias and reproducibility problems. They add that production concerns such as latency and cost are barely measured.

## Key points

- **Metrics and modes.** The hosts explain accuracy, precision, recall and F1 (using a Spotify playlist analogy), Stanford HELM's broader metrics such as calibration, fairness and toxicity, and zero-shot, few-shot and fine-tuned evaluation.
- **A short history.** The hosts walk through WordNet (155,000 words), Penn Treebank, MNIST, the Enron emails, ImageNet and the 2012 AlexNet result (about 15% error against roughly 25% for the runner-up), CIFAR, GLUE and SuperGLUE. The pattern: a dataset seems too hard for machines, then gets solved and replaced.
- **Saturation.** On HellaSwag, scores climbed from a 25% random baseline to 95 for GPT-4. On MMLU's 57 tasks GPT-4 scored 86.4, and the hosts cite author Dan Hendrycks calling it essentially solved. On HumanEval (164 problems), GPT-4 reached 67%.
- **Contamination.** The hosts note GPT-4 scored 30 on AMC 10 but 60 on the harder AMC 12, solved all pre-2021 Codeforces problems but none from 2022 onwards, and was not reported on Big-Bench because it knew that benchmark's canary GUID.
- **Other issues.** Labelling bias in ImageNet, label errors in the iris dataset, ad hoc notebook preprocessing that breaks reproducibility, closed models that outsiders cannot test, and RLHF making GPT-4 overconfident.
- **Production benchmarks.** The hosts argue founders need benchmarks for latency, cost and throughput, and sketch a grid of model size against latency tolerance, from Copilot-style autocomplete to agents allowed to run for an hour.

## Quotes

> "It lasts for five years before it's no longer too hard for machines, and you have to find a new data set" — swyx or Alessio Fanelli (unlabelled transcript)

> "production benchmarking is something that doesn't really exist today" — swyx or Alessio Fanelli (unlabelled transcript)
