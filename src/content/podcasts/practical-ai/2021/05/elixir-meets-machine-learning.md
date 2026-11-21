---
title: Elixir meets machine learning
description: >-
  José Valim explains how Numerical Elixir, Axon and Livebook aim to let Elixir
  teams do machine learning without leaving their ecosystem, turning
  immutability from a handicap into an advantage.
pubDate: '2021-05-26'
show: practical-ai
episode: 135
url: 'https://share.transistor.fm/s/a0ca552f'
durationMin: 62
hosts:
  - Daniel Whitenack
guests:
  - José Valim
  - Jerod Santo
tags:
  - elixir
  - numerical-computing
  - deep-learning
  - notebooks
  - programming-languages
draft: false
---
## Thesis

In this crossover with The Changelog, Jerod Santo and Daniel Whitenack talk to Elixir creator José Valim about Nx (Numerical Elixir). Valim argues that a layered set of libraries can give Elixir developers tensors, GPU compilation, neural networks and notebooks, so they no longer have to call out to Python. He sets a modest goal: if teams can stay in Elixir for ML work, he would call it "mission accomplished".

## Key points

- **Origins.** Valim emailed Sean Moriarity after Pragmatic Bookshelf announced Moriarity's book on genetic algorithms in Elixir. They started in November and unveiled Nx in February: multidimensional tensors plus "numerical definitions", a subset of Elixir compiled to run on the GPU.
- **Immutability as a feature.** A pointer to Google's JAX, which is functional with immutable arrays, convinced Valim the idea could work. He says Nx avoids several documented JAX pitfalls (untracked conditionals, loop unrolling) because Elixir has no mutation and macros can rewrite `if` for the GPU.
- **Layers.** EXLA binds Google's XLA compiler, with LibTorch bindings in progress. Moriarity's Axon builds Keras-style neural networks from plain functions; Valim credits the layering for how quickly layers, dropout and optimisers were added. Whitenack says the API felt familiar to a Python user.
- **Practical use.** Whitenack's team trains in Python but serves APIs in Go, and says calling into Python for inference is awkward. Valim expects early adopters to run imported models from Elixir in production, including on embedded devices via Nerves.
- **Livebook.** Built by student Jonathan Klosko on Phoenix LiveView, it targets common notebook complaints: sequential evaluation, explicit dependencies and a Markdown-based file format that works with version control. It is collaborative and uses about 2,000 lines of JavaScript.
- **Getting involved.** Data frames and plotting are still missing; work is coordinated in the Erlang Ecosystem Foundation's machine learning working group.

## Quotes

> "what I thought would be a negative aspect, which is immutability, really turned out to be a feature" — José Valim

> "I don't think it's necessarily like the best tools for AI will be built using Python." — Daniel Whitenack
