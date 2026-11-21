---
title: '#160 – Brendan Eich: JavaScript, Firefox, Mozilla, and Brave'
description: >-
  Brendan Eich argues that on the web, shipping first and improving over time
  beats clean-slate design, a lesson running from JavaScript's 10-day origin
  through Firefox to Brave's privacy-first browser.
pubDate: '2021-02-12'
show: lex-fridman
episode: 160
url: 'https://lexfridman.com/brendan-eich/'
youtube: 'https://www.youtube.com/watch?v=krB0enBeSiE'
durationMin: 184
hosts:
  - Lex Fridman
guests:
  - Brendan Eich
tags:
  - javascript
  - web-browsers
  - privacy
  - programming-languages
  - online-advertising
  - open-source
draft: false
---
## Thesis

Brendan Eich, creator of JavaScript, co-founder of Mozilla and CEO of Brave, tells Lex Fridman that the web rewards "worse is better": getting on first and improving steadily beats waiting for a perfect design. He traces that pattern from JavaScript to Firefox, and argues that browsers should now block the tracking economy by default and give users and publishers a fairer cut of ad revenue.

## Key points

- **JavaScript in 10 days.** Eich joined Netscape in 1995 expecting to put Scheme in the browser. After the Sun deal, management wanted a companion language to Java that looked like Java. He wrote it in about 10 days, with first-class functions for callbacks in a single-threaded browser. He says his biggest regret, the sloppy `==` equality, was added after the 10 days to please early adopters.
- **Standards and speed.** Eich describes standardising the language as ECMAScript at Ecma, with Microsoft's Shon Katzenberger and Guy Steele involved. He traces the later speed-up through 2008-era JITs, asm.js and Unreal Engine running in the browser to WebAssembly. He says TypeScript has been beneficial.
- **Browser wars.** Eich credits Microsoft's distribution and a strong IE4 team for beating Netscape. He recounts Mozilla's 1998 open-sourcing, Firefox's renaming from Phoenix and Firebird, and the Google search deal that is still Mozilla's main revenue.
- **Tracking was an accident.** Eich explains how third-party cookies plus embedded images and scripts made cross-site tracking possible. Brave blocks third-party cookies almost without exception and uses human and machine learning to separate first-party from third-party scripts.
- **Basic Attention Token.** Eich says Brave matches ads locally in the browser from a fixed catalog without seeing user data. Users get 70% of gross ad revenue, and he wants a cheaper, censorship-resistant alternative to Patreon's 5% fee. He also cites a Guardian test in which intermediaries kept 70 pence of every pound spent on ads.
- **Languages and California.** Eich recommends learning several languages, praising Rust, which he sponsored at Mozilla for memory safety, and Go. He criticises California's taxes, housing costs and leadership.

## Quotes

> "when people come to you saying can you please make it sloppier add this cute feature the answer should be no" — Brendan Eich

> "i think the first class function shines i think especially since java didn't have it" — Brendan Eich
