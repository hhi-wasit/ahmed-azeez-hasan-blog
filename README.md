# Ahmed Azeez Hasan — Public Health & Epidemiology

This repository contains a static, responsive research portfolio and academic blog for **Ahmed Azeez Hasan**, an epidemiologist, public-health practitioner, and lecturer. The site was rebuilt from the supplied former GitHub Pages source and personalised using the supplied curriculum vitae. All visual assets are bundled under `client/public/images` so this export can be published independently of the development environment.

## Local development

Install the project dependencies and start the development server:

```bash
pnpm install
pnpm dev
```

Build a production-ready static version with:

```bash
pnpm build
```

The resulting static site is written to `dist/public`.

## Publishing to GitHub Pages

This project includes a GitHub Actions workflow at `.github/workflows/deploy-pages.yml`. After placing the repository on GitHub, open **Settings → Pages**, choose **GitHub Actions** as the source, and push to `main`. The workflow will build the site and publish the static output.

> If you rename the repository, update the repository segment in `vite.config.ts` so the GitHub Pages asset paths remain correct.

## Content maintenance

The website copy is currently contained in `client/src/pages/Home.tsx`. Update the `publications`, `researchAreas`, and `milestones` arrays to keep the profile current. The visual design system is documented in `ideas.md`.

## Content sources

Biographical, employment, education, and publication information in this build was adapted from the curriculum vitae supplied by Ahmed Azeez Hasan. The Word instruction file supplied with the brief was empty and therefore could not be used as a source of additional requirements.
