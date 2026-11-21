---
title: "Mamba-Palooza: 90 Days of Mamba-Inspired Research with Jason Meaux: Part 2"
date: 2024-03-30
show: cognitive-revolution
url: "https://www.cognitiverevolution.ai/mamba-palooza-90-days-of-mamba-inspired-research-with-jason-meaux-part-2/"
youtube: "https://www.youtube.com/watch?v=MwIiQsEVyew"
duration_min: 81
hosts: ["Nathan Labenz"]
guests: ["Jason Meaux"]
description: "Mamba's first 90 days show state space models adapting to vision through multi-direction scans, stretching to longer context, and raising the open problem of state that degrades over time."
tags: ["mamba", "state-space-models", "computer-vision", "long-context", "ai-architecture"]
source_transcript: "cognitive-revolution/episodes/2024/03/2024-03-30-mamba-palooza-90-days-of-mamba-inspired-research-with-jason-meaux-part.md"
draft: false
---

## Thesis

Nathan Labenz and Jason Meaux argue that the core lesson from the Mamba literature is that everything must be turned into a sequence: researchers adapt images, video, 3D scans and graphs by flattening them and scanning in several directions. Long-context experiments show Mamba can generalise beyond its training window, but Labenz warns that an unbounded state will eventually degrade unless someone invents a way to clean it out.

## Key points

- **Paper count bet.** Labenz set the over/under at 5.5 Mamba papers for a two-week window in February; the final count was 13. Meaux set 55 as the line for the next 90 days, and Labenz took the over.
- **Medical image segmentation.** Meaux says more than half of Mamba papers deal with vision, kicked off by U-Mamba from the University of Toronto, which pairs CNN blocks for local features with Mamba for long-range dependencies. Swin-UMamba added pre-training on general images and reported beating U-Mamba.
- **Multi-direction scans.** Vision Mamba (Huazhong University of Science and Technology, Horizon Robotics) runs forward and backward scans and reports being 2.8 times faster with over 85% GPU memory savings. VMamba uses a four-way cross scan, and Mamba ND found that wiring scans in series beat running them in parallel.
- **3D, video and graphs.** SegMamba handles 64x64x64 volumes (a sequence of about 260,000) on 4 A100s; Vivim scans video; MambaMorph aligns MRI and CT scans; Graph Mamba stays under 200 MB at 1,400 nodes where a transformer baseline fails around 800.
- **Long context.** Meaux describes LongMamba, trained on about 16,000 tokens, with perplexity holding to roughly 40,000 tokens but needle-in-a-haystack retrieval fading past about 20,000. Labenz proposes state decay or penalties to stop the state from "rotting", and at a high level highlights the Arc Institute's Evo DNA model, built on the StripedHyena hybrid with 131,000-token context.
- **Outlook.** Labenz expects state space models to have a significant chance of reaching frontier systems because compute is scarce, while noting that Gemini 1.5 and memory tokens show attention keeps improving. Meaux points to Magic.dev's claim of a multimillion-token context window.

## Quotes

> "This thing can only handle sequences. Everything has to be a sequence." — Nathan Labenz

> "the state starts to get gummed up and essentially, as Robin Hanson will put it, rot." — Nathan Labenz
