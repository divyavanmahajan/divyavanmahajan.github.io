---
title: "The End of Finetuning — with Jeremy Howard of Fast.ai"
date: 2023-10-19
show: latent-space
url: "https://lspace.beehiiv.com/podcast/s/latent_space_the_ai_engineer_podcast/the_end_of_finetuning_with_jeremy_howard_of_fast_ai"
duration_min: 69
hosts: ["Alessio Fanelli", "swyx"]
guests: ["Jeremy Howard"]
description: "Jeremy Howard argues the three-step pretrain/fine-tune recipe he pioneered with ULMFiT is now wrong: there is only continued pre-training on a carefully curated, never-discarded data mix."
tags: ["fine-tuning", "transfer-learning", "ulmfit", "catastrophic-forgetting", "open-source-ai"]
source_transcript: "latent-space/episodes/2023/10/2023-10-19-the-end-of-finetuning-with-jeremy-howard-of-fast-ai.md"
draft: false
---

## Thesis

Jeremy Howard, co-creator of ULMFiT and co-founder of fast.ai, argues that the pretrain, domain fine-tune, task fine-tune recipe he introduced has been stretched beyond its purpose and now causes catastrophic forgetting. His alternative is to drop the idea of fine-tuning altogether and treat everything as continued pre-training on a mix that keeps all data types while gradually raising quality. He also says the field still does not understand how language models learn, which leaves room for small teams with little compute.

## Key points

- **ULMFiT's origin.** Howard trained a language model on all of Wikipedia, fine-tuned it and got a state-of-the-art IMDb result within hours, after NLP colleagues told him it would not work. He recounts Alec Radford saying GPT came from reading ULMFiT.
- **Learning from one example.** Working with Jono Whitaker on a Kaggle Wikipedia Q&A competition (nine hours, 14 GB RAM, two CPUs), Howard saw loss drop sharply at each epoch boundary; their experiments supported the hypothesis that LLMs memorise the training set after a single pass. He advises tracking validation accuracy, not loss.
- **Catastrophic forgetting.** Howard says Meta's Code Llama, a 500 billion token code fine-tune of Llama 2, used only about .3% non-code data and so got worse at everything except code; he sees RLHF damage to GPT-4 as the same effect.
- **RAG versus fine-tuning.** He calls retrieval augmented generation today's equivalent of few-shot learning and argues fine-tuning is underused, citing a base model taught to generate SQL in 15 minutes on one GPU.
- **Small models and Mojo.** He rates BTLM 3B as a 7B-quality 3B model, and is hopeful Chris Lattner's Modular and Mojo will make kernels like Flash Attention easier to write.
- **Open access.** Howard closes by arguing that powerful technology should be spread widely rather than held by a trusted elite.

## Quotes

> "to me, the right way to do this is to actually throw away the idea of fine-tuning. There's no such thing. There's only continued pre-training" — Jeremy Howard

> "RAG is like such a inefficient hack really, isn't it?" — Jeremy Howard
