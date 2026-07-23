import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  transpilePackages: ["@fft/db", "@fft/schema"],
  // monorepo: allow importing from packages
  outputFileTracingRoot: path.join(__dirname, "../.."),
};

export default nextConfig;
