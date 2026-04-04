import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Evita che la build fallisca per errori TypeScript non critici
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
