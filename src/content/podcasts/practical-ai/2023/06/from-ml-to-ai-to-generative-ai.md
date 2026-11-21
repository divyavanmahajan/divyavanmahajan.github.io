---
title: From ML to AI to Generative AI
description: >-
  Generative AI is still a data transformation like earlier machine learning,
  but foundation models are now useful through prompting alone, which changes
  how practitioners build and how risk should be judged.
pubDate: '2023-06-21'
show: practical-ai
episode: 228
url: 'https://share.transistor.fm/s/2e62c4ad'
durationMin: 47
hosts:
  - Chris Benson
  - Daniel Whitenack
guests: []
tags:
  - generative-ai
  - foundation-models
  - supervised-learning
  - ai-risk
  - ai-regulation
draft: false
---
## Thesis

Daniel Whitenack and Chris Benson step back to explain what "AI" means in 2023. Whitenack frames every model as a data transformation whose architecture is written by humans and whose parameters are learned, and traces two shifts: from training from scratch to fine-tuning foundation models, and then to generative models that are useful through prompting alone. Benson argues that the main risk does not need AGI, only humans combining capable models with harmful intent.

## Key points

- **Models as functions.** Whitenack explains parameters with a toy cat-versus-dog classifier that thresholds the share of red in an image; training searches for the best value by reducing a loss, and inference applies it to new images. Benson calls the training loop an algorithm repeated until error falls, with no mystique.
- **Supervised learning still dominates.** Benson guesses at least 95% of AI in industry is still supervised learning, despite the perception that it is dated.
- **Transfer learning.** Around 2019-2020, Whitenack says, fine-tuning large pretrained models such as BERT became common, needing less data. Benson notes this shifts the expensive training cost onto large providers.
- **Prompting instead of training.** Whitenack says generative models (GPT, Llama, Falcon, Stable Diffusion, DALL-E, Midjourney) complete a sequence, and he has had to retrain his instinct to collect data first. He builds prompts that turn product descriptions into lifestyle images and ads. Benson cites a friend, Brent Siegel, who generated a professional PowerPoint deck with GPT-4 in minutes.
- **Risk without AGI.** Whitenack gives the example of a chat-with-your-docs tool over aircraft maintenance manuals that tells a technician a critical part can be removed. He notes the EU step toward AI regulation reported by the New York Times, which focuses on high-risk uses such as utilities.
- **Humans are fallible too.** Benson, a pilot, says he is comfortable with AI flying aircraft and expects humans to eventually lose licences to fly and drive. Whitenack worries about losing skills people enjoy, and closes by urging listeners to build practical tooling.

## Quotes

> "I've had to rebuild my intuition a little bit as a data scientist" — Daniel Whitenack

> "what if it doesn't take AGI to be a threat to humanity?" — Chris Benson
