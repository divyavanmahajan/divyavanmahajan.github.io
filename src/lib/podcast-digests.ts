// Monthly cross-show podcast digests (data from scripts/podcast-digest.mjs).
// Files: src/data/podcast-digests/YYYY-MM.json. See docs/podcasts.md.
import { getCollection } from "astro:content";

export interface DigestEpisode {
  key: string; show: string; showName: string; date: string; slug: string; title: string;
  url: string | null; youtube: string | null; guests: string[]; durationMin: number | null;
  summary: string | null; summarySource: string | null; partial: boolean;
}
export interface DigestTheme { title: string; body: string; eps: string[]; }
export interface Digest {
  period: string; start: string; end: string; inProgress: boolean; generated: string;
  episodeCount: number; counts: Record<string, number>; headline: string | null;
  themes: DigestTheme[]; implications: string[]; episodes: DigestEpisode[];
}

const files = import.meta.glob<Digest>("../data/podcast-digests/*.json", { eager: true, import: "default" });

/** Digests with themes, newest first (months without themes are not published). */
export function getDigests(): Digest[] {
  return Object.values(files)
    .filter((d) => d && d.period && d.headline && d.themes?.length)
    .sort((a, b) => b.period.localeCompare(a.period));
}

export const SHOW_ORDER = ["aidb", "practical-ai", "latent-space", "cognitive-revolution", "dwarkesh", "lex-fridman", "no-priors", "turing-post", "epoch-ai", "pragmatic-engineer", "moonshot", "moonshots-diamandis"];
export const SHOW_SHORT: Record<string, string> = {
  aidb: "AIDB", "practical-ai": "Practical AI", "latent-space": "Latent Space",
  "cognitive-revolution": "Cognitive Rev.", dwarkesh: "Dwarkesh", "lex-fridman": "Lex Fridman", "no-priors": "No Priors", "turing-post": "Turing Post", "epoch-ai": "Epoch AI", "pragmatic-engineer": "Pragmatic Eng.", moonshot: "Moonshot", "moonshots-diamandis": "Moonshots (Diamandis)",
};
const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
export const monthLabel = (p: string) => `${MONTHS[Number(p.slice(5, 7)) - 1]} ${p.slice(0, 4)}`;

/** Map digest episode key -> this site's own summary page (relative to BASE_URL), when published. */
export async function internalLinks(): Promise<Map<string, string>> {
  const map = new Map<string, string>();
  for (const e of await getCollection("podcasts")) {
    if (e.data.draft) continue;
    // e.slug = <show>/YYYY/MM/<rest>
    const [show, y, m, ...rest] = e.slug.split("/");
    const d = e.data.pubDate.toISOString().slice(0, 10);
    map.set(`${show}/${d}-${rest.join("/")}`, `podcasts/${e.slug}/`);
    if (y && m) map.set(`${show}/${d}#${e.data.title}`, `podcasts/${e.slug}/`);
  }
  for (const e of await getCollection("ainews")) {
    if (e.data.draft || e.data.type !== "episode") continue;
    const d = e.data.pubDate.toISOString().slice(0, 10);
    const rest = e.slug.split("/").pop();
    map.set(`aidb/${d}-${rest}`, `podcasts/ai-daily-brief/${e.slug}/`);
    map.set(`aidb/${d}#${e.data.title}`, `podcasts/ai-daily-brief/${e.slug}/`);
  }
  return map;
}

export function internalHref(map: Map<string, string>, ep: DigestEpisode): string | undefined {
  return map.get(ep.key) ?? map.get(`${ep.show}/${ep.date}#${ep.title}`);
}
