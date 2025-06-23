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
};

module.exports = nextConfig;
