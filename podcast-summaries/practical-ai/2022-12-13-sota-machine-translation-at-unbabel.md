---
title: "SOTA machine translation at Unbabel"
date: 2022-12-13
show: practical-ai
episode: 204
url: "https://share.transistor.fm/s/3d390eaa"
duration_min: 30
hosts: ["Daniel Whitenack"]
guests: ["Ricardo Rei", "José Souza"]
description: "Reliable automatic quality estimation decides when machine translation needs a human, and learned metrics like COMET judge meaning better than word-overlap scores such as BLEU."
tags: ["machine-translation", "quality-estimation", "mt-evaluation", "localization", "model-compression"]
source_transcript: "practical-ai/episodes/2022/12/2022-12-13-sota-machine-translation-at-unbabel.md"
draft: false
---

## Thesis

At EMNLP 2022, Unbabel researchers Ricardo Rei and José Souza explain to Daniel Whitenack how their company combines machine translation (MT) with professional translators. Quality estimation decides which outputs need post-editing. They argue that learned, neural evaluation such as COMET beats lexical metrics, but that these models still miss critical errors and are getting too large to deploy easily.

## Key points

- **Business model.** Souza describes Unbabel as a translation company that uses MT for scale and humans to correct output. It was a pioneer in using quality estimation to decide whether to post-edit. Years of human error annotation using the MQM framework produced the training data.
- **COMET vs BLEU.** Rei explains that BLEU counts n-gram overlap with a single reference, so it can punish a valid paraphrase or reward a translation with a wrong named entity. COMET uses XLM-RoBERTa embeddings fine-tuned on human labels. Unlike BERTScore, it learns that "I love you" and "I hate you" are opposites.
- **Two uses.** Souza says reference-based metrics compare MT systems across a test set. Reference-free quality estimation judges individual translations in real time. He notes the field moved from feature-based methods during his 2012-2015 PhD to much stronger embedding-based models.
- **Blind spots.** Rei gives the example of "50 cents" hallucinated as "500 cents": the embeddings are too similar to flag a critical error. Souza adds that bias in the training data matters, for instance Apple the company versus the fruit. WMT's challenge-set subtask now probes these failures.
- **Size and deployment.** Bigger models score better but need costly GPUs. Unbabel presented Cometinho, a smaller COMET, at EAMT, and is exploring kNN-MT, which adapts translations from a data store instead of full fine-tuning. Rei says kNN-MT fits naturally with translation memories.
- **Next steps.** Rei is most excited about quality-aware decoding, which feeds quality estimates into MT itself (a NAACL paper). Souza disputes earlier human-parity claims because they compared MT against non-professional translators.

## Quotes

> "So if you have a mechanism that tells you that your machine translation output is perfect, then you don't need a human." — Ricardo Rei

> "I don't believe that translation is solved." — José Souza
