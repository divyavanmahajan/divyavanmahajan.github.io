---
title: "The AI-First Graphics Editor - with Suhail Doshi of Playground AI"
date: 2023-12-20
show: latent-space
url: "https://lspace.beehiiv.com/podcast/s/latent_space_the_ai_engineer_podcast/the_ai-first_graphics_editor_-_with_suhail_doshi_of_playground_ai"
duration_min: 59
hosts: ["Alessio Fanelli", "swyx"]
guests: ["Suhail Doshi"]
description: "Suhail Doshi argues image models are at a GPT-2 stage of utility, so Playground trains its own open models and is rebuilding the graphics editor around them."
tags: ["image-generation", "diffusion-models", "open-weights", "model-evaluation", "creative-tools"]
source_transcript: "latent-space/episodes/2023/12/2023-12-20-the-ai-first-graphics-editor-with-suhail-doshi-of-playground-ai.md"
draft: false
---

## Thesis

Suhail Doshi, Mixpanel co-founder and now founder of Playground, tells Alessio Fanelli and swyx that graphics models remain under-invested and of limited practical use, roughly where language models were at GPT-2 or GPT-3. Rather than wait for others, Playground trains its own models from scratch and releases them openly, while trying to reimagine what a graphics editor looks like when generation is a core operation instead of a prompt in a box.

## Key points

- **From Mighty to Playground.** Doshi says Mighty, a browser streamed from a data center, was an attempt at a new kind of computer and stalled on single-threaded JavaScript; he now sees AI models as the massively parallel version of moving compute elsewhere.
- **Why graphics.** After DALL-E 2 and Stable Diffusion, he asked Aditya Ramesh and Sam Altman whether OpenAI would build a real UI for images; when they chose to focus on language, he went ahead. The name is an homage to OpenAI's GPT-3 playground.
- **Playground v2.** The model was trained from scratch with the same architecture as SDXL so ControlNet and other community tools carry over, and the team released 256 and 512 pixel pre-trained weights for academic researchers. Doshi says users preferred it 2.5x over SDXL on a 1K-prompt benchmark, crediting data quality, captions and filtering more than any single trick.
- **Benchmarking against the best.** Playground published MJHQ 30K, built from Midjourney images, because Doshi thinks comparing against Midjourney is fairer than beating old Stable Diffusion versions. He calls FID a weak metric and plans to use in-product feedback from users generating millions of images daily.
- **Editor design.** Features include seeds, canvas outpainting and a preview-rendering mode, modelled on viewport rendering in Cinema 4D, to reduce the "slot machine" feel. He wants style learned from a handful of reference images instead of training LoRAs.
- **Infra and safety.** Inference scaling felt familiar from Mixpanel; training clusters on Slurm and PyTorch Lightning were harder than expected. He filters NSFW data and sees election-year deepfakes as a major risk.

## Quotes

> "everyone has to acknowledge that Midjourney is very good. They are the best at this thing." — Suhail Doshi

> "These prompt boxes are like, like a terminal window." — Suhail Doshi
