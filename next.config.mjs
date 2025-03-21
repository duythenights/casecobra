/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.ufs.sh", // Allows all subdomains of ufs.sh
      },
    ],
  },
};

export default nextConfig;
