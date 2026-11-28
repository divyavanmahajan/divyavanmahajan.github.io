import rss from '@astrojs/rss';
import { getDailies, dayLabel } from '../../../lib/podcast-daily';

// Feed of the daily cross-show summaries (also merged into /podcasts/rss.xml).
export async function GET(context) {
    return rss({
        title: 'Podcast daily: cross-show AI podcast summaries',
        description: "Divya's daily summary across the AI podcasts he follows (The AI Daily Brief and the shows under /podcasts/): what mattered that day, themes and every episode.",
        site: context.site || 'https://divyavanmahajan.github.io',
        items: getDailies().map((d) => ({
            title: `Podcast daily: ${dayLabel(d.date)}`,
            pubDate: new Date(d.date + 'T21:00:00Z'),
            description: d.headline,
            link: `${import.meta.env.BASE_URL}podcasts/daily/${d.date}/`,
        })),
        customData: `<language>en-us</language>`,
    });
}
