---
title: Helping African farmers with TensorFlow
description: >-
  Penn State's PlantVillage team put an offline TensorFlow object-detection
  model on Android phones so cassava farmers and extension officers in Tanzania
  can spot crop disease without an expert.
pubDate: '2018-07-02'
show: practical-ai
episode: 3
url: 'https://share.transistor.fm/s/88bfc628'
durationMin: 43
hosts:
  - Chris Benson
  - Daniel Whitenack
guests:
  - Amanda Ramcharan
  - Latifa Mrisho
  - Peter McCloskey
tags:
  - computer-vision
  - agriculture
  - mobile-ml
  - transfer-learning
  - ai-for-good
draft: false
---
## Thesis

Amanda Ramcharan, Peter McCloskey and Latifa Mrisho argue that a small, expert-labelled dataset and an offline phone model can bring plant-disease diagnosis to cassava farmers who have no access to specialists. They present the Nuru app as a tool that augments and teaches extension workers and farmers rather than replacing them.

## Key points

- **The problem.** Mrisho explains that cassava mosaic disease stunts plants and brown streak disease rots the roots, and that symptoms are often hard to see until harvest, when a farmer can lose the whole crop.
- **Data was the hardest part.** McCloskey says collection took about two years of field trips in Tanzania, photographing leaves with experts from IITA (International Institute of Tropical Agriculture) labelling on the spot. Of 10,000-15,000 images, only about 2,200-2,500 were high-quality enough to train on, because no public plant-disease datasets existed.
- **Classification to object detection.** Ramcharan says early Inception v4 classification models overheated phones, slowed inference and drained batteries. Switching to MobileNet with transfer learning and object detection fixed this, and the bounding boxes also show users what the model is looking at.
- **Conservative by design.** The app runs on Android 5.0 and above. Ramcharan says the team prefers false negatives to false positives, and McCloskey wants the model to say it is not confident rather than misdiagnose.
- **Rollout through extension officers.** Mrisho says the beta targets agricultural extension officers, each of whom reaches 10-50 farmers, because many farmers cannot yet afford smartphones. In her study, experts and officers varied widely in how well they recognised the diseases.
- **Google and next steps.** The project was featured by Jeff Dean at TensorFlow Dev Summit, and Google engineers including Pete Warden mentor the team. Ramcharan plans to extend the approach to wheat, corn and potato and to publish field metrics, while the model and weights will be openly available.

## Quotes

> "we actually can't build these models without the human experts there to tell us what type of data to collect and how the model should perform." — Amanda Ramcharan

> "instead of saying the wrong thing, it will just say, I don't know, or I'm not confident enough to make a diagnosis." — Peter McCloskey
