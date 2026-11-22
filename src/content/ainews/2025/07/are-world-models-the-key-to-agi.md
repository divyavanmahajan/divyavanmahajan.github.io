---
title: Are World Models the Key to AGI?
description: >-
  This episode of The AI Daily Brief is a technical deep dive into world models:
  what they are, how they differ from current approaches to scaling large
  language models (LLMs), and whether they are a route to artificial general
  intelligence (AGI). T...
pubDate: 2025-07-22T00:00:00.000Z
type: episode
tags:
  - generative-media
  - physical-ai
  - google
url: 'https://www.patreon.com/posts/134736368'
draft: false
---
## Overview

This episode of **The AI Daily Brief** is a technical deep dive into **world models**: what they are, how they differ from current approaches to scaling large language models (LLMs), and whether they are a route to artificial general intelligence (AGI). The host, NLW, uses a recent and widely shared Harvard paper as the starting point. The paper argues that foundation models can make accurate predictions without developing an underlying world model. The episode then covers the main criticism of the paper and the wider state of world-model research.

The host gives two reasons the topic matters. Many of the next AI use cases depend on new capability gains. Those gains must come either from existing LLM scaling methods or from fundamentally new approaches such as world models.

- **Host:** NLW, The AI Daily Brief
- **Source video:** No URL was supplied with this transcript. The episode is distributed via the AI Daily Brief podcast and patreon.com/aidailybrief.

## Prerequisites

- **LLM basics:** autoregressive next-token prediction and how transformers are trained on large text corpora.
- **Scaling laws:** the idea that model performance improves predictably with more parameters, data and compute.
- **Reasoning models and test-time compute:** chain-of-thought and similar techniques that spend more compute at inference time.
- **Latent representations:** compressed internal encodings of high-dimensional inputs such as images or video.
- **Basic physics:** Kepler's laws of planetary motion versus Newton's laws of gravitation, used as the paper's central analogy.
- **Inductive bias:** the default assumptions a learning system uses to generalise beyond its training data.

## Main Points

### 1. The Harvard paper: prediction is not understanding

- The paper asks whether sequence prediction can uncover deeper understanding of a domain, in the way Kepler's predictions of planetary motion later led to Newtonian mechanics.
- The authors introduce an **inductive bias probe**. It tests how a foundation model adapts to synthetic datasets generated from a known ("postulated") world model, and checks whether the model's inductive bias aligns with that world model.
- **Main finding:** across several domains, models excel at their training tasks but fail to develop inductive biases toward the underlying world model when adapted to new tasks.
- Models trained on orbital trajectories consistently fail to apply Newtonian mechanics to new physics tasks. Instead they appear to develop task-specific heuristics that do not generalise.

### 2. What a world model is

- A world model is an AI system's internal representation of its external environment. It lets the system simulate and predict future states from observations, actions and underlying dynamics such as physics, causality and spatial relationships.
- The idea is inspired by human cognition. One example is a baseball player who anticipates a pitch's trajectory without consciously simulating every possibility.
- World models let a system rehearse scenarios in simulation instead of relying only on trial and error in the real world. This helps with uncertainty, forecasting and efficient decision-making.

### 3. Origins: Ha and Schmidhuber (2018)

- The concept was formalised in a 2018 paper by David Ha and Jürgen Schmidhuber, built from three components:

  ```
  Sensory input (images)
        │
        ▼
  [Vision model]  → compresses input into a compact latent representation
        │
        ▼
  [Memory model]  → predicts future latent states from past information
        │
        ▼
  [Controller]    → chooses actions using these representations
  ```

- In a car-racing simulation, the agent learned to drive tracks by "hallucinating" and planning inside its internal model. This showed that a controller can be trained in a dream-like simulated environment.

### 4. Yann LeCun's view

- Yann LeCun, Meta's chief AI scientist, is one of the best-known advocates of world models.
- His simplified definition: an **encoder** turns inputs (observations, actions) into a state representation. A **predictor** then forecasts next states, often using latent variables to represent unknowns. The output is a distribution of plausible outcomes, not a single prediction.
- Training uses large real-world datasets such as video and images, with techniques like diffusion models or transformers. Modern variants take multimodal inputs and can output predictive video or 3D spaces.
- LeCun argues that machines need to understand the world, remember, have intuition and common sense, and reason and plan at human level, and that current AI systems cannot do any of this. He has said: "If you're interested in human-level AI, don't work on LLMs."

### 5. Three paradigms for advancing AI

| Approach | Mechanism | Strengths | Limitations |
|---|---|---|---|
| **Pre-training scaling** | Increase parameters, data and compute during pre-training (scaling-laws hypothesis), as with GPT-4 and Grok | Broad knowledge and generalisation; emergent zero-shot and few-shot abilities; rapid, predictable progress | Signs of diminishing returns and performance plateaus; data quality and bias problems; critics say it cannot reach human-level intelligence |
| **Test-time compute / inference scaling** | More compute during use: chain-of-thought, tree-of-thoughts, self-consistency by sampling or voting, adaptive looping | Better reasoning, error correction and adaptability without retraining; can outperform larger pre-trained models on maths and coding | Expensive to run; still depends on the base model; does not fix the lack of causality or world grounding; struggles with ambiguity and long-context reasoning |
| **World models** | An architectural shift toward internal, simulatable models of the environment, e.g. Joint Embedding Predictive Architecture (JEPA), which learns latent representations by predicting future inputs non-generatively | Common sense, handling of uncertainty, long-term planning; seen by proponents as the "missing link" to human-level AI | High compute demands for multimodal training; hallucination risk in simulations; hard to scale to real-world dynamics; less mature, needing new datasets and architectures |

- The first two approaches optimise compute and data within the existing autoregressive LLM architecture. World models call for a change to the architecture itself.

### 6. Current experiments in world models

- **World Labs** (Fei-Fei Li) demonstrated in December a system that generates explorable 3D worlds from a single image (worldlabs.ai/blog).
- There are examples of more accurate physics simulation, such as condensation running down a bottle.
- Some suggest the major labs are **backing into world models through video models** such as Veo 3. Ethan Mollick observed that AI video tools seem to simulate physics well, though not perfectly, without an underlying physics engine.

### 7. Inside the Harvard research (Keyon Vafa's thread)

- **Headline result:** a transformer trained on 10 million solar systems predicts planetary orbits very well but gets the laws of gravity wrong.
- **Research questions:** (1) What is the difference between prediction and a world model? (2) Are there simple metrics that can test the difference?
- **The Kepler–Newton analogy:** Newton's laws give the same orbital predictions as Kepler's, so for orbits alone they add little. But the same laws also explain pendulums, cannonballs and rockets. In short: *predictions apply to one task; world models generalise to many.*
- The trained model could not transfer its orbital knowledge to related physics problems. It did not recover Newton's law and behaved as if gravity worked differently in different systems.
- Leading commercial reasoning models, which have Newton's laws in their training data, also failed to derive a general theory from raw orbital data when they were not told to apply those laws.
- **Hypothesis about the failure:** models confuse sequences that belong to different states but share the same legal next tokens.
  - In tests on **Othello**, models often produced a legal next move but could not reconstruct the board state correctly.
  - Applied to orbits: when two different states share a common next step, the model treats them as one, which makes its predictions inaccurate.
- **Vafa's conclusions:**
  1. Inductive bias probes reveal a model's world model.
  2. Foundation models can predict well while having poor world models.
  3. One cause is that models group distinct states that have similar allowed next tokens.

### 8. The rebuttal: Nathan Labenz

- Nathan Labenz (Cognitive Revolution podcast) argued that the paper "does not mean what you think it means."
- **Methodological criticism:** a few failed experiments do not show that something is impossible. A frontier lab would keep trying different approaches instead of declaring a general negative result.
- **Scale criticism:**
  - Orbital mechanics: a 109-million-parameter transformer trained on about 2 billion tokens, roughly 1/10,000th the size of current frontier models and datasets.
  - Othello: only 7.7 million tokens, compared with earlier 2022 work that used about 20 million synthetic games (roughly 50× more data) and *did* find that models learned board-state world models.
  - In Labenz's view, "these are not really foundation models at all."
- He cited other papers showing world models emerging from LLM pre-training, though with larger models or more data.
- **Steelman:** next-token prediction alone does not *imply* a robust world model, but it is wrong to conclude that LLMs *cannot* develop one. "They clearly can and do."

### 9. Where the field stands

- There is no consensus on which architecture or approach will deliver the next major advances.
- World Labs has made significant progress. Martin Casado (Andreessen Horowitz) demonstrated it connected to a traditional 3D rendering engine.
- **Value beyond AGI:** solving transferable knowledge would be a major advance in itself, for example more consistent media generation.
  - Justine Moore (a16z) described the goal of a video world model that turns an image into an explorable, interactive environment. She believes this is possible today but needs many "consistency hacks."
- **Video models as a back door?** A Google research paper from earlier in the year suggests not. Video models learn *visual realism*, not *physical reality*. That produces believable video but does little for realistic prediction in other domains.
- The host's closing view: world models seem almost certain to contribute significantly to AI progress in some way.

## Key Concepts

- **World model:** an internal, simulatable representation of an environment that lets an AI predict future states from observations, actions and dynamics such as physics and causality.
- **Inductive bias:** the default assumptions a model uses to generalise from training data to new situations.
- **Inductive bias probe:** the Harvard team's method of adapting a model to synthetic data from a known world model to test whether its inductive bias matches that model.
- **Foundation model:** a large model pre-trained on broad data and then adapted to downstream tasks.
- **Autoregressive next-token prediction:** the core LLM training objective of predicting the next token from preceding context.
- **Pre-training scaling / scaling laws:** the hypothesis that performance improves predictably with more parameters, data and compute.
- **Test-time compute (inference scaling):** spending extra compute at inference so a model can "think harder."
- **Chain-of-thought:** prompting a model to produce intermediate reasoning steps.
- **Tree-of-thoughts:** exploring several reasoning paths before choosing an answer.
- **Self-consistency:** sampling several outputs and choosing by voting or agreement.
- **Latent representation / latent variables:** compressed internal encodings of inputs; latent variables represent unknown factors in a prediction.
- **Ha & Schmidhuber framework (vision, memory, controller):** the 2018 three-part world-model architecture that trained an agent inside its own simulated "dream."
- **JEPA (Joint Embedding Predictive Architecture):** an architecture championed by LeCun that learns by predicting future inputs in latent space instead of generating raw outputs.
- **Diffusion models:** generative models used, among other things, to learn visual and physical dynamics from video and images.
- **Kepler vs. Newton analogy:** the paper's illustration that a task-specific predictive model (Kepler) differs from a generalising world model (Newton).
- **State conflation:** the hypothesised failure in which a model treats distinct states as the same because they share the same legal next tokens.
- **World Labs:** Fei-Fei Li's company building systems that generate explorable 3D worlds from images.

## Summary

The episode sets out world models as a distinct path toward more general AI, set against the two main LLM strategies: pre-training scaling and test-time compute. Pre-training scaling shows diminishing returns. Test-time compute is expensive and still lacks causal grounding. Proponents such as Yann LeCun argue that internal, simulatable models of the world are needed for common sense, planning and human-level intelligence. The Harvard paper by Keyon Vafa and colleagues adds a skeptical data point. A transformer can predict orbits accurately without learning Newtonian gravity, apparently because it conflates states that share the same next tokens, which suggests that good prediction does not equal a good world model. Nathan Labenz responds that the models and datasets were far too small to support broad conclusions, and that other research shows world models emerging at larger scale. The host's message is that the question is still open. Prediction and understanding are different things, and transferable world knowledge, whether from new architectures or from scaled LLMs, would be a major advance even apart from the AGI debate.
