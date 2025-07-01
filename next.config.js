/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { 
    unoptimized: true
  },
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  experimental: {
    esmExternals: false
  }
};

module.exports = nextConfig;