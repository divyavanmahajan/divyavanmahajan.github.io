---
title: "#496 – FFmpeg: The Incredible Technology Behind Video on the Internet"
date: 2026-05-06
show: lex-fridman
episode: 496
url: "https://lexfridman.com/ffmpeg/"
youtube: "https://www.youtube.com/watch?v=nepKKz-MzFM"
duration_min: 264
hosts: ["Lex Fridman"]
guests: ["Jean-Baptiste Kempf", "Kieran Kunhya"]
description: "VLC's Jean-Baptiste Kempf and FFmpeg's Kieran Kunhya argue that a handful of volunteer maintainers, obsessed with code quality and handwritten assembly, carry the world's video infrastructure and deserve support, not demands."
tags: ["open-source", "video-codecs", "assembly", "ffmpeg", "maintainer-burnout"]
source_transcript: "lex-fridman/episodes/2026/05/2026-05-06-ffmpeg-the-incredible-technology-behind-video-on-the-internet.md"
draft: false
---

## Thesis

Jean-Baptiste Kempf, president of VideoLAN, and Kieran Kunhya, a longtime FFmpeg contributor who runs the project's X account, describe FFmpeg and VLC as a "binary star system" that underpins most video on the internet. Both argue that this infrastructure rests on a core of perhaps 5 (VLC) to 10-15 (FFmpeg) maintainers who refuse to compromise on quality, and that large companies too often treat these volunteers as unpaid vendors.

## Key points

- **How playback works.** Kempf and Kunhya walk through the pipeline: input, demuxing the container, decoding, then display. Video is compressed 100-1,000x by discarding detail humans do not perceive. Each codec generation gives about 30% better compression for one to two orders of magnitude more CPU.
- **Handwritten assembly.** Kempf says the dav1d AV1 decoder has about 240,000 lines of handwritten assembly against 30,000 of C. FFmpeg has 100,000 lines across all codecs. Kunhya reports 10x to 50x speedups over C and dismisses claims that compiler auto-vectorization can match it. He has written assembly lessons that assume only high-school math and pointers.
- **The Google and Microsoft disputes.** Kunhya criticizes Google for flooding volunteers with AI-generated security reports, such as one for an obscure 1990s game codec, under a 90-day deadline with little funding. He also cites Microsoft Teams marking a bug "high priority" and then offering a few thousand dollars. Donations have since risen, but not enough to pay one full-time developer.
- **Turning down money.** Kempf says he refused offers worth tens of millions to bundle toolbars or ads into VLC. He calls them unethical.
- **Security and surveillance.** Two intelligence agencies asked for a VLC backdoor, Kempf says, and he refused. VLC has no telemetry and is built on offline machines. He describes the CIA's trojaned VLC exposed in Vault 7 and a fake German download site that Google knows about but has not acted on.
- **What comes next.** Kempf's open source startup Kyber targets 4 ms glass-to-glass latency for teleoperating robots; it currently reaches 7 ms. Both expect FFmpeg to exist in 100 years (VLC "maybe", says Kempf), and Kempf expects multimedia to grow to any timed sensory data, from haptics to brain signals.

## Quotes

> "We care about excellent code. We don’t care who you are." — Jean-Baptiste Kempf

> "The problem here is the disproportion of means on discovery compared to patching it, right?" — Jean-Baptiste Kempf
