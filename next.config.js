/** @type {import('next').NextConfig} */

const env = process.env.APP_ENV || false;

if (env === "development") {
  module.exports = {
    reactStrictMode: true,
  };
} else {
  module.exports = {
    reactStrictMode: true,
    images: {
      loader: "akamai",
      path: "",
    },
  };
}
