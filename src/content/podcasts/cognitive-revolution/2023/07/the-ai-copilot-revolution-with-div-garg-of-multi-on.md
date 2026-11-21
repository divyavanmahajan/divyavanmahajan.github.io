---
title: The AI Copilot Revolution with Div Garg of MULTI·ON
description: >-
  MultiOn founder Div Garg explains why a browser-extension agent that rides
  along with the user, learns from corrections and verifies its own actions is
  the practical path to personal AI agents.
pubDate: '2023-07-13'
show: cognitive-revolution
url: >-
  https://www.cognitiverevolution.ai/the-ai-copilot-revolution-with-div-garg-of-multi-on/
youtube: 'https://www.youtube.com/watch?v=PR2Mdlx5eik'
hosts:
  - Nathan Labenz
guests:
  - Div Garg
tags:
  - ai-agents
  - browser-automation
  - agent-safety
  - startups
  - personal-assistants
draft: false
---
## Thesis

Div Garg, who left a Stanford PhD to found MultiOn, argues that agents are early but ready for simple consumer web tasks if they are made reliable and predictable. His bet is a Chrome extension that works inside the user's logged-in browser, lets the user step in, and turns those interventions into training data. Nathan Labenz, who tested the product, calls the approach smart while pressing on success detection and safety.

## Key points

- **Why a browser extension.** Garg says a one-click Chrome install gives the agent the user's existing logins and lets it ask for help with logins or captchas. Labenz describes it adding a collaborator to a GitHub repo with one manual click from him.
- **Architecture.** Garg describes three modules: a representation model combining DOM and screenshot embeddings, a GPT-4 planner in a ReAct-style loop, and an action module. Actions are written in an in-house grammar that can be type-checked for malicious steps or prompt injection before compiling to DOM events.
- **Data flywheel.** GPT-4 is best for planning, Garg says, but MultiOn has 50,000 web interaction samples and is starting to fine-tune Falcon 40B. A "never give up" prompt counters the task divergence he sees in AutoGPT and BabyAGI.
- **Checking success.** The model predicts completion, a separate critic agent is being tested, and purchases pause for user confirmation, with a screenshot, before the buy button.
- **Skills and memory.** Skills are high-level natural language guidance that users can write and share; a scratch-pad profile holds preferences, with learned long-term memory being built.
- **Safety and timelines.** Garg cites a closed beta, blacklisted banking sites and protected skills. He expects simple tasks to be ready for non-technical users in about three months, but says GPT-4 cannot yet handle complex tasks of 20-plus steps, and that agents should never be able to modify their own source code.

## Quotes

> "We want to unlock parallelism for humanity where currently you can imagine we are all single threaded." — Div Garg

> "an agent should not be able to modify its own source code because if it's able to modify its own source code, it could self evolve" — Div Garg
