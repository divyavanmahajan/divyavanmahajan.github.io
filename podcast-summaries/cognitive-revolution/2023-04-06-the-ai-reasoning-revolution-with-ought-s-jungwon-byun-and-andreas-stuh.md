---
title: "The AI Reasoning Revolution with Ought's Jungwon Byun and Andreas Stuhlmüller"
date: 2023-04-06
show: cognitive-revolution
url: "https://www.cognitiverevolution.ai/the-ai-reasoning-revolution-with-oughts-jungwon-byun-and-andreas-stuhlmuller/"
youtube: "https://www.youtube.com/watch?v=eZF7tQSxAeQ"
hosts: ["Nathan Labenz"]
guests: ["Jungwon Byun", "Andreas Stuhlmüller"]
description: "Ought's founders argue AI reasoning should be built from small, human-checkable steps, which they call interpretability by construction, rather than end-to-end optimised models, and show how Elicit applies this."
tags: ["process-supervision", "interpretability", "research-assistants", "task-decomposition", "ai-safety"]
source_transcript: "cognitive-revolution/episodes/2023/04/2023-04-06-the-ai-reasoning-revolution-with-ought-s-jungwon-byun-and-andreas-stuh.md"
draft: false
---

## Thesis

Andreas Stuhlmüller and Jungwon Byun, co-founders of the research lab Ought, argue that machine learning will only help with open-ended thinking if models follow explicit processes that humans can inspect and evaluate. Optimising end to end for outcomes tends to reward answers that merely look good. Their product Elicit, a research assistant for literature review, applies this "interpretability by construction" approach. Byun says it is also groundwork for a longer roadmap.

## Key points

- **Why reasoning is hard for ML.** Stuhlmüller says AI exceeds humans mainly where reinforcement learning has a clear objective, such as Go. Good decisions have no such objective, so systems risk optimising the proxy "does it look persuasive".
- **Lessons from human experiments.** Before GPT-2, Ought ran "relay programming" and summary-checking experiments in which each person had about a minute and little context. Stuhlmüller notes that errors compound: with a 10% error rate per subtask, 20 chained tasks almost certainly fail somewhere. Error correction therefore has to outpace error introduction.
- **Process over chain of thought.** Byun contrasts after-the-fact explanations, which a model can rationalise, with workflows whose steps are fixed in advance. Elicit's trustworthiness checklist (sample size, funding conflicts, controls) gives researchers the parts of a judgement instead of one score that could be gamed.
- **Models and costs.** Stuhlmüller says Ought moved much of its work from the OpenAI API to a fine-tuned Flan-T5 XXL (11 billion parameters) because serving roughly 250,000 users got expensive. Training uses a constitutional-AI-style setup in which a large model grades outputs against a rubric.
- **Roadmap.** Byun describes three phases: discover what is known, discover what is unknown, and decide in the face of the unknowable. A "list of entities" workflow is next. She says the models still cannot decompose tasks reliably or notice dead ends.
- **Safety outlook.** Both report deep uncertainty. Stuhlmüller notes that the big labs call process supervision a core alignment bet but have not invested in it at anything like the scale of model scaling.

## Quotes

> "stop making bigger models, just make them hallucinate less." — Andreas Stuhlmüller

> "Do it in pieces first, then you can collapse it." — Jungwon Byun
