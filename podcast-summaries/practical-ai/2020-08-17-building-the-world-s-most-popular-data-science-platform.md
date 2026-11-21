---
title: "Building the world's most popular data science platform"
date: 2020-08-17
show: practical-ai
episode: 101
url: "https://share.transistor.fm/s/2fc8428e"
duration_min: 59
hosts: ["Chris Benson", "Daniel Whitenack"]
guests: ["Peter Wang"]
description: "Anaconda CEO Peter Wang argues Python packaging is hard because Python glues everything, and that governed open source supply chains, not AI hype, decide whether data science succeeds."
tags: ["python", "open-source", "packaging", "data-science", "software-supply-chain"]
source_transcript: "practical-ai/episodes/2020/08/2020-08-17-building-the-world-s-most-popular-data-science-platform.md"
draft: false
---

## Thesis

Peter Wang, CEO of Anaconda, explains how the company grew out of the struggle to install scientific Python and why packaging stays hard. He argues that enterprises need a trusted, governed supply of open source software and solid data foundations before AI can deliver value, and that tooling must stay accessible to non-programmers.

## Key points

- **Origins.** Wang, a physicist by training, founded the company in 2012 as Continuum Analytics with NumPy creator Travis Oliphant and started PyData. They built the Anaconda distribution because users could not even install SciPy or Matplotlib.
- **Why packaging hurts.** Wang blames Guido van Rossum treating packaging as secondary and the "long shadow" of 1970s C linkers. Conda builds native binaries per platform and hardware instead of wrapping everything in Docker; he notes nbconvert depends on Pandoc, which needs a Haskell runtime.
- **Open source business model.** Wang says everything in Anaconda is open source. Revenue comes from a package server that lets IT block GPL packages and control channels, plus an ML platform competing with Domino or SageMaker. He cites Red Hat and IBM partnerships and an aerospace firm that must rerun wing models for the FAA 50 years later.
- **Hype versus foundations.** Wang calls data needs a Maslow hierarchy: without basic data management there is no data science, and no real AI. Anaconda invests in Dask, Numba and Pandas.
- **Value-dependent computing.** Wang argues that ML merges hardware, software and data: runtime and correctness now depend on the data values. He criticises rewriting Python models in Go as slowing iteration.
- **Notebooks and taste.** Wang defends Jupyter notebooks as "making the web writable" for non-programmers; Whitenack cites Masakhane using them for African-language translation. Wang worries newer ML tooling and big-company open source neglect accessibility.

## Quotes

> "Like the reason why your duct tape has all this crap stuck to the back of it is because it's sticky." — Peter Wang

> "your management of your upstream data is as important as managing the upstream code" — Peter Wang
