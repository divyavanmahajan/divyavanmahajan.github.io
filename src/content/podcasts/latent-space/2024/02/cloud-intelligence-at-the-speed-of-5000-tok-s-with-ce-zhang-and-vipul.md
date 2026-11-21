---
title: >-
  Cloud Intelligence at the speed of 5000 tok/s - with Ce Zhang and Vipul Ved
  Prakash of Together AI
description: >-
  Together AI's founders argue that open, independent AI needs a disaggregated
  GPU cloud plus joint optimisation of data, algorithms, architectures and
  systems, including non-transformer models.
pubDate: '2024-02-08'
show: latent-space
url: >-
  https://lspace.beehiiv.com/podcast/s/latent_space_the_ai_engineer_podcast/cloud_intelligence_at_the_speed_of_5000_tok_s_-_with_ce_zhang_and_vipul_ved_prakash_of_together_ai
durationMin: 63
hosts:
  - Alessio Fanelli
  - swyx
guests:
  - Ce Zhang
  - Vipul Ved Prakash
tags:
  - open-source-ai
  - inference
  - gpu-cloud
  - state-space-models
  - datasets
draft: false
---
## Thesis

Vipul Ved Prakash (CEO) and Ce Zhang (CTO) describe Together AI as a platform for open and independent AI. It runs on a cloud assembled from data centres around the world rather than on the hyperscalers. They argue that the next 10x gain in efficiency will come from optimising data, algorithms, model architecture and systems together, not from any one of them. They also argue that transformers alone will not reach their target of 5,000 tokens per second.

## Key points

- **RedPajama datasets.** Zhang says RedPajama began as a best-effort reproduction of the Llama data recipe. V2 has 30 trillion tokens and about 40 precomputed quality signals, so users can build their own filters; reproducing a C4-style filter takes about 20 lines of code.
- **Fleet and market.** Prakash discloses close to 7,000-8,000 GPUs, mostly A100s and H100s. He says new supply is two to three months out, and puts this year's build-out at four to five million GPUs, close to $250 billion of compute, against $88 billion in AWS revenue last year.
- **Workload mix.** Prakash says the top five models on their inference service are fine-tuned open models, more than 20 large model builds are under way, and training is still the larger share of usage. He calls Dylan Patel's SemiAnalysis cost model wrong because it ignored the price of input tokens.
- **Inference stack.** Together combines about 50 techniques in its inference stack and keeps some of them closed for now. Research such as FlashAttention is published as open source.
- **Benchmarks.** Zhang welcomes Anyscale's benchmark but wants an independent, transparent standard similar to TPC for databases. Prakash notes that time to first token depends on where and when a test is run.
- **Beyond transformers.** StripedHyena tests whether a hybrid model can match Mistral, and Mamba pushes a pure architecture to 3 billion parameters. Zhang says smaller state allows larger batches, and he calls for systematic scaling studies. About 40-45% of the 38-person team works on research.

## Quotes

> "we have close to seven to eight thousand GPUs today. It's growing monthly." — Vipul Ved Prakash

> "a good benchmark should think about how it's going to incentivize the field to actually move forward" — Ce Zhang
