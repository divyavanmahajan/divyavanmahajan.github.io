---
title: '#162 – Jim Keller: The Future of Computing, AI, Life, and Consciousness'
description: >-
  Jim Keller argues that good engineering is craftsmanship and clean abstraction
  layers, that AI needs hardware that runs graphs natively, and that scale, not
  efficiency, drives computing forward.
pubDate: '2021-02-18'
show: lex-fridman
episode: 162
url: 'https://lexfridman.com/jim-keller-2/'
youtube: 'https://www.youtube.com/watch?v=G4hL5Om4IJ4'
durationMin: 165
hosts:
  - Lex Fridman
guests:
  - Jim Keller
tags:
  - computer-architecture
  - ai-hardware
  - engineering-culture
  - deep-learning
  - leadership
draft: false
---
## Thesis

Jim Keller, the processor architect behind work at AMD, Apple, Tesla and Intel and then newly CTO of Tenstorrent, argues that great systems come from craftsmanship on the basics and well-defined abstraction layers rather than a chase for inventions. He sees AI as a new kind of computation, graphs rather than pixel programs, which calls for hardware built to execute graphs directly. Lex Fridman steers the conversation from chips to leadership, consciousness, dreams and love.

## Key points

- **Craft over invention.** Keller says companies that reward patents get people chasing "some random new thing" while the basics, such as cell libraries and validation methods, get neglected. On the Zen design at AMD he insisted all interfaces be defined before RTL was written, and the modularity greatly improved quality.
- **Scale beats efficiency.** Hardware doubles roughly every two years, but scaling across thousands of computers moves faster, even if each machine is used less efficiently. He cites Google and Facebook as proof that scale was where the money was.
- **GPUs emulate graphs.** GPUs were built to run shader programs on millions of pixels, Keller explains, while neural networks are graphs of matrix multiplies, convolutions and data movement. Tenstorrent compiles PyTorch into graphs, splits them into right-sized chunks and moves packets between processing elements and chips over Ethernet, aiming to scale from 100 milliwatts to a megawatt.
- **Software 2.0 and MLIR.** He names Andrej Karpathy's Software 2.0 and Chris Lattner's MLIR as Tenstorrent's two software pillars, and says naive matrix multiplies on a GPU reach only 5-10% of peak without "CUDA ninjas".
- **Tesla and autonomy.** Keller contrasts Mobileye's cheap chips that fit car-maker cost structures, Nvidia's large multi-chip platforms, and Elon Musk's requirement that the hardware be cheap enough for every Tesla. He thinks networks will be trained large and then refactored down to what can ship.
- **Order and leadership.** He describes a productivity curve between chaos and complete order: organisations drift toward stifling process, so leaders such as Steve Jobs act as a counterforce. He regrets not learning the political "human layer of the stack" earlier.

## Quotes

> "good engineering is great craftsmanship and when you start thinking engineering is about invention and set up a system that rewards invention the craftsmanship gets neglected" — Jim Keller

> "the future of computing is inefficiency not efficiency" — Jim Keller
