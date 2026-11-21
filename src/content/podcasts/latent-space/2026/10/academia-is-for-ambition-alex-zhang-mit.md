---
title: 'Academia is for Ambition — Alex Zhang, MIT'
description: >-
  PhD students should use their freedom for big, unfashionable bets, and
  opinionated harness designs like recursive language models can make models
  generalise far better than today's near-identical agent loops.
pubDate: '2026-10-02'
show: latent-space
url: 'https://www.latent.space/p/rlm'
durationMin: 101
hosts:
  - Alessio Fanelli
  - swyx
guests:
  - Alex Zhang
tags:
  - recursive-language-models
  - agent-harnesses
  - gpu-kernels
  - academic-research
  - agent-swarms
draft: false
---
## Thesis

Alex Zhang, an MIT PhD student known for recursive language models (RLMs) and GPU Mode, argues that academics should take big bets that industry labs ignore, since they cannot compete on compute. His own bet is that harness design matters more than people think: most current coding harnesses are effectively the same, while more opinionated designs could change how well models generalise and scale.

## Key points

- **GPU kernels still need experts.** Zhang says almost all recent GPU Mode leaderboard solutions are AI-generated, but a regular member's human-steered kernel was the only top-ten entry stable in end-to-end systems. Verification and reward hacking remain problems, and a knowledgeable person can save a trillion-token search.
- **Big bets in academia.** He points to SWE-bench, which nobody cared about until Devin, and to ReAct and Quiet-STaR as simple papers that told a story about where the field should go. A dismissive "what is the purpose of this?" reaction can be a good sign.
- **Harnesses as compositional generalisers.** Zhang argues Claude Code, Codex and Pi share the same "trajectory as a prompt" loop. An RLM's only tool is code; context lives in the environment and the model can call itself. In his blog results, RLMs trained on short tasks generalised to tasks eight to thirty times longer, because the high-level strategy is the same.
- **Prime Agent and outside work.** With Prime Intellect he built Prime Agent: Pi restricted to IPython, plus a self-modifying "continual harness" and code-based messaging between sub-agents. He highlights Harvey post-training an RLM for legal document work.
- **Swarms are not free.** On OpenAI's swarm work, the hosts cite ten thousand agents over eighty-eight hours, estimated at about forty million dollars. Zhang thinks such a swarm needs specific training to converge; he calls Kimi's swarm unproven on novel problems and dynamic workflows "sort of a flop".
- **Capability overhang.** He believes a well-designed harness could make current frontier models do long-running, simple tasks reliably, as an 18-year-old might, and links this to continual learning.

## Quotes

> "you kind of need to take big bets if you're gonna be in academia." — Alex Zhang

> "a harness is a very, very opinionated program over how you want a language model to be form fit over a problem." — Alex Zhang
