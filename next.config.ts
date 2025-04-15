import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/kevinmhkim",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
