---
title: "CTRL-labs lets you control machines with your mind"
date: 2019-04-30
show: practical-ai
episode: 41
url: "https://share.transistor.fm/s/ec2e05de"
duration_min: 63
hosts: ["Chris Benson", "Daniel Whitenack"]
guests: ["Adam Berenzweig"]
description: "CTRL-labs reads motor-neuron signals through the skin of the forearm, a non-invasive neural interface that uses machine learning to replace keyboards, mice and touchscreens."
tags: ["neural-interfaces", "human-computer-interaction", "signal-processing", "wearables", "emg"]
source_transcript: "practical-ai/episodes/2019/04/2019-04-30-ctrl-labs-lets-you-control-machines-with-your-mind.md"
draft: false
---

## Thesis

Adam Berenzweig of CTRL-labs R&D argues that a practical neural interface does not need electrodes in the brain. The signals that matter for control leave the motor cortex and are amplified by the muscles, so a wristband reading surface EMG on the forearm can decode intent. Machine learning then turns that signal into input for computers, potentially replacing mechanical controllers.

## Key points

- **Why the arm, not the skull.** Berenzweig defines control as turning intention into action and says the motor nervous system is the brain's output port. About a third of the motor cortex serves the hand, and each motor unit acts as a built-in amplifier, lifting microvolt nerve signals to millivolts readable through the skin.
- **Next computing paradigm.** He traces HCI from the command line to GUIs to touchscreens, and argues that AR, VR and wearable computing need a new input method once displays move into glasses. He sees neural input working alongside voice, which has privacy and social limits.
- **The device.** The CTRL-kit band currently sits on the forearm with 16 channels of gold-plated electrodes and connects over Bluetooth to a host computer that runs inference. The goal is to move to the wrist and do more processing on the device.
- **What it infers.** The API reconstructs hand joint angles and muscle contraction strength. Berenzweig contrasts this "inside-in" tracking with camera-based systems that suffer from occlusion.
- **ML stack and generalisation.** The team uses RNNs and convnets in TensorFlow, researches in Python and ships in C++. The hardest problem is generalising across users and sessions, tackled with large datasets, fast per-user calibration and transfer learning.
- **Access.** Developers can join a waitlist on the website; rollout will be slow and handpicked over the next year. Whitenack raises sign language as a use case, which Berenzweig calls the main proven high-bandwidth output channel via the hands.

## Quotes

> "it's the process of turning intention in the mind into action in the world." — Adam Berenzweig

> "tiny little twitches that are essentially invisible to the naked eye are enough to do control with this technology." — Adam Berenzweig
