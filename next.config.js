/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "images.unsplash.com",
        protocol: "https",
      },
      {
        hostname: "directus-production-8653.up.railway.app",
        protocol: "https",
      },
    ],
  },
};

module.exports = nextConfig;
