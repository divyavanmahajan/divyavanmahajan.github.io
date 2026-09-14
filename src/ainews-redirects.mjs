// Permanent redirects for AI news episodes whose slug was truncated to 80
// characters by a bug in the ai-update pipeline (fixed in ai-update 62236ba).
// The notes were renamed to their full slugs, which changes their published
// URL; these entries keep the previously published URLs working.
//
// Do not remove: these URLs were live and may be linked externally.
export const ainewsRedirects = {
  '/ainews/2025/04/mcp-agents-and-what-ai-engineers-are-thinking-about-right-now-feat-sw': '/ainews/2025/04/mcp-agents-and-what-ai-engineers-are-thinking-about-right-now-feat-swyx',
  '/ainews/2025/04/the-7-biggest-mistakes-companies-are-making-with-ai-and-agent-adoptio': '/ainews/2025/04/the-7-biggest-mistakes-companies-are-making-with-ai-and-agent-adoption',
  '/ainews/2025/05/half-of-employees-still-hiding-ai-from-their-bosses-and-its-their-bos': '/ainews/2025/05/half-of-employees-still-hiding-ai-from-their-bosses-and-its-their-bosses-faults',
  '/ainews/2025/07/ai-just-achieved-something-no-one-thought-it-would-until-years-from-n': '/ainews/2025/07/ai-just-achieved-something-no-one-thought-it-would-until-years-from-now',
  '/ainews/2025/10/i-tested-chatgpt-as-my-cofounder-for-a-week-heres-everything-i-learne': '/ainews/2025/10/i-tested-chatgpt-as-my-cofounder-for-a-week-heres-everything-i-learned',
  '/ainews/2025/10/openai-devday-2025-did-openai-just-kill-a-bunch-of-agent-startups-bon': '/ainews/2025/10/openai-devday-2025-did-openai-just-kill-a-bunch-of-agent-startups-bonus-episode',
  '/ainews/2025/11/the-ai-roi-surprise-wharton-finds-75-of-enterprises-seeing-positive-r': '/ainews/2025/11/the-ai-roi-surprise-wharton-finds-75-of-enterprises-seeing-positive-roi-from-ai',
  '/ainews/2026/01/100000-ai-agents-joined-their-own-social-network-today-its-called-mol': '/ainews/2026/01/100000-ai-agents-joined-their-own-social-network-today-its-called-moltbook',
  '/ainews/2026/04/the-masked-medici-how-to-build-a-faceless-youtube-channel-and-compani': '/ainews/2026/04/the-masked-medici-how-to-build-a-faceless-youtube-channel-and-companion-1990s-st',
  '/ainews/2026/08/how-to-decide-what-work-ai-should-do-for-you-the-ai-deputization-audi': '/ainews/2026/08/how-to-decide-what-work-ai-should-do-for-you-the-ai-deputization-audit',
  '/ainews/2026/09/anthropic-researcher-says-ai-has-over-a-10-chance-of-killing-all-huma': '/ainews/2026/09/anthropic-researcher-says-ai-has-over-a-10-chance-of-killing-all-humans',
};
