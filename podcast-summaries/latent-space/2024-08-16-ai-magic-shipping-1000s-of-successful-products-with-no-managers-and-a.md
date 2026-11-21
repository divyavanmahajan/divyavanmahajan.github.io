---
title: "AI Magic: Shipping 1000s of successful products with no managers and a team of 12 — Jeremy Howard of Answer.ai"
date: 2024-08-16
show: latent-space
url: "https://lspace.beehiiv.com/podcast/s/latent_space_the_ai_engineer_podcast/ai_magic_shipping_1000s_of_successful_products_with_no_managers_and_a_team_of_12_jeremy_howard_of_answer_ai"
duration_min: 59
hosts: ["Alessio Fanelli", "swyx"]
guests: ["Jeremy Howard"]
description: "Jeremy Howard explains how Answer.AI aims to ship thousands of products with twelve people: no managers, long-term governance, efficient fine-tuning and FastHTML."
tags: ["research-labs", "fine-tuning", "quantization", "web-frameworks", "ai-governance"]
source_transcript: "latent-space/episodes/2024/08/2024-08-16-ai-magic-shipping-1000s-of-successful-products-with-no-managers-and-a.md"
draft: false
---

## Thesis

Jeremy Howard argues that a small, unmanaged R&D lab can do work the big labs neglect: cheap fine-tuning of existing models, encoder models such as BERT, and simpler tools for building applications. Answer.AI is set up to protect that mission, both in its legal structure and in how it hires and organises people. The goal is thousands of commercially successful products from about twelve people, which requires a much more efficient stack.

## Key points

- **Governance by design.** Howard says OpenAI's nonprofit structure could not last because staff pay depended on profit. Answer.AI is a Delaware C corp and a public benefit corporation. Angel investors came in through a vehicle that commits them to vote for long-term value.
- **No managers, hiring for talent.** Howard is not anyone's manager, and there are no required meetings. Ben Clavié started the BERT24 collaboration on his own initiative, and Kerem moved the team's FSDP QLoRA work to DoRA without being asked. Howard often hires people with unusual backgrounds whose work stood out.
- **Fine-tuning as a continuum.** Howard says pre-training, instruction tuning and task training should be treated as one continuous process, not separate steps. He also argues that encoder-decoder and encoder-only models are underused for classification and source-conditioned tasks.
- **FSDP QLoRA war stories.** Fine-tuning a 70B model on consumer GPUs meant working with poorly documented bitsandbytes and FSDP internals and finding untested regressions. Howard wants people to ship adapters on top of quantized models, not merged models.
- **FastHTML.** Howard's new framework builds a complete web app in one Python file on HTMX, Starlette and web fundamentals. It draws on his decade building FastMail.
- **Dialogue engineering.** His internal tool, AI Magic, built on his Claudette and Cosette libraries, replaces the teletype-style chat interface. He also wants KV caches that can be stored and reused, for example to keep library docs available.

## Quotes

> "We want to create thousands of commercially successful products at AnswerAI, and we want to do that with like twelve people." — Jeremy Howard

> "I'm not a manager, which means I don't get to tell people what to do or how to do it or when to do it." — Jeremy Howard
