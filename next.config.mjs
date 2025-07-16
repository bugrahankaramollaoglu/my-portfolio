/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  experimental: {
    appDir: true,
  },
  // Specify the source directory
  src: './src',
};

export default nextConfig;
