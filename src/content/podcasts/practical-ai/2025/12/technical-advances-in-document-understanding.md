---
title: Technical advances in document understanding
description: >-
  Daniel Whitenack walks through four families of document-processing models,
  from classic OCR to DeepSeek OCR, and when each one is the practical choice.
pubDate: '2025-12-02'
show: practical-ai
episode: 339
url: 'https://share.transistor.fm/s/ba36c917'
durationMin: 49
hosts:
  - Daniel Whitenack
  - Chris Benson
guests: []
tags:
  - document-processing
  - ocr
  - vision-language-models
  - rag
  - docling
draft: false
---
## Thesis

Daniel Whitenack argues that document processing, though rarely in the headlines, sits at the centre of everyday business workflows and is one of the most varied areas of AI modelling. He compares classic OCR, document structure models, vision language models and DeepSeek OCR by processing pipeline, compute needs and fit, while Chris Benson connects the ideas to practical uses such as RAG.

## Key points

- **Classic OCR is brute force but cheap.** Whitenack explains that tools like Tesseract and PaddleOCR detect text regions in an image, then run each through a CNN or LSTM to predict characters. They run on a laptop CPU but lose layout and need clean scans.
- **Document structure models add layout.** Docling (both a model family and an IBM toolkit) parses layout primitives and classifies regions as titles, paragraphs or tables, outputting JSON, Markdown or HTML. It does no text extraction itself, so it is paired with OCR, and still runs on commodity hardware.
- **Structure matters most for RAG.** Whitenack says the most frequent use is preparing documents for retrieval-augmented generation, where preserving order and structure beats faithful rendering; he has used Docling and Microsoft's MarkItDown repeatedly. Benson notes rendering back to formats such as Keynote or PowerPoint remains hard.
- **Vision language models reason over images.** These fuse a vision transformer embedding with text embeddings, trained jointly, and output tokens. Whitenack's team uses Qwen 2.5 VL and says the strongest such models currently come from China, but most still resize inputs to a fixed resolution, losing footnotes and equations.
- **DeepSeek OCR keeps resolution.** It combines a global page view with full-resolution tiles as vision tokens, preserving line breaks, alignment and small mathematical notation. Whitenack notes it is larger and needs GPUs, but expects later generations to shrink.

## Quotes

> "In the case of Rag, you actually don't need to render anything. You just need to parse it well and preserve the structure, right?" — Daniel Whitenack

> "document processing is very much not boring because there's actually such a diversity and such innovation going on here" — Daniel Whitenack
