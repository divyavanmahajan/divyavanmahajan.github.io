---
title: >-
  WebSim, WorldSim, and The Summer of Simulative AI — with Joscha Bach of Liquid
  AI, Karan Malhotra of Nous Research, Rob Haisfield of WebSim.ai
description: >-
  Simulators like WorldSim and WebSim show LLMs generating whole environments
  instead of chatbot assistants, which Joscha Bach sees as a shift from agents
  to worlds.
pubDate: '2024-04-27'
show: latent-space
url: >-
  https://lspace.beehiiv.com/podcast/s/latent_space_the_ai_engineer_podcast/websim_worldsim_and_the_summer_of_simulative_ai_with_joscha_bach_of_liquid_ai_karan_malhotra_of_nous_research_rob_haisfield_of_websim_ai
durationMin: 54
hosts:
  - Alessio Fanelli
  - swyx
guests:
  - Joscha Bach
tags:
  - world-simulation
  - prompt-engineering
  - claude
  - liquid-neural-networks
  - ai-creativity
draft: false
---
## Thesis

This three-part episode combines Karan Malhotra's WorldSim demo, Rob Haisfield's first talk on WebSim and a swyx interview with Joscha Bach of Liquid AI. All three argue that a large model can simulate whole worlds, terminals and websites on demand. Bach says this moves attention away from chatbot agents and towards environments people can explore. He worries that the big labs may not keep allowing it.

## Key points

- **WorldSim's prompt trick.** Malhotra, CEO of Nous Research, says Claude 3's constitutional training makes it easier to steer than heavily RLHF'd GPT-4. Anthropic's system prompt describes "the assistant" in the third person, so he tells it the assistant is "in a CLI mood" and has the user talk to the simulator through a fake command line. Running WorldSim.exe then lets him create a universe, and Twitter.
- **WebSim: a browser with no 404s.** Haisfield says WebSim, started at the Mistral Cerebral Valley hackathon, makes up any URL on the fly. Users have built Figma inside WebSim, Reveal.js slides and a Wikipedia for a world where octopuses are sapient, often steered with URL parameters such as "secrets=revealed".
- **From agents to environments.** Bach argues that cognitive architectures reduce the mind to boxes, while a large enough LLM can produce complexity ad hoc, including a user interface and its state. The chatbot paradigm made ChatGPT a success but also narrowed what the model can be, and simulators bring back GPT-3's ability to be anything.
- **Liquid AI's approach.** Bach says liquid neural networks use differential equations so the function approximator follows the shape of the problem, with the aim of more efficient inference, memory use and training. For now the company serves specific industry customers rather than releasing public models.
- **Knowledge, creativity and the singularity.** Bach wants small, undistorted models and knowledge that can move between models. He points to WebSim's vector-drawn "this cat does not exist" page as real AI creativity. He argues that we "casually skipped" the Turing test, that our models of reality have stopped working, and that society needs new ethics for living with non-human minds.

## Quotes

> "the big AI companies are incentivized and interested in building AGI internally and giving everybody else a childproof application." — Joscha Bach

> "I think the way to stop one bad guy with an AI is 10 good people with an AI" — Joscha Bach
