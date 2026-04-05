import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Evita che la build fallisca per errori TypeScript
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
