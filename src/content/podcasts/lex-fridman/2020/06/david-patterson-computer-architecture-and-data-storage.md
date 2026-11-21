---
title: '#104 – David Patterson: Computer Architecture and Data Storage'
description: >-
  Turing Award winner David Patterson argues that simple instruction sets won on
  measurable performance, and that with Moore's law slowing, domain-specific
  accelerators for machine learning are the way forward.
pubDate: '2020-06-27'
show: lex-fridman
episode: 104
url: 'https://lexfridman.com/david-patterson/'
youtube: 'https://www.youtube.com/watch?v=naed4C4hfAg'
durationMin: 110
hosts:
  - Lex Fridman
guests:
  - David Patterson
tags:
  - computer-architecture
  - risc-v
  - moores-law
  - hardware-accelerators
  - benchmarks
  - storage
draft: false
---
## Thesis

David Patterson, Berkeley professor and co-creator of RISC and RAID, tells Lex Fridman that good architecture comes from simplicity backed by measurement. RISC beat complex instruction sets once the argument was made quantitative, and he says the same discipline now matters as Moore's law slows and the industry turns to accelerators for machine learning.

## Key points

- **Why RISC won.** Patterson explains that performance factors into instruction count, clock cycles per instruction and clock cycle time. RISC executed perhaps 25-50% more instructions but needed about two cycles per instruction against roughly ten for CISC. He notes that Intel survived by translating x86 instructions into RISC-like operations in hardware.
- **RISC-V and open hardware.** Built at Berkeley around 2010 and driven by Krste Asanović and students Andrew Waterman and Yunsup Lee, RISC-V has a core of about 40 instructions plus optional extensions. Patterson says the RISC-V conference grew from 50 to about 1,700 attendees, and predicts it may become the most popular instruction set, starting with embedded devices.
- **Moore's law is slowing.** Patterson says general-purpose processors now improve only a few percent a year, and that DRAM and Intel chips do not have eight times the transistors of six years ago. He calls Jim Keller's claim that Moore's law continues marketing, and warns that software teams can no longer count on faster servers.
- **Accelerators and benchmarks.** He describes machine learning, which relies on matrix multiply, as a godsend for hardware designers. He helped create the MLPerf benchmark, and points to Intel dropping Nervana and buying Habana for two billion dollars as evidence that the software stack matters.
- **Quantum and RAID.** Citing two national reports, Patterson expects error-corrected quantum computing around 2030 and only in data centres. He recounts how RAID, with Randy Katz and Garth Gibson, used many cheap PC disks plus redundancy to beat large IBM drives on cost, speed and reliability.
- **Teaching, wrestling and a good life.** Patterson says teaching and research reinforce each other, credits wrestling for his confidence and team-building, and judges his career by people rather than papers.

## Quotes

> "no exponential can last forever it's lasted for 50 years which is amazing" — David Patterson

> "it's the people you work with the people you can influence the people you can help is the things that you feel good about" — David Patterson
