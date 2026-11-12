# SPIRE — Part 2

A plant shop rebuilt with Next.js App Router.

## Getting Started

Use Node.js 24 LTS and install dependencies:

```bash
npm ci
```

Copy `.env.example` to `.env.local`. It points to our WordPress API:

```env
WORDPRESS_API_URL=http://localhost:8003/wp-json/wp/v2
```

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Checks

```bash
npm run lint
npm run build
```

## Deployment

[View SPIRE](https://plantshop-part-2.vercel.app/)

GitHub Actions runs lint and build on pushes and pull requests to `main`.
Vercel automatically deploys pushes to `main`.
