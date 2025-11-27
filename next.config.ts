import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/graphql', // rotta che chiami dal frontend
        destination: 'http://91.98.195.174:8000/graphql', // backend Lighthouse
      },
    ];
  },
};

export default nextConfig;
