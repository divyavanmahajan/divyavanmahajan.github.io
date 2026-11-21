#!/usr/bin/env bash
# publish-ainews.sh — tag, sync, build-check, commit and push AIDB content.
#
# Used by the Hermes skills ai-download and ai-briefing-synthesis after new
# AI Daily Brief notes or syntheses land in ~/projects/volvo/ai-update.
#
#   scripts/publish-ainews.sh "Update AI Daily Brief processing"
#   scripts/publish-ainews.sh --no-push "..."     # commit only
#
# Steps: build-ainews-tags.mjs (topic/company tags from the blog wiki
# extractions) -> sync-ainews.js -> astro build (abort on failure, nothing
# committed) -> commit ONLY src/content/ainews + src/data/ainews-tags.json
# (--no-verify: the pre-commit hook would re-run the sync and `git add`) ->
# git push origin <current branch>. Pushing main deploys the site; on any
# other branch the push only updates that branch (not deployed until merged).
set -euo pipefail
cd "$(dirname "$0")/.."

PUSH=1
if [ "${1:-}" = "--no-push" ]; then PUSH=0; shift; fi
MSG="${1:-Update AI Daily Brief processing}"
PATHS=(src/content/ainews src/data/ainews-tags.json)
BRANCH="$(git branch --show-current)"

echo "[*] branch: $BRANCH"
node scripts/build-ainews-tags.mjs
node scripts/sync-ainews.js
echo "[*] build check..."
if ! npx astro build >/tmp/publish-ainews-build.log 2>&1; then
  echo "[!] astro build failed; nothing committed. See /tmp/publish-ainews-build.log"; tail -20 /tmp/publish-ainews-build.log; exit 1
fi
grep -E "page\(s\) built" /tmp/publish-ainews-build.log | tail -1 || true

git add "${PATHS[@]}"
if git diff --cached --quiet -- "${PATHS[@]}"; then
  echo "[*] nothing new to publish"; exit 0
fi
git commit --no-verify -q -m "$MSG" -- "${PATHS[@]}"
echo "[*] committed $(git rev-parse --short HEAD): $(git show --stat --format= HEAD | tail -1)"

if [ "$PUSH" = 1 ]; then
  git push -q origin "HEAD:$BRANCH"
  echo "[*] pushed $BRANCH to origin"
  if [ "$BRANCH" != "main" ]; then
    echo "[!] $BRANCH is not main: the live site is NOT updated until it is merged into main."
  fi
fi
