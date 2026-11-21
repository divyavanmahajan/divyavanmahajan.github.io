---
title: "Cursor.so: The AI-first Code Editor — with Aman Sanger of Anysphere"
date: 2023-08-22
show: latent-space
url: "https://lspace.beehiiv.com/podcast/s/latent_space_the_ai_engineer_podcast/cursor_so_the_ai-first_code_editor_with_aman_sanger_of_anysphere"
duration_min: 59
hosts: ["Alessio Fanelli", "swyx"]
guests: ["Aman Sanger"]
description: "Aman Sanger argues that as models write most code, the IDE itself must be redesigned, so Anysphere forked VS Code to build Cursor."
tags: ["ai-coding", "code-editors", "gpt-4", "llm-inference", "retrieval"]
source_transcript: "latent-space/episodes/2023/08/2023-08-22-cursor-so-the-ai-first-code-editor-with-aman-sanger-of-anysphere.md"
draft: false
---

## Thesis

Aman Sanger, co-founder of Anysphere, argues that once language models write 90-95% of code, tab-completion inside an existing editor is the wrong form factor. Cursor owns the whole IDE so it can redesign how software is written, and Sanger expects agents to handle most well-scoped coding tasks once GPT-4.5 or GPT-5 class models arrive.

## Key points

- **The CAD pivot.** Sanger and co-founder Michael first tried next-token models for CAD, but at most around 10 billion tokens of CAD data, overfitting beyond a few billion parameters and weak spatial reasoning killed it. The lesson: be a user of what you build.
- **GPT-4 moment.** Through OpenAI's Converge programme they got early GPT-4 access; it scored 85% on HumanEval against 47% for Code DaVinci-2 and 30% for the best open model.
- **Why fork VS Code.** Sanger cites platform risk: VS Code exposed APIs (such as multi-line ghost text) to Copilot alone. Owning the editor allows features like edits to surrounding lines and Command K inline edits.
- **Prompting and retrieval.** Models struggle to produce diffs, so Cursor has GPT-4 draft changes and GPT-3.5 heal them. Rules for AI handle quirks like Solid instead of React; retrieval may improve via a Differentiable Search Index, custom embeddings and re-rankers; Priompt prioritises prompt contents by context size.
- **Agents with tools.** Sanger sees Code Interpreter-style small, auditable steps as the workable agent pattern, plus access to tests and language-server tools, and warns of prompt injection via code comments or docs.
- **Inference economics.** Prompt tokens are compute bound and completion tokens memory bound, so Llama 2 suits prompt-heavy tasks like classification and re-ranking; weight-only quantization gives little benefit at large batch sizes.

## Quotes

> "it is much better to be a user of the product you're building, and we just weren't big users of any of the text image tools." — Aman Sanger

> "So I think there's this fundamental platform risk where you're competing with the incumbent that owns the platform you're building on" — Aman Sanger
