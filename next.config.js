/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  reactStrictMode: true,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "drive.google.com",
        pathname: "/**", // added to support all image paths
      },
    ],
    formats: ["image/webp"], // serve WebP when supported
  },
  experimental: {
    serverActions: true, // if using server actions
    appDir: true, // App Router enabled
    mdxRs: true, // if you're using MDX (can be removed otherwise)
  },
};

module.exports = nextConfig;
