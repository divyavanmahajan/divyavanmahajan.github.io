---
title: "Shipping projects at Big Tech with Sean Goedecke"
date: 2024-12-18
show: pragmatic-engineer
url: "https://newsletter.pragmaticengineer.com/p/shipping-projects-at-big-tech-with"
youtube: "https://www.youtube.com/watch?v=IekJKQ-AvkM"
duration_min: 59
hosts: ["Gergely Orosz"]
guests: ["Sean Goedecke"]
description: "GitHub staff engineer Sean Goedecke argues a project is shipped when management believes it is, and that one technically strong engineer holding the whole project in their head makes that happen."
tags: ["shipping", "tech-lead", "staff-engineer", "remote-work", "genai-coding"]
source_transcript: "pragmatic-engineer/episodes/2024/12/2024-12-18-shipping-projects-at-big-tech-with-sean-goedecke.md"
draft: false
---

## Thesis

Sean Goedecke, a staff engineer at GitHub after five years at Zendesk, tells Gergely Orosz that shipping is a social fact: a project ships when the management chain believes it has shipped. He argues projects fail by default and succeed only when a technically strong engineer understands the whole project end to end, moves fast, and aligns with what the company actually wants.

## Key points

- **Shipping versus deploying.** Goedecke says closing every JIRA ticket or deploying to production does not mean a project has shipped. In a healthy company, he argues, management wants happy customers anyway, though compliance such as FedRAMP (for example, expiring API keys) can justify features users dislike.
- **The staging-test lesson.** He spent six months keeping Zendesk's flaky end-to-end staging tests green, then updated his resume after his manager said he did not need to fix them. He later saw a critical deploy go out with red tests and concluded such rules bend when the business needs them to.
- **One person holds the context.** With 5 to 25 teams involved, Goedecke says projects fail on overlooked details such as a forgotten security review or a dependency still in beta. A DRI engineer who holds the full technical picture in their head is what makes them ship.
- **Technical skill first, then speed.** If forced to choose, he ranks technical skill above political skill. He calls slowness the main project killer, and says a quick demo can settle weeks of debate. He advises working at about 60-80% capacity so there is slack for high-profile work, and learning management language.
- **GenAI.** Goedecke uses Copilot and ChatGPT daily and says they help most in unfamiliar codebases, such as Go in a load balancer repo. Building LLM tools, he adds, is harder than ordinary CRUD work.
- **Remote from Australia.** He spent nine months as the only APAC engineer on his team. He says follow-the-sun handoffs between US and APAC squads can roughly double speed on bug investigations, provided the culture is async-first.

## Quotes

> "The default state of a project is to fail. Projects only succeed because people drag them kicking and screaming to the finish line." — Sean Goedecke

> "projects ship because one single person has the technical context in their head. They don't ship because teams agree and manage to coordinate." — Sean Goedecke
