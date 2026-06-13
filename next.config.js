/** @type {import('next').NextConfig} */
module.exports = (phase) => {
  return {
    reactStrictMode: true,
    distDir: phase === "phase-development-server" ? ".next-dev" : ".next",
  };
};
