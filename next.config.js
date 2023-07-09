/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  // images: {
  //   loader: "akamai",
  //   path: "/",
  // },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "drive.google.com",
      },
    ],
    domains: ["drive.google.com"],
  },
};
