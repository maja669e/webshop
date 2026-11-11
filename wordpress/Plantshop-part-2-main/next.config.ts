// Cache Components enables the use cache directives in the server data functions.
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    agentFeedback: true,
  },
  cacheComponents: true,
  // The browser loads the WordPress images directly from localhost:8003.
  // That works both with npm run dev and when Next.js runs in Docker.
  images: {
    unoptimized: true,
  },
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
