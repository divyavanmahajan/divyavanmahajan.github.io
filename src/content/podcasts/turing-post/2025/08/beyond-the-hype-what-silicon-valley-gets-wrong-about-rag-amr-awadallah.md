---
title: >-
  Beyond the Hype: What Silicon Valley Gets Wrong About RAG. Amr Awadallah,
  founder & CEO of Vectara
description: >-
  Vectara CEO Amr Awadallah argues that RAG with access control is still
  essential despite large context windows, and that hallucinations need
  detection and guardian agents because they won't disappear.
pubDate: '2025-08-23'
show: turing-post
url: >-
  https://www.turingpost.com/podcast/s/turing_post/beyond_the_hype_what_silicon_valley_gets_wrong_about_rag_amr_awadallah_founder_ceo_of_vectara
durationMin: 24
hosts:
  - Ksenia Se
guests:
  - Amr Awadallah
tags:
  - rag
  - hallucinations
  - retrieval
  - ai-security
  - open-source
draft: false
---
## Thesis

Amr Awadallah, founder and CEO of Vectara and earlier a founder of Cloudera, argues that retrieval-augmented generation is far from dead. Separating memory (retrieval) from reasoning (the LLM) improves accuracy, security and cost compared with filling large context windows. Because transformers are probabilistic, he says, hallucinations will not go away, so production systems need guardian agents that detect and correct them.

## Key points

- **Big context windows don't replace retrieval.** Awadallah says LLMs can find one or two needles in a long prompt but struggle with several facts, and pay less attention to the middle. Context cost grows with the square of the input length, while well-tuned retrieval scales logarithmically. He cites OpenAI's data connectors as RAG in practice.
- **Access control as security.** If information is filtered before it reaches the model, no prompt attack can extract it. Data that has been fine-tuned into a model or put in its context window can leak.
- **RAG is more than vectors.** Retrieval can draw on graph databases (Neo4j), document stores (MongoDB) or warehouses (Snowflake, Oracle). A do-it-yourself demo takes hours, he says, but production needs permissions, OCR and table parsing, and hallucination controls.
- **Hallucination rates.** Grounded hallucination was about 10-20% when ChatGPT launched and is now around 1% for top models, which Awadallah says is still dangerous for diagnosis or anti-money-laundering work. Vectara's open-source Hughes Hallucination Evaluation Model has over four million downloads, and a new correction model sends cases to humans only when it can't fix them.
- **Selective open source.** He says Cloudera being fully open source made it hard to monetise and let hyperscalers take the software, so Vectara open-sources only its hallucination model. About 5 of its 60 staff do ML research on guardian agents, which also check for bias, toxicity and harmful actions.
- **History and AGI.** Awadallah credits RAG to 60 years of information-retrieval research, going back to the 1960s Baseball system. He defines AGI as beating every human at every topic and expects it in about five years, once coding AI surpasses the best humans and can improve itself. His book picks are Asimov's Foundation series and Harari's *Sapiens*.

## Quotes

> "retrieval is not about, uh, vector systems, otherwise we could, would have called it VAG instead of RAG" — Amr Awadallah

> "with the current architecture of transformers, hallucination is not gonna go away." — Amr Awadallah
