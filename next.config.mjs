/** @type {import('next').NextConfig} */
import withPlaiceholder from '@plaiceholder/next';

const nextConfig = {
  reactStrictMode: true,
  // images: {
  //   loader: "akamai",
  //   path: "/",
  // },
  images: {
    domains: ['api.noormahalpalace.com'], // Add any other domains you want to allow
    hostname: ['api.noormahalpalace.com'],
  },
};

// https://api.noormahalpalace.com

export default withPlaiceholder(nextConfig);
