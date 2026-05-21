import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pub-45b1ede9206c440ca72dbf314b9c1ffb.r2.dev",
      },
    ],
  },
};

export default nextConfig;
