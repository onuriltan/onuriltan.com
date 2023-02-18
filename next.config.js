/** @type {import('next').NextConfig} */

const isGithubActions = process.env.GITHUB_ACTIONS || false;

if (isGithubActions) {
  module.exports = {
    reactStrictMode: true,
    images: {
      loader: "akamai",
      path: "",
    },
  };
} else {
  module.exports = {
    reactStrictMode: true,
  };
}
