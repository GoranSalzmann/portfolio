import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  distDir: "dist",
  compress: true,
  images: {
    unoptimized: true,
  },
  experimental: {
    inlineCss: true,
    optimizePackageImports: ["lucide-react", "gsap"],
  },
};

export default nextConfig;
