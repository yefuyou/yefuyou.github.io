# yefuyou · Portfolio

Software engineer focused on agents. Selected work, engineering decisions and upstream contributions.

Built with Astro and TypeScript. English and Chinese routes, local fonts and static assets.

## Develop

Use Node.js 24.16+.

```sh
npm ci
npm run dev
```

## Verify

```sh
npm run check
npm run lint
npm run build
npm test
```

## GitHub Pages

Repository: `yefuyou/yefuyou.github.io`. Website: https://yefuyou.github.io/

In Settings → Pages, choose GitHub Actions as the publishing source. The Pages workflow checks, builds and deploys pushes to main. The deployed artifact contains only dist/.

For a local production build set `SITE_URL=https://yefuyou.github.io` and `BASE_PATH=/` before running the build. The workflow sets these values from GitHub Pages metadata.

Public profile and contact configuration: `src/data/site.ts`.

Asset provenance and licenses: [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md).
