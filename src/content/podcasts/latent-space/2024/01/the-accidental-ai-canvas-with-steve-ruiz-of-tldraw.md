---
title: The Accidental AI Canvas - with Steve Ruiz of tldraw
description: >-
  Steve Ruiz explains how tldraw's open, React-based infinite canvas turned into
  a multimodal prompting environment with Make Real, and why he wants to stay
  the canvas, not an AI app.
pubDate: '2024-01-05'
show: latent-space
url: >-
  https://lspace.beehiiv.com/podcast/s/latent_space_the_ai_engineer_podcast/the_accidental_ai_canvas_-_with_steve_ruiz_of_tldraw
durationMin: 64
hosts:
  - Alessio Fanelli
  - swyx
guests:
  - Steve Ruiz
tags:
  - infinite-canvas
  - multimodal-prompting
  - open-source
  - developer-tools
  - gpt-4-vision
draft: false
---
## Thesis

Steve Ruiz, founder of tldraw, tells swyx how years of building an open-source whiteboard SDK left him ready when GPT-4 with Vision arrived. His argument is that the canvas is a natural place to prompt models: you can sketch, annotate results and iterate spatially. Since models change monthly and offer little moat, he wants tldraw to be the hackable canvas where these experiments happen rather than a single AI product.

## Key points

- **From art to arrows.** Ruiz, who holds a master's in visual art from the University of Chicago, moved into design tools via Framer and Play, then built Perfect Arrows and Perfect Freehand in public; he says Canva, draw.io and Excalidraw now use the latter.
- **Accidental company.** He planned six months on tldraw before joining Adobe, but a communications company paid $75,000 for source access, sponsorships reached about $200,000 in total, and 40,000 people tried the November 2021 launch. Teams building canvases into unrelated apps led to a seed round from Lux and Amplify.
- **Make Real.** After Sawyer Hood, a Figma developer, built a wireframe-to-HTML demo on tldraw during OpenAI Dev Day, the team's Make Real version drew about 22 million views in 30 days. It sends GPT-4V an image, all text strings and prior HTML so users can mark up results and regenerate.
- **Layers of input.** In demos, a timer built from UI plus a state chart worked; the UI alone did not. Ruiz also feeds in screenshots for style, JSON and API endpoints.
- **Fast LCM experiments.** With fal, the team built Draw Fast and Lens, which regenerate images from live drawings in near real time.
- **Strategy.** tldraw 2.0 adds commercial licences. Ruiz sees collaborative canvases becoming a commodity feature, like Kanban boards, and wants tldraw to be the "battleground" for comparing multimodal models.

## Quotes

> "if I hadn't spent the last two years building this, I would spend the next two years building this." — Steve Ruiz

> "we accidentally made a really, really good visual multimodal prompting application environment" — Steve Ruiz
