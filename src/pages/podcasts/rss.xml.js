import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { getPodcastShow } from '../../podcast-shows.mjs';

// Combined feed for all non-AIDB podcast summaries.
export async function GET(context) {
    const episodes = (await getCollection('podcasts'))
        .filter((e) => !e.data.draft)
        .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

    return rss({
        title: 'Podcast episode summaries',
        description: "Divya's summaries of AI podcasts: Practical AI, Latent Space, The Cognitive Revolution, Dwarkesh Podcast, Lex Fridman Podcast, No Priors, Turing Post and Epoch After Hours (Epoch AI).",
        site: context.site || 'https://divyavanmahajan.github.io',
        items: episodes.map((ep) => ({
            title: `${getPodcastShow(ep.data.show)?.name ?? ep.data.show}: ${ep.data.title}`,
            pubDate: ep.data.pubDate,
            description: ep.data.description,
            link: `${import.meta.env.BASE_URL}podcasts/${ep.slug}/`,
            categories: ep.data.tags,
        })),
        customData: `<language>en-us</language>`,
    });
}
