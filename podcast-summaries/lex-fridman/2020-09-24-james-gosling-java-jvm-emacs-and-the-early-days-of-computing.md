---
title: "#126 – James Gosling: Java, JVM, Emacs, and the Early Days of Computing"
date: 2020-09-24
show: lex-fridman
episode: 126
url: "https://lexfridman.com/james-gosling/"
youtube: "https://www.youtube.com/watch?v=IT__Nrr3PNI"
duration_min: 111
hosts: ["Lex Fridman"]
guests: ["James Gosling"]
description: "Java creator James Gosling traces the language and JVM to pointer bugs, chip lock-in and consumer-electronics safety culture, and reflects on Emacs, open source and leadership."
tags: ["programming-languages", "java", "jvm", "open-source", "computing-history", "leadership"]
source_transcript: "lex-fridman/episodes/2020/09/2020-09-24-james-gosling-java-jvm-emacs-and-the-early-days-of-computing.md"
draft: false
---

## Thesis

James Gosling argues that Java came out of practical problems rather than a wish for a new language: pointer bugs that caused security holes and slowed developers down, and hardware buyers who were locked into one CPU vendor. He presents most of his good ideas as products of laziness and a willingness to take risks, and says roughly half of what he tried failed.

## Key points

- **Early computing.** Gosling learned on a PDP-8 at the University of Calgary (4K of RAM, a Model 33 teletype). At CMU around 1986 he wrote a C Emacs for Unix that spread across the ARPANET. He handed it to a small New Jersey company that charged money but kept it free for universities, which caused friction with Richard Stallman.
- **Open source.** He supports open source for building communities, but rejects "information must be free" if it means creators must take a vow of poverty.
- **Incumbents and transitions.** Gosling says cable companies rejected a Sun proposal from the early 1990s that would have let anyone publish content, and that Kodak saw the digital crossover coming but could not accept the quarterly hit. In his view Amazon and Tesla managed it because founders with large stakes gave them patient money.
- **Why Java.** Road trips to Toshiba, Sony, Samsung, Philips, Siemens and others showed him consumer-electronics firms that would not trade safety for performance. He cites a finding that 60-70% of Chrome's security vulnerabilities were pointer bugs and says Java got code to production roughly twice as fast. Strict interfaces that block "back doors" were partly social engineering.
- **The JVM.** A grad-school hack that translated Three Rivers PERQ P-code to VAX assembly, producing better code than the C compiler, led to a portable bytecode. It freed buyers from CPU lock-in and fixed two's-complement arithmetic and IEEE 754 floating point, which led to arguments with Intel.
- **Leaders and legacy.** He liked Steve Jobs but says he could never work for him because Jobs yelled at people. He criticises Andy Rubin for crossing lines with Android, and hopes his legacy is people not being afraid to take a leap of faith.

## Quotes

> "sometimes i think that most of my good ideas are um driven by laziness" — James Gosling

> "the people who say you should work smart not hard they pretty much always fail" — James Gosling
