/** @type {import('next').NextConfig} */
const nextConfig = {
  publicRuntimeConfig: {
    backendURL: process.env.NEXT_PUBLIC_BACKEND_URL,
  },

  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
