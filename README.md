# loup.foo

[Small personal website](https://loup.foo) built with [Svelte](https://svelte.dev/) and [TailwindCss](https://tailwindcss.com/)

## Setup

Install dependencies with `npm install` (or `pnpm install` or `yarn`)

## Developing

Start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

## Docker

Build with docker via:

```bash
docker build -t loupfoo .
```

Run with docker via:

```bash
docker run -p 8100:8100 loupfoo
```
