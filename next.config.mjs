/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "images.unsplash.com",
        protocol: "https",
      },
      {
        protocol: "https",
        hostname: "thegrindacademy.fra1.cdn.digitaloceanspaces.com",
      },
      {
        protocol: "https",
        hostname: "thegrindacademy.fra1.digitaloceanspaces.com",
      },
    ],
  },
};

export default nextConfig;
