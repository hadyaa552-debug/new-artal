import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.artalegypt.com",
      },
    ],
  },
};

export default nextConfig;
