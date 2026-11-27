---
title: "Deep Dive: André Prager on Prototyping at Wing"
date: 2025-07-11
show: moonshot
url: "https://www.youtube.com/watch?v=L0WIZDtovQ4"
youtube: "https://www.youtube.com/watch?v=L0WIZDtovQ4"
duration_min: 51
hosts: ["Astro Teller"]
guests: ["André Prager"]
description: "Former Wing chief engineer André Prager argues that drone delivery was mostly a systems problem, solved by passive, cheap hardware that software can make smarter over time."
tags: ["drone-delivery", "prototyping", "hardware-design", "simplicity", "noise-reduction"]
source_transcript: "moonshot/episodes/2025/07/2025-07-11-deep-dive-andre-prager-on-prototyping-at-wing.md"
draft: false
---

## Thesis

André Prager, Wing's former chief engineer, tells Astro Teller that flying the aircraft was largely a solved problem. The hard part was everything around it: loading, charging, traffic and infrastructure, all at a cost that scales to a billion flights a year. His answer was radical simplicity: parts that do not exist cannot break, and passive hardware can gain intelligence through software updates.

## Key points

- **Tinkerer, not mathematician.** Prager describes building an electric skateboard around 1990 from an RC starter motor and a car battery, and says engineering feels more like art to him. He came to Wing in 2015 after nine years developing engines at Stihl, nudged by air-racing teammate Andrew Finley.
- **Contact charging pad.** Wing avoided heavy inductive coils; contact pins under the drone are arranged so that any landing on a roughly 3-by-3-foot pad charges it, which Teller and Prager compare to a large PCB.
- **Passive hook and winch.** Prager says the hook took two years and about 90 prototypes and has no moving parts. The winch motor senses force and position, so it can detect pulls, touchdown and snags.
- **Autoloader.** Inspired by a restaurant umbrella, Prager's patented autoloader uses two arms and the hook's existing cams to attach a package without power or electronics, so operators can keep spares.
- **Noise came from cruise.** Lower-RPM hover propellers with unequal blade pairs did not reduce complaints; data showed they came from people overflown in cruise. Four cruise propellers, a longer wing and about 4 m/s slower flight largely ended them.
- **Back to basics.** Teller recalls the 2015-2016 reset: shuttling drones between two pads a thousand times a week. Prager calls it the turning point, along with halving the 2-metre wingspan and adopting hobbyist parts.

## Quotes

> "everything that's not there doesn't need to be developed. Everything that's not there doesn't break." — André Prager

> "Our approach there is keep the hardware really really simple and then you can add more and more intelligence later with software updates." — André Prager
