// Registry of podcasts published under /podcasts/ (NOT The AI Daily Brief,
// which has its own collection, sync script and routes under /ainews/).
//
// Shared by:
//   - src/content/config.ts      (the `show` enum in the podcasts schema)
//   - src/pages/podcasts/**      (listing, episode, RSS pages)
//   - scripts/sync-podcasts.js   (staging -> src/content/podcasts)
//   - scripts/podcast-pending.js (which episodes still need a summary)
//
// `slug` must equal the show's folder name in the blog wiki repo
// (/Users/divya/projects/wiki/blog/<slug>/episodes/YYYY/MM/*.md) and is used
// as the URL segment: /podcasts/<slug>/.
//
// To add a show: add an entry here, create podcast-summaries/<slug>/, then
// follow scripts/PODCAST_SUMMARY_INSTRUCTIONS.md.

export const podcastShows = [
  {
    slug: 'practical-ai',
    name: 'Practical AI',
    description: 'Making artificial intelligence practical, productive and accessible to everyone.',
    homepage: 'https://practicalai.fm/',
  },
  {
    slug: 'latent-space',
    name: 'Latent Space',
    description: 'The AI engineer podcast: models, agents, infrastructure and the companies building them.',
    homepage: 'https://www.latent.space/podcast',
  },
  {
    slug: 'cognitive-revolution',
    name: 'The Cognitive Revolution',
    description: 'Nathan Labenz interviews builders and researchers at the edge of AI.',
    homepage: 'https://www.cognitiverevolution.ai/',
  },
  {
    slug: 'dwarkesh',
    name: 'Dwarkesh Podcast',
    description: 'Deeply researched interviews on AI, history, science and economics.',
    homepage: 'https://www.dwarkesh.com/podcast',
  },
  {
    slug: 'lex-fridman',
    name: 'Lex Fridman Podcast',
    description: 'Long-form conversations with scientists, engineers, historians, athletes and leaders on AI, science, history and the human condition.',
    homepage: 'https://lexfridman.com/podcast/',
  },
  {
    slug: 'no-priors',
    name: 'No Priors',
    description: 'Sarah Guo and Elad Gil talk to the founders, researchers and executives building AI.',
    homepage: 'https://www.youtube.com/@NoPriorsPodcast',
  },
  {
    slug: 'turing-post',
    name: 'Turing Post',
    description: "Ksenia Se's Inference interviews with AI builders and researchers, plus Attention Span episodes on the week's AI news.",
    homepage: 'https://www.turingpost.com/podcast',
  },
  {
    slug: 'epoch-ai',
    name: 'Epoch After Hours',
    description: "Epoch AI's podcast: its researchers and guests on AI forecasting, scaling, compute, benchmarks and the economics of AGI.",
    homepage: 'https://epoch.ai/epoch-after-hours',
  },
  {
    slug: 'pragmatic-engineer',
    name: 'The Pragmatic Engineer',
    description: 'Gergely Orosz talks with engineers and engineering leaders about how software is built at Big Tech and startups, engineering careers and culture, and AI for software engineering.',
    homepage: 'https://newsletter.pragmaticengineer.com/podcast',
  },
  {
    slug: 'moonshot',
    name: 'The Moonshot Podcast',
    description: "Astro Teller, Captain of Moonshots at X (Alphabet's moonshot factory), goes behind the scenes of its moonshots in self-driving cars, drones, AI, robotics, energy, climate, agriculture and health.",
    homepage: 'https://x.company/moonshotpodcast/',
  },
];

export const podcastShowSlugs = podcastShows.map((s) => s.slug);

export function getPodcastShow(slug) {
  return podcastShows.find((s) => s.slug === slug);
}
