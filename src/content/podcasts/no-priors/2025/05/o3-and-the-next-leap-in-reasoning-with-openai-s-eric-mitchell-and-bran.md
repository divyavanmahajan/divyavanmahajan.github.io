---
title: >-
  O3 and the Next Leap in Reasoning with OpenAI’s Eric Mitchell and Brandon
  McKinzie
description: >-
  OpenAI's Eric Mitchell and Brandon McKinzie explain how reinforcement learning
  plus tool use makes o3's longer thinking pay off, and why evals and simulation
  now limit progress.
pubDate: '2025-05-01'
show: no-priors
episode: 113
url: 'https://www.youtube.com/watch?v=OBQ4YeNeSno'
youtube: 'https://www.youtube.com/watch?v=OBQ4YeNeSno'
durationMin: 38
hosts:
  - Sarah Guo
  - Elad Gil
guests:
  - Eric Mitchell
  - Brandon McKinzie
tags:
  - reasoning-models
  - reinforcement-learning
  - tool-use
  - test-time-compute
  - evals
draft: false
---
## Thesis

Eric Mitchell and Brandon McKinzie, two of the researchers behind OpenAI's o3, tell Sarah Guo and Elad Gil that o3 is more capable both because reinforcement learning teaches it to work through hard tasks and because it can call tools such as browsing, code execution and image manipulation. Tools keep extra thinking time productive. In their view, the next limits are how far an environment can be simulated, how slow the real world is, and the shortage of reliable evals.

## Key points

- **RL, not just next-token prediction.** The guests say the main training difference from the GPT series is reinforcement learning on difficult tasks, letting the model take as long as it needs. Users can hand over a high-level request, such as company due diligence.
- **Tools steepen test-time scaling.** On visual reasoning, the guests say o3 crops and manipulates images it cannot see well, giving a clearly steeper scaling curve. Writing a short program likewise beats fitting a valuation model in context.
- **One model, steerable.** Following Sam Altman's public comments about the ChatGPT model picker, they want a unified model that knows its own uncertainty, answers instantly when it can, and can be told an API use case cannot wait ten minutes.
- **What makes tasks hard.** Mitchell names two dimensions: how much uncertain interaction with the outside world a task needs, and how much it is bound by real-world time. That is why coding agents advance faster than robotics. Mitchell suggests training models to collaborate with each other as a route to collaborating with people.
- **Spiky but generalising.** They accept that capabilities may advance unevenly by domain, but cite a creative-writing sample Altman posted as evidence against "only math and code". Their data wish list starts with uncontaminated evals, since recent models have saturated several.
- **Use the distribution.** The guests urge users to send the same prompt many times rather than trust single side-by-side comparisons. Guo asks for a button that runs a prompt 100 times and ranks the results.

## Quotes

> "if you want the model to be good at something like collaborating with a bunch of people, like maybe a not too bad starting point is making it good with collaborating with other models." — Eric Mitchell

> "I want to run the prompt automatically like 100 times every time, even if it's really expensive." — Sarah Guo
