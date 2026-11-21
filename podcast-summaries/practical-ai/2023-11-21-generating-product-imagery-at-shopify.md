---
title: "Generating product imagery at Shopify"
date: 2023-11-21
show: practical-ai
episode: 246
url: "https://share.transistor.fm/s/82538875"
duration_min: 50
hosts: ["Chris Benson", "Daniel Whitenack"]
guests: ["Russ Maschmeyer"]
description: "Shopify's Russ Maschmeyer explains how keeping product pixels intact and feeding Stable Diffusion a masked depth map lets merchants regenerate realistic, grounded backgrounds without training a model."
tags: ["generative-ai", "image-generation", "stable-diffusion", "e-commerce", "prototyping"]
source_transcript: "practical-ai/episodes/2023/11/2023-11-21-generating-product-imagery-at-shopify.md"
draft: false
---

## Thesis

Russ Maschmeyer, who leads spatial commerce and Magic Labs at Shopify, argues that merchants can get much better product imagery today by combining off-the-shelf open models cleverly rather than training their own. He tells Daniel Whitenack and Chris Benson that the hard part of background replacement is grounding: making the preserved product look like it belongs in the generated scene.

## Key points

- **Shopify Magic.** Maschmeyer describes a free suite of AI features in the Shopify admin, covering product descriptions, blog posts and email subject lines. He says the product description tool went from concept to launch at Winter Editions in about two months.
- **The grounding problem.** Early background-replacement tools masked the product and regenerated everything else, but in his account the results lacked shadows and reflections and often had mismatched camera angles, because ControlNet effectively forgot the object was there.
- **The fix.** Shopify's pipeline, published as a Hugging Face space on Stable Diffusion XL, sends a masked depth map of the product plus a small "bloom" of depth at its base. Maschmeyer says that hint is enough for the model to paint shadows and surfaces; the original product pixels are composited back at the end.
- **Prompt structure.** He recommends starting the prompt with a description of the foreground product, then a line on how it is placed, then the background scene, plus stylistic terms such as commercial product photography.
- **Tooling and cadence.** Shopify's CEO, Tobi, suggested ComfyUI, whose node-based interface Maschmeyer compares to Apple's Quartz Composer. Magic Labs works in three-week cycles with no roadmap, picking a topic within a day and prototyping by day two or three.
- **What comes next.** Maschmeyer expects AI to bring in-store style personalization to online shopping, including trying on clothes in the browser.

## Quotes

> "The pixels of the product and the pixels of the environment aren't speaking to each other." — Russ Maschmeyer

> "you unlock something not because you had some like amazing insight, but just because you've tried enough stuff, and you've seen enough weirdness." — Russ Maschmeyer
