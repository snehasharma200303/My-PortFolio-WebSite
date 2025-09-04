/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // 🚨 Warning: this allows production builds even with ESLint errors
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
