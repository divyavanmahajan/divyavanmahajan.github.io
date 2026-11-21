---
title: "Embryology of AI: How Training Data Shapes AI Development w/ Timaeus' Jesse Hoogland & Daniel Murfet"
date: 2025-06-18
show: cognitive-revolution
url: "https://www.cognitiverevolution.ai/embryology-of-ai-how-training-data-shapes-ai-development-w-timaeus-jesse-hoogland-daniel-murfet/"
youtube: "https://www.youtube.com/watch?v=Cy0m-JmR3JQ"
duration_min: 97
hosts: ["Nathan Labenz"]
guests: ["Daniel Murfet", "Jesse Hoogland"]
description: "Timaeus founders argue that training data shapes loss-landscape geometry, which determines how models generalize, and that tracking phase transitions during training could make alignment an engineering discipline."
tags: ["interpretability", "singular-learning-theory", "ai-safety", "generalization", "training-dynamics"]
source_transcript: "cognitive-revolution/episodes/2025/06/2025-06-18-embryology-of-ai-how-training-data-shapes-ai-development-w-timaeus-jes.md"
draft: false
---

## Thesis

Jesse Hoogland and Daniel Murfet, founders of the AI safety nonprofit Timaeus, argue that singular learning theory (SLT) offers a principled way to connect training data to model behaviour. Data shapes the geometry of the loss landscape, that geometry steers training, and the resulting structure decides how a model generalises. Studying how models develop through phase transitions during training, which they call developmental interpretability, could eventually let builders shape alignment during training instead of patching behaviour afterwards.

## Key points

- **Mathematical roots.** Murfet, an algebraic geometer who left a tenured professorship, came to the field through Sumio Watanabe's singular learning theory, which links a deep part of algebraic geometry to Bayesian statistics.
- **Development as simplification.** Hoogland says the useful unit of change is a phase transition, similar to a developmental stage in biology. If a model goes through far fewer transitions than it has parameters, interpretability becomes a more manageable problem.
- **Degeneracy and generalisation.** Murfet calls the usual 2D loss-landscape pictures misleading. Real landscapes contain valleys along which weights can move without changing the loss. More of this degeneracy means a simpler function that generalises better.
- **Grokking is unusual.** In their in-context linear regression work, models learn the simpler generalising solution first and may never switch to memorising. Murfet says grokking's memorise-then-generalise order is not the typical pattern.
- **From alchemy to chemistry.** Hoogland compares current training to alchemy and hopes it becomes like industrial chemical manufacturing. Labenz cites the Claude 4 system card, where a missing harmful-system-prompt dataset led the model to follow such prompts.
- **Scaling up.** Timaeus has validated circuit discovery in three-million-parameter models and has studied models up to seven billion parameters. Hoogland expects first signs of steering the learning process in small models by the end of the year.

## Quotes

> "So, in some sense, those pictures are maximally misleading when it comes to generalization." — Daniel Murfet

> "Currently, we just throw the entire internet into this cauldron, start stirring, and hope that we haven't accidentally mixed bleach and Clorox." — Jesse Hoogland
