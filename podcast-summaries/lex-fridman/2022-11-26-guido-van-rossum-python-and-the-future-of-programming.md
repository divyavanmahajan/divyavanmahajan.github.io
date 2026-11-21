---
title: "#341 – Guido van Rossum: Python and the Future of Programming"
date: 2022-11-26
show: lex-fridman
episode: 341
url: "https://lexfridman.com/guido-van-rossum-2/"
youtube: "https://www.youtube.com/watch?v=-DVyjdw4t9I"
duration_min: 203
hosts: ["Lex Fridman"]
guests: ["Guido van Rossum"]
description: "Python creator Guido van Rossum explains how Python 3.11 got faster, why type hints stay optional, why he is wary of removing the GIL, and how a Python 4.0 would have to be managed."
tags: ["python", "programming-languages", "performance", "type-checking", "concurrency", "developer-tools"]
source_transcript: "lex-fridman/episodes/2022/11/2022-11-26-guido-van-rossum-python-and-the-future-of-programming.md"
draft: false
---

## Thesis

Guido van Rossum tells Lex Fridman that Python's design has always traded raw performance and strictness for simplicity and readability, and that its evolution now means recovering speed and safety without breaking that dynamic nature or the huge ecosystem of C extensions. He treats painful compatibility breaks, like the Python 2 to 3 move, as the main thing to avoid.

## Key points

- **Readability and indentation.** Van Rossum frames software as a social activity with two audiences, the computer and other programmers. He still prefers indentation to braces for beginners, but says Python could never switch now.
- **Python 3.11 speed-up.** CPython 3.11 claims to be 10 to 60 percent faster. Van Rossum says the work went into the interpreter, not a just-in-time compiler: an adaptive specializing interpreter notices when a generic operation such as add always sees integers and swaps in a faster specialized instruction, with a fallback if the guess is wrong.
- **Type hints and mypy.** Type annotations from PEP 484 are checked by separate static type checkers, not used by the interpreter. He describes how mypy, started by Finnish developer Jukka, was followed by Facebook's Pyre, Google's pytype and Microsoft's Pyright; Fridman cites a figure of 20 to 30 percent of Python 3 codebases using type hints.
- **GIL and Python 4.0.** Van Rossum expects sub-interpreters for 3.12 and calls a Facebook engineer's no-GIL fork interesting, but doubts enough users need free threading to justify the complexity. Any no-GIL Python 4.0 should keep the language unchanged and give C extension maintainers years of warning.
- **Machine learning and community.** He traces Python's dominance in science to it being better than C, C++ or Fortran for steering numerical libraries, and credits the PSF's focus on funding community events.
- **Leadership and tools.** He says he held the BDFL role too long, prefers VS Code as a spiritual successor to Emacs, and uses GitHub Copilot daily to save typing.

## Quotes

> "a tool like that is always best when the question you're asking is please remind me of how I do this" — Guido van Rossum

> "I feel that the Gill actually is pretty nice Goldilocks point between no threads and uh all threads all the time" — Guido van Rossum
