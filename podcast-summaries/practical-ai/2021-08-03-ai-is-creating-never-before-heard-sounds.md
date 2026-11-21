---
title: "AI is creating never before heard sounds! 🎵"
date: 2021-08-03
show: practical-ai
episode: 143
url: "https://share.transistor.fm/s/8a4f8e44"
duration_min: 45
hosts: ["Chris Benson", "Daniel Whitenack"]
guests: ["Yotam Mann"]
description: "Yotam Mann of Never Before Heard Sounds argues that real-time neural audio models trained on licensed, attributed data can become new instruments for musicians rather than background-music generators."
tags: ["generative-audio", "music", "real-time-inference", "data-licensing", "edge-ai"]
source_transcript: "practical-ai/episodes/2021/08/2021-08-03-ai-is-creating-never-before-heard-sounds.md"
draft: false
---

## Thesis

Yotam Mann, a jazz pianist turned programmer and co-founder of Never Before Heard Sounds, argues that the interesting use of machine learning in music is not generating utilitarian tracks for ads but creating new instruments that transform sound in real time. He pairs this with a stance on data: models should be trained on open or fully licensed datasets, with the contributing musicians named and eventually paid.

## Key points

- **From MIDI to raw audio.** Mann contrasts older symbolic work (Markov chains on MIDI, music information retrieval, the Onsets and Frames piano transcription model) with his focus on generating raw audio sample by sample, at roughly 44,000 samples per second.
- **Timbre transfer models.** The gan.style site swaps a YouTube video's audio for output from a choir model (11+ hours of choral music) or a string quartet model. He notes Magenta's DDSP achieves similar results without a GAN, using an FFT loss.
- **Holly+ and data ownership.** Working with Holly Herndon and Mat Dryhurst, the team trained about half a dozen models on roughly two hours of self-similar voice recordings, with automatic silence trimming. Herndon and Dryhurst manage rights through a DAO; Mann keeps his models behind an API rather than releasing weights.
- **Making convolutions stream.** For low latency, Mann trims or feeds back the padding artefacts on tiny 256-sample chunks. Converting to TensorRT gave about a four to five times speed-up, after he added 1D convolution support to the Torch-to-TRT library.
- **Hardware for musicians.** Because few musicians own a Linux machine with an NVIDIA card, the company targets NVIDIA's Jetson platform for a pedal-style box that could load different models, including ones users train themselves.
- **What AI adds.** Mann compares the moment to the electric guitar enabling Jimi Hendrix and Auto-Tune enabling Young Thug, and expects the most original work to come from where the models break. Benson asks when this will reach major venues; Mann hopes soon.

## Quotes

> "the most personal instrument that we all have is our voice" — Yotam Mann

> "Jimi Hendrix was not possible before the electrification of the guitar." — Yotam Mann
