---
title: "Language Agents: From Reasoning to Acting"
date: 2024-09-27
show: latent-space
url: "https://lspace.beehiiv.com/podcast/s/latent_space_the_ai_engineer_podcast/language_agents_from_reasoning_to_acting"
duration_min: 90
hosts: ["Alessio Fanelli", "swyx"]
guests: ["Shunyu Yao", "Harrison Chase"]
description: "Shunyu Yao and Harrison Chase argue that good agents come from simple methods, well-designed tool interfaces and better benchmarks, not elaborate prompting tricks."
tags: ["ai-agents", "react", "benchmarks", "agent-memory", "langgraph"]
source_transcript: "latent-space/episodes/2024/09/2024-09-27-language-agents-from-reasoning-to-acting.md"
draft: false
---

## Thesis

Shunyu Yao, whose Princeton PhD produced ReAct, Tree of Thoughts, SWE-bench, SWE-agent and CoALA, argues that agent progress depends on keeping methods minimal, designing interfaces that suit models, and building realistic benchmarks. Guest co-host Harrison Chase of LangChain adds what he sees in production: simple ReAct-style loops dominate, and memory is still unsolved.

## Key points

- **ReAct's origins.** Yao began with text adventure games around November 2021, before chain-of-thought. The idea only worked once he moved it to more practical settings such as Wikipedia question answering during a Google internship. He says its lasting contributions are one general method for interacting with environments, and reasoning paired with tool use.
- **Reflection and search have limits.** Yao describes reflection as language feedback replacing a scalar reward. He says it needs a good evaluator, which makes it useful for coding but hard for maths, and suggests such methods may fit better at training time. Chase says ReAct is the most used in practice and Tree of Thoughts the least.
- **Benchmarks lag methods.** Yao says method papers get far more citations than task papers. He thinks SWE-bench works because it balances easy evaluation, practicality and scalability, unlike his earlier WebShop.
- **Agent-computer interfaces.** SWE-agent showed that an off-the-shelf terminal confuses models, for example by giving no feedback after edits. Yao argues for A/B testing interfaces on agents the way HCI tests humans.
- **CoALA and memory.** CoALA describes agents by memory, action space and decision procedure. Chase says LangChain's memory service did not find product-market fit, and that LangGraph will let state persist across threads.
- **Customer-service reliability.** Yao's TauBench uses LLM-simulated users to test whether agents handle simple tasks reliably. The best model averaged about 48%.

## Quotes

> "I think now the research idea of SWE-Agent is just we should treat agents as our customers." — Shunyu Yao

> "I think we should all be in the minimalist kind of camp, right? You should try the minimum thing and see if it works." — Shunyu Yao
