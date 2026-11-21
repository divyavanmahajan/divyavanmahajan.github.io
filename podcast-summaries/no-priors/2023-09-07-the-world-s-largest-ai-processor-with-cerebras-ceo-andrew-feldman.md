---
title: "The World’s Largest AI Processor with Cerebras CEO Andrew Feldman"
date: 2023-09-07
show: no-priors
episode: 31
url: "https://www.youtube.com/watch?v=XDXv9nRN2bQ"
youtube: "https://www.youtube.com/watch?v=XDXv9nRN2bQ"
duration_min: 30
hosts: ["Sarah Guo", "Elad Gil"]
guests: ["Andrew Feldman"]
description: "Andrew Feldman argues that Cerebras's wafer-scale, data-parallel architecture removes the distributed-compute burden of GPUs, while an inflexible chip supply chain keeps AI compute scarce."
tags: ["ai-hardware", "semiconductors", "gpu-shortage", "wafer-scale", "multilingual-models"]
source_transcript: "no-priors/episodes/2023/09/2023-09-07-the-world-s-largest-ai-processor-with-cerebras-ceo-andrew-feldman.md"
draft: false
---

## Thesis

Cerebras CEO Andrew Feldman argues that a chip the size of a dinner plate, with memory spread across hundreds of thousands of cores and parameters stored off chip, lets customers train large models strictly data parallel instead of spending months on distributed compute. He says the right measure is how long a customer takes to train a model, not benchmarks. He also argues that the GPU shortage comes from a rigid supply chain and that demand will keep being underestimated.

## Key points

- **Early bet.** Feldman says five founders began meeting in late 2015, chose wafer-scale technology in early 2016, and got eight term sheets from eight pitches. He says it was his fifth startup and the first time he underestimated market size.
- **Architecture.** The chip is a data flow design with about 850,000 identical tiles of processor and memory, plus large on-wafer SRAM. Feldman says separating parameter storage from compute lets clusters scale linearly, unlike GPUs with fixed 40 or 80 GB of memory.
- **G42 and open models.** Cerebras is building nine supercomputers of four exaflops each, 36 exaflops in total, with G42. It released seven GPT models in March, a 3 billion parameter model with more than a million downloads on Hugging Face, and an Arabic LLM with Inception and MBZUAI.
- **Multilingual and cultural models.** Feldman expects more models in underrepresented languages, notes that English dominates internet data, and says tokenization for Arabic, Hebrew or Hindi must avoid biasing models towards English.
- **Chip economics and Nvidia.** A first chip takes two to three years and 50 or 60 million dollars, with three or four QA engineers per developer, and Cerebras is about 75% software. Feldman says Nvidia is now "extorting customers", and cites a customer whose GPU run failed to converge after 60 days but converged on Cerebras in three and a half days.
- **Supply and model size.** TSMC fabs cannot turn on a dime, and Feldman expects forecasts to stay wrong for a while. He thinks many production models will stay at 13 billion parameters or below, and calls unique enterprise data, such as Reuters or Bloomberg, "the new gold".

## Quotes

> "the chip is the muscle and the software is the brain" — Andrew Feldman

> "the chip Market has a profoundly inflexible supply chain" — Andrew Feldman
