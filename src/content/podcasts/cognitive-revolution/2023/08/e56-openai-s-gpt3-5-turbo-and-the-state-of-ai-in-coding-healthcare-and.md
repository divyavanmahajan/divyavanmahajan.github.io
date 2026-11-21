---
title: >-
  E56: OpenAI's GPT3.5 Turbo and the State of AI in Coding, Healthcare, and
  Education
description: >-
  GPT-3.5 Turbo fine-tuning strengthens OpenAI's lead over Llama 2 on cost and
  convenience, while coding, education and medicine show AI's real value despite
  falling ChatGPT traffic.
pubDate: '2023-08-25'
show: cognitive-revolution
url: >-
  https://www.cognitiverevolution.ai/e56-openai-s-gpt3-5-turbo-and-the-state-of-ai-in-coding-healthcare-and-education/
youtube: 'https://www.youtube.com/watch?v=O3capVKgFsw'
durationMin: 53
hosts:
  - Nathan Labenz
  - Erik Torenberg
guests: []
tags:
  - fine-tuning
  - openai
  - llama-2
  - ai-coding
  - ai-in-education
  - medical-ai
draft: false
---
## Thesis

Nathan Labenz argues that OpenAI's GPT-3.5 Turbo fine-tuning release confirms that model moats are real: for most teams it now beats self-hosting a fine-tuned Llama 2 on quality, price and operational effort. He then rejects the narrative that AI is failing because ChatGPT traffic is down, pointing to coding, education and healthcare as areas where the value is already clear.

## Key points

- **Fine-tuning economics.** Labenz says the old retail option (original DaVinci) cost 12 cents per thousand tokens; the new 3.5 Turbo fine-tune costs a bit over 1 cent, a roughly 90% drop. At Waymark he crossed "fine-tune Llama 2" off his to-do list, since saving perhaps $80 a day at 10,000 calls rarely justifies the developer hours and the work of running inference yourself.
- **Hosting gaps elsewhere.** He notes that Mosaic's inference product lacked auto-scaling and that Hugging Face endpoints take minutes to scale up, whereas OpenAI's fine-tuned models "just worked" for him.
- **Safety and moderation.** OpenAI screens training data with a GPT-4 powered moderation tool. Labenz expects clever users to get around it, but thinks Llama 2's existence lowers the extra harm OpenAI's platform can enable. He sees this as one reason 3.5 is being released before GPT-4 fine-tuning.
- **Traffic decline is a red herring.** Labenz points to usage moving to Perplexity, Claude, IDE tools and API access via HumanLoop. He also cites Anthropic CEO Dario describing usage as growing exponentially.
- **Coding and education.** He describes "coding by analogy" from working examples, and Andrej Karpathy using GPT-4 to write C that runs 7B models on a CPU. On Khan Academy, he credits one-to-one tutor ratios and sees a chance for fine-grained A/B testing of how concepts are taught.
- **Medicine.** Labenz thinks multimodal Med-PaLM is close to being useful to patients. He asks what trial design and safety bar should apply, compared with self-driving cars, and whether radiologists will push back.

## Quotes

> "I do think a lot of people kind of crossed off explore fine-tuning Llama 2 from their to-do list yesterday." — Nathan Labenz

> "Med-PaLM M radiology reports are preferred 40% of the time to the human radiologist. So it's still losing, but it's not losing by much." — Nathan Labenz
