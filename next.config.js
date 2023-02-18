/** @type {import('next').NextConfig} */

const env = process.env.APP_ENV;

if (env === "development") {
  module.exports = {
    reactStrictMode: true,
  };
} else {
  module.exports = {
    reactStrictMode: true,
    images: {
      loader: "akamai",
      path: "/",
    },
  };
}
