import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    serverActions: {
      bodySizeLimit: "100MB",
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.freepik.com",
      },
      {
        protocol: "https",
        hostname: "cloud.appwrite.io",
      }, 
      {
        protocol: "https",
        hostname: "*.vecteezy.com",
      },
      {
        protocol: "https",
        hostname: "*.google.com",
      },
    ],
  },
};

export default nextConfig;
