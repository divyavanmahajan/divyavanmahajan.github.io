---
title: "Why \"Jailbreaking\" ChatGPT is a public service with Alex Albert of The Prompt Report"
date: 2023-04-20
show: cognitive-revolution
url: "https://www.cognitiverevolution.ai/why-jailbreaking-chatgpt-is-a-public-service-with-alex-albert-of-the-prompt-report/"
youtube: "https://www.youtube.com/watch?v=2WwL6VSFRT0"
hosts: ["Nathan Labenz"]
guests: ["Alex Albert"]
description: "Alex Albert argues that publishing jailbreaks exposes how shallow current LLM safeguards are, and that open scrutiny beats keeping these weaknesses inside a few AI labs."
tags: ["jailbreaking", "ai-safety", "prompt-injection", "red-teaming", "gpt-4"]
source_transcript: "cognitive-revolution/episodes/2023/04/2023-04-20-why-jailbreaking-chatgpt-is-a-public-service-with-alex-albert-of-the-p.md"
draft: false
---

## Thesis

Alex Albert, a University of Washington computer science student who runs jailbreakchat.com and The Prompt Report newsletter, argues that jailbreaking is a useful public check on language models. In his view, RLHF fine-tuning both reduces model capability and leaves safeguards that one person can get around in hours. Host Nathan Labenz, drawing on his own GPT-4 red-teaming, agrees that alignment is far from solved.

## Key points

- **Utility and capability loss.** Albert says people jailbreak for practical reasons such as medical or legal advice. He also says fine-tuning narrows the model's range, citing the Sparks of AGI paper as evidence that earlier GPT-4 versions were more capable.
- **How he builds jailbreaks.** Albert focuses on GPT-4 because it resists jailbreaks best. His techniques include switching prompts into Greek and "token smuggling", which splits a harmful request into pieces the model joins in its own output. He only publishes a jailbreak if it answers the most extreme prompts, and he scores each one against a 50-question benchmark.
- **Claude vs GPT-4.** Labenz found Claude harder to break with simple role-play. Albert says that once Claude was broken it gave more specific harmful detail than GPT-4.
- **Product risk.** Albert reports leaking a custom system prompt word for word in about three prompts. He warns that plugins and web content open the door to indirect prompt injection, and calls content filters a band-aid that streaming interfaces make harder to apply.
- **Disclosure and the future.** Albert criticises OpenAI's new bug bounty for leaving jailbreaks out of scope. He holds a "sunlight's the best disinfectant" view for now but expects to use more discretion with GPT-5-class models. On the six-month pause, he places himself in Anthropic's intermediate scenario: current methods are not enough, but he expects humans to solve alignment.

## Quotes

> "Maybe you won't cause the massive wave, but you can cause the ripple." — Alex Albert

> "this content filter thing is the band-aid solution." — Alex Albert
