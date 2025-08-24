import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      new URL("https://placehold.co/**"),
      new URL("https://s3.openocean.finance/token_logos/logos/**"),
    ],
  },
};

export default nextConfig;
