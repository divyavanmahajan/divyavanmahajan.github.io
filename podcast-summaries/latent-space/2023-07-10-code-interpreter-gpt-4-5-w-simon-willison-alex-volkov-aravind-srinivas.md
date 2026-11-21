---
title: "Code Interpreter == GPT 4.5 (w/ Simon Willison, Alex Volkov, Aravind Srinivas, Alex Graveley, et al.)"
date: 2023-07-10
show: latent-space
url: "https://lspace.beehiiv.com/podcast/s/latent_space_the_ai_engineer_podcast/code_interpreter_gpt_4_5_w_simon_willison_alex_volkov_aravind_srinivas_alex_graveley_et_al"
duration_min: 124
hosts: ["Alessio Fanelli", "swyx"]
description: "A live Twitter Space on ChatGPT Code Interpreter's general release argues that file upload plus a code-execution loop makes it the most capable agent available, despite sandbox limits."
tags: ["code-interpreter", "chatgpt", "agents", "data-analysis", "sandboxing"]
source_transcript: "latent-space/episodes/2023/07/2023-07-10-code-interpreter-gpt-4-5-w-simon-willison-alex-volkov-aravind-srinivas.md"
draft: false
---

## Thesis

Recorded as an emergency Twitter Space when Code Interpreter reached all ChatGPT Plus users, the conversation is led by Simon Willison, swyx and Alex Volkov with many audience speakers. Willison argues it is the most exciting AI tool available because it writes code, runs it, reads the errors and retries until it works. swyx calls it the most advanced agent he has seen, and several speakers suspect it runs on a separately fine-tuned GPT-4.

## Key points

- **The loop is the feature.** Willison describes watching it fail and retry five or six times without input, and treats it like a coding intern that never gets frustrated. He built his open source tool Symbex (Python AST search) this way.
- **Data journalism in one prompt.** Willison zipped a CSV of about 250,000 San Francisco police calls to get under the 100 MB upload limit, then asked it to compare calls within 500 meters of a Whole Foods and a Safeway. It used the Haversine formula, plotted both and returned a SQLite file, which made him rethink his Datasette roadmap.
- **Sandbox limits.** Speakers list no network access, a 100 MB upload cap, timeouts that wipe all files, and subprocess calls being locked down; Willison had earlier run Deno and Lua binaries inside it. Listing installed packages showed Tesseract, TensorFlow, PyTorch, FFmpeg and Folium.
- **A different model.** An audience member saw requests going to a "4-interpreter" endpoint, and Gabriel measured an 8K context window versus 4K for default ChatGPT-4. Willison asks OpenAI to expose the fine-tuned model through the API so developers can run code in their own containers.
- **Who benefits.** Aravind Srinivas is skeptical of the value for people who already code well. Shyamal from OpenAI stresses education, and Alex Graveley notes that execution feedback gives OpenAI valuable training data on whether code works.

## Quotes

> "It's a coding intern, and it's both really smart and really stupid at the same time." — Simon Willison

> "it did everything on my roadmap for the next two years just out of the box" — Simon Willison
