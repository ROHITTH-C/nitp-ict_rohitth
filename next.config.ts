import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: "www.nitp.ac.in",
      },
    ],
  },
};

export default nextConfig;
