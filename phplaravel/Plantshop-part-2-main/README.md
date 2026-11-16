# SPIRE — Part 2

A plant shop built with Next.js App Router. Products are fetched from our Laravel REST API.

## Getting Started

Use Node.js 24 LTS and install dependencies:

```bash
npm ci
```

Create `.env.local` in the project root and add the URL of the Laravel API:

```env
LARAVEL_API_URL=http://127.0.0.1:8000/api
```

The Laravel API must be running first. See `../README.md`.

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

Set `LARAVEL_API_URL` in GitHub Actions secrets and Vercel environment variables.
