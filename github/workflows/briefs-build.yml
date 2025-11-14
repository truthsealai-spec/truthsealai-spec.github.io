name: Build Public Briefs

on:
  push:
    paths:
      - 'docs/briefs/*.md'
      - 'scripts/build-briefs.mjs'
      - '.github/workflows/briefs-build.yml'

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
        with:
          token: ${{ secrets.GITHUB_TOKEN }}
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
      - name: Install converter
        run: |
          npm init -y >/dev/null 2>&1 || true
          npm install marked@12 --no-audit --no-fund
      - name: Convert briefs (MD → HTML)
        run: node scripts/build-briefs.mjs
      - name: Commit generated HTML
        run: |
          git config user.name "site-bot"
          git config user.email "bot@users.noreply.github.com"
          git add docs/briefs/*.html
          git commit -m "docs/briefs: rebuild public briefs (auto)" || echo "no changes"
          git push
