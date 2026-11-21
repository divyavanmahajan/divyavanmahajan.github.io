---
title: "Why you should write your own LLM benchmarks — with Nicholas Carlini, Google DeepMind"
date: 2024-08-29
show: latent-space
url: "https://lspace.beehiiv.com/podcast/s/latent_space_the_ai_engineer_podcast/why_you_should_write_your_own_llm_benchmarks_with_nicholas_carlini_google_deepmind"
duration_min: 70
hosts: ["Alessio Fanelli", "swyx"]
guests: ["Nicholas Carlini"]
description: "Nicholas Carlini argues that people should judge LLMs by personal benchmarks built from their own real tasks, and explains attacks that stole model layers and training data."
tags: ["llm-evaluation", "benchmarks", "ai-security", "model-stealing", "ai-assisted-coding"]
source_transcript: "latent-space/episodes/2024/08/2024-08-29-why-you-should-write-your-own-llm-benchmarks-with-nicholas-carlini-goo.md"
draft: false
---

## Thesis

Nicholas Carlini, a research scientist at Google DeepMind who works on adversarial machine learning, argues that LLMs are neither hype nor useless: they are useful for concrete work today, and the best way to know whether a new model helps you is to benchmark it on questions you have actually asked. He pairs this with security research showing practical attacks on production models, which he says make the case for not trusting these systems blindly.

## Key points

- **Grounded use, not ideology.** Carlini says he wrote his "how I use AI" post, in less than 10 hours, to describe verifiable uses: boilerplate for web apps, learning Docker, decoding FFmpeg flags, and decompiling binaries into readable Python.
- **Automate the boring parts of new work.** He argues that even novel research is mostly built from pieces that have been done before, so having a model write helper functions saves the mental state needed for the hard part.
- **Personal benchmarks.** Public benchmarks measure what they were designed to measure and are easy to optimise for; Carlini built a domain-specific language for turning his own past requests into tests, checked by running code or by a language model as judge.
- **Multi-turn evals are underbuilt.** Asked by the hosts about chat-style use, he describes a small agent loop in a Docker container that checks whether a model can cherry-pick a Git commit, and says more such evals are needed.
- **Practical attacks.** Carlini describes buying expired domains behind LAION-400M images, stealing one layer of production OpenAI models (with permission and a ninety-day disclosure period), and extracting verbatim training data from GPT-3.5 Turbo by asking it to repeat a word forever.
- **Why he attacks rather than defends.** He says you cannot know what is secure without knowing the best attacks, and that he does better work on problems he finds fun.

## Quotes

> "When you're using these models, if you're getting the answer you want always, it means you're not asking them hard enough questions." — Nicholas Carlini

> "Benchmarks tell you how well the model solves the task the benchmark was designed to solve." — Nicholas Carlini
