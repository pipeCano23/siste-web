import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 's3-hackaton-eia-siste.s3.us-east-2.amazonaws.com',
      },
      {
        hostname: "www.ikea.com"
      }
    ],
  },
};

export default nextConfig;
