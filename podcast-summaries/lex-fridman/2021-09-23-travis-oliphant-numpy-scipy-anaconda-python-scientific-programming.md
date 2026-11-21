---
title: "#224 – Travis Oliphant: NumPy, SciPy, Anaconda, Python & Scientific Programming"
date: 2021-09-23
show: lex-fridman
episode: 224
url: "https://lexfridman.com/travis-oliphant/"
youtube: "https://www.youtube.com/watch?v=gFEE3w7F0ww"
duration_min: 192
hosts: ["Lex Fridman"]
guests: ["Travis Oliphant"]
description: "Travis Oliphant traces how SciPy, NumPy, Numba and conda grew out of scratching his own itch as a scientist, and argues open source needs business structures that fund its maintainers."
tags: ["python", "open-source", "scientific-computing", "numpy", "packaging", "open-source-business"]
source_transcript: "lex-fridman/episodes/2021/09/2021-09-23-travis-oliphant-numpy-scipy-anaconda-python-scientific-programming.md"
draft: false
---

## Thesis

Travis Oliphant tells Lex Fridman how a graduate student doing MRI and ultrasound research at the Mayo Clinic ended up building SciPy, NumPy, Numba and conda, mostly by building the tools he needed himself and sharing them. His running theme is that open source succeeds through stewardship and community, but has never worked out how to pay the people who build it. His companies since then, Anaconda, Quansight and OpenTeams, are attempts to fix that.

## Key points

- **Why Python.** Oliphant found Python in 1997 and liked it because code he had written a year earlier was still readable, unlike his Perl. He traces array thinking back to APL.
- **SciPy and NumPy.** SciPy started in 1998 as modules wrapping Fortran routines from Netlib and had its first release in 2001. In 2005, worried that the community was splitting between Numeric and Numarray (the array library used by the Hubble team), he wrote NumPy to merge them: four months to a first version, about 14 more to make it usable.
- **Funding experiments.** He sold the "Guide to NumPy" book and says it made about $90,000 in three years before he released it free. He calls NumPy's Python-1-style dtype system a regret, because it makes new types and GPU support harder.
- **Numba and conda.** At Continuum Analytics (renamed Anaconda in 2015), he wrote Numba to compile a subset of Python to LLVM, with a paid NumbaPro for GPUs. He started conda in 2012 because pip stops at the Python boundary and cannot handle compiled C, C++ and Fortran dependencies. He advises installing heavy packages with conda and adding pip on top.
- **New business models.** Quansight offers consulting and funds Quansight Labs, a non-profit that pays people to work on NumPy and SciPy; about 13 Quansight developers work on PyTorch with Facebook. OpenTeams aims to connect enterprise buyers with networks of open source developers. He says Microsoft offered to buy Anaconda in 2014.
- **Advice.** Oliphant suggests building in small pieces, avoiding hype cycles, giving a new project 18 months before judging it, and hiring through open source contributions.

## Quotes

> "python enables you to do a lot without demanding a lot of you" — Travis Oliphant

> "i care enough about entrepreneurship to make some open source people uncomfortable and i care enough about open source to make investors uncomfortable" — Travis Oliphant
