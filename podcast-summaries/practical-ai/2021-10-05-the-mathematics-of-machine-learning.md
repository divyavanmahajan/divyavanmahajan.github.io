---
title: "The mathematics of machine learning"
date: 2021-10-05
show: practical-ai
episode: 152
url: "https://share.transistor.fm/s/489620ac"
duration_min: 38
hosts: ["Chris Benson", "Daniel Whitenack"]
guests: ["Tivadar Danka"]
description: "Mathematician Tivadar Danka argues that machine learning maths is the language of algorithms and becomes intuitive when each concept is motivated by an ML application and taught visually."
tags: ["mathematics", "linear-algebra", "calculus", "probability", "ml-education"]
source_transcript: "practical-ai/episodes/2021/10/2021-10-05-the-mathematics-of-machine-learning.md"
draft: false
---

## Thesis

Tivadar Danka, a pure-mathematics PhD turned machine learning educator, argues that the mathematics behind neural networks is not that complicated; mathematicians make it so. He says beginners can start with high school maths, pick up the rest as problems demand it, and learn best when every concept is tied to a machine learning use and explained geometrically.

## Key points

- **How much maths you need.** Danka cites the fast.ai course's position that high school maths is enough to start. The need grows when pre-trained models from places like Hugging Face stop being sufficient, and varies by role: MLOps engineers need little, data scientists need a lot of probability and statistics.
- **Motivate, then define.** He explains matrices through fully connected layers: a network transforms data step by step, those steps are linear transformations, and matrix multiplication falls out of composing two transformations.
- **The roadmap.** His widely shared diagram works backwards from neural networks: optimisation needs calculus, models need linear algebra, fitting needs probability theory. The central line runs through calculus, linear algebra, multivariate calculus, probability theory, optimisation, mathematical statistics and neural networks.
- **Core concepts.** Gradient descent is described as walking downhill on a loss landscape, an algorithm a few hundred years old. Danka recommends single-variable calculus before multivariable, and says cross-entropy makes sense once you understand random variables, expected value and entropy.
- **Book principles.** His early-access book, released about a chapter a week with a Discord server for readers, follows two rules: no topic without an ML motivation, and everything as visual as possible. It is aimed at computer scientists, not mathematicians.
- **Stable foundations.** Danka says new maths reshaping ML is "science fiction"; mathematics runs hundreds of years ahead of applications. Part of his PhD proof came from a paper written during the Second World War.

## Quotes

> "Mathematics is the language in which algorithms are written. And if you want to effectively talk about those algorithms, you need to learn this language." — Tivadar Danka

> "If this won't be used anywhere, I won't include that in the book." — Tivadar Danka
