---
title: "Meet AlphaEvolve: The Autonomous Agent That Discovers Algorithms Better Than Humans With Google DeepMind’s Pushmeet Kohli and Matej Balog"
date: 2025-06-26
show: no-priors
episode: 120
url: "https://www.youtube.com/watch?v=2Fs6VZpsiMQ"
youtube: "https://www.youtube.com/watch?v=2Fs6VZpsiMQ"
duration_min: 42
hosts: ["Sarah Guo", "Elad Gil"]
guests: ["Pushmeet Kohli", "Matej Balog"]
description: "DeepMind's Pushmeet Kohli and Matej Balog explain how AlphaEvolve pairs Gemini with evolutionary search and strict evaluators to find algorithms that beat decades of human work."
tags: ["ai-agents", "algorithm-discovery", "evolutionary-search", "ai-for-science", "self-improving-ai"]
source_transcript: "no-priors/episodes/2025/06/2025-06-26-meet-alphaevolve-the-autonomous-agent-that-discovers-algorithms-better.md"
draft: false
---

## Thesis

Pushmeet Kohli and Matej Balog of Google DeepMind tell Sarah Guo that AlphaEvolve, a coding agent that combines Gemini models with evolutionary search, can find new algorithms for problems that strong people have worked on for decades. They argue the key ingredient is a precise evaluation function, and that this requirement can be relaxed over time, which would open the approach to more of science.

## Key points

- **Lineage.** Kohli traces the work from AlphaGo's move 37 to AlphaTensor (2022), which beat Strassen's 50-year-old matrix multiplication result, and then FunSearch, which searched in the space of programs. AlphaEvolve generalises that idea.
- **How it works.** Balog explains that the user defines the "what" with an evaluation function, such as an existing data-centre job-scheduling simulator. AlphaEvolve fills in the "how": the LLM proposes changes, the evaluator filters them, and an evolutionary loop keeps a diverse pool of candidates. It can start from scratch or from a strong existing solution.
- **Sustained scaling.** Balog says easy problems resolve almost at once, while hard ones keep improving over long runs without plateauing early. How long a problem will take cannot be predicted in advance.
- **Evaluators are the constraint.** Kohli says AlphaEvolve uses hallucinations productively because the evaluator catches the wrong answers. Both see a spectrum from strict simulators to LLM critics, citing DeepMind's AI co-scientist.
- **Early self-improvement.** Guo cites a 23% speed-up in part of Gemini's training infrastructure. Balog calls it self-improvement with a feedback loop of months. Whether gains compound or level off is an open question.
- **Humans and access.** Output is readable code. Engineers can inspect it before deployment, and mathematicians such as Jordan Ellenberg (on the cap set problem) learned from the structure of the code. A trusted tester programme will shape a wider release. Compute cost and the need for evaluators are the main barriers.

## Quotes

> "we are able to leverage the hallucinations for a beneficial purpose" — Pushmeet Kohli

> "the feedback loop is is fairly long at least currently maybe on the order of months but there is you can call it self-improvement for sure" — Matej Balog
