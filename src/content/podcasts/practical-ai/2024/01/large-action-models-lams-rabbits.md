---
title: "Large Action Models (LAMs) & Rabbits \U0001F407"
description: >-
  The Rabbit R1's large action model extends tool-using LLMs by learning to act
  inside apps that lack clean APIs, combining neural interpretation with
  symbolic program execution.
pubDate: '2024-01-30'
show: practical-ai
episode: 254
url: 'https://share.transistor.fm/s/1155daea'
durationMin: 48
hosts:
  - Chris Benson
  - Daniel Whitenack
guests: []
tags:
  - large-action-models
  - ai-devices
  - neuro-symbolic-ai
  - tool-use
  - privacy
draft: false
---
## Thesis

Daniel Whitenack and Chris Benson use the launch of the Rabbit R1 to explain what a "large action model" (LAM) is and how it relates to existing techniques. Whitenack argues that LAMs build on a known progression (autocomplete, retrieval, multimodal input, tool calling via structured output) but target a harder problem: performing actions in apps that have no usable API. Benson sees the device as a bet that the phone may stop being the centre of personal computing.

## Key points

- **Privacy perception.** Benson admits an emotional wariness about handing his data to AI assistants. Whitenack asks how this differs from smartphones and suggests the new element is autonomy: an agent, not a group of people, acting on your data.
- **Apps as friction.** Whitenack describes switching the payment card on an Uber ride, which means juggling a bank app and a password manager, as the kind of multi-app task that is easy to say but tedious to do.
- **How tools work today.** Whitenack explains that LangChain-style tools have the model emit JSON that ordinary code sends to an API. He cites a Prediction Guard customer that turns natural language into Shopify QL or GraphQL queries.
- **The LAM approach.** Drawing on Rabbit's research page, Whitenack interprets the LAM as neuro-symbolic: a neural layer maps a request onto learned UI symbols, then symbolic logic runs a "program" synthesised from human demonstrations. He notes earlier related work by AskUI and a June 2023 Salesforce AI Research post on LAMs.
- **Device and market.** Benson asks how the R1's GPS, camera and motion sensors might feed the model, and wonders how quickly Amazon, Google or Microsoft could ship rivals. Whitenack expects smartphones to move in the R1's direction and asks how much of the work runs on the device versus in the cloud.
- **Resources.** Whitenack recommends rabbit.tech/research, LangChain's tools documentation and the January 24 survey "MM-LLMs: Recent Advances in MultiModal Large Language Models".

## Quotes

> "I'm predicting that a large cloud computing service provider will purchase Rabbit." — Chris Benson

> "it might not be that we all have rabbits in our pocket, but maybe smartphones become more like rabbits over time." — Daniel Whitenack
