import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.artalegypt.com",
      },
      {
        protocol: "https",
        hostname: "artaldevelopments-platonewcapital.com",
      },
    ],
  },
};

export default nextConfig;
