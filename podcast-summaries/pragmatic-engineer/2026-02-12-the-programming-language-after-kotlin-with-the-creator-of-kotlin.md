---
title: "The programming language after Kotlin – with the creator of Kotlin"
date: 2026-02-12
show: pragmatic-engineer
url: "https://newsletter.pragmaticengineer.com/p/the-programming-language-after-kotlin"
youtube: "https://www.youtube.com/watch?v=ZggUn2mNqMU"
duration_min: 104
hosts: ["Gergely Orosz"]
guests: ["Andrey Breslav"]
description: "Andrey Breslav recounts how Kotlin was designed as a pragmatic, Java-interoperable language and argues that CodeSpeak, an English-based language, can keep human intent at the centre of AI-assisted development."
tags: ["kotlin", "programming-languages", "language-design", "ai-coding", "developer-tools"]
source_transcript: "pragmatic-engineer/episodes/2026/02/2026-02-12-the-programming-language-after-kotlin-with-the-creator-of-kotlin.md"
draft: false
---

## Thesis

Andrey Breslav, who led Kotlin's design at JetBrains, argues that Kotlin succeeded by borrowing proven ideas rather than inventing new ones, and by investing heavily in seamless Java interoperability. He now sees LLMs as a chance to raise abstraction again: his new language, CodeSpeak, aims to let engineers express intent in English while humans stay in charge of complex systems.

## Key points

- **Born from a stagnant Java.** Breslav says that by 2010 the last major Java release was Java 5 from 2004, while C# already had lambdas and properties. JetBrains saw Groovy as too dynamic and Scala as too complex and hard to build tools for, leaving room for a static, pragmatic language.
- **Shoulders of giants.** Kotlin took primary constructors and data classes from Scala, extensions and a generics parsing trick from C#, typed builders from Groovy and smart casts from Gosu. Breslav calls dropping the ternary operator his saddest design mistake, because it cannot be added back to the syntax.
- **Interop was the biggest job.** Calling Java from Kotlin and Kotlin from Java took more effort than any other feature. Treating every Java type as nullable produced code full of null checks, so the team, with help from Ross Tate, designed a split "platform" type that is not sound but works in practice.
- **Slow road, sudden platform.** Development began in autumn 2010 with mostly fresh graduates; 1.0 shipped in February 2016 after 13 milestone builds. Google's announcement of official Android support at Google I/O 2017 took usage from tens of thousands of users into the millions.
- **CodeSpeak and the intent gap.** Breslav estimates much application code can shrink about 10x when written as English descriptions. He argues that chatting with agents loses intent, since teammates only see the generated code, and expects better testing, review tools and agent-first IDEs.
- **Advice.** He calls cutting junior hiring "dumb" and urges sceptics to learn AI tools, since prompting can be learned.

## Quotes

> "Yeah, so it turns out I'm talking to a machine in a human language. But the way I communicate with my team is the machine language. That's kind of backwards." — Andrey Breslav

> "humans will be as smart or as dumb as they are today. And if we have incredibly smart models, what we will be doing is constrained by how humans are." — Andrey Breslav
