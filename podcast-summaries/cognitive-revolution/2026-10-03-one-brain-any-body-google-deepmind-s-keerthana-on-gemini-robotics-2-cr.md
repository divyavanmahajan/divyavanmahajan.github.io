---
title: "One Brain, Any Body: Google DeepMind's Keerthana on Gemini Robotics 2, Cross-Embodiment & Humanoids"
date: 2026-10-03
show: cognitive-revolution
url: "https://www.cognitiverevolution.ai/one-brain-any-body-google-deepmind-s-keerthana-on-gemini-robotics-2-cross-embodiment-humanoids/"
youtube: "https://www.youtube.com/watch?v=CVcyli4i5g0"
duration_min: 92
hosts: ["Nathan Labenz"]
guests: ["Keerthana Gopalakrishnan"]
description: "Robotics has moved fast to whole-body humanoid control and multi-finger hands, but cross-embodiment and few-shot learning keep the field at a GPT-2 stage, Gemini Robotics lead Keerthana Gopalakrishnan argues."
tags: ["robotics", "humanoids", "vision-language-action", "cross-embodiment", "ai-safety"]
source_transcript: "cognitive-revolution/episodes/2026/10/2026-10-03-one-brain-any-body-google-deepmind-s-keerthana-on-gemini-robotics-2-cr.md"
draft: false
---

## Thesis

Keerthana Gopalakrishnan, research lead for Gemini Robotics at Google DeepMind, tells Nathan Labenz that progress since Gemini Robotics 1 has surprised her, from grippers to whole-body humanoid control with multi-finger hands. She still rates robotics at GPT-2, because few-shot learning is not yet broad and policies do not transfer cleanly across robot bodies.

## Key points

- **Robot Olympics.** The sprinting humanoids in China show progress since the DARPA challenge, she says, but flat-ground running trains well in simulation; contact-rich manipulation such as cloth folding is where sim-to-real still breaks.
- **Three-model architecture.** Gemini Robotics ER 2, a "system two" reasoning model based on the Flash line, is available via the API. The Gemini Robotics 2 VLA executes actions, and a smaller on-device model runs locally. Labenz measured about six seconds from "move the banana to the plate" to a tool call; she says speed needs depend on the application, and expects Flash/Pro-style tiers in robotics.
- **Context and orchestration.** The 128K context holds about three minutes of dense memory, so she suggests summarising older history as text. Failures often come from orchestration and compounding errors across sequenced tasks; tasks that allow retries, like Lego assembly, are easier than frying an egg.
- **Whole-body control and hands.** The VLA controls the body from fingertips to feet and is built with Apptronik, Agile Robots and Boston Dynamics. The on-device model can learn new tasks on new bodies from about 200 examples. She compares the weaker Wuji hand with the Sharpa hand, which she says can lift about 20 kg.
- **Safety in layers.** She separates operational safety (a falling humanoid is dangerous), goal alignment, and handling sensor failures: when someone puts a basket over the robot's head, it should ask for help. Gemini Robotics 2 also generates its own gestures; one robot said its favourite object, a videotape, was hard to put down.
- **Data and world models.** On Jim Fan's views, she says "the jury is still out" on world models and expects a data mixture: teleop is precise but not scalable, UMI-style sensor data sits in between, and egocentric human video is scalable but noisy.

## Quotes

> "So in a way, hands are now at the frontier of dexterity and grippers are maybe not." — Keerthana Gopalakrishnan

> "I think of safety as, like, a capability." — Keerthana Gopalakrishnan
