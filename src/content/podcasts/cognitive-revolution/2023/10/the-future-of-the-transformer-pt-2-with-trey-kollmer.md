---
title: The Future of the Transformer Pt 2 with Trey Kollmer
description: >-
  Nathan Labenz argues that pause tokens, analogical prompting, attention sinks
  and ring attention point toward transformers with compressed memory and much
  longer context, possibly enabling superhuman learning.
pubDate: '2023-10-20'
show: cognitive-revolution
url: >-
  https://www.cognitiverevolution.ai/the-future-of-the-transformer-pt-2-with-trey-kollmer/
youtube: 'https://www.youtube.com/watch?v=2QGQWWA3mVU'
hosts:
  - Nathan Labenz
guests:
  - Trey Kollmer
tags:
  - ai-research
  - long-context
  - prompting
  - transformers
  - memory
draft: false
---
## Thesis

Nathan Labenz continues his research roundup with Trey Kollmer and argues that several recent papers fit together into one picture: models that think before answering, recall their own examples, run indefinitely over rolling context and train on contexts of millions of tokens. He predicts that the next step will be a compressed memory built into the transformer, and that 10-million-token training could produce models that learn things experts don't know.

## Key points

- **Pause tokens.** Google and Carnegie Mellon's "Think Before You Speak" gives models extra hidden-vector space before they answer. It works best when used in both pretraining and fine-tuning. Labenz notes that it is less interpretable than chain of thought and suggests pausing first, then reasoning.
- **Analogical prompting.** Asking the model to recall relevant examples itself beats few-shot chain of thought by up to 5 percentage points, and falls 0.4 points short in one case. Labenz calls this "heuristic recall" or self-RAG and plans to try it in his prompt coach for executive assistants, which runs on Claude Instant.
- **Prompt formats.** Labenz passes on online advice that Markdown works best for OpenAI models and XML tags for Claude.
- **StreamingLLM.** Meta's paper keeps the first "attention sink" tokens and slides a window over everything else, which keeps perplexity flat over millions of tokens on Llama 2, Falcon and MPT. Kollmer asks why early tokens work as sinks; Labenz guesses that later tokens "don't look like a beginning".
- **Ring attention.** Exact attention with no approximation, scaling context from 4,000 to 10 million tokens on a 175-billion-parameter model for 150x the training compute. Teams with only 8 GPUs get 8x the context for 2x the cost. Emad Mostaque said it knocks 10% off global training compute needs.
- **Local attention.** Kollmer wonders whether blocks that only attend to their neighbours could build context hierarchically. Labenz replies that runtime may allow shortcuts, but learning new things probably needs full attention.

## Quotes

> "This is still fully literal attention computed to the same level of precision with no shortcuts." — Nathan Labenz

> "this could be where you could start to see tipping into superhuman performance of learning things that experts don't know." — Nathan Labenz
