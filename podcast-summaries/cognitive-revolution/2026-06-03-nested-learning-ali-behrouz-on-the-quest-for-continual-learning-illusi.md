---
title: "Nested Learning: Ali Behrouz on the Quest for Continual Learning & Illusion of AI Architectures"
date: 2026-06-03
show: cognitive-revolution
url: "https://www.cognitiverevolution.ai/nested-learning-ali-behrouz-on-the-quest-for-continual-learning-illusion-of-ai-architectures/"
youtube: "https://www.youtube.com/watch?v=bBvfozmEAGw"
duration_min: 180
hosts: ["Nathan Labenz"]
guests: ["Ali Behrouz"]
description: "Ali Behrouz argues continual learning needs components that update at different frequencies, plus an offline 'sleep' phase that consolidates fast memories into slower layers by distillation."
tags: ["continual-learning", "model-architecture", "nested-learning", "memory", "ai-research"]
source_transcript: "cognitive-revolution/episodes/2026/06/2026-06-03-nested-learning-ali-behrouz-on-the-quest-for-continual-learning-illusi.md"
draft: false
---

## Thesis

Ali Behrouz, a Cornell grad student and Google researcher, argues that today's models cannot keep learning because they lack a way to absorb new knowledge without catastrophic forgetting or prohibitive cost. His Nested Learning framework treats every component, including optimisers, as associative memory compressing a context, and gains expressivity by nesting levels with different update frequencies rather than only stacking layers. He sees a true continual learner as having an active phase and a "sleep" phase rather than separate training and test times.

## Key points

- **Brain-inspired, not brain-copying.** Behrouz borrows high-level principles, such as memory at multiple timescales, and avoids overfitting to one form of intelligence or to uncertain neuroscience.
- **Hope and Hope-attention.** The simplest variant keeps attention but replaces the single MLP with several MLP blocks updated at different frequencies (around 128, 4x128 and 16x128 tokens). Knowledge a fast block forgets survives in slower blocks and can return via backpropagation. The full Hope architecture swaps attention for a self-modifying Titans module that generates its own values, adding sequential, causal processing.
- **Results.** Learning two unseen languages in context (Manchu and the MTOB language), a transformer collapses while adding Hope levels restores performance. At 760M to 1.3B parameters Hope roughly matches or edges other architectures on perplexity, narrows the recall gap with transformers and beats them on noisy recall. The M3 optimiser applies the same multi-frequency idea to optimisation.
- **Language models need sleep.** In an offline phase, a fast block's knowledge is distilled into a slower one, with temporary extra parameters that are freed afterwards. A "dreaming" step generates synthetic data to link concepts and self-improve, using on-policy distillation.
- **Risks.** Behrouz sees continual learning as both an opportunity and a "huge threat" for privacy and alignment, and says knowledge transfer must filter adversarial inputs. Labenz worries about emergent misalignment and winner-take-all dynamics; Behrouz hopes for a diverse ecosystem of differently intelligent systems.
- **Consciousness.** He offers active information processing as a minimal criterion, which links continual learning to the question, but calls the topic controversial.

## Quotes

> "a true continual learner doesn't have a test and train time." — Ali Behrouz

> "it's not a solution to continual learning. It's a tool to find the solution of the continual learning" — Ali Behrouz
