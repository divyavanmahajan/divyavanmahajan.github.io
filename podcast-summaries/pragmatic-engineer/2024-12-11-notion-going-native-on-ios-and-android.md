---
title: "Notion: going native on iOS and Android"
date: 2024-12-11
show: pragmatic-engineer
url: "https://newsletter.pragmaticengineer.com/p/notion-going-native-on-ios-and-android"
youtube: "https://www.youtube.com/watch?v=Ga7xKYQ41XU"
duration_min: 81
hosts: ["Gergely Orosz"]
guests: ["Austin Louden", "Karn Saheb"]
description: "Notion's small mobile team moved its apps from a Cordova webview wrapper to native code one tab at a time, driven by startup performance, and ships weekly behind feature flags."
tags: ["mobile-engineering", "native-apps", "app-performance", "incremental-migration", "feature-flags"]
source_transcript: "pragmatic-engineer/episodes/2024/12/2024-12-11-notion-going-native-on-ios-and-android.md"
draft: false
---

## Thesis

Austin Louden (iOS, tech lead manager for mobile platform) and Karn Saheb (Android) explain how Notion's 11-engineer mobile team replaced a webview-based app with native code. Their case is that performance, measured as app start time, justified going native, and that a small team could only do it incrementally, starting with the screen users see first and leaving the editor for last.

## Key points

- **Why native.** Louden says the old app loaded the whole web bundle in a WebView, giving launch times of 1.5 to 2 seconds. He argues that competing with fully native apps such as Apple Notes and Google Keep requires native speed, even if React Native suits a company like Coinbase.
- **Incremental, not a rewrite.** The team started with four engineers and rebuilt the home tab first, a project Louden says took about nine months and blocked other mobile work. Search and inbox followed; Saheb says guarding against multi-year rewrites was a deliberate goal. The editor remains web-based.
- **Hard parts of a list.** Saheb describes Notion's flexible, recursive block model and real-time reactivity. Louden adds that even favouriting a page is a transaction written to SQLite and synced later.
- **Stack and structure.** Both apps use SQLite, Swift with SwiftUI and Combine, and Kotlin with Jetpack Compose and flows. Saheb recounts workarounds for early Compose scroll performance. The iOS app has about 100 modules and Android about 50, with clean iOS builds of about 45 seconds.
- **Culture and process.** Louden describes engineer-written RFCs reviewed company-wide, a weekly mobile performance review, and two-week sprint commitments instead of sprint planning. Code reviews aim for roughly a one-day turnaround, with Graphite for stacked PRs.
- **Release cadence.** Builds are cut on Wednesdays and rolled out from 1% on Fridays. There is a nightly public beta, hundreds of feature flags, and four environments: local, dev, staging and production.

## Quotes

> "if we're competing against Apple Notes, we have to be near to as fast as Apple Notes." — Austin Louden

> "Having builds go out nightly gives us smaller diffs that are rolling out and helps us detect issues a bit sooner in the release process." — Karn Saheb
