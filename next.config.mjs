/** @type {import('next').NextConfig} */
import withPlaiceholder from '@plaiceholder/next';

const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.noormahalpalace.com',
        port: '', // Leave empty for default HTTPS port (443)
        pathname: '/**', // Allow all paths; adjust to '/images/' if images are under a specific path
      },
    ],
  },
};

export default withPlaiceholder(nextConfig);
