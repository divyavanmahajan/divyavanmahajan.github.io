import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { getPodcastShow } from '../../podcast-shows.mjs';
import { getDailies, dayLabel } from '../../lib/podcast-daily';

// Combined feed for all non-AIDB podcast summaries, plus the daily cross-show summaries
// (/podcasts/daily/, which cover AIDB too).
export async function GET(context) {
    const episodes = (await getCollection('podcasts'))
        .filter((e) => !e.data.draft)
        .map((ep) => ({
            title: `${getPodcastShow(ep.data.show)?.name ?? ep.data.show}: ${ep.data.title}`,
            pubDate: ep.data.pubDate,
            description: ep.data.description,
            link: `${import.meta.env.BASE_URL}podcasts/${ep.slug}/`,
            categories: ep.data.tags,
        }));
    const daily = getDailies().map((d) => ({
        title: `Podcast daily: ${dayLabel(d.date)}`,
        pubDate: new Date(d.date + 'T21:00:00Z'),
        description: d.headline,
        link: `${import.meta.env.BASE_URL}podcasts/daily/${d.date}/`,
        categories: ['daily-summary'],
    }));

    return rss({
        title: 'Podcast episode summaries',
        description: "Divya's summaries of AI podcasts: Practical AI, Latent Space, The Cognitive Revolution, Dwarkesh Podcast, Lex Fridman Podcast, No Priors, Turing Post, Epoch After Hours (Epoch AI), The Pragmatic Engineer, The Moonshot Podcast (X, the moonshot factory) and Moonshots with Peter Diamandis, plus a daily summary across all shows including The AI Daily Brief.",
        site: context.site || 'https://divyavanmahajan.github.io',
        items: [...episodes, ...daily].sort((a, b) => b.pubDate.valueOf() - a.pubDate.valueOf()),
        customData: `<language>en-us</language>`,
    });
}
