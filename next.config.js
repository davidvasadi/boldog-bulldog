/** @type {import('next').NextConfig} */

// GitHub Pages szolgálja az appot a /boldog-bulldog útvonalon, ezért
// production buildnél basePath-et állítunk. Dev alatt gyökérről fut.
const isProd = process.env.NODE_ENV === 'production';
const repo = 'boldog-bulldog';

const nextConfig = {
  output: 'export',
  basePath: isProd ? `/${repo}` : '',
  assetPrefix: isProd ? `/${repo}/` : '',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  // A basePath értékét a klienskódnak is átadjuk (pl. publikus képek elérése).
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? `/${repo}` : '',
  },
};

module.exports = nextConfig;
