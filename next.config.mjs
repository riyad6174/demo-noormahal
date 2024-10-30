/** @type {import('next').NextConfig} */
import withPlaiceholder from '@plaiceholder/next';

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['api.noormahalpalace.com'], // List any other domains that host your images
  },
};

export default withPlaiceholder(nextConfig);
