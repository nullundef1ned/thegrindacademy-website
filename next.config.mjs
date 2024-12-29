/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "images.unsplash.com",
        protocol: "https",
      },
      {
        hostname: "plus.unsplash.com",
        protocol: "https",
      },
      {
        hostname: "unsplash.com",
        protocol: "https",
      },
      {
        hostname: "autox-test.ams3.cdn.digitaloceanspaces.com",
        protocol: "https",
      },
      {
        hostname: "thegrindacademy.fra1.digitaloceanspaces.com",
        protocol: "https",
      },
    ],
  },
};

export default nextConfig;
