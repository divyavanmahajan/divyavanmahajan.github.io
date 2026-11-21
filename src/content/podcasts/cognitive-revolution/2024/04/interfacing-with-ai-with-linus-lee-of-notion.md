---
title: 'Interfacing with AI, with Linus Lee of Notion'
description: >-
  Linus Lee argues that AI interfaces should let people edit ideas in a model's
  latent space and amplify human agency, and that practical AI products rest on
  hand-built tools and close reading of failures.
pubDate: '2024-04-15'
show: cognitive-revolution
url: >-
  https://www.cognitiverevolution.ai/interfacing-with-ai-with-linus-lee-of-notion-2/
youtube: 'https://www.youtube.com/watch?v=t8QJEGILYfA'
durationMin: 107
hosts:
  - Nathan Labenz
guests:
  - Linus Lee
tags:
  - latent-space
  - interpretability
  - ai-interfaces
  - notion-ai
  - human-agency
draft: false
---
## Thesis

Linus Lee, AI product lead at Notion, wants tools that let people work with text in the space of meaning, the way audio engineers edit spectrograms instead of raw waveforms. He tells Nathan Labenz that progress comes from building your own simple tools and reading raw data and failure cases. His test for AI products is whether they amplify human agency or replace it.

## Key points

- **Latent-space interfaces.** Lee built demos that blend images with CLIP and that interpolate between sentences using a T5-based model that turns text into embeddings and back. One demo is an infinite canvas: hold a key for an attribute such as "make longer", drag a sentence, and a branching edit history forms.
- **Learning by model autopsy.** Without an academic background, Lee ran GPT-2 from the Hugging Face repository and added print statements. He argues that new ideas come from what is already known, so hobbyists and labs often find the same techniques at the same time.
- **Simple, transparent tooling.** He works in PyTorch because you can inspect any value. He avoids the Hugging Face transformers library because it is hard to see through, and builds small tools of his own. He calls GPT-2 "the fruit fly" of language models and mentions Pythia for interpretability research.
- **What Notion asks model makers for.** Lee wants less hallucination, lower cost and latency, and better instruction following, with general reasoning fourth because it is hard to act on. Notion's Q&A uses 2,000-5,000 token instructions; AI autofill runs prompts over tables with tens of thousands of rows.
- **Pipelines over giant context.** Lee doubts Gemini 1.5's million-token window removes the need for retrieval pipelines: ten documents are easier to debug than 10,000, and needle-in-a-haystack tests miss outdated or conflicting documents. Notion engineers meet weekly to triage bad outputs reported by users, treating them like software bugs.
- **Amplify, don't replace.** Lee places OpenAI on the replacement side and Runway on the amplification side.

## Quotes

> "I think language models work so well because they work with kind of an alternative, better representation for ideas than humans work with." — Linus Lee

> "I don't think people are thinking enough about whether the ways that language models are packaged is amplifying human agency or taking away from it." — Linus Lee
