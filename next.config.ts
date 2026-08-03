import { withContentCollections } from '@content-collections/next';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // The site is deployed to Azure Static Web Apps, which serves pre-rendered
  // files only. Every route must therefore be known at build time.
  output: 'export',
  trailingSlash: true,
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
};

export default withContentCollections(nextConfig);
