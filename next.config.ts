import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable TypeScript support with an optional strict mode
  typescript: {
    ignoreBuildErrors: true,
  },

  // Image optimization settings for external remote images
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.wesleyshirley.com",
        pathname: "/users/assets/images/**",
      },
    ],
    unoptimized: true,
  },

  // Output mode for static export
  output: "export",
};

export default nextConfig;
