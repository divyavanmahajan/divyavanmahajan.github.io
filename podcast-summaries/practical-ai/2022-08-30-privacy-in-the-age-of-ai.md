---
title: "Privacy in the age of AI"
date: 2022-08-30
show: practical-ai
episode: 191
url: "https://share.transistor.fm/s/893e6ec0"
duration_min: 43
hosts: ["Chris Benson", "Daniel Whitenack"]
guests: []
description: "Because the public rarely understands what its data reveals, AI practitioners must minimise, de-identify and randomise data themselves rather than relying on consent forms or weak laws."
tags: ["data-privacy", "de-identification", "differential-privacy", "edge-computing", "responsible-ai"]
source_transcript: "practical-ai/episodes/2022/08/2022-08-30-privacy-in-the-age-of-ai.md"
draft: false
---

## Thesis

Daniel Whitenack and Chris Benson argue that the burden of protecting privacy has shifted to data scientists. Users cannot judge how their data might be combined or reused, and laws lag behind. Practitioners should therefore justify every piece of data they collect and build privacy protections into their tools.

## Key points

- **From "collect everything" to data minimisation.** Whitenack recalls the early data science view that you should store all data in case you need it. He cites the term data minimisation from Google's responsible AI practices. Benson says practitioners now have to justify what they collect and why.
- **Models can leak data.** Whitenack recalls a talk by a former Immuta employee showing that a face could be reconstructed from the parameters of a large facial recognition model. He adds that the push to put every dataset and model on the Hugging Face Hub may bring privacy as well as bias concerns.
- **De-identification.** Drawing on an Immuta blog post, Whitenack lists identifiers beyond names and phone numbers, such as device serial numbers, MAC addresses and URLs with tracking parameters. He describes replacing names found by named entity recognition with pseudonyms, using tools such as Scrubadub. Benson warns that removing too much can make a model useless.
- **Users can't see the risk.** Whitenack retells a Darknet Diaries story: a booking ID from the Australian prime minister's boarding pass photo gave access to his Qantas account, and the page source exposed his passport number. Benson adds that combining harmless-looking data sources can compromise privacy.
- **Edge processing and randomisation.** Whitenack suggests running models on devices and sending back only metadata, with randomised timestamps, and mentions differential privacy and federated learning.
- **Good actors aren't enough.** Benson notes that in Georgia only one party needs to know a call is being recorded, so laws do not enforce these practices. Whitenack argues that tool builders should make misuse hard, for example by not supporting raw audio upload at all.

## Quotes

> "Only intelligence agencies these days collect absolutely everything, you know, the way the world works now." — Chris Benson

> "I also think that the general public doesn't understand the implications of some of the data that they might give you." — Daniel Whitenack
