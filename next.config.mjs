/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'react-interview.1putym.easypanel.host' },
    ],
  },
};

export default nextConfig;
