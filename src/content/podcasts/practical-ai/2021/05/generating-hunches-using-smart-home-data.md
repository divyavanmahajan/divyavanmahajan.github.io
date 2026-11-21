---
title: "Generating \"hunches\" using smart home data \U0001F3E0"
description: >-
  Amazon's Evan Welbourne explains how Alexa Hunches turns sparse, messy smart
  home data into confident, feedback-driven predictions that let the home act on
  the customer's behalf.
pubDate: '2021-05-04'
show: practical-ai
episode: 132
url: 'https://share.transistor.fm/s/63a2c17d'
durationMin: 43
hosts:
  - Chris Benson
  - Daniel Whitenack
guests:
  - Evan Welbourne
tags:
  - smart-home
  - iot
  - personalization
  - time-series
  - alexa
draft: false
---
## Thesis

Evan Welbourne, who leads the smart home machine learning team at Amazon, argues that a smart home should be more than a fancy remote control. Alexa Hunches, predictions with a confidence score that are refined by customer feedback, are his team's route to an "actually smart" home that works towards goals such as comfort, safety and saving energy.

## Key points

- **Three modes of control.** Welbourne separates directed control (voice or app commands), programmed control (routines such as "Alexa, good night") and intelligent control, where Alexa acts on algorithmically derived intuitions.
- **How hunches work.** A hunch is personalised, adapts to the home's current context and is only surfaced when the model is highly confident. Feedback is explicit (yes/no to "did you want me to turn off that light?") or implicit, such as a customer turning the thermostat back up.
- **Earning trust.** Early hunches were rare "delighters" like reminders about a light left on or an unlocked door. Automatic actions came later, with customers consenting in advance and receiving explanations for inferences.
- **Messy, sparse data.** More than 140,000 device types connect to Alexa, and a home may only toggle its lights four or five times a day. Welbourne's team groups devices by category, adds a smoothing layer that reports device state with confidence, and uses device names and embeddings learned across millions of customers.
- **Pandemic shift.** From around March or April 2020, weekdays began to look like weekends, so the team leaned harder on per-customer personalisation and reset assumptions about trips away from home.
- **Security and the bigger picture.** Some actions, such as unlocking a door by voice, are simply not supported. Welbourne sees Alexa as an ambient assistant that could link home, car and smartphone data.

## Quotes

> "We accept that sometimes Alexa is going to be wrong, but it's a hunch." — Evan Welbourne

> "suddenly weekdays started to look a lot more like weekends." — Evan Welbourne
