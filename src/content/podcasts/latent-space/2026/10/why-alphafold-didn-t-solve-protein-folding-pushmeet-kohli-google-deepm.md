---
title: "\U0001F52C Why AlphaFold Didn't Solve Protein Folding — Pushmeet Kohli, Google DeepMind & Sal Candido, Biohub"
description: >-
  Kohli and Candido argue that AlphaFold reproduced PDB structures without
  solving protein dynamics, and that progress now depends on gathering the right
  data, not just more scale.
pubDate: '2026-10-10'
show: latent-space
url: 'https://www.latent.space/p/biohub-deepmind'
durationMin: 32
hosts:
  - Alessio Fanelli
  - swyx
guests:
  - Pushmeet Kohli
tags:
  - protein-structure
  - alphafold
  - ai-for-science
  - scaling-laws
  - interpretability
draft: false
---
## Thesis

In a recorded panel at a Biohub event, Pushmeet Kohli of Google DeepMind and Sal Candido of Biohub argue that "protein folding is solved" is a simplification. Kohli says AlphaFold learned to reproduce the structures scientists had deposited in the PDB, which is useful but is not an understanding of protein dynamics. Both argue that the next gains depend on starting from the problem and collecting the data it needs, not only on scaling the data that is easy to get.

## Key points

- **Finding the scaling law.** Candido says scaling laws do not appear everywhere; most of the work is finding the setup where more data and compute pay off. His team's protein language models improved when trained on noisy metagenomic sequences, but he warns against scaling up whatever data is easiest to generate.
- **The bitter lesson, reread.** Kohli recalls Rich Sutton's talk at DeepMind as a warning against being "religious" about either modelling or data generation. For AlphaFold the PDB was fixed, so effort went into modelling. Work on cell genomics showed the data was not yet good enough for a virtual cell.
- **Inductive bias versus scale.** Kohli defends AlphaFold 2's hand-built biophysical priors as a way to use data efficiently, and says curating good data is "an art in itself". Candido adds that scaling also takes craft, including modified transformer architectures.
- **What is still unsolved.** Kohli says proteins are disordered and change shape with context. If he could have one thing, it would be models that learn directly from cryo-EM micrographs, which he tried without success. Candido compares current models to modelling a bicycle's spoke when people want the whole bicycle.
- **Trust before interpretability.** Kohli argues that calibrated confidence (pLDDT) mattered more than explaining AlphaFold's internals, which no human could follow. After release, users found it also worked as a predictor of disordered regions. Candido says interpretability work finds information about function and motion inside protein language models.
- **AI in the clinic.** Kohli calls the question ill-posed because AI is already used across drug discovery; a 10x acceleration needs better biological models. Candido argues for aiming at 10x rather than 10% gains, in line with Biohub's mission to cure all disease.

## Quotes

> "I'm lazy, so I'm gonna work with what's available." — Sal Candido

> "let's not stop the funding of, uh, protein structure prediction and protein dynamics because we are just getting started." — Pushmeet Kohli
