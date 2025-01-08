/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
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
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
};

export default nextConfig;
