/** @type {import('next').NextConfig} */
import withPlaiceholder from '@plaiceholder/next';

const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'noormahalpalace.com',
        port: '', // Default HTTPS
        pathname: '/files/**', // Adjust based on how images are served
      },
    ],
  },
};

export default withPlaiceholder(nextConfig);
