---
title: ChatGPT goes prime time!
description: >-
  ChatGPT is a GPT-3.5 model refined with reinforcement learning from human
  feedback, and its chat interface turned a research technique into a tool
  non-specialists use every day.
pubDate: '2023-01-10'
show: practical-ai
episode: 206
url: 'https://share.transistor.fm/s/22432f59'
durationMin: 45
hosts:
  - Chris Benson
  - Daniel Whitenack
guests: []
tags:
  - chatgpt
  - rlhf
  - large-language-models
  - generative-ai
  - human-in-the-loop
draft: false
---
## Thesis

Daniel Whitenack and Chris Benson explain why ChatGPT is the first large language model to reach mass adoption outside the AI field. Whitenack walks through its technical basis, a causal GPT model fine-tuned with reinforcement learning from human feedback (RLHF), while Benson focuses on how the chat interface makes it a practical collaborator for non-technical work. Both conclude that people still have a role: checking facts and precision rather than supplying creativity.

## Key points

- **Mainstream reach.** Whitenack says family, church members and his barber ask him about ChatGPT. Benson uses it to draft a children's story for his animal nonprofit and says it writes better than he does, so he edits rather than authors.
- **Coherent but not always correct.** Asked which guests the show should book, ChatGPT gave a well-structured list but described Timnit Gebru as still at Google. Benson argues people hold AI to a stricter standard than they hold other humans.
- **How the GPT family works.** Whitenack contrasts causal language models, which predict the next token autoregressively, with masked models, and explains zero-shot and few-shot prompting.
- **RLHF in three steps.** Pre-train a language model, train a reward model on human preference ratings, then fine-tune a copy of the model with PPO, penalising outputs that drift too far from the original. He notes OpenAI's 175-billion-parameter model used a reward model of about 6 billion parameters, and that reward model size and the amount of human feedback needed are open questions.
- **Access strategy.** Whitenack observes that OpenAI kept the model weights closed but made access much easier than GPT-3's waitlist, likely in response to openly released models such as Stable Diffusion. Benson expects fast followers.
- **Flipped roles.** Whitenack cites a tweet by Chris Albon of Wikimedia arguing that science fiction got it backwards: generative AI is approximately correct and creative, while humans supply precision. Recommended resources include the Hugging Face RLHF blog post and Jay Alammar's GPT explainers.

## Quotes

> "For the first time, it's like having a partner in the process. It just happens to be that the partner is not human in this case." — Chris Benson

> "the AI bits are really driving the creativity and the humans are enforcing the logic, the facts, the accuracy and the precision." — Daniel Whitenack
