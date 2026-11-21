---
title: "#479 – Dave Plummer: Programming, Autism, and Old-School Microsoft Stories"
date: 2025-08-29
show: lex-fridman
episode: 479
url: "https://lexfridman.com/dave-plummer/"
youtube: "https://www.youtube.com/watch?v=HsLgZzgpz9Y"
duration_min: 120
hosts: ["Lex Fridman"]
guests: ["Dave Plummer"]
description: "Former Microsoft engineer Dave Plummer explains how Task Manager was built to be small and robust, what debugging NT was like, and how autism shaped his career."
tags: ["software-engineering", "windows", "microsoft-history", "autism", "debugging"]
source_transcript: "lex-fridman/episodes/2025/08/2025-08-29-dave-plummer-programming-autism-and-old-school-microsoft-stories.md"
draft: false
---

## Thesis

Dave Plummer, who worked on MS-DOS, Windows 95 and NT, tells Lex Fridman that most of his career was spent fixing and porting other people's code, and that robustness, small size and disciplined use of asserts matter more than features. He also describes autism, and the monotropism behind it, as a source of intense focus that comes with real social costs he has learned to work around.

## Key points

- **Task Manager.** Plummer started it at home, brought it in-house to use NtQuerySystemInformation, and shipped it in NT 4.0 at about 87k by avoiding the C runtime. He says it is now four megabytes and is used about two billion times a month.
- **Debugging NT.** Plummer says about half his day was debugging in raw assembly across four instruction sets (Intel, MIPS, Alpha and PowerPC). He put his phone number in a Task Manager assert to catch a CPU-over-100% bug, which turned out to be a kernel accounting issue.
- **Dave Cutler and porting.** Plummer calls Cutler the architect of the NT kernel and a taskmaster, and compares porting the Windows 95 shell to Unicode NT to going through someone's house drawer by drawer.
- **Side projects.** Plummer says Microsoft acquired his shareware Visual ZIP, which became ZIP folders. A later company, Software Online, faced an attorney general case over daily nag reminders and a pre-checked disc option.
- **Autism advice.** Plummer describes literalism, emotional post-processing of conversations, and masking. He advises autistic people to sell their work, such as a GitHub history, rather than their personality.
- **Current projects and AI.** Plummer is training a dueling Deep-Q model to play Atari's Tempest (it reaches level 36) and runs GitHub Primes, a prime-sieve benchmark in about 100 languages where Zig usually wins. He uses AI to learn Python.

## Quotes

> "I don’t assert things that I hope aren’t true. I assert things that I know cannot be true, and I think that’s really the intent of an assertion." — Dave Plummer

> "if you’re a good programmer, AI can make you incredibly powerful." — Dave Plummer
