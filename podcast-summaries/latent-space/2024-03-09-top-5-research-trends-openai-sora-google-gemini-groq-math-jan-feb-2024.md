---
title: "Top 5 Research Trends + OpenAI Sora, Google Gemini, Groq Math (Jan-Feb 2024 Audio Recap) + Latent Space Anniversary with Lindy.ai, RWKV, Pixee, Julius.ai, Listener Q&A!"
date: 2024-03-09
show: latent-space
url: "https://lspace.beehiiv.com/podcast/s/latent_space_the_ai_engineer_podcast/top_5_research_trends_openai_sora_google_gemini_groq_math_jan-feb_2024_audio_recap_latent_space_anniversary_with_lindy_ai_rwkv_pixee_julius_ai_listener_q_a"
duration_min: 109
hosts: ["Alessio Fanelli", "swyx"]
guests: ["Lindy.ai"]
description: "swyx and Alessio Fanelli rank five LLM research directions, led by long inference and synthetic data, then weigh Sora, Gemini 1.5's million-token context and whether Groq's pricing adds up."
tags: ["llm-research", "synthetic-data", "long-context", "ai-hardware", "video-generation", "model-architectures"]
source_transcript: "latent-space/episodes/2024/03/2024-03-09-top-5-research-trends-openai-sora-google-gemini-groq-math-jan-feb-2024.md"
draft: false
---

## Thesis

swyx argues that with parameters and data already scaled, the most promising remaining LLM research directions are, in order, long inference, synthetic data, alternative architectures, mixture of experts and online LLMs. He and Alessio Fanelli then test that list against February's news: OpenAI's Sora, Google's Gemini 1.5 and Gemma, and Groq's fast inference. The second half covers the Latent Space anniversary demo day and listener conversations.

## Key points

- **Long inference.** swyx says training runs can grow from three months but not to 30 years, so inference time is the remaining low-hanging fruit. He groups chain of thought, flow engineering, SGLang and AlphaGeometry's planning here; the hosts add that it shifts cost to customers who care about quality.
- **Synthetic data.** The hosts point to Apple's rephrasing of C4 with Mistral, Meta's self-rewarding models and DeepMind's REST EM. swyx sees high potential but questions the ceiling, and asks why training stops at one epoch when Olmo used about 1.5.
- **Architectures and MoE.** RWKV, Mamba and Stripe Hyena chase sub-quadratic scaling, but Gemini 1.5's long context raises doubts. DeepSeek MoE used 64 smaller experts plus always-on shared experts, which swyx calls the first new idea from China to reach the West.
- **Sora and Gemini.** swyx admits he underrated multimodality. He sides more with Yann LeCun than Jim Fan on whether Sora is a data-driven world model, since objects still appear and disappear. Gemini 1.5 Pro offers a 1 million token multimodal context with near-perfect needle-in-a-haystack recall.
- **Groq math.** swyx estimates serving Llama 2 needs 576 Groq cards costing about $2.3 million versus $300,000 for an eight-card H100 system. Groq's $0.27 per million tokens only works, he says, at around 500 concurrent requests and high utilization; at 50% utilization, one host notes, Nvidia is the better buy.
- **Demo day.** Lindy.ai showed cooperating agents, Pixee automated security fixes, Julius AI reported 300,000 users, and RWKV's Eugene Chia pitched a linear-scaling multilingual model held by the Linux Foundation.

## Quotes

> "And it-- and it's the like blindingly obvious that the, the remaining low-hanging fruit is inference time." — swyx

> "But to, to put that into contrast, right, what that means, transformers typically handle eight or sixteen concurrent requests per GPU." — Eugene Chia
