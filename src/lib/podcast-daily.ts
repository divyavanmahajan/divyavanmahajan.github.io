// Daily cross-show podcast summaries (data from scripts/podcast-daily.mjs).
// Files: src/data/podcast-daily/YYYY-MM-DD.json. See docs/podcasts.md.
import type { DigestEpisode, DigestTheme } from "./podcast-digests";

export interface Daily {
  date: string; month: string; weekday: string; generated: string;
  episodeCount: number; counts: Record<string, number>; headline: string | null;
  themes: DigestTheme[]; whyItMatters: string | null; episodes: DigestEpisode[];
}

const files = import.meta.glob<Daily>("../data/podcast-daily/*.json", { eager: true, import: "default" });

/** Days with written text, newest first (days without themes are not published). */
export function getDailies(): Daily[] {
  return Object.values(files)
    .filter((d) => d && d.date && d.headline && d.themes?.length)
    .sort((a, b) => b.date.localeCompare(a.date));
}

/** "Thursday, November 19, 2026" */
export const dayLabel = (d: string, opts: Intl.DateTimeFormatOptions = { weekday: "long", month: "long", day: "numeric", year: "numeric" }) =>
  new Date(d + "T00:00:00Z").toLocaleDateString("en-us", { ...opts, timeZone: "UTC" });
/** "Nov 19" */
export const dayShort = (d: string) => dayLabel(d, { month: "short", day: "numeric" });
